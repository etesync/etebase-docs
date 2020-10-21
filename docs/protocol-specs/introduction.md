---
title: Introduction
---

:::info
This document is meant as an overview for people interested in how the Etebase works behind the scenes and is not required reading for normal usage.
:::

This document assumes you already read [the overview section of the docs](../overview.md) and are familiar with the main Etebase concepts.

## Introduction

The Etebase protocol is purposefully very simple. Etebase uses existing, well-tested and industry standard encryption algorithms, and use them in the most standard way possible to avoid introducing any weaknesses in otherwise secure crypto systems.

The client connects to the server using [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) and then interacts with the server using a very simple [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer).

This makes Etebase very easy to audit, get right, and implement. Making it a solid foundation.


## Cryptographic Primitives

Etebase uses the popular [libsodium](https://libsodium.org) for all of its cryptographic operations. More specifically it uses the following primitives:


### [Key derivation](https://en.wikipedia.org/wiki/Key_stretching)

Etebase uses [Argon2id](https://en.wikipedia.org/wiki/Argon2) for deriving secure encryption keys from user passwords. Argon2id is the current best practice is considered an improvement over the previously recommended [Scrypt](https://en.wikipedia.org/wiki/Scrypt).

It is an order of magnitudes better than alternatives such as [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) which should not be used for such purpose.


### [Hashing](https://en.wikipedia.org/wiki/Cryptographic_hash_function) and [MAC](https://en.wikipedia.org/wiki/Key_stretching)

Hashing is and MACs are a common primitive for any cryptographic library. Etebase uses the fast and hard-to-misuse [BLAKE2b](https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2).


### [Symmetric Encryption](https://en.wikipedia.org/wiki/Symmetric-key_algorithm)

Etebase uses [XChaCha20Poly1305](https://en.wikipedia.org/wiki/Salsa20#XChaCha) for symmetrically encrypting data which is defined in [this IETF document](https://tools.ietf.org/html/draft-arciszewski-xchacha-00). It's a popular [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption#Authenticated_encryption_with_associated_data_(AEAD)) construction that is fast, secure, and hard to misuse.


### [Asymmetric Encryption](https://en.wikipedia.org/wiki/Public-key_cryptography)

Etebase uses the [libsodium `box` functions](https://libsodium.gitbook.io/doc/public-key_cryptography/authenticated_encryption) which in turn uses `X25519` for key exchange, `XSalsa20` for encryption, and `Poly1305` for authentication.

For digital signatures, Etebase uses the [libsodium `sign` functions](https://libsodium.gitbook.io/doc/public-key_cryptography/public-key_signatures) which in turn use `Ed25519`.


### [Deterministic Encryption](https://en.wikipedia.org/wiki/Deterministic_encryption)

Etebase uses deterministic encryption for efficient manipulation of collection types.
For the implementation Etebase uses the same algorithms as with [symmetric encryption](#symmetric-encryption), with the main difference that the `nonce` is generated using a keyed hash of the content (using a specifically derived key). This makes it so each clear text is encrypted to the same ciphertext without sacrificing security.


### [Zero-Knowledge Proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof)

Etebase uses a mechanism based on digital signatures for zero-knowledge proof in the authentication.


## Additional Technologies

As mentioned above the Etebase protocol uses HTTP (with TLS) and a REST API for transport. It also uses the [MessagePack (MsgPack)](https://msgpack.org/) serialization format for all data serializations, both within the library and when communicating with the server. Additionally, when needed to serialize binary data to strings, Etebase uses [non-padded Base64 URL](https://en.wikipedia.org/wiki/Base64#URL_applications).

### Why MsgPack

MsgPack comes with a few major advantages over other popular serialization formats (such as JSON). First of all, Etebase deals with a lot of binary data (encryptions, MACs and etc), and since MsgPack is a binary format, it means that it incurs almost no overhead when using it. Additionally, it can extract binary data without any extra allocations and copies, which is a major advantage.

Additionally, MsgPack is much more compact which means Etebase can store and transfer much less data. Finally, it's both widely used, and strongly typed, which makes development easier and with higher assurances.

### Why Base64 URL

Base64 is the most popular binary-to-string serialization format. However it comes with a major flaw - it's not "URL safe". This means that it includes characters that can't be used in filenames or URL paths. Luckily, there is a variant that replaces the offending characters with URL safe equivalents, which is what we use.
