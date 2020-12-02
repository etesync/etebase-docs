---
title: Installation
---

import CodeTabs from '@theme/CodeTabs';
import TabItem from '@theme/TabItem';


:::info
These docs currently refer to the TypeScript/JavaScript client library, but they will be expanded once we release the other clients.
:::

## Installation

Run the following commands from your project's directory to install the Etebase dependency:

<CodeTabs>
<TabItem value="js">

```shell
yarn add etebase
```


### On Node

```shell
yarn add etebase node-fetch
```

### On React Native

```shell
yarn add etebase react-native-etebase react-native-get-random-values react-native-sodium
```

You now need to import it at the top of your project (e.g. `index.js`) like so:

```js
import 'react-native-etebase';
```


### On the web (without a bundler)

```shell
yarn add etebase
```

The UMD bundle is then available at `node_modules/etebase/dist/umd/Etebase.js`. You can use it like this:

```html
<script src="path/to/Etebase.js"></script>
```

</TabItem>
<TabItem value="py">

```shell
pip install etebase
```

</TabItem>
<TabItem value="java">

To install Etebase on Android:

```groovy title="app/build.gradle"
dependencies {
    // ... rest of the deps
    def etebaseVersion = '2.1.0'  // IMPORTANT: replace with the latest etebase version
    implementation "com.etebase:client:$etebaseVersion"
}
```

</TabItem>
<TabItem value="kt">

To install Etebase on Android:

```groovy title="app/build.gradle"
dependencies {
    // ... rest of the deps
    def etebaseVersion = '2.1.0'  // IMPORTANT: replace with the latest etebase version
    implementation "com.etebase:client:$etebaseVersion"
}
```

</TabItem>
<TabItem value="c">

To use the C library please get it from your distributions package manager (where available) or build the library from source.

</TabItem>
<TabItem value="rs">

To use etebase add the etebase crate to the projects `Cargo.toml`

```toml
[dependencies]
etebase="..."
```

</TabItem>
</CodeTabs>

## Using the package in your project

You can then use the package like you would any other:
<CodeTabs>
<TabItem value="js">

```js
import * as Etebase from 'etebase';

Etebase.Account.login(...);
```

</TabItem>
<TabItem value="py">

```python
from etebase import Account

Account.login(...)
```

</TabItem>
<TabItem value="java">

```java
import com.etebase.client.Account;

Account etebase = Account.login(...)
```

</TabItem>
<TabItem value="kt">

```kotlin
import com.etebase.client.Account

val etebase = Account.login(...)
```

</TabItem>
<TabItem value="c">

```c
#include <etebase.h>

EtebaseAccount *account = etebase_account_login(...);
```

</TabItem>
<TabItem value="rs">

```rust
use etebase::Account;

let account = Account::login(...)?;
```

</TabItem>
</CodeTabs>

## Advanced

### Building the package from source

Please check out the README of each library for language specific instructions.


## Problems?

Ask for help on [our chat](https://www.etebase.com/community-chat/) or [reddit](https://www.reddit.com/r/EteSync/).
