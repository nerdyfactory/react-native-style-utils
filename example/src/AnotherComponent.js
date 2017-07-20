/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
      <View style={[S.customStyle, S.box]}>
        <Text> This is aligned with flex-end and center</Text>
      </View>
    );
  }
}
