# Changelog

Versions are shared across all three pages. The number is in **Help → About** on
each of them, so a screenshot says which copy someone is running.

`0.x` means the format may still move. See the note at the bottom for what 1.0
is waiting on.

## 0.1.1 — 17 August 2026

### Added

- **A patch guide, next to the diagram.** The **Guide** tab turns the patch into
  instructions for building it: numbered steps in signal order, each one naming
  the module and the jack in the words printed on the panel rather than the ids
  you typed. Knob settings are gathered into a setup block at the head of the
  section where that module is first patched. Sections become headings, and a
  cable's `"note"` sits under its step.

  The diagram answers what connects to what. The guide answers how to build it
  again, which is the thing you actually carry to the rack.

  **Copy** puts it on the clipboard as Markdown, **Print** takes the guide alone,
  and **Share → Patch guide as Markdown** writes a file. There is no import: the
  guide is generated from the patch, never read back.

- **Export offers a real Save dialogue.** Patches, modules and scores all open a
  file picker so you can navigate to `patches/`, `lib/` or `scores/` and write
  the file where it belongs, rather than finding it in Downloads and moving it.
  The browser reopens in the same folder next time. It needs Chrome or Edge on a
  served page: `showSaveFilePicker` is not available on `file://`, so opening
  `index.html` by double-clicking still gets the plain download, and the button
  says which one you are about to get.

### Changed

- **The three export sheets read the same and lead with the filename.** They had
  drifted into three registers for one act, and each opened with a paragraph of
  reasoning before the button. Now: the destination first, the button, a quiet
  link to copy the text instead, and the reasoning behind a fold. The
  no-local-storage warning is a bar at the top rather than a bolded sentence
  mid-paragraph, and saving confirms and repeats where the file goes.

- **One library file instead of three.** `lib/generics.js` and `lib/starter.js`
  are now `lib/library.js`: 32 generic placeholders and 18 real modules, 50 in
  all. Nothing branched on which file a module came from, so the split bought
  nothing and cost a concept. Any other file dropped into `lib/` is still picked
  up.

### Removed

- **Jack `x` and `y` coordinates.** 105 pairs, and nothing read them. They were
  kept for a panel view that may never happen.

### Fixed

- **Import replaced your modules instead of adding to them.** `modules.html`
  cleared the override store before reading the incoming file, so importing a
  library of two new modules deleted every module you'd made and every
  correction you'd saved. It merges by id now and says how many were added and
  how many updated.

---

## 0.1.0 — 16 August 2026

First release.

Three pages, no build step and no dependencies. `index.html` writes patches as
text and draws the signal flow. `modules.html` manages the module library.
`score.html` records how a patch is played, and is experimental.

- The patch language: cables, chains, typed arrows, named instances, sections,
  parameter blocks, and PatchBook markup mixed in freely.
- Checks the parser can make because it knows the jacks on each module:
  direction errors, two cables into one input, unknown modules and jacks with a
  suggestion when it's a typo. Normalling is recorded in the library and shown on
  the module page, but the patch page doesn't warn about it.
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
