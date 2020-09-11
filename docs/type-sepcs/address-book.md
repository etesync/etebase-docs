---
title: Address Book (vCard)
---

Address books store contact information using the [vCard format](https://en.wikipedia.org/wiki/VCard).

The vCard format has different versions, and vCards of all versions can be stored in this type, but the recommended version is 4.0.

## Collection

### type: `etebase.vcard`

This is the type indicating it's a vCard collection.


## Item

### type: leave empty

If the type is empty, it indicates a vCard item. New types may be added in the future.

### name: the UID of the vCard item

This is exactly the same as the UID inside the vCard itself, and is used for quick lookup.

### mtime: milliseconds since epoch

When was this item last modified. Useful for sorting based on modification time.

### Content

The content of the item is the vCard itself and nothing else.
