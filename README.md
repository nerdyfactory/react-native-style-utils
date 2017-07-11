# react-native-style-utils
Stylesheet utility library for react native

react-native-style-utils is a very simple utility for creating stylesheet.

## Installation
```
$ npm install --save react-native-style-utils
```

## Usage

```js
import S from 'react-native-style-utils';
```

you can use this when you create style sheet
```js
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.flatten([S.container, S.alignCenter]),
    backgroundColor: '#F5FCFF',
  },
});
```

or import styles directly
```jsx
  <View style={[S.alignStartCenter, styles.box]}>
    <Text> This is aligned with flex-start and center</Text>
  </View>
```

Refer to [source code](https://github.com/nerdyfactory/react-native-style-utils/blob/master/lib/index.js) for predefined styles available.

Any suggestions on new style definition are appreciated.

## Contribution
Fork, fix and make a pull request.
