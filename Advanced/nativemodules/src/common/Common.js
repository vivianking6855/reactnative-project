/**
 * # Common.js
 *
 * common variables, host, server apis, storage key,
 * global object
 */

/**
 * ##  imports
 * 
 */
import {
    AsyncStorage
} from 'react-native';

/**
 * ##  variables
 * 
 */
let host = 'http://laravel.myhope.site/';
exports.HOST_URL = host;
const Constants = {
    APIS: {
        ROOT: `${host}api/`,
        LOGIN: `${host}api/login`,
        LOGOUT: `${host}api/logout`,
    },

    // storage
    STORAGE_USERINFO: 'storage.userinfo',

    // if first launcher
    STORAGE_FIRST_KEY: 'storage.first_key',
};
module.exports.Constants = Constants;

/**
 * @description
 * global variables of app
 * 
 * @class GlobalObj
 */
class GlobalObj {
    constructor() {
        this.user = {};
    }

    setUser(user) {
        this.user = user;
    }
};
module.exports.Globals = new GlobalObj();