/**
 * Sample View
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/ViewLesson.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';

export default class ViewLesson extends Component{
    // 构造
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.container}>
                    <View style={[styles.item,styles.center]}>
                        <Text style={styles.font}>左边</Text>
                    </View>
                    <View style={[styles.item,styles.lineLeftRight]}>
                        <View style={[styles.center,styles.flex,styles.lineCenter]}>
                        <Text style={styles.font}>中上</Text>
                        </View>
                        <View style={[styles.center,styles.flex]}>
                        <Text style={styles.font}>中下</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={[styles.center,styles.flex,styles.lineCenter]}>
                        <Text style={styles.font}>右上</Text>
                        </View>
                        <View style={[styles.center,styles.flex]}>
                        <Text style={styles.font}>右下</Text>
                        </View>
                    </View>
                </View>
            </View>
);
}
}

const styles = StyleSheet.create({
    container: {
        marginTop:200,
        marginLeft:5,
        marginRight:5,
        height:84,
        flexDirection:'row',
        borderRadius:5,
        padding:2,
        backgroundColor:'#FF0067',
    },
    item: {
        flex: 1,
        height:80,
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    flex:{
        flex:1,
    },
    font:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    lineLeftRight:{
        borderLeftWidth:1/PixelRatio.get(),
        borderRightWidth:1/PixelRatio.get(),
        borderColor:'#fff',
    },
    lineCenter:{
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#fff',
    },
});