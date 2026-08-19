// Runs index.html's own script in a stubbed DOM and checks the patch guide
// against the six shipped examples.
//
//   node workbench/guide-test.mjs           pass/fail
//   node workbench/guide-test.mjs --print   also print every guide
//
// It exercises the real parser and the real generator rather than a copy, so a
// change to either is covered. It does not test the pane, the print stylesheet
// or the clipboard, which need a browser.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(join(repo, "index.html"), "utf8");
const blocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);

// Enough DOM for the page to boot. Everything is a Proxy that swallows property
// access, which is fine here: we only call pure functions afterwards, and any
// real breakage still surfaces as a thrown exception during boot.
const node = () => {
  const self = new Proxy(
    { style: {}, dataset: {}, children: [], value: "", textContent: "", innerHTML: "" },
    {
      get(t, k) {
        if (k in t) return t[k];
        if (["addEventListener", "removeEventListener", "appendChild", "removeChild",
             "setAttribute", "removeAttribute", "insertBefore", "focus", "click",
             "blur", "scrollIntoView", "getBoundingClientRect", "closest",
             "querySelector", "replaceChildren"].includes(k)) {
          return k === "getBoundingClientRect"
            ? () => ({ top: 0, left: 0, width: 900, height: 600, right: 900, bottom: 600 })
            : () => (k === "appendChild" || k === "closest" ? null : undefined);
        }
        if (k === "querySelectorAll") return () => [];
        if (k === "classList") return { add() {}, remove() {}, toggle() {}, contains: () => false };
        if (k === "firstChild") return null;
        if (k === "parentNode") return self;
        return undefined;
      },
      set(t, k, v) { t[k] = v; return true; },
    }
  );
  return self;
};

// Elements are cached by id. build() reads the source straight out of the
// textarea rather than off `parsed`, so a fresh stub per call would make it
// untestable.
const byId = new Map();
const el = (id) => { if (!byId.has(id)) byId.set(id, node()); return byId.get(id); };

const ctx = {
  console,
  document: {
    getElementById: el, createElement: node, createElementNS: node,
    querySelector: node, querySelectorAll: () => [],
    addEventListener() {}, body: node(),
    documentElement: { getAttribute: () => "light", setAttribute() {}, style: {} },
    createTextNode: node,
  },
  localStorage: {
    _d: {}, getItem(k) { return this._d[k] ?? null; },
    setItem(k, v) { this._d[k] = String(v); }, removeItem(k) { delete this._d[k]; },
  },
  matchMedia: () => ({ matches: false, addEventListener() {} }),
  setTimeout: (fn) => { try { fn(); } catch {} return 0; },
  clearTimeout() {}, requestAnimationFrame: (fn) => { try { fn(); } catch {} return 0; },
  Blob: class { constructor() {} }, URL: { createObjectURL: () => "blob:x", revokeObjectURL() {} },
  navigator: { clipboard: { writeText: async () => {} } },
  alert() {}, confirm: () => false, prompt: () => null,
  XMLSerializer: class { serializeToString() { return ""; } },
};
ctx.window = ctx;
ctx.self = ctx;
vm.createContext(ctx);

for (const f of ["lib/library.js", "examples/examples.js"])
  vm.runInContext(readFileSync(join(repo, f), "utf8"), ctx);

// The page wraps everything in an IIFE, which is right for a page and useless
// for a test. Unwrap it so the declarations land in the context where we can
// call them. Deliberately strict about the shape: if the wrapper ever changes,
// this should fail loudly rather than test nothing.
let code = blocks[blocks.length - 1];
const open = /^\s*\(function\(\)\{\s*"use strict";/;
const close = /\}\)\(\);\s*$/;
if (!open.test(code) || !close.test(code))
  throw new Error("index.html's IIFE wrapper has changed shape. Update guide-test.mjs.");
code = code.replace(open, '"use strict";').replace(close, "");

vm.runInContext(code, ctx);

let fails = 0;
const ok = (name, cond, got) => {
  if (cond) console.log("  pass  " + name);
  else { console.log("  FAIL  " + name + (got !== undefined ? "  got " + JSON.stringify(got) : "")); fails++; }
};

const examples = ctx.PATCH_EXAMPLES || [];
ok("six examples loaded", examples.length === 6, examples.length);
ok("buildGuide is reachable", typeof ctx.buildGuide === "function");

const show = process.argv.includes("--print");

for (const ex of examples) {
  console.log("\n" + ex.name);
  ctx.patch = { name: ex.name, src: ex.src, notes: ex.notes || "", pos: {} };
  ctx.parsed = ctx.parse(ex.src);
  const g = ctx.buildGuide();
  const md = ctx.guideMarkdown();

  const cables = ctx.parsed.cables.length;
  ok("every cable becomes exactly one step", g.count === cables, [g.count, cables]);
  ok("steps are numbered 1..n with no gaps",
     g.groups.flatMap((x) => x.steps).map((s) => s.n).join() ===
     Array.from({ length: cables }, (_, i) => i + 1).join());

  // Section order must match the order the sections appear in the source.
  const srcOrder = [...new Set(ctx.parsed.cables.map((c) => c.voice || ""))];
  ok("section order follows the source",
     g.groups.map((x) => x.name).join("|") === srcOrder.join("|"),
     [g.groups.map((x) => x.name), srcOrder]);

  // The whole point of the guide. Asserted positively: every cable must appear
  // as its panel names. A negative regex over ids gives false positives, because
  // "Clock divider" legitimately contains the id "divider".
  const missing = [];
  for (const c of ctx.parsed.cables) {
    for (const e of [c.from, c.to]) {
      const want = ctx.guideModName(e.mod, e.inst) + " **" + ctx.guideJackName(e.mod, e.jack) + "**";
      if (!md.includes(want)) missing.push(want);
    }
  }
  ok("every cable end appears as module name plus jack label", !missing.length, missing.slice(0, 3));

  // And nothing should still be written in source shorthand. Both sides must
  // start with a letter, or parameter values like "3:8" and "4:1" read as ids.
  // Code spans are exempt: an unresolvable disabled cable in the Not patched
  // list is deliberately shown as written.
  const shorthand = md.replace(/`[^`]*`/g, "").match(/\b[a-z][a-z0-9-]*(?:#[a-z0-9-]+)?:[a-z][a-z0-9-]*/g) || [];
  ok("no source shorthand survives", !shorthand.length, shorthand.slice(0, 3));

  // Parameter blocks must all be accounted for, none dropped or duplicated.
  const declared = Object.keys(ctx.parsed.params).filter((k) => ctx.parsed.params[k].length).length;
  const hoisted = g.groups.reduce((a, x) => a + x.setup.length, 0);
  ok("every parameter block is hoisted once", hoisted === declared, [hoisted, declared]);

  ok("markdown is non-empty and titled", md.startsWith("# " + ex.name));

  if (show) console.log("\n" + md.split("\n").map((l) => "    " + l).join("\n"));
}

// Chains must expand: one written line, one step per cable.
console.log("\nchain expansion");
ctx.patch = { name: "Chain", src: "", notes: "", pos: {} };
ctx.parsed = ctx.parse("vco:saw -> vcf:in -> vca:in -> out:in-l");
ok("a three-hop chain gives three steps", ctx.buildGuide().count === 3, ctx.buildGuide().count);

// The Notes box is prose about the whole patch and belongs at the top. Comments
// are stripped by the parser before anything downstream sees them, so a
// commented-out cable cannot reach the guide as an instruction.
console.log("\nnotes and comments");
const demo = [
  "// Built for the small case. Keep the reverb subtle.",
  "",
  "seq:cv p> vco:voct",
  "// vco:sub -> mixer:in-2",
  "vco:saw -> vcf:in \"the bright one\"",
  "vcf:lp -> out:in-l",
].join("\n");
ctx.patch = { name: "Notes demo", src: demo, notes: "Recorded 16 August.", pos: {} };
ctx.parsed = ctx.parse(demo);
const demoMd = ctx.guideMarkdown();
ok("the commented-out cable is not parsed", ctx.parsed.cables.length === 3, ctx.parsed.cables.length);
ok("the Notes box appears at the top", /^# Notes demo\n\n.*\n\nRecorded 16 August\./s.test(demoMd), demoMd.split("\n").slice(0, 5));
ok("a quoted cable note appears under its step", demoMd.includes("the bright one"));
ok("the leading comment block joins the preamble",
   demoMd.indexOf("small case") > -1 && demoMd.indexOf("small case") < demoMd.indexOf("1. "),
   demoMd.indexOf("small case"));
ok("the disabled cable is not a step", !/^\d+\..*SUB/m.test(demoMd));
ok("it is listed under Not patched, resolved to panel names",
   /## Not patched[\s\S]*VCO \*\*SUB\*\*/.test(demoMd), demoMd.split("## Not patched")[1]);

// A prose comment above a cable becomes that step's annotation; an arrow
// comment naming modules that do not resolve is listed as written.
const demo2 = [
  "seq:cv p> vco:voct",
  "// the saw does the work",
  "vco:saw -> out:in-l",
  "// wibble:foo -> wobble:bar",
  "// remember to retune before recording",
].join("\n");
ctx.patch = { name: "Comments", src: demo2, notes: "", pos: {} };
ctx.parsed = ctx.parse(demo2);
const md2 = ctx.guideMarkdown();
ok("a prose comment lands under the step that follows it",
   /2\. VCO \*\*SAW\*\*[^\n]*\n   the saw does the work/.test(md2),
   md2.split("\n").slice(0, 12));
ok("an unresolvable disabled cable is listed as written",
   /## Not patched[\s\S]*`wibble:foo -> wobble:bar`/.test(md2));
ok("a trailing prose comment survives as a tail note",
   md2.indexOf("retune") > md2.lastIndexOf("2. "), md2.indexOf("retune"));
if (show) console.log("\n" + demoMd.split("\n").map((l) => "    " + l).join("\n"));

// A bare `* mod:` places a module with nothing said about it.
console.log("\nbare module placement");
ctx.patch = { name: "Bare", src: "", notes: "", pos: {} };
const bare = ctx.parse("* vcf:\n* vco: tune = C3\nvco:saw -> out:in-l");
ok("a bare block registers the module", "vcf" in bare.params, Object.keys(bare.params));
ok("and records no parameters", bare.params.vcf.length === 0, bare.params.vcf);
ok("it is not an error", !bare.errors.length, bare.errors.map((e) => e.msg));
ok("a real parameter still lands", bare.params.vco[0].value === "C3");
ok("a chunk with no equals is still an error",
   ctx.parse("* vcf: cutoff").errors.length === 1,
   ctx.parse("* vcf: cutoff").errors.map((e) => e.text));
el("src").value = "* vcf:\n* vco: tune = C3\nvco:saw -> out:in-l";
const built = ctx.build();
const box = built.nodes.find((n) => n.key === "vcf");
ok("the bare module gets a box", !!box, built.nodes.map((n) => n.key));
ok("with no ports on it", box && !box.ins.length && !box.outs.length);
ok("the patched modules are still there", built.nodes.length === 3, built.nodes.map((n) => n.key));
ok("and it draws no cables of its own", built.edges.length === 1, built.edges.length);

// A parameter block is contiguous: the `*` header plus the `|` lines directly
// under it. A blank line ends it; a comment-only line does not.
console.log("\nblock contiguity");
const tight = ctx.parse("* delay: time = 3:8\n| feedback = 45%\n// long tails\n| mix = 30%");
ok("contiguous continuations join the block", tight.params.delay.length === 3,
   tight.params.delay);
ok("a comment inside the block is transparent", !tight.errors.length,
   tight.errors.map((e) => e.msg));
const gap = ctx.parse("* delay: time = 3:8\n\n| feedback = 45%");
ok("a blank line ends the block", gap.errors.length === 1, gap.errors.map((e) => e.msg));
ok("the orphan line does not land anywhere", gap.params.delay.length === 1,
   gap.params.delay);
const between = ctx.parse("* delay: time = 3:8\nvco:saw -> out:in-l\n| feedback = 45%");
ok("a cable still ends the block", between.errors.length === 1);

// A backward cable's lane must never sit above the boxes it crosses. The wrap
// gutter shortcut only applies while the destination really is lower than the
// source; when dragging contradicts that, the lane falls back to routing below
// everything in its span.
console.log("\nbackward lanes");
{
  // mixer feeds vcf but sits to its right at the same height: a backward edge
  // whose destination is NOT lower, with vco standing in the span. The wrap
  // shortcut used to discard every box at or below the destination's y and
  // draw the lane across open canvas above them.
  const src = "vco:saw -> vcf:in\nmixer:out -> vcf:cutoff";
  el("src").value = src;
  ctx.patch = { name: "Lanes", src: src, notes: "", pos: {
    vcf:   { x: 0,   y: 20 },
    vco:   { x: 250, y: 20 },
    mixer: { x: 600, y: 20 },
  } };
  const v = ctx.build();
  const backEdge = v.edges.filter((e) => e.back && !e.self)[0];
  ok("the setup produced a backward edge", !!backEdge);
  const inAnyBox = (y) => v.nodes.some((n) => y > n.y - 12 && y < n.y + n.h + 12);
  const below = Math.max(backEdge.a.y + backEdge.a.h, backEdge.b.y + backEdge.b.h);
  ok("its lane sits below its endpoints, never above",
     backEdge && backEdge.yb > below, backEdge && [backEdge.yb, below]);
  ok("and inside no box", backEdge && !inAnyBox(backEdge.yb), backEdge && backEdge.yb);
}

// The lane takes the nearest clear corridor. A box in a lower row, inside the
// span but nowhere near the direct path, must not drag the return down below
// it and back up.
{
  const src = "vco:saw -> mixer:in-1\nmixer:out -> vcf:cutoff";
  el("src").value = src;
  ctx.patch = { name: "Corridor", src: src, notes: "", pos: {
    vcf:   { x: 0,   y: 20 },
    mixer: { x: 600, y: 20 },
    vco:   { x: 250, y: 320 },
  } };
  const v = ctx.build();
  const backEdge = v.edges.filter((e) => e.back && !e.self)[0];
  const lowBox = v.nodes.find((n) => n.key === "vco");
  ok("a distant low box does not drag the lane down",
     backEdge && backEdge.yb < lowBox.y - 12,
     backEdge && [backEdge.yb, lowBox.y]);
  ok("the lane still clears its endpoints",
     backEdge && backEdge.yb > Math.max(backEdge.a.y + backEdge.a.h, backEdge.b.y + backEdge.b.h));
}

// Clicking a cable selects the line that wrote it. The arithmetic is the part
// worth testing; the click itself needs a browser.
console.log("\ncable click jump");
el("src").value = "one\ntwo\nthree\nfour";
const j1 = ctx.jumpToLine(2, 2);
ok("a single line selects exactly itself", j1.start === 4 && j1.end === 7, j1);
const j2 = ctx.jumpToLine(2, 3);
ok("a span selects both lines, no trailing newline", j2.start === 4 && j2.end === 13, j2);
const j3 = ctx.jumpToLine(1, 1);
ok("the first line starts at zero and does not scroll", j3.start === 0 && j3.top === 0, j3);
const j4 = ctx.jumpToLine(99, 99);
ok("a line past the end degrades quietly", j4.start === j4.end && j4.start === el("src").value.length, j4);

console.log("\nempty patch");
ctx.parsed = ctx.parse("");
const empty = ctx.buildGuide();
ok("no steps", empty.count === 0);
ok("html still renders", ctx.guideHTML().includes("Nothing to patch yet"));
ok("markdown still renders", ctx.guideMarkdown().startsWith("# "));

console.log(fails ? "\n" + fails + " failing" : "\nall passing");
process.exit(fails ? 1 : 0);
