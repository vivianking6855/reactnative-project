/**
 * parent - child communiation sample
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class SampleTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            child1color: 'blue',
        };
    }

    _changeItemColor(color) {
        this.setState({ child1color: color });
    }

    render() {
        return (
            <View style={{flex: 1 }}>
                <Child ref='child1' text='Child one' color={this.state.child1color}/>
                <Child  ref='child2' text='Child two' color='purple'
                    changeBrotherColor={ (color) => this._changeItemColor(color) }/>
            </View>
        );
    }
}

class Child extends Component {

    _changeBrotherColor() {
        this.props.changeBrotherColor && this.props.changeBrotherColor('green');
    }

    render() {
        return (
            <Text style = {{ fontSize: 60, margin: 20, color: this.props.color }}
                onPress={this._changeBrotherColor.bind(this)}>
                {this.props.text}
            </Text>
        );
    }
}