'use strict';
/**
 * Sample TextInput
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/TextInputLesson.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    TextInput,
    View
} from 'react-native';

var onePT = 1 / PixelRatio.get();

export default class TextInputLesson extends Component {
    // 构造
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.flex,styles.topStatus]}>
                <Search></Search>
            </View>
        );
    }
}

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:false,
            value:null,
        };
    }

    hide(val){
        this.setState(
            {
                show: false,
                value: val,
            }
        );
    }

    getValue(text){
        this.setState({
            show: true,
            value: text,
        });
    }

    render(){
        return(
            <View style={styles.flex}>
                <View style={styles.flexDirection}>
                    <View style={[styles.flex,styles.input]}>
                        <TextInput
                        keyboardType="web-search"
                        placeholder="请输入关键词"
                        value={this.state.value}
                        onChangeText={this.getValue.bind(this)}/>
                    </View>
                    <View style={styles.btn}>
                        <Text style={styles.search} onPress={this.hide.bind(this, this.state.value)}>搜索</Text>
                    </View>
                </View>
                {this.state.show?
                    <View style={styles.result}>
                        <Text onPress={this.hide.bind(this, this.state.value + '提示1')}
                        style={styles.item} numberOfLines={1}>{this.state.value}提示1</Text>
                        <Text onPress={this.hide.bind(this, this.state.value + '提示2')}
                        style={styles.item} numberOfLines={1}>{this.state.value}提示2</Text>
                    </View>
                    : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item:{
        fontSize:16,
        paddingTop:5,
        paddingBottom:10,
    },
    result:{
        marginTop:onePT,
        marginLeft:18,
        marginRight:5,
        height:200,
    },
    flex:{
        flex:1,
    },
    flexDirection:{
        flexDirection:'row',
    },
    topStatus:{
        marginTop:25,
    },
    input:{
        height:50,
        borderColor:'red',
        borderWidth:1,
        marginLeft:10,
        paddingLeft:5,
        borderRadius:5,
    },
    btn:{
        width:45,
        marginLeft:-5,
        marginRight:5,
        backgroundColor:'#23BEFF',
        height:50,
        justifyContent:'center',
        alignItems:'center',
    },
    search:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold',
    },
});