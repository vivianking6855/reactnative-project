import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

export default class SampleThree extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ChildInput />
                <ChildShow />
            </View>
        );
    }
}

class ChildInput extends Component {

    handleUpdateChange(text) {
        RCTDeviceEventEmitter.emit('change', text);
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
                <TextInput onChangeText={(text) => this.handleUpdateChange(text) } style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }} />
            </View>
        );
    }
}

class ChildShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    componentDidMount() {
        let me = this;
        RCTDeviceEventEmitter.addListener('change', function (text) {
            me.setState({
                text: text
            })
        })
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
                <Text>{this.state.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});