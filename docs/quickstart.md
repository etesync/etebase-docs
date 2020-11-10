---
title: Quickstart
---

To start using Etebase you first need a server to connect to. The easiest way to do it is to [signup for a developer account](https://www.etebase.com/signup) and get your developer server URL from the dashboard.

You can then use the server URL in your app to [create users](./guides/basic_authentication#signup) using any of the client libraries. When users are created, the client libraries also derive an encryption key from the password and setup the encryption data. All of this is done on the client, and neither the password, nor the secret key ever leave the device.

Once you've created a user account, you can go on and start [encrypting and uploading data](./guides/using_collections) and using the rest of what Etebase has to offer.
