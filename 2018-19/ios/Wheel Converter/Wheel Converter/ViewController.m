//
//  ViewController.m
//  FLL Wheel Converter
//
//  Created by Sanjay Seshan on 9/20/15.
//  Copyright © 2015 EV3Lessons.com. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

// An example viewDidLoad
- (void)viewDidLoad
{
    [super viewDidLoad];
    //   self.webView.scalesPageToFit = YES;
    //  _webView.frame = CGRectMake(0.0, 0.0, 200.0, 700.0);
    [self loadWebView];
    
}

// The example loader
//
// Assumes you have an IBOutlet for the UIWebView defined:  @property (strong, nonatomic) UIWebView *wv;
- (void)loadWebView {
    // Remember that bundle resources do *not* have directories so all filenames must be unique.
    NSBundle *mainBundle = [NSBundle mainBundle];
    NSURL *homeIndexUrl = [mainBundle URLForResource:@"www/index" withExtension:@"html"];
    _webView = [UIWebView new];
    _webView.frame = self.view.bounds;
    _webView.autoresizingMask =  (UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth);
//    _webView.autoresizingMask =  UIViewAutoresizingFlexibleHeight;
    [self.view addSubview:self.webView];
    // The magic is loading a request, *not* using loadHTMLString:baseURL:
    NSURLRequest *urlReq = [NSURLRequest requestWithURL:homeIndexUrl];
    self.webView.mediaPlaybackRequiresUserAction = NO;
    [self.webView loadRequest:urlReq];
    
}
/*
- (void)viewWillTransitionToSize:(CGSize)size
       withTransitionCoordinator:(id<UIViewControllerTransitionCoordinator>)coordinator
{
    [self.webView setFrame:CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height)];
}*/

@end
