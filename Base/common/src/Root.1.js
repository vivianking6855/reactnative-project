import React, {  Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

import {Utils} from './common/Utils';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: '',
        };
    }

    componentWillMount() {
        this._getTheme();
    }

    _saveTheme() {
        // save theme to storage
        Utils.saveTheme('blue');
    }

    _getTheme() {
        Utils.getTheme((name) => {
            if (name !== this.state.theme) {
                this.setState({ theme: name });
            }
        });
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, }} onPress={this._saveTheme.bind(this) }>Save Theme</Text>
                <Text style={{ fontSize: 30, margin: 10 }} onPress={this._getTheme.bind(this) }>Theme {this.state.theme}</Text>
            </View>
        )
    }
}