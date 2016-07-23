import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
    render() {
        const goToLogin = () => Actions.login({ text: 'Hello World!' });
        return (
            <View style={{ margin: 128 }}>
                <Text onPress={goToLogin}>This is Home!</Text>
            </View>
        )
    }
}