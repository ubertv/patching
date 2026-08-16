# patches/

Your saved patches live here, as `patches.js`.

The file isn't in the repo, because it's yours. Make one with **File → Export all patches**, save it in this folder as `patches.js`, and Patching reads it
every time it starts. There's no script tag to add and nothing to configure —
`index.html` already looks for it and shrugs if it isn't there.

It's the same arrangement `lib/library.js` has for modules, and for the same
reason: browser storage is one browser on one machine, and a plain file isn't.

## How it interacts with what's in the browser

A patch that's in both places is **one patch**, matched by `id`, and the browser
copy wins. So:

- Opening a patch from the file doesn't touch it. Only editing does.
- An edited one shows as **·edited** in the list, and **File → Revert to file**
  throws your changes away and brings the file's copy back.
- Edit one back to matching the file and the override disappears on its own.
- Exporting and dropping the file back in **doesn't duplicate anything.** The
  file becomes the baseline underneath the copy you already had.
- Pull a newer `patches.js` and you get the newer version of everything you
  haven't touched.

The app never writes this file. That's what makes reverting mean something.

## Format

```js
window.PATCH_FILES = window.PATCH_FILES || [];
window.PATCH_FILES.push({
  id: "patches",
  name: "My patches",
  patches: [{
    id: "pk3n2xq1",
    name: "Krell",
    src: "env:eoc t> env:gate\n",
    notes: "Retriggers itself forever.",
    pos: { env: { x: 40, y: 60 } }
  }]
});
```

- `id` has to be unique and has to be stable. It's what matching is done on.
- `src` is the patch, in the syntax the editor uses. It's the source of truth;
  the diagram is derived from it every time.
- `notes` and `pos` are optional. `pos` is box positions on the canvas, and
  leaving it out means the patch lays itself out on first open.

Nothing else is read. A file with more in it will load fine and the extra will
be dropped on the next export.

## More than one file

`patches.js` is the one that loads automatically. If you want others — a set for
a different rack, someone else's patches, an archive — drop them in here under
any name and add a script tag next to the existing one in `index.html`:

```html
<script src="patches/dave.js" onerror="void 0"></script>
```

Load order is precedence order, last wins, and anything in browser storage beats
all of them.
