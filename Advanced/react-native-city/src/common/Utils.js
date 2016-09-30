/**
 * # Utils.js
 *
 * common used method or variables.
 * deviceWidth,deviceHeight
 */

/**
 * ## Imports from react
 *
 */
import React, { Component } from 'react';
import {
    Dimensions,
    PixelRatio
} from 'react-native';

/**
 * ##  exports variables
 * deviceWidth
 * deviceHeight
 * unit 
 */
exports.deviceWidth = Dimensions.get('window').width;
exports.deviceHeight = Dimensions.get('window').height;
exports.unit = 1 / PixelRatio.get();

/**
 * ##  exports Utils
 * getJson
 */
exports.Utils = {


};


