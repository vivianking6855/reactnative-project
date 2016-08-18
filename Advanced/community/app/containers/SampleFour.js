import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

SampleFour.childContextTypes ={
       text: React.PropTypes.any,
       changeText: React.PropTypes.any
}

export default class SampleFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    getChildContext() {
        return {
            text: this.state.text,
            changeText: this.changeText
        };
    }

    changeText(text) {
        this.setState({ text: text });
    }

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
    contextTypes: {
        changeText: React.PropTypes.any
    }

    _onChangeText(item) {
        this.context.changeText(item);
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
                <TextInput onChangeText={(text) => this._onChangeText(text) } style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }} />
            </View>
        );
    }
}

class ChildShow extends Component {
    contextTypes: {
        text: React.PropTypes.any
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
                <Text>{this.context.text}</Text>
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