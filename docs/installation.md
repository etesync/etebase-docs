---
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export function CodeTabs({ children }) {
    return (
        <Tabs
          defaultValue="js"
          groupId="programming-language"
          values={[
            { label: 'JavaScript', value: 'js', },
          ]
        }>
        {children}
        </Tabs>
    );
}

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


### On React Native

Installation on React Native requires a few additional steps:

1. Install [react-native-get-random-values](https://github.com/LinusU/react-native-get-random-values)
2. Install a few packages to make the metro bundler happy (not actually used):
```shell
yarn add crypto@npm:leftpad path fs
```
3. Install [react-native-sodium](https://github.com/lyubo/react-native-sodium)

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
