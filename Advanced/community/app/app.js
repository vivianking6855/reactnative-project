import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import Sample from './containers/SampleFive';

class communitydemo extends Component {
    render() {
        return (
            <Sample /> 
        );
    }
}

AppRegistry.registerComponent('communitydemo', () => communitydemo);