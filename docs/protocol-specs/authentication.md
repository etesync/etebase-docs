---
title: Authentication
---

Etebase uses a [challenge-response](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) zero-knowledge proof for authentication. The client asks the server for an authentication challenge using the `authentication/login_challenge/` HTTP endpoint, and then responds with a signed message to prove it posses the authentication private key.

This makes it possible for Etebase clients to authenticate in a secure manner without needing to send the server any secret information. This ensures that even if the connection was eavesdropped, or the server compromised, an attacker wouldn't be able to impersonate the user, login as them, or gain access to any secret information.


## Signup

In order to use an Etebase server clients first need to signup (create an account). To do this, they first securely generate their cryptographic material and then upload the non-secret parts of it to the server.

The clients need to generate the following data:

* `salt`: securely generated random bytes
* `mainKey`: the user's main encryption key [derived](./introduction.md#key-derivation) using the `salt`, and the user password.
* `accountKey`: a randomly generated symmetric encryption key.
* `authenticationKeypair`: a deterministically generated keypair derived from a key that's in turn derived from `mainKey`.
* `identityKeypair`: a randomly generated keypair that's used for establishing trust between Etebase users.

It then encrypts `identityKeypair` and `accountKey` using `mainKey` into `encryptedContent`.

It then uploads the `SigupBody` to the server using the `authentication/signup/` HTTP endpoint as follows:

```rust
struct User {
  username: str,
  email: str,
}

salt = randombytes(32)
mainKey = pwhash(password, salt)
accountKey = randombytes(32)
encryptedContent = encrypt(mainKey, concat(accountKey, identityKeypair.privkey))
loginPubkey = aunthenticationKeypair.pubkey
pubkey = identityKeypair.pubkey

SignupBody {
    user: User,
    salt: [u8],
    loginPubkey: [u8],
    pubkey: [u8],
    encryptedContent: [u8],
}
```


## Login

In order to login to Etebase, a client first asks the server for the login challenge using the `authentication/login_challenge/` endpoint. The response contains `salt` and an encrypted `challenge`.

The client then uses `salt` and the user's password to generate `mainKey` and from the `authenticationKeypair`. The client then proceeds to sign `challenge` as well as some extra data using a `LoginResponse` object with the following fields:

* `username`: the username this login request is for.
* `challenge`: the challenge sent from the server.
* `host`: the host of the server we are logging into.
* `action`: the string `login`.

The server then validates `LoginResponse` and if successful returns an `AuthenticationToken` that can be used to interact with the API.

The `LoginResponse` is uploaded to the `authentication/login/` HTTP endpoint as follows:

```rust
LoginResponse {
    username: str,
    challenge: [u8], 
    host: str, // The server's hostname
    action: str, // "login"
}

response = msgpack(loginResponse)
signature = sign(authenticationKeypair, response)

LoginBody {
    response: [u8],
    signature: [u8],
}
```


## Password Change

A password change is very similar to [login](#login) as described above.
In order to change a user's login password, a client first asks the server for a `challenge`, and then responds with a signed `response`. The only differences are in the fields included in `response`.

The client first generates new `mainKey` and `authenticationKeypair` similar to the [signup](#signup) section above.

* `action`: is set to the string `changePassword`.

And the following fields are added (similar to signup):

* `loginPubkey`: the `authenticationKeypair`'s public part.
* `encryptedContent`: the encrypted `identityKeypair` and `accountKey` like in signup.


The `Response` is uploaded to the `authentication/change_password/` HTTP endpoint as follows:

```rust
struct Response {
    username: str,
    challenge: [u8],
    host: str, // The server's hostname
    action: str, // "changePassword"

    loginPubkey: [u8],
    encryptedContent: [u8],
}

packedResponse = msgpack(response)
signature = sign(authenticationKeypair, packedResponse)

Body {
    response: [u8],
    signature: [u8],
}
```
