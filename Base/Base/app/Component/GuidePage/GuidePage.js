'use strict';
/**
 * Sample Guide Page
 * https://github.com/vivianking6855/ReactNativeProject/blob/rncomponent/TwoReactNative/app/Component/GuidePage/GuidePage.js
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ViewPagerAndroid,
    Image,
    View
} from 'react-native';
import Strings from './Strings'

// Guide Page definition
const PAGES = 5;
const BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];
const IMAGE_URIS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
    'http://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',
];

export default class GuidePage extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            page: 0,
            animatedEnabled: true,
            progress : {
                position: 0,
                offset: 0,
            }
        };
      }

    // ViewPage methods ----------------------------------------------------------------------------------
    onPageSelected = (e) => {
        this.setState({page: e.nativeEvent.position});
    }

    onPageScroll = (e) =>{
        this.setState({progress: e.nativeEvent});
    }
    // ViewPage methods END----------------------------------------------------------------------------------

    jumpToHome(){

    }

    render(){
        var pages = [];
        for(var i=0; i< PAGES; i++){
            var pageStyle = {
                backgroundColor: BGCOLOR[i % BGCOLOR.length],
                alignItems: 'center',
                padding: 20,
            };
            // fore pages
            if(i< PAGES -1){
                pages.push(
                    <View key={i} style={pageStyle} collapsable={false}>
                        <Image
                            style={styles.image}
                            source={{uri: IMAGE_URIS[i % BGCOLOR.length]}} />
                    </View>
                );
            }else{ // last page
                pages.push(
                    <View key={i} style={pageStyle} collapsable={false}>
                        <Image
                            style={styles.image}
                            source={{uri: IMAGE_URIS[i % BGCOLOR.length]}} />
                        <TouchableOpacity onPress={this.jumpToHome} style={styles.jumpHome}>
                            <Text style={styles.jumpText}>{Strings.JUMP_HOME}</Text>
                        </TouchableOpacity>
                    </View>
                );
            }
        }
        return (
            <View style={styles.container}>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    onPageScroll={this.onPageScroll}
                    onPageSelected={this.onPageSelected}
                    pageMargin={10}
                    ref={viewPager => { this.viewPager = viewPager; }}>
                    {pages}
                </ViewPagerAndroid>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: 300,
        height: 200,
        padding: 20,
    },
    jumpHome: {
        flex: 1,
        alignSelf: 'center',
    },
    jumpText: {
        flex: 1,
        fontSize: 18,
        alignSelf: 'center',
    },
    viewPager: {
        flex: 1,
    },
});