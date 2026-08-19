// Library validator.
//
//   node test/validate.mjs                 checks lib/
//   node test/validate.mjs workbench/data  checks a workbench copy
//
// Exits 1 on an error, 0 on warnings alone, so it works as a pull request
// check. The same rules run inline in modules.html; test/rules-drift.mjs
// fails if the two disagree.

import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const DIRS = ["in", "out", "both"];
const SIGS = ["audio", "pitch", "cv", "gate", "clock", "multi"];
const ID_RE = /^[a-z0-9][a-z0-9-]*$/;

// The library files are scripts that push onto window.MODULE_LIBRARIES, so run
// them with a stand-in window rather than writing a parser for a format we
// control anyway.
export function evalLibrary(text) {
  const box = {};
  new Function("window", text)(box);
  return box.MODULE_LIBRARIES || [];
}

export async function load(dir) {
  const out = [];
  for (const name of (await readdir(dir)).sort()) {
    if (!name.endsWith(".js")) continue;
    const text = await readFile(join(dir, name), "utf8");
    let libs;
    try {
      libs = evalLibrary(text);
    } catch (e) {
      out.push({ file: name, broken: e.message, modules: [] });
      continue;
    }
    for (const l of libs) out.push({ file: name, id: l.id, name: l.name, modules: l.modules || [] });
  }
  return out;
}

// Rules for one flat list of modules. Kept separate from the per-file wrapper
// so the drift test can run the identical fixture through this and through the
// inline copy in modules.html.
export function checkModules(modules, where) {
  const issues = [];
  const seen = new Map();

  for (const m of modules) {
    const at = (jack) => (jack ? `${m.id || "?"}:${jack}` : m.id || where || "?");
    const err = (msg, jack) => issues.push({ level: "error", where: at(jack), msg });
    const warn = (msg, jack) => issues.push({ level: "warn", where: at(jack), msg });

    if (!m.id) {
      err("No id. Patch source has nothing to reference.");
      continue;
    }
    if (!ID_RE.test(m.id)) err("id must be lowercase letters, digits and hyphens.");
    if (seen.has(m.id)) err(`Duplicate id, also in ${seen.get(m.id)}.`);
    seen.set(m.id, where || "this library");
    if (!m.name) err("No name. It's what gets drawn on the box.");
    if (m.hp !== undefined && (typeof m.hp !== "number" || m.hp <= 0))
      err("hp must be a positive number, or absent.");
    if (!m.tags || !m.tags.length) warn("No tags, so it has no colour and no group.");
    if (m.tags && m.tags.some((t) => typeof t !== "string" || !t.trim()))
      err("Empty or non-string tag.");
    if (m.generic !== undefined && typeof m.generic !== "boolean")
      err("generic must be true or absent.");
    if (m.generic && m.mfr) warn("Marked generic but names a manufacturer.");
    if (!m.generic && !m.mfr) warn("Real module with no manufacturer.");

    const jacks = m.jacks || [];
    if (!jacks.length) warn("No jacks.");

    const ids = new Set();
    const labels = new Set();
    let hasOut = false;

    for (const j of jacks) {
      if (!j.id) {
        err("Jack with no id.", j.label || "?");
        continue;
      }
      if (!ID_RE.test(j.id)) err("Jack id must be lowercase letters, digits and hyphens.", j.id);
      if (ids.has(j.id)) err("Duplicate jack id.", j.id);
      ids.add(j.id);

      // Keyed by direction as well as label, because a stereo module rightly
      // has an R in and an R out and neither is a mistake.
      if (!j.label) warn("No label, so the panel silkscreen is lost.", j.id);
      else {
        const k = j.dir + " " + j.label.toLowerCase();
        if (labels.has(k)) warn(`Two ${j.dir} jacks labelled ${j.label}.`, j.id);
        labels.add(k);
      }

      if (!DIRS.includes(j.dir)) err(`dir must be one of ${DIRS.join(", ")}.`, j.id);
      if (!SIGS.includes(j.sig)) err(`sig must be one of ${SIGS.join(", ")}.`, j.id);
      if (j.dir === "out" || j.dir === "both") hasOut = true;

      for (const a of ["x", "y"]) {
        if (j[a] === undefined) continue;
        if (typeof j[a] !== "number" || j[a] < 0 || j[a] > 1)
          err(`${a} must be a fraction of the panel, 0 to 1.`, j.id);
      }
      if ((j.x === undefined) !== (j.y === undefined))
        err("Has one of x/y but not the other.", j.id);

      if (j.normalled !== undefined && !String(j.normalled).trim())
        warn("Empty normalled. Drop the field or say what it disconnects.", j.id);
    }

    // Output modules and expanders are all input by design, so the check
    // would only ever be noise there.
    const isSink = (m.tags || []).some((t) => t === "output" || t === "expander");
    if (jacks.length && !hasOut && !isSink)
      warn("No output. Nothing can be patched from it.");
  }
  return issues;
}

export function check(libs) {
  const issues = [];
  const seen = new Map();
  for (const lib of libs) {
    if (lib.broken) {
      issues.push({ level: "error", where: lib.file, msg: "Will not parse: " + lib.broken });
      continue;
    }
    if (!lib.id) issues.push({ level: "error", where: lib.file, msg: "Library has no id." });
    for (const i of checkModules(lib.modules, lib.file)) issues.push(i);
    // Duplicate ids across files, which checkModules cannot see.
    for (const m of lib.modules) {
      if (!m.id) continue;
      if (seen.has(m.id) && seen.get(m.id) !== lib.file)
        issues.push({ level: "error", where: m.id, msg: `Duplicate id, also in ${seen.get(m.id)}.` });
      if (!seen.has(m.id)) seen.set(m.id, lib.file);
    }
  }
  return issues;
}

// CLI when run directly, importable otherwise. Exported so the stub left at
// workbench/validate.mjs can delegate.
export async function main() {
  const target = resolve(process.argv[2] || "lib");
  const libs = await load(target);
  const issues = check(libs);
  const errors = issues.filter((i) => i.level === "error");
  const warns = issues.filter((i) => i.level === "warn");
  const modules = libs.reduce((a, l) => a + l.modules.length, 0);
  const jacks = libs.reduce((a, l) => a + l.modules.reduce((b, m) => b + (m.jacks || []).length, 0), 0);

  for (const i of issues)
    console.log(`${i.level === "error" ? "error" : " warn"}  ${i.where.padEnd(34)} ${i.msg}`);
  if (issues.length) console.log("");
  console.log(
    `${libs.length} ${libs.length === 1 ? "library" : "libraries"}, ` +
      `${modules} modules, ${jacks} jacks, ` +
      `${errors.length} ${errors.length === 1 ? "error" : "errors"}, ` +
      `${warns.length} ${warns.length === 1 ? "warning" : "warnings"}`
  );
  process.exit(errors.length ? 1 : 0);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
