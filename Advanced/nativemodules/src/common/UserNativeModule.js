'use strict';

/**
 * This exposes the native UserNativeModules module as a JS module. 
 * This has a some function of UserNativeModules. such as  'showToast', 'showActivity'
 * for detail parametoers, please check UserNativeModule.java in android folder
 * 
 * @param message the text to show in toast
 * @param duration toast show time
   @ReactMethod
   public void showToast(String message, int duration) {...}
 */
let { NativeModules } = require('react-native');

module.exports = NativeModules.UserNativeModule;