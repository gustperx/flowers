// ColorBox v1.3.20 - jQuery lightbox plugin
// (c) 2012 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function(e, t, n) {
    function G(n, r, i) {
        var o = t.createElement(n);
        return r && (o.id = s + r), i && (o.style.cssText = i), e(o)
    }

    function Y(e) {
        var t = T.length,
            n = (U + e) % t;
        return n < 0 ? t + n : n
    }

    function Z(e, t) {
        return Math.round((/%/.test(e) ? (t === "x" ? N.width() : N.height()) / 100 : 1) * parseInt(e, 10))
    }

    function et(e) {
        return B.photo || /\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(e)
    }

    function tt() {
        var t, n = e.data(R, i);
        n == null ? (B = e.extend({}, r), console && console.log && console.log("Error: cboxElement missing settings object")) : B = e.extend({}, n);
        for (t in B) e.isFunction(B[t]) && t.slice(0, 2) !== "on" && (B[t] = B[t].call(R));
        B.rel = B.rel || R.rel || "nofollow", B.href = B.href || e(R).attr("href"), B.title = B.title || R.title, typeof B.href == "string" && (B.href = e.trim(B.href))
    }

    function nt(t, n) {
        e.event.trigger(t), n && n.call(R)
    }

    function rt() {
        var e, t = s + "Slideshow_",
            n = "click." + s,
            r, i, o;
        B.slideshow && T[1] ? (r = function() {
            M.text(B.slideshowStop).unbind(n).bind(f, function() {
                if (B.loop || T[U + 1]) e = setTimeout(J.next, B.slideshowSpeed)
            }).bind(a, function() {
                clearTimeout(e)
            }).one(n + " " + l, i), g.removeClass(t + "off").addClass(t + "on"), e = setTimeout(J.next, B.slideshowSpeed)
        }, i = function() {
            clearTimeout(e), M.text(B.slideshowStart).unbind([f, a, l, n].join(" ")).one(n, function() {
                J.next(), r()
            }), g.removeClass(t + "on").addClass(t + "off")
        }, B.slideshowAuto ? r() : i()) : g.removeClass(t + "off " + t + "on")
    }

    function it(t) {
        V || (R = t, tt(), T = e(R), U = 0, B.rel !== "nofollow" && (T = e("." + o).filter(function() {
            var t = e.data(this, i),
                n;
            return t && (n = t.rel || this.rel), n === B.rel
        }), U = T.index(R), U === -1 && (T = T.add(R), U = T.length - 1)), W || (W = X = !0, g.show(), B.returnFocus && e(R).blur().one(c, function() {
            e(this).focus()
        }), m.css({
            opacity: +B.opacity,
            cursor: B.overlayClose ? "pointer" : "auto"
        }).show(), B.w = Z(B.initialWidth, "x"), B.h = Z(B.initialHeight, "y"), J.position(), d && N.bind("resize." + v + " scroll." + v, function() {
            m.css({
                width: N.width(),
                height: N.height(),
                top: N.scrollTop(),
                left: N.scrollLeft()
            })
        }).trigger("resize." + v), nt(u, B.onOpen), H.add(A).hide(), P.html(B.close).show()), J.load(!0))
    }

    function st() {
        !g && t.body && (Q = !1, N = e(n), g = G(K).attr({
            id: i,
            "class": p ? s + (d ? "IE6" : "IE") : ""
        }).hide(), m = G(K, "Overlay", d ? "position:absolute" : "").hide(), y = G(K, "Wrapper"), b = G(K, "Content").append(C = G(K, "LoadedContent", "width:0; height:0; overflow:hidden"), L = G(K, "LoadingOverlay").add(G(K, "LoadingGraphic")), A = G(K, "Title"), O = G(K, "Current"), _ = G(K, "Next"), D = G(K, "Previous"), M = G(K, "Slideshow").bind(u, rt), P = G(K, "Close")), y.append(G(K).append(G(K, "TopLeft"), w = G(K, "TopCenter"), G(K, "TopRight")), G(K, !1, "clear:left").append(E = G(K, "MiddleLeft"), b, S = G(K, "MiddleRight")), G(K, !1, "clear:left").append(G(K, "BottomLeft"), x = G(K, "BottomCenter"), G(K, "BottomRight"))).find("div div").css({
            "float": "left"
        }), k = G(K, !1, "position:absolute; width:9999px; visibility:hidden; display:none"), H = _.add(D).add(O).add(M), e(t.body).append(m, g.append(y, k)))
    }

    function ot() {
        return g ? (Q || (Q = !0, j = w.height() + x.height() + b.outerHeight(!0) - b.height(), F = E.width() + S.width() + b.outerWidth(!0) - b.width(), I = C.outerHeight(!0), q = C.outerWidth(!0), g.css({
            "padding-bottom": j,
            "padding-right": F
        }), _.click(function() {
            J.next()
        }), D.click(function() {
            J.prev()
        }), P.click(function() {
            J.close()
        }), m.click(function() {
            B.overlayClose && J.close()
        }), e(t).bind("keydown." + s, function(e) {
            var t = e.keyCode;
            W && B.escKey && t === 27 && (e.preventDefault(), J.close()), W && B.arrowKey && T[1] && (t === 37 ? (e.preventDefault(), D.click()) : t === 39 && (e.preventDefault(), _.click()))
        }), e("." + o, t).live("click", function(e) {
            e.which > 1 || e.shiftKey || e.altKey || e.metaKey || (e.preventDefault(), it(this))
        })), !0) : !1
    }
    var r = {
            transition: "elastic",
            speed: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            inline: !1,
            html: !1,
            iframe: !1,
            fastIframe: !0,
            photo: !1,
            href: !1,
            title: !1,
            rel: !1,
            opacity: .9,
            preloading: !0,
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            open: !1,
            returnFocus: !0,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: undefined
        },
        i = "colorbox",
        s = "cbox",
        o = s + "Element",
        u = s + "_open",
        a = s + "_load",
        f = s + "_complete",
        l = s + "_cleanup",
        c = s + "_closed",
        h = s + "_purge",
        p = !e.support.opacity && !e.support.style,
        d = p && !n.XMLHttpRequest,
        v = s + "_IE6",
        m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K = "div",
        Q;
    if (e.colorbox) return;
    e(st), J = e.fn[i] = e[i] = function(t, n) {
        var s = this;
        t = t || {}, st();
        if (ot()) {
            if (!s[0]) {
                if (s.selector) return s;
                s = e("<a/>"), t.open = !0
            }
            n && (t.onComplete = n), s.each(function() {
                e.data(this, i, e.extend({}, e.data(this, i) || r, t))
            }).addClass(o), (e.isFunction(t.open) && t.open.call(s) || t.open) && it(s[0])
        }
        return s
    }, J.position = function(e, t) {
        function f(e) {
            w[0].style.width = x[0].style.width = b[0].style.width = e.style.width, b[0].style.height = E[0].style.height = S[0].style.height = e.style.height
        }
        var n, r = 0,
            i = 0,
            o = g.offset(),
            u, a;
        N.unbind("resize." + s), g.css({
            top: -9e4,
            left: -9e4
        }), u = N.scrollTop(), a = N.scrollLeft(), B.fixed && !d ? (o.top -= u, o.left -= a, g.css({
            position: "fixed"
        })) : (r = u, i = a, g.css({
            position: "absolute"
        })), B.right !== !1 ? i += Math.max(N.width() - B.w - q - F - Z(B.right, "x"), 0) : B.left !== !1 ? i += Z(B.left, "x") : i += Math.round(Math.max(N.width() - B.w - q - F, 0) / 2), B.bottom !== !1 ? r += Math.max(N.height() - B.h - I - j - Z(B.bottom, "y"), 0) : B.top !== !1 ? r += Z(B.top, "y") : r += Math.round(Math.max(N.height() - B.h - I - j, 0) / 2), g.css({
            top: o.top,
            left: o.left
        }), e = g.width() === B.w + q && g.height() === B.h + I ? 0 : e || 0, y[0].style.width = y[0].style.height = "9999px", n = {
            width: B.w + q,
            height: B.h + I,
            top: r,
            left: i
        }, e === 0 && g.css(n), g.dequeue().animate(n, {
            duration: e,
            complete: function() {
                f(this), X = !1, y[0].style.width = B.w + q + F + "px", y[0].style.height = B.h + I + j + "px", B.reposition && setTimeout(function() {
                    N.bind("resize." + s, J.position)
                }, 1), t && t()
            },
            step: function() {
                f(this)
            }
        })
    }, J.resize = function(e) {
        W && (e = e || {}, e.width && (B.w = Z(e.width, "x") - q - F), e.innerWidth && (B.w = Z(e.innerWidth, "x")), C.css({
            width: B.w
        }), e.height && (B.h = Z(e.height, "y") - I - j), e.innerHeight && (B.h = Z(e.innerHeight, "y")), !e.innerHeight && !e.height && (C.css({
            height: "auto"
        }), B.h = C.height()), C.css({
            height: B.h
        }), J.position(B.transition === "none" ? 0 : B.speed))
    }, J.prep = function(t) {
        function o() {
            return B.w = B.w || C.width(), B.w = B.mw && B.mw < B.w ? B.mw : B.w, B.w
        }

        function u() {
            return B.h = B.h || C.height(), B.h = B.mh && B.mh < B.h ? B.mh : B.h, B.h
        }
        if (!W) return;
        var n, r = B.transition === "none" ? 0 : B.speed;
        C.remove(), C = G(K, "LoadedContent").append(t), C.hide().appendTo(k.show()).css({
            width: o(),
            overflow: B.scrolling ? "auto" : "hidden"
        }).css({
            height: u()
        }).prependTo(b), k.hide(), e(z).css({
            "float": "none"
        }), d && e("select").not(g.find("select")).filter(function() {
            return this.style.visibility !== "hidden"
        }).css({
            visibility: "hidden"
        }).one(l, function() {
            this.style.visibility = "inherit"
        }), n = function() {
            function y() {
                p && g[0].style.removeAttribute("filter")
            }
            var t, n, o = T.length,
                u, a = "frameBorder",
                l = "allowTransparency",
                c, d, v, m;
            if (!W) return;
            c = function() {
                clearTimeout($), L.hide(), nt(f, B.onComplete)
            }, p && z && C.fadeIn(100), A.html(B.title).add(C).show();
            if (o > 1) {
                typeof B.current == "string" && O.html(B.current.replace("{current}", U + 1).replace("{total}", o)).show(), _[B.loop || U < o - 1 ? "show" : "hide"]().html(B.next), D[B.loop || U ? "show" : "hide"]().html(B.previous), B.slideshow && M.show();
                if (B.preloading) {
                    t = [Y(-1), Y(1)];
                    while (n = T[t.pop()]) m = e.data(n, i), m && m.href ? (d = m.href, e.isFunction(d) && (d = d.call(n))) : d = n.href, et(d) && (v = new Image, v.src = d)
                }
            } else H.hide();
            B.iframe ? (u = G("iframe")[0], a in u && (u[a] = 0), l in u && (u[l] = "true"), u.name = s + +(new Date), B.fastIframe ? c() : e(u).one("load", c), u.src = B.href, B.scrolling || (u.scrolling = "no"), e(u).addClass(s + "Iframe").appendTo(C).one(h, function() {
                u.src = "//about:blank"
            })) : c(), B.transition === "fade" ? g.fadeTo(r, 1, y) : y()
        }, B.transition === "fade" ? g.fadeTo(r, 0, function() {
            J.position(0, n)
        }) : J.position(r, n)
    }, J.load = function(t) {
        var n, r, i = J.prep;
        X = !0, z = !1, R = T[U], t || tt(), nt(h), nt(a, B.onLoad), B.h = B.height ? Z(B.height, "y") - I - j : B.innerHeight && Z(B.innerHeight, "y"), B.w = B.width ? Z(B.width, "x") - q - F : B.innerWidth && Z(B.innerWidth, "x"), B.mw = B.w, B.mh = B.h, B.maxWidth && (B.mw = Z(B.maxWidth, "x") - q - F, B.mw = B.w && B.w < B.mw ? B.w : B.mw), B.maxHeight && (B.mh = Z(B.maxHeight, "y") - I - j, B.mh = B.h && B.h < B.mh ? B.h : B.mh), n = B.href, $ = setTimeout(function() {
            L.show()
        }, 100), B.inline ? (G(K).hide().insertBefore(e(n)[0]).one(h, function() {
            e(this).replaceWith(C.children())
        }), i(e(n))) : B.iframe ? i(" ") : B.html ? i(B.html) : et(n) ? (e(z = new Image).addClass(s + "Photo").error(function() {
            B.title = !1, i(G(K, "Error").html(B.imgError))
        }).load(function() {
            var e;
            z.onload = null, B.scalePhotos && (r = function() {
                z.height -= z.height * e, z.width -= z.width * e
            }, B.mw && z.width > B.mw && (e = (z.width - B.mw) / z.width, r()), B.mh && z.height > B.mh && (e = (z.height - B.mh) / z.height, r())), B.h && (z.style.marginTop = Math.max(B.h - z.height, 0) / 2 + "px"), T[1] && (B.loop || T[U + 1]) && (z.style.cursor = "pointer", z.onclick = function() {
                J.next()
            }), p && (z.style.msInterpolationMode = "bicubic"), setTimeout(function() {
                i(z)
            }, 1)
        }), setTimeout(function() {
            z.src = n
        }, 1)) : n && k.load(n, B.data, function(t, n, r) {
            i(n === "error" ? G(K, "Error").html(B.xhrError) : e(this).contents())
        })
    }, J.next = function() {
        !X && T[1] && (B.loop || T[U + 1]) && (U = Y(1), J.load())
    }, J.prev = function() {
        !X && T[1] && (B.loop || U) && (U = Y(-1), J.load())
    }, J.close = function() {
        W && !V && (V = !0, W = !1, nt(l, B.onCleanup), N.unbind("." + s + " ." + v), m.fadeTo(200, 0), g.stop().fadeTo(300, 0, function() {
            g.add(m).css({
                opacity: 1,
                cursor: "auto"
            }).hide(), nt(h), C.remove(), setTimeout(function() {
                V = !1, nt(c, B.onClosed)
            }, 1)
        }))
    }, J.remove = function() {
        e([]).add(g).add(m).remove(), g = null, e("." + o).removeData(i).removeClass(o).die()
    }, J.element = function() {
        return e(R)
    }, J.settings = r
})(jQuery, document, this);;
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
}; /*! KonvaJS v4.5.4 2013-06-09 http://www.kineticjs.com by Eric Rowell @ericdrowell - MIT License https://github.com/ericdrowell/KonvaJS/wiki/License*/
var Konva = {};
! function() {
    Konva.version = "4.5.4", Konva.Filters = {}, Konva.Node = function(a) {
        this._nodeInit(a)
    }, Konva.Shape = function(a) {
        this._initShape(a)
    }, Konva.Container = function(a) {
        this._containerInit(a)
    }, Konva.Stage = function(a) {
        this._initStage(a)
    }, Konva.Layer = function(a) {
        this._initLayer(a)
    }, Konva.Group = function(a) {
        this._initGroup(a)
    }, Konva.Global = {
        stages: [],
        idCounter: 0,
        ids: {},
        names: {},
        shapes: {},
        isDragging: function() {
            var a = Konva.DD;
            return a ? a.isDragging : !1
        },
        isDragReady: function() {
            var a = Konva.DD;
            return a ? !!a.node : !1
        },
        _addId: function(a, b) {
            void 0 !== b && (this.ids[b] = a)
        },
        _removeId: function(a) {
            void 0 !== a && delete this.ids[a]
        },
        _addName: function(a, b) {
            void 0 !== b && (void 0 === this.names[b] && (this.names[b] = []), this.names[b].push(a))
        },
        _removeName: function(a, b) {
            if (void 0 !== a) {
                var c = this.names[a];
                if (void 0 !== c) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d];
                        e._id === b && c.splice(d, 1)
                    }
                    0 === c.length && delete this.names[a]
                }
            }
        }
    }
}(),
function(a, b) {
    "object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.returnExports = b()
}(this, function() {
    return Konva
}),
function() {
    Konva.Collection = function() {
        var a = [].slice.call(arguments),
            b = a.length,
            c = 0;
        for (this.length = b; b > c; c++) this[c] = a[c];
        return this
    }, Konva.Collection.prototype = [], Konva.Collection.prototype.each = function(a) {
        for (var b = 0; b < this.length; b++) a(this[b], b)
    }, Konva.Collection.prototype.toArray = function() {
        for (var a = [], b = 0; b < this.length; b++) a.push(this[b]);
        return a
    }, Konva.Collection.mapMethods = function(a) {
        var b, c = a.length;
        for (b = 0; c > b; b++) ! function(b) {
            var c = a[b];
            Konva.Collection.prototype[c] = function() {
                var a, b = this.length;
                for (args = [].slice.call(arguments), a = 0; b > a; a++) this[a][c].apply(this[a], args)
            }
        }(b)
    }
}(),
function() {
    Konva.Transform = function() {
        this.m = [1, 0, 0, 1, 0, 0]
    }, Konva.Transform.prototype = {
        translate: function(a, b) {
            this.m[4] += this.m[0] * a + this.m[2] * b, this.m[5] += this.m[1] * a + this.m[3] * b
        },
        scale: function(a, b) {
            this.m[0] *= a, this.m[1] *= a, this.m[2] *= b, this.m[3] *= b
        },
        rotate: function(a) {
            var b = Math.cos(a),
                c = Math.sin(a),
                d = this.m[0] * b + this.m[2] * c,
                e = this.m[1] * b + this.m[3] * c,
                f = this.m[0] * -c + this.m[2] * b,
                g = this.m[1] * -c + this.m[3] * b;
            this.m[0] = d, this.m[1] = e, this.m[2] = f, this.m[3] = g
        },
        getTranslation: function() {
            return {
                x: this.m[4],
                y: this.m[5]
            }
        },
        skew: function(a, b) {
            var c = this.m[0] + this.m[2] * b,
                d = this.m[1] + this.m[3] * b,
                e = this.m[2] + this.m[0] * a,
                f = this.m[3] + this.m[1] * a;
            this.m[0] = c, this.m[1] = d, this.m[2] = e, this.m[3] = f
        },
        multiply: function(a) {
            var b = this.m[0] * a.m[0] + this.m[2] * a.m[1],
                c = this.m[1] * a.m[0] + this.m[3] * a.m[1],
                d = this.m[0] * a.m[2] + this.m[2] * a.m[3],
                e = this.m[1] * a.m[2] + this.m[3] * a.m[3],
                f = this.m[0] * a.m[4] + this.m[2] * a.m[5] + this.m[4],
                g = this.m[1] * a.m[4] + this.m[3] * a.m[5] + this.m[5];
            this.m[0] = b, this.m[1] = c, this.m[2] = d, this.m[3] = e, this.m[4] = f, this.m[5] = g
        },
        invert: function() {
            var a = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
                b = this.m[3] * a,
                c = -this.m[1] * a,
                d = -this.m[2] * a,
                e = this.m[0] * a,
                f = a * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
                g = a * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
            this.m[0] = b, this.m[1] = c, this.m[2] = d, this.m[3] = e, this.m[4] = f, this.m[5] = g
        },
        getMatrix: function() {
            return this.m
        }
    }
}(),
function() {
    var a = "canvas",
        b = "2d",
        c = "[object Array]",
        d = "[object Number]",
        e = "[object String]",
        f = Math.PI / 180,
        g = 180 / Math.PI,
        h = "#",
        i = "",
        j = "0",
        k = "Konva warning: ",
        l = "rgb(",
        m = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        n = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
    Konva.Util = {
        _isElement: function(a) {
            return !(!a || 1 != a.nodeType)
        },
        _isFunction: function(a) {
            return !!(a && a.constructor && a.call && a.apply)
        },
        _isObject: function(a) {
            return !!a && a.constructor == Object
        },
        _isArray: function(a) {
            return Object.prototype.toString.call(a) == c
        },
        _isNumber: function(a) {
            return Object.prototype.toString.call(a) == d
        },
        _isString: function(a) {
            return Object.prototype.toString.call(a) == e
        },
        _hasMethods: function(a) {
            var b, c = [];
            for (b in a) this._isFunction(a[b]) && c.push(b);
            return c.length > 0
        },
        _isInDocument: function(a) {
            for (; a = a.parentNode;)
                if (a == document) return !0;
            return !1
        },
        _getXY: function(a) {
            if (this._isNumber(a)) return {
                x: a,
                y: a
            };
            if (this._isArray(a)) {
                if (1 === a.length) {
                    var b = a[0];
                    if (this._isNumber(b)) return {
                        x: b,
                        y: b
                    };
                    if (this._isArray(b)) return {
                        x: b[0],
                        y: b[1]
                    };
                    if (this._isObject(b)) return b
                } else if (a.length >= 2) return {
                    x: a[0],
                    y: a[1]
                }
            } else if (this._isObject(a)) return a;
            return null
        },
        _getSize: function(a) {
            if (this._isNumber(a)) return {
                width: a,
                height: a
            };
            if (this._isArray(a))
                if (1 === a.length) {
                    var b = a[0];
                    if (this._isNumber(b)) return {
                        width: b,
                        height: b
                    };
                    if (this._isArray(b)) {
                        if (b.length >= 4) return {
                            width: b[2],
                            height: b[3]
                        };
                        if (b.length >= 2) return {
                            width: b[0],
                            height: b[1]
                        }
                    } else if (this._isObject(b)) return b
                } else {
                    if (a.length >= 4) return {
                        width: a[2],
                        height: a[3]
                    };
                    if (a.length >= 2) return {
                        width: a[0],
                        height: a[1]
                    }
                }
            else if (this._isObject(a)) return a;
            return null
        },
        _getPoints: function(a) {
            var b, c, d = [];
            if (void 0 === a) return [];
            if (c = a.length, this._isArray(a[0])) {
                for (b = 0; c > b; b++) d.push({
                    x: a[b][0],
                    y: a[b][1]
                });
                return d
            }
            if (this._isObject(a[0])) return a;
            for (b = 0; c > b; b += 2) d.push({
                x: a[b],
                y: a[b + 1]
            });
            return d
        },
        _getImage: function(c, d) {
            var e, f, g, h;
            c ? this._isElement(c) ? d(c) : this._isString(c) ? (e = new Image, e.onload = function() {
                d(e)
            }, e.src = c) : c.data ? (f = document.createElement(a), f.width = c.width, f.height = c.height, g = f.getContext(b), g.putImageData(c, 0, 0), h = f.toDataURL(), e = new Image, e.onload = function() {
                d(e)
            }, e.src = h) : d(null) : d(null)
        },
        _rgbToHex: function(a, b, c) {
            return ((1 << 24) + (a << 16) + (b << 8) + c).toString(16).slice(1)
        },
        _hexToRgb: function(a) {
            a = a.replace(h, i);
            var b = parseInt(a, 16);
            return {
                r: 255 & b >> 16,
                g: 255 & b >> 8,
                b: 255 & b
            }
        },
        getRandomColor: function() {
            for (var a = (16777215 * Math.random() << 0).toString(16); a.length < 6;) a = j + a;
            return h + a
        },
        getRGB: function(a) {
            var b;
            return a in m ? (b = m[a], {
                r: b[0],
                g: b[1],
                b: b[2]
            }) : a[0] === h ? this._hexToRgb(a.substring(1)) : a.substr(0, 4) === l ? (b = n.exec(a.replace(/ /g, "")), {
                r: parseInt(b[1], 10),
                g: parseInt(b[2], 10),
                b: parseInt(b[3], 10)
            }) : {
                r: 0,
                g: 0,
                b: 0
            }
        },
        _merge: function(a, b) {
            var c = this._clone(b);
            for (var d in a) c[d] = this._isObject(a[d]) ? this._merge(a[d], c[d]) : a[d];
            return c
        },
        _clone: function(a) {
            var b = {};
            for (var c in a) b[c] = this._isObject(a[c]) ? this._clone(a[c]) : a[c];
            return b
        },
        _degToRad: function(a) {
            return a * f
        },
        _radToDeg: function(a) {
            return a * g
        },
        _capitalize: function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        },
        warn: function(a) {
            window.console && console.warn && console.warn(k + a)
        },
        extend: function(a, b) {
            for (var c in b.prototype) c in a.prototype || (a.prototype[c] = b.prototype[c])
        },
        addMethods: function(a, b) {
            var c;
            for (c in b) a.prototype[c] = b[c]
        },
        _getControlPoints: function(a, b, c, d) {
            var e = a.x,
                f = a.y,
                g = b.x,
                h = b.y,
                i = c.x,
                j = c.y,
                k = Math.sqrt(Math.pow(g - e, 2) + Math.pow(h - f, 2)),
                l = Math.sqrt(Math.pow(i - g, 2) + Math.pow(j - h, 2)),
                m = d * k / (k + l),
                n = d * l / (k + l),
                o = g - m * (i - e),
                p = h - m * (j - f),
                q = g + n * (i - e),
                r = h + n * (j - f);
            return [{
                x: o,
                y: p
            }, {
                x: q,
                y: r
            }]
        },
        _expandPoints: function(a, b) {
            var c, d, e = a.length,
                f = [];
            for (c = 1; e - 1 > c; c++) d = Konva.Util._getControlPoints(a[c - 1], a[c], a[c + 1], b), f.push(d[0]), f.push(a[c]), f.push(d[1]);
            return f
        }
    }
}(),
function() {
    var a = document.createElement("canvas"),
        b = a.getContext("2d"),
        c = window.devicePixelRatio || 1,
        d = b.webkitBackingStorePixelRatio || b.mozBackingStorePixelRatio || b.msBackingStorePixelRatio || b.oBackingStorePixelRatio || b.backingStorePixelRatio || 1,
        e = c / d;
    Konva.Canvas = function(a) {
        this.init(a)
    }, Konva.Canvas.prototype = {
        init: function(a) {
            a = a || {};
            var b = a.width || 0,
                c = a.height || 0,
                d = a.pixelRatio || e,
                f = a.contextType || "2d";
            this.pixelRatio = d, this.element = document.createElement("canvas"), this.element.style.padding = 0, this.element.style.margin = 0, this.element.style.border = 0, this.element.style.background = "transparent", this.context = this.element.getContext(f), this.setSize(b, c)
        },
        getElement: function() {
            return this.element
        },
        getContext: function() {
            return this.context
        },
        setWidth: function(a) {
            this.width = this.element.width = a * this.pixelRatio, this.element.style.width = a + "px"
        },
        setHeight: function(a) {
            this.height = this.element.height = a * this.pixelRatio, this.element.style.height = a + "px"
        },
        getWidth: function() {
            return this.width
        },
        getHeight: function() {
            return this.height
        },
        setSize: function(a, b) {
            this.setWidth(a), this.setHeight(b)
        },
        clear: function() {
            var a = this.getContext();
            this.getElement(), a.clearRect(0, 0, this.getWidth(), this.getHeight())
        },
        toDataURL: function(a, b) {
            try {
                return this.element.toDataURL(a, b)
            } catch (c) {
                try {
                    return this.element.toDataURL()
                } catch (d) {
                    return Konva.Util.warn("Unable to get data URL. " + d.message), ""
                }
            }
        },
        fill: function(a) {
            a.getFillEnabled() && this._fill(a)
        },
        stroke: function(a) {
            a.getStrokeEnabled() && this._stroke(a)
        },
        fillStroke: function(a) {
            var b = a.getFillEnabled();
            b && this._fill(a), a.getStrokeEnabled() && this._stroke(a, a.hasShadow() && a.hasFill() && b)
        },
        applyShadow: function(a, b) {
            var c = this.context;
            c.save(), this._applyShadow(a), b(), c.restore(), b()
        },
        _applyLineCap: function(a) {
            var b = a.getLineCap();
            b && (this.context.lineCap = b)
        },
        _applyOpacity: function(a) {
            var b = a.getAbsoluteOpacity();
            1 !== b && (this.context.globalAlpha = b)
        },
        _applyLineJoin: function(a) {
            var b = a.getLineJoin();
            b && (this.context.lineJoin = b)
        },
        _applyAncestorTransforms: function(a) {
            var b, c, d = this.context;
            a._eachAncestorReverse(function(a) {
                b = a.getTransform(!0), c = b.getMatrix(), d.transform(c[0], c[1], c[2], c[3], c[4], c[5])
            }, !0)
        },
        _clip: function(a) {
            var b = this.getContext();
            b.save(), this._applyAncestorTransforms(a), b.beginPath(), a.getClipFunc()(this), b.clip(), b.setTransform(1, 0, 0, 1, 0, 0)
        }
    }, Konva.SceneCanvas = function(a) {
        Konva.Canvas.call(this, a)
    }, Konva.SceneCanvas.prototype = {
        setWidth: function(a) {
            var b = this.pixelRatio;
            Konva.Canvas.prototype.setWidth.call(this, a), this.context.scale(b, b)
        },
        setHeight: function(a) {
            var b = this.pixelRatio;
            Konva.Canvas.prototype.setHeight.call(this, a), this.context.scale(b, b)
        },
        _fillColor: function(a) {
            var b = this.context,
                c = a.getFill();
            b.fillStyle = c, a._fillFunc(b)
        },
        _fillPattern: function(a) {
            var b = this.context,
                c = a.getFillPatternImage(),
                d = a.getFillPatternX(),
                e = a.getFillPatternY(),
                f = a.getFillPatternScale(),
                g = a.getFillPatternRotation(),
                h = a.getFillPatternOffset(),
                i = a.getFillPatternRepeat();
            (d || e) && b.translate(d || 0, e || 0), g && b.rotate(g), f && b.scale(f.x, f.y), h && b.translate(-1 * h.x, -1 * h.y), b.fillStyle = b.createPattern(c, i || "repeat"), b.fill()
        },
        _fillLinearGradient: function(a) {
            var b = this.context,
                c = a.getFillLinearGradientStartPoint(),
                d = a.getFillLinearGradientEndPoint(),
                e = a.getFillLinearGradientColorStops(),
                f = b.createLinearGradient(c.x, c.y, d.x, d.y);
            if (e) {
                for (var g = 0; g < e.length; g += 2) f.addColorStop(e[g], e[g + 1]);
                b.fillStyle = f, b.fill()
            }
        },
        _fillRadialGradient: function(a) {
            for (var b = this.context, c = a.getFillRadialGradientStartPoint(), d = a.getFillRadialGradientEndPoint(), e = a.getFillRadialGradientStartRadius(), f = a.getFillRadialGradientEndRadius(), g = a.getFillRadialGradientColorStops(), h = b.createRadialGradient(c.x, c.y, e, d.x, d.y, f), i = 0; i < g.length; i += 2) h.addColorStop(g[i], g[i + 1]);
            b.fillStyle = h, b.fill()
        },
        _fill: function(a, b) {
            var c = this.context,
                d = a.getFill(),
                e = a.getFillPatternImage(),
                f = a.getFillLinearGradientColorStops(),
                g = a.getFillRadialGradientColorStops(),
                h = a.getFillPriority();
            c.save(), !b && a.hasShadow() && this._applyShadow(a), d && "color" === h ? this._fillColor(a) : e && "pattern" === h ? this._fillPattern(a) : f && "linear-gradient" === h ? this._fillLinearGradient(a) : g && "radial-gradient" === h ? this._fillRadialGradient(a) : d ? this._fillColor(a) : e ? this._fillPattern(a) : f ? this._fillLinearGradient(a) : g && this._fillRadialGradient(a), c.restore(), !b && a.hasShadow() && this._fill(a, !0)
        },
        _stroke: function(a, b) {
            var c = this.context,
                d = a.getStroke(),
                e = a.getStrokeWidth(),
                f = a.getDashArray();
            (d || e) && (c.save(), a.getStrokeScaleEnabled() || c.setTransform(1, 0, 0, 1, 0, 0), this._applyLineCap(a), f && a.getDashArrayEnabled() && (c.setLineDash ? c.setLineDash(f) : "mozDash" in c ? c.mozDash = f : "webkitLineDash" in c && (c.webkitLineDash = f)), !b && a.hasShadow() && this._applyShadow(a), c.lineWidth = e || 2, c.strokeStyle = d || "black", a._strokeFunc(c), c.restore(), !b && a.hasShadow() && this._stroke(a, !0))
        },
        _applyShadow: function(a) {
            var b = this.context;
            if (a.hasShadow() && a.getShadowEnabled()) {
                var c = a.getAbsoluteOpacity(),
                    d = a.getShadowColor() || "black",
                    e = a.getShadowBlur() || 5,
                    f = a.getShadowOffset() || {
                        x: 0,
                        y: 0
                    };
                a.getShadowOpacity() && (b.globalAlpha = a.getShadowOpacity() * c), b.shadowColor = d, b.shadowBlur = e, b.shadowOffsetX = f.x, b.shadowOffsetY = f.y
            }
        }
    }, Konva.Util.extend(Konva.SceneCanvas, Konva.Canvas), Konva.HitCanvas = function(a) {
        Konva.Canvas.call(this, a)
    }, Konva.HitCanvas.prototype = {
        _fill: function(a) {
            var b = this.context;
            b.save(), b.fillStyle = a.colorKey, a._fillFuncHit(b), b.restore()
        },
        _stroke: function(a) {
            var b = this.context,
                c = a.getStroke(),
                d = a.getStrokeWidth();
            (c || d) && (this._applyLineCap(a), b.save(), b.lineWidth = d || 2, b.strokeStyle = a.colorKey, a._strokeFuncHit(b), b.restore())
        }
    }, Konva.Util.extend(Konva.HitCanvas, Konva.Canvas)
}(),
function() {
    var a = " ",
        b = "",
        c = ".",
        d = "get",
        e = "set",
        f = "Shape",
        g = "Stage",
        h = "X",
        i = "Y",
        j = "kinetic",
        k = "before",
        l = "Change",
        m = "id",
        n = "name",
        o = "mouseenter",
        p = "mouseleave",
        q = "Deg",
        r = "beforeDraw",
        s = "draw",
        t = "RGB",
        u = "r",
        v = "g",
        w = "b",
        x = "R",
        y = "G",
        z = "B",
        A = "#",
        B = "children";
    Konva.Util.addMethods(Konva.Node, {
        _nodeInit: function(a) {
            this._id = Konva.Global.idCounter++, this.eventListeners = {}, this.setAttrs(a)
        },
        on: function(d, e) {
            var f, g, h, i, j, k, l = d.split(a),
                m = l.length;
            for (f = 0; m > f; f++) g = l[f], h = g, i = h.split(c), j = i[0], k = i.length > 1 ? i[1] : b, this.eventListeners[j] || (this.eventListeners[j] = []), this.eventListeners[j].push({
                name: k,
                handler: e
            });
            return this
        },
        off: function(b) {
            var d, e, f, g, h, i, j = b.split(a),
                k = j.length;
            for (d = 0; k > d; d++)
                if (e = j[d], g = e, h = g.split(c), i = h[0], h.length > 1)
                    if (i) this.eventListeners[i] && this._off(i, h[1]);
                    else
                        for (f in this.eventListeners) this._off(f, h[1]);
            else delete this.eventListeners[i];
            return this
        },
        remove: function() {
            var a = this.getParent();
            return a && a.children && (a.children.splice(this.index, 1), a._setChildrenIndices(), delete this.parent), this
        },
        destroy: function() {
            var a = Konva.Global;
            a._removeId(this.getId()), a._removeName(this.getName(), this._id), this.remove()
        },
        getAttr: function(a) {
            var b = d + Konva.Util._capitalize(a);
            return Konva.Util._isFunction(this[b]) ? this[b]() : this.attrs[a]
        },
        setAttr: function() {
            var a = Array.prototype.slice.call(arguments),
                b = a[0],
                c = e + Konva.Util._capitalize(b),
                d = this[c];
            return a.shift(), Konva.Util._isFunction(d) ? d.apply(this, a) : this.attrs[b] = a[0], this
        },
        getAttrs: function() {
            return this.attrs || {}
        },
        createAttrs: function() {
            return void 0 === this.attrs && (this.attrs = {}), this
        },
        setAttrs: function(a) {
            var b, c;
            if (a)
                for (b in a) b === B || (c = e + Konva.Util._capitalize(b), Konva.Util._isFunction(this[c]) ? this[c](a[b]) : this._setAttr(b, a[b]));
            return this
        },
        getVisible: function() {
            var a = this.attrs.visible,
                b = this.getParent();
            return void 0 === a && (a = !0), a && b && !b.getVisible() ? !1 : a
        },
        getListening: function() {
            var a = this.attrs.listening,
                b = this.getParent();
            return void 0 === a && (a = !0), a && b && !b.getListening() ? !1 : a
        },
        show: function() {
            return this.setVisible(!0), this
        },
        hide: function() {
            return this.setVisible(!1), this
        },
        getZIndex: function() {
            return this.index || 0
        },
        getAbsoluteZIndex: function() {
            function a(g) {
                for (b = [], c = g.length, d = 0; c > d; d++) e = g[d], j++, e.nodeType !== f && (b = b.concat(e.getChildren().toArray())), e._id === i._id && (d = c);
                b.length > 0 && b[0].getLevel() <= h && a(b)
            }
            var b, c, d, e, h = this.getLevel(),
                i = (this.getStage(), this),
                j = 0;
            return i.nodeType !== g && a(i.getStage().getChildren()), j
        },
        getLevel: function() {
            for (var a = 0, b = this.parent; b;) a++, b = b.parent;
            return a
        },
        setPosition: function() {
            var a = Konva.Util._getXY([].slice.call(arguments));
            return this.setX(a.x), this.setY(a.y), this
        },
        getPosition: function() {
            return {
                x: this.getX(),
                y: this.getY()
            }
        },
        getAbsolutePosition: function() {
            var a = this.getAbsoluteTransform(),
                b = this.getOffset();
            return a.translate(b.x, b.y), a.getTranslation()
        },
        setAbsolutePosition: function() {
            var a, b = Konva.Util._getXY([].slice.call(arguments)),
                c = this._clearTransform();
            return this.attrs.x = c.x, this.attrs.y = c.y, delete c.x, delete c.y, a = this.getAbsoluteTransform(), a.invert(), a.translate(b.x, b.y), b = {
                x: this.attrs.x + a.getTranslation().x,
                y: this.attrs.y + a.getTranslation().y
            }, this.setPosition(b.x, b.y), this._setTransform(c), this
        },
        move: function() {
            var a = Konva.Util._getXY([].slice.call(arguments)),
                b = this.getX(),
                c = this.getY();
            return void 0 !== a.x && (b += a.x), void 0 !== a.y && (c += a.y), this.setPosition(b, c), this
        },
        _eachAncestorReverse: function(a, b) {
            var c, d, e = [],
                f = this.getParent();
            for (b && e.unshift(this); f;) e.unshift(f), f = f.parent;
            for (c = e.length, d = 0; c > d; d++) a(e[d])
        },
        rotate: function(a) {
            return this.setRotation(this.getRotation() + a), this
        },
        rotateDeg: function(a) {
            return this.setRotation(this.getRotation() + Konva.Util._degToRad(a)), this
        },
        moveToTop: function() {
            var a = this.index;
            return this.parent.children.splice(a, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0
        },
        moveUp: function() {
            var a = this.index,
                b = this.parent.getChildren().length;
            return b - 1 > a ? (this.parent.children.splice(a, 1), this.parent.children.splice(a + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1
        },
        moveDown: function() {
            var a = this.index;
            return a > 0 ? (this.parent.children.splice(a, 1), this.parent.children.splice(a - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1
        },
        moveToBottom: function() {
            var a = this.index;
            return a > 0 ? (this.parent.children.splice(a, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1
        },
        setZIndex: function(a) {
            var b = this.index;
            return this.parent.children.splice(b, 1), this.parent.children.splice(a, 0, this), this.parent._setChildrenIndices(), this
        },
        getAbsoluteOpacity: function() {
            var a = this.getOpacity();
            return this.getParent() && (a *= this.getParent().getAbsoluteOpacity()), a
        },
        moveTo: function(a) {
            return Konva.Node.prototype.remove.call(this), a.add(this), this
        },
        toObject: function() {
            var a, b, c = Konva.Util,
                d = {},
                e = this.getAttrs();
            d.attrs = {};
            for (a in e) b = e[a], c._isFunction(b) || c._isElement(b) || c._isObject(b) && c._hasMethods(b) || (d.attrs[a] = b);
            return d.className = this.getClassName(), d
        },
        toJSON: function() {
            return JSON.stringify(this.toObject())
        },
        getParent: function() {
            return this.parent
        },
        getLayer: function() {
            return this.getParent().getLayer()
        },
        getStage: function() {
            return this.getParent() ? this.getParent().getStage() : void 0
        },
        fire: function(a, b, c) {
            return c ? this._fireAndBubble(a, b || {}) : this._fire(a, b || {}), this
        },
        getAbsoluteTransform: function() {
            var a, b = new Konva.Transform;
            return this._eachAncestorReverse(function(c) {
                a = c.getTransform(), b.multiply(a)
            }, !0), b
        },
        _getAndCacheTransform: function() {
            var a = new Konva.Transform,
                b = this.getX(),
                c = this.getY(),
                d = this.getRotation(),
                e = this.getScaleX(),
                f = this.getScaleY(),
                g = this.getSkewX(),
                h = this.getSkewY(),
                i = this.getOffsetX(),
                j = this.getOffsetY();
            return (0 !== b || 0 !== c) && a.translate(b, c), 0 !== d && a.rotate(d), (0 !== g || 0 !== h) && a.skew(g, h), (1 !== e || 1 !== f) && a.scale(e, f), (0 !== i || 0 !== j) && a.translate(-1 * i, -1 * j), this.cachedTransform = a, a
        },
        getTransform: function(a) {
            var b = this.cachedTransform;
            return a && b ? b : this._getAndCacheTransform()
        },
        clone: function(a) {
            var b, c, d, e, f, g = this.getClassName(),
                h = new Konva[g](this.attrs);
            for (b in this.eventListeners)
                for (c = this.eventListeners[b], d = c.length, e = 0; d > e; e++) f = c[e], f.name.indexOf(j) < 0 && (h.eventListeners[b] || (h.eventListeners[b] = []), h.eventListeners[b].push(f));
            return h.setAttrs(a), h
        },
        toDataURL: function(a) {
            a = a || {};
            var b = a.mimeType || null,
                c = a.quality || null,
                d = this.getStage(),
                e = a.x || 0,
                f = a.y || 0,
                g = new Konva.SceneCanvas({
                    width: a.width || d.getWidth(),
                    height: a.height || d.getHeight(),
                    pixelRatio: 1
                }),
                h = g.getContext();
            return h.save(), (e || f) && h.translate(-1 * e, -1 * f), this.drawScene(g), h.restore(), g.toDataURL(b, c)
        },
        toImage: function(a) {
            Konva.Util._getImage(this.toDataURL(a), function(b) {
                a.callback(b)
            })
        },
        setSize: function() {
            var a = Konva.Util._getSize(Array.prototype.slice.call(arguments));
            return this.setWidth(a.width), this.setHeight(a.height), this
        },
        getSize: function() {
            return {
                width: this.getWidth(),
                height: this.getHeight()
            }
        },
        getWidth: function() {
            return this.attrs.width || 0
        },
        getHeight: function() {
            return this.attrs.height || 0
        },
        getClassName: function() {
            return this.className || this.nodeType
        },
        getType: function() {
            return this.nodeType
        },
        _get: function(a) {
            return this.nodeType === a ? [this] : []
        },
        _off: function(a, b) {
            var c, d = this.eventListeners[a];
            for (c = 0; c < d.length; c++)
                if (d[c].name === b) {
                    if (d.splice(c, 1), 0 === d.length) {
                        delete this.eventListeners[a];
                        break
                    }
                    c--
                }
        },
        _clearTransform: function() {
            var a = {
                x: this.getX(),
                y: this.getY(),
                rotation: this.getRotation(),
                scaleX: this.getScaleX(),
                scaleY: this.getScaleY(),
                offsetX: this.getOffsetX(),
                offsetY: this.getOffsetY(),
                skewX: this.getSkewX(),
                skewY: this.getSkewY()
            };
            return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, a
        },
        _setTransform: function(a) {
            var b;
            for (b in a) this.attrs[b] = a[b];
            this.cachedTransform = null
        },
        _fireBeforeChangeEvent: function(a, b, c) {
            this._fire(k + Konva.Util._capitalize(a) + l, {
                oldVal: b,
                newVal: c
            })
        },
        _fireChangeEvent: function(a, b, c) {
            this._fire(a + l, {
                oldVal: b,
                newVal: c
            })
        },
        setId: function(a) {
            var b = this.getId(),
                c = (this.getStage(), Konva.Global);
            return c._removeId(b), c._addId(this, a), this._setAttr(m, a), this
        },
        setName: function(a) {
            var b = this.getName(),
                c = (this.getStage(), Konva.Global);
            return c._removeName(b, this._id), c._addName(this, a), this._setAttr(n, a), this
        },
        _setAttr: function(a, b) {
            var c;
            void 0 !== b && (c = this.attrs[a], this._fireBeforeChangeEvent(a, c, b), this.attrs[a] = b, this._fireChangeEvent(a, c, b))
        },
        _fireAndBubble: function(a, b, c) {
            b && this.nodeType === f && (b.targetNode = this), this.getStage(), this.eventListeners;
            var d = !0;
            a === o && c && this._id === c._id ? d = !1 : a === p && c && this._id === c._id && (d = !1), d && (this._fire(a, b), b && !b.cancelBubble && this.parent && (c && c.parent ? this._fireAndBubble.call(this.parent, a, b, c.parent) : this._fireAndBubble.call(this.parent, a, b)))
        },
        _fire: function(a, b) {
            var c, d, e = this.eventListeners[a];
            if (e)
                for (c = e.length, d = 0; c > d; d++) e[d].handler.call(this, b)
        },
        draw: function() {
            var a = {
                node: this
            };
            return this._fire(r, a), this.drawScene(), this.drawHit(), this._fire(s, a), this
        },
        shouldDrawHit: function() {
            return this.isVisible() && this.isListening() && !Konva.Global.isDragging()
        },
        isDraggable: function() {
            return !1
        }
    }), Konva.Node.setPoints = function(a) {
        var b = Konva.Util._getPoints(a);
        this._setAttr("points", b)
    }, Konva.Node.addGetterSetter = function(a, b, c, d) {
        this.addGetter(a, b, c), this.addSetter(a, b, d)
    }, Konva.Node.addPointGetterSetter = function(a, b, c, d) {
        this.addPointGetter(a, b), this.addPointSetter(a, b), this.addGetter(a, b + h, c), this.addGetter(a, b + i, c), this.addSetter(a, b + h, d), this.addSetter(a, b + i, d)
    }, Konva.Node.addPointsGetterSetter = function(a, b) {
        this.addPointsGetter(a, b), this.addPointsSetter(a, b)
    }, Konva.Node.addRotationGetterSetter = function(a, b, c, d) {
        this.addRotationGetter(a, b, c), this.addRotationSetter(a, b, d)
    }, Konva.Node.addColorGetterSetter = function(a, b) {
        this.addGetter(a, b), this.addSetter(a, b), this.addColorRGBGetter(a, b), this.addColorComponentGetter(a, b, u), this.addColorComponentGetter(a, b, v), this.addColorComponentGetter(a, b, w), this.addColorRGBSetter(a, b), this.addColorComponentSetter(a, b, u), this.addColorComponentSetter(a, b, v), this.addColorComponentSetter(a, b, w)
    }, Konva.Node.addColorRGBGetter = function(a, b) {
        var c = d + Konva.Util._capitalize(b) + t;
        a.prototype[c] = function() {
            return Konva.Util.getRGB(this.attrs[b])
        }
    }, Konva.Node.addColorComponentGetter = function(a, b, c) {
        var e = d + Konva.Util._capitalize(b),
            f = e + Konva.Util._capitalize(c);
        a.prototype[f] = function() {
            return this[e + t]()[c]
        }
    }, Konva.Node.addPointsGetter = function(a, b) {
        var c = d + Konva.Util._capitalize(b);
        a.prototype[c] = function() {
            var a = this.attrs[b];
            return void 0 === a ? [] : a
        }
    }, Konva.Node.addGetter = function(a, b, c) {
        var e = d + Konva.Util._capitalize(b);
        a.prototype[e] = function() {
            var a = this.attrs[b];
            return void 0 === a ? c : a
        }
    }, Konva.Node.addPointGetter = function(a, b) {
        var c = d + Konva.Util._capitalize(b);
        a.prototype[c] = function() {
            var a = this;
            return {
                x: a[c + h](),
                y: a[c + i]()
            }
        }
    }, Konva.Node.addRotationGetter = function(a, b, c) {
        var e = d + Konva.Util._capitalize(b);
        a.prototype[e] = function() {
            var a = this.attrs[b];
            return void 0 === a && (a = c), a
        }, a.prototype[e + q] = function() {
            var a = this.attrs[b];
            return void 0 === a && (a = c), Konva.Util._radToDeg(a)
        }
    }, Konva.Node.addColorRGBSetter = function(a, b) {
        var c = e + Konva.Util._capitalize(b) + t;
        a.prototype[c] = function(a) {
            var c = a && void 0 !== a.r ? 0 | a.r : this.getAttr(b + x),
                d = a && void 0 !== a.g ? 0 | a.g : this.getAttr(b + y),
                e = a && void 0 !== a.b ? 0 | a.b : this.getAttr(b + z);
            this._setAttr(b, A + Konva.Util._rgbToHex(c, d, e))
        }
    }, Konva.Node.addColorComponentSetter = function(a, b, c) {
        var d = e + Konva.Util._capitalize(b),
            f = d + Konva.Util._capitalize(c);
        a.prototype[f] = function(a) {
            var b = {};
            b[c] = a, this[d + t](b)
        }
    }, Konva.Node.addPointsSetter = function(a, b) {
        var c = e + Konva.Util._capitalize(b);
        a.prototype[c] = Konva.Node.setPoints
    }, Konva.Node.addSetter = function(a, b, c) {
        var d = e + Konva.Util._capitalize(b);
        a.prototype[d] = function(a) {
            this._setAttr(b, a), c && (this.cachedTransform = null)
        }
    }, Konva.Node.addPointSetter = function(a, b) {
        var c = e + Konva.Util._capitalize(b);
        a.prototype[c] = function() {
            var a = Konva.Util._getXY([].slice.call(arguments)),
                d = this.attrs[b],
                e = 0,
                f = 0;
            a && (e = a.x, f = a.y, this._fireBeforeChangeEvent(b, d, a), void 0 !== e && this[c + h](e), void 0 !== f && this[c + i](f), this._fireChangeEvent(b, d, a))
        }
    }, Konva.Node.addRotationSetter = function(a, b, c) {
        var d = e + Konva.Util._capitalize(b);
        a.prototype[d] = function(a) {
            this._setAttr(b, a), c && (this.cachedTransform = null)
        }, a.prototype[d + q] = function(a) {
            this._setAttr(b, Konva.Util._degToRad(a)), c && (this.cachedTransform = null)
        }
    }, Konva.Node.create = function(a, b) {
        return this._createNode(JSON.parse(a), b)
    }, Konva.Node._createNode = function(a, b) {
        var c, d, e, f = Konva.Node.prototype.getClassName.call(a),
            g = a.children;
        if (b && (a.attrs.container = b), c = new Konva[f](a.attrs), g)
            for (d = g.length, e = 0; d > e; e++) c.add(this._createNode(g[e]));
        return c
    }, Konva.Node.addGetterSetter(Konva.Node, "x", 0, !0), Konva.Node.addGetterSetter(Konva.Node, "y", 0, !0), Konva.Node.addGetterSetter(Konva.Node, "opacity", 1), Konva.Node.addGetter(Konva.Node, "name"), Konva.Node.addGetter(Konva.Node, "id"), Konva.Node.addRotationGetterSetter(Konva.Node, "rotation", 0, !0), Konva.Node.addPointGetterSetter(Konva.Node, "scale", 1, !0), Konva.Node.addPointGetterSetter(Konva.Node, "skew", 0, !0), Konva.Node.addPointGetterSetter(Konva.Node, "offset", 0, !0), Konva.Node.addSetter(Konva.Node, "width"), Konva.Node.addSetter(Konva.Node, "height"), Konva.Node.addSetter(Konva.Node, "listening"), Konva.Node.addSetter(Konva.Node, "visible"), Konva.Node.prototype.isListening = Konva.Node.prototype.getListening, Konva.Node.prototype.isVisible = Konva.Node.prototype.getVisible, Konva.Collection.mapMethods(["on", "off", "remove", "destroy", "show", "hide", "move", "rotate", "moveToTop", "moveUp", "moveDown", "moveToBottom", "moveTo", "fire", "draw"])
}(),
function() {
    function a(a) {
        window.setTimeout(a, 1e3 / 60)
    }
    Konva.Animation = function(a, b) {
        this.func = a, this.setLayers(b), this.id = Konva.Animation.animIdCounter++, this.frame = {
            time: 0,
            timeDiff: 0,
            lastTime: (new Date).getTime()
        }
    }, Konva.Animation.prototype = {
        setLayers: function(a) {
            var b = [];
            b = a ? a.length > 0 ? a : [a] : [], this.layers = b
        },
        getLayers: function() {
            return this.layers
        },
        addLayer: function(a) {
            var b, c, d = this.layers;
            if (d) {
                for (b = d.length, c = 0; b > c; c++)
                    if (d[c]._id === a._id) return !1
            } else this.layers = [];
            return this.layers.push(a), !0
        },
        isRunning: function() {
            for (var a = Konva.Animation, b = a.animations, c = 0; c < b.length; c++)
                if (b[c].id === this.id) return !0;
            return !1
        },
        start: function() {
            this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = (new Date).getTime(), Konva.Animation._addAnimation(this)
        },
        stop: function() {
            Konva.Animation._removeAnimation(this)
        },
        _updateFrameObject: function(a) {
            this.frame.timeDiff = a - this.frame.lastTime, this.frame.lastTime = a, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff
        }
    }, Konva.Animation.animations = [], Konva.Animation.animIdCounter = 0, Konva.Animation.animRunning = !1, Konva.Animation._addAnimation = function(a) {
        this.animations.push(a), this._handleAnimation()
    }, Konva.Animation._removeAnimation = function(a) {
        for (var b = a.id, c = this.animations, d = c.length, e = 0; d > e; e++)
            if (c[e].id === b) {
                this.animations.splice(e, 1);
                break
            }
    }, Konva.Animation._runFrames = function() {
        var a, b, c, d, e, f, g, h, i = {},
            j = this.animations;
        for (d = 0; d < j.length; d++) {
            for (a = j[d], b = a.layers, c = a.func, a._updateFrameObject((new Date).getTime()), f = b.length, e = 0; f > e; e++) g = b[e], void 0 !== g._id && (i[g._id] = g);
            c && c.call(a, a.frame)
        }
        for (h in i) i[h].draw()
    }, Konva.Animation._animationLoop = function() {
        var a = this;
        this.animations.length > 0 ? (this._runFrames(), Konva.Animation.requestAnimFrame(function() {
            a._animationLoop()
        })) : this.animRunning = !1
    }, Konva.Animation._handleAnimation = function() {
        var a = this;
        this.animRunning || (this.animRunning = !0, a._animationLoop())
    }, RAF = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || a
    }(), Konva.Animation.requestAnimFrame = function(b) {
        var c = Konva.DD && Konva.DD.isDragging ? a : RAF;
        c(b)
    };
    var b = Konva.Node.prototype.moveTo;
    Konva.Node.prototype.moveTo = function(a) {
        b.call(this, a)
    }, Konva.Layer.batchAnim = new Konva.Animation(function() {
        0 === this.getLayers().length && this.stop(), this.setLayers([])
    }), Konva.Layer.prototype.batchDraw = function() {
        var a = Konva.Layer.batchAnim;
        a.addLayer(this), a.isRunning() || a.start()
    }
}(),
function() {
    var a = {
            node: 1,
            duration: 1,
            easing: 1,
            onFinish: 1,
            yoyo: 1
        },
        b = 1,
        c = 2,
        d = 3,
        e = 0;
    Konva.Tween = function(b) {
        var c, d = this,
            g = b.node,
            h = g._id,
            i = b.duration || 1,
            j = b.easing || Konva.Easings.Linear,
            k = !!b.yoyo;
        this.node = g, this._id = e++, this.onFinish = b.onFinish, this.anim = new Konva.Animation(function() {
            d.tween.onEnterFrame()
        }, g.getLayer() || g.getLayers()), this.tween = new f(c, function(a) {
            d._tweenFunc(a)
        }, j, 0, 1, 1e3 * i, k), this._addListeners(), Konva.Tween.attrs[h] || (Konva.Tween.attrs[h] = {}), Konva.Tween.attrs[h][this._id] || (Konva.Tween.attrs[h][this._id] = {}), Konva.Tween.tweens[h] || (Konva.Tween.tweens[h] = {});
        for (c in b) void 0 === a[c] && this._addAttr(c, b[c]);
        this.reset()
    }, Konva.Tween.attrs = {}, Konva.Tween.tweens = {}, Konva.Tween.prototype = {
        _addAttr: function(a, b) {
            var c, d, e, f, g, h, i, j = this.node,
                k = j._id;
            if (e = Konva.Tween.tweens[k][a], e && delete Konva.Tween.attrs[k][e][a], c = j.getAttr(a), Konva.Util._isArray(b))
                for (b = Konva.Util._getPoints(b), d = [], g = b.length, f = 0; g > f; f++) h = c[f], i = b[f], d.push({
                    x: i.x - h.x,
                    y: i.y - h.y
                });
            else d = b - c;
            Konva.Tween.attrs[k][this._id][a] = {
                start: c,
                diff: d
            }, Konva.Tween.tweens[k][a] = this._id
        },
        _tweenFunc: function(a) {
            var b, c, d, e, f, g, h, i, j, k = this.node,
                l = Konva.Tween.attrs[k._id][this._id];
            for (b in l) {
                if (c = l[b], d = c.start, e = c.diff, Konva.Util._isArray(d))
                    for (f = [], h = d.length, g = 0; h > g; g++) i = d[g], j = e[g], f.push({
                        x: i.x + j.x * a,
                        y: i.y + j.y * a
                    });
                else f = d + e * a;
                k.setAttr(b, f)
            }
        },
        _addListeners: function() {
            var a = this;
            this.tween.onPlay = function() {
                a.anim.start()
            }, this.tween.onReverse = function() {
                a.anim.start()
            }, this.tween.onPause = function() {
                a.anim.stop()
            }, this.tween.onFinish = function() {
                a.onFinish && a.onFinish()
            }
        },
        play: function() {
            return this.tween.play(), this
        },
        reverse: function() {
            return this.tween.reverse(), this
        },
        reset: function() {
            var a = this.node;
            return this.tween.reset(), (a.getLayer() || a.getLayers()).draw(), this
        },
        seek: function(a) {
            var b = this.node;
            return this.tween.seek(1e3 * a), (b.getLayer() || b.getLayers()).draw(), this
        },
        pause: function() {
            return this.tween.pause(), this
        },
        finish: function() {
            var a = this.node;
            return this.tween.finish(), (a.getLayer() || a.getLayers()).draw(), this
        },
        destroy: function() {
            var a, b = this.node._id,
                c = this._id,
                d = Konva.Tween.tweens[b];
            this.pause();
            for (a in d) delete Konva.Tween.tweens[b][a];
            delete Konva.Tween.attrs[b][c]
        }
    };
    var f = function(a, b, c, d, e, f, g) {
        this.prop = a, this.propFunc = b, this.begin = d, this._pos = d, this.duration = f, this._change = 0, this.prevPos = 0, this.yoyo = g, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = c, this._change = e - this.begin, this.pause()
    };
    f.prototype = {
        fire: function(a) {
            var b = this[a];
            b && b()
        },
        setTime: function(a) {
            a > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : 0 > a ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = a, this.update())
        },
        getTime: function() {
            return this._time
        },
        setPosition: function(a) {
            this.prevPos = this._pos, this.propFunc(a), this._pos = a
        },
        getPosition: function(a) {
            return void 0 === a && (a = this._time), this.func(a, this.begin, this._change, this.duration)
        },
        play: function() {
            this.state = c, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay")
        },
        reverse: function() {
            this.state = d, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse")
        },
        seek: function(a) {
            this.pause(), this._time = a, this.update(), this.fire("onSeek")
        },
        reset: function() {
            this.pause(), this._time = 0, this.update(), this.fire("onReset")
        },
        finish: function() {
            this.pause(), this._time = this.duration, this.update(), this.fire("onFinish")
        },
        update: function() {
            this.setPosition(this.getPosition(this._time))
        },
        onEnterFrame: function() {
            var a = this.getTimer() - this._startTime;
            this.state === c ? this.setTime(a) : this.state === d && this.setTime(this.duration - a)
        },
        pause: function() {
            this.state = b, this.fire("onPause")
        },
        getTimer: function() {
            return (new Date).getTime()
        }
    }, Konva.Easings = {
        BackEaseIn: function(a, b, c, d) {
            var e = 1.70158;
            return c * (a /= d) * a * ((e + 1) * a - e) + b
        },
        BackEaseOut: function(a, b, c, d) {
            var e = 1.70158;
            return c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b
        },
        BackEaseInOut: function(a, b, c, d) {
            var e = 1.70158;
            return (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b
        },
        ElasticEaseIn: function(a, b, c, d, e, f) {
            var g = 0;
            return 0 === a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), -(e * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - g) * 2 * Math.PI / f)) + b)
        },
        ElasticEaseOut: function(a, b, c, d, e, f) {
            var g = 0;
            return 0 === a ? b : 1 == (a /= d) ? b + c : (f || (f = .3 * d), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), e * Math.pow(2, -10 * a) * Math.sin((a * d - g) * 2 * Math.PI / f) + c + b)
        },
        ElasticEaseInOut: function(a, b, c, d, e, f) {
            var g = 0;
            return 0 === a ? b : 2 == (a /= d / 2) ? b + c : (f || (f = d * .3 * 1.5), !e || e < Math.abs(c) ? (e = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / e), 1 > a ? -.5 * e * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - g) * 2 * Math.PI / f) + b : .5 * e * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - g) * 2 * Math.PI / f) + c + b)
        },
        BounceEaseOut: function(a, b, c, d) {
            return (a /= d) < 1 / 2.75 ? c * 7.5625 * a * a + b : 2 / 2.75 > a ? c * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : 2.5 / 2.75 > a ? c * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
        },
        BounceEaseIn: function(a, b, c, d) {
            return c - Konva.Easings.BounceEaseOut(d - a, 0, c, d) + b
        },
        BounceEaseInOut: function(a, b, c, d) {
            return d / 2 > a ? .5 * Konva.Easings.BounceEaseIn(2 * a, 0, c, d) + b : .5 * Konva.Easings.BounceEaseOut(2 * a - d, 0, c, d) + .5 * c + b
        },
        EaseIn: function(a, b, c, d) {
            return c * (a /= d) * a + b
        },
        EaseOut: function(a, b, c, d) {
            return -c * (a /= d) * (a - 2) + b
        },
        EaseInOut: function(a, b, c, d) {
            return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
        },
        StrongEaseIn: function(a, b, c, d) {
            return c * (a /= d) * a * a * a * a + b
        },
        StrongEaseOut: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * a * a * a + 1) + b
        },
        StrongEaseInOut: function(a, b, c, d) {
            return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
        },
        Linear: function(a, b, c, d) {
            return c * a / d + b
        }
    }
}(),
function() {
    Konva.DD = {
        anim: new Konva.Animation,
        isDragging: !1,
        offset: {
            x: 0,
            y: 0
        },
        node: null,
        _drag: function(a) {
            var b = Konva.DD,
                c = b.node;
            if (c) {
                var d = c.getStage().getPointerPosition(),
                    e = c.getDragBoundFunc(),
                    f = {
                        x: d.x - b.offset.x,
                        y: d.y - b.offset.y
                    };
                void 0 !== e && (f = e.call(c, f, a)), c.setAbsolutePosition(f), b.isDragging || (b.isDragging = !0, c.fire("dragstart", a, !0)), c.fire("dragmove", a, !0)
            }
        },
        _endDragBefore: function(a) {
            var b, c, d = Konva.DD,
                e = d.node;
            e && (b = e.nodeType, c = e.getLayer(), d.anim.stop(), d.isDragging && (d.isDragging = !1, a && (a.dragEndNode = e)), delete d.node, (c || e).draw())
        },
        _endDragAfter: function(a) {
            a = a || {};
            var b = a.dragEndNode;
            a && b && b.fire("dragend", a, !0)
        }
    }, Konva.Node.prototype.startDrag = function() {
        var a = Konva.DD,
            b = this.getStage(),
            c = this.getLayer(),
            d = b.getPointerPosition(),
            e = (this.getTransform().getTranslation(), this.getAbsolutePosition());
        d && (a.node && a.node.stopDrag(), a.node = this, a.offset.x = d.x - e.x, a.offset.y = d.y - e.y, a.anim.setLayers(c || this.getLayers()), a.anim.start())
    }, Konva.Node.prototype.stopDrag = function() {
        var a = Konva.DD,
            b = {};
        a._endDragBefore(b), a._endDragAfter(b)
    }, Konva.Node.prototype.setDraggable = function(a) {
        this._setAttr("draggable", a), this._dragChange()
    };
    var a = Konva.Node.prototype.destroy;
    Konva.Node.prototype.destroy = function() {
        var b = Konva.DD;
        b.node && b.node._id === this._id && this.stopDrag(), a.call(this)
    }, Konva.Node.prototype.isDragging = function() {
        var a = Konva.DD;
        return a.node && a.node._id === this._id && a.isDragging
    }, Konva.Node.prototype._listenDrag = function() {
        this._dragCleanup();
        var a = this;
        this.on("mousedown.kinetic touchstart.kinetic", function(b) {
            Konva.DD.node || a.startDrag(b)
        })
    }, Konva.Node.prototype._dragChange = function() {
        if (this.attrs.draggable) this._listenDrag();
        else {
            this._dragCleanup();
            var a = this.getStage(),
                b = Konva.DD;
            a && b.node && b.node._id === this._id && b.node.stopDrag()
        }
    }, Konva.Node.prototype._dragCleanup = function() {
        this.off("mousedown.kinetic"), this.off("touchstart.kinetic")
    }, Konva.Node.addGetterSetter(Konva.Node, "dragBoundFunc"), Konva.Node.addGetter(Konva.Node, "draggable", !1), Konva.Node.prototype.isDraggable = Konva.Node.prototype.getDraggable;
    var b = document.getElementsByTagName("html")[0];
    b.addEventListener("mouseup", Konva.DD._endDragBefore, !0), b.addEventListener("touchend", Konva.DD._endDragBefore, !0), b.addEventListener("mouseup", Konva.DD._endDragAfter, !1), b.addEventListener("touchend", Konva.DD._endDragAfter, !1)
}(),
function() {
    Konva.Util.addMethods(Konva.Container, {
        _containerInit: function(a) {
            this.children = new Konva.Collection, Konva.Node.call(this, a)
        },
        getChildren: function() {
            return this.children
        },
        hasChildren: function() {
            return this.getChildren().length > 0
        },
        removeChildren: function() {
            for (var a, b = this.children; b.length > 0;) {
                var a = b[0];
                a.hasChildren() && a.removeChildren(), a.remove()
            }
            return this
        },
        destroyChildren: function() {
            for (var a = this.children; a.length > 0;) a[0].destroy();
            return this
        },
        add: function(a) {
            var b = (Konva.Global, this.children);
            return a.index = b.length, a.parent = this, b.push(a), this._fire("add", {
                child: a
            }), this
        },
        destroy: function() {
            this.hasChildren() && this.destroyChildren(), Konva.Node.prototype.destroy.call(this)
        },
        get: function(a) {
            var b = new Konva.Collection;
            if ("#" === a.charAt(0)) {
                var c = this._getNodeById(a.slice(1));
                c && b.push(c)
            } else if ("." === a.charAt(0)) {
                var d = this._getNodesByName(a.slice(1));
                Konva.Collection.apply(b, d)
            } else {
                for (var e = [], f = this.getChildren(), g = f.length, h = 0; g > h; h++) e = e.concat(f[h]._get(a));
                Konva.Collection.apply(b, e)
            }
            return b
        },
        _getNodeById: function(a) {
            var b = (this.getStage(), Konva.Global),
                c = b.ids[a];
            return void 0 !== c && this.isAncestorOf(c) ? c : null
        },
        _getNodesByName: function(a) {
            var b = Konva.Global,
                c = b.names[a] || [];
            return this._getDescendants(c)
        },
        _get: function(a) {
            for (var b = Konva.Node.prototype._get.call(this, a), c = this.getChildren(), d = c.length, e = 0; d > e; e++) b = b.concat(c[e]._get(a));
            return b
        },
        toObject: function() {
            var a = Konva.Node.prototype.toObject.call(this);
            a.children = [];
            for (var b = this.getChildren(), c = b.length, d = 0; c > d; d++) {
                var e = b[d];
                a.children.push(e.toObject())
            }
            return a
        },
        _getDescendants: function(a) {
            for (var b = [], c = a.length, d = 0; c > d; d++) {
                var e = a[d];
                this.isAncestorOf(e) && b.push(e)
            }
            return b
        },
        isAncestorOf: function(a) {
            for (var b = a.getParent(); b;) {
                if (b._id === this._id) return !0;
                b = b.getParent()
            }
            return !1
        },
        clone: function(a) {
            var b = Konva.Node.prototype.clone.call(this, a);
            return this.getChildren().each(function(a) {
                b.add(a.clone())
            }), b
        },
        getAllIntersections: function() {
            for (var a = Konva.Util._getXY(Array.prototype.slice.call(arguments)), b = [], c = this.get("Shape"), d = c.length, e = 0; d > e; e++) {
                var f = c[e];
                f.isVisible() && f.intersects(a) && b.push(f)
            }
            return b
        },
        _setChildrenIndices: function() {
            for (var a = this.children, b = a.length, c = 0; b > c; c++) a[c].index = c
        },
        drawScene: function(a) {
            var b, c, d, e = this.getLayer(),
                f = !!this.getClipFunc();
            if (!a && e && (a = e.getCanvas()), this.isVisible()) {
                for (f && a._clip(this), b = this.children, d = b.length, c = 0; d > c; c++) b[c].drawScene(a);
                f && a.getContext().restore()
            }
            return this
        },
        drawHit: function() {
            var a, b = !!this.getClipFunc() && "Stage" !== this.nodeType,
                c = 0,
                d = 0,
                e = [];
            if (this.shouldDrawHit()) {
                for (b && (a = this.getLayer().hitCanvas, a._clip(this)), e = this.children, d = e.length, c = 0; d > c; c++) e[c].drawHit();
                b && a.getContext().restore()
            }
            return this
        }
    }), Konva.Util.extend(Konva.Container, Konva.Node), Konva.Node.addGetterSetter(Konva.Container, "clipFunc")
}(),
function() {
    function a(a) {
        a.fill()
    }

    function b(a) {
        a.stroke()
    }

    function c(a) {
        a.fill()
    }

    function d(a) {
        a.stroke()
    }
    Konva.Util.addMethods(Konva.Shape, {
        _initShape: function(e) {
            this.nodeType = "Shape", this._fillFunc = a, this._strokeFunc = b, this._fillFuncHit = c, this._strokeFuncHit = d;
            for (var f, g = Konva.Global.shapes;;)
                if (f = Konva.Util.getRandomColor(), f && !(f in g)) break;
            this.colorKey = f, g[f] = this, this.createAttrs(), Konva.Node.call(this, e)
        },
        hasChildren: function() {
            return !1
        },
        getChildren: function() {
            return []
        },
        getContext: function() {
            return this.getLayer().getContext()
        },
        getCanvas: function() {
            return this.getLayer().getCanvas()
        },
        hasShadow: function() {
            return !!(this.getShadowColor() || this.getShadowBlur() || this.getShadowOffsetX() || this.getShadowOffsetY())
        },
        hasFill: function() {
            return !!(this.getFill() || this.getFillPatternImage() || this.getFillLinearGradientColorStops() || this.getFillRadialGradientColorStops())
        },
        _get: function(a) {
            return this.className === a || this.nodeType === a ? [this] : []
        },
        intersects: function() {
            var a = Konva.Util._getXY(Array.prototype.slice.call(arguments)),
                b = this.getStage(),
                c = b.hitCanvas;
            c.clear(), this.drawScene(c);
            var d = c.context.getImageData(0 | a.x, 0 | a.y, 1, 1).data;
            return d[3] > 0
        },
        enableFill: function() {
            return this._setAttr("fillEnabled", !0), this
        },
        disableFill: function() {
            return this._setAttr("fillEnabled", !1), this
        },
        enableStroke: function() {
            return this._setAttr("strokeEnabled", !0), this
        },
        disableStroke: function() {
            return this._setAttr("strokeEnabled", !1), this
        },
        enableStrokeScale: function() {
            return this._setAttr("strokeScaleEnabled", !0), this
        },
        disableStrokeScale: function() {
            return this._setAttr("strokeScaleEnabled", !1), this
        },
        enableShadow: function() {
            return this._setAttr("shadowEnabled", !0), this
        },
        disableShadow: function() {
            return this._setAttr("shadowEnabled", !1), this
        },
        enableDashArray: function() {
            return this._setAttr("dashArrayEnabled", !0), this
        },
        disableDashArray: function() {
            return this._setAttr("dashArrayEnabled", !1), this
        },
        destroy: function() {
            return Konva.Node.prototype.destroy.call(this), delete Konva.Global.shapes[this.colorKey], this
        },
        drawScene: function(a) {
            a = a || this.getLayer().getCanvas();
            var b = this.getDrawFunc(),
                c = a.getContext();
            return b && this.isVisible() && (c.save(), a._applyOpacity(this), a._applyLineJoin(this), a._applyAncestorTransforms(this), b.call(this, a), c.restore()), this
        },
        drawHit: function() {
            var a = this.getAttrs(),
                b = a.drawHitFunc || a.drawFunc,
                c = this.getLayer().hitCanvas,
                d = c.getContext();
            return b && this.shouldDrawHit() && (d.save(), c._applyLineJoin(this), c._applyAncestorTransforms(this), b.call(this, c), d.restore()), this
        },
        _setDrawFuncs: function() {
            !this.attrs.drawFunc && this.drawFunc && this.setDrawFunc(this.drawFunc), !this.attrs.drawHitFunc && this.drawHitFunc && this.setDrawHitFunc(this.drawHitFunc)
        }
    }), Konva.Util.extend(Konva.Shape, Konva.Node), Konva.Node.addColorGetterSetter(Konva.Shape, "stroke"), Konva.Node.addGetterSetter(Konva.Shape, "lineJoin"), Konva.Node.addGetterSetter(Konva.Shape, "lineCap"), Konva.Node.addGetterSetter(Konva.Shape, "strokeWidth"), Konva.Node.addGetterSetter(Konva.Shape, "drawFunc"), Konva.Node.addGetterSetter(Konva.Shape, "drawHitFunc"), Konva.Node.addGetterSetter(Konva.Shape, "dashArray"), Konva.Node.addColorGetterSetter(Konva.Shape, "shadowColor"), Konva.Node.addGetterSetter(Konva.Shape, "shadowBlur"), Konva.Node.addGetterSetter(Konva.Shape, "shadowOpacity"), Konva.Node.addGetterSetter(Konva.Shape, "fillPatternImage"), Konva.Node.addColorGetterSetter(Konva.Shape, "fill"), Konva.Node.addGetterSetter(Konva.Shape, "fillPatternX"), Konva.Node.addGetterSetter(Konva.Shape, "fillPatternY"), Konva.Node.addGetterSetter(Konva.Shape, "fillLinearGradientColorStops"), Konva.Node.addGetterSetter(Konva.Shape, "fillRadialGradientStartRadius"), Konva.Node.addGetterSetter(Konva.Shape, "fillRadialGradientEndRadius"), Konva.Node.addGetterSetter(Konva.Shape, "fillRadialGradientColorStops"), Konva.Node.addGetterSetter(Konva.Shape, "fillPatternRepeat"), Konva.Node.addGetterSetter(Konva.Shape, "fillEnabled", !0), Konva.Node.addGetterSetter(Konva.Shape, "strokeEnabled", !0), Konva.Node.addGetterSetter(Konva.Shape, "shadowEnabled", !0), Konva.Node.addGetterSetter(Konva.Shape, "dashArrayEnabled", !0), Konva.Node.addGetterSetter(Konva.Shape, "fillPriority", "color"), Konva.Node.addGetterSetter(Konva.Shape, "strokeScaleEnabled", !0), Konva.Node.addPointGetterSetter(Konva.Shape, "fillPatternOffset", 0), Konva.Node.addPointGetterSetter(Konva.Shape, "fillPatternScale", 1), Konva.Node.addPointGetterSetter(Konva.Shape, "fillLinearGradientStartPoint", 0), Konva.Node.addPointGetterSetter(Konva.Shape, "fillLinearGradientEndPoint", 0), Konva.Node.addPointGetterSetter(Konva.Shape, "fillRadialGradientStartPoint", 0), Konva.Node.addPointGetterSetter(Konva.Shape, "fillRadialGradientEndPoint", 0), Konva.Node.addPointGetterSetter(Konva.Shape, "shadowOffset", 0), Konva.Node.addRotationGetterSetter(Konva.Shape, "fillPatternRotation", 0)
}(),
function() {
    function a(a, b) {
        a.content.addEventListener(b, function(c) {
            c.preventDefault(), a[x + b](c)
        }, !1)
    }
    var b = "Stage",
        c = "string",
        d = "px",
        e = "mouseout",
        f = "mouseleave",
        g = "mouseover",
        h = "mouseenter",
        i = "mousemove",
        j = "mousedown",
        k = "mouseup",
        l = "click",
        m = "dblclick",
        n = "touchstart",
        o = "touchend",
        p = "tap",
        q = "dbltap",
        r = "touchmove",
        s = "div",
        t = "relative",
        u = "inline-block",
        v = "kineticjs-content",
        w = " ",
        x = "_",
        y = "container",
        z = "",
        A = [j, i, k, e, n, r, o],
        B = A.length;
    Konva.Util.addMethods(Konva.Stage, {
        _initStage: function(a) {
            this.createAttrs(), Konva.Container.call(this, a), this.nodeType = b, this.dblClickWindow = 400, this._id = Konva.Global.idCounter++, this._buildDOM(), this._bindContentEvents(), Konva.Global.stages.push(this)
        },
        setContainer: function(a) {
            return typeof a === c && (a = document.getElementById(a)), this._setAttr(y, a), this
        },
        draw: function() {
            var a, b, c = this.getChildren(),
                d = c.length;
            for (a = 0; d > a; a++) b = c[a], b.getClearBeforeDraw() && (b.getCanvas().clear(), b.getHitCanvas().clear());
            return Konva.Node.prototype.draw.call(this), this
        },
        setHeight: function(a) {
            return Konva.Node.prototype.setHeight.call(this, a), this._resizeDOM(), this
        },
        setWidth: function(a) {
            return Konva.Node.prototype.setWidth.call(this, a), this._resizeDOM(), this
        },
        clear: function() {
            var a, b = this.children,
                c = b.length;
            for (a = 0; c > a; a++) b[a].clear();
            return this
        },
        destroy: function() {
            var a = this.content;
            Konva.Container.prototype.destroy.call(this), a && Konva.Util._isInDocument(a) && this.getContainer().removeChild(a)
        },
        getMousePosition: function() {
            return this.mousePos
        },
        getTouchPosition: function() {
            return this.touchPos
        },
        getPointerPosition: function() {
            return this.getTouchPosition() || this.getMousePosition()
        },
        getStage: function() {
            return this
        },
        getContent: function() {
            return this.content
        },
        toDataURL: function(a) {
            function b(e) {
                var f = i[e],
                    j = f.toDataURL(),
                    k = new Image;
                k.onload = function() {
                    h.drawImage(k, 0, 0), e < i.length - 1 ? b(e + 1) : a.callback(g.toDataURL(c, d))
                }, k.src = j
            }
            a = a || {};
            var c = a.mimeType || null,
                d = a.quality || null,
                e = a.x || 0,
                f = a.y || 0,
                g = new Konva.SceneCanvas({
                    width: a.width || this.getWidth(),
                    height: a.height || this.getHeight(),
                    pixelRatio: 1
                }),
                h = g.getContext(),
                i = this.children;
            (e || f) && h.translate(-1 * e, -1 * f), b(0)
        },
        toImage: function(a) {
            var b = a.callback;
            a.callback = function(a) {
                Konva.Util._getImage(a, function(a) {
                    b(a)
                })
            }, this.toDataURL(a)
        },
        getIntersection: function() {
            var a, b, c = Konva.Util._getXY(Array.prototype.slice.call(arguments)),
                d = this.getChildren(),
                e = d.length,
                f = e - 1;
            for (a = f; a >= 0; a--)
                if (b = d[a].getIntersection(c)) return b;
            return null
        },
        _resizeDOM: function() {
            if (this.content) {
                var a, b = this.getWidth(),
                    c = this.getHeight(),
                    e = this.getChildren(),
                    f = e.length;
                for (this.content.style.width = b + d, this.content.style.height = c + d, this.bufferCanvas.setSize(b, c, 1), this.hitCanvas.setSize(b, c), a = 0; f > a; a++) layer = e[a], layer.getCanvas().setSize(b, c), layer.hitCanvas.setSize(b, c), layer.draw()
            }
        },
        add: function(a) {
            return Konva.Container.prototype.add.call(this, a), a.canvas.setSize(this.attrs.width, this.attrs.height), a.hitCanvas.setSize(this.attrs.width, this.attrs.height), a.draw(), this.content.appendChild(a.canvas.element), this
        },
        getParent: function() {
            return null
        },
        getLayer: function() {
            return null
        },
        getLayers: function() {
            return this.getChildren()
        },
        _setPointerPosition: function(a) {
            a || (a = window.event), this._setMousePosition(a), this._setTouchPosition(a)
        },
        _bindContentEvents: function() {
            var b;
            for (b = 0; B > b; b++) a(this, A[b])
        },
        _mouseout: function(a) {
            this._setPointerPosition(a);
            var b = Konva.Global,
                c = this.targetShape;
            c && !b.isDragging() && (c._fireAndBubble(e, a), c._fireAndBubble(f, a), this.targetShape = null), this.mousePos = void 0
        },
        _mousemove: function(a) {
            this._setPointerPosition(a);
            var b, c = Konva.Global,
                d = Konva.DD,
                j = this.getIntersection(this.getPointerPosition());
            j ? (b = j.shape, b && (c.isDragging() || 255 !== j.pixel[3] || this.targetShape && this.targetShape._id === b._id ? b._fireAndBubble(i, a) : (this.targetShape && (this.targetShape._fireAndBubble(e, a, b), this.targetShape._fireAndBubble(f, a, b)), b._fireAndBubble(g, a, this.targetShape), b._fireAndBubble(h, a, this.targetShape), this.targetShape = b))) : this.targetShape && !c.isDragging() && (this.targetShape._fireAndBubble(e, a), this.targetShape._fireAndBubble(f, a), this.targetShape = null), d && d._drag(a)
        },
        _mousedown: function(a) {
            this._setPointerPosition(a);
            var b, c = Konva.Global,
                d = this.getIntersection(this.getPointerPosition());
            d && d.shape && (b = d.shape, this.clickStart = !0, this.clickStartShape = b, b._fireAndBubble(j, a)), this.isDraggable() && !c.isDragReady() && this.startDrag(a)
        },
        _mouseup: function(a) {
            this._setPointerPosition(a);
            var b, c = this,
                d = Konva.Global,
                e = this.getIntersection(this.getPointerPosition());
            e && e.shape && (b = e.shape, b._fireAndBubble(k, a), this.clickStart && (d.isDragging() || b._id !== this.clickStartShape._id || (b._fireAndBubble(l, a), this.inDoubleClickWindow && b._fireAndBubble(m, a), this.inDoubleClickWindow = !0, setTimeout(function() {
                c.inDoubleClickWindow = !1
            }, this.dblClickWindow)))), this.clickStart = !1
        },
        _touchstart: function(a) {
            this._setPointerPosition(a);
            var b, c = Konva.Global,
                d = this.getIntersection(this.getPointerPosition());
            d && d.shape && (b = d.shape, this.tapStart = !0, this.tapStartShape = b, b._fireAndBubble(n, a)), this.isDraggable() && !c.isDragReady() && this.startDrag(a)
        },
        _touchend: function(a) {
            this._setPointerPosition(a);
            var b, c = this,
                d = Konva.Global,
                e = this.getIntersection(this.getPointerPosition());
            e && e.shape && (b = e.shape, b._fireAndBubble(o, a), this.tapStart && (d.isDragging() || b._id !== this.tapStartShape._id || (b._fireAndBubble(p, a), this.inDoubleClickWindow && b._fireAndBubble(q, a), this.inDoubleClickWindow = !0, setTimeout(function() {
                c.inDoubleClickWindow = !1
            }, this.dblClickWindow)))), this.tapStart = !1
        },
        _touchmove: function(a) {
            this._setPointerPosition(a);
            var b, c = Konva.DD,
                d = this.getIntersection(this.getPointerPosition());
            d && d.shape && (b = d.shape, b._fireAndBubble(r, a)), c && c._drag(a)
        },
        _setMousePosition: function(a) {
            var b = a.clientX - this._getContentPosition().left,
                c = a.clientY - this._getContentPosition().top;
            this.mousePos = {
                x: b,
                y: c
            }
        },
        _setTouchPosition: function(a) {
            var b, c, d;
            void 0 !== a.touches && 1 === a.touches.length && (b = a.touches[0], c = b.clientX - this._getContentPosition().left, d = b.clientY - this._getContentPosition().top, this.touchPos = {
                x: c,
                y: d
            })
        },
        _getContentPosition: function() {
            var a = this.content.getBoundingClientRect();
            return {
                top: a.top,
                left: a.left
            }
        },
        _buildDOM: function() {
            var a = this.getContainer();
            a.innerHTML = z, this.content = document.createElement(s), this.content.style.position = t, this.content.style.display = u, this.content.className = v, a.appendChild(this.content), this.bufferCanvas = new Konva.SceneCanvas, this.hitCanvas = new Konva.HitCanvas, this._resizeDOM()
        },
        _onContent: function(a, b) {
            var c, d, e = a.split(w),
                f = e.length;
            for (c = 0; f > c; c++) d = e[c], this.content.addEventListener(d, b, !1)
        }
    }), Konva.Util.extend(Konva.Stage, Konva.Container), Konva.Node.addGetter(Konva.Stage, "container")
}(),
function() {
    var a = "#";
    Konva.Util.addMethods(Konva.Layer, {
        _initLayer: function(a) {
            this.nodeType = "Layer", this.createAttrs(), this.canvas = new Konva.SceneCanvas, this.canvas.getElement().style.position = "absolute", this.hitCanvas = new Konva.HitCanvas, Konva.Container.call(this, a)
        },
        getIntersection: function() {
            var b, c, d, e = Konva.Util._getXY(Array.prototype.slice.call(arguments));
            if (this.isVisible() && this.isListening()) {
                if (b = this.hitCanvas.context.getImageData(0 | e.x, 0 | e.y, 1, 1).data, 255 === b[3]) return c = Konva.Util._rgbToHex(b[0], b[1], b[2]), d = Konva.Global.shapes[a + c], {
                    shape: d,
                    pixel: b
                };
                if (b[0] > 0 || b[1] > 0 || b[2] > 0 || b[3] > 0) return {
                    pixel: b
                }
            }
            return null
        },
        drawScene: function(a) {
            return a = a || this.getCanvas(), this.getClearBeforeDraw() && a.clear(), Konva.Container.prototype.drawScene.call(this, a), this
        },
        drawHit: function() {
            var a = this.getLayer();
            return a && a.getClearBeforeDraw() && a.getHitCanvas().clear(), Konva.Container.prototype.drawHit.call(this), this
        },
        getCanvas: function() {
            return this.canvas
        },
        getHitCanvas: function() {
            return this.hitCanvas
        },
        getContext: function() {
            return this.getCanvas().getContext()
        },
        clear: function() {
            return this.getCanvas().clear(), this
        },
        setVisible: function(a) {
            return Konva.Node.prototype.setVisible.call(this, a), a ? (this.getCanvas().element.style.display = "block", this.hitCanvas.element.style.display = "block") : (this.getCanvas().element.style.display = "none", this.hitCanvas.element.style.display = "none"), this
        },
        setZIndex: function(a) {
            Konva.Node.prototype.setZIndex.call(this, a);
            var b = this.getStage();
            return b && (b.content.removeChild(this.getCanvas().element), a < b.getChildren().length - 1 ? b.content.insertBefore(this.getCanvas().element, b.getChildren()[a + 1].getCanvas().element) : b.content.appendChild(this.getCanvas().element)), this
        },
        moveToTop: function() {
            Konva.Node.prototype.moveToTop.call(this);
            var a = this.getStage();
            a && (a.content.removeChild(this.getCanvas().element), a.content.appendChild(this.getCanvas().element))
        },
        moveUp: function() {
            if (Konva.Node.prototype.moveUp.call(this)) {
                var a = this.getStage();
                a && (a.content.removeChild(this.getCanvas().element), this.index < a.getChildren().length - 1 ? a.content.insertBefore(this.getCanvas().element, a.getChildren()[this.index + 1].getCanvas().element) : a.content.appendChild(this.getCanvas().element))
            }
        },
        moveDown: function() {
            if (Konva.Node.prototype.moveDown.call(this)) {
                var a = this.getStage();
                if (a) {
                    var b = a.getChildren();
                    a.content.removeChild(this.getCanvas().element), a.content.insertBefore(this.getCanvas().element, b[this.index + 1].getCanvas().element)
                }
            }
        },
        moveToBottom: function() {
            if (Konva.Node.prototype.moveToBottom.call(this)) {
                var a = this.getStage();
                if (a) {
                    var b = a.getChildren();
                    a.content.removeChild(this.getCanvas().element), a.content.insertBefore(this.getCanvas().element, b[1].getCanvas().element)
                }
            }
        },
        getLayer: function() {
            return this
        },
        remove: function() {
            var a = this.getStage(),
                b = this.getCanvas(),
                c = b.element;
            return Konva.Node.prototype.remove.call(this), a && b && Konva.Util._isInDocument(c) && a.content.removeChild(c), this
        }
    }), Konva.Util.extend(Konva.Layer, Konva.Container), Konva.Node.addGetterSetter(Konva.Layer, "clearBeforeDraw", !0)
}(),
function() {
    Konva.Util.addMethods(Konva.Group, {
        _initGroup: function(a) {
            this.nodeType = "Group", this.createAttrs(), Konva.Container.call(this, a)
        }
    }), Konva.Util.extend(Konva.Group, Konva.Container)
}(),
function() {
    Konva.Rect = function(a) {
        this._initRect(a)
    }, Konva.Rect.prototype = {
        _initRect: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = "Rect", this._setDrawFuncs()
        },
        drawFunc: function(a) {
            var b = a.getContext(),
                c = this.getCornerRadius(),
                d = this.getWidth(),
                e = this.getHeight();
            b.beginPath(), c ? (b.moveTo(c, 0), b.lineTo(d - c, 0), b.arc(d - c, c, c, 3 * Math.PI / 2, 0, !1), b.lineTo(d, e - c), b.arc(d - c, e - c, c, 0, Math.PI / 2, !1), b.lineTo(c, e), b.arc(c, e - c, c, Math.PI / 2, Math.PI, !1), b.lineTo(0, c), b.arc(c, c, c, Math.PI, 3 * Math.PI / 2, !1)) : b.rect(0, 0, d, e), b.closePath(), a.fillStroke(this)
        }
    }, Konva.Util.extend(Konva.Rect, Konva.Shape), Konva.Node.addGetterSetter(Konva.Rect, "cornerRadius", 0)
}(),
function() {
    var a = 2 * Math.PI - 1e-4,
        b = "Circle";
    Konva.Circle = function(a) {
        this._initCircle(a)
    }, Konva.Circle.prototype = {
        _initCircle: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = b, this._setDrawFuncs()
        },
        drawFunc: function(b) {
            var c = b.getContext();
            c.beginPath(), c.arc(0, 0, this.getRadius(), 0, a, !1), c.closePath(), b.fillStroke(this)
        },
        getWidth: function() {
            return 2 * this.getRadius()
        },
        getHeight: function() {
            return 2 * this.getRadius()
        },
        setWidth: function(a) {
            Konva.Node.prototype.setWidth.call(this, a), this.setRadius(a / 2)
        },
        setHeight: function(a) {
            Konva.Node.prototype.setHeight.call(this, a), this.setRadius(a / 2)
        }
    }, Konva.Util.extend(Konva.Circle, Konva.Shape), Konva.Node.addGetterSetter(Konva.Circle, "radius", 0)
}(),
function() {
    var a = 2 * Math.PI - 1e-4,
        b = "Ellipse";
    Konva.Ellipse = function(a) {
        this._initEllipse(a)
    }, Konva.Ellipse.prototype = {
        _initEllipse: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = b, this._setDrawFuncs()
        },
        drawFunc: function(b) {
            var c = b.getContext(),
                d = this.getRadius();
            c.beginPath(), c.save(), d.x !== d.y && c.scale(1, d.y / d.x), c.arc(0, 0, d.x, 0, a, !1), c.restore(), c.closePath(), b.fillStroke(this)
        },
        getWidth: function() {
            return 2 * this.getRadius().x
        },
        getHeight: function() {
            return 2 * this.getRadius().y
        },
        setWidth: function(a) {
            Konva.Node.prototype.setWidth.call(this, a), this.setRadius({
                x: a / 2
            })
        },
        setHeight: function(a) {
            Konva.Node.prototype.setHeight.call(this, a), this.setRadius({
                y: a / 2
            })
        }
    }, Konva.Util.extend(Konva.Ellipse, Konva.Shape), Konva.Node.addPointGetterSetter(Konva.Ellipse, "radius", 0)
}(),
function() {
    Konva.Wedge = function(a) {
        this._initWedge(a)
    }, Konva.Wedge.prototype = {
        _initWedge: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = "Wedge", this._setDrawFuncs()
        },
        drawFunc: function(a) {
            var b = a.getContext();
            b.beginPath(), b.arc(0, 0, this.getRadius(), 0, this.getAngle(), this.getClockwise()), b.lineTo(0, 0), b.closePath(), a.fillStroke(this)
        }
    }, Konva.Util.extend(Konva.Wedge, Konva.Shape), Konva.Node.addGetterSetter(Konva.Wedge, "radius", 0), Konva.Node.addRotationGetterSetter(Konva.Wedge, "angle", 0), Konva.Node.addGetterSetter(Konva.Wedge, "clockwise", !1)
}(),
function() {
    var a = "Image",
        b = "crop",
        c = "set";
    Konva.Image = function(a) {
        this._initImage(a)
    }, Konva.Image.prototype = {
        _initImage: function(b) {
            Konva.Shape.call(this, b), this.className = a, this._setDrawFuncs()
        },
        drawFunc: function(a) {
            var b, c, d, e, f, g, h = this.getWidth(),
                i = this.getHeight(),
                j = this,
                k = a.getContext(),
                l = this.getCrop();
            this.getFilter() && this._applyFilter && (this.applyFilter(), this._applyFilter = !1), g = this.filterCanvas ? this.filterCanvas.getElement() : this.getImage(), k.beginPath(), k.rect(0, 0, h, i), k.closePath(), a.fillStroke(this), g && (l ? (c = l.x || 0, d = l.y || 0, e = l.width || 0, f = l.height || 0, b = [g, c, d, e, f, 0, 0, h, i]) : b = [g, 0, 0, h, i], this.hasShadow() ? a.applyShadow(this, function() {
                j._drawImage(k, b)
            }) : this._drawImage(k, b))
        },
        drawHitFunc: function(a) {
            var b = this.getWidth(),
                c = this.getHeight(),
                d = this.imageHitRegion,
                e = a.getContext();
            d ? (e.drawImage(d, 0, 0, b, c), e.beginPath(), e.rect(0, 0, b, c), e.closePath(), a.stroke(this)) : (e.beginPath(), e.rect(0, 0, b, c), e.closePath(), a.fillStroke(this))
        },
        applyFilter: function() {
            var a, b, c, d = this.getImage(),
                e = this.getWidth(),
                f = this.getHeight(),
                g = this.getFilter();
            a = this.filterCanvas ? this.filterCanvas : this.filterCanvas = new Konva.SceneCanvas({
                width: e,
                height: f
            }), b = a.getContext();
            try {
                this._drawImage(b, [d, 0, 0, e, f]), c = b.getImageData(0, 0, a.getWidth(), a.getHeight()), g.call(this, c), b.putImageData(c, 0, 0)
            } catch (h) {
                this.clearFilter(), Konva.Util.warn("Unable to apply filter. " + h.message)
            }
        },
        clearFilter: function() {
            this.filterCanvas = null, this._applyFilter = !1
        },
        setCrop: function() {
            var a = [].slice.call(arguments),
                c = Konva.Util._getXY(a),
                d = Konva.Util._getSize(a),
                e = Konva.Util._merge(c, d);
            this._setAttr(b, Konva.Util._merge(e, this.getCrop()))
        },
        createImageHitRegion: function(a) {
            var b, c, d, e, f, g = this,
                h = this.getWidth(),
                i = this.getHeight(),
                j = new Konva.Canvas({
                    width: h,
                    height: i
                }),
                k = j.getContext(),
                l = this.getImage();
            k.drawImage(l, 0, 0);
            try {
                for (b = k.getImageData(0, 0, h, i), c = b.data, d = Konva.Util._hexToRgb(this.colorKey), e = 0, f = c.length; f > e; e += 4) c[e + 3] > 0 && (c[e] = d.r, c[e + 1] = d.g, c[e + 2] = d.b);
                Konva.Util._getImage(b, function(b) {
                    g.imageHitRegion = b, a && a()
                })
            } catch (m) {
                Konva.Util.warn("Unable to create image hit region. " + m.message)
            }
        },
        clearImageHitRegion: function() {
            delete this.imageHitRegion
        },
        getWidth: function() {
            var a = this.getImage();
            return this.attrs.width || (a ? a.width : 0)
        },
        getHeight: function() {
            var a = this.getImage();
            return this.attrs.height || (a ? a.height : 0)
        },
        _drawImage: function(a, b) {
            if (5 === b.length) {
            console.log(b[0]);
            a.drawImage(b[0], b[1], b[2]);
            console.log(b[1]);
            
                a.drawImage(b[0], b[1], b[2], b[3], b[4]);
            } else if (9 === b.length) {
            console.log(b);
                a.drawImage(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]);
            }
        }
    }, Konva.Util.extend(Konva.Image, Konva.Shape), Konva.Node.addFilterGetterSetter = function(a, b, c) {
        this.addGetter(a, b, c), this.addFilterSetter(a, b)
    }, Konva.Node.addFilterSetter = function(a, b) {
        var d = c + Konva.Util._capitalize(b);
        a.prototype[d] = function(a) {
            this._setAttr(b, a), this._applyFilter = !0
        }
    }, Konva.Node.addGetterSetter(Konva.Image, "image"), Konva.Node.addGetter(Konva.Image, "crop"), Konva.Node.addFilterGetterSetter(Konva.Image, "filter")
}(),
function() {
    Konva.Polygon = function(a) {
        this._initPolygon(a)
    }, Konva.Polygon.prototype = {
        _initPolygon: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = "Polygon", this._setDrawFuncs()
        },
        drawFunc: function(a) {
            var b = a.getContext(),
                c = this.getPoints(),
                d = c.length;
            b.beginPath(), b.moveTo(c[0].x, c[0].y);
            for (var e = 1; d > e; e++) b.lineTo(c[e].x, c[e].y);
            b.closePath(), a.fillStroke(this)
        }
    }, Konva.Util.extend(Konva.Polygon, Konva.Shape), Konva.Node.addPointsGetterSetter(Konva.Polygon, "points")
}(),
function() {
    function a(a) {
        a.fillText(this.partialText, 0, 0)
    }

    function b(a) {
        a.strokeText(this.partialText, 0, 0)
    }
    var c = "auto",
        d = "Calibri",
        e = "canvas",
        f = "center",
        g = "Change.kinetic",
        h = "2d",
        i = "-",
        j = "",
        k = "left",
        l = "text",
        m = "Text",
        n = "middle",
        o = "normal",
        p = "px ",
        q = " ",
        r = "right",
        s = "word",
        t = "char",
        u = "none",
        v = ["fontFamily", "fontSize", "fontStyle", "padding", "align", "lineHeight", "text", "width", "height", "wrap"],
        w = v.length,
        x = document.createElement(e).getContext(h);
    Konva.Text = function(a) {
        this._initText(a)
    }, Konva.Text.prototype = {
        _initText: function(d) {
            var e = this;
            this.createAttrs(), this.attrs.width = c, this.attrs.height = c, Konva.Shape.call(this, d), this._fillFunc = a, this._strokeFunc = b, this.className = m, this._setDrawFuncs();
            for (var f = 0; w > f; f++) this.on(v[f] + g, e._setTextData);
            this._setTextData()
        },
        drawFunc: function(a) {
            var b = a.getContext(),
                c = this.getPadding(),
                d = (this.getFontStyle(), this.getFontSize(), this.getFontFamily(), this.getTextHeight()),
                e = this.getLineHeight() * d,
                g = this.textArr,
                h = g.length,
                i = this.getWidth();
            b.font = this._getContextFont(), b.textBaseline = n, b.textAlign = k, b.save(), b.translate(c, 0), b.translate(0, c + d / 2);
            for (var j = 0; h > j; j++) {
                var l = g[j],
                    m = l.text,
                    o = l.width;
                b.save(), this.getAlign() === r ? b.translate(i - o - 2 * c, 0) : this.getAlign() === f && b.translate((i - o - 2 * c) / 2, 0), this.partialText = m, a.fillStroke(this), b.restore(), b.translate(0, e)
            }
            b.restore()
        },
        drawHitFunc: function(a) {
            var b = a.getContext(),
                c = this.getWidth(),
                d = this.getHeight();
            b.beginPath(), b.rect(0, 0, c, d), b.closePath(), a.fillStroke(this)
        },
        setText: function(a) {
            var b = Konva.Util._isString(a) ? a : a.toString();
            this._setAttr(l, b)
        },
        getWidth: function() {
            return this.attrs.width === c ? this.getTextWidth() + 2 * this.getPadding() : this.attrs.width
        },
        getHeight: function() {
            return this.attrs.height === c ? this.getTextHeight() * this.textArr.length * this.getLineHeight() + 2 * this.getPadding() : this.attrs.height
        },
        getTextWidth: function() {
            return this.textWidth
        },
        getTextHeight: function() {
            return this.textHeight
        },
        _getTextSize: function(a) {
            var b, c = x,
                d = this.getFontSize();
            return c.save(), c.font = this._getContextFont(), b = c.measureText(a), c.restore(), {
                width: b.width,
                height: parseInt(d, 10)
            }
        },
        _getContextFont: function() {
            return this.getFontStyle() + q + this.getFontSize() + p + this.getFontFamily()
        },
        _addTextLine: function(a, b) {
            return this.textArr.push({
                text: a,
                width: b
            })
        },
        _getTextWidth: function(a) {
            return x.measureText(a).width
        },
        _setTextData: function() {
            var a = this.getText().split("\n"),
                b = +this.getFontSize(),
                d = 0,
                e = this.getLineHeight() * b,
                f = this.attrs.width,
                g = this.attrs.height,
                h = f !== c,
                j = g !== c,
                k = this.getPadding(),
                l = f - 2 * k,
                m = g - 2 * k,
                n = 0,
                o = this.getWrap(),
                r = o !== u,
                s = o !== t && r;
            this.textArr = [], x.save(), x.font = this.getFontStyle() + q + b + p + this.getFontFamily();
            for (var v = 0, w = a.length; w > v; ++v) {
                var y = a[v],
                    z = this._getTextWidth(y);
                if (h && z > l)
                    for (; y.length > 0;) {
                        for (var A = 0, B = y.length, C = "", D = 0; B > A;) {
                            var E = A + B >>> 1,
                                F = y.slice(0, E + 1),
                                G = this._getTextWidth(F);
                            l >= G ? (A = E + 1, C = F, D = G) : B = E
                        }
                        if (!C) break;
                        if (s) {
                            var H = Math.max(C.lastIndexOf(q), C.lastIndexOf(i)) + 1;
                            H > 0 && (A = H, C = C.slice(0, A), D = this._getTextWidth(C))
                        }
                        if (this._addTextLine(C, D), n += e, !r || j && n + e > m) break;
                        if (y = y.slice(A), y.length > 0 && (z = this._getTextWidth(y), l >= z)) {
                            this._addTextLine(y, z), n += e;
                            break
                        }
                    } else this._addTextLine(y, z), n += e, d = Math.max(d, z);
                if (j && n + e > m) break
            }
            x.restore(), this.textHeight = b, this.textWidth = d
        }
    }, Konva.Util.extend(Konva.Text, Konva.Shape), Konva.Node.addGetterSetter(Konva.Text, "fontFamily", d), Konva.Node.addGetterSetter(Konva.Text, "fontSize", 12), Konva.Node.addGetterSetter(Konva.Text, "fontStyle", o), Konva.Node.addGetterSetter(Konva.Text, "padding", 0), Konva.Node.addGetterSetter(Konva.Text, "align", k), Konva.Node.addGetterSetter(Konva.Text, "lineHeight", 1), Konva.Node.addGetterSetter(Konva.Text, "wrap", s), Konva.Node.addGetter(Konva.Text, l, j), Konva.Node.addSetter(Konva.Text, "width"), Konva.Node.addSetter(Konva.Text, "height")
}(),
function() {
    Konva.Line = function(a) {
        this._initLine(a)
    }, Konva.Line.prototype = {
        _initLine: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = "Line", this._setDrawFuncs()
        },
        drawFunc: function(a) {
            var b, c, d = this.getPoints(),
                e = d.length,
                f = a.getContext();
            for (f.beginPath(), f.moveTo(d[0].x, d[0].y), b = 1; e > b; b++) c = d[b], f.lineTo(c.x, c.y);
            a.stroke(this)
        }
    }, Konva.Util.extend(Konva.Line, Konva.Shape), Konva.Node.addPointsGetterSetter(Konva.Line, "points")
}(),
function() {
    Konva.Spline = function(a) {
        this._initSpline(a)
    }, Konva.Spline.prototype = {
        _initSpline: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = "Spline", this._setDrawFuncs()
        },
        drawFunc: function(a) {
            var b, c, d, e, f = this.getPoints(),
                g = f.length,
                h = a.getContext(),
                i = this.getTension();
            if (h.beginPath(), h.moveTo(f[0].x, f[0].y), 0 !== i && g > 2) {
                for (b = this.allPoints, c = b.length, d = 2, h.quadraticCurveTo(b[0].x, b[0].y, b[1].x, b[1].y); c - 1 > d;) h.bezierCurveTo(b[d].x, b[d++].y, b[d].x, b[d++].y, b[d].x, b[d++].y);
                h.quadraticCurveTo(b[c - 1].x, b[c - 1].y, f[g - 1].x, f[g - 1].y)
            } else
                for (d = 1; g > d; d++) e = f[d], h.lineTo(e.x, e.y);
            a.stroke(this)
        },
        setTension: function(a) {
            this._setAttr("tension", a), this._setAllPoints()
        },
        setPoints: function(a) {
            Konva.Node.setPoints.call(this, a), this._setAllPoints()
        },
        _setAllPoints: function() {
            this.allPoints = Konva.Util._expandPoints(this.getPoints(), this.getTension())
        }
    }, Konva.Util.extend(Konva.Spline, Konva.Shape), Konva.Node.addGetter(Konva.Spline, "tension", 1), Konva.Node.addPointsGetter(Konva.Spline, "points")
}(),
function() {
    Konva.Blob = function(a) {
        this._initBlob(a)
    }, Konva.Blob.prototype = {
        _initBlob: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = "Blob", this._setDrawFuncs()
        },
        drawFunc: function(a) {
            var b, c, d, e, f = this.getPoints(),
                g = f.length,
                h = a.getContext(),
                i = this.getTension();
            if (h.beginPath(), h.moveTo(f[0].x, f[0].y), 0 !== i && g > 2)
                for (b = this.allPoints, c = b.length, d = 0; c - 1 > d;) h.bezierCurveTo(b[d].x, b[d++].y, b[d].x, b[d++].y, b[d].x, b[d++].y);
            else
                for (d = 1; g > d; d++) e = f[d], h.lineTo(e.x, e.y);
            h.closePath(), a.fillStroke(this)
        },
        setTension: function(a) {
            this._setAttr("tension", a), this._setAllPoints()
        },
        setPoints: function(a) {
            Konva.Node.setPoints.call(this, a), this._setAllPoints()
        },
        _setAllPoints: function() {
            var a = this.getPoints(),
                b = a.length,
                c = this.getTension(),
                d = Konva.Util,
                e = d._getControlPoints(a[b - 1], a[0], a[1], c),
                f = d._getControlPoints(a[b - 2], a[b - 1], a[0], c);
            this.allPoints = Konva.Util._expandPoints(this.getPoints(), this.getTension()), this.allPoints.unshift(e[1]), this.allPoints.push(f[0]), this.allPoints.push(a[b - 1]), this.allPoints.push(f[1]), this.allPoints.push(e[0]), this.allPoints.push(a[0])
        }
    }, Konva.Util.extend(Konva.Blob, Konva.Shape), Konva.Node.addGetter(Konva.Blob, "tension", 1), Konva.Node.addPointsGetter(Konva.Blob, "points")
}(),
function() {
    Konva.Sprite = function(a) {
        this._initSprite(a)
    }, Konva.Sprite.prototype = {
        _initSprite: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = "Sprite", this._setDrawFuncs(), this.anim = new Konva.Animation;
            var b = this;
            this.on("animationChange", function() {
                b.setIndex(0)
            })
        },
        drawFunc: function(a) {
            var b = this.getAnimation(),
                c = this.getIndex(),
                d = this.getAnimations()[b][c],
                e = a.getContext(),
                f = this.getImage();
            f && e.drawImage(f, d.x, d.y, d.width, d.height, 0, 0, d.width, d.height)
        },
        drawHitFunc: function(a) {
            var b = this.getAnimation(),
                c = this.getIndex(),
                d = this.getAnimations()[b][c],
                e = a.getContext();
            e.beginPath(), e.rect(0, 0, d.width, d.height), e.closePath(), a.fill(this)
        },
        start: function() {
            var a = this,
                b = this.getLayer();
            this.anim.setLayers(b), this.interval = setInterval(function() {
                var b = a.getIndex();
                a._updateIndex(), a.afterFrameFunc && b === a.afterFrameIndex && (a.afterFrameFunc(), delete a.afterFrameFunc, delete a.afterFrameIndex)
            }, 1e3 / this.getFrameRate()), this.anim.start()
        },
        stop: function() {
            this.anim.stop(), clearInterval(this.interval)
        },
        afterFrame: function(a, b) {
            this.afterFrameIndex = a, this.afterFrameFunc = b
        },
        _updateIndex: function() {
            var a = this.getIndex(),
                b = this.getAnimation(),
                c = this.getAnimations(),
                d = c[b],
                e = d.length;
            e - 1 > a ? this.setIndex(a + 1) : this.setIndex(0)
        }
    }, Konva.Util.extend(Konva.Sprite, Konva.Shape), Konva.Node.addGetterSetter(Konva.Sprite, "animation"), Konva.Node.addGetterSetter(Konva.Sprite, "animations"), Konva.Node.addGetterSetter(Konva.Sprite, "image"), Konva.Node.addGetterSetter(Konva.Sprite, "index", 0), Konva.Node.addGetterSetter(Konva.Sprite, "frameRate", 17)
}(),
function() {
    Konva.Path = function(a) {
        this._initPath(a)
    }, Konva.Path.prototype = {
        _initPath: function(a) {
            this.dataArray = [];
            var b = this;
            Konva.Shape.call(this, a), this.className = "Path", this._setDrawFuncs(), this.dataArray = Konva.Path.parsePathData(this.getData()), this.on("dataChange", function() {
                b.dataArray = Konva.Path.parsePathData(this.getData())
            })
        },
        drawFunc: function(a) {
            var b = this.dataArray,
                c = a.getContext();
            c.beginPath();
            for (var d = 0; d < b.length; d++) {
                var e = b[d].command,
                    f = b[d].points;
                switch (e) {
                    case "L":
                        c.lineTo(f[0], f[1]);
                        break;
                    case "M":
                        c.moveTo(f[0], f[1]);
                        break;
                    case "C":
                        c.bezierCurveTo(f[0], f[1], f[2], f[3], f[4], f[5]);
                        break;
                    case "Q":
                        c.quadraticCurveTo(f[0], f[1], f[2], f[3]);
                        break;
                    case "A":
                        var g = f[0],
                            h = f[1],
                            i = f[2],
                            j = f[3],
                            k = f[4],
                            l = f[5],
                            m = f[6],
                            n = f[7],
                            o = i > j ? i : j,
                            p = i > j ? 1 : i / j,
                            q = i > j ? j / i : 1;
                        c.translate(g, h), c.rotate(m), c.scale(p, q), c.arc(0, 0, o, k, k + l, 1 - n), c.scale(1 / p, 1 / q), c.rotate(-m), c.translate(-g, -h);
                        break;
                    case "z":
                        c.closePath()
                }
            }
            a.fillStroke(this)
        }
    }, Konva.Util.extend(Konva.Path, Konva.Shape), Konva.Path.getLineLength = function(a, b, c, d) {
        return Math.sqrt((c - a) * (c - a) + (d - b) * (d - b))
    }, Konva.Path.getPointOnLine = function(a, b, c, d, e, f, g) {
        void 0 === f && (f = b), void 0 === g && (g = c);
        var h = (e - c) / (d - b + 1e-8),
            i = Math.sqrt(a * a / (1 + h * h));
        b > d && (i *= -1);
        var j, k = h * i;
        if ((g - c) / (f - b + 1e-8) === h) j = {
            x: f + i,
            y: g + k
        };
        else {
            var l, m, n = this.getLineLength(b, c, d, e);
            if (1e-8 > n) return void 0;
            var o = (f - b) * (d - b) + (g - c) * (e - c);
            o /= n * n, l = b + o * (d - b), m = c + o * (e - c);
            var p = this.getLineLength(f, g, l, m),
                q = Math.sqrt(a * a - p * p);
            i = Math.sqrt(q * q / (1 + h * h)), b > d && (i *= -1), k = h * i, j = {
                x: l + i,
                y: m + k
            }
        }
        return j
    }, Konva.Path.getPointOnCubicBezier = function(a, b, c, d, e, f, g, h, i) {
        function j(a) {
            return a * a * a
        }

        function k(a) {
            return 3 * a * a * (1 - a)
        }

        function l(a) {
            return 3 * a * (1 - a) * (1 - a)
        }

        function m(a) {
            return (1 - a) * (1 - a) * (1 - a)
        }
        var n = h * j(a) + f * k(a) + d * l(a) + b * m(a),
            o = i * j(a) + g * k(a) + e * l(a) + c * m(a);
        return {
            x: n,
            y: o
        }
    }, Konva.Path.getPointOnQuadraticBezier = function(a, b, c, d, e, f, g) {
        function h(a) {
            return a * a
        }

        function i(a) {
            return 2 * a * (1 - a)
        }

        function j(a) {
            return (1 - a) * (1 - a)
        }
        var k = f * h(a) + d * i(a) + b * j(a),
            l = g * h(a) + e * i(a) + c * j(a);
        return {
            x: k,
            y: l
        }
    }, Konva.Path.getPointOnEllipticalArc = function(a, b, c, d, e, f) {
        var g = Math.cos(f),
            h = Math.sin(f),
            i = {
                x: c * Math.cos(e),
                y: d * Math.sin(e)
            };
        return {
            x: a + (i.x * g - i.y * h),
            y: b + (i.x * h + i.y * g)
        }
    }, Konva.Path.parsePathData = function(a) {
        if (!a) return [];
        var b = a,
            c = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
        b = b.replace(new RegExp(" ", "g"), ",");
        for (var d = 0; d < c.length; d++) b = b.replace(new RegExp(c[d], "g"), "|" + c[d]);
        for (var e = b.split("|"), f = [], g = 0, h = 0, d = 1; d < e.length; d++) {
            var i = e[d],
                j = i.charAt(0);
            i = i.slice(1), i = i.replace(new RegExp(",-", "g"), "-"), i = i.replace(new RegExp("-", "g"), ",-"), i = i.replace(new RegExp("e,-", "g"), "e-");
            var k = i.split(",");
            k.length > 0 && "" === k[0] && k.shift();
            for (var l = 0; l < k.length; l++) k[l] = parseFloat(k[l]);
            for (; k.length > 0 && !isNaN(k[0]);) {
                var m = null,
                    n = [],
                    o = g,
                    p = h;
                switch (j) {
                    case "l":
                        g += k.shift(), h += k.shift(), m = "L", n.push(g, h);
                        break;
                    case "L":
                        g = k.shift(), h = k.shift(), n.push(g, h);
                        break;
                    case "m":
                        g += k.shift(), h += k.shift(), m = "M", n.push(g, h), j = "l";
                        break;
                    case "M":
                        g = k.shift(), h = k.shift(), m = "M", n.push(g, h), j = "L";
                        break;
                    case "h":
                        g += k.shift(), m = "L", n.push(g, h);
                        break;
                    case "H":
                        g = k.shift(), m = "L", n.push(g, h);
                        break;
                    case "v":
                        h += k.shift(), m = "L", n.push(g, h);
                        break;
                    case "V":
                        h = k.shift(), m = "L", n.push(g, h);
                        break;
                    case "C":
                        n.push(k.shift(), k.shift(), k.shift(), k.shift()), g = k.shift(), h = k.shift(), n.push(g, h);
                        break;
                    case "c":
                        n.push(g + k.shift(), h + k.shift(), g + k.shift(), h + k.shift()), g += k.shift(), h += k.shift(), m = "C", n.push(g, h);
                        break;
                    case "S":
                        var q = g,
                            r = h,
                            s = f[f.length - 1];
                        "C" === s.command && (q = g + (g - s.points[2]), r = h + (h - s.points[3])), n.push(q, r, k.shift(), k.shift()), g = k.shift(), h = k.shift(), m = "C", n.push(g, h);
                        break;
                    case "s":
                        var q = g,
                            r = h,
                            s = f[f.length - 1];
                        "C" === s.command && (q = g + (g - s.points[2]), r = h + (h - s.points[3])), n.push(q, r, g + k.shift(), h + k.shift()), g += k.shift(), h += k.shift(), m = "C", n.push(g, h);
                        break;
                    case "Q":
                        n.push(k.shift(), k.shift()), g = k.shift(), h = k.shift(), n.push(g, h);
                        break;
                    case "q":
                        n.push(g + k.shift(), h + k.shift()), g += k.shift(), h += k.shift(), m = "Q", n.push(g, h);
                        break;
                    case "T":
                        var q = g,
                            r = h,
                            s = f[f.length - 1];
                        "Q" === s.command && (q = g + (g - s.points[0]), r = h + (h - s.points[1])), g = k.shift(), h = k.shift(), m = "Q", n.push(q, r, g, h);
                        break;
                    case "t":
                        var q = g,
                            r = h,
                            s = f[f.length - 1];
                        "Q" === s.command && (q = g + (g - s.points[0]), r = h + (h - s.points[1])), g += k.shift(), h += k.shift(), m = "Q", n.push(q, r, g, h);
                        break;
                    case "A":
                        var t = k.shift(),
                            u = k.shift(),
                            v = k.shift(),
                            w = k.shift(),
                            x = k.shift(),
                            y = g,
                            z = h;
                        g = k.shift(), h = k.shift(), m = "A", n = this.convertEndpointToCenterParameterization(y, z, g, h, w, x, t, u, v);
                        break;
                    case "a":
                        var t = k.shift(),
                            u = k.shift(),
                            v = k.shift(),
                            w = k.shift(),
                            x = k.shift(),
                            y = g,
                            z = h;
                        g += k.shift(), h += k.shift(), m = "A", n = this.convertEndpointToCenterParameterization(y, z, g, h, w, x, t, u, v)
                }
                f.push({
                    command: m || j,
                    points: n,
                    start: {
                        x: o,
                        y: p
                    },
                    pathLength: this.calcLength(o, p, m || j, n)
                })
            }("z" === j || "Z" === j) && f.push({
                command: "z",
                points: [],
                start: void 0,
                pathLength: 0
            })
        }
        return f
    }, Konva.Path.calcLength = function(a, b, c, d) {
        var e, f, g, h = Konva.Path;
        switch (c) {
            case "L":
                return h.getLineLength(a, b, d[0], d[1]);
            case "C":
                for (e = 0, f = h.getPointOnCubicBezier(0, a, b, d[0], d[1], d[2], d[3], d[4], d[5]), t = .01; 1 >= t; t += .01) g = h.getPointOnCubicBezier(t, a, b, d[0], d[1], d[2], d[3], d[4], d[5]), e += h.getLineLength(f.x, f.y, g.x, g.y), f = g;
                return e;
            case "Q":
                for (e = 0, f = h.getPointOnQuadraticBezier(0, a, b, d[0], d[1], d[2], d[3]), t = .01; 1 >= t; t += .01) g = h.getPointOnQuadraticBezier(t, a, b, d[0], d[1], d[2], d[3]), e += h.getLineLength(f.x, f.y, g.x, g.y), f = g;
                return e;
            case "A":
                e = 0;
                var i = d[4],
                    j = d[5],
                    k = d[4] + j,
                    l = Math.PI / 180;
                if (Math.abs(i - k) < l && (l = Math.abs(i - k)), f = h.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], i, 0), 0 > j)
                    for (t = i - l; t > k; t -= l) g = h.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], t, 0), e += h.getLineLength(f.x, f.y, g.x, g.y), f = g;
                else
                    for (t = i + l; k > t; t += l) g = h.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], t, 0), e += h.getLineLength(f.x, f.y, g.x, g.y), f = g;
                return g = h.getPointOnEllipticalArc(d[0], d[1], d[2], d[3], k, 0), e += h.getLineLength(f.x, f.y, g.x, g.y)
        }
        return 0
    }, Konva.Path.convertEndpointToCenterParameterization = function(a, b, c, d, e, f, g, h, i) {
        var j = i * (Math.PI / 180),
            k = Math.cos(j) * (a - c) / 2 + Math.sin(j) * (b - d) / 2,
            l = -1 * Math.sin(j) * (a - c) / 2 + Math.cos(j) * (b - d) / 2,
            m = k * k / (g * g) + l * l / (h * h);
        m > 1 && (g *= Math.sqrt(m), h *= Math.sqrt(m));
        var n = Math.sqrt((g * g * h * h - g * g * l * l - h * h * k * k) / (g * g * l * l + h * h * k * k));
        e == f && (n *= -1), isNaN(n) && (n = 0);
        var o = n * g * l / h,
            p = n * -h * k / g,
            q = (a + c) / 2 + Math.cos(j) * o - Math.sin(j) * p,
            r = (b + d) / 2 + Math.sin(j) * o + Math.cos(j) * p,
            s = function(a) {
                return Math.sqrt(a[0] * a[0] + a[1] * a[1])
            },
            t = function(a, b) {
                return (a[0] * b[0] + a[1] * b[1]) / (s(a) * s(b))
            },
            u = function(a, b) {
                return (a[0] * b[1] < a[1] * b[0] ? -1 : 1) * Math.acos(t(a, b))
            },
            v = u([1, 0], [(k - o) / g, (l - p) / h]),
            w = [(k - o) / g, (l - p) / h],
            x = [(-1 * k - o) / g, (-1 * l - p) / h],
            y = u(w, x);
        return t(w, x) <= -1 && (y = Math.PI), t(w, x) >= 1 && (y = 0), 0 === f && y > 0 && (y -= 2 * Math.PI), 1 == f && 0 > y && (y += 2 * Math.PI), [q, r, g, h, v, y, j, f]
    }, Konva.Node.addGetterSetter(Konva.Path, "data")
}(),
function() {
    function a(a) {
        a.fillText(this.partialText, 0, 0)
    }

    function b(a) {
        a.strokeText(this.partialText, 0, 0)
    }
    var c = "",
        d = "Calibri",
        e = "normal";
    Konva.TextPath = function(a) {
        this._initTextPath(a)
    }, Konva.TextPath.prototype = {
        _initTextPath: function(c) {
            var d = this;
            this.createAttrs(), this.dummyCanvas = document.createElement("canvas"), this.dataArray = [], Konva.Shape.call(this, c), this._fillFunc = a, this._strokeFunc = b, this.className = "TextPath", this._setDrawFuncs(), this.dataArray = Konva.Path.parsePathData(this.attrs.data), this.on("dataChange", function() {
                d.dataArray = Konva.Path.parsePathData(this.attrs.data)
            });
            for (var e = ["text", "textStroke", "textStrokeWidth"], f = 0; f < e.length; f++) {
                var g = e[f];
                this.on(g + "Change", d._setTextData)
            }
            d._setTextData()
        },
        drawFunc: function(a) {
            var b = (this.charArr, a.getContext());
            b.font = this._getContextFont(), b.textBaseline = "middle", b.textAlign = "left", b.save();
            for (var c = this.glyphInfo, d = 0; d < c.length; d++) {
                b.save();
                var e = c[d].p0;
                c[d].p1, parseFloat(this.attrs.fontSize), b.translate(e.x, e.y), b.rotate(c[d].rotation), this.partialText = c[d].text, a.fillStroke(this), b.restore()
            }
            b.restore()
        },
        getTextWidth: function() {
            return this.textWidth
        },
        getTextHeight: function() {
            return this.textHeight
        },
        setText: function(a) {
            Konva.Text.prototype.setText.call(this, a)
        },
        _getTextSize: function(a) {
            var b = this.dummyCanvas,
                c = b.getContext("2d");
            c.save(), c.font = this._getContextFont();
            var d = c.measureText(a);
            return c.restore(), {
                width: d.width,
                height: parseInt(this.attrs.fontSize, 10)
            }
        },
        _setTextData: function() {
            var a = this,
                b = this._getTextSize(this.attrs.text);
            this.textWidth = b.width, this.textHeight = b.height, this.glyphInfo = [];
            for (var c, d, e, f = this.attrs.text.split(""), g = -1, h = 0, i = function() {
                    h = 0;
                    for (var b = a.dataArray, d = g + 1; d < b.length; d++) {
                        if (b[d].pathLength > 0) return g = d, b[d];
                        "M" == b[d].command && (c = {
                            x: b[d].points[0],
                            y: b[d].points[1]
                        })
                    }
                    return {}
                }, j = function(b) {
                    var f = a._getTextSize(b).width,
                        g = 0,
                        j = 0;
                    for (d = void 0; Math.abs(f - g) / f > .01 && 25 > j;) {
                        j++;
                        for (var k = g; void 0 === e;) e = i(), e && k + e.pathLength < f && (k += e.pathLength, e = void 0);
                        if (e === {} || void 0 === c) return void 0;
                        var l = !1;
                        switch (e.command) {
                            case "L":
                                Konva.Path.getLineLength(c.x, c.y, e.points[0], e.points[1]) > f ? d = Konva.Path.getPointOnLine(f, c.x, c.y, e.points[0], e.points[1], c.x, c.y) : e = void 0;
                                break;
                            case "A":
                                var m = e.points[4],
                                    n = e.points[5],
                                    o = e.points[4] + n;
                                0 === h ? h = m + 1e-8 : f > g ? h += Math.PI / 180 * n / Math.abs(n) : h -= Math.PI / 360 * n / Math.abs(n), Math.abs(h) > Math.abs(o) && (h = o, l = !0), d = Konva.Path.getPointOnEllipticalArc(e.points[0], e.points[1], e.points[2], e.points[3], h, e.points[6]);
                                break;
                            case "C":
                                0 === h ? h = f > e.pathLength ? 1e-8 : f / e.pathLength : f > g ? h += (f - g) / e.pathLength : h -= (g - f) / e.pathLength, h > 1 && (h = 1, l = !0), d = Konva.Path.getPointOnCubicBezier(h, e.start.x, e.start.y, e.points[0], e.points[1], e.points[2], e.points[3], e.points[4], e.points[5]);
                                break;
                            case "Q":
                                0 === h ? h = f / e.pathLength : f > g ? h += (f - g) / e.pathLength : h -= (g - f) / e.pathLength, h > 1 && (h = 1, l = !0), d = Konva.Path.getPointOnQuadraticBezier(h, e.start.x, e.start.y, e.points[0], e.points[1], e.points[2], e.points[3])
                        }
                        void 0 !== d && (g = Konva.Path.getLineLength(c.x, c.y, d.x, d.y)), l && (l = !1, e = void 0)
                    }
                }, k = 0; k < f.length && (j(f[k]), void 0 !== c && void 0 !== d); k++) {
                var l = Konva.Path.getLineLength(c.x, c.y, d.x, d.y),
                    m = 0,
                    n = Konva.Path.getPointOnLine(m + l / 2, c.x, c.y, d.x, d.y),
                    o = Math.atan2(d.y - c.y, d.x - c.x);
                this.glyphInfo.push({
                    transposeX: n.x,
                    transposeY: n.y,
                    text: f[k],
                    rotation: o,
                    p0: c,
                    p1: d
                }), c = d
            }
        }
    }, Konva.TextPath.prototype._getContextFont = Konva.Text.prototype._getContextFont, Konva.Util.extend(Konva.TextPath, Konva.Shape), Konva.Node.addGetterSetter(Konva.TextPath, "fontFamily", d), Konva.Node.addGetterSetter(Konva.TextPath, "fontSize", 12), Konva.Node.addGetterSetter(Konva.TextPath, "fontStyle", e), Konva.Node.addGetter(Konva.TextPath, "text", c)
}(),
function() {
    Konva.RegularPolygon = function(a) {
        this._initRegularPolygon(a)
    }, Konva.RegularPolygon.prototype = {
        _initRegularPolygon: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = "RegularPolygon", this._setDrawFuncs()
        },
        drawFunc: function(a) {
            var b, c, d, e = a.getContext(),
                f = this.attrs.sides,
                g = this.attrs.radius;
            for (e.beginPath(), e.moveTo(0, 0 - g), b = 1; f > b; b++) c = g * Math.sin(2 * b * Math.PI / f), d = -1 * g * Math.cos(2 * b * Math.PI / f), e.lineTo(c, d);
            e.closePath(), a.fillStroke(this)
        }
    }, Konva.Util.extend(Konva.RegularPolygon, Konva.Shape), Konva.Node.addGetterSetter(Konva.RegularPolygon, "radius", 0), Konva.Node.addGetterSetter(Konva.RegularPolygon, "sides", 0)
}(),
function() {
    Konva.Star = function(a) {
        this._initStar(a)
    }, Konva.Star.prototype = {
        _initStar: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = "Star", this._setDrawFuncs()
        },
        drawFunc: function(a) {
            var b = a.getContext(),
                c = this.attrs.innerRadius,
                d = this.attrs.outerRadius,
                e = this.attrs.numPoints;
            b.beginPath(), b.moveTo(0, 0 - this.attrs.outerRadius);
            for (var f = 1; 2 * e > f; f++) {
                var g = 0 === f % 2 ? d : c,
                    h = g * Math.sin(f * Math.PI / e),
                    i = -1 * g * Math.cos(f * Math.PI / e);
                b.lineTo(h, i)
            }
            b.closePath(), a.fillStroke(this)
        }
    }, Konva.Util.extend(Konva.Star, Konva.Shape), Konva.Node.addGetterSetter(Konva.Star, "numPoints", 0), Konva.Node.addGetterSetter(Konva.Star, "innerRadius", 0), Konva.Node.addGetterSetter(Konva.Star, "outerRadius", 0)
}(),
function() {
    var a = ["fontFamily", "fontSize", "fontStyle", "padding", "lineHeight", "text"],
        b = "Change.kinetic",
        c = "none",
        d = "up",
        e = "right",
        f = "down",
        g = "left",
        h = "Label",
        i = a.length;
    Konva.Label = function(a) {
        this._initLabel(a)
    }, Konva.Label.prototype = {
        _initLabel: function(a) {
            var b = this;
            this.createAttrs(), this.className = h, Konva.Group.call(this, a), this.on("add", function(a) {
                b._addListeners(a.child), b._sync()
            })
        },
        getText: function() {
            return this.get("Text")[0]
        },
        getTag: function() {
            return this.get("Tag")[0]
        },
        _addListeners: function(c) {
            var d, e = this;
            for (d = 0; i > d; d++) c.on(a[d] + b, function() {
                e._sync()
            })
        },
        getWidth: function() {
            return this.getText().getWidth()
        },
        getHeight: function() {
            return this.getText().getHeight()
        },
        _sync: function() {
            var a, b, c, h, i, j, k = this.getText(),
                l = this.getTag();
            if (k && l) {
                switch (a = k.getWidth(), b = k.getHeight(), c = l.getPointerDirection(), h = l.getPointerWidth(), pointerHeight = l.getPointerHeight(), i = 0, j = 0, c) {
                    case d:
                        i = a / 2, j = -1 * pointerHeight;
                        break;
                    case e:
                        i = a + h, j = b / 2;
                        break;
                    case f:
                        i = a / 2, j = b + pointerHeight;
                        break;
                    case g:
                        i = -1 * h, j = b / 2
                }
                l.setAttrs({
                    x: -1 * i,
                    y: -1 * j,
                    width: a,
                    height: b
                }), k.setAttrs({
                    x: -1 * i,
                    y: -1 * j
                })
            }
        }
    }, Konva.Util.extend(Konva.Label, Konva.Group), Konva.Tag = function(a) {
        this._initTag(a)
    }, Konva.Tag.prototype = {
        _initTag: function(a) {
            this.createAttrs(), Konva.Shape.call(this, a), this.className = "Tag", this._setDrawFuncs()
        },
        drawFunc: function(a) {
            var b = a.getContext(),
                c = this.getWidth(),
                h = this.getHeight(),
                i = this.getPointerDirection(),
                j = this.getPointerWidth(),
                k = this.getPointerHeight();
            this.getCornerRadius(), b.beginPath(), b.moveTo(0, 0), i === d && (b.lineTo((c - j) / 2, 0), b.lineTo(c / 2, -1 * k), b.lineTo((c + j) / 2, 0)), b.lineTo(c, 0), i === e && (b.lineTo(c, (h - k) / 2), b.lineTo(c + j, h / 2), b.lineTo(c, (h + k) / 2)), b.lineTo(c, h), i === f && (b.lineTo((c + j) / 2, h), b.lineTo(c / 2, h + k), b.lineTo((c - j) / 2, h)), b.lineTo(0, h), i === g && (b.lineTo(0, (h + k) / 2), b.lineTo(-1 * j, h / 2), b.lineTo(0, (h - k) / 2)), b.closePath(), a.fillStroke(this)
        }
    }, Konva.Util.extend(Konva.Tag, Konva.Shape), Konva.Node.addGetterSetter(Konva.Tag, "pointerDirection", c), Konva.Node.addGetterSetter(Konva.Tag, "pointerWidth", 0), Konva.Node.addGetterSetter(Konva.Tag, "pointerHeight", 0), Konva.Node.addGetterSetter(Konva.Tag, "cornerRadius", 0)
}(),
function() {
    Konva.Filters.Grayscale = function(a) {
        for (var b = a.data, c = 0; c < b.length; c += 4) {
            var d = .34 * b[c] + .5 * b[c + 1] + .16 * b[c + 2];
            b[c] = d, b[c + 1] = d, b[c + 2] = d
        }
    }
}(),
function() {
    Konva.Filters.Brighten = function(a) {
        for (var b = this.getFilterBrightness(), c = a.data, d = 0; d < c.length; d += 4) c[d] += b, c[d + 1] += b, c[d + 2] += b
    }, Konva.Node.addFilterGetterSetter(Konva.Image, "filterBrightness", 0)
}(),
function() {
    Konva.Filters.Invert = function(a) {
        for (var b = a.data, c = 0; c < b.length; c += 4) b[c] = 255 - b[c], b[c + 1] = 255 - b[c + 1], b[c + 2] = 255 - b[c + 2]
    }
}(),
function() {
    function a() {
        this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
    }

    function b(b, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = b.data,
            E = b.width,
            F = b.height,
            G = e + e + 1,
            H = E - 1,
            I = F - 1,
            J = e + 1,
            K = J * (J + 1) / 2,
            L = new a,
            M = L,
            N = null,
            O = null,
            P = c[e],
            Q = d[e];
        for (h = 1; G > h; h++)
            if (M = M.next = new a, h == J) var R = M;
        for (M.next = L, l = k = 0, g = 0; F > g; g++) {
            for (u = v = w = x = m = n = o = p = 0, q = J * (y = D[k]), r = J * (z = D[k + 1]), s = J * (A = D[k + 2]), t = J * (B = D[k + 3]), m += K * y, n += K * z, o += K * A, p += K * B, M = L, h = 0; J > h; h++) M.r = y, M.g = z, M.b = A, M.a = B, M = M.next;
            for (h = 1; J > h; h++) i = k + ((h > H ? H : h) << 2), m += (M.r = y = D[i]) * (C = J - h), n += (M.g = z = D[i + 1]) * C, o += (M.b = A = D[i + 2]) * C, p += (M.a = B = D[i + 3]) * C, u += y, v += z, w += A, x += B, M = M.next;
            for (N = L, O = R, f = 0; E > f; f++) D[k + 3] = B = p * P >> Q, 0 != B ? (B = 255 / B, D[k] = (m * P >> Q) * B, D[k + 1] = (n * P >> Q) * B, D[k + 2] = (o * P >> Q) * B) : D[k] = D[k + 1] = D[k + 2] = 0, m -= q, n -= r, o -= s, p -= t, q -= N.r, r -= N.g, s -= N.b, t -= N.a, i = l + ((i = f + e + 1) < H ? i : H) << 2, u += N.r = D[i], v += N.g = D[i + 1], w += N.b = D[i + 2], x += N.a = D[i + 3], m += u, n += v, o += w, p += x, N = N.next, q += y = O.r, r += z = O.g, s += A = O.b, t += B = O.a, u -= y, v -= z, w -= A, x -= B, O = O.next, k += 4;
            l += E
        }
        for (f = 0; E > f; f++) {
            for (v = w = x = u = n = o = p = m = 0, k = f << 2, q = J * (y = D[k]), r = J * (z = D[k + 1]), s = J * (A = D[k + 2]), t = J * (B = D[k + 3]), m += K * y, n += K * z, o += K * A, p += K * B, M = L, h = 0; J > h; h++) M.r = y, M.g = z, M.b = A, M.a = B, M = M.next;
            for (j = E, h = 1; e >= h; h++) k = j + f << 2, m += (M.r = y = D[k]) * (C = J - h), n += (M.g = z = D[k + 1]) * C, o += (M.b = A = D[k + 2]) * C, p += (M.a = B = D[k + 3]) * C, u += y, v += z, w += A, x += B, M = M.next, I > h && (j += E);
            for (k = f, N = L, O = R, g = 0; F > g; g++) i = k << 2, D[i + 3] = B = p * P >> Q, B > 0 ? (B = 255 / B, D[i] = (m * P >> Q) * B, D[i + 1] = (n * P >> Q) * B, D[i + 2] = (o * P >> Q) * B) : D[i] = D[i + 1] = D[i + 2] = 0, m -= q, n -= r, o -= s, p -= t, q -= N.r, r -= N.g, s -= N.b, t -= N.a, i = f + ((i = g + J) < I ? i : I) * E << 2, m += u += N.r = D[i], n += v += N.g = D[i + 1], o += w += N.b = D[i + 2], p += x += N.a = D[i + 3], N = N.next, q += y = O.r, r += z = O.g, s += A = O.b, t += B = O.a, u -= y, v -= z, w -= A, x -= B, O = O.next, k += E
        }
    }
    var c = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        d = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
    Konva.Filters.Blur = function(a) {
        var c = 0 | this.getFilterRadius();
        c > 0 && b(a, c)
    }, Konva.Node.addFilterGetterSetter(Konva.Image, "filterRadius", 0)
}(),
function() {
    function a(a, b, c) {
        var d = 4 * (c * a.width + b),
            e = [];
        return e.push(a.data[d++], a.data[d++], a.data[d++], a.data[d++]), e
    }

    function b(a, b) {
        return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2))
    }

    function c(a) {
        for (var b = [0, 0, 0], c = 0; c < a.length; c++) b[0] += a[c][0], b[1] += a[c][1], b[2] += a[c][2];
        return b[0] /= a.length, b[1] /= a.length, b[2] /= a.length, b
    }

    function d(d, e) {
        var f = a(d, 0, 0),
            g = a(d, d.width - 1, 0),
            h = a(d, 0, d.height - 1),
            i = a(d, d.width - 1, d.height - 1),
            j = e || 10;
        if (b(f, g) < j && b(g, i) < j && b(i, h) < j && b(h, f) < j) {
            for (var k = c([g, f, i, h]), l = [], m = 0; m < d.width * d.height; m++) {
                var n = b(k, [d.data[4 * m], d.data[4 * m + 1], d.data[4 * m + 2]]);
                l[m] = j > n ? 0 : 255
            }
            return l
        }
    }

    function e(a, b) {
        for (var c = 0; c < a.width * a.height; c++) a.data[4 * c + 3] = b[c]
    }

    function f(a, b, c) {
        for (var d = [1, 1, 1, 1, 0, 1, 1, 1, 1], e = Math.round(Math.sqrt(d.length)), f = Math.floor(e / 2), g = [], h = 0; c > h; h++)
            for (var i = 0; b > i; i++) {
                for (var j = h * b + i, k = 0, l = 0; e > l; l++)
                    for (var m = 0; e > m; m++) {
                        var n = h + l - f,
                            o = i + m - f;
                        if (n >= 0 && c > n && o >= 0 && b > o) {
                            var p = n * b + o,
                                q = d[l * e + m];
                            k += a[p] * q
                        }
                    }
                g[j] = 2040 === k ? 255 : 0
            }
        return g
    }

    function g(a, b, c) {
        for (var d = [1, 1, 1, 1, 1, 1, 1, 1, 1], e = Math.round(Math.sqrt(d.length)), f = Math.floor(e / 2), g = [], h = 0; c > h; h++)
            for (var i = 0; b > i; i++) {
                for (var j = h * b + i, k = 0, l = 0; e > l; l++)
                    for (var m = 0; e > m; m++) {
                        var n = h + l - f,
                            o = i + m - f;
                        if (n >= 0 && c > n && o >= 0 && b > o) {
                            var p = n * b + o,
                                q = d[l * e + m];
                            k += a[p] * q
                        }
                    }
                g[j] = k >= 1020 ? 255 : 0
            }
        return g
    }

    function h(a, b, c) {
        for (var d = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9], e = Math.round(Math.sqrt(d.length)), f = Math.floor(e / 2), g = [], h = 0; c > h; h++)
            for (var i = 0; b > i; i++) {
                for (var j = h * b + i, k = 0, l = 0; e > l; l++)
                    for (var m = 0; e > m; m++) {
                        var n = h + l - f,
                            o = i + m - f;
                        if (n >= 0 && c > n && o >= 0 && b > o) {
                            var p = n * b + o,
                                q = d[l * e + m];
                            k += a[p] * q
                        }
                    }
                g[j] = k
            }
        return g
    }
    Konva.Filters.Mask = function(a) {
        var b = this.getFilterThreshold(),
            c = d(a, b);
        return c && (c = f(c, a.width, a.height), c = g(c, a.width, a.height), c = h(c, a.width, a.height), e(a, c)), a
    }, Konva.Node.addFilterGetterSetter(Konva.Image, "filterThreshold", 0)
}();;

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
    container = new Konva.Image({
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
    ribbon = new Konva.Image({
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
    stage = new Konva.Stage({
        container: "canvasWrapper",
        width: 727,
        height: 503,
        draggable: false,
        listening: true
    });
    background = new Konva.Layer({
        name: "background"
    });
    containerlayer = new Konva.Layer({
        name: "containerlayer"
    });
    sundrylayer = new Konva.Layer({
        name: "sundrylayer"
    });
    foreground = new Konva.Layer({
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
        vase = new Konva.Image({
            x: 0,
            y: 0,
            image: bg,
            draggable: false
        });
        centrepoint = new Konva.Circle({
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
            startImg = new Konva.Image({
                x: 176,
                y: 81,
                image: startTxt,
                draggable: false,
                id: "startText"
            });
            startImgText = new Konva.Text({
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
                dusty = new Konva.Image({
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
                    mycreation = new Konva.Image({
                        x: 5,
                        y: 311,
                        image: notepad,
                        draggable: false
                    });
                    mycreationTxt = new Konva.Text({
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
                        resetbouquet = new Konva.Image({
                            x: 12,
                            y: 470,
                            image: startagain,
                            draggable: false
                        });
                        resetbouquetTxt = new Konva.Text({
                            x: 32,
                            y: 476,
                            text: "Start again",
                            fontSize: 11,
                            fontFamily: "Arial",
                            fontStyle: "bold",
                            fill: "#333333",
                            align: "left"
                        });
                        resetIcon = new Konva.Group();
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
                        inventoryIcon = new Konva.Group();
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
                            items[nextfree] = new Konva.Image({
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
        startImg = new Konva.Image({
            x: 176,
            y: 81,
            image: startTxt,
            draggable: false,
            id: "startText"
        });
        startImgText = new Konva.Text({
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
            
            items[nextfree] = new Konva.Image({
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
/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(b) {
    b.support.touch = "ontouchend" in document;
    if (!b.support.touch) {
        return;
    }
    var c = b.ui.mouse.prototype,
        e = c._mouseInit,
        a;

    function d(g, h) {
        if (g.originalEvent.touches.length > 1) {
            return;
        }
        g.preventDefault();
        var i = g.originalEvent.changedTouches[0],
            f = document.createEvent("MouseEvents");
        f.initMouseEvent(h, true, true, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, false, false, false, false, 0, null);
        g.target.dispatchEvent(f);
    }
    c._touchStart = function(g) {
        var f = this;
        if (a || !f._mouseCapture(g.originalEvent.changedTouches[0])) {
            return;
        }
        a = true;
        f._touchMoved = false;
        d(g, "mouseover");
        d(g, "mousemove");
        d(g, "mousedown");
    };
    c._touchMove = function(f) {
        if (!a) {
            return;
        }
        this._touchMoved = true;
        d(f, "mousemove");
    };
    c._touchEnd = function(f) {
        if (!a) {
            return;
        }
        d(f, "mouseup");
        d(f, "mouseout");
        if (!this._touchMoved) {
            d(f, "click");
        }
        a = false;
    };
    c._mouseInit = function() {
        var f = this;
        f.element.bind("touchstart", b.proxy(f, "_touchStart")).bind("touchmove", b.proxy(f, "_touchMove")).bind("touchend", b.proxy(f, "_touchEnd"));
        e.call(f);
    };
})(jQuery);