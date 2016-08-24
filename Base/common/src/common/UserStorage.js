/**
 * UserStorage.js
 *
 * storage instance of whole app
 * have one(and only one) storage instance in global scope.
 */

import {
    AsyncStorage,
} from 'react-native';

import Storage from 'react-native-storage';

/**
 * exports storage
 *
 */
let storage = new Storage({
    // maximum capacity, default 1000 
    size: 1000,

    // Use AsyncStorage for RN, or window.localStorage for web.
    // If not set, data would be lost after reload.
    storageBackend: AsyncStorage,

    // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: 1000 * 3600 * 24,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired,
    // the corresponding sync method will be invoked and return 
    // the latest data.
    sync: {
        // we'll talk about the details later.
    }
});

// for react native
exports.gstorage = storage;