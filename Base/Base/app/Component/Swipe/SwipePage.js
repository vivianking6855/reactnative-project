'use strict';
/**
 * Sample Guide Page
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/Component/Swipe/SwipePage.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import Swiper from 'react-native-swiper'
import Utils from '../utils/Utils'

export default class SwipePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    _onMomentumScrollEnd (e, state, context) {
        // you can get `state` and `this`(ref to swiper's context) from params
        alert('_onMomentumScrollEnd');
    }

    render(){
        return (
            <View>
                <Image style={styles.image} source={require('../res/guidebg.jpg')}>
                    <Swiper
                        style={styles.wrapper}
                        dot={<View style={styles.dot}/>}
                        activeDot={<View style={styles.activeDot}/>}
                        paginationStyle={styles.paginationStyle}
                        loop={false} >
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('../res/guide1.jpg')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('../res/guide2.jpg')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={require('../res/guide3.jpg')} />
                        </View>
                    </Swiper>
                </Image>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    wrapper: {
        //backgroundColor: '#f00',
    },
    slide: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    image: {
        flex: 1,
        width: Utils.deviceWidth,
        height: Utils.deviceHeight,
    },
    dot: {
       backgroundColor:'rgba(255,255,255,.3)',
        width: 13,
        height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7,
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 13,
        height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
    },
    paginationStyle: {
        bottom: 70,
    }
})