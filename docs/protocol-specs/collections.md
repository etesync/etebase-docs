---
title: Collections
---

As explained in [the overview](../overview), collections are a collection of items. Collection objects are internally just items with additional data that is specific to each member (user) of a collection. Items and collection memberships will be covered in the next chapters. This chapter will focus on how they interact, and collection specific properties.


## Collection Type

Collections have immutable types associated with them. The types define the data that's stored inside of a collection, for example `notes` will mean the collection includes notes, and `files` will mean the collection includes generic files. Different Etebase applications can use different collection types on the same account. Some applications even use different collection types within the same application.

In order to enable applications to fetch collections efficiently without revealing the collection type itself to the server, Etebase uses deterministic encryption. As explained in [the introduction](./introduction), deterministic encryption means that every clear-text is always encrypted to the same cipher text.

Thanks to this property, Etebase clients can generate a unique collection type token for each collection type. This token can then be sent to the server in order to limit the collections returned by the query. The token is created as follows:

```rust
colTypeToken = detEncrypt(key, collectionType)
```


## Collection structure

TBD
