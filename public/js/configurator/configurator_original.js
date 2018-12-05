// ColorBox

// Scroll

function doshares(sharelink, shareTitle, shareImage) {
    function fbshare(link, image, user) {
        var obj = {
            method: 'feed',
            link: link,
            picture: image,
            name: sharelink,
            caption: user + ' designed this using My Interflora Creation – what will you create?',
            description: shareTitle
        };

        function callback(response) {}
        FB.ui(obj, callback);
    }
    $('.fboverlay').click(function(ev) {
        var obj = {
            method: 'feed',
            link: sharelink,
            picture: shareImage,
            name: "My Interflora Creation",
            description: shareTitle
        };
        FB.ui(obj, function(response) {});
        ev.preventDefault();
    });

    function makesharepopup(width, height, url) {
        var left = ($(window).width() - width) / 2,
            top = ($(window).height() - height) / 2,
            opts = 'status=1' + ',width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
        window.open(url, 'share', opts);
        return false;
    }
    $('#tweet').click(function(ev) {
        makesharepopup(575, 400, $('#tweet a').attr('href'));
        ev.preventDefault();
    });
    $('#pinterest').click(function(ev) {
        makesharepopup(700, 550, $('#pinterest a').attr('href'));
        ev.preventDefault();
    });
    $('#linkedin').click(function(ev) {
        makesharepopup(600, 430, $('#linkedin a').attr('href'));
        ev.preventDefault();
    });
    $('#tumblr').click(function(ev) {
        makesharepopup(560, 500, $('#tumblr a').attr('href'));
        ev.preventDefault();
    });
    return false;
}

function shareclick(button) {
    $(button).click(function(ev) {
        $.colorbox({
            href: this.href,
            close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
            onComplete: shareclick_oncomplete
        });
        ev.preventDefault();
    });
}

function shareclick_oncomplete() {
    FB.XFBML.parse();
    $('#message').limit(200, '#charsLeft');
    $('.submit input').click(function(ev) {
        $(this).parent().addClass('unavailable');
        $(this).css({
            'cursor': 'wait'
        });
        $(this).val('Sending...');
        clicked = $(this);
        $.post('share', {
            sharelink: $('#sharelink').val(),
            shareimg: $('#shareimg').val(),
            bid: $('#bid').val(),
            message: $('#message').val(),
            email: $('#email').val()
        }, function(data) {
            clicked.parent().removeClass('unavailable');
            clicked.css({
                'cursor': 'auto'
            });
            clicked.val('Share');
            if ($(data).find('.form-field .error').length) {
                $('.shareWrap').parent().html(data);
                $('#message').limit(200);
                shareclick_oncomplete('.shareWrap');
            } else {
                $('.shareOverlaySubmit').replaceWith(data);
                setTimeout(function() {
                    $.colorbox.close();
                }, 2000);
            }
        });
        ev.preventDefault();
    });
}

function silverButtons() {}

function goldButtons() {}
$('.unavailable, .signInButton, .notRegisteredButton, .registerSubmitButton').removeClass('gold');

function setupRegistrationErrors() {
    $('#registrationSubmit').click(function(ev) {
        $.post("user/login?cb=1", {
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            password_confirm: $('#password_confirm').val(),
            remember: $('.remember').val(),
            submitregister: "Register Now"
        }, function(data) {
            if ($(data).attr('id') == "success") {
                window.location = $(data).html();
            } else {
                $('#registrationWrap').replaceWith(data);
                $('#registrationWrap form').css({
                    'width': '456px'
                });
                $.colorbox.resize({
                    innerHeight: '422px',
                    innerWidth: '456px'
                });
                FB.XFBML.parse();
                setupRegistrationErrors();
                setupForgotPasswordLink();
            }
        })
        ev.preventDefault();
    });
}

function setupLoginErrors() {
    $('#loginButton').click(function(ev) {
        $.post("user/login?cb=1", {
            username: $('#username').val(),
            password: $('#password').val(),
            remember: $('.remember').val(),
            submitlogin: "Sign in"
        }, function(data) {
            if ($(data).attr('id') == "success") {
                window.location = $(data).html();
            } else {
                $('#loginWrap').replaceWith(data);
                $('.emailWrap input').css({
                    'width': '236px'
                });
                $('.passwordWrap input').css({
                    'width': '229px'
                });
                FB.XFBML.parse();
                setupLoginErrors();
                setupRegistrationFormButton();
                setupForgotPasswordLink();
            }
        })
        ev.preventDefault();
    });
}

function setupForgotPasswordLink() {
    $('.fPassword').click(function(ev) {
        $.colorbox({
            href: this.href + "?cb=1",
            close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
            onComplete: function() {
                setupSendForgotPassword();
            }
        });
        ev.preventDefault();
    });
}

function setupSendForgotPassword() {
    $('.notRegisteredButton input').click(function(ev) {
        $(this).parent().addClass('unavailable');
        $(this).css({
            'cursor': 'wait'
        });
        $(this).val('Sending...');
        clicked = $(this);
        $.post("user/password?cb=1", {
            email: $('#email').val()
        }, function(data) {
            $(this).parent().removeClass('unavailable');
            $(this).css({
                'cursor': 'auto'
            });
            $(this).val('Send password');
            if ($(data).attr('id') == "success") {
                $('.forgottenPasswordWrap').replaceWith(data);
                setTimeout(function() {
                    $.colorbox.close();
                }, 2000);
            } else {
                $('.forgottenPasswordWrap').replaceWith(data);
                setupSendForgotPassword();
            }
        });
        ev.preventDefault();
    });
}

function setupRegistrationFormButton() {
    $('#registrationButton').click(function(ev) {
        $.post("user/login?cb=1", {
            email: $('#username').val(),
            password: $('#password').val(),
            remember: $('.remember').val(),
            submitregisternow: "Register Now"
        }, function(data) {
            $.colorbox({
                html: data,
                onComplete: function() {
                    FB.XFBML.parse();
                    setupRegistrationErrors();
                    setupForgotPasswordLink();
                }
            });
        });
        ev.preventDefault();
    });
}

function loginOverlaySettings(loginurl) {
    var loginOverlaySettings = {
        href: loginurl,
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
        onComplete: function() {
            FB.XFBML.parse();
            setupLoginErrors();
            setupRegistrationFormButton();
            setupForgotPasswordLink();
        }
    }
    return loginOverlaySettings;
}

function loginOverlay() {
    loginurl = $('#account .signinIcon').find('a').attr('href') + "?cb=1";
    $('#account .signinIcon').colorbox(loginOverlaySettings(loginurl));
}

function loginOverlayConfigurator() {
    loginurl = $('#account .signinIconC').find('a').attr('href') + "?cb=1";
    $('#account .signinIconC').click(function(e) {
        data = makeBuildXML();
        $.post('store/temp', {
            build: data
        }, function(result) {
            $.colorbox(loginOverlaySettings(loginurl));
        });
        e.preventDefault();
    });
}

function loginOverlayFlashConfigurator() {
    loginurl = $('#account .signinIconC').find('a').attr('href') + "?cb=1";
    $('#account .signinIconC').click(function(e) {
        flashElem = document.getElementById('bouquetWrap');
        data = flashElem.getCurrentBuild();
        $.post('store/temp', {
            build: data
        }, function(result) {
            $.colorbox(loginOverlaySettings(loginurl));
        });
        e.preventDefault();
    });
}

function gallerybox() {
    $('.gallerybox').each(function(i) {
        var pid = $(this).attr('id');
        var imgSrc = $(this).children('img').attr('src');
        var item = $(this);
        var cbsettings = {
            width: "855px",
            height: "450px",
            href: "/mygallery/info/" + pid,
            close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
            onComplete: function() {
                $('.overlayText').mCustomScrollbar();
                shareclick('.overlayEditShareDelete .shareLink');
                unavailableSetup($('.overlayRight'), pid);
            }
        };
        item.children('img').colorbox(cbsettings);
        item.find('.galleryItemNameText').colorbox(cbsettings);
        item.find('.galleryItemPrice').colorbox(cbsettings);
        item.find('.moreinfo').colorbox(cbsettings);
        unavailableSetup(item, pid);
    });
}

function unavailableSetup(item, pid) {
    item.find('.outofstock').colorbox({
        href: "overlay/nostock",
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
        onComplete: function() {
            $('#ok').click(function(ev) {
                $.colorbox.close();
                ev.preventDefault();
            });
        }
    });
    item.find('.minimum').colorbox({
        href: "buildstatus?bid=" + pid,
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
        onComplete: function() {
            $('#ok').click(function(ev) {
                $.colorbox.close();
                ev.preventDefault();
            });
        }
    });
    item.find('.minimumH').colorbox({
        href: "overlay/galleryHminimum?bid=" + pid,
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
        onComplete: function() {
            $('#ok').click(function(ev) {
                $.colorbox.close();
                ev.preventDefault();
            });
        }
    });
}

function gallerySetup() {
    gallerybox();
    $('#gotoConfigurator').click(function(ev) {
        window.location = "configurator";
    });
    $('#gotoConfiguratorApp').click(function(ev) {
        window.location = configURL;
    });
    $('.shareLink').each(function() {
        shareclick(this);
    });
    $('.activeTab').prev().addClass('prevSibling');
    $('.prevSibling').prev().addClass('prevPrevSibling');
    $('#galleryPagerWrap').infinitescroll({
        binder: $('.galleryPageWrap'),
        navSelector: "#pager",
        nextSelector: "#nextPage",
        itemSelector: "#galleryPagerWrap",
        loading: {
            finished: function() {
                gallerybox();
                $('.shareLink').each(function() {
                    $(this).off('click');
                    shareclick(this);
                });
            },
            finishedMsg: "<em>There are no further builds available.</em>",
            msgText: "<em>Loading the next set of builds...</em>"
        }
    });
}

function signinHovers() {
    $('.signinIcon').on('mouseover mousedown', function(ev) {
        $('.signinIcon img').attr('src', '/media/images/signinon.png');
        $('.signinIcon').css({
            'color': '#000000'
        });
    });
    $('.signinIcon').on('mouseleave', function(ev) {
        $('.signinIcon img').attr('src', '/media/images/signin.png');
        $('.signinIcon').css({
            'color': '#333333'
        });
    });
}

function createShareWin(data) {
    $.colorbox({
        html: data,
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
        onComplete: function() {
            FB.XFBML.parse();
            shareclick_oncomplete();
        }
    });
}

function mainListeners() {
    setTimeout(function() {
        $('ul.status').remove();
    }, 3000);
    $('.overlay').colorbox({
        onComplete: function() {
            FB.XFBML.parse();
        },
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>'
    });
    $(document).bind('cbox_complete', function() {
        $('.overlay').colorbox({
            onComplete: function() {
                FB.XFBML.parse();
            },
            close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>'
        });
    });
}

function navigationhovers() {
    $('.hintsIcon').on('mouseover mousedown', function(ev) {
        $('.hintsIcon .rollover img').attr('src', '/media/images/leafOn.png');
        $('.hintsIcon').css({
            'color': '#000000'
        });
    });
    $('.hintsIcon').on('mouseleave', function(ev) {
        $('.hintsIcon .rollover img').attr('src', '/media/images/leaf.png');
        $('.hintsIcon').css({
            'color': '#333333'
        });
    });
    $('.creativeCharge img').on('mouseover mousedown', function(ev) {
        $('.creativeCharge img').attr('src', '/media/images/configurator/creativechargeOn.png');
    });
    $('.creativeCharge img').on('mouseleave', function(ev) {
        $('.creativeCharge img').attr('src', '/media/images/configurator/creativecharge.png');
    });
    $('.galleryIcon, .galleryIconH').on('mouseover mousedown', function(ev) {
        $('.galleryIcon .rollover img, .galleryIconH .rollover img').attr('src', '/media/images/configurator/galleryon.png');
        $('.galleryIcon, .galleryIconH').css({
            'color': '#000000'
        });
    });
    $('.galleryIcon, .galleryIconH').on('mouseleave', function(ev) {
        $('.galleryIcon .rollover img, .galleryIconH .rollover img').attr('src', '/media/images/configurator/gallery.png');
        $('.galleryIcon, .galleryIconH').css({
            'color': '#333333'
        });
    });
    $('.helpIcon').on('mouseover mousedown', function(ev) {
        $('.helpIcon .rollover').find('img').attr('src', '/media/images/configurator/helpOn.png');
        $('.helpIcon').css({
            'color': '#000000'
        });
    });
    $('.helpIcon').on('mouseleave', function(ev) {
        $('.helpIcon .rollover').find('img').attr('src', '/media/images/configurator/help.png');
        $('.helpIcon').css({
            'color': '#333333'
        });
    });
    $('.signinIconC, .signoutIconC').on('mouseover mousedown', function(ev) {
        $('.signinIconC img, .signoutIconC img').attr('src', '/media/images/signinon.png');
        $('.signinIconC, .signoutIconC').css({
            'color': '#000000'
        });
    });
    $('.signinIconC, .signoutIconC').on('mouseleave', function(ev) {
        $('.signinIconC img, .signoutIconC img').attr('src', '/media/images/signin.png');
        $('.signinIconC, .signoutIconC').css({
            'color': '#333333'
        });
    });
}

function makeHelp() {
    $('.helpIcon').colorbox({
        href: 'overlay/help',
        close: '<span class="close"><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.png" /><span class="closeText">Close</span></span>',
        onOpen: function() {
            $('#cboxOverlay').addClass("helpOverlaySettingsBackground");
        },
        onComplete: function() {
            $('#colorbox').addClass("helpOverlaySettingsBox");
            $('#cboxClose').addClass("helpOverlaySettingsClose");
            $('#cboxLoadedContent').click(function(ev) {
                $.colorbox.close();
            });
        },
        onClosed: function() {
            $('#cboxOverlay').removeClass("helpOverlaySettingsBackground");
            $('#colorbox').removeClass("helpOverlaySettingsBox");
            $('#cboxClose').removeClass("helpOverlaySettingsClose");
        }
    });
}

function makeHints() {
    $('.hintsIcon').colorbox({
        href: 'overlay/hintsandtips',
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.png" /></span>'
    });
}

function enterCompSetup() {
    $('.galleryboxLinks a').click(function(ev) {
        $(this).addClass('unavailable');
        $(this).css({
            'cursor': 'wait'
        });
        clicked = this;
        ev.preventDefault();
        compurl = $(this).attr('href');
        $.post(compurl, function(data) {
            if ($(data).children('div').find('div').attr('id') == "success") {
                success = true;
            } else {
                success = false;
            }
            $.colorbox({
                html: data,
                close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
                onComplete: function() {
                    $(clicked).removeClass('unavailable');
                    $(clicked).css({
                        'cursor': 'auto'
                    });
                    setTimeout(function() {
                        if (success) {
                            window.location.reload(true);
                        } else {
                            $.colorbox.close();
                        }
                    }, 2000);
                }
            });
        });
    });
}

function gallerySetupComp() {
    $('#gotoConfigurator').click(function(ev) {
        window.location = "configurator";
    });
    enterCompSetup();
    loginurl = $('.signinorregister .signinIcon').find('a').attr('href') + "?cb=1";
    $('.signinorregister .signinIcon').colorbox(loginOverlaySettings(loginurl));
    $('.signinorregister .registernow').click(function(ev) {
        ev.preventDefault();
        $.post(loginurl, {
            submitregisternow: true
        }, function(data) {
            $.colorbox({
                html: data,
                close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
                onComplete: function() {
                    setupRegistrationErrors();
                    setupForgotPasswordLink();
                    FB.XFBML.parse();
                }
            });
        });
    });
    $('.activeTab').prev().addClass('prevSibling');
    $('.prevSibling').prev().addClass('prevPrevSibling');
    $('#galleryPagerWrap').infinitescroll({
        binder: $('.galleryPageWrap'),
        navSelector: "#pager",
        nextSelector: "#nextPage",
        itemSelector: "#galleryPagerWrap",
        loading: {
            finished: function() {
                enterCompSetup();
            },
            finishedMsg: "<em>There are no further builds available.</em>",
            msgText: "<em>Loading the next set of builds...</em>"
        }
    });
}

function viewshareclick_oncomplete() {
    $('#message').limit(200, '#charsLeft');
    $('.submit input').click(function(ev) {
        $(this).parent().addClass('unavailable');
        $(this).css({
            'cursor': 'wait'
        });
        $(this).val('Sending...');
        $.post($('form').attr('action'), {
            sharelink: $('#sharelink').val(),
            shareimg: $('#shareimg').val(),
            bid: $('#bid').val(),
            message: $('#message').val(),
            email: $('#email').val()
        }, function(data) {
            if ($(data).find('.form-field .error').length) {
                content = $(data).find('.shareEmail');
                $('.shareEmail').replaceWith(content);
                $('#message').limit(200);
                viewshareclick_oncomplete('.shareWrap');
            } else {
                $('.shareOverlaySubmit').replaceWith(data);
                setTimeout(function() {
                    window.location.reload(true);
                }, 1000);
            }
        });
        ev.preventDefault();
    });
};

// Kinetic

function cart_to_polar(x, y) {
    r = Math.sqrt((x * x) + (y * y));
    t = Math.atan2(y, x);
    return [r, t];
}

function polar_to_cart(r, t) {
    x = r * Math.cos(t);
    y = r * Math.sin(t);
    return [x, y];
}

function get_mouse_x(event) {
    return event.pageX - $('#foreground').offset().left;
}

function get_mouse_y(event) {
    return event.pageY - $('#foreground').offset().top;
}

function get_grid_mouse_x(event) {
    canvasleft = event.pageX - $('#foreground').offset().left;
    xoffset = 355;
    return canvasleft - xoffset;
}

function get_grid_mouse_y(event) {
    canvasbottom = $('#foreground').height() - (event.pageY - $('#foreground').offset().top);
    yoffset = 190;
    return canvasbottom - yoffset;
}

function get_boundary(gridmouseY, absmouseX) {
    if (gridmouseY >= -20) {
        if (absmouseX <= 70) {
            boundary = 0;
        } else if ((absmouseX > 70) && (absmouseX <= 140)) {
            boundary = 1;
        } else if ((absmouseX > 140) && (absmouseX <= 210)) {
            boundary = 2;
        } else if ((absmouseX > 210) && (absmouseX <= 280)) {
            boundary = 3;
        } else if (absmouseX > 280) {
            boundary = 4;
        }
    } else {
        if (absmouseX <= 40) {
            boundary = 0;
        } else if ((absmouseX > 40) && (absmouseX <= 120)) {
            boundary = 1;
        } else if ((absmouseX > 120) && (absmouseX <= 160)) {
            boundary = 2;
        } else if ((absmouseX > 160) && (absmouseX <= 200)) {
            boundary = 3;
        } else if (absmouseX > 200) {
            boundary = 4;
        }
    }
    return boundary;
}

function calculatezindex(stem) {
    closest = -1;
    lastrad = 0;
    for (item in items) {
        if (items[item]) {
            if (stem.rad > (items[item].rad)) {
                if (items[item].rad > lastrad) {
                    lastrad = items[item].rad;
                    closest = item;
                }
            }
        }
    }
    if (closest > -1) {
        if (items[closest].getZIndex() == 0) {
            zindex = 0;
        } else {
            zindex = items[closest].getZIndex() - 1;
        }
    } else {
        zindex = items.length;
    }
    return zindex;
}

function calculate_rotation(gridmouseX, gridmouseY, rads) {
    if (gridmouseY > 0) {
        if (rads[0] > 60) {
            rotation = 60 * ((Math.PI / 2) - rads[1]);
        } else {
            rotation = 0;
        }
    } else {
        if (gridmouseX >= 0) {
            if (rads[1] >= (0 - (Math.PI / 16))) {
                rotation = 60 * ((Math.PI / 2) - rads[1]);
            } else {
                rotation = 60 * ((Math.PI / 2) - (0 - (Math.PI / 16)));
            }
        } else {
            if (rads[1] <= (0 - (15 * (Math.PI / 16)))) {
                rotation = 0 - (((Math.PI / 2) * 60) + (60 * (Math.PI + rads[1])));
            } else {
                rotation = 0 - (((Math.PI / 2) * 60) + (60 * (Math.PI + (0 - (15 * (Math.PI / 16))))));
            }
        }
    }
    return rotation;
}

function stemcountup(placed) {
    containermultiplier = 1 + containerlayer.getChildren()[0].bulky;
    if (placed.pvol > 1) {
        stemcount += (containermultiplier * placed.pvol);
    } else {
        stemcount += placed.pvol;
    }
}

function stemcountdown(removed) {
    containermultiplier = 1 + containerlayer.getChildren()[0].bulky;
    if (removed.pvol > 1) {
        stemcount -= (containermultiplier * removed.pvol);
    } else {
        stemcount -= removed.pvol;
    }
}

function updatemenu(newhtml) {
    $('#itemWrapper').empty();
    $('#itemWrapper').append(newhtml);
    cImgListener();
    $('#sortoptions, .nameBlock, .colourBlock, .meaningBlock').each(function(index, el) {
        if (!$(el).hasClass('hideBlock')) {
            $(el).addClass('hideBlock');
        }
    });
    $('.secondLevelButton .arrow').css({
        'background': 'url(../images/configurator/menu/menu-silver-arrow-closed.png) no-repeat top left',
        'width': '14px',
        'height': '20px'
    });
    $('.topLevelButton .arrow').css({
        'background': 'url(../images/configurator/menu/menu-arrow-closed.png) no-repeat top left',
        'width': '14px',
        'height': '20px'
    });
    $('#itemWrapper').mCustomScrollbar();
    $('.closeProductOverlay').click(function(ev) {
        $(this).parent('div').hide();
    });
    $('.stemBlockWidthAnchor').removeClass('menuOpen');
}

function menuaccordian() {
    $('#sortoptions > div').children('a').each(function(index, el) {
        if ($(el).attr('href') != 'stem') {
            $(el).click(function(ev) {
                var choicetype = $(this).attr('href');
                /*$.post('sort/html', {
                    type: choicetype
                }, function(data) {
                    updatemenu(data);
                    if (choicetype == 'container') {
                        containeravailability();
                    } else if (choicetype == 'sundry') {
                        sundryavailability();
                    }
                });*/
                updatemenu('<div class="stem slider"><div class="slideBlock"><div class="product25 productWrap"><div class="productImg"><img src="media/images/products/gb_AlstroemeriaPink-0.png" alt="Alstroemeria (Pink)" class="cImg pstem" /></div><div class="productName">Alstroemeria (Pink)</div></div><div class="product29 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationGreen-0.png" alt="Carnation (Green)" class="cImg pstem" /></div><div class="productName">Carnation (Green)</div></div><div class="product190 productWrap"><div class="productImg"><img src="media/images/products/gb_Carnation-0.png" alt="Carnation (Orange)" class="cImg pstem" /></div><div class="productName">Carnation (Orange)</div></div><div class="product4 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationWhite-0.png" alt="Carnation (White)" class="cImg pstem" /></div><div class="productName">Carnation (White)</div></div><div class="product191 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationYellow-0.png" alt="Carnation (Yellow)" class="cImg pstem" /></div><div class="productName">Carnation (Yellow)</div></div><div class="product43 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayPink-0.png" alt="Carnation spray (Pink)" class="cImg pstem" /></div><div class="productName">Carnation spray (Pink)</div></div></div><div class="slideBlock"><div class="product198 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayWhite-0.png" alt="Carnation spray (White)" class="cImg pstem" /></div><div class="productName">Carnation spray (White)</div></div><div class="product197 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumRed-0.png" alt="Chrysanthemum (Red)" class="cImg pstem" /></div><div class="productName">Chrysanthemum (Red)</div></div><div class="product5 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumBloomWhite-0.png" alt="Chrysanthemum Bloom (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum Bloom (White)</div></div><div class="product196 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayCream-0.png" alt="Chrysanthemum spray (Cream)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Cream)</div></div><div class="product44 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayGreen-0.png" alt="Chrysanthemum spray (Green)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Green)</div></div><div class="product45 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayWhite-0.png" alt="Chrysanthemum spray (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (White)</div></div></div><div class="slideBlock"><div class="product6 productWrap"><div class="productImg"><img src="media/images/products/gb_EryngiumBlue-0.png" alt="Eryngium (Blue)" class="cImg pstem" /></div><div class="productName">Eryngium (Blue)</div></div><div class="product199 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaPurple-0.png" alt="Freesia (Lilac)" class="cImg pstem" /></div><div class="productName">Freesia (Lilac)</div></div><div class="product200 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaYellow-0.png" alt="Freesia (Yellow)" class="cImg pstem" /></div><div class="productName">Freesia (Yellow)</div></div><div class="product30 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiCerise-0.png" alt="Germini (Cerise)" class="cImg pstem" /></div><div class="productName">Germini (Cerise)</div></div><div class="product193 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiOrange-0.png" alt="Germini (Orange)" class="cImg pstem" /></div><div class="productName">Germini (Orange)</div></div><div class="product31 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPeach-0.png" alt="Germini (Peach)" class="cImg pstem" /></div><div class="productName">Germini (Peach)</div></div></div><div class="slideBlock"><div class="product32 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPink-0.png" alt="Germini (Pink)" class="cImg pstem" /></div><div class="productName">Germini (Pink)</div></div><div class="product33 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiWhite-0.png" alt="Germini (White)" class="cImg pstem" /></div><div class="productName">Germini (White)</div></div><div class="product194 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiYellow-0.png" alt="Germini (Yellow)" class="cImg pstem" /></div><div class="productName">Germini (Yellow)</div></div><div class="product34 productWrap"><div class="productImg"><img src="media/images/products/gb_GypsophilaWhite-0.png" alt="Gypsophila (White)" class="cImg pstem" /></div><div class="productName">Gypsophila (White)</div></div><div class="product16 productWrap"><div class="productImg"><img src="media/images/products/gb_IrisBlue-0.png" alt="Iris (Blue)" class="cImg pstem" /></div><div class="productName">Iris (Blue)</div></div><div class="product26 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticCream-0.png" alt="Lily Asiatic (Cream) " class="cImg pstem" /></div><div class="productName">Lily Asiatic (Cream) </div></div></div><div class="slideBlock"><div class="product192 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticOrange-0.png" alt="Lily Asiatic (Orange)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Orange)</div></div><div class="product27 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticWhite-0.png" alt="Lily Asiatic (White)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (White)</div></div><div class="product28 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticYellow-0.png" alt="Lily Asiatic (Yellow)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Yellow)</div></div><div class="product37 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalPink-0.png" alt="Lily Oriental (Pink)" class="cImg pstem" /></div><div class="productName">Lily Oriental (Pink)</div></div><div class="product38 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalWhite-0.png" alt="Lily Oriental (White)" class="cImg pstem" /></div><div class="productName">Lily Oriental (White)</div></div><div class="product10 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusLilac-0.png" alt="Lisianthus (Lilac)" class="cImg pstem" /></div><div class="productName">Lisianthus (Lilac)</div></div></div><div class="slideBlock"><div class="product35 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusPink-0.png" alt="Lisianthus (Pink)" class="cImg pstem" /></div><div class="productName">Lisianthus (Pink)</div></div><div class="product36 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusWhite-0.png" alt="Lisianthus (White)" class="cImg pstem" /></div><div class="productName">Lisianthus (White)</div></div><div class="product13 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseRed-0.png" alt="Rose (Red)" class="cImg pstem" /></div><div class="productName">Rose (Red)</div></div><div class="product202 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseYellow-0.png" alt="Rose (Yellow)" class="cImg pstem" /></div><div class="productName">Rose (Yellow)</div></div><div class="product39 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadCerise-0.png" alt="Rose large head (Cerise)" class="cImg pstem" /></div><div class="productName">Rose large head (Cerise)</div></div><div class="product40 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadOrange-0.png" alt="Rose large head (Orange)" class="cImg pstem" /></div><div class="productName">Rose large head (Orange)</div></div></div><div class="slideBlock"><div class="product41 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadPink-0.png" alt="Rose large head (Pink)" class="cImg pstem" /></div><div class="productName">Rose large head (Pink)</div></div><div class="product42 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadWhite-0.png" alt="Rose large head (White)" class="cImg pstem" /></div><div class="productName">Rose large head (White)</div></div><div class="product201 productWrap"><div class="productImg"><img src="media/images/products/gb_SeptemberFlowerBlue-0.png" alt="September Flower (Blue)" class="cImg pstem" /></div><div class="productName">September Flower (Blue)</div></div><div class="product195 productWrap"><div class="productImg"><img src="media/images/products/gb_Solidago-0.png" alt="Solidago" class="cImg pstem" /></div><div class="productName">Solidago</div></div><div class="product2 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationRed-0.png" alt="Spray Carnation (Red)" class="cImg pstem" /></div><div class="productName">Spray Carnation (Red)</div></div><div class="product46 productWrap"><div class="productImg"><img src="media/images/products/gb_StaticeBlue-0.png" alt="Statice (Blue)" class="cImg pstem" /></div><div class="productName">Statice (Blue)</div></div></div></div>');                
                if (choicetype == 'container') {
                    containeravailability();
                } else if (choicetype == 'sundry') {
                    sundryavailability();
                }                ev.preventDefault();
            });
        }
    });
    $('.showAllFlowers > a').click(function(ev) {
        lastfilter = 'all';
        /*$.post('sort/html', {
            type: 'stem',
            sort: $('#sortby').val()
        }, function(data) {
            updatemenu(data);
            $('#filterByChoice').html('');
        });*/
        updatemenu('<div class="stem slider"><div class="slideBlock"><div class="product25 productWrap"><div class="productImg"><img src="media/images/products/gb_AlstroemeriaPink-0.png" alt="Alstroemeria (Pink)" class="cImg pstem" /></div><div class="productName">Alstroemeria (Pink)</div></div><div class="product29 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationGreen-0.png" alt="Carnation (Green)" class="cImg pstem" /></div><div class="productName">Carnation (Green)</div></div><div class="product190 productWrap"><div class="productImg"><img src="media/images/products/gb_Carnation-0.png" alt="Carnation (Orange)" class="cImg pstem" /></div><div class="productName">Carnation (Orange)</div></div><div class="product4 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationWhite-0.png" alt="Carnation (White)" class="cImg pstem" /></div><div class="productName">Carnation (White)</div></div><div class="product191 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationYellow-0.png" alt="Carnation (Yellow)" class="cImg pstem" /></div><div class="productName">Carnation (Yellow)</div></div><div class="product43 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayPink-0.png" alt="Carnation spray (Pink)" class="cImg pstem" /></div><div class="productName">Carnation spray (Pink)</div></div></div><div class="slideBlock"><div class="product198 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayWhite-0.png" alt="Carnation spray (White)" class="cImg pstem" /></div><div class="productName">Carnation spray (White)</div></div><div class="product197 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumRed-0.png" alt="Chrysanthemum (Red)" class="cImg pstem" /></div><div class="productName">Chrysanthemum (Red)</div></div><div class="product5 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumBloomWhite-0.png" alt="Chrysanthemum Bloom (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum Bloom (White)</div></div><div class="product196 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayCream-0.png" alt="Chrysanthemum spray (Cream)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Cream)</div></div><div class="product44 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayGreen-0.png" alt="Chrysanthemum spray (Green)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Green)</div></div><div class="product45 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayWhite-0.png" alt="Chrysanthemum spray (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (White)</div></div></div><div class="slideBlock"><div class="product6 productWrap"><div class="productImg"><img src="media/images/products/gb_EryngiumBlue-0.png" alt="Eryngium (Blue)" class="cImg pstem" /></div><div class="productName">Eryngium (Blue)</div></div><div class="product199 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaPurple-0.png" alt="Freesia (Lilac)" class="cImg pstem" /></div><div class="productName">Freesia (Lilac)</div></div><div class="product200 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaYellow-0.png" alt="Freesia (Yellow)" class="cImg pstem" /></div><div class="productName">Freesia (Yellow)</div></div><div class="product30 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiCerise-0.png" alt="Germini (Cerise)" class="cImg pstem" /></div><div class="productName">Germini (Cerise)</div></div><div class="product193 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiOrange-0.png" alt="Germini (Orange)" class="cImg pstem" /></div><div class="productName">Germini (Orange)</div></div><div class="product31 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPeach-0.png" alt="Germini (Peach)" class="cImg pstem" /></div><div class="productName">Germini (Peach)</div></div></div><div class="slideBlock"><div class="product32 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPink-0.png" alt="Germini (Pink)" class="cImg pstem" /></div><div class="productName">Germini (Pink)</div></div><div class="product33 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiWhite-0.png" alt="Germini (White)" class="cImg pstem" /></div><div class="productName">Germini (White)</div></div><div class="product194 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiYellow-0.png" alt="Germini (Yellow)" class="cImg pstem" /></div><div class="productName">Germini (Yellow)</div></div><div class="product34 productWrap"><div class="productImg"><img src="media/images/products/gb_GypsophilaWhite-0.png" alt="Gypsophila (White)" class="cImg pstem" /></div><div class="productName">Gypsophila (White)</div></div><div class="product16 productWrap"><div class="productImg"><img src="media/images/products/gb_IrisBlue-0.png" alt="Iris (Blue)" class="cImg pstem" /></div><div class="productName">Iris (Blue)</div></div><div class="product26 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticCream-0.png" alt="Lily Asiatic (Cream) " class="cImg pstem" /></div><div class="productName">Lily Asiatic (Cream) </div></div></div><div class="slideBlock"><div class="product192 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticOrange-0.png" alt="Lily Asiatic (Orange)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Orange)</div></div><div class="product27 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticWhite-0.png" alt="Lily Asiatic (White)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (White)</div></div><div class="product28 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticYellow-0.png" alt="Lily Asiatic (Yellow)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Yellow)</div></div><div class="product37 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalPink-0.png" alt="Lily Oriental (Pink)" class="cImg pstem" /></div><div class="productName">Lily Oriental (Pink)</div></div><div class="product38 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalWhite-0.png" alt="Lily Oriental (White)" class="cImg pstem" /></div><div class="productName">Lily Oriental (White)</div></div><div class="product10 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusLilac-0.png" alt="Lisianthus (Lilac)" class="cImg pstem" /></div><div class="productName">Lisianthus (Lilac)</div></div></div><div class="slideBlock"><div class="product35 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusPink-0.png" alt="Lisianthus (Pink)" class="cImg pstem" /></div><div class="productName">Lisianthus (Pink)</div></div><div class="product36 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusWhite-0.png" alt="Lisianthus (White)" class="cImg pstem" /></div><div class="productName">Lisianthus (White)</div></div><div class="product13 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseRed-0.png" alt="Rose (Red)" class="cImg pstem" /></div><div class="productName">Rose (Red)</div></div><div class="product202 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseYellow-0.png" alt="Rose (Yellow)" class="cImg pstem" /></div><div class="productName">Rose (Yellow)</div></div><div class="product39 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadCerise-0.png" alt="Rose large head (Cerise)" class="cImg pstem" /></div><div class="productName">Rose large head (Cerise)</div></div><div class="product40 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadOrange-0.png" alt="Rose large head (Orange)" class="cImg pstem" /></div><div class="productName">Rose large head (Orange)</div></div></div><div class="slideBlock"><div class="product41 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadPink-0.png" alt="Rose large head (Pink)" class="cImg pstem" /></div><div class="productName">Rose large head (Pink)</div></div><div class="product42 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadWhite-0.png" alt="Rose large head (White)" class="cImg pstem" /></div><div class="productName">Rose large head (White)</div></div><div class="product201 productWrap"><div class="productImg"><img src="media/images/products/gb_SeptemberFlowerBlue-0.png" alt="September Flower (Blue)" class="cImg pstem" /></div><div class="productName">September Flower (Blue)</div></div><div class="product195 productWrap"><div class="productImg"><img src="media/images/products/gb_Solidago-0.png" alt="Solidago" class="cImg pstem" /></div><div class="productName">Solidago</div></div><div class="product2 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationRed-0.png" alt="Spray Carnation (Red)" class="cImg pstem" /></div><div class="productName">Spray Carnation (Red)</div></div><div class="product46 productWrap"><div class="productImg"><img src="media/images/products/gb_StaticeBlue-0.png" alt="Statice (Blue)" class="cImg pstem" /></div><div class="productName">Statice (Blue)</div></div></div></div>');                
        
        $('.stemBlockWidthAnchor').toggleClass('menuOpen');
        ev.preventDefault();
    });
    $('#sortby').change(function(ev) {
        sorttype = $(this).val();
        sorttext = $(this).children().filter(":selected").text();
        lastsort = sorttype;
        if (lastfilter == 'all') {
            postdata = {
                type: 'stem',
                sort: sorttype
            };
        } else {
            postdata = {
                type: 'stem',
                sort: sorttype,
                filter: lastfilter
            };
        }
        /*$.post('sort/html', postdata, function(data) {
            updatemenu(data);
            $('#sortByChoice').html(sorttext);
        });*/
        updatemenu('<div class="stem slider"><div class="slideBlock"><div class="product25 productWrap"><div class="productImg"><img src="media/images/products/gb_AlstroemeriaPink-0.png" alt="Alstroemeria (Pink)" class="cImg pstem" /></div><div class="productName">Alstroemeria (Pink)</div></div><div class="product29 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationGreen-0.png" alt="Carnation (Green)" class="cImg pstem" /></div><div class="productName">Carnation (Green)</div></div><div class="product190 productWrap"><div class="productImg"><img src="media/images/products/gb_Carnation-0.png" alt="Carnation (Orange)" class="cImg pstem" /></div><div class="productName">Carnation (Orange)</div></div><div class="product4 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationWhite-0.png" alt="Carnation (White)" class="cImg pstem" /></div><div class="productName">Carnation (White)</div></div><div class="product191 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationYellow-0.png" alt="Carnation (Yellow)" class="cImg pstem" /></div><div class="productName">Carnation (Yellow)</div></div><div class="product43 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayPink-0.png" alt="Carnation spray (Pink)" class="cImg pstem" /></div><div class="productName">Carnation spray (Pink)</div></div></div><div class="slideBlock"><div class="product198 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayWhite-0.png" alt="Carnation spray (White)" class="cImg pstem" /></div><div class="productName">Carnation spray (White)</div></div><div class="product197 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumRed-0.png" alt="Chrysanthemum (Red)" class="cImg pstem" /></div><div class="productName">Chrysanthemum (Red)</div></div><div class="product5 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumBloomWhite-0.png" alt="Chrysanthemum Bloom (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum Bloom (White)</div></div><div class="product196 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayCream-0.png" alt="Chrysanthemum spray (Cream)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Cream)</div></div><div class="product44 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayGreen-0.png" alt="Chrysanthemum spray (Green)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Green)</div></div><div class="product45 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayWhite-0.png" alt="Chrysanthemum spray (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (White)</div></div></div><div class="slideBlock"><div class="product6 productWrap"><div class="productImg"><img src="media/images/products/gb_EryngiumBlue-0.png" alt="Eryngium (Blue)" class="cImg pstem" /></div><div class="productName">Eryngium (Blue)</div></div><div class="product199 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaPurple-0.png" alt="Freesia (Lilac)" class="cImg pstem" /></div><div class="productName">Freesia (Lilac)</div></div><div class="product200 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaYellow-0.png" alt="Freesia (Yellow)" class="cImg pstem" /></div><div class="productName">Freesia (Yellow)</div></div><div class="product30 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiCerise-0.png" alt="Germini (Cerise)" class="cImg pstem" /></div><div class="productName">Germini (Cerise)</div></div><div class="product193 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiOrange-0.png" alt="Germini (Orange)" class="cImg pstem" /></div><div class="productName">Germini (Orange)</div></div><div class="product31 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPeach-0.png" alt="Germini (Peach)" class="cImg pstem" /></div><div class="productName">Germini (Peach)</div></div></div><div class="slideBlock"><div class="product32 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPink-0.png" alt="Germini (Pink)" class="cImg pstem" /></div><div class="productName">Germini (Pink)</div></div><div class="product33 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiWhite-0.png" alt="Germini (White)" class="cImg pstem" /></div><div class="productName">Germini (White)</div></div><div class="product194 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiYellow-0.png" alt="Germini (Yellow)" class="cImg pstem" /></div><div class="productName">Germini (Yellow)</div></div><div class="product34 productWrap"><div class="productImg"><img src="media/images/products/gb_GypsophilaWhite-0.png" alt="Gypsophila (White)" class="cImg pstem" /></div><div class="productName">Gypsophila (White)</div></div><div class="product16 productWrap"><div class="productImg"><img src="media/images/products/gb_IrisBlue-0.png" alt="Iris (Blue)" class="cImg pstem" /></div><div class="productName">Iris (Blue)</div></div><div class="product26 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticCream-0.png" alt="Lily Asiatic (Cream) " class="cImg pstem" /></div><div class="productName">Lily Asiatic (Cream) </div></div></div><div class="slideBlock"><div class="product192 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticOrange-0.png" alt="Lily Asiatic (Orange)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Orange)</div></div><div class="product27 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticWhite-0.png" alt="Lily Asiatic (White)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (White)</div></div><div class="product28 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticYellow-0.png" alt="Lily Asiatic (Yellow)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Yellow)</div></div><div class="product37 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalPink-0.png" alt="Lily Oriental (Pink)" class="cImg pstem" /></div><div class="productName">Lily Oriental (Pink)</div></div><div class="product38 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalWhite-0.png" alt="Lily Oriental (White)" class="cImg pstem" /></div><div class="productName">Lily Oriental (White)</div></div><div class="product10 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusLilac-0.png" alt="Lisianthus (Lilac)" class="cImg pstem" /></div><div class="productName">Lisianthus (Lilac)</div></div></div><div class="slideBlock"><div class="product35 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusPink-0.png" alt="Lisianthus (Pink)" class="cImg pstem" /></div><div class="productName">Lisianthus (Pink)</div></div><div class="product36 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusWhite-0.png" alt="Lisianthus (White)" class="cImg pstem" /></div><div class="productName">Lisianthus (White)</div></div><div class="product13 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseRed-0.png" alt="Rose (Red)" class="cImg pstem" /></div><div class="productName">Rose (Red)</div></div><div class="product202 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseYellow-0.png" alt="Rose (Yellow)" class="cImg pstem" /></div><div class="productName">Rose (Yellow)</div></div><div class="product39 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadCerise-0.png" alt="Rose large head (Cerise)" class="cImg pstem" /></div><div class="productName">Rose large head (Cerise)</div></div><div class="product40 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadOrange-0.png" alt="Rose large head (Orange)" class="cImg pstem" /></div><div class="productName">Rose large head (Orange)</div></div></div><div class="slideBlock"><div class="product41 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadPink-0.png" alt="Rose large head (Pink)" class="cImg pstem" /></div><div class="productName">Rose large head (Pink)</div></div><div class="product42 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadWhite-0.png" alt="Rose large head (White)" class="cImg pstem" /></div><div class="productName">Rose large head (White)</div></div><div class="product201 productWrap"><div class="productImg"><img src="media/images/products/gb_SeptemberFlowerBlue-0.png" alt="September Flower (Blue)" class="cImg pstem" /></div><div class="productName">September Flower (Blue)</div></div><div class="product195 productWrap"><div class="productImg"><img src="media/images/products/gb_Solidago-0.png" alt="Solidago" class="cImg pstem" /></div><div class="productName">Solidago</div></div><div class="product2 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationRed-0.png" alt="Spray Carnation (Red)" class="cImg pstem" /></div><div class="productName">Spray Carnation (Red)</div></div><div class="product46 productWrap"><div class="productImg"><img src="media/images/products/gb_StaticeBlue-0.png" alt="Statice (Blue)" class="cImg pstem" /></div><div class="productName">Statice (Blue)</div></div></div></div>');        
        ev.preventDefault();
    });
    $('.letterBlock span').each(function(index, el) {
        if (!$(el).hasClass('unused')) {
            $(el).click(function(ev) {
                letter = $(this).attr('class');
                lastfilter = 'name=' + letter;
                /*$.post('sort/html', {
                    type: 'stem',
                    filter: lastfilter,
                    sort: $('#sortby').val()
                }, function(data) {
                    updatemenu(data);
                    $('#filterByChoice').html("Name");
                });*/
                updatemenu('<div class="stem slider"><div class="slideBlock"><div class="product25 productWrap"><div class="productImg"><img src="media/images/products/gb_AlstroemeriaPink-0.png" alt="Alstroemeria (Pink)" class="cImg pstem" /></div><div class="productName">Alstroemeria (Pink)</div></div><div class="product29 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationGreen-0.png" alt="Carnation (Green)" class="cImg pstem" /></div><div class="productName">Carnation (Green)</div></div><div class="product190 productWrap"><div class="productImg"><img src="media/images/products/gb_Carnation-0.png" alt="Carnation (Orange)" class="cImg pstem" /></div><div class="productName">Carnation (Orange)</div></div><div class="product4 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationWhite-0.png" alt="Carnation (White)" class="cImg pstem" /></div><div class="productName">Carnation (White)</div></div><div class="product191 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationYellow-0.png" alt="Carnation (Yellow)" class="cImg pstem" /></div><div class="productName">Carnation (Yellow)</div></div><div class="product43 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayPink-0.png" alt="Carnation spray (Pink)" class="cImg pstem" /></div><div class="productName">Carnation spray (Pink)</div></div></div><div class="slideBlock"><div class="product198 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayWhite-0.png" alt="Carnation spray (White)" class="cImg pstem" /></div><div class="productName">Carnation spray (White)</div></div><div class="product197 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumRed-0.png" alt="Chrysanthemum (Red)" class="cImg pstem" /></div><div class="productName">Chrysanthemum (Red)</div></div><div class="product5 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumBloomWhite-0.png" alt="Chrysanthemum Bloom (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum Bloom (White)</div></div><div class="product196 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayCream-0.png" alt="Chrysanthemum spray (Cream)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Cream)</div></div><div class="product44 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayGreen-0.png" alt="Chrysanthemum spray (Green)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Green)</div></div><div class="product45 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayWhite-0.png" alt="Chrysanthemum spray (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (White)</div></div></div><div class="slideBlock"><div class="product6 productWrap"><div class="productImg"><img src="media/images/products/gb_EryngiumBlue-0.png" alt="Eryngium (Blue)" class="cImg pstem" /></div><div class="productName">Eryngium (Blue)</div></div><div class="product199 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaPurple-0.png" alt="Freesia (Lilac)" class="cImg pstem" /></div><div class="productName">Freesia (Lilac)</div></div><div class="product200 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaYellow-0.png" alt="Freesia (Yellow)" class="cImg pstem" /></div><div class="productName">Freesia (Yellow)</div></div><div class="product30 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiCerise-0.png" alt="Germini (Cerise)" class="cImg pstem" /></div><div class="productName">Germini (Cerise)</div></div><div class="product193 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiOrange-0.png" alt="Germini (Orange)" class="cImg pstem" /></div><div class="productName">Germini (Orange)</div></div><div class="product31 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPeach-0.png" alt="Germini (Peach)" class="cImg pstem" /></div><div class="productName">Germini (Peach)</div></div></div><div class="slideBlock"><div class="product32 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPink-0.png" alt="Germini (Pink)" class="cImg pstem" /></div><div class="productName">Germini (Pink)</div></div><div class="product33 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiWhite-0.png" alt="Germini (White)" class="cImg pstem" /></div><div class="productName">Germini (White)</div></div><div class="product194 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiYellow-0.png" alt="Germini (Yellow)" class="cImg pstem" /></div><div class="productName">Germini (Yellow)</div></div><div class="product34 productWrap"><div class="productImg"><img src="media/images/products/gb_GypsophilaWhite-0.png" alt="Gypsophila (White)" class="cImg pstem" /></div><div class="productName">Gypsophila (White)</div></div><div class="product16 productWrap"><div class="productImg"><img src="media/images/products/gb_IrisBlue-0.png" alt="Iris (Blue)" class="cImg pstem" /></div><div class="productName">Iris (Blue)</div></div><div class="product26 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticCream-0.png" alt="Lily Asiatic (Cream) " class="cImg pstem" /></div><div class="productName">Lily Asiatic (Cream) </div></div></div><div class="slideBlock"><div class="product192 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticOrange-0.png" alt="Lily Asiatic (Orange)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Orange)</div></div><div class="product27 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticWhite-0.png" alt="Lily Asiatic (White)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (White)</div></div><div class="product28 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticYellow-0.png" alt="Lily Asiatic (Yellow)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Yellow)</div></div><div class="product37 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalPink-0.png" alt="Lily Oriental (Pink)" class="cImg pstem" /></div><div class="productName">Lily Oriental (Pink)</div></div><div class="product38 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalWhite-0.png" alt="Lily Oriental (White)" class="cImg pstem" /></div><div class="productName">Lily Oriental (White)</div></div><div class="product10 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusLilac-0.png" alt="Lisianthus (Lilac)" class="cImg pstem" /></div><div class="productName">Lisianthus (Lilac)</div></div></div><div class="slideBlock"><div class="product35 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusPink-0.png" alt="Lisianthus (Pink)" class="cImg pstem" /></div><div class="productName">Lisianthus (Pink)</div></div><div class="product36 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusWhite-0.png" alt="Lisianthus (White)" class="cImg pstem" /></div><div class="productName">Lisianthus (White)</div></div><div class="product13 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseRed-0.png" alt="Rose (Red)" class="cImg pstem" /></div><div class="productName">Rose (Red)</div></div><div class="product202 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseYellow-0.png" alt="Rose (Yellow)" class="cImg pstem" /></div><div class="productName">Rose (Yellow)</div></div><div class="product39 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadCerise-0.png" alt="Rose large head (Cerise)" class="cImg pstem" /></div><div class="productName">Rose large head (Cerise)</div></div><div class="product40 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadOrange-0.png" alt="Rose large head (Orange)" class="cImg pstem" /></div><div class="productName">Rose large head (Orange)</div></div></div><div class="slideBlock"><div class="product41 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadPink-0.png" alt="Rose large head (Pink)" class="cImg pstem" /></div><div class="productName">Rose large head (Pink)</div></div><div class="product42 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadWhite-0.png" alt="Rose large head (White)" class="cImg pstem" /></div><div class="productName">Rose large head (White)</div></div><div class="product201 productWrap"><div class="productImg"><img src="media/images/products/gb_SeptemberFlowerBlue-0.png" alt="September Flower (Blue)" class="cImg pstem" /></div><div class="productName">September Flower (Blue)</div></div><div class="product195 productWrap"><div class="productImg"><img src="media/images/products/gb_Solidago-0.png" alt="Solidago" class="cImg pstem" /></div><div class="productName">Solidago</div></div><div class="product2 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationRed-0.png" alt="Spray Carnation (Red)" class="cImg pstem" /></div><div class="productName">Spray Carnation (Red)</div></div><div class="product46 productWrap"><div class="productImg"><img src="media/images/products/gb_StaticeBlue-0.png" alt="Statice (Blue)" class="cImg pstem" /></div><div class="productName">Statice (Blue)</div></div></div></div>');                

            });
            $(el).css('cursor', 'pointer');
        }
    });
    $('.flowerColourBlock a').click(function(ev) {
        colour = $(this).attr('class');
        lastfilter = 'colour=' + colour;
        /*$.post('sort/html', {
            type: 'stem',
            filter: lastfilter,
            sort: $('#sortby').val()
        }, function(data) {
            updatemenu(data);
            $('#filterByChoice').html("Colour");
        });*/
        updatemenu('<div class="stem slider"><div class="slideBlock"><div class="product25 productWrap"><div class="productImg"><img src="media/images/products/gb_AlstroemeriaPink-0.png" alt="Alstroemeria (Pink)" class="cImg pstem" /></div><div class="productName">Alstroemeria (Pink)</div></div><div class="product29 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationGreen-0.png" alt="Carnation (Green)" class="cImg pstem" /></div><div class="productName">Carnation (Green)</div></div><div class="product190 productWrap"><div class="productImg"><img src="media/images/products/gb_Carnation-0.png" alt="Carnation (Orange)" class="cImg pstem" /></div><div class="productName">Carnation (Orange)</div></div><div class="product4 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationWhite-0.png" alt="Carnation (White)" class="cImg pstem" /></div><div class="productName">Carnation (White)</div></div><div class="product191 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationYellow-0.png" alt="Carnation (Yellow)" class="cImg pstem" /></div><div class="productName">Carnation (Yellow)</div></div><div class="product43 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayPink-0.png" alt="Carnation spray (Pink)" class="cImg pstem" /></div><div class="productName">Carnation spray (Pink)</div></div></div><div class="slideBlock"><div class="product198 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayWhite-0.png" alt="Carnation spray (White)" class="cImg pstem" /></div><div class="productName">Carnation spray (White)</div></div><div class="product197 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumRed-0.png" alt="Chrysanthemum (Red)" class="cImg pstem" /></div><div class="productName">Chrysanthemum (Red)</div></div><div class="product5 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumBloomWhite-0.png" alt="Chrysanthemum Bloom (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum Bloom (White)</div></div><div class="product196 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayCream-0.png" alt="Chrysanthemum spray (Cream)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Cream)</div></div><div class="product44 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayGreen-0.png" alt="Chrysanthemum spray (Green)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Green)</div></div><div class="product45 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayWhite-0.png" alt="Chrysanthemum spray (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (White)</div></div></div><div class="slideBlock"><div class="product6 productWrap"><div class="productImg"><img src="media/images/products/gb_EryngiumBlue-0.png" alt="Eryngium (Blue)" class="cImg pstem" /></div><div class="productName">Eryngium (Blue)</div></div><div class="product199 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaPurple-0.png" alt="Freesia (Lilac)" class="cImg pstem" /></div><div class="productName">Freesia (Lilac)</div></div><div class="product200 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaYellow-0.png" alt="Freesia (Yellow)" class="cImg pstem" /></div><div class="productName">Freesia (Yellow)</div></div><div class="product30 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiCerise-0.png" alt="Germini (Cerise)" class="cImg pstem" /></div><div class="productName">Germini (Cerise)</div></div><div class="product193 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiOrange-0.png" alt="Germini (Orange)" class="cImg pstem" /></div><div class="productName">Germini (Orange)</div></div><div class="product31 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPeach-0.png" alt="Germini (Peach)" class="cImg pstem" /></div><div class="productName">Germini (Peach)</div></div></div><div class="slideBlock"><div class="product32 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPink-0.png" alt="Germini (Pink)" class="cImg pstem" /></div><div class="productName">Germini (Pink)</div></div><div class="product33 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiWhite-0.png" alt="Germini (White)" class="cImg pstem" /></div><div class="productName">Germini (White)</div></div><div class="product194 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiYellow-0.png" alt="Germini (Yellow)" class="cImg pstem" /></div><div class="productName">Germini (Yellow)</div></div><div class="product34 productWrap"><div class="productImg"><img src="media/images/products/gb_GypsophilaWhite-0.png" alt="Gypsophila (White)" class="cImg pstem" /></div><div class="productName">Gypsophila (White)</div></div><div class="product16 productWrap"><div class="productImg"><img src="media/images/products/gb_IrisBlue-0.png" alt="Iris (Blue)" class="cImg pstem" /></div><div class="productName">Iris (Blue)</div></div><div class="product26 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticCream-0.png" alt="Lily Asiatic (Cream) " class="cImg pstem" /></div><div class="productName">Lily Asiatic (Cream) </div></div></div><div class="slideBlock"><div class="product192 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticOrange-0.png" alt="Lily Asiatic (Orange)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Orange)</div></div><div class="product27 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticWhite-0.png" alt="Lily Asiatic (White)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (White)</div></div><div class="product28 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticYellow-0.png" alt="Lily Asiatic (Yellow)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Yellow)</div></div><div class="product37 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalPink-0.png" alt="Lily Oriental (Pink)" class="cImg pstem" /></div><div class="productName">Lily Oriental (Pink)</div></div><div class="product38 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalWhite-0.png" alt="Lily Oriental (White)" class="cImg pstem" /></div><div class="productName">Lily Oriental (White)</div></div><div class="product10 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusLilac-0.png" alt="Lisianthus (Lilac)" class="cImg pstem" /></div><div class="productName">Lisianthus (Lilac)</div></div></div><div class="slideBlock"><div class="product35 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusPink-0.png" alt="Lisianthus (Pink)" class="cImg pstem" /></div><div class="productName">Lisianthus (Pink)</div></div><div class="product36 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusWhite-0.png" alt="Lisianthus (White)" class="cImg pstem" /></div><div class="productName">Lisianthus (White)</div></div><div class="product13 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseRed-0.png" alt="Rose (Red)" class="cImg pstem" /></div><div class="productName">Rose (Red)</div></div><div class="product202 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseYellow-0.png" alt="Rose (Yellow)" class="cImg pstem" /></div><div class="productName">Rose (Yellow)</div></div><div class="product39 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadCerise-0.png" alt="Rose large head (Cerise)" class="cImg pstem" /></div><div class="productName">Rose large head (Cerise)</div></div><div class="product40 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadOrange-0.png" alt="Rose large head (Orange)" class="cImg pstem" /></div><div class="productName">Rose large head (Orange)</div></div></div><div class="slideBlock"><div class="product41 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadPink-0.png" alt="Rose large head (Pink)" class="cImg pstem" /></div><div class="productName">Rose large head (Pink)</div></div><div class="product42 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadWhite-0.png" alt="Rose large head (White)" class="cImg pstem" /></div><div class="productName">Rose large head (White)</div></div><div class="product201 productWrap"><div class="productImg"><img src="media/images/products/gb_SeptemberFlowerBlue-0.png" alt="September Flower (Blue)" class="cImg pstem" /></div><div class="productName">September Flower (Blue)</div></div><div class="product195 productWrap"><div class="productImg"><img src="media/images/products/gb_Solidago-0.png" alt="Solidago" class="cImg pstem" /></div><div class="productName">Solidago</div></div><div class="product2 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationRed-0.png" alt="Spray Carnation (Red)" class="cImg pstem" /></div><div class="productName">Spray Carnation (Red)</div></div><div class="product46 productWrap"><div class="productImg"><img src="media/images/products/gb_StaticeBlue-0.png" alt="Statice (Blue)" class="cImg pstem" /></div><div class="productName">Statice (Blue)</div></div></div></div>');                
        $('#filterByChoice').html("Colour");        
        
        $('.stemBlockWidthAnchor').toggleClass('menuOpen');
        ev.preventDefault();
    });
    $('.meaningBlock a').click(function(ev) {
        meaning = $(this).attr('class');
        lastfilter = 'meaning=' + meaning;
        $.post('sort/html', {
            type: 'stem',
            filter: lastfilter,
            sort: $('#sortby').val()
        }, function(data) {
            updatemenu(data);
            $('#filterByChoice').html("Meaning");
        });
        $('.stemBlockWidthAnchor').toggleClass('menuOpen');
        ev.preventDefault();
    });
    $('#viewMenu').click(function(ev) {
        $('.stemBlockWidthAnchor').toggleClass('menuOpen');
    });
    $('#viewMenu').click(function(ev) {
        if (firstclick) {
            $('.secondLevelButton .arrow').css({
                'background': 'url(media/images/configurator/menu/menu-silver-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
            $('.topLevelButton .arrow').css({
                'background': 'url(media/images/configurator/menu/menu-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
            $('.nameBlock, .colourBlock, .meaningBlock').each(function(index, el) {
                if (!$(el).hasClass('hideBlock')) {
                    $(el).addClass('hideBlock');
                }
            });
            $('#sortoptions').toggleClass('hideBlock');
            firstclick = false;
        } else {
            $('.secondLevelButton .arrow').css({
                'background': 'url(media/images/configurator/menu/menu-silver-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
            $('.topLevelButton .arrow').css({
                'background': 'url(media/images/configurator/menu/menu-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
            $('.stemOptions > .topLevelButton').find('.arrow').css({
                'background': 'url(media/images/configurator/menu/menu-arrow-open.png) no-repeat top left',
                'width': '20px',
                'height': '14px'
            });
            $('.nameBlock, .colourBlock, .meaningBlock').each(function(index, el) {
                if (!$(el).hasClass('hideBlock')) {
                    $(el).addClass('hideBlock');
                }
            });
            $('#sortoptions').toggleClass('hideBlock');
            if ($('.flowersOptions').hasClass('hideBlock')) {
                $('.flowersOptions').removeClass('hideBlock');
            }
        }
        ev.preventDefault();
    });
    $('.filterByName > a, .filterByColour > a, .filterByMeaning > a').click(function(ev) {
        $('.nameBlock, .colourBlock, .meaningBlock').each(function(index, el) {
            if (!$(el).hasClass('hideBlock')) {
                $(el).addClass('hideBlock');
            }
            $('.secondLevelButton .arrow').css({
                'background': 'url(media/images/configurator/menu/menu-silver-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
        });
        $(this).find('.arrow').css({
            'background': 'url(media/images/configurator/menu/menu-silver-arrow-open.png) no-repeat top left',
            'width': '20px',
            'height': '14px'
        });
        $(this).parent('div').next('div').removeClass('hideBlock');
        ev.preventDefault();
    });
    $('.stemOptions > a').click(function(ev) {
        if ($(this).parent('div').next('div').hasClass('hideBlock')) {
            $(this).find('.arrow').css({
                'background': 'url(media/images/configurator/menu/menu-arrow-open.png) no-repeat top left',
                'width': '20px',
                'height': '14px'
            });
        } else {
            $(this).find('.arrow').css({
                'background': 'url(media/images/configurator/menu/menu-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
        }
        $(this).parent('div').next('div').toggleClass('hideBlock');
        ev.preventDefault();
    });
    $('.close, .closeProductOverlay').css('cursor', 'pointer');
    $('.close').click(function(ev) {
        $(this).parent('div').toggleClass('hideBlock');
        $('.secondLevelButton .arrow').css({
            'background': 'url(media/images/configurator/menu/menu-silver-arrow-closed.png) no-repeat top left',
            'width': '14px',
            'height': '20px'
        });
    });
    $('.closeProductOverlay').click(function(ev) {
        $('#productPopUp').hide();
        $('.stemBlockWidthAnchor').toggleClass('menuOpen');
    });
}

function interfaceListeners() {
    $('.galleryIcon').colorbox({
        width: "380px",
        href: "overlay/gallery",
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
        onComplete: function() {
            $('#gallerySave').click(function(ev) {
                saveBuild();
                ev.preventDefault();
            });
        }
    });
    $('.totalCostWrap').click(function(ev) {
                    console.log('post10');

        $.post('overlay/creativecharge', function(data) {
            $.colorbox({
                width: "913px",
                height: "450px",
                html: data,
                close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>'
            });
        });
    });
}

function sundryavailability() {
    $('.productWrap').each(function(index, el) {
        if (!isDefaultContainer()) {
            $(el).addClass("unavailable");
            $(el).find('img').draggable("option", "disabled", true);
        }
    });
}

function containeravailability() {
    placedfoliage = calculateFoliage();
    $('.productWrap').each(function(index, el) {
        tempstemcount = 0;
        classes = $(el).attr('class');
        classes = classes.split(" ");
        pid = classes[0];
        cpvol = images[pid][0].pvol;
        cpweight = images[pid][0].pweight;
        cbulky = images[pid][0].bulky;
        placedstems = foreground.getChildren();
        for (i = 0; i < placedstems.length; i++) {
            if (placedstems[i].pvol > 1) {
                tempstemcount += ((1 + cbulky) * placedstems[i].pvol);
            } else {
                tempstemcount += placedstems[i].pvol;
            }
        }
        if (placedfoliage < minimumfoliage) {
            if (tempstemcount >= ((cpvol - (minimumfoliage - placedfoliage)) - ((cbulky + 1) * 2))) {
                if (!$(el).hasClass("unavailable")) {
                    $(el).addClass("unavailable");
                    $(el).find('img').draggable("disable");
                    $(el).find('img').off('click');
                }
            } else {
                if ($(el).hasClass("unavailable")) {
                    $(el).removeClass("unavailable");
                    $(el).find('img').draggable("enable");
                    $(el).find('img').on('click', function(ev) {
                        ev.stopPropagation();
                        popX = $(this).offset().left + $(this).outerWidth();
                        if ($(this).offset().top < 251) {
                            popY = 20;
                        } else {
                            popY = 147;
                        }
                        cssclasses = $(this).parents('.productWrap').attr('class').split(" ");
                        productname = cssclasses[0];
                        productid = productname.replace("product", "");
                                    console.log('post11');

                        $.post('product/index/' + productid, function(data) {
                            $('#productPopUp').css({
                                "top": popY,
                                "left": popX + 30
                            });
                            $('#productPopUp').html(data).show();
                            $('.closeProductOverlay, #productPopUp').click(function(ev) {
                                $('#productPopUp').empty().hide();
                            });
                        });
                    });
                }
            }
        } else {
            if (tempstemcount >= (cpvol - ((cbulky + 1) * 2))) {
                if (!$(el).hasClass("unavailable")) {
                    $(el).addClass("unavailable");
                    $(el).find('img').draggable("disable");
                    $(el).find('img').off('click');
                }
            } else {
                if ($(el).hasClass("unavailable")) {
                    $(el).removeClass("unavailable");
                    $(el).find('img').draggable("enable");
                    $(el).find('img').on('click', function(ev) {
                        ev.stopPropagation();
                        popX = $(this).offset().left + $(this).outerWidth();
                        if ($(this).offset().top < 251) {
                            popY = 20;
                        } else {
                            popY = 147;
                        }
                        cssclasses = $(this).parents('.productWrap').attr('class').split(" ");
                        productname = cssclasses[0];
                        productid = productname.replace("product", "");
                                    console.log('post12');

                        $.post('product/index/' + productid, function(data) {
                            $('#productPopUp').css({
                                "top": popY,
                                "left": popX + 30
                            });
                            $('#productPopUp').html(data).show();
                            $('.closeProductOverlay, #productPopUp').click(function(ev) {
                                $('#productPopUp').empty().hide();
                            });
                        });
                    });
                }
            }
        }
    });
}

function recalculatestemcount() {
    stemcount = 0;
    placedstems = foreground.getChildren();
    for (i = 0; i < placedstems.length; i++) {
        stemcountup(placedstems[i]);
    }
}

function checkCapacityRemaining() {
    capacity = containerlayer.getChildren()[0].pvol;
    return capacity - stemcount;
}

function makeInformationOverlay(data) {
    $.colorbox({
        html: data,
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
        onComplete: function() {
            $('#ok').click(function(ev) {
                $.colorbox.close();
                ev.preventDefault;
            });
        }
    });
}

function fullContainerCheck() {
    if (checkCapacityRemaining() == 0) {
        if (containerlayer.getChildren()[0].pvol < maxcontainersize) {
            $.post('overlay/dialog/selectcontainer', function(data) {
                makeInformationOverlay(data);
            });
        } else {
            $.post('overlay/dialog/full', function(data) {
                makeInformationOverlay(data);
            });
        }
    }
}

function calculateFoliage() {
    placedstems = foreground.getChildren();
    numFoliage = 0;
    for (i = 0; i < placedstems.length; i++) {
        if (placedstems[i].ptype == "pfoliage") {
            numFoliage++;
        }
    }
    return numFoliage;
}

function containerCanTakeStem(placed) {
    stemcountup(placed);
    placedfoliage = calculateFoliage();
    if (thistype == "pfoliage") {
        placedfoliage++;
    }
    cantake = true;
    alertmessage = "";
    if (placedfoliage < minimumfoliage) {
        if (checkCapacityRemaining() < (minimumfoliage - placedfoliage)) {
            if (containerlayer.getChildren()[0].pvol < maxcontainersize) {
                postinfo = {
                    foliage: (minimumfoliage - placedfoliage)
                };
                            console.log('post13');

                $.post('overlay/dialog/nearcapacity', postinfo, function(data) {
                    makeInformationOverlay(data);
                });
            } else {
                postinfo = {
                    foliage: (minimumfoliage - placedfoliage)
                };
                            console.log('post14');

                $.post('overlay/dialog/nearcapacitylargest', postinfo, function(data) {
                    makeInformationOverlay(data);
                });
            }
            cantake = false;
        }
    } else {
        if (checkCapacityRemaining() < 0) {
            if (containerlayer.getChildren()[0].pvol < maxcontainersize) {
                            console.log('post15');

                $.post('overlay/dialog/cannotplace', function(data) {
                    makeInformationOverlay(data);
                });
            } else {
                            console.log('post16');

                $.post('overlay/dialog/cannotplacelargest', postinfo, function(data) {
                    makeInformationOverlay(data);
                });
            }
            cantake = false;
        }
    }
    stemcountdown(placed);
    return [cantake, alertmessage];
}

function makecontainer(imgname, isdefault) {
    image = images[imgname];
    imgW = image[0].width;
    offsetx = imgW / 2;
    container = new Kinetic.Image({
        x: 355 - offsetx,
        y: 260,
        image: image[0],
        draggable: false,
        name: imgname
    });
    container.productNum = imgname;
    container.pid = imgname;
    container.pvol = image[0].pvol;
    container.bulky = image[0].bulky;
    container.price = image[0].pcost / 100;
    container.isdefault = isdefault;
    return container;
}

function isDefaultContainer() {
    containers = containerlayer.getChildren();
    return containers[0].isdefault;
}

function makeribbon(imgname) {
    image = images[imgname];
    imgW = image[0].width;
    offsetx = imgW / 2;
    ribbon = new Kinetic.Image({
        x: 355 - offsetx,
        y: 270,
        image: image[0],
        draggable: false,
        name: imgname
    });
    ribbon.productNum = imgname;
    ribbon.pid = imgname;
    ribbon.price = image[0].pcost / 100;
    return ribbon;
}

function dragmoveListener(ev, stem) {
    var imgW = stem.getWidth();
    var imgH = stem.getHeight();
    var limitL = 0 + (imgW / 4);
    var limitR = 727 - (imgW / 4);
    var limitT = 0 + (imgH / 4);
    var limitB = 503 - (imgH / 4);
    var mouseX = get_mouse_x(ev);
    var mouseY = get_mouse_y(ev);
    if ((mouseX > limitL) && (mouseX < limitR) && (mouseY > limitT) && (mouseY < limitB)) {
        imgX = stem.getX() + (imgW / 2);
        imgY = stem.getY() + (imgH / 2);
        xoffset = 355;
        yoffset = 190;
        gridImgX = imgX - xoffset;
        gridImgY = ($('#foreground').height() - imgY) - yoffset;
        gridmouseX = get_grid_mouse_x(ev);
        gridmouseY = get_grid_mouse_y(ev);
        rads = cart_to_polar(gridmouseX, gridmouseY);
        stem.rad = rads[0];
        zindex = calculatezindex(stem);
        stem.setZIndex(zindex);
        boundary = get_boundary(gridmouseY, rads[0]);
        if (gridmouseX > 0) {
            stem.setScale(-1, 1);
        } else {
            stem.setScale(1, 1);
        }
        rotation = calculate_rotation(gridmouseX, gridmouseY, rads);
        stem.setRotationDeg(rotation);
        if (boundary !== stem.boundary) {
            stem.clearImageHitRegion();
            stem.setImage(images[thisimage][boundary]);
            stem.boundary = boundary;
            stem.createImageHitRegion(function() {
                foreground.draw();
            });
        }
        foreground.draw();
    } else {}
}

function dragendListener(ev) {
    background.draw();
    foreground.draw();
    if (ev.changedTouches) {
        mouseX = ev.changedTouches[0].pageX - $('#foreground').offset().left;
        mouseY = ev.changedTouches[0].pageY - $('#foreground').offset().top;
    } else if (ev.offsetX) {
        mouseX = ev.offsetX;
        mouseY = ev.offsetY;
    } else if (ev.layerX) {
        mouseX = ev.layerX;
        mouseY = ev.layerY;
    }
    if (((mouseX >= 0) && (mouseX <= 130)) && ((mouseY >= 370) && (mouseY <= 503))) {
        totalflowers--;
        totalcost -= selecteditem.price;
        displaycost = totalcost.toFixed(2).toString().split(".");
        $('#pounds').text(displaycost[0]);
        $('#pence').text("." + displaycost[1]);
        stemcountdown(selecteditem);
        imgID = selecteditem.getName();
        selecteditem.remove();
        for (item in items) {
            if (items[item]) {
                if (items[item].getName() == imgID) {
                    items[item] = null;
                }
            }
        }
        
        foreground.draw();
        if (totalflowers == creativechargeboundary && optiontobuy) {
            creativecharge = creativecharge1;
                        console.log('post17');

            setTimeout(function() {
                $.post('overlay/dialog/creativecharge1', function(data) {
                    makeInformationOverlay(data);
                });
                totalcost -= creativecharge2;
                totalcost += creativecharge1;
                displaycost = totalcost.toFixed(2).toString().split(".");
                $('#pounds').text(displaycost[0]);
                $('#pence').text("." + displaycost[1]);
            }, 50);
        }
        containeravailability();
    }
}

function add_stem_listeners(stem) {
    stem.on("mousedown touchstart", function() {
        var imagesrc = this.getImage();
        for (products in images) {
            if (images[products].indexOf(imagesrc) > -1) {
                thisimage = products;
            }
        }
        selecteditem = this;
        dragging = true;
    });
    stem.on("dragmove", function(ev) {
        dragmoveListener(ev, this);
    });
    stem.on("dragend", function(deevent) {
        dragendListener(deevent);
    });
}

function droplistener(background, containerlayer, foreground, event, ui) {
    var mouseX, mouseY, imgW, imgH, imgX, imgY;
    var offset = $('#foreground').offset();
    var triggerpoint = 50 + offset.left;
    $('body').off("mousemove");
    if ((event.pageX > triggerpoint) && drawing && !($(ui.draggable).hasClass('pcontainer')) && !($(ui.draggable).hasClass('psundry')) && !exited) {
        totalflowers++;
        
        totalcost += items[nextfree].price;
        displaycost = totalcost.toFixed(2).toString().split(".");
        $('#pounds').text(displaycost[0]);
        $('#pence').text("." + displaycost[1]);
        stemcountup(items[nextfree]);
        imgW = items[nextfree].width;
        imgH = items[nextfree].height;
        mouseX = get_mouse_x(event);
        mouseY = get_mouse_y(event);
        selecteditem = items[nextfree];
        add_stem_listeners(items[nextfree]);
        fullContainerCheck();
        if (totalflowers == (creativechargeboundary + 1) && optiontobuy) {
            creativecharge = creativecharge2;
                        console.log('post18');

            setTimeout(function() {
                $.post('overlay/dialog/creativecharge2', function(data) {
                    makeInformationOverlay(data);
                });
                totalcost -= creativecharge1;
                totalcost += creativecharge2;
                displaycost = totalcost.toFixed(2).toString().split(".");
                $('#pounds').text(displaycost[0]);
                $('#pence').text("." + displaycost[1]);
            }, 50);
        }
    }
    while (items[nextfree]) {
        nextfree++;
    }
}

function makecanvas() {
    stage = new Kinetic.Stage({
        container: "canvasWrapper",
        width: 727,
        height: 503,
        draggable: false,
        listening: true
    });
    background = new Kinetic.Layer({
        name: "background"
    });
    containerlayer = new Kinetic.Layer({
        name: "containerlayer"
    });
    sundrylayer = new Kinetic.Layer({
        name: "sundrylayer"
    });
    foreground = new Kinetic.Layer({
        name: "foreground"
    });
    stage.add(background);
    $('.kineticjs-content canvas').attr('id', 'background');
    stage.add(containerlayer);
    $('#background').next().attr('id', 'containerlayer');
    stage.add(sundrylayer);
    $('#containerlayer').next().attr('id', 'sundrylayer');
    stage.add(foreground);
    $('#sundrylayer').next().attr('id', 'foreground');
    bg = new Image();
    bg.src = "media/images/bg.png";
    bg.onload = function() {
        vase = new Kinetic.Image({
            x: 0,
            y: 0,
            image: bg,
            draggable: false
        });
        centrepoint = new Kinetic.Circle({
            x: 355,
            y: stage.getHeight() - 190,
            radius: 5,
            fill: "green",
            stroke: "green",
            strokeWidth: 1,
            draggable: false
        });
        startTxt = new Image();
        startTxt.src = "media/images/start.png";
        startTxt.onload = function() {
            startImg = new Kinetic.Image({
                x: 176,
                y: 81,
                image: startTxt,
                draggable: false,
                id: "startText"
            });
            startImgText = new Kinetic.Text({
                x: 200,
                y: 220,
                text: "Drag in a stem to get started",
                fontSize: 28,
                fontFamily: "Louisiana",
                textFill: "black",
                align: "center",
                id: "startImgText"
            });
            dustybin = new Image();
            dustybin.src = "media/images/trash.png";
            dustybin.onload = function() {
                dusty = new Kinetic.Image({
                    x: 22,
                    y: 403,
                    image: dustybin,
                    draggable: false,
                    id: "trash"
                });
                notepad = new Image();
                notepad.src = "media/images/notepad.png";
                notepadOn = new Image();
                notepadOn.src = "media/images/notepadOn.png";
                notepad.onload = function() {
                    mycreation = new Kinetic.Image({
                        x: 5,
                        y: 311,
                        image: notepad,
                        draggable: false
                    });
                    mycreationTxt = new Kinetic.Text({
                        x: 12,
                        y: 330,
                        text: "My Creation Details",
                        fontSize: 21,
                        fontFamily: "Louisiana",
                        fill: "black",
                        align: "center",
                        width: 65,
                        lineHeight: 0.65
                    });
                    startagain = new Image();
                    startagain.src = "media/images/reset.png";
                    startagainOn = new Image();
                    startagainOn.src = "media/images/resetOn.png";
                    startagain.onload = function() {
                        resetbouquet = new Kinetic.Image({
                            x: 12,
                            y: 470,
                            image: startagain,
                            draggable: false
                        });
                        resetbouquetTxt = new Kinetic.Text({
                            x: 32,
                            y: 476,
                            text: "Start again",
                            fontSize: 11,
                            fontFamily: "Arial",
                            fontStyle: "bold",
                            fill: "#333333",
                            align: "left"
                        });
                        resetIcon = new Kinetic.Group();
                        resetIcon.add(resetbouquet);
                        resetIcon.add(resetbouquetTxt);
                        resetIcon.on('click tap', function(ev) {
                            $.colorbox({
                                width: "356px",
                                href: "overlay/clear",
                                close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
                                onComplete: function() {
                                    $('#yesClear').click(function(ev) {
                                        clearAll();
                                        $.colorbox.close();
                                        ev.preventDefault();
                                    });
                                    $('#noClear').click(function(ev) {
                                        $.colorbox.close();
                                        ev.preventDefault();
                                    });
                                }
                            });
                        });
                        resetIcon.on('mouseover', function(ev) {
                            resetbouquet.setImage(startagainOn);
                            resetbouquetTxt.setFill("#000000");
                            document.body.style.cursor = "pointer";
                            background.draw();
                        });
                        resetIcon.on('mouseout', function(ev) {
                            resetbouquet.setImage(startagain);
                            resetbouquetTxt.setFill("#333333");
                            document.body.style.cursor = "default";
                            background.draw();
                        });
                        inventoryIcon = new Kinetic.Group();
                        inventoryIcon.add(mycreation);
                        inventoryIcon.add(mycreationTxt);
                        inventoryIcon.on('click tap', function(ev) {
                            makeInventory();
                        });
                        inventoryIcon.on('mouseover', function(ev) {
                            mycreation.setImage(notepadOn);
                            document.body.style.cursor = "pointer";
                            background.draw();
                        });
                        inventoryIcon.on('mouseout', function(ev) {
                            mycreation.setImage(notepad);
                            document.body.style.cursor = "default";
                            background.draw();
                        });
                        background.add(inventoryIcon);
                        background.add(resetIcon);
                        background.add(vase);
                        background.add(startImg);
                        background.add(startImgText);
                        background.add(dusty);
                        vase.moveToBottom();
                        background.draw();
                        buildxml = $('#xmlBuild').html();
                        if (buildxml.length > 0) {
                            recreateBuild(buildxml, background, containerlayer, sundrylayer, foreground, stage);
                        }
                        $.colorbox.close();
                    }
                }
            }
        }
    }
    container = makecontainer(defaultcontainer, true);
    containerlayer.add(container);
    containerlayer.draw();
    ribbon = makeribbon(defaultsundry, true);
    sundrylayer.add(ribbon);
    sundrylayer.draw();
    totalcost += container.price;
    displaycost = totalcost.toFixed(2).toString().split(".");
    $('#pounds').text(displaycost[0]);
    $('#pence').text("." + displaycost[1]);
    return [stage, background, containerlayer, sundrylayer, foreground];
}

function clearStart() {
    background = stage.get(".background")[0];
    startimage = stage.get("#startText")[0];
    startimageTxt = stage.get("#startImgText")[0];
    startimage.remove();
    startimageTxt.remove();
    background.draw();
    start++;
}

function dragMechanics(stem) {
    var fullname = stem.attr('alt');
    stem.on("mousedown", function(event) {
        var thisimages = $(this).parents('.productWrap').attr('class').split(" ");
        var entered = 0;
        var lastrad = 250;
        exited = false;
        if (start == 0) {
            clearStart();
        }
        if ($(this).hasClass('pcontainer')) {
            if ($(this).hasClass('ui-draggable-disabled') == false) {
                thisimage = thisimages[0];
                $('body').on("mousemove", function(ev) {
                    var offset = $('#foreground').offset();
                    var triggerpoint = 50 + offset.left;
                    if (ev.pageX > triggerpoint) {
                        var imgW, imgH;
                        totalcost -= containerlayer.getChildren()[0].price;
                        containerlayer.removeChildren();
                        if (thisimage == defaultcontainer) {
                            isDefault = true;
                            ribbon = makeribbon(defaultsundry, true);
                            sundrylayer.add(ribbon);
                            sundrylayer.draw();
                        } else {
                            isDefault = false;
                            sundrylayer.removeChildren();
                            sundrylayer.draw();
                        }
                        container = makecontainer(thisimage, isDefault);
                        $('.ui-draggable-dragging').css('opacity', '0');
                        containerlayer.add(container);
                        containerlayer.draw();
                        recalculatestemcount();
                        $('body').off("mousemove");
                        totalcost += container.price;
                        displaycost = totalcost.toFixed(2).toString().split(".");
                        $('#pounds').text(displaycost[0]);
                        $('#pence').text("." + displaycost[1]);
                    }
                });
            } else {
                postinfo = {
                    capacity: images[thisimages[0]][0].pvol
                };
                            console.log('post19');

                $.post('overlay/dialog/containertoosmall', postinfo, function(data) {
                    makeInformationOverlay(data);
                });
            }
        } else if ($(this).hasClass('psundry')) {
            if ($(this).hasClass('ui-draggable-disabled') == false && isDefaultContainer()) {
                thisimage = thisimages[0];
                $('body').on("mousemove", function(ev) {
                    var offset = $('#foreground').offset();
                    var triggerpoint = 50 + offset.left;
                    if (ev.pageX > triggerpoint) {
                        var imgW, imgH;
                        sundrylayer.removeChildren();
                        ribbon = makeribbon(thisimage);
                        $('.ui-draggable-dragging').css('opacity', '0');
                        sundrylayer.add(ribbon);
                        sundrylayer.draw();
                        $('body').off("mousemove");
                    }
                });
            }
        } else {
            thistype = $(this).attr("class");
            thistype = thistype.split(" ");
            thistype = thistype[1];
            thisimage = thisimages[0];
            $('body').on("mousemove", function(ev) {
                var offset = $('#foreground').offset();
                var triggerpoint = 50 + offset.left;
                cantake = containerCanTakeStem(images[thisimage][0]);
                if (cantake[0]) {
                    $('body').off("mousemove");
                    $('body').on("mousemove", function(ev) {
                        var offset = $('#foreground').offset();
                        var triggerpoint = 50 + offset.left;
                        if ((entered == 0) && (ev.pageX > triggerpoint)) {
                            var imgW, imgH;
                            var d = new Date();
                            var now = d.getTime();
                            mouseX = get_mouse_x(ev);
                            mouseY = get_mouse_y(ev);
                            image = images[thisimage];
                            imgW = image[4].width;
                            imgH = image[4].height;
                            offsetx = imgW / 2;
                            offsety = imgH / 2;
                            items[nextfree] = new Kinetic.Image({
                                x: mouseX - offsetx,
                                y: mouseY - offsety,
                                image: image[4],
                                draggable: true,
                                offset: [offsetx, offsety],
                                name: thisimage + '_' + now,
                                dragBoundFunc: function(pos) {
                                    var limitL = 0 + (imgW / 4);
                                    var limitR = 727 - (imgW / 4);
                                    var limitT = 0 + (imgH / 4);
                                    var limitB = 503 - (imgH / 4);
                                    if ((pos.x > limitL) && (pos.x < limitR) && (pos.y > limitT) && (pos.y < limitB)) {
                                        return pos;
                                    } else {
                                        var newX = pos.x,
                                            newY = pos.y;
                                        if (pos.x <= limitL) {
                                            newX = limitL;
                                        } else if (pos.x >= limitR) {
                                            newX = limitR;
                                        }
                                        if (pos.y <= limitT) {
                                            newY = limitT;
                                        } else if (pos.y >= limitB) {
                                            newY = limitB;
                                        }
                                        return {
                                            x: newX,
                                            y: newY
                                        };
                                    }
                                }
                            });
                            items[nextfree].boundary = 4;
                            items[nextfree].pid = thisimage;
                            items[nextfree].pvol = image[0].pvol;
                            items[nextfree].ptype = thistype;
                            items[nextfree].fullname = fullname;
                            items[nextfree].price = image[0].pcost / 100;
                            $('.ui-draggable-dragging').css('opacity', '0');
                            foreground.add(items[nextfree]);
                            items[nextfree].setZIndex(0);
                            items[nextfree].createImageHitRegion(function() {
                                foreground.draw();
                            });
                            entered++;
                        } else if (entered > 0) {
                            var imgW, imgH;
                            mouseX = get_mouse_x(ev);
                            mouseY = get_mouse_y(ev);
                            if ((mouseX < 50) || (mouseX > 726) || (mouseY < 1) || (mouseY > 503)) {
                                $('body').off("mousemove");
                                items[nextfree].remove();
                                foreground.draw();
                                exited = true;
                            } else {
                                imgW = items[nextfree].getWidth();
                                imgH = items[nextfree].getHeight();
                                if (((mouseX >= (0 + (imgW / 4))) && (mouseX <= (727 - (imgW / 4)))) && ((mouseY >= (0 + (imgH / 4))) && (mouseY <= (503 - (imgH / 4))))) {
                                    gridmouseX = get_grid_mouse_x(ev);
                                    gridmouseY = get_grid_mouse_y(ev);
                                    rads = cart_to_polar(gridmouseX, gridmouseY);
                                    items[nextfree].rad = rads[0];
                                    zindex = calculatezindex(items[nextfree]);
                                    items[nextfree].setZIndex(zindex);
                                    boundary = get_boundary(gridmouseY, rads[0]);
                                    if (gridmouseX > 0) {
                                        items[nextfree].setScale(-1, 1);
                                    } else {
                                        items[nextfree].setScale(1, 1);
                                    }
                                    rotation = calculate_rotation(gridmouseX, gridmouseY, rads);
                                    items[nextfree].setRotationDeg(rotation);
                                    if (gridmouseX > 0) {
                                        items[nextfree].setX(mouseX);
                                        items[nextfree].setY(mouseY);
                                    } else {
                                        items[nextfree].setX(mouseX);
                                        items[nextfree].setY(mouseY);
                                    }
                                    if (boundary !== items[nextfree].boundary) {
                                        items[nextfree].clearImageHitRegion();
                                        items[nextfree].setImage(image[boundary]);
                                        items[nextfree].boundary = boundary;
                                        items[nextfree].createImageHitRegion(function() {
                                            foreground.draw();
                                        });
                                    }
                                    foreground.draw();
                                }
                            }
                        }
                    });
                } else {
                    $('body').off("mousemove");
                    setTimeout(function() {
                        $('.ui-draggable-dragging').draggable('option', 'revert', true).trigger('mouseup');
                        $('.ui-draggable-dragging').remove();
                    }, 50);
                }
            });
        }
    });
    stem.on('mouseup', function(ev) {
        var offset = $('#foreground').offset();
        var triggerpoint = 50 + offset.left;
        $('body').off('mousemove');
        if (ev.pageX < triggerpoint) {
            setTimeout(function() {
                $('.ui-draggable-dragging').draggable('option', 'revert', true).trigger('mouseup');
                $('.ui-draggable-dragging').remove();
            }, 50);
        }
    });
    stem.on('click', function(ev) {
        ev.stopPropagation();
        popX = $(this).offset().left + $(this).outerWidth();
        if ($(this).offset().top < 251) {
            popY = 20;
        } else {
            popY = 147;
        }
        cssclasses = $(this).parents('.productWrap').attr('class').split(" ");
        productname = cssclasses[0];
        productid = productname.replace("product", "");
                    console.log('post20');

        $.post('product/index/' + productid, function(data) {
            $('#productPopUp').css({
                "top": popY,
                "left": popX + 30
            });
            $('#productPopUp').html(data).show();
            $('.closeProductOverlay, #productPopUp').click(function(ev) {
                $('#productPopUp').empty().hide();
            });
        });
    });
    stem.draggable({
        appendTo: "body",
        helper: "clone"
    });
}

function cImgListener() {
    $('img.cImg').each(function() {
        var draggedImg = $(this);
        dragMechanics(draggedImg);
    });
}

function addCanvasListeners(background, containerlayer, foreground) {
    $("#foreground").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        accept: ":not(.ui-sortable-helper)",
        drop: function(event, ui) {
            droplistener(background, containerlayer, foreground, event, ui);
        }
    });
}

function makeInventory() {
    placeditems = foreground.getChildren();
    inventory = new Object();
    for (i = 0; i < placeditems.length; i++) {
        if (inventory[placeditems[i].fullname]) {
            inventory[placeditems[i].fullname]['qty']++;
        } else {
            inventory[placeditems[i].fullname] = new Object();
            inventory[placeditems[i].fullname]['qty'] = 1;
            inventory[placeditems[i].fullname]['pid'] = placeditems[i].pid.replace("product", "");
            inventory[placeditems[i].fullname]['type'] = placeditems[i].ptype;
        }
    }
    inventory['container'] = new Object();
    inventory['container']['qty'] = 1;
    inventory['container']['pid'] = containerlayer.getChildren()[0].pid.replace("product", "");
    inventory['container']['type'] = "container";
    if (isDefaultContainer()) {
        inventory['sundry'] = new Object();
        inventory['sundry']['qty'] = 1;
        inventory['sundry']['pid'] = sundrylayer.getChildren()[0].pid.replace("product", "");
        inventory['sundry']['type'] = "sundry";
    }
    $.post('inventory', {
        'inventory': inventory,
        'creativecharge': creativecharge
    }, function(data) {
        $.colorbox({
            width: "671px",
            height: "381px",
            html: data,
            close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
            onComplete: function() {
                $('#hintsandtips').colorbox({
                    close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
                    onComplete: function() {
                        $('.hintsandtipsList').mCustomScrollbar();
                    }
                });
                $('.bouquetContents .overlayItems').mCustomScrollbar();
            }
        });
    });
}

function clearAll() {
    foreground.removeChildren();
    containerlayer.removeChildren();
    sundrylayer.removeChildren();
    totalflowers = 0;
    stemcount = 0;
    totalcost = 0;
    nextfree = 0;
    items.length = 0;
    cantake = [true, ""];
    creativecharge = creativecharge1;
    totalcost += creativecharge;
    ribbon = makeribbon(defaultsundry, true);
    sundrylayer.add(ribbon);
    sundrylayer.draw();
    container = makecontainer(defaultcontainer, true);
    containerlayer.add(container);
    containerlayer.draw();
    foreground.draw();
    totalcost += container.price;
    displaycost = totalcost.toFixed(2).toString().split(".");
    $('#pounds').text(displaycost[0]);
    $('#pence').text("." + displaycost[1]);
    startTxt = new Image();
    startTxt.src = "media/images/start.png";
    startTxt.onload = function() {
        startImg = new Kinetic.Image({
            x: 176,
            y: 81,
            image: startTxt,
            draggable: false,
            id: "startText"
        });
        startImgText = new Kinetic.Text({
            x: 200,
            y: 220,
            text: "Drag in a stem to get started",
            fontSize: 28,
            fontFamily: "Louisiana",
            textFill: "black",
            align: "center",
            id: "startImgText"
        });
        background.add(startImg);
        background.add(startImgText);
        background.draw();
    }
    start = 0;
}

function saveBuild() {
    currentcontainer = containerlayer.getChildren()[0];
    if (currentcontainer) {
        currentcontainer.setImage(images[currentcontainer.getName()][1]);
        containerlayer.draw();
    }
    vase.moveToTop();
    background.draw();
    foreground.draw();
    stage.toDataURL({
        callback: function(dataUrl) {
            splitDataUrl = dataUrl.split(',');
            $('#saveinfo form').attr('action', '/store');
            $('#build').attr('value', makeBuildXML());
            $('#buildImg').attr('value', splitDataUrl[1]);
            $('#saveinfo form').submit();
        },
        mimeType: 'image/jpeg',
        quality: 0.9
    });
}

function makeBuildXML() {
    stems = foreground.getChildren();
    xml = '<build><stems>';
    stems.each(function(img, i) {
        x = img.getX();
        y = img.getY();
        z = img.getZIndex();
        pdist = img.rad;
        name = img.getName().replace("product", "");
        name = name.substring(0, name.indexOf("_"));
        category = img.ptype;
        entry = '<xitem xtype="' + name + '" xpos="' + x + '" ypos="' + y + '" zindex="' + z + '" pdist="' + pdist + '" pcategory="' + category + '"></xitem>';
        xml += entry;
    });
    xml += '</stems>';
    sundries = sundrylayer.getChildren();
    if (sundries.length > 0) {
        sundrytype = sundries[0].getName().replace("product", "");
        xml += '<sundries><xitem xtype="' + sundrytype + '"></xitem></sundries>';
    }
    containers = containerlayer.getChildren();
    if (containers.length > 0) {
        containertype = containers[0].getName().replace("product", "");
        xml += '<containers><xitem xtype="' + containertype + '"></xitem></containers>';
    }
    xml += '</build>';
    return xml;
}

function recreateBuild(buildxml, background, containerlayer, sundrylayer, foreground, stage) {
    xml = $.parseXML(buildxml);
    sundrylayer.removeChildren();
    sundrylayer.draw();
    $(xml).find('xitem').each(function(index, el) {
        thistype = $(el).parent().prop('tagName');
        if (thistype == "containers") {
            totalcost -= containerlayer.getChildren()[0].price;
            containerlayer.getChildren()[0].remove();
            thisimage = 'product' + $(el).attr('xtype');
            container = makecontainer(thisimage, (thisimage == defaultcontainer));
            containerlayer.add(container);
            containerlayer.draw();
            totalcost += container.price;
            displaycost = totalcost.toFixed(2).toString().split(".");
            $('#pounds').text(displaycost[0]);
            $('#pence').text("." + displaycost[1]);
        } else if (thistype == "sundries") {
            thisimage = 'product' + $(el).attr('xtype');
            ribbon = makeribbon(thisimage);
            sundrylayer.add(ribbon);
            sundrylayer.draw();
        } else {
            thisimage = 'product' + $(el).attr('xtype');
            imgx = parseInt($(el).attr('xpos'));
            imgy = parseInt($(el).attr('ypos'));
            imgz = parseInt($(el).attr('zindex'));
            category = $(el).attr('pcategory');
            var d = new Date();
            var now = d.getTime();
            image = images[thisimage];
            imgW = image[4].width;
            imgH = image[4].height;
            offsetx = imgW / 2;
            offsety = imgH / 2;
            xoffset = 355;
            yoffset = 190;
            gridY = ($('#foreground').height() - imgy) - yoffset;
            gridX = imgx - xoffset;
            rads = cart_to_polar(gridX, gridY);
            boundary = get_boundary(gridY, rads[0]);
            
            items[nextfree] = new Kinetic.Image({
                x: imgx,
                y: imgy,
                image: image[boundary],
                draggable: true,
                offset: [offsetx, offsety],
                name: thisimage + '_' + now,
                dragBounds: {
                    top: 0 + (imgH / 4),
                    left: 0 + (imgW / 4),
                    right: 727 - (imgW / 4),
                    bottom: 503 - (imgH / 4)
                }
            });
            items[nextfree].pvol = image[0].pvol;
            items[nextfree].ptype = category;
            items[nextfree].fullname = image[4].fullname;
            items[nextfree].price = image[0].pcost / 100;
            foreground.add(items[nextfree]);
            items[nextfree].setZIndex(imgz);
            items[nextfree].rad = rads[0];
            items[nextfree].boundary = boundary;
            items[nextfree].pid = thisimage;
            if (gridX > 0) {
                items[nextfree].setScale(-1, 1);
            } else {
                items[nextfree].setScale(1, 1);
            }
            rotation = calculate_rotation(gridX, gridY, rads);
            items[nextfree].setRotationDeg(rotation);
            items[nextfree].createImageHitRegion(function() {
                foreground.draw();
            });
            totalflowers++;
            stemcountup(items[nextfree]);
            selecteditem = items[nextfree];
            add_stem_listeners(items[nextfree]);
            nextfree++;
            totalcost += selecteditem.price;
            console.log('post1');
            if (index == ($(xml).find('stems xitem').length - 1)) {
                if (totalflowers > creativechargeboundary && optiontobuy) {
                    creativecharge = creativecharge2;
                    totalcost -= creativecharge1;
                    totalcost += creativecharge2;
                    setTimeout(function() {
                        $.post('overlay/dialog/creativecharge2', function(data) {
                            makeInformationOverlay(data);
                        });
                    }, 50);
                } else if (optiontobuy) {
                    creativecharge = creativecharge1;
                    setTimeout(function() {
                        $.post('overlay/dialog/creativecharge1', function(data) {
                            makeInformationOverlay(data);
                        });
                    }, 50);
                }
                displaycost = totalcost.toFixed(2).toString().split(".");
                $('#pounds').text(displaycost[0]);
                $('#pence').text("." + displaycost[1]);
            }
        }
    });
    startimage = stage.get("#startText")[0];
    startimageTxt = stage.get("#startImgText")[0];
    startimage.remove();
    startimageTxt.remove();
    background.draw();
    foreground.draw();
    start++;
    $('#totalflowers').text(totalflowers);
}

function byobinit() {
    $('html').addClass('noselect');
    menuaccordian();
    navigationhovers();
    interfaceListeners();
    makeHelp();
    makeHints();
    $('#itemWrapper').mCustomScrollbar();
    makestage = makecanvas();
    stage = makestage[0];
    background = makestage[1];
    containerlayer = makestage[2];
    sundrylayer = makestage[3];
    foreground = makestage[4];
    items = new Array();
    nextfree = 0;
    cImgListener();
    addCanvasListeners(background, containerlayer, foreground);
    stemcount = 0;
    creativecharge = creativecharge1;
    totalcost += creativecharge;
    displaycost = totalcost.toFixed(2).toString().split(".");
    $('#pounds').text(displaycost[0]);
    $('#pence').text("." + displaycost[1]);
    cantake = [true, ""];
    $('#save').click(function() {
        saveBuild();
    });
    $('.bouquetConfBuy').click(function() {
        placedfoliage = calculateFoliage();
        if (((totalflowers - placedfoliage) < minimumstems) && (calculateFoliage() < minimumfoliage)) {
            postinfo = {
                foliage: (minimumfoliage - placedfoliage),
                stems: (minimumstems - (totalflowers - placedfoliage))
            };
                        console.log('post2');

            $.post('overlay/dialog/buystemsfoliage', postinfo, function(data) {
                makeInformationOverlay(data);
            });
        } else if ((totalflowers - placedfoliage) < minimumstems) {
            postinfo = {
                stems: (minimumstems - (totalflowers - placedfoliage))
            };
                        console.log('post3');

            $.post('overlay/dialog/buystems', postinfo, function(data) {
                makeInformationOverlay(data);
            });
        } else if (placedfoliage < minimumfoliage) {
            postinfo = {
                foliage: (minimumfoliage - placedfoliage)
            };
                        console.log('post4');

            console.log('post5');

            $.post('overlay/dialog/buyfoliage', postinfo, function(data) {
                makeInformationOverlay(data);
            });
        } else {
            $.colorbox({
                width: "400px",
                href: "store/confirm",
                close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
                onComplete: function() {
                    $('#ok').click(function(ev) {
                        $.colorbox.close();
                        ev.preventDefault;
                    });
                }
            });
        }
    });
    $('#share').click(function() {
        vase.moveToTop();
        background.draw();
        currentcontainer = containerlayer.getChildren()[0];
        if (currentcontainer) {
            currentcontainer.setImage(images[currentcontainer.getName()][1]);
            containerlayer.draw();
        }
        stage.toDataURL({
            callback: function(dataUrl) {
                splitDataUrl = dataUrl.split(',');
                $.post('/share', {
                    buildImg: splitDataUrl[1]
                }, function(data) {
                    $.colorbox({
                        html: data,
                        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
                        onComplete: function() {
                            FB.XFBML.parse();
                            doshares($('#sharelink').val(), $('#sharesocialtitle').val());
                            shareclick_oncomplete();
                        }
                    });
                });
                currentcontainer = containerlayer.getChildren()[0];
                if (currentcontainer) {
                    currentcontainer.setImage(images[currentcontainer.getName()][0]);
                    containerlayer.draw();
                }
                vase.moveToBottom();
                background.draw();
            },
            mimeType: 'image/jpeg',
            quality: 0.9
        });
    });
};
