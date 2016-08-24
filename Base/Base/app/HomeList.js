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

export default class HomeList extends Component {
    constructor(props) {
        super(props);
    }

    _pressButton(target) {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                id:target
            })
        }
    }

    render(){
        var list = [];
        for(var i in this.props.list){
            var text=(
                <View style={styles.list_item} key={i}>
                    <Text
                        style={styles.list_item_font}
                        onPress={this._pressButton.bind(this, this.props.list[i] )}
                        key={i}>
                        {this.props.list[i]}
                    </Text>
                </View>
            );
            list.push(text);
        }

        return (
                <ScrollView style={styles.flex}>
                    {list}
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    list_item:{
        height:50,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center',
    },
    list_item_font:{
        fontSize:20,
    },
});