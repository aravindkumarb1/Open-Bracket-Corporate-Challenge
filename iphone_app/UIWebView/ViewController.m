//
//  ViewController.m
//  UIWebView
//
//

#import "ViewController.h"

@interface ViewController ()

@property (nonatomic) UIWebView *webview;

@end

@implementation ViewController

- (void)viewDidLoad {
    
    [super viewDidLoad];
    
    self.webview = [[UIWebView alloc] init];
    
    self.webview.delegate = self;
    
    [self.view addSubview:self.webview];
    
    // Setting up left constraint
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:self.webview
                                                          attribute:NSLayoutAttributeLeft
                                                          relatedBy:NSLayoutRelationEqual
                                                             toItem:self.view
                                                          attribute:NSLayoutAttributeLeft
                                                         multiplier:1.0
                                                           constant:0]];
    
    // Setting up right constraint
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:self.webview
                                                          attribute:NSLayoutAttributeRight
                                                          relatedBy:NSLayoutRelationEqual
                                                             toItem:self.view
                                                          attribute:NSLayoutAttributeRight
                                                         multiplier:1.0
                                                           constant:0]];
    
    // Setting up top constraint
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:self.webview
                                                          attribute:NSLayoutAttributeTop
                                                          relatedBy:NSLayoutRelationEqual
                                                             toItem:self.view
                                                          attribute:NSLayoutAttributeTop
                                                         multiplier:1.0
                                                           constant:0]];
    
    // Setting up bottom constraint
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:self.webview
                                                          attribute:NSLayoutAttributeBottom
                                                          relatedBy:NSLayoutRelationEqual
                                                             toItem:self.view
                                                          attribute:NSLayoutAttributeBottom
                                                         multiplier:1.0
                                                           constant:0]];
    
    self.webview.translatesAutoresizingMaskIntoConstraints = NO;
    
    NSString *fullURL = @"http://192.168.99.107:3000/";
    NSURL *url = [NSURL URLWithString:fullURL];
    NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
    [self.webview loadRequest:requestObj];
}

- (void)webViewDidStartLoad:(UIWebView *)webView {
    NSLog(@"webViewDidStartLoad");
}

- (void)webViewDidFinishLoad:(UIWebView *)webView {
    NSLog(@"webViewDidFinishLoad");
}

- (void)webView:(UIWebView *)webView didFailLoadWithError:(NSError *)error {
    NSLog(@"didFailLoadWithError");
}

@end
