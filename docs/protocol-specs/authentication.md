---
title: Authentication
---

Etebase uses a [challenge-response](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) protocol for authentication. The client asks the server for an authentication challenge using the `authentication/login_challenge/` HTTP endpoint, and then responds with a signed message to prove it posses the authentication private key.


## Signup

In order to use an Etebase server clients first need to signup (create an account). To do, they first securely generate their cryptographic material and then upload the non-secret parts of it to the server.

The clients need to generate the following data:

* `Salt`: securely generated random bytes
* `MainKey`: the user's main encryption key [derived](./introduction.md#key-derivation) using the `Salt`, and the user password.
* `AccountKey`: a randomly generated symmetric encryption key.
* `AuthenticationKeypair`: a deterministically generated keypair derived from a key that's in turn derived from `MainKey`.
* `IdentityKeypair`: a randomly generated keypair that's used for establishing trust between Etebase users.

It then encrypts `IdentityKeypair` and `AccountKey` using `MainKey`, and uploads that encrypted blob as well as the `AccountKey`'s public portion and `Salt` to the server using the `authentication/signup/` HTTP endpoint.


## Login

In order to login to Etebase, a client first asks the server for the login challenge, which contains `Salt` and an encrypted `Challenge`.

The client then uses `Salt` and the user's password to generate `MainKey` and from the `AuthenticationKeypair`. The client then proceeds to sign `Challenge` as well as some extra data using a `Response` dictionary with the following fields:

* `username`: the username this login request is for.
* `challenge`: the challenge sent from the server.
* `host`: the host of the server we are logging into.
* `action`: the string `login`.

The server then validates `Response` and if successful returns an `AuthenticationToken` that can be used to interact with the API.


## Password Change

A password change is very similar to [login](#login) as described above.
In order to change a user's login password, a client first asks the server for a `Challenge`, and then responds with a signed `Response`. The only differences are in the fields included in `Response`.

The client first generates new `MainKey` and `AuthenticationKeypair` similar to the [signup](#signup) section above.

* `action`: is set to the string `changePassword`.

And the following fields are added (similar to signup):

* `loginPubkey`: the `AuthenticationKeypair`'s public part.
* `encryptedContent`: the encrypted `IdentityKeypair` and `AccountKey` like in signup.
