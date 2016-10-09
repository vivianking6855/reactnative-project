/**
 * # Root.js
 * app enter
 */

import React, { Component } from 'react';
import {
  Text,
  Navigator,
  View,
} from 'react-native';

import Home from './containers/Home'

export default class Root extends Component {
  render() {
    return (
      <Navigator
        ref='navigator'
        initialRoute = {{ name: 'Home', component: Home }}
        configureScene = {
          (route) => {
            return Navigator.SceneConfigs.FloatFromRight;
          }
        }

        renderScene = {
          (route, navigator) => {
            let Component = route.component;
            return (
              <View style={{ flex: 1, backgroundColor: 'white' }} >
                <Component {...route.params} navigator={navigator}/>
              </View>);
          }
        }
        />
    );
  }
}