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
import AnotherComponent from './AnotherComponent.js';
var {height, width} = Dimensions.get('window');

S.setStyle('customStyle', {
  justifyContent: 'flex-end',
  alignItems: 'center',
});

S.setStyle('box', {
  margin: 10,
  backgroundColor: '#ffffff',
  borderWidth: 1,
  height: 30,
});

export default class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Styles!
        </Text>
        <View style={[S.fullWidth, S.box]}>
          <Text> This is full width</Text>
        </View>
        <View style={[S.alignStartCenter, S.box]}>
          <Text> This is aligned with flex-start and center</Text>
        </View>
        <AnotherComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.flatten([S.container, S.alignCenter]),
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
});

AppRegistry.registerComponent('example', () => example);
