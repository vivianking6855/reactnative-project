'use strict';
/**
 * Sample Picker
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/PickerLesson.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    Picker,
    View
} from 'react-native';

export default class PickerLesson extends Component {
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
                <Text> Picker组件 </Text>
                <Picker selectedValue={this.state.language}
                    onValueChange={lang => this.setState({language:lang})}
                    mode="dialog"
                     style={{color:'#F00'}} >
                    <Picker.Item label="111" value="111" />
                    <Picker.Item label="222" value="222" />
                </Picker>
                <Text> {this.state.language} </Text>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
});