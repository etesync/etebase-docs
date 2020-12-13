---
title: Fetching Data
---

There are a lot of common patterns throughout the Etebase API. This document defines some of the common concepts that used in the following sections.

## Stoken

As described in [the overview](../overview.md), stokens are opaque identifiers that mark a point-in-time of the data. It's commonly used to only fetch items that have changed since the last fetch.

## Fetch Options

Fetch options let clients modify the behaviour of requests to the server. They are passed as [query parameters](https://en.wikipedia.org/wiki/Query_string) when making the request.

Here are the supported values:

* `limit`: limit the amount of results when fetching a list.
* `stoken`: limit the results based on the `stoken` (only return newer results).
* `iterator`: filter results when iterating on long lists (similar to `stoken`).
* `prefetch`: indicate to the server how much data to prefetch. This is useful for when you know you will need (or not) the content so you can pre-fetch the data accordingly. Values:
  * `auto` (default): the server decides how to prefetch data.
  * `medium`: fetch items and their list of chunks, but not the content itself.
* `withCollection`: whether to also fetch the collection's main item when fetching the list of items. More on that in later sections.

## List Responses

Lists in the API come in one of two forms:

```rust
StokenListResponse<T> {
    data: [T]
    done: bool,
    stoken: Option<str>,
}
```
or

```rust
IteratorListResponse<T> {
    data: [T]
    done: bool,
    iterator: Option<str>,
}
```

They are essentially the same, with the only difference being the usage of `stoken` and `iterator` for filtering data.

Here is a full description of the fields:

* `data`: a list of type `T` of the data being returned (e.g. `Collection`).
* `done`: whether there are no more items to fetch
* `stoken`/`iterator`: the `stoken` or `iterator` relating to this fetch that can be used to fetch the next batch of items.
