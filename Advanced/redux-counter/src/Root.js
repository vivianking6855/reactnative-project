'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
}from 'react-native';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

import BaseApp from './containers/BaseApp';

export default class DemoApp extends Component{
    render(){
        const store = configureStore();

        return (
            <Provider store={store}>
                <BaseApp test={true} />
            </Provider>
        );
    }
}
