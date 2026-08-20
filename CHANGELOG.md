# Changelog

Versions are shared across all three pages. The number is in **Help → About** on
each of them, so a screenshot says which copy someone is running.

`0.x` means the format may still move. See the note at the bottom for what 1.0
is waiting on.

## Unreleased

- **A phone gets a readable app instead of a broken one.** Below 760px the
  panes stack, diagram first, editor underneath: someone arriving from a link
  wants to look at a patch before they type one. The diagram fits itself to the
  screen on arrival and again on rotate, and the layout uses the visible
  viewport so the bottom row doesn't hide behind Safari's chrome. The top bar
  becomes two deliberate rows — app chrome above, the document below — instead
  of wrapping wherever it broke, and drops what a phone doesn't need: the
  rules, the save-state text, the wordmark, and the Export SVG button that
  Share already carries. The Notes editor is gone on a phone —
  the text still shows in the diagram footer and the guide preamble, and
  writing prose about a patch is desk work — so all of its room goes to the
  editor. The canvas bar slims to what a reader uses: view toggle, zoom, one
  Fit, the section filter, Show all and expand.
  Tap works where click works: a module fades to its connections, a cable jumps
  to its line, the guide reads as it always did. Arranging boxes stays desktop:
  dragging needs pointer events the app doesn't have, and auto layout already
  answers on a phone. Same treatment on all three pages.

- **Click a module to see what it's connected to.** A plain click (no drag)
  selects the box, fades every module and cable not patched to it, and lands
  the editor on the first line that mentions it. Clicking the same box again
  restores, as do Esc, empty canvas, and a **Show all** button that appears
  while anything is faded. A **Dim others** toggle above the diagram turns the
  fading off entirely, leaving click-to-jump; the choice persists. Stacks with
  the section filter rather than replacing it.
- **Alt-click a cable to disable it.** Comments the cable's line out, so it
  vanishes from the diagram and the patch, and Cmd+Z brings it back — the edit
  goes through the browser's own undo. Alt-click can't re-enable what it can no
  longer see, so the way back is undo, the text, or the guide's Not patched
  list.
- **The guide reads comments now.** A comment block above the first line joins
  the preamble; a comment above a cable prints under that cable's step; and a
  comment shaped like a connection — the importer's disabled cables, and
  alt-click's — is never printed as prose. Those list at the end under **Not
  patched**, resolved to panel names where the modules exist and shown as
  written where they don't.
- **Cmd+Enter (or Ctrl+Enter) runs Auto layout**, from anywhere including the
  editor. The one shortcut, for the one button reached for after every burst of
  typing.
- **Click a cable to jump to its line.** The editor selects the line that wrote
  the cable, with the browser's own selection, and scrolls it into view. A
  merged stereo pair written as two lines selects both. The clickable area is
  far wider than the drawn stroke, so no aiming.

- **A backward cable takes the nearest clear corridor now, not the long way
  round.** Its lane used to route below everything in its horizontal span, so
  one box from a lower row anywhere along the way dragged the whole return down
  past it and back up, even with a clear gap right under the endpoints. The
  lane now starts just below its two endpoint boxes and moves down only when it
  actually lands in a box or another lane's path.
- **A backward cable could draw its lane across open canvas, well above the
  boxes it crossed.** A backward edge classified as a row-wrap only cleared
  boxes in its own row and above, which assumes the destination sits lower
  than the source. Drag the boxes so it doesn't and the lane was computed
  against almost nothing and landed near the top of the canvas. The gutter
  shortcut now applies only while the destination really is lower; otherwise
  the lane routes below everything in its span, like any other return.
- Tests now ship in `test/` and run on every push and pull request: the library
  validator, the parser and guide against the shipped examples, and a drift
  check that fails if the validation rules in `test/` and `modules.html` stop
  agreeing.
- `modules.html` validates as you type: problems listed on each module,
  **File → Validate library** for the lot, and an error count in the status
  bar. Same rules as CI, so what passes locally passes the pull request.
- **Bulk add** in `modules.html`: paste a panel's worth of jacks and preview
  exactly what will land before it does.
- Export chooses its modules: the export sheet lists the whole library with a
  checkbox each. Your differences from `lib/library.js` come first and start
  ticked, shipped modules follow unticked, with **all**, **none** and **just my
  changes** shortcuts. So "send someone these three" works whether or not you
  ever edited them. The saved file is a normal library that **Import…** merges
  by id.

## 0.1.2 — 17 August 2026

Saving a file, made to feel like saving a file.

### Added

- **Export offers a real Save dialogue.** Patches, modules and scores all open a
  file picker so you can navigate to `patches/`, `lib/` or `scores/` and write
  the file where it belongs, rather than finding it in Downloads and moving it.
  The browser reopens in the same folder next time. It needs Chrome or Edge on a
  served page: `showSaveFilePicker` is not available on `file://`, so opening
  `index.html` by double-clicking still gets the plain download, and the button
  says which one you are about to get.

### Fixed

- **Typing a big patch produced a canvas 21572 pixels wide and 366 tall.** A
  module with no already-placed feeder went to the right of everything, on one
  line, with no end to the line. That is fine for adding one module to a patch
  you have arranged and useless for typing a dozen voices, and it is the case
  where zoom appears to scale the canvas but not the modules: fitting a 21572
  pixel width hits the 20% floor long before it fits, so the sheet shrinks and
  the modules become specks. New modules now wrap into rows, and when far more
  arrive than were already placed the whole patch is laid out instead, because
  at that point it is not the patch you arranged any more. Same input, now
  1386 by 2294.

- **Zooming past the pane width did nothing.** The canvas pane is a column flex
  container, so the box holding the sheet stretched to the pane and stayed
  there. Press `+` and the sheet grew downward while the width appeared to stop,
  because there was nothing wider for the pane to scroll to. It sizes to the
  diagram now, which also gives back the padding on the right that stretching
  was eating.

- **Fit width magnified small diagrams.** It scaled a four-module patch up to
  131% because there was room, and that zoom stuck for whatever you typed next.
  Fitting now only ever scales down.

- **Added Fit page**, next to Fit width. Fitting the width does almost nothing
  for a diagram that is twice as tall as it is wide; the same patch goes from
  100% to 35% and is visible in one screen.

- **A big patch became an unreadable ribbon.** Auto layout ignored the window:
  it capped at six columns however wide the screen, and nothing split a column
  that grew too tall. Twelve parallel voices put every oscillator, envelope and
  LFO at the same rank, so 95 modules made one column 54 deep and a canvas
  1106 by 5105, which no amount of zooming helps because fitting the width
  barely scales anything while the height runs off the bottom. Columns now split
  into side-by-side stacks when they outgrow the pane, the column count follows
  the width you actually have, and the width sum no longer charges for a gap
  after the last column. The same patch is now 1386 by 2372 on a laptop and
  2226 by 2154 on a large monitor.

- **The modules About page described a rule the app doesn't have.** It said
  library modules were read-only and you had to duplicate one to change it.
  There has been an Edit button on every module for some time; a change is kept
  as an override layered over the file, which **Revert to file** undoes. Also
  says what the storage actually does rather than that an update might "clobber"
  your work.

- **Export told hosted visitors to do something impossible.** On a public site
  the sheet said to save the file as `patches/patches.js` and that the app reads
  it at boot. A visitor cannot write to someone else's server, so that was an
  instruction they could not follow and it read like the app was broken. Served
  from a host it now says to keep the file somewhere they will find it, points
  at **File → Import…** for reading it back, and links to the repo for the
  version where the file sits in a folder and loads itself. Off `file://` or
  localhost nothing changes.

### Changed

- **The three export sheets read the same and lead with the filename.** They had
  drifted into three registers for one act, and each opened with a paragraph of
  reasoning before the button. Now: the destination first, the button, a quiet
  link to copy the text instead, and the reasoning behind a fold. The
  no-local-storage warning is a bar at the top rather than a bolded sentence
  mid-paragraph, and saving confirms and repeats where the file goes.

---

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

### Changed

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
- A patch guide: the same patch as numbered instructions to rebuild it, with
  module names and panel labels in place of the source shorthand, grouped by
  section, knobs before cables. Its own pane, or Markdown.
- Export as SVG, PNG, JSON, PatchBook markup or a guide. Cmd+P prints whichever
  pane you're looking at.
- Patches, modules and scores are all stored the same way: a plain file in the
  folder as the durable copy, browser storage over the top, and export and
  import as the bridge between them.

---

## What 1.0 is waiting on

Score. It works, but it announces itself as an experiment and it is the least
settled of the three. When its syntax stops moving, this becomes 1.0.

Everything else is stable, including the `lib/` data format, which is the part
anyone else would build on.
