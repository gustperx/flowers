(function($) {
    $.fn.extend({
        limit: function(limit, element) {
            var interval, f;
            var self = $(this);
            $(this).focus(function() {
                interval = window.setInterval(substring, 100);
            });
            $(this).blur(function() {
                clearInterval(interval);
                substring();
            });
            substringFunction = "function substring(){ var val = $(self).val();var length = val.length;if(length > limit){$(self).val($(self).val().substring(0,limit));}";
            if (typeof element != 'undefined')
                substringFunction += "if($(element).html() != limit-length){$(element).html((limit-length<=0)?'0':limit-length);}"
            substringFunction += "}";
            eval(substringFunction);
            substring();
        }
    });
})(jQuery);;
(function(b) {
    var a = {
        init: function(c) {
            var e = {
                    set_width: false,
                    set_height: false,
                    horizontalScroll: false,
                    scrollInertia: 550,
                    scrollEasing: "easeOutCirc",
                    mouseWheel: "auto",
                    autoDraggerLength: true,
                    scrollButtons: {
                        enable: false,
                        scrollType: "continuous",
                        scrollSpeed: 20,
                        scrollAmount: 40
                    },
                    advanced: {
                        updateOnBrowserResize: true,
                        updateOnContentResize: false,
                        autoExpandHorizontalScroll: false
                    },
                    callbacks: {
                        onScroll: function() {},
                        onTotalScroll: function() {},
                        onTotalScrollOffset: 0
                    }
                },
                c = b.extend(true, e, c);
            b(document).data("mCS-is-touch-device", false);
            if (d()) {
                b(document).data("mCS-is-touch-device", true)
            }

            function d() {
                return !!("ontouchstart" in window) ? 1 : 0
            }
            return this.each(function() {
                var m = b(this);
                if (c.set_width) {
                    m.css("width", c.set_width)
                }
                if (c.set_height) {
                    m.css("height", c.set_height)
                }
                if (!b(document).data("mCustomScrollbar-index")) {
                    b(document).data("mCustomScrollbar-index", "1")
                } else {
                    var s = parseInt(b(document).data("mCustomScrollbar-index"));
                    b(document).data("mCustomScrollbar-index", s + 1)
                }
                m.wrapInner("<div class='mCustomScrollBox' id='mCSB_" + b(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + b(document).data("mCustomScrollbar-index"));
                var g = m.children(".mCustomScrollBox");
                if (c.horizontalScroll) {
                    g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                    var k = g.children(".mCSB_h_wrapper");
                    k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
                        width: k.children().outerWidth(),
                        position: "relative"
                    }).unwrap()
                } else {
                    g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
                }
                var o = g.children(".mCSB_container");
                if (!b(document).data("mCS-is-touch-device")) {
                    o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer' style='position:relative;'><div class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                    var l = g.children(".mCSB_scrollTools"),
                        h = l.children(".mCSB_draggerContainer"),
                        q = h.children(".mCSB_dragger");
                    if (c.horizontalScroll) {
                        q.data("minDraggerWidth", q.width())
                    } else {
                        q.data("minDraggerHeight", q.height())
                    }
                    if (c.scrollButtons.enable) {
                        if (c.horizontalScroll) {
                            l.prepend("<a class='mCSB_buttonLeft' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonRight' style='display:block; position:relative;'></a>")
                        } else {
                            l.prepend("<a class='mCSB_buttonUp' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonDown' style='display:block; position:relative;'></a>")
                        }
                    }
                    g.bind("scroll", function() {
                        g.scrollTop(0).scrollLeft(0)
                    });
                    m.data({
                        horizontalScroll: c.horizontalScroll,
                        scrollInertia: c.scrollInertia,
                        scrollEasing: c.scrollEasing,
                        mouseWheel: c.mouseWheel,
                        autoDraggerLength: c.autoDraggerLength,
                        "scrollButtons-enable": c.scrollButtons.enable,
                        "scrollButtons-scrollType": c.scrollButtons.scrollType,
                        "scrollButtons-scrollSpeed": c.scrollButtons.scrollSpeed,
                        "scrollButtons-scrollAmount": c.scrollButtons.scrollAmount,
                        autoExpandHorizontalScroll: c.advanced.autoExpandHorizontalScroll,
                        "onScroll-Callback": c.callbacks.onScroll,
                        "onTotalScroll-Callback": c.callbacks.onTotalScroll,
                        "onTotalScroll-Offset": c.callbacks.onTotalScrollOffset
                    }).mCustomScrollbar("update");
                    if (c.advanced.updateOnBrowserResize) {
                        var i;
                        b(window).resize(function() {
                            if (i) {
                                clearTimeout(i)
                            }
                            i = setTimeout(function() {
                                m.mCustomScrollbar("update")
                            }, 150)
                        })
                    }
                } else {
                    var f = navigator.userAgent;
                    if (f.indexOf("Android") != -1) {
                        var r = parseFloat(f.slice(f.indexOf("Android") + 8));
                        if (r < 3) {
                            j("mCSB_" + b(document).data("mCustomScrollbar-index"))
                        } else {
                            g.css({
                                overflow: "auto",
                                "-webkit-overflow-scrolling": "touch"
                            })
                        }
                    } else {
                        g.css({
                            overflow: "auto",
                            "-webkit-overflow-scrolling": "touch"
                        })
                    }
                    o.addClass("mCS_no_scrollbar mCS_touch");
                    m.data({
                        horizontalScroll: c.horizontalScroll,
                        scrollInertia: c.scrollInertia,
                        scrollEasing: c.scrollEasing,
                        autoExpandHorizontalScroll: c.advanced.autoExpandHorizontalScroll,
                        "onScroll-Callback": c.callbacks.onScroll,
                        "onTotalScroll-Callback": c.callbacks.onTotalScroll,
                        "onTotalScroll-Offset": c.callbacks.onTotalScrollOffset
                    });
                    g.scroll(function() {
                        m.mCustomScrollbar("callbacks", g, o)
                    });

                    function j(w) {
                        var t = document.getElementById(w),
                            u = 0,
                            v = 0;
                        document.getElementById(w).addEventListener("touchstart", function(x) {
                            u = this.scrollTop + x.touches[0].pageY;
                            v = this.scrollLeft + x.touches[0].pageX
                        }, false);
                        document.getElementById(w).addEventListener("touchmove", function(x) {
                            if ((this.scrollTop < this.scrollHeight - this.offsetHeight && this.scrollTop + x.touches[0].pageY < u - 5) || (this.scrollTop != 0 && this.scrollTop + x.touches[0].pageY > u + 5)) {
                                x.preventDefault()
                            }
                            if ((this.scrollLeft < this.scrollWidth - this.offsetWidth && this.scrollLeft + x.touches[0].pageX < v - 5) || (this.scrollLeft != 0 && this.scrollLeft + x.touches[0].pageX > v + 5)) {
                                x.preventDefault()
                            }
                            this.scrollTop = u - x.touches[0].pageY;
                            this.scrollLeft = v - x.touches[0].pageX
                        }, false)
                    }
                }
                if (c.advanced.updateOnContentResize) {
                    var p;
                    if (c.horizontalScroll) {
                        var n = o.outerWidth();
                        if (d()) {
                            g.css({
                                "-webkit-overflow-scrolling": "auto"
                            })
                        }
                    } else {
                        var n = o.outerHeight()
                    }
                    p = setInterval(function() {
                        if (c.horizontalScroll) {
                            if (c.advanced.autoExpandHorizontalScroll) {
                                o.css({
                                    position: "absolute",
                                    width: "auto"
                                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                    width: o.outerWidth(),
                                    position: "relative"
                                }).unwrap()
                            }
                            var t = o.outerWidth()
                        } else {
                            var t = o.outerHeight()
                        }
                        if (t != n) {
                            m.mCustomScrollbar("update");
                            n = t
                        }
                    }, 300)
                }
            })
        },
        update: function() {
            var l = b(this),
                i = l.children(".mCustomScrollBox"),
                o = i.children(".mCSB_container");
            if (!b(document).data("mCS-is-touch-device")) {
                o.removeClass("mCS_no_scrollbar")
            }
            var w = i.children(".mCSB_scrollTools"),
                m = w.children(".mCSB_draggerContainer"),
                k = m.children(".mCSB_dragger");
            if (l.data("horizontalScroll")) {
                var y = w.children(".mCSB_buttonLeft"),
                    r = w.children(".mCSB_buttonRight"),
                    d = i.width();
                if (l.data("autoExpandHorizontalScroll")) {
                    o.css({
                        position: "absolute",
                        width: "auto"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: o.outerWidth(),
                        position: "relative"
                    }).unwrap()
                }
                var x = o.outerWidth()
            } else {
                var u = w.children(".mCSB_buttonUp"),
                    e = w.children(".mCSB_buttonDown"),
                    p = i.height(),
                    g = o.outerHeight()
            }
            if (g > p && !l.data("horizontalScroll") && !b(document).data("mCS-is-touch-device")) {
                w.css("display", "block");
                var q = m.height();
                if (l.data("autoDraggerLength")) {
                    var s = Math.round(p / g * q),
                        j = k.data("minDraggerHeight");
                    if (s <= j) {
                        k.css({
                            height: j
                        })
                    } else {
                        if (s >= q - 10) {
                            var n = q - 10;
                            k.css({
                                height: n
                            })
                        } else {
                            k.css({
                                height: s
                            })
                        }
                    }
                    k.children(".mCSB_dragger_bar").css({
                        "line-height": k.height() + "px"
                    })
                }
                var z = k.height(),
                    v = (g - p) / (q - z);
                l.data("scrollAmount", v);
                l.mCustomScrollbar("scrolling", i, o, m, k, u, e, y, r);
                var B = Math.abs(Math.round(o.position().top));
                l.mCustomScrollbar("scrollTo", B, {
                    callback: false
                })
            } else {
                if (x > d && l.data("horizontalScroll") && !b(document).data("mCS-is-touch-device")) {
                    w.css("display", "block");
                    var f = m.width();
                    if (l.data("autoDraggerLength")) {
                        var h = Math.round(d / x * f),
                            A = k.data("minDraggerWidth");
                        if (h <= A) {
                            k.css({
                                width: A
                            })
                        } else {
                            if (h >= f - 10) {
                                var c = f - 10;
                                k.css({
                                    width: c
                                })
                            } else {
                                k.css({
                                    width: h
                                })
                            }
                        }
                    }
                    var t = k.width(),
                        v = (x - d) / (f - t);
                    l.data("scrollAmount", v);
                    l.mCustomScrollbar("scrolling", i, o, m, k, u, e, y, r);
                    var B = Math.abs(Math.round(o.position().left));
                    l.mCustomScrollbar("scrollTo", B, {
                        callback: false
                    })
                } else {
                    i.unbind("mousewheel");
                    i.unbind("focusin");
                    if (l.data("horizontalScroll")) {
                        k.add(o).css("left", 0)
                    } else {
                        k.add(o).css("top", 0)
                    }
                    w.css("display", "none");
                    o.addClass("mCS_no_scrollbar")
                }
            }
        },
        scrolling: function(h, p, m, j, v, c, y, s) {
            var l = b(this);
            if (!j.hasClass("ui-draggable")) {
                if (l.data("horizontalScroll")) {
                    var i = "x"
                } else {
                    var i = "y"
                }
                j.draggable({
                    axis: i,
                    containment: "parent",
                    drag: function(B, C) {
                        l.mCustomScrollbar("scroll");
                        j.addClass("mCSB_dragger_onDrag")
                    },
                    stop: function(B, C) {
                        j.removeClass("mCSB_dragger_onDrag")
                    }
                })
            }
            m.unbind("click").bind("click", function(D) {
                if (l.data("horizontalScroll")) {
                    var B = (D.pageX - m.offset().left);
                    if (B < j.position().left || B > (j.position().left + j.width())) {
                        var C = B;
                        if (C >= m.width() - j.width()) {
                            C = m.width() - j.width()
                        }
                        j.css("left", C);
                        l.mCustomScrollbar("scroll")
                    }
                } else {
                    var B = (D.pageY - m.offset().top);
                    if (B < j.position().top || B > (j.position().top + j.height())) {
                        var C = B;
                        if (C >= m.height() - j.height()) {
                            C = m.height() - j.height()
                        }
                        j.css("top", C);
                        l.mCustomScrollbar("scroll")
                    }
                }
            });
            if (l.data("mouseWheel")) {
                var t = l.data("mouseWheel");
                if (l.data("mouseWheel") === "auto") {
                    t = 8;
                    var n = navigator.userAgent;
                    if (n.indexOf("Mac") != -1 && n.indexOf("Safari") != -1 && n.indexOf("AppleWebKit") != -1 && n.indexOf("Chrome") == -1) {
                        t = 1
                    }
                }
                h.unbind("mousewheel").bind("mousewheel", function(E, J) {
                    E.preventDefault();
                    var I = Math.abs(J * t);
                    if (l.data("horizontalScroll")) {
                        var D = j.position().left - (J * I);
                        j.css("left", D);
                        if (j.position().left < 0) {
                            j.css("left", 0)
                        }
                        var H = m.width(),
                            G = j.width();
                        if (j.position().left > H - G) {
                            j.css("left", H - G)
                        }
                    } else {
                        var B = j.position().top - (J * I);
                        j.css("top", B);
                        if (j.position().top < 0) {
                            j.css("top", 0)
                        }
                        var F = m.height(),
                            C = j.height();
                        if (j.position().top > F - C) {
                            j.css("top", F - C)
                        }
                    }
                    l.mCustomScrollbar("scroll")
                })
            }
            if (l.data("scrollButtons-enable")) {
                if (l.data("scrollButtons-scrollType") === "pixels") {
                    var A;
                    if (b.browser.msie && parseInt(b.browser.version) < 9) {
                        l.data("scrollInertia", 0)
                    }
                    if (l.data("horizontalScroll")) {
                        s.add(y).unbind("click mousedown mouseup mouseout", k, g);
                        s.bind("click", function(B) {
                            B.preventDefault();
                            if (!p.is(":animated")) {
                                A = Math.abs(p.position().left) + l.data("scrollButtons-scrollAmount");
                                l.mCustomScrollbar("scrollTo", A)
                            }
                        });
                        y.bind("click", function(B) {
                            B.preventDefault();
                            if (!p.is(":animated")) {
                                A = Math.abs(p.position().left) - l.data("scrollButtons-scrollAmount");
                                if (p.position().left >= -l.data("scrollButtons-scrollAmount")) {
                                    A = "left"
                                }
                                l.mCustomScrollbar("scrollTo", A)
                            }
                        })
                    } else {
                        c.add(v).unbind("click mousedown mouseup mouseout", r, f);
                        c.bind("click", function(B) {
                            B.preventDefault();
                            if (!p.is(":animated")) {
                                A = Math.abs(p.position().top) + l.data("scrollButtons-scrollAmount");
                                l.mCustomScrollbar("scrollTo", A)
                            }
                        });
                        v.bind("click", function(B) {
                            B.preventDefault();
                            if (!p.is(":animated")) {
                                A = Math.abs(p.position().top) - l.data("scrollButtons-scrollAmount");
                                if (p.position().top >= -l.data("scrollButtons-scrollAmount")) {
                                    A = "top"
                                }
                                l.mCustomScrollbar("scrollTo", A)
                            }
                        })
                    }
                } else {
                    if (l.data("horizontalScroll")) {
                        s.add(y).unbind("click mousedown mouseup mouseout", k, g);
                        var x, e = m.width(),
                            u = j.width();
                        s.bind("mousedown", function(C) {
                            C.preventDefault();
                            var B = e - u;
                            x = setInterval(function() {
                                var D = Math.abs(j.position().left - B) * (100 / l.data("scrollButtons-scrollSpeed"));
                                j.stop().animate({
                                    left: B
                                }, D, "linear");
                                l.mCustomScrollbar("scroll")
                            }, 20)
                        });
                        var k = function(B) {
                            B.preventDefault();
                            clearInterval(x);
                            j.stop()
                        };
                        s.bind("mouseup mouseout", k);
                        var d;
                        y.bind("mousedown", function(C) {
                            C.preventDefault();
                            var B = 0;
                            d = setInterval(function() {
                                var D = Math.abs(j.position().left - B) * (100 / l.data("scrollButtons-scrollSpeed"));
                                j.stop().animate({
                                    left: B
                                }, D, "linear");
                                l.mCustomScrollbar("scroll")
                            }, 20)
                        });
                        var g = function(B) {
                            B.preventDefault();
                            clearInterval(d);
                            j.stop()
                        };
                        y.bind("mouseup mouseout", g)
                    } else {
                        c.add(v).unbind("click mousedown mouseup mouseout", r, f);
                        var o, q = m.height(),
                            z = j.height();
                        c.bind("mousedown", function(C) {
                            C.preventDefault();
                            var B = q - z;
                            o = setInterval(function() {
                                var D = Math.abs(j.position().top - B) * (100 / l.data("scrollButtons-scrollSpeed"));
                                j.stop().animate({
                                    top: B
                                }, D, "linear");
                                l.mCustomScrollbar("scroll")
                            }, 20)
                        });
                        var r = function(B) {
                            B.preventDefault();
                            clearInterval(o);
                            j.stop()
                        };
                        c.bind("mouseup mouseout", r);
                        var w;
                        v.bind("mousedown", function(C) {
                            C.preventDefault();
                            var B = 0;
                            w = setInterval(function() {
                                var D = Math.abs(j.position().top - B) * (100 / l.data("scrollButtons-scrollSpeed"));
                                j.stop().animate({
                                    top: B
                                }, D, "linear");
                                l.mCustomScrollbar("scroll")
                            }, 20)
                        });
                        var f = function(B) {
                            B.preventDefault();
                            clearInterval(w);
                            j.stop()
                        };
                        v.bind("mouseup mouseout", f)
                    }
                }
            }
            h.unbind("focusin").bind("focusin", function() {
                h.scrollTop(0).scrollLeft(0);
                var C = b(document.activeElement);
                if (C.is("input,textarea,select,button,a[tabindex],area,object")) {
                    if (l.data("horizontalScroll")) {
                        var J = p.position().left,
                            G = C.position().left,
                            E = h.width(),
                            H = C.outerWidth();
                        if (J + G >= 0 && J + G <= E - H) {} else {
                            var K = G / l.data("scrollAmount");
                            if (K >= m.width() - j.width()) {
                                K = m.width() - j.width()
                            }
                            j.css("left", K);
                            l.mCustomScrollbar("scroll")
                        }
                    } else {
                        var I = p.position().top,
                            F = C.position().top,
                            B = h.height(),
                            D = C.outerHeight();
                        if (I + F >= 0 && I + F <= B - D) {} else {
                            var K = F / l.data("scrollAmount");
                            if (K >= m.height() - j.height()) {
                                K = m.height() - j.height()
                            }
                            j.css("top", K);
                            l.mCustomScrollbar("scroll")
                        }
                    }
                }
            })
        },
        scroll: function(h) {
            var k = b(this),
                p = k.find(".mCSB_dragger"),
                n = k.find(".mCSB_container"),
                e = k.find(".mCustomScrollBox");
            if (k.data("horizontalScroll")) {
                var g = p.position().left,
                    m = -g * k.data("scrollAmount"),
                    o = n.position().left,
                    d = Math.round(o - m)
            } else {
                var f = p.position().top,
                    j = -f * k.data("scrollAmount"),
                    l = n.position().top,
                    c = Math.round(l - j)
            }
            if (b.browser.webkit) {
                var q = (window.outerWidth - 8) / window.innerWidth,
                    i = (q < 0.98 || q > 1.02)
            }
            if (k.data("scrollInertia") === 0 || i) {
                if (k.data("horizontalScroll")) {
                    n.css("left", m)
                } else {
                    n.css("top", j)
                }
                if (!h) {
                    k.mCustomScrollbar("callbacks", e, n)
                }
            } else {
                if (k.data("horizontalScroll")) {
                    n.stop().animate({
                        left: "-=" + d
                    }, k.data("scrollInertia"), k.data("scrollEasing"), function() {
                        if (!h) {
                            k.mCustomScrollbar("callbacks", e, n)
                        }
                    })
                } else {
                    n.stop().animate({
                        top: "-=" + c
                    }, k.data("scrollInertia"), k.data("scrollEasing"), function() {
                        if (!h) {
                            k.mCustomScrollbar("callbacks", e, n)
                        }
                    })
                }
            }
        },
        scrollTo: function(g, m) {
            var f = {
                    moveDragger: false,
                    callback: true
                },
                m = b.extend(f, m),
                i = b(this),
                c, d = i.find(".mCustomScrollBox"),
                j = d.children(".mCSB_container");
            if (!b(document).data("mCS-is-touch-device")) {
                var e = i.find(".mCSB_draggerContainer"),
                    k = e.children(".mCSB_dragger")
            }
            var l;
            if (g) {
                if (typeof(g) === "number") {
                    if (m.moveDragger) {
                        c = g
                    } else {
                        l = g;
                        c = Math.round(l / i.data("scrollAmount"))
                    }
                } else {
                    if (typeof(g) === "string") {
                        var h;
                        if (g === "top") {
                            h = 0
                        } else {
                            if (g === "bottom" && !i.data("horizontalScroll")) {
                                h = j.outerHeight() - d.height()
                            } else {
                                if (g === "left") {
                                    h = 0
                                } else {
                                    if (g === "right" && i.data("horizontalScroll")) {
                                        h = j.outerWidth() - d.width()
                                    } else {
                                        if (g === "first") {
                                            h = i.find(".mCSB_container").find(":first")
                                        } else {
                                            if (g === "last") {
                                                h = i.find(".mCSB_container").find(":last")
                                            } else {
                                                h = i.find(g)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (h.length === 1) {
                            if (i.data("horizontalScroll")) {
                                l = h.position().left
                            } else {
                                l = h.position().top
                            }
                            if (b(document).data("mCS-is-touch-device")) {
                                c = l
                            } else {
                                c = Math.ceil(l / i.data("scrollAmount"))
                            }
                        } else {
                            c = h
                        }
                    }
                }
                if (b(document).data("mCS-is-touch-device")) {
                    if (i.data("horizontalScroll")) {
                        d.stop().animate({
                            scrollLeft: c
                        }, i.data("scrollInertia"), i.data("scrollEasing"), function() {
                            if (m.callback) {
                                i.mCustomScrollbar("callbacks", d, j)
                            }
                        })
                    } else {
                        d.stop().animate({
                            scrollTop: c
                        }, i.data("scrollInertia"), i.data("scrollEasing"), function() {
                            if (m.callback) {
                                i.mCustomScrollbar("callbacks", d, j)
                            }
                        })
                    }
                } else {
                    if (i.data("horizontalScroll")) {
                        if (c >= e.width() - k.width()) {
                            c = e.width() - k.width()
                        }
                        k.css("left", c)
                    } else {
                        if (c >= e.height() - k.height()) {
                            c = e.height() - k.height()
                        }
                        k.css("top", c)
                    }
                    if (m.callback) {
                        i.mCustomScrollbar("scroll")
                    } else {
                        i.mCustomScrollbar("scroll", true)
                    }
                }
            }
        },
        callbacks: function(e, h) {
            var i = b(this);
            if (!b(document).data("mCS-is-touch-device")) {
                if (i.data("horizontalScroll")) {
                    var g = Math.round(h.position().left);
                    if (g < 0 && g <= e.width() - h.outerWidth() + i.data("onTotalScroll-Offset")) {
                        i.data("onTotalScroll-Callback").call()
                    } else {
                        i.data("onScroll-Callback").call()
                    }
                } else {
                    var f = Math.round(h.position().top);
                    if (f < 0 && f <= e.height() - h.outerHeight() + i.data("onTotalScroll-Offset")) {
                        i.data("onTotalScroll-Callback").call()
                    } else {
                        i.data("onScroll-Callback").call()
                    }
                }
            } else {
                if (i.data("horizontalScroll")) {
                    var d = Math.round(e.scrollLeft());
                    if (d > 0 && d >= h.outerWidth() - i.width() - i.data("onTotalScroll-Offset")) {
                        i.data("onTotalScroll-Callback").call()
                    } else {
                        i.data("onScroll-Callback").call()
                    }
                } else {
                    var c = Math.round(e.scrollTop());
                    if (c > 0 && c >= h.outerHeight() - i.height() - i.data("onTotalScroll-Offset")) {
                        i.data("onTotalScroll-Callback").call()
                    } else {
                        i.data("onScroll-Callback").call()
                    }
                }
            }
        }
    };
    b.fn.mCustomScrollbar = function(c) {
        if (a[c]) {
            return a[c].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof c === "object" || !c) {
                return a.init.apply(this, arguments)
            } else {
                b.error("Method " + c + " does not exist")
            }
        }
    }
})(jQuery);;
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */
(function(a) {
    function d(b) {
        var c = b || window.event,
            d = [].slice.call(arguments, 1),
            e = 0,
            f = !0,
            g = 0,
            h = 0;
        return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d)
    }
    var b = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks)
        for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
            else this.onmousewheel = d
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
            else this.onmousewheel = null
        }
    }, a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
})(jQuery)

;