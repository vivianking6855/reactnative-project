/**
 * # CountDownText.js
 * @author vivian_sun
 * @version 1.0
 * @date 2016.6.22
 *
 *  use count text component like
     <CountDownText
         style={styles.countText}
         auto={true} // auto start
         onPress = {this.jump.bind(this)}
         afterEnd={this.jump.bind(this)}  // end call back
         startTime={3} // start time /s
         step={-1} // count down step
         startText= {Strings.JUMP_START_TEXT}  // start text
         endText= {Strings.JUMP_END_TEXT} // end text
         intervalText={(sec) => sec + Strings.JUMP_MID_TEXT} // mid text
     />
 */

/**
 * ## Imports
 *
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
const timer = require('react-native-timer');

const TIMER_NAME = 'count';
const TIME_OUT = 1000; // 1s
let _gcount = 10;
/**
 * ## export CountDownText
 *
 */
export default class CountDownText extends Component {
    mixins: [TimerMixin]
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text: this.props.startText, // 要显示文本
         };
    }

    componentDidMount() {
        _gcount = this.props.startTime;
        if(this.props.auto){
            this._countDown();
        }
    }

    componentWillUnmount(){
        // clears all intervals for a context
        timer.clearInterval(this);
    }

    //------------------------------------------------- count logic
    _countDown(){
        timer.setInterval(this, TIMER_NAME, () => this._refresh(), TIME_OUT);
    }

    _refresh(){
        _gcount = _gcount -1;

        // update text
        this.setState({
            text: this.props.intervalText(_gcount)
        });

        // if count 0, end it
        if (_gcount == 0){
            this._onEnd();
        }
    }

    // count down end, count is 0
    _onEnd(){
        this.setState({text: this.props.endText});
        if(this.props.afterEnd){
            this.props.afterEnd();
        }
        timer.clearInterval(this);
    }
    //----------------------------------------------- count logic end

    _onPress(){
        if(this.props.onPress){
            this.props.onPress();
        }
    }

    render(){
        return (
            <Text style={this.props.style}
                onPress = {this._onPress.bind(this)} >{this.state.text}
            </Text>
        );
    }
}

/**
 * Props Validation
 * @type {Object}
 */
CountDownText.propTypes = {
    afterEnd        : React.PropTypes.func,        // end function call back
    onPress         : React.PropTypes.func,        // on press call back of text
    startTime       : React.PropTypes.number,      // start time
    step            : React.PropTypes.number,      // timer step /s, such as : negative number count down; positive number count up
    startText       : React.PropTypes.string,      // start text
    intervalText    : React.PropTypes.func,        // interval text
    endText         : React.PropTypes.string,      // end text
    auto            : React.PropTypes.bool,        // auto start
}

/**
 * Default props
 * @return {object} props
 * @see
 */
CountDownText.defaultProps = {
    afterEnd        : null,
    onPress         : null,
    startTime       : 0,
    step            : -1,
    startText       : null,
    intervalText    : null,
    endText         : null,
    auto            : false,
}
