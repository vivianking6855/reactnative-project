'use strict';
/**
 * Sample ProgressBar
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/ProgressBarLesson.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ProgressBarAndroid,
    View
} from 'react-native';

export default class ProgressBarLesson extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            language:null
        };
      }

    render() {
        return (
            <View style={[styles.flex,{marginTop:45}]}>
                <ProgressBarAndroid styleAttr="LargeInverse" />
           </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
});