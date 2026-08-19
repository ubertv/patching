// The validation rules live in two tracked places: test/validate.mjs, which a
// pull request runs, and the inline copy in modules.html, which a contributor
// sees while typing. Duplication is deliberate (every page stands alone off the
// filesystem); silent drift between the copies is the failure this test exists
// to catch. It runs one fixture set through both and diffs the results.
//
//   node test/rules-drift.mjs

import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";
import { checkModules } from "./validate.mjs";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");

// Every rule appears at least once, as an error, a warning, or a deliberate
// non-issue that a wrong implementation would flag.
const FIXTURES = [
  { id: "ok", name: "Fine", mfr: "X", hp: 8, tags: ["vco"],
    jacks: [{ id: "in", label: "IN", dir: "in", sig: "audio" },
            { id: "out", label: "OUT", dir: "out", sig: "audio", x: 0.5, y: 0.5 }] },
  { id: "Bad Id", name: "A", mfr: "X", tags: ["vco"],
    jacks: [{ id: "out", label: "OUT", dir: "out", sig: "cv" }] },
  { id: "dup", name: "B", mfr: "X", tags: ["vco"],
    jacks: [{ id: "o", label: "O", dir: "out", sig: "cv" }] },
  { id: "dup", name: "B again", mfr: "X", tags: ["vco"],
    jacks: [{ id: "o", label: "O", dir: "out", sig: "cv" }] },
  { id: "noname", mfr: "X", tags: ["vco"],
    jacks: [{ id: "o", label: "O", dir: "out", sig: "cv" }] },
  { id: "badhp", name: "C", mfr: "X", hp: -4, tags: ["vco"],
    jacks: [{ id: "o", label: "O", dir: "out", sig: "cv" }] },
  { id: "notags", name: "D", mfr: "X",
    jacks: [{ id: "o", label: "O", dir: "out", sig: "cv" }] },
  { id: "emptytag", name: "E", mfr: "X", tags: ["vco", " "],
    jacks: [{ id: "o", label: "O", dir: "out", sig: "cv" }] },
  { id: "genmfr", name: "F", mfr: "X", generic: true, tags: ["vco"],
    jacks: [{ id: "o", label: "O", dir: "out", sig: "cv" }] },
  { id: "nomfr", name: "G", tags: ["vco"],
    jacks: [{ id: "o", label: "O", dir: "out", sig: "cv" }] },
  { id: "jackmess", name: "H", mfr: "X", tags: ["vco"],
    jacks: [
      { id: "a", label: "A", dir: "sideways", sig: "cv" },
      { id: "a", label: "A2", dir: "in", sig: "nonsense" },
      { id: "b", dir: "in", sig: "cv" },
      { id: "c", label: "C", dir: "in", sig: "cv", x: 1.5, y: 0.5 },
      { id: "d", label: "D", dir: "in", sig: "cv", x: 0.2 },
      { id: "e", label: "SAME", dir: "in", sig: "cv" },
      { id: "f", label: "SAME", dir: "in", sig: "cv" },
      { id: "g", label: "SAME", dir: "out", sig: "cv" },
      { id: "h", label: "H", dir: "in", sig: "cv", normalled: "  " },
      { label: "noid", dir: "in", sig: "cv" }] },
  { id: "allin", name: "I", mfr: "X", tags: ["filter"],
    jacks: [{ id: "in", label: "IN", dir: "in", sig: "audio" }] },
  { id: "sink", name: "Out", mfr: "X", tags: ["output"],
    jacks: [{ id: "in", label: "IN", dir: "in", sig: "audio" }] },
  { id: "expander", name: "Exp", mfr: "X", tags: ["expander"],
    jacks: [{ id: "cv", label: "CV", dir: "in", sig: "cv" }] },
  { id: "nojacks", name: "J", mfr: "X", tags: ["vco"], jacks: [] },
];

// Normalise both outputs to comparable lines. The node validator reports
// {level, where, msg}; the page reports {level, id, jack, msg}.
const norm = (issues, shape) =>
  issues.map((i) => {
    const where = shape === "node" ? i.where : i.id + (i.jack ? ":" + i.jack : "");
    return `${i.level}  ${where}  ${i.msg}`;
  }).sort();

// The page's copy, run in a stubbed DOM. Same unwrap-and-run approach as
// guide-test.mjs; only validateLibrary is called afterwards.
function pageValidator() {
  const html = readFileSync(join(repo, "modules.html"), "utf8");
  const blocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  let code = blocks[blocks.length - 1];
  const open = /^\s*\(function\(\)\{\s*"use strict";/;
  const close = /\}\)\(\);\s*$/;
  if (!open.test(code) || !close.test(code))
    throw new Error("modules.html's IIFE wrapper has changed shape. Update rules-drift.mjs.");
  code = code.replace(open, '"use strict";').replace(close, "");

  const node = () => new Proxy(
    { style: {}, dataset: {}, value: "", innerHTML: "", textContent: "" },
    { get(t, k) {
        if (k in t) return t[k];
        if (k === "classList") return { add() {}, remove() {}, toggle() {}, contains: () => false };
        if (k === "querySelectorAll") return () => [];
        if (k === "firstChild" || k === "closest") return null;
        if (k === "getBoundingClientRect") return () => ({ top: 0, left: 0, width: 900, height: 600 });
        return () => undefined;
      }, set(t, k, v) { t[k] = v; return true; } });
  const cache = new Map();
  const el = (id) => { if (!cache.has(id)) cache.set(id, node()); return cache.get(id); };
  const ctx = {
    console,
    document: { getElementById: el, createElement: node, createElementNS: node,
      querySelector: node, querySelectorAll: () => [], addEventListener() {}, body: node(),
      documentElement: { getAttribute: () => "light", setAttribute() {}, style: {} },
      createTextNode: node },
    localStorage: { _d: {}, getItem(k) { return this._d[k] ?? null; },
      setItem(k, v) { this._d[k] = v; }, removeItem(k) { delete this._d[k]; } },
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    setTimeout: (f) => { try { f(); } catch {} return 0; }, clearTimeout() {},
    requestAnimationFrame: (f) => { try { f(); } catch {} return 0; },
    Blob: class {}, URL: { createObjectURL: () => "blob:x", revokeObjectURL() {} },
    alert() {}, confirm: () => false, prompt: () => null,
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(readFileSync(join(repo, "lib/library.js"), "utf8"), ctx);
  vm.runInContext(code, ctx);
  if (typeof ctx.validateLibrary !== "function")
    throw new Error("modules.html no longer exposes validateLibrary.");
  return ctx.validateLibrary;
}

const a = norm(checkModules(FIXTURES, "this library"), "node");
const b = norm(pageValidator()(FIXTURES), "page");

let fails = 0;
const missing = a.filter((x) => !b.includes(x));
const extra = b.filter((x) => !a.includes(x));
if (missing.length || extra.length) {
  fails = 1;
  for (const x of missing) console.log("  only in test/validate.mjs   " + x);
  for (const x of extra) console.log("  only in modules.html         " + x);
}
console.log(`${a.length} issues from the node validator, ${b.length} from modules.html` +
  (fails ? "" : ", identical"));
if (a.length < 15) { console.log("fixture set looks too thin to trust"); fails = 1; }
process.exit(fails);
