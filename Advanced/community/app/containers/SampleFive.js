import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Navigator,
    View,
} from 'react-native';
import SampleFiveSub from './SampleFiveSub';


export default class SampleFive extends Component {
    render() {
        return (
            <Navigator
                ref='navigator'
                initialRoute={{ name: 'HomeView', component: HomeView }}
                configureScene={
                    (route) => {
                        return Navigator.SceneConfigs.VerticalDownSwipeJump;
                    }
                }
                renderScene={
                    (route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }
                }
                />
        );
    }
}

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Click Me to Sub'
        };

        this._navigator = this.props.navigator;
    }

    _navigateToSub() {
        console.log('_navigateToSub');
        const self = this;
        this._navigator && this._navigator.push({
            name: 'SampleFiveSub',
            component: SampleFiveSub,
            params: {
                updateText: (text) => {
                    self._updateText(text);
                }
            }
        });
    }

    _updateText(text) {
        this.updatetext = text
        //this.setState({text: text});
    }

    componentWillMount() {
        console.log('componentWillMount');
        let me = this;
        let willcallback = (event) => {
            console.log('will enter ' + this.props.name);
        };

        let didcallback = (event) => {
            console.log(
                'didfocus event ',
                {
                    route: event.data.route,
                    target: event.target,
                    type: event.type
                });

            // homeview did mount
            if ('HomeView' === event.data.route.name && 'didfocus' === event.type) {
                console.log('didfocus HomeView');
                this.updatetext && me.setState({ text: this.updatetext });
            }
        };

        // observe focus change events from this component
        this._listeners = [
            // 该会页面每次进行切换之前调用
            this._navigator.navigationContext.addListener('willfocus', willcallback),

            // 在每次页面切换完成或者初始化之后进行调用该方法。该参数为新页面的路由
            this._navigator.navigationContext.addListener('didfocus', didcallback),
        ];
    }

    componentWillUnmount() {
        this._listeners && this._listeners.forEach(listener => listener.remove());
    }

    render() {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' }}>
                <Text
                    style={{ fontSize: 30, borderColor: 'gray', borderWidth: 1 }}
                    onPress={this._navigateToSub.bind(this) }>
                    {this.state.text}
                </Text>
            </View>
        );
    }
}