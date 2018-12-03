var matched,browser;
jQuery.uaMatch=function(u){
    u=u.toLowerCase();
    var match=/(chrome)[ \/]([\w.]+)/.exec( u )||
        /(webkit)[ \/]([\w.]+)/.exec( u ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( u ) ||
        /(msie) ([\w.]+)/.exec( u ) ||
        u.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(u)||[];
    return{browser:match[1]||"",version:match[2]||"0"}
};
matched=jQuery.uaMatch( navigator.userAgent );
browser={};
if(matched.browser){
    browser[matched.browser]=true;
    browser.version=matched.version
}
if(browser.chrome){
    browser.webkit=true
}
else if(browser.webkit){
    browser.safari=true
}
jQuery.browser=browser;