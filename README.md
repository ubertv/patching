<img src="img/icon-512.png" alt="" width="96" align="left" hspace="16">

# Patching

**Signal flow diagrams for modular synthesizers.** Write the patch as text and it draws the
diagram. Legible enough to save, share or print.

<br clear="left">

A way to record a patch, to show someone else or to remind yourself later.

Inspired by [PatchBook](https://github.com/SpektroAudio/PatchBook). Patching extends the
PatchBook markup and takes a different approach to layout: modules as boxes, only the jacks
actually in use, in signal order rather than rack order, with cable type carried by colour
*and* line style, so it survives a greyscale printer.

Comes with a library of generic modules and a few real ones. Edit those, or add your own.

No build step, no dependencies, no server. Three HTML files and some data. Open `index.html` and
it runs, straight off the filesystem. Or host it yourself.

---

## Writing a patch

```
VOICE 1:
  seq:cv p> vco:voct
  seq:gate g> env:gate
  vco:saw -> vcf:in
  env:out >> vcf:cutoff
  vcf:out -> vca:in
  vca:out -> out:in-l

  * vcf: cutoff = 40% | resonance = 3 o'clock
  * vco:
  | tune = C2
  | pw = 50%
```

| | |
|---|---|
| `module:jack -> module:jack` | a cable |
| `->` | neutral: the source jack decides the type |
| `to` | the same as `->`, in words |
| `a -> b -> c` | a chain. Two cables |
| `a -> b and c` | one output into two inputs. `,` works too |
| `vcf` | a bare module name, when the jack is obvious |
| `delay:in:wet` | mid-chain: arrive at `IN`, leave by `WET` |
| `>>` `p>` `g>` `t>` `c>` | cv, pitch, gate, trigger, clock |
| `[audio]` | force a type, overrides everything |
| `"note"` | label the cable on the diagram |
| `NAME:` | start a section; everything below belongs to it |
| `* module: knob = value \| knob = value` | knob settings, drawn in the box |
| `vco#lead` `vco#drone` | a named instance. Two boxes, each captioned with its role |
| `vco#1` `vco#2` | two of the same module, when neither has a job worth naming |
| `#` or `//` | comment |

The word `to` means exactly what `->` means, so a patch can be written the way you'd say it out
loud:

```
vco:saw to vcf:in
vcf:out to vca:in
```

### Sections and roles

A section groups part of a patch. `NAME:` and everything below it belongs to that section. A
voice, but equally modulation, clock, output, or whatever else you want grouped.

A role is what one module is there for. `vco#lead`, `lfo#drift`. It's a named instance, so
`vco#lead` and `vco#drone` are two boxes, and the name is drawn on the box in place of the
manufacturer.

```
LEAD:
  vco#lead:saw -> vcf#lead:in -> vca#lead:in -> mixer:in-1
  lfo#drift:tri >> vco#lead:pwm

DRONE:
  vco#drone:saw -> vcf#drone:in -> vca#drone:in -> mixer:in-2
  lfo#drift:tri >> vco#drone:voct
```

The section dropdown above the diagram fades everything outside the section you pick. It never
removes anything, so the layout doesn't move. A module reached by two sections, like
`lfo#drift` above, stays prominent in both.

### Chains, and feeding two modules from one source.

A line can carry more than one cable, so a signal path reads as a sentence rather than a list:

```
vco:saw -> vcf:in -> vca:in -> out:in-l
env:out >> vca:cv and vcf:cutoff
```

The first is three cables. A middle module is written once but plays two parts, destination of
the cable before it and source of the one after, and those are different jacks. It leaves
by its output, not by the input you named. Each step keeps its own arrow, so the type can
change down the chain: `seq:cv p> vcf:cutoff -> vca`.

A middle module can name both its jacks, `module:in:out`, which makes a chain usable on
anything with more than one output, like a delay with dry and wet or a filter with LP, BP
and HP:

```
vco:saw -> vcf:in:bp -> delay:in:wet -> vca -> out
```

Without it those modules could only ever appear at the end of a line. It means nothing at the
start or end of a chain, where an endpoint has only one role, so saying it there is an error
rather than something quietly ignored.

You can drop a jack entirely when the module has an obvious one: a jack actually called `out`
or `in`, or only one facing that way. Where there's no obvious answer it asks, and lists the
candidates.

`and` is only allowed on the last step.

### Notes

The **Notes** box under the editor is prose about the whole patch, and it prints in the footer
under the cable key. 

### Moving modules

Drag a module to move it. It snaps to a 10px grid.

Shift-click adds a module to the selection or takes it out. Dragging on empty canvas rubber-bands,
and anything the box touches is selected. Hold shift to add to what is already picked. Dragging a
selected module moves the whole selection. Esc deselects.

Positions belong to the patch and save as you go. There is no undo, so **Auto layout** is the way
back.

### The guide

**Guide**, next to **Diagram** above the canvas, is the same patch written as instructions for
building it. Numbered steps in signal order, each naming the module and the jack in the words
printed on the panel rather than the ids you typed:

```
1. Sequencer CV → VCO V/OCT
2. Sequencer GATE → Envelope GATE
3. VCO SAW → VCF IN
```

Knob settings are gathered into a **Set up** block at the head of the section where that module
is first patched, so you turn the knobs before you start plugging. Sections become headings,
and a cable's `"note"` sits under its step.

The diagram answers what connects to what. The guide answers how to build it again.

**Copy** puts it on the clipboard as Markdown. **Print** takes the guide alone, without the
diagram. **Share → Patch guide as Markdown** writes a file.

It's generated from the patch and never read back, so there's nothing to import and no way for
an edited guide to disagree with the patch it came from.

### Where your patches are kept


| | |
|---|---|
| `patches/patches.js` | **the durable copy.** A plain `<script src>`, so it loads identically off a filesystem, off localhost and off a web host. Picked up automatically at boot. |
| browser storage | **the working copy.** Automatic and instant, but one browser on one machine. |
| Export / Import | **the bridge.** Export writes a `patches/patches.js` you drop into place. Import reads one back. |

Export is what makes a patch permanent. **File → Export all patches** writes the file; save it
as `patches/patches.js` and there's nothing else to set up.

A patch in both places is one patch, matched by `id`, and the browser copy wins. Opening a
patch from the file doesn't touch it. Only editing does, and an edited one shows as
**·edited** in the list and as a badge beside the name. **File → Revert to file** throws the
change away. Edit one back to matching and the override disappears on its own.

So exporting and dropping the file back in never duplicates anything, and pulling a newer
`patches.js` gives you the newer version of everything you haven't touched. The app never
writes the file, which is what lets Revert mean something.

A patch that came from the file can't be deleted in the app, because the app can't edit the
file. Remove it there, or export a file without it.

**Export all patches** and **This patch as JSON** are different tools. The first is your whole
collection. The second is one patch plus a derived `cables`
array, for sending to someone or for another tool to read. Both carry the `id`, so both import
without duplicating, and an id that already exists is never resolved silently: it asks whether
to update, add a copy, or skip.

There is one Import, under **File**, and it takes any of them: a `patches.js`, a patch JSON, a
cables-only file from another tool, or PatchBook markup. Working out which is the app's job,
not a question to answer before you can pick a file.

### Hosting it yourself

Nothing changes. A browser can't write to a web server. So same as locally,
export, then put the file in place. On a host that means upload, or commit and push.

Browser storage is more reliable on a real origin than on `file://`, not less.

If the site is public, every visitor gets their own browser storage and none of them can write
to your server. So a hosted instance is your patches in `patches.js` as a read-only starting
set, and each visitor's own work in their browser until they export it. 

### Imports PatchBook

[PatchBook](https://github.com/SpektroAudio/PatchBook) markup works anywhere the id form
does, mixed freely on the same line:

```
- Quad VCA (OUT 1) -> Mimeophon (IN L)
quad-vca:out-1 -> Mimeophon (IN L)
```

Export is under **Share → PatchBook markup**; import is **File → Import…**, same as everything
else. Five of the six signal types map exactly. Two
things to know: their `t>` (trigger) becomes `gate` here, since we don't split the two, and
`multi` has no PatchBook arrow so it exports as `>>`. Not affiliated with them.

One difference: in PatchBook `->` means audio. Here it stays neutral and lets
the source jack decide, which is more useful when the source is a VCA or a mult. The importer
converts their `->` to an explicit `[audio]` so nothing is lost in translation.

---

## What it checks

Because it knows the jacks on each module, it can tell you things a drawing program can't:

- **Direction errors.** An output can't be a destination.
- **Two cables into one input.** You physically can't. Patch a mult, or use a stackable.
- **Unknown modules and jacks**, with a suggestion when it's a typo.

It does **not** warn you about normals you're breaking. Modules carry `normalled` prose and
`modules.html` shows it, but the patch page stays quiet. That check is only worth trusting
across a library that covers your rack, and nine real modules isn't one. Firing it on the
handful of modules that happen to be in `lib/` would imply coverage that isn't there.

---

## Modules

Everything the tool can draw comes from a library: a plain file in `lib/` that pushes onto
`window.MODULE_LIBRARIES`. Adding one is dropping a file in and adding a script tag.

```js
window.MODULE_LIBRARIES = window.MODULE_LIBRARIES || [];
window.MODULE_LIBRARIES.push({
  id: "mine",
  name: "My modules",
  modules: [{
    id: "clouds", name: "Clouds", mfr: "Mutable Instruments", hp: 18,
    tags: ["granular", "sampler", "effect"],
    note: "Discontinued 2017, superseded by Beads. Draws 120mA +12V, 10mA -12V.",
    links: {
      mfr:        "https://mutable-instruments.net/",
      product:    "https://mutable-instruments.net/modules/clouds/",
      manual:     "https://…/clouds-manual.pdf",
      manualNote: "PDF, 12 pages.",
      mg:         "https://modulargrid.net/e/mutable-instruments-clouds",
      firmware:   "https://…/firmware/",
      source:     "where the jack data came from, if not the manual"
    },
    jacks: [
      { id: "in-l", label: "IN L", dir: "in", sig: "audio", x: 0.132, y: 0.878 },
      { id: "in-r", label: "IN R", dir: "in", sig: "audio",
        normalled: "Normals to IN L, so a mono source feeds both channels." }
    ]
  }]
});
```

- `dir` is `in`, `out` or `both`
- `sig` is `audio`, `pitch`, `cv`, `gate`, `clock` or `multi`
- `normalled` is prose describing what patching this jack disconnects. Optional. Collected and
  shown on the module page, but the patch page doesn't read it. Keep writing it: it's the one
  thing a manual records that a panel photograph can't show, and it's what a normalling check
  would need if the library ever grows enough to justify one.
- `note` is anything worth knowing about the module itself: power draw, that it's discontinued.
- `tags` decides the colour of the box, and the first tag decides which group the module files
  under, so put the primary function first.
- `links` are all optional and all shown on the module page. `manualNote` is prose rather than
  a URL: which edition you actually read. They're how a claim about a jack stays checkable.

**Modules → Help → Module data** carries the same reference inside the app, next to a real entry.

One library, `lib/library.js`: 32 placeholders (VCO, VCF, envelope, mixer, delay and so on)
for sketching without committing to specific gear, and 18 real modules.

Add your own to it, or drop another file in `lib/` and add a script tag. Any file that pushes
onto `window.MODULE_LIBRARIES` is picked up.

`modules.html` manages all of it, and has similar menu bar as the patch page: **File** on the
left for new, import and export, **Help** on the right.

The switch turns a module on or off in the patch editor. Off means autocomplete stops offering
it. The module stays in the list, still parses and still draws, so trimming the list to the
gear you own can't break a patch you already wrote.

Anything can be corrected. Open a module and press **Edit**. Changes to a shipped module save
as an override. The file in `lib/` is never written, so it stays as the reference copy and
**Revert to default** throws the override away. Pull a newer library file and you get the newer
defaults for everything you haven't touched.

### Where your modules are kept


| | |
|---|---|
| `lib/*.js` | **the durable copy.** Plain `<script src>` files, so they load identically off a filesystem, off localhost and off a web host. Anything in `lib/library.js` is picked up automatically at boot. |
| browser storage | **the working copy.** Automatic and instant, but one browser on one machine. |
| Export / Import | **the bridge.** **File → Export library** writes a `lib/library.js` you drop into place. **File → Import…** reads one back and merges by id. |

Browser storage holds one thing: every module that differs from `lib/library.js`. A module you
made is an entry with nothing underneath it, a module you corrected is an entry shadowing the
file, and `off: true` keeps one out of the patch editor's autocomplete. **Revert to file**
deletes the entry.

Export writes all of it, so the file carries your own modules, your corrections and your on/off
list together.

---

## Files

```
index.html          the patch tool
modules.html        the module library editor
CHANGELOG.md        what changed, and what 1.0 is waiting on
score.html          scores. Experimental, and says so in its own header
lib/library.js      the module library: 32 placeholders and 18 real modules
patches/patches.js  your patches, if you export one (gitignored by default)
scores/scores.js    your scores, if you export one (gitignored by default)
examples/           example patches, offered from the File menu
```

`patches/patches.js` and `scores/scores.js` are optional and loaded with an `onerror` guard,
so every page starts perfectly well without either.

All three pages carry the menu bar: **File** on the left, **Help** on the right, and the same
three-tier storage underneath. One arrangement, three kinds of thing.

Everything is inline. No bundler, no npm, no framework. Data files are plain scripts that
assign a global rather than JSON the app fetches, which is what lets the whole thing run from a
folder with nothing serving it.

## Examples

Six, under **File → Start from an example**, and offered on the empty canvas. All built from
generic modules, so they read without owning any particular gear. Loading one always creates a
new patch, so it can't overwrite your work.

- **Basic voice.** 6 modules. The classic first patch: something to make a note, something to
  shape it, something to let it through. Start here.
- **Subtractive voice.** The same idea filled out with modulation, a clock and a delay.
- **Generative.** Plays itself. Pitch from sampled noise through a quantiser, rhythm from one
  clock divided four ways, and the delay tail fed back into the oscillator. Uses all six cable
  types and a feedback loop.
- **Krell.** The canonical generative patch, named for the Krell in *Forbidden Planet*. An
  envelope's end-of-cycle output goes back into its own trigger so it retriggers forever, with
  its attack and decay times randomised so it never settles into a rhythm. The only example
  with a module patched into itself.
- **Stereo drone.** Two detuned oscillators into reverb, one LFO doing three jobs through a
  mult, and the compressor's envelope opening the filter as the drone swells. Shows stereo
  pairs drawn as single doubled lines.
- **Lead and drone.** Two parts at once, written so the diagram says which is which. Named
  roles on every box, `LEAD` and `DRONE` as sections, and one LFO shared between them. The
  drone's two oscillator outputs go through their own mixer, because two cables can't share one
  input.

They live in `examples/examples.js`, which is the single source of truth for them.

---

## Scores

> Very experimental. A first attempt, probably wrong in places. Treat it as a sketch.
> It's the Score tab, or `score.html`.

A score records how a patch is played: a list of named sections and what changes to get into
each one. It holds no notes and no timeline.

```
INTRO:
  * vcf: cutoff = 15% | resonance = 40%
  mute vca

BUILD: a few minutes
  * vcf: cutoff = 10 to 50 to 10 to 90   "three passes"
  * lfo: rate = smooth random
  patch lfo:tri >> vcf:cutoff
  wait 8 bars

PEAK:
  * delay: feedback = stepped random
  unpatch seq:gate -> env:gate
```

A section header must start at the left margin. Anything after the colon is a timing cue, in
free text, and is never interpreted. `* mod: knob = value` sets a knob, `patch` and `unpatch`
take any arrow the patch language takes, `mute` and `unmute` take a module, and any other line
is a direction in words. A `"note"` at the end of a line attaches to that move.

A value is a place, a journey or a behaviour. `60%` is a step. `15% to 60%` is a ramp.
`10 to 50 to 10 to 90` is a shape with any number of points. `lfo`, `stepped random`,
`smooth random`, `falling` and `hold` draw the wave they name, as do their synonyms.

Two views: a grid of what changes across the sections, and the moves in order.

Pick a patch in the header and the moves are checked against it. Unpatching a cable the patch
doesn't have is flagged, as is a knob on a module that isn't in it. The setting belongs to the
score, so two scores against two patches don't check each other.

Scores are stored like patches: `scores/scores.js` as the durable copy, browser storage over
the top, export and import between. **Export score** writes the rendered score as a standalone
HTML file with a print stylesheet. **File → This score as text** gives the source.

## Licence

- Code: MIT. See [LICENSE](LICENSE).
- `lib/` data: CC BY 4.0. See [lib/LICENSE](lib/LICENSE).

### Contributing

Contributions welcome, especially module data.
