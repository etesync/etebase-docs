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
</CodeTabs>

## Advanced

### Building the package from source

Etebase is currently still in beta, so it's moving fast. If there's a feature you would like to use that hasn't yet been realeased, you can build the package directly from source:

<CodeTabs>
<TabItem value="js">

```shell
git clone https://github.com/etesync/etebase-js/
cd etebase-js
yarn # install dependencies
yarn build
```

</TabItem>
</CodeTabs>

## Problems?

Ask for help on [our chat](https://www.etebase.com/community-chat/) or [reddit](https://www.reddit.com/r/EteSync/).
