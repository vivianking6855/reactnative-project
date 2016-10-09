/**
 * # City Demo
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import City from './City';

export default class Home extends Component {

  constructor(props, context) {
    super(props, context);
  }

  jump = () => {
    const {navigator} = this.props;
    navigator.push({
      name: 'City',
      component: City,
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.jumpText} onPress={this.jump}>跳转</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  jumpText: {
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 30,
    color: 'green',
  },

});