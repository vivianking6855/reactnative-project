package com.nativemodules;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

public class TestActivity extends Activity implements View.OnClickListener {
    private final static String EVENT_NAME = "TEST";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_test);

        StringBuilder show = new StringBuilder("status: ");
        show.append(getIntent().getIntExtra("status", -1))
                .append("\r\ntext: ")
                .append(getIntent().getStringExtra("text"));
        TextView showTV = (TextView) findViewById(R.id.show);
        showTV.setText(show.toString());
        findViewById(R.id.backBtn).setOnClickListener(this);
        findViewById(R.id.jsBtn).setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.backBtn:
                back();
                break;
            case R.id.jsBtn:
                sendEvent();
                break;
        }
    }

    private void back() {
        Intent intent = new Intent();
        intent.putExtra("result", "Hi ASUS! from android");
        setResult(RESULT_OK, intent);
        finish();
    }

    private void sendEvent() {
        WritableMap params = Arguments.createMap();
        params.putString("text", "event from android");
        UserNativeModule.sendEvent(EVENT_NAME, params);
    }
}
