# scores/

Your saved scores live here, as `scores.js`.

The file isn't in the repo, because it's yours. Make one with **File → Export all
scores**, save it in this folder as `scores.js`, and `score.html` reads it at
boot. There's no script tag to add: the page already looks for it and shrugs if
it isn't there.

Same arrangement as `patches/patches.js` and `lib/library.js`, and the same
rules, so there's one thing to learn rather than three.

## How it interacts with what's in the browser

A score in both places is **one score**, matched by `id`, and the browser copy
wins.

- Opening a score from the file doesn't touch it. Only editing does.
- An edited one shows as **·edited** in the list and as a badge beside the name.
  **File → Revert to file** throws your change away.
- Edit one back to matching the file and the override disappears on its own.
- Exporting and dropping the file back in doesn't duplicate anything.
- A score that came from the file can't be deleted in the app. Remove it there.

The app never writes this file.

## Format

```js
window.SCORE_FILES = window.SCORE_FILES || [];
window.SCORE_FILES.push({
  id: "scores",
  name: "My scores",
  scores: [{
    id: "sk3n2xq1",
    name: "Opening set",
    src: "INTRO:\n\tmute vca\n",
    patchId: "pk3n2xq1"
  }]
});
```

- `id` has to be unique and stable. It's what matching is done on.
- `src` is the score, in the syntax the editor uses.
- `patchId` is the patch the score is written against, which is what lets it
  check that every module, jack and cable it names actually exists. Optional: a
  score with no patch still parses, it just can't be checked.

`patchId` refers to a patch in `patches/patches.js` or in browser storage. A
score exported on one machine and opened on another will lose its checking until
the matching patch file is in place too, which is a good reason to move the two
files together.

## More than one file

`scores.js` is the one that loads automatically. Others can be dropped in here
under any name with a script tag next to the existing one in `score.html`:

```html
<script src="scores/2026-tour.js" onerror="void 0"></script>
```

Load order is precedence order, last wins, and browser storage beats all of them.
