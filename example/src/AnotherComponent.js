/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.log("start anotherone")
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';
import S from 'react-native-style-utils';
var {height, width} = Dimensions.get('window');

export default class AnotherComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> This is aligned with flex-end and center</Text>
      </View>
    );
  }
}

console.log("another");
console.log(S.customStyle);
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.flatten([S.customStyle, S.box]),
  },
});
console.log("end anotherone")
