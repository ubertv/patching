# Changelog

Versions are shared across all three pages. The number is in **Help → About** on
each of them, so a screenshot says which copy someone is running.

`0.x` means the format may still move. See the note at the bottom for what 1.0
is waiting on.

## 0.1.0 — 16 August 2026

First release.

Three pages, no build step and no dependencies. `index.html` writes patches as
text and draws the signal flow. `modules.html` manages the module library.
`score.html` records how a patch is played, and is experimental.

- The patch language: cables, chains, typed arrows, named instances, sections,
  parameter blocks, and PatchBook markup mixed in freely.
- Checks the parser can make because it knows the jacks on each module: normals
  you're breaking, direction errors, two cables into one input, unknown modules
  and jacks with a suggestion when it's a typo.
- A library of 32 generic modules and 18 real ones, each traceable to a manual
  or a panel photograph.
- Drag to arrange, shift-click and rubber-band to select, group move, and auto
  layout to start again.
- Light and dark themes. Exports are always light.
- Export as SVG, PNG, JSON or PatchBook markup.
- Patches, modules and scores are all stored the same way: a plain file in the
  folder as the durable copy, browser storage over the top, and export and
  import as the bridge between them.

---

## What 1.0 is waiting on

Score. It works, but it announces itself as an experiment and it is the least
settled of the three. When its syntax stops moving, this becomes 1.0.

Everything else is stable, including the `lib/` data format, which is the part
anyone else would build on.
