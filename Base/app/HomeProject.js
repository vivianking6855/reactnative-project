'use strict';
/**
 * Sample  Project Home Page
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/HomeProject.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    BackAndroid,
    Navigator,
    View
} from 'react-native';

import WebAsyncPage from  'Component/WebAsync/WebAsyncPage';
import GuidePage from  'Component/GuidePage/GuidePage';
import SwipePage from 'Component/Swipe/SwipePage'
import HomeList from './HomeList'

const MODELIDS = [
    '1. GuidePage',
    '2. WebAsync',
    '3. SwipePage',
];

var _navigator;

class TwoReact extends Component {
    _onBackPress = (event) => {
        let nav = this.refs.navigator;
        let routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //两秒内连续点back退出
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show(Strings.backAgainToExit, ToastAndroid.SHORT);
            return true;
        }
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this._onBackPress);
        }
    }

    componetWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this._onBackPress);
        }
    }

    _renderScene(route, nav) {
        _navigator = nav;
        var Component;
        switch (route.id) {
            case '1. GuidePage':
                Component = GuidePage;
                break;
            case '2. WebAsync':
                Component = WebAsyncPage;
                break;
            case '3. SwipePage':
                Component = SwipePage;
                break;
            case 'HomeList':
                Component = HomeList;
                return <Component navigator = {nav} list = {MODELIDS}/ >;
        }
        return <Component {...route.params} navigator = {nav}/ >;
    }

    render() {
        return (
            <Navigator
                ref={(navigator) => this.refs.navigator = navigator}
                initialRoute={{ id: 'HomeList' }}
                //配置场景
                configureScene = {
                    (route) => {
                        return Navigator.SceneConfigs.VerticalDownSwipeJump;
                    }
                }
                renderScene={ this._renderScene} />
        );
    }
}

AppRegistry.registerComponent('TwoReact', () => TwoReact);
