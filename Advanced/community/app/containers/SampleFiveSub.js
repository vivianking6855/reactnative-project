import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default class SampleFiveSub extends Component {
    _back() {
        console.log('SampleFiveSub _back');
        this.props.updateText && this.props.updateText(this.text)
        const {navigator} = this.props;
        navigator && navigator.pop();
    }

    render() {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
                <TextInput
                    onChangeText={(text) => this.text = text }
                    style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }} />
                <Text
                    style={{ color: 'red', fontSize: 20, marginTop:30 }}
                    onPress={this._back.bind(this) }>
                    Input something and Click me back
                </Text>
            </View>
        );
    }
}