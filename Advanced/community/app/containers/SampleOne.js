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

export default class SampleOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'white',
        };
    }

    _changeColor(color) {
        this.setState({ color: color });
    }

    render() {
        return (
            <View style={{ backgroundColor: this.state.color, flex: 1 }}>
                <Child text='Child one' color='red'
                    changeColor={ (color) => this._changeColor.bind(this, color) }/>
                <Child  text='Child two' color='white'
                    changeColor={ (color) => this._changeColor.bind(this, color) }/>
            </View>
        );
    }
}

class Child extends Component {
    render() {
        return (
            <Text style = {{ fontSize: 50, margin: 20 }}
                onPress={this.props.changeColor(this.props.color) }>
                {this.props.text}
            </Text>
        );
    }
}
