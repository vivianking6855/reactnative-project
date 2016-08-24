'use strict';
/**
 * Sample ProgressBar
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/DrawerLayoutLesson.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    DrawerLayoutAndroid,
    View
} from 'react-native';

export default class DrawerLayoutLesson extends Component {
    render() {
        var navigationView = (
            <View style={[styles.flex]}>
                <Text style = {styles.title}>This is Draw</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={100}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView} >
                <View style={styles.drawview}>
                    <Text style={styles.drawitem}>Hello</Text>
                    <Text style={styles.drawitem}>Draw is Right</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
        backgroundColor:'#ff0',
    },
    title:{
        margin:10,
        fontSize:20,
        textAlign: 'left',
    },
    drawview:{
        flex: 1,
        alignItems: 'center'
    },
    drawitem:{
        margin: 10,
        fontSize: 15,
        textAlign: 'right',
    },
});