package com.nativemodules;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;

public class TestActivity extends AppCompatActivity implements View.OnClickListener {
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
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.backBtn:
                back();
                break;
        }
    }

    private void back() {
        Intent intent = new Intent();
        intent.putExtra("result", "result from android");
        setResult(RESULT_OK, intent);
        finish();
    }
}
