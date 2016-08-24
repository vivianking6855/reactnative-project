'use strict';
/**
 * Sample TextInput
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/TouchableLesson.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

var onePT = 1 / PixelRatio.get();

export default class TouchableLesson extends Component {
    // 构造
    constructor(props) {
        super(props);
    }

    show(txt){
        alert(txt);
    }

    render() {
        return (
            <View style={styles.flex}>
                <TouchableHighlight onPress={this.show.bind(this,'TouchableHighlight')}
                    underlayColor='#E1F6FF'>
                    <Text style={styles.item}>TouchableHighlight</Text>
                </TouchableHighlight>
                <TouchableOpacity onPress={this.show.bind(this,'TouchableOpacity')}>
                    <Text style={styles.item}>TouchableOpacity</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={this.show.bind(this,'TouchableWithoutFeedback')}>
                    <View style={styles.item}>TouchableWithoutFeedback</View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
        marginTop:25,
    },
    item:{
        fontSize:18,
        color:'#434343',
        marginLeft:5,
        marginTop:10,
    },
});