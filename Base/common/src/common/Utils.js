
/**
 * @description tils.js
 *
 */

import {gstorage} from './UserStorage';

const Utils = {

    getTheme(callback = undefined) {
        // load theme from storage
        gstorage.load({
            key: 'theme',
        }).then(ret => {
            // found data goes to then()
            if (callback != undefined) {
                callback(ret.theme);
            }
        }).catch(err => {
            // any exception including data not found 
            // goes to catch()
            console.log('getTheme err: ' + JSON.stringify(err));
        });
    },

    saveTheme(name) {
        // save storage
        gstorage.save({
            key: 'theme',  // Note: Do not use underscore("_") in key!
            rawData: {
                theme: name,
            },
            expires: null   // if set to null, then it will never expire.
        })
    },
};
exports.Utils = Utils;