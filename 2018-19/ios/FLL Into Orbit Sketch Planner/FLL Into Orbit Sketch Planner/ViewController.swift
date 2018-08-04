//
//  ViewController.swift
//  FLL Into Orbit Sketch Planner
//
//  Created by Sanjay Seshan on 7/5/18.
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
        
        webView.navigationDelegate = self;
        
        // Add addScriptMessageHandler in javascript: window.webkit.messageHandlers.MyObserver.postMessage()
        //       webView.configuration.userContentController.add(self, name: "MyObserver")
        
        // Choose to load a file or a string
        //      let loadFile = false
        //     let langStr = Locale.current.languageCode
        
        
        if let filePath = Bundle.main.path(forResource:"index", ofType:"html", inDirectory: "www") {
            /*        if (loadFile) {
             // load file
             let filePathURL = URL.init(fileURLWithPath: filePath)
             let fileDirectoryURL = filePathURL.deletingLastPathComponent()
             webView.loadFileURL(filePathURL, allowingReadAccessTo: fileDirectoryURL)
             } else { */
            do {
                // load html string - baseURL needs to be set for local files to load correctly
                let html = try String(contentsOfFile: filePath, encoding: .utf8)
                webView.loadHTMLString(html, baseURL: Bundle.main.resourceURL?.appendingPathComponent("www"))
                //    let js = "document.write('fsdafasdfsd');"
                //    webView.evaluateJavaScript(js, completionHandler: nil)
            } catch {
                print("Error loading html")
            }
            //            }
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
    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo,
                 completionHandler: @escaping () -> Void) {
        
        let alertController = UIAlertController(title: nil, message: message, preferredStyle: .actionSheet)
        alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: { (action) in
            completionHandler()
        }))
        
        present(alertController, animated: true, completion: nil)
    }
    
    
    func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo,
                 completionHandler: @escaping (Bool) -> Void) {
        
        let alertController = UIAlertController(title: nil, message: message, preferredStyle: .actionSheet)
        
        alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: { (action) in
            completionHandler(true)
        }))
        
        alertController.addAction(UIAlertAction(title: "Cancel", style: .default, handler: { (action) in
            completionHandler(false)
        }))
        
        present(alertController, animated: true, completion: nil)
    }
    
    
    func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String, defaultText: String?, initiatedByFrame frame: WKFrameInfo,
                 completionHandler: @escaping (String?) -> Void) {
        
        let alertController = UIAlertController(title: nil, message: prompt, preferredStyle: .actionSheet)
        
        alertController.addTextField { (textField) in
            textField.text = defaultText
        }
        
        alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: { (action) in
            if let text = alertController.textFields?.first?.text {
                completionHandler(text)
            } else {
                completionHandler(defaultText)
            }
        }))
        
        alertController.addAction(UIAlertAction(title: "Cancel", style: .default, handler: { (action) in
            completionHandler(nil)
        }))
        
        present(alertController, animated: true, completion: nil)
    }
}



extension ViewController : WKNavigationDelegate {
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        print("didFinish navigation:");
    }
}




