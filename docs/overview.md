---
title: Overview
---

Etebase makes building end-to-end encrypted applications easy by taking care of the encryption and its related challenges. That's why you would rarely if ever see any mention of encryption of the API. Everything is taken care of by Etebase.

When working with Etebase you will mostly be working with `Collection` objects, `Item` objects, and sometimes with `Revision` items. These are the basic building blocks of every Etebase application.


## Items

Almost all of the data in Etebase is stored in items. Items, like the rest of Etebase are encrypted and signed to make sure no one can read or tamper with the data. Items must reside inside collections and don't live on their own.

Items can represent and hold whatever kind of data and be organised in whatever structure that suits your needs, including: key-value stores, files and directories (pointing to other items). You can think of them as almost equivalent to [inodes](https://en.wikipedia.org/wiki/Inode).

Items have two different areas where data is stored, one for metadata and one for the actual content.

### Metadata

The metadata of items consists of the following fields:

#### `type: string (optional)`

The type of the item. It's useful if you have multiple types of information inside the same collection. E.g. if you are building a note-taking app you may use `note` for notes and `attachment` for image attachments.

#### `name: string (optional)`

An optional name for the item. If this item needs a user visible name, this is the place for it. This can be used, for example, for filenames.

#### `mtime: number (optional)`

When this item was last modified in milliseconds since epoch.

#### `extra: dictionary (optional)`

A dictionary of arbitrary objects for extra, developer specific data. For example: `author` to store the author of the data, and `color` in case you want color associated with this item.

### Content

The content of the item can be whatever you want. Internally it's treated like a blob of data. In most cases you will just store your raw data here, but in some cases, such as when representing an hierarchical structure (such as directories), it's better to conform to the standard Etebase way of doing it.


## Collections

Collections are a collection of items. Like items, they also have their own metadata and content, and are also encrypted and signed. Unlike items, they also have an associated sync token (`stoken`) which indicates whether the collection or its items have changed.

In addition to the above, collections can also be shared with other users and have associated access control. If you think of items as the equivalent of [inodes](https://en.wikipedia.org/wiki/Inode), then collections are the equivalent of filesystems.


### Metadata

The metadata of collections consists of the following fields:

#### `type: string`

The type of the item. It uses a dotted notation, prefixed with a unique developer prefix followed with whatever you want. For example, if your developer name is _Cyberdyne_, example types could be: `cyberdyne.files`, `cyberdyne.calendar` or really, whatever you want.

In addition to creating your own types, you can also use [existing types](type-sepcs/introduction) as long as you follow their specifications.

#### `name: string`

A user visible name for this collection. In some cases this name will be shown to the user, for example if it represents a calendar, the name could be <q>Holiday</q>. Though a descriptive name is still useful even if it doesn't have a user-facing role.

#### `description: string (optional)`

A user visible description for this collection, to better explain to the user what this collection is for.

#### `color: string (optional)`

A hash prefixed HTML-like color description that follows the following format: `#RRGGBBAA`. For example: `#348294FF`.

#### `extra: dictionary (optional)`

A dictionary of arbitrary objects for extra, developer specific data. It's the same [as for items](#extra-dictionary-optional).

### Content

The content of the item can be whatever you want. Internally it's treated like a blob of data. In most cases you will just store your raw data here, but in some cases, such as when representing an hierarchical structure (such as directories), it's better to conform to the standard Etebase way of doing it.

### Sync token (`stoken`)

The collection also has an addition read-only field called `stoken`. It changes every time a collection or its items have changed, and can be used to efficiently fetch only changed entries, or to enforce collection-wide integrity.

## Revisions

You won't often be interacting with revisions directly, but it's still good to know they are there. Essentially, every time you change a collection or an item a new revision is created. Each revision is a snapshot of the collection or item at that point in time so you can easily view and rollback changes.

This is very useful if you would like to offer a change history to your users, or even if you just want to make sure your data is never lost, even if you make a mistake.
