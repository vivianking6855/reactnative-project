/**
 * # Root.js
 * app enter
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import UserNativeModule from './common/UserNativeModule';

export default class Root extends Component {

  onPress() {
    UserNativeModule.showToast('Hi ASUS', UserNativeModule.SHORT);
  }

  render() {
    return (
      <View>
        <Text style={styles.text} onPress={this.onPress.bind(this) }>Native Toast</Text>
        <Text style={styles.text} onPress={this.onPress.bind(this) }>Native Activity</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 20,
    margin:20,
  }
});