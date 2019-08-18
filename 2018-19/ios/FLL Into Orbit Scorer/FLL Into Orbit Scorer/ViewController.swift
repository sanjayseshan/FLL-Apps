//
//  ViewController.swift
//  FLL Into Orbit Scorer
//
//  Created by Sanjay Seshan on 7/3/18.
//  Copyright © 2018 ev3lessons. All rights reserved.
//

import UIKit
import WebKit

// Wrap the WKWebView webview to allow IB use

class MyWebView : WKWebView {
    required init?(coder: NSCoder) {
        let configuration = WKWebViewConfiguration()
        let controller = WKUserContentController()
        configuration.userContentController = controller;
        configuration.mediaTypesRequiringUserActionForPlayback = [];
        super.init(frame: CGRect.zero, configuration: configuration)
    }
}

class ViewController: UIViewController {
    @IBOutlet weak var webView: MyWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        webView.customUserAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15"
        webView.navigationDelegate = self;
        if let filePath = Bundle.main.path(forResource:"index", ofType:"html", inDirectory: "www") {
                do {
                    let html = try String(contentsOfFile: filePath, encoding: .utf8)
                    webView.loadHTMLString(html, baseURL: Bundle.main.resourceURL?.appendingPathComponent("www"))
                } catch {
                    print("Error loading html")
                }
        }
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func callJavascriptTapped(_ sender: UIButton) {
        let script = "testJS()"
        webView.evaluateJavaScript(script) { (result: Any?, error: Error?) in
            if let error = error {
                print("evaluateJavaScript error: \(error.localizedDescription)")
            } else {
                print("evaluateJavaScript result: \(result ?? "")")
            }
        }
    }
    
}



extension ViewController : WKNavigationDelegate {
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        print("didFinish navigation:");
    }
}




