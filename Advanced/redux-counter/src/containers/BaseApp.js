import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
}from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {addItem, minusItem}  from '../action/action';

var CounterActions = { addItem, minusItem };

class BaseApp extends Component {
    render() {
        const {counter, addItem, minusItem} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Clicked: {counter} times
                </Text>
                <TouchableHighlight style={styles.btn} onPress={addItem}>
                    <Text style={{ alignSelf: 'center' }}>Add</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={minusItem}>
                    <Text style={{ alignSelf: 'center' }}>Minus</Text>
                </TouchableHighlight>

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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    btn: {
        height: 40,
        width: 80,
        marginTop: 80,
        backgroundColor: 'pink'
    }
});

function mapStateToProps(state) {
    console.log('mapStateToProps...');
    console.log('state：' + state.counter);
    return {
        counter: state.num,
    }
}

// function bindActionCreator(actionCreator, dispatch) {
//     return function () {
//         console.log('***********');
//         for(var i=0;i<arguments.length;i++){
//             console.log(arguments[i]);
//         }
//         return dispatch(actionCreator.apply(undefined, arguments));
//     };
// }

// function bindActionCreators(actionCreators, dispatch) {
//     if (typeof actionCreators === 'function') {
//         return bindActionCreator(actionCreators, dispatch);
//     }

//     if (typeof actionCreators !== 'object' || actionCreators === null) {
//         throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
//     }

//     var keys = Object.keys(actionCreators);
//     var boundActionCreators = {};
//     for (var i = 0; i < keys.length; i++) {
//         var key = keys[i];
//         console.log('xxxxx---' + keys.length);
//         console.log(key);
//         var actionCreator = actionCreators[key];
//         console.log(actionCreator);
//         if (typeof actionCreator === 'function') {
//             console.log('actionCreator is function...');
//             boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
//         }
//     }
//     console.log('******************');
//     console.log(boundActionCreators);
//     return boundActionCreators;
// }

function mapDispatchToProps(dispatch) {
    console.log('mapDispatchToProps...');
    console.log(CounterActions);
    return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseApp);

