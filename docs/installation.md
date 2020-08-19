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
    def etebaseVersion = '0.1.0'
    implementation "com.etebase:client:$etebaseVersion@aar"
}
```

</TabItem>
<TabItem value="kt">

To install Etebase on Android:

```groovy title="app/build.gradle"
dependencies {
    // ... rest of the deps
    def etebaseVersion = '0.1.0'
    implementation "com.etebase:client:$etebaseVersion@aar"
}
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
</CodeTabs>

## Advanced

### Building the package from source

Please check out the README of each library for language specific instructions.


## Problems?

Ask for help on [our chat](https://www.etebase.com/community-chat/) or [reddit](https://www.reddit.com/r/EteSync/).
