'use strict';
/**
 * Sample Home
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/Home.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    BackAndroid,
    Navigator,
    ScrollView,
    View
} from 'react-native';

import ViewPagerLesson from  './ViewPagerLesson';
import DrawerLayoutLesson from  './DrawerLayoutLesson';
import ImageLesson from  './ImageLesson';
import NavigatorLesson from  './NavigatorLesson';
import PickerLesson from  './PickerLesson';
import ProgressBarLesson from  './ProgressBarLesson';
import TextInputLesson from  './TextInputLesson';
import TextLesson from  './TextLesson';
import TouchableLesson from  './TouchableLesson';
import ViewLesson from  './ViewLesson';
import HomeList from  './../HomeList';

const MODELIDS = [
    '10. ViewPager',
    '9. DrawerLayoutLesson',
    '8. ImageLesson',
    '7. NavigatorLesson',
    '6. PickerLesson',
    '5. ProgressBarLesson',
    '4. TextInputLesson',
    '3. TextLesson',
    '2. TouchableLesson',
    '1. ViewLesson',
];

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
    _navigator.pop();
    return true;
});

class TwoReact extends Component {

    _renderScene(route, nav){
        _navigator = nav;
        var Component;
        switch (route.id){
            case '10. ViewPager':
                Component = ViewPagerLesson;
                break;
            case '9. DrawerLayoutLesson':
                Component = DrawerLayoutLesson;
                break;
            case '8. ImageLesson':
                Component = ImageLesson;
                break;
            case '7. NavigatorLesson':
                Component = NavigatorLesson;
                break;
            case '6. PickerLesson':
                Component = PickerLesson;
                break;
            case '5. ProgressBarLesson':
                Component = ProgressBarLesson;
                break;
            case '4. TextInputLesson':
                Component = TextInputLesson;
                break;
            case '3. TextLesson':
                Component = TextLesson;
                break;
            case '2. TouchableLesson':
                Component = TouchableLesson;
                break;
            case '1. ViewLesson':
                Component = ViewLesson;
                break;
            case 'HomeList':
                Component = HomeList;
                break;
        }
        return <Component navigator = {nav} list = {MODELIDS}/ >;
    }

    render() {
        return (
            <Navigator
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
