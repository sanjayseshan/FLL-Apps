package com.ev3lessons.fllcityshapersketchplanner;


import android.content.Context;
import android.content.pm.ActivityInfo;
import android.os.Build;
//import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Display;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import java.util.Locale;

import static android.webkit.WebSettings.*;

public class MainActivity extends AppCompatActivity {

    WebView mWebView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setRequestedOrientation (ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        setContentView(R.layout.activity_main);
        WebView mWebView = (WebView) findViewById(R.id.webView);
        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setDatabaseEnabled(true);
        mWebView.setPadding(0, 0, 0, 0);
        mWebView.setInitialScale(getScale());
        mWebView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
                //Required functionality here
                return super.onJsAlert(view, url, message, result);
            }
        });
        webSettings.setUserAgentString(Locale.getDefault().getLanguage());
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.KITKAT) {
            webSettings.setDatabasePath("/data/data/" + mWebView.getContext().getPackageName() + "/databases/");
        }        mWebView.setWebViewClient(new WebViewClient());
        // mWebView.addJavascriptInterface(new AudioInterface(this), "AndAud");
        //    mWebView.loadUrl("file:///android_asset/www/index.html");
        String webUrl = new String("file:///android_asset/www/index.html");
        //    if (savedInstanceState == null) {
        mWebView.loadUrl(webUrl);
        //    }
    }

    /*  @Override
      protected void onSaveInstanceState(Bundle outState )
      {
          super.onSaveInstanceState(outState);
          mWebView.saveState(outState);
      }

      @Override
      protected void onRestoreInstanceState(Bundle savedInstanceState)
      {
          super.onRestoreInstanceState(savedInstanceState);
          mWebView.restoreState(savedInstanceState);
      }*/
    private int getScale(){
        Display display = ((WindowManager) getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay();
        int width = display.getWidth();
        Double val = new Double(width)/new Double(900);
        val = val * 100d;
        return val.intValue();
    }
}
