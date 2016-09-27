/**
 * # Root.js
 * app enter
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  DeviceEventEmitter
} from 'react-native';

import UserNativeModule from './common/UserNativeModule';

export default class Root extends Component {

  componentWillMount() {
    DeviceEventEmitter.addListener('TEST', this.handleTest.bind(this));
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener('TEST');
  }

  handleTest(param) {
    ToastAndroid.show('JS rev event: ' + JSON.stringify(param), ToastAndroid.SHORT);
  }

  onPress(type = 1) {
    switch (type) {
      case 1: // toast
        UserNativeModule.showToast('Hi ASUS', UserNativeModule.SHORT);
        break;
      case 2:// Activity
        const map = {
          'status': 0,
          'text': 'ASUS from RN',
        };
        UserNativeModule.startActivity(UserNativeModule.ACTIVITY_TEST, map, (result) => {
          ToastAndroid.show(result, ToastAndroid.SHORT);
        });
        break;
      case 3:// android app Version
        UserNativeModule.getPackageVersion()
          .then(result => {
            let version = JSON.stringify(result);
            ToastAndroid.show('Version : ' + version, ToastAndroid.LONG);
          })
          .catch(result => {
            ToastAndroid.show('exception : ' + result);
          });
        break;
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.text} onPress={this.onPress.bind(this) }>Android Toast</Text>
        <Text style={styles.text} onPress={this.onPress.bind(this, 2) }>Activity</Text>
        <Text style={styles.text} onPress={this.onPress.bind(this, 3) }>App Version</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 20,
    margin: 20,
  }
});