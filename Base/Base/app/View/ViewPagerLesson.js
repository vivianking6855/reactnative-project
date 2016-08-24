'use strict';
/**
 * Sample Image
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/ViewPagerLesson.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ViewPagerAndroid,
    View
} from 'react-native';

export default class ViewPagerLesson extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render() {
        return (
            <ViewPagerAndroid
                initialPage= {0}
                style = {styles.viewpager}>
                <View style = {styles.center}><Text>First</Text></View>
                <View style = {styles.center}><Text>Second</Text></View>
                <View style = {styles.center}><Text>Third</Text></View>
            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({
    viewpager:{
        height: 200,
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },
});
