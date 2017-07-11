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
import S from 'react-native-styles';
var {height, width} = Dimensions.get('window');

export default class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Styles!
        </Text>
        <View style={[S.fullWidth, styles.box]}>
          <Text> This is full width</Text>
        </View>
        <View style={[S.alignStartCenter, styles.box]}>
          <Text> This is aligned with flex-start and center</Text>
        </View>
        <View style={[S.alignEndCenter, styles.box]}>
          <Text> This is aligned with flex-end and center</Text>
        </View>
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
  box: {
    margin: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    height: 30,
  },
});

AppRegistry.registerComponent('example', () => example);
