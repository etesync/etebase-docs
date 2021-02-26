---
title: Notes (Markdown)
---

Note collections store their data in [Markdown](https://en.wikipedia.org/wiki/Markdown).

The notes spec is still young and evolving, though as long as you follow the specification below your notes will continue working as the spec improves.

## Collection

### Collection type: `etebase.md.note`

This is the type indicating it's an Etebase-style Markdown note.

### Metadata

#### name: string

The user visible name of the notebook.

#### description: string (optional)

The user visible description of the notebook.

#### color: string (recommended)

The user visible color of the notebook as `#RRGGBB` or `#RRGGBBAA`.

#### mtime: milliseconds since epoch

When was this collection last modified.


## Item

### Metadata

#### type: leave empty

If the type is empty, it indicates a note item. New types may be added in the future, so to make sure you are future-compatible, check the type is empty before processing items.

#### name: string

The user visible name of the note, e.g. "Shopping list".

#### mtime: milliseconds since epoch

When was this item last modified. Useful for sorting based on modification time.

### Content

The content of the item is the note in the Markdown format.
