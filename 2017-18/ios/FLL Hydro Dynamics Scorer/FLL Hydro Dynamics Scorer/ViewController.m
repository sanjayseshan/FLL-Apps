//
//  ViewController.m
//  FLL Animal Allies Scorer
//
//  Created by Sanjay Seshan on 9/5/16.
//  Copyright © 2016 EV3Lessons. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
    
    @end

@implementation ViewController
    
    // An example viewDidLoad
- (void)viewDidLoad
    {
        [super viewDidLoad];
        self.navigationController.navigationBar.hidden = YES;

        self.webView.scalesPageToFit = YES;
        _webView.frame = CGRectMake(0.0, 0.0, 200.0, 700.0);
        NSString *userLocale = [[NSLocale currentLocale] localeIdentifier];
        NSString *userLanguage = [userLocale substringToIndex:2];
        if([userLanguage isEqualToString:@"en"]){
            [self loadWebView];
        }
        else if([userLanguage isEqualToString:@"pt"]){
            //
            [self loadWebViewpt];
            
        }
        else if([userLanguage isEqualToString:@"nl"]){
            //
            [self loadWebViewnl];
            
        }
        else if([userLanguage isEqualToString:@"es"]){
            //
            [self loadWebViewes];
            
        }
        else if([userLanguage isEqualToString:@"sk"]){
            //
            [self loadWebViewsk];
            
        }
        else if([userLanguage isEqualToString:@"de"]){
            //
            [self loadWebViewde];
            
        }
        else if([userLanguage isEqualToString:@"el"]){
            //
            [self loadWebViewel];
            
        }
        else if([userLanguage isEqualToString:@"hu"]){
            //
            [self loadWebViewhu];
            
        }
        else if([userLanguage isEqualToString:@"he"]){
            //
            [self loadWebViewhe];
            
        }
        else if([userLanguage isEqualToString:@"fr"]){
            //
            [self loadWebViewfr];
            
        }
        else {
            //
            [self loadWebView];
            
        }
        
    }
    
    // The example loader
    //
    // Assumes you have an IBOutlet for the UIWebView defined:  @property (strong, nonatomic) UIWebView *wv;
- (void)loadWebView {
    // Remember that bundle resources do *not* have directories so all filenames must be unique.
    NSBundle *mainBundle = [NSBundle mainBundle];
    _webView = [UIWebView new];
    _webView.frame = self.view.bounds;
    [self.view addSubview:self.webView];
    
    NSURL *homeIndexUrl = [mainBundle URLForResource:@"www/index" withExtension:@"html"];
    NSURLRequest *urlReq = [NSURLRequest requestWithURL:homeIndexUrl];
    self.webView.mediaPlaybackRequiresUserAction = NO;
    [self.webView loadRequest:urlReq];
}
- (void)loadWebViewpt {
    // Remember that bundle resources do *not* have directories so all filenames must be unique.
    NSBundle *mainBundle = [NSBundle mainBundle];
    _webView = [UIWebView new];
    _webView.frame = self.view.bounds;
    [self.view addSubview:self.webView];
    
    NSURL *homeIndexUrl = [mainBundle URLForResource:@"www/indexpt" withExtension:@"html"];
    NSURLRequest *urlReq = [NSURLRequest requestWithURL:homeIndexUrl];
    self.webView.mediaPlaybackRequiresUserAction = NO;
    
    [self.webView loadRequest:urlReq];
}
- (void)loadWebViewes {
    // Remember that bundle resources do *not* have directories so all filenames must be unique.
    NSBundle *mainBundle = [NSBundle mainBundle];
    _webView = [UIWebView new];
    _webView.frame = self.view.bounds;
    [self.view addSubview:self.webView];
    
    NSURL *homeIndexUrl = [mainBundle URLForResource:@"www/indexes" withExtension:@"html"];
    NSURLRequest *urlReq = [NSURLRequest requestWithURL:homeIndexUrl];
    self.webView.mediaPlaybackRequiresUserAction = NO;
    
    [self.webView loadRequest:urlReq];
}
- (void)loadWebViewsk {
        // Remember that bundle resources do *not* have directories so all filenames must be unique.
        NSBundle *mainBundle = [NSBundle mainBundle];
        _webView = [UIWebView new];
        _webView.frame = self.view.bounds;
        [self.view addSubview:self.webView];
        
        NSURL *homeIndexUrl = [mainBundle URLForResource:@"www/indexsk" withExtension:@"html"];
        NSURLRequest *urlReq = [NSURLRequest requestWithURL:homeIndexUrl];
        self.webView.mediaPlaybackRequiresUserAction = NO;
        
        [self.webView loadRequest:urlReq];
    }
- (void)loadWebViewel {
    // Remember that bundle resources do *not* have directories so all filenames must be unique.
    NSBundle *mainBundle = [NSBundle mainBundle];
    _webView = [UIWebView new];
    _webView.frame = self.view.bounds;
    [self.view addSubview:self.webView];
    
    NSURL *homeIndexUrl = [mainBundle URLForResource:@"www/indexel" withExtension:@"html"];
    NSURLRequest *urlReq = [NSURLRequest requestWithURL:homeIndexUrl];
    self.webView.mediaPlaybackRequiresUserAction = NO;
    
    [self.webView loadRequest:urlReq];
}
- (void)loadWebViewnl {
    // Remember that bundle resources do *not* have directories so all filenames must be unique.
    NSBundle *mainBundle = [NSBundle mainBundle];
    _webView = [UIWebView new];
    _webView.frame = self.view.bounds;
    [self.view addSubview:self.webView];
    
    NSURL *homeIndexUrl = [mainBundle URLForResource:@"www/indexnl" withExtension:@"html"];
    NSURLRequest *urlReq = [NSURLRequest requestWithURL:homeIndexUrl];
    self.webView.mediaPlaybackRequiresUserAction = NO;
    
    [self.webView loadRequest:urlReq];
}
- (void)loadWebViewde {
    // Remember that bundle resources do *not* have directories so all filenames must be unique.
    NSBundle *mainBundle = [NSBundle mainBundle];
    _webView = [UIWebView new];
    _webView.frame = self.view.bounds;
    [self.view addSubview:self.webView];
    
    NSURL *homeIndexUrl = [mainBundle URLForResource:@"www/indexde" withExtension:@"html"];
    NSURLRequest *urlReq = [NSURLRequest requestWithURL:homeIndexUrl];
    self.webView.mediaPlaybackRequiresUserAction = NO;
    
    [self.webView loadRequest:urlReq];
}
    
    
    
    
    

- (void)loadWebViewhe {
    // Remember that bundle resources do *not* have directories so all filenames must be unique.
    NSBundle *mainBundle = [NSBundle mainBundle];
    _webView = [UIWebView new];
    _webView.frame = self.view.bounds;
    [self.view addSubview:self.webView];
    
    NSURL *homeIndexUrl = [mainBundle URLForResource:@"www/indexhe" withExtension:@"html"];
    NSURLRequest *urlReq = [NSURLRequest requestWithURL:homeIndexUrl];
    self.webView.mediaPlaybackRequiresUserAction = NO;
    
    [self.webView loadRequest:urlReq];
}
- (void)loadWebViewhu {
    // Remember that bundle resources do *not* have directories so all filenames must be unique.
    NSBundle *mainBundle = [NSBundle mainBundle];
    _webView = [UIWebView new];
    _webView.frame = self.view.bounds;
    [self.view addSubview:self.webView];
    
    NSURL *homeIndexUrl = [mainBundle URLForResource:@"www/indexhu" withExtension:@"html"];
    NSURLRequest *urlReq = [NSURLRequest requestWithURL:homeIndexUrl];
    self.webView.mediaPlaybackRequiresUserAction = NO;
    
    [self.webView loadRequest:urlReq];
}
    
    - (void)loadWebViewfr {
        // Remember that bundle resources do *not* have directories so all filenames must be unique.
        NSBundle *mainBundle = [NSBundle mainBundle];
        _webView = [UIWebView new];
        _webView.frame = self.view.bounds;
        [self.view addSubview:self.webView];
        
        NSURL *homeIndexUrl = [mainBundle URLForResource:@"www/indexfr" withExtension:@"html"];
        NSURLRequest *urlReq = [NSURLRequest requestWithURL:homeIndexUrl];
        self.webView.mediaPlaybackRequiresUserAction = NO;
        
        [self.webView loadRequest:urlReq];
    }
    
    @end
