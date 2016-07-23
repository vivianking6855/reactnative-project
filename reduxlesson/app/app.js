/**
 * @description app entry
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './pages/Home';
import Login from './pages/Login';

class reduxlesson extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="home" component={Home}  initial={true}/>
                </Scene>
            </Router>
        );
    }
}

AppRegistry.registerComponent('reduxlesson', () => reduxlesson);
