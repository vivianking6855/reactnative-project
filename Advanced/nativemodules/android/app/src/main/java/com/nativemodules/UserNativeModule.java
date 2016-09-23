/**
 * @description all method called by JS here.
 */

package com.nativemodules;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by vivian on 2016/9/8.
 */
public class UserNativeModule extends ReactContextBaseJavaModule implements ActivityEventListener {
    private static final String TAG = "UserNativeModule";

    // Toast time
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    // Activity ModuleName to specify Activity type and deal with call back
    private static final String ACTIVITY_TEST_NAME = "ACTIVITY_TEST";
    private static final int ACTIVITY_TEST_ID = 1000;

    public Callback mCallback;
    private Promise mPromise;

    public UserNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);

        // to get results from an activity you started with startActivityForResult.
        reactContext.addActivityEventListener(this);
    }

    @Override
    public String getName() {
        return "UserNativeModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        constants.put(ACTIVITY_TEST_NAME, ACTIVITY_TEST_ID);
        return constants;
    }

    @Override
    public void onNewIntent(Intent intent) {

    }

    /**
     * @param message  the text to show in toast
     * @param duration toast show time
     */
    @ReactMethod
    public void showToast(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    /**
     * @param module   activity id that which activity you want to call up
     * @param map
     * @param callback
     */
    @ReactMethod
    public void startActivity(int module, final ReadableMap map, Callback callback) {
        mCallback = callback;
        Activity currentActivity = getCurrentActivity();
        switch (module) {
            case ACTIVITY_TEST_ID:
                startTestActivity(map, currentActivity);
        }
    }

    /**
     * @param map
     * @param activity
     */
    public void startTestActivity(final ReadableMap map, Activity activity) {
        Intent it = new Intent(getReactApplicationContext(), TestActivity.class);
        it.putExtra("status", map.getInt("status"));
        it.putExtra("text", map.getString("text"));
        activity.startActivityForResult(it, ACTIVITY_TEST_ID);
    }

    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent intent) {
        switch (requestCode) {
            case ACTIVITY_TEST_ID:
                String result = intent.getStringExtra("result");
                if (mCallback != null) {
                    mCallback.invoke(result);
                }
                break;
        }
    }

    @ReactMethod
    public void getPackageVersion(final Promise promise) {
        String versionName = "1.0";
        int versionCode = 1;
        try {
            PackageManager packageManager = getReactApplicationContext().getPackageManager();
            PackageInfo info = packageManager.getPackageInfo(getReactApplicationContext().getPackageName(), 0);
            versionName = info.versionName;
            versionCode = info.versionCode;

            WritableMap ret = Arguments.createMap();
            ret.putString("versionName", versionName);
            ret.putInt("versionCode", versionCode);
            promise.resolve(ret);
        } catch (Exception ex) {
            Log.d(TAG, "getPackageVersion:", ex);
            promise.reject(ex);
        }
    }

}


