define("//static.360buyimg.com/mtd/pc/components/1.0.0/lazyload/lazyload.js", [], function() {
    "use strict";
    !function(window, $) {
        var $window = $(window);
        $.fn.o2lazyload = function(options) {
            var self = this
                , $self = $(self)
                , settings = {
                threshold: 200,
                delay: 100,
                container: window,
                source: "data-lazy-img",
                supportWebp: !0,
                cacheSupportWebp: !0,
                cacheSupportWebpKey: "o2-webp",
                webpReg: /\/\/img\d+.360buyimg.com\/.+\.(jpg|png)$/,
                webpSuffix: ".webp",
                webpQuality: 80,
                webpDisableKey: "data-webp",
                webpDisableValue: "no",
                forceOpenOrCloseWebP: "o2-webp",
                placeholder: "//misc.360buyimg.com/lib/img/e/blank.gif"
            };
            options && $.extend(settings, options);
            var inviewport = function() {
                var e = function(e) {
                    var t;
                    return t = void 0 === settings.container || settings.container === window ? (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop() : $(settings.container).offset().top + $(settings.container).height(),
                    t <= $(e).offset().top - settings.threshold
                }
                    , t = function(e) {
                    var t;
                    return t = void 0 === settings.container || settings.container === window ? $window.width() + $window.scrollLeft() : $(settings.container).offset().left + $(settings.container).width(),
                    t <= $(e).offset().left - settings.threshold
                }
                    , i = function(e) {
                    var t;
                    return t = void 0 === settings.container || settings.container === window ? $window.scrollTop() : $(settings.container).offset().top,
                    t >= $(e).offset().top + settings.threshold + $(e).height()
                }
                    , n = function(e) {
                    var t;
                    return t = void 0 === settings.container || settings.container === window ? $window.scrollLeft() : $(settings.container).offset().left,
                    t >= $(e).offset().left + settings.threshold + $(e).width()
                };
                return function(o) {
                    return !(t(o) || n(o) || e(o) || i(o))
                }
            }()
                , Lazyload = {
                $elements: [],
                webpSupported: !1,
                forceOpenWebP: !1,
                _setImg: function(e, t, i) {
                    t.attr("src", i),
                        e.onload = null
                },
                _errorLoadImg: function(e, t, i) {
                    (this.webpSupported && t.attr(settings.webpDisableKey) !== settings.webpDisableValue || this.forceOpenWebP) && (e.onload = $.proxy(function() {
                        this._setImg(e, t, i)
                    }, this),
                        e.src = i),
                        e.onerror = null
                },
                _loadImg: function(e) {
                    var t = e.attr(settings.source)
                        , i = e.attr(settings.webpDisableKey)
                        , n = t;
                    this.webpSupported && (settings.webpReg.test(t) && i !== settings.webpDisableValue || this.forceOpenWebP) && (n = t + "!q" + settings.webpQuality + settings.webpSuffix);
                    var o = new Image;
                    o.onload = $.proxy(function() {
                        this._setImg(o, e, n)
                    }, this),
                        o.onerror = $.proxy(function() {
                            this._errorLoadImg(o, e, t)
                        }, this),
                        o.src = n
                },
                _loadImgs: function() {
                    this.$elements = $self.find("img[" + settings.source + "][" + settings.source + '!="done"]'),
                        this.$elements.each($.proxy(function(e, t) {
                            var i = $(t);
                            inviewport(t) && void 0 !== i.attr(settings.source) && (i.attr("src") || i.attr("src", settings.placeholder),
                                this._loadImg(i),
                                i.attr(settings.source, "done"))
                        }, this))
                },
                _loadTimer: null,
                _update: function() {
                    clearTimeout(this._loadTimer),
                        this._loadTimer = setTimeout($.proxy(this._loadImgs, this), settings.delay)
                },
                _forceUpdateArea: function(e, t) {
                    setTimeout($.proxy(this._forceLoadImgs, this, t), settings.delay)
                },
                _forceLoadImgs: function(e) {
                    this.$elements = $self.find("#" + e).find("img[" + settings.source + "][" + settings.source + '!="done"]'),
                        this.$elements.each($.proxy(function(e, t) {
                            var i = $(t);
                            void 0 !== i.attr(settings.source) && (i.attr("src") || i.attr("src", settings.placeholder),
                                this._loadImg(i),
                                i.attr(settings.source, "done"))
                        }, this))
                },
                _initEvent: function() {
                    $(document).ready($.proxy(this._update, this)),
                        $window.bind("scroll.o2-lazyload", $.proxy(this._update, this)),
                        $window.bind("resize.o2-lazyload", $.proxy(this._update, this)),
                        $self.bind("renderImage", $.proxy(this._forceUpdateArea, this))
                },
                _isInit: function() {
                    return "1" === $self.attr(settings.source + "-install") || ($self.attr(settings.source + "-install", "1"),
                        !1)
                },
                init: function(e) {
                    if (!this._isInit()) {
                        var t = Util.getUrlParams(settings.forceOpenOrCloseWebP);
                        this.webpSupported = e,
                        "1" === t && (this.forceOpenWebP = !0),
                            this._initEvent()
                    }
                }
            }
                , Util = {
                setCookie: function(e, t, i, n) {
                    if (n || (n = location.hostname),
                    arguments.length > 2) {
                        var o = new Date((new Date).getTime() + parseInt(60 * i * 60 * 24 * 30 * 1e3));
                        document.cookie = e + "=" + escape(t) + "; path=/; domain=" + n + "; expires=" + o.toGMTString()
                    } else
                        document.cookie = e + "=" + escape(t) + "; path=/; domain=" + n
                },
                getCookie: function(e) {
                    try {
                        return null == document.cookie.match(new RegExp("(^" + e + "| " + e + ")=([^;]*)")) ? "" : decodeURIComponent(RegExp.$2)
                    } catch (t) {
                        return null == document.cookie.match(new RegExp("(^" + e + "| " + e + ")=([^;]*)")) ? "" : RegExp.$2
                    }
                },
                getUrlParams: function(key) {
                    var query = location.search
                        , reg = "/^.*[\\?|\\&]" + key + "\\=([^\\&]*)/";
                    reg = eval(reg);
                    var ret = query.match(reg);
                    return null != ret ? decodeURIComponent(ret[1]) : ""
                }
            }
                , checkWebp = function(e) {
                if ("0" === Util.getUrlParams(settings.forceOpenOrCloseWebP))
                    return void e(!1);
                if (!settings.supportWebp)
                    return void e(!1);
                if (settings.cacheSupportWebp) {
                    var t = Util.getCookie(settings.cacheSupportWebpKey);
                    if ("" !== t)
                        return void e("true" === t || t === !0)
                }
                var i = new Image;
                i.onload = function() {
                    var t = i.width > 0 && i.height > 0;
                    e(t),
                    settings.cacheSupportWebp && Util.setCookie(settings.cacheSupportWebpKey, t, 1)
                }
                    ,
                    i.onerror = function() {
                        e(!1),
                        settings.cacheSupportWebp && Util.setCookie(settings.cacheSupportWebpKey, !1, 1)
                    }
                    ,
                    i.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA"
            };
            return checkWebp(function(e) {
                Lazyload.init(e)
            }),
                this
        }
    }(window, jQuery)
});
//todo
/* jdf-1.0.0/ switchable.js Date:2021-12-28 11:00:42 */
!function(a, b) {
    a.ui.define("switchable", {
        options: {
            hasCssLink: !1,
            baseVersion: "1.0.0",
            cssLinkVersion: "1.0.0",
            type: "tab",
            direction: "left",
            hasSetup: !1,
            navClass: "ui-switchable-trigger",
            navItem: "ui-switchable-item",
            navSelectedClass: "ui-switchable-selected",
            navDisabledClass: "disabled",
            navIframe: "data-iframe",
            contentClass: "ui-switchable-panel-main",
            mainClass: "ui-switchable-panel",
            mainSelectedClass: "ui-switchable-panel-selected",
            bodyClass: "ui-switchable-panel-body",
            hasPage: !1,
            autoLock: !1,
            prevClass: "ui-switchable-prev",
            nextClass: "ui-switchable-next",
            pagCancelClass: "ui-switchable-page-cancel",
            hasArrow: !1,
            arrowClass: "ui-switchable-arrow",
            event: "mouseover",
            speed: 400,
            callback: null,
            onNext: null,
            onPrev: null,
            delay: 150,
            defaultPanel: 0,
            autoPlay: !1,
            playDirection: "next",
            stayTime: 5e3,
            mouseenterStopPlay: !0,
            includeMargin: !1,
            width: 0,
            height: 0,
            seamlessLoop: !1,
            hasHash: !1,
            imgscrollClass: "ui-switchable-imgscroll-img",
            imgscrollItemClass: "ui-switchable-imgscroll-item",
            imgscrollLazyload: !1,
            step: 1,
            visible: 1,
            easing: "swing",
            hasLoop: !1
        },
        init: function() {
            var b = this;
            var c = b.options;
            var d = !0;
            if (b.addClass(),
            c.visible < c.step && (c.visible = c.step),
                b.nav = b.el.find("." + c.navItem),
                b.main = b.el.find("." + c.mainClass),
                c.step = Math.max(c.step || 1, 1),
                b.size = b.main.size(),
                b.pageCount = Math.ceil(b.main.size() / c.step),
                b.content = b.el.find("." + c.contentClass),
                b.mainWidth = b.main.outerWidth(c.includeMargin),
                d = c.step < b.size,
            "tab" == c.type && c.navSelectedClass && b.nav.length > 0) {
                var e = -1;
                b.nav.each(function(b) {
                    var d = a(this);
                    d.hasClass(c.navSelectedClass) && (-1 == e ? e = b : d.removeClass(c.navSelectedClass))
                }),
                e > -1 && (c.defaultPanel = e)
            }
            if (c.width && (b.mainWidth = c.width),
                b.mainHeight = b.main.outerHeight(c.includeMargin),
            c.height && (b.mainHeight = c.height),
                b.cloneCount = Math.max(c.step, c.visible),
            c.seamlessLoop && d) {
                var f = [];
                var g = [];
                var h = b.cloneCount;
                for (var i = 0; h > i; i++)
                    f.push(b.main.eq(i).clone().attr("data-switchable-clone", 1).data("switchable-clone-from", h + i)),
                        g.push(b.main.eq(b.size - (i + 1)).clone().attr("data-switchable-clone", 1).data("switchable-clone-from", b.size + i));
                for (var j = 0; h > j; j++)
                    b.content.prepend(g[j]).append(f[j]);
                b.main = b.el.find("." + c.mainClass)
            }
            b.main.each(function(b) {
                a(this).data("switchable-idx", b)
            });
            var k = c.defaultPanel;
            c.hasHash && (k = b.getHash(k)),
                b.last = k,
                b.current = k,
                b.isInit = !0,
                c.seamlessLoop && d ? b.switchTo(k, k + b.cloneCount) : b.switchTo(k, k),
                b.autoInterval = null,
                b.eventTimer = null,
            c.hasPage && (d && b.page(),
            c.autoLock && b.updatePageButState()),
            d && (b.autoPlay(),
                b.bind())
        },
        addClass: function() {},
        bind: function() {
            var b = this;
            var c = b.options;
            b.nav.each(function(d) {
                var e = a(this);
                e.bind(c.event, function() {
                    clearInterval(b.autoInterval),
                    c.navDisabledClass && e.hasClass(c.navDisabledClass) || (0 === c.delay ? (b.current = d,
                        b.switchTo(d, c.seamlessLoop ? d + b.cloneCount : d)) : (clearTimeout(b.eventTimer),
                        b.eventTimer = setTimeout(function() {
                            b.current = d,
                                b.switchTo(d, c.seamlessLoop ? d + b.cloneCount : d)
                        }, c.delay)))
                }).bind("mouseleave", function() {
                    clearTimeout(b.eventTimer),
                    c.mouseenterStopPlay || b.autoPlay()
                }),
                "click" == c.event && e.bind("mouseover", function() {
                    clearTimeout(b.eventTimer),
                        clearInterval(b.autoInterval)
                })
            }),
            c.mouseenterStopPlay && b.el.each(function() {
                a(this).bind("mouseenter", function() {
                    clearInterval(b.autoInterval)
                }).bind("mouseleave", function() {
                    b.autoPlay()
                })
            }),
            !a.browser.isMobile() || "focus" != c.type && "slider" != c.type || (b.main.swipeLeft(function() {
                b.next()
            }),
                b.main.swipeRight(function() {
                    b.prev()
                }))
        },
        getHash: function(b) {
            var c = this;
            var d = window.location.hash;
            if ("" != d) {
                var e = c.nav;
                var f = null;
                if (a.each(e, function(b) {
                    a(this).attr("data-hash") == d && (f = b)
                }),
                null != f) {
                    b = f;
                    var g = c.nav.eq(f).offset().top;
                    var h = a.browser.webkit ? 50 : 0;
                    setTimeout(function() {
                        a(window).scrollTop(g)
                    }, h)
                }
            }
            return b
        },
        setHash: function(a) {
            var b = this;
            if (b.options.hasHash) {
                if (b.isInit && !window.location.hash)
                    return;
                var c = b.nav.eq(a).attr("data-hash");
                c = c.replace(/#/, ""),
                    window.location.hash = c
            }
        },
        switchTo: function(a, b) {
            var c = this;
            if ("undefined" == typeof b)
                var b = a;
            c.switchNavTo(a),
                c.switchMainTo(b)
        },
        switchNavTo: function(a) {
            var b = this;
            var c = b.options;
            b.nav.removeClass(c.navSelectedClass),
                b.nav.eq(a).addClass(c.navSelectedClass),
                b.setHash(a)
        },
        switchMainTo: function(b) {
            var c = this;
            var d = c.options;
            if (c.iframe(b),
            "imgscroll" != d.type && (c.main.removeClass(d.mainSelectedClass),
                c.main.eq(b).addClass(d.mainSelectedClass)),
            c.isInit || c.last != b) {
                if (c.switchType(b),
                null != d.callback) {
                    var e = b;
                    var f = !1;
                    var g = this.main.eq(e);
                    e + 1 == c.pageCount && (f = !0),
                    d.seamlessLoop && this.main.each(function() {
                        return e == a(this).data("switchable-clone-from") ? (g = g.add(a(this)),
                            !1) : void 0
                    }),
                        d.callback.call(c, e, f, g)
                }
                c.last = b
            }
        },
        switchType: function(a) {
            var b = this;
            var c = b.options;
            switch (c.type) {
                case "tab":
                    b.tab(a);
                    break;
                case "focus":
                    b.focus(a);
                    break;
                case "slider":
                    b.slider(a);
                    break;
                case "carousel":
                    b.carousel(a);
                    break;
                case "imgscroll":
                    b.imgscroll(a)
            }
        },
        switchDefault: function(a) {
            var b = this;
            b.main.hide(),
                b.main.eq(a).show()
        },
        tab: function(a) {
            var b = this;
            var c = b.options;
            if (c.hasSetup || b.switchDefault(a),
                c.hasArrow) {
                var d = c.arrowClass;
                var e = b.nav.eq(a).outerWidth(!0) * a;
                if (b.isInit) {
                    var f = b.nav.parent();
                    f.prepend('<div class="' + d + '"><b></b></div>').css({
                        position: "relative"
                    }),
                        b.el.find("." + d).css({
                            left: e
                        }),
                        b.isPlayLock = !1
                } else
                    setTimeout(function() {
                        b.isPlayLock = !1
                    }, c.speed),
                        b.el.find("." + d).stop(!0).animate({
                            left: e
                        }, c.speed, c.easing)
            }
            b.isInit = !1
        },
        focus: function(b) {
            var c = this;
            var d = c.options;
            c.isInit ? (c.main.parent().css({
                position: "relative"
            }),
                c.main.css({
                    position: "absolute",
                    zIndex: 0,
                    opacity: 0
                }).show(),
                c.main.eq(b).css({
                    zIndex: 1,
                    opacity: 1
                }),
                c.isPlayLock = !1) : (setTimeout(function() {
                c.isPlayLock = !1
            }, d.speed),
                c.main.eq(c.last).css({
                    zIndex: 0
                }).stop(!0).animate({
                    opacity: 1
                }, d.speed, d.easing, function() {
                    a(this).css("opacity", 0)
                })),
                c.main.eq(b).css({
                    zIndex: 1
                }).stop(!0).animate({
                    opacity: 1
                }, d.speed, d.easing),
                c.isInit = !1
        },
        slider: function(a) {
            var b = this;
            var c = b.options;
            var d = b.content;
            var e = b.mainHeight;
            var f = e * a;
            var g = b.mainWidth;
            var h = g * a;
            b.isInit ? ("left" == c.direction ? (b.main.css({
                "float": "left"
            }),
                d.css(c.seamlessLoop ? {
                    width: g * (b.size + 2 * b.cloneCount)
                } : {
                    width: g * b.size
                }),
                d.css({
                    left: -h
                })) : "top" == c.direction && d.css({
                top: -f
            }),
                d.parent().css({
                    position: "relative"
                }),
                d.css({
                    position: "absolute"
                }),
                b.switchDefault(a),
                b.isInit = !1,
                b.isPlayLock = !1) : (setTimeout(function() {
                b.isPlayLock = !1
            }, c.speed),
                "left" == c.direction ? d.stop(!0).animate({
                    left: -h
                }, c.speed, c.easing) : "top" == c.direction && d.stop(!0).animate({
                    top: -f
                }, c.speed, c.easing)),
                b.main.show()
        },
        carousel: function(a) {
            var b = this;
            b.slider(a)
        },
        imgscroll: function(b) {
            var c = this;
            var d = c.options;
            var e = c.mainWidth;
            var f = c.el.find("." + d.imgscrollClass);
            if (c.isInit) {
                c.el.find("." + d.bodyClass).css({
                    position: "relative",
                    overflow: "hidden",
                    width: e * d.visible
                }),
                    c.content.css({
                        position: "absolute",
                        width: e * c.size
                    }),
                    c.main.css({
                        "float": "left"
                    });
                var g = d.mainSelectedClass;
                if (c.main.eq(0).addClass(g),
                    !f.attr("src")) {
                    var h = c.el.find("." + d.imgscrollItemClass).eq(0).attr("data-url");
                    f.attr("src", h)
                }
                if (d.imgscrollLazyload)
                    for (var b = c.current; b < d.visible + 1; b++) {
                        var i = c.main.eq(b).find("." + d.imgscrollItemClass);
                        var h = i.attr("data-src");
                        i.attr("src", h)
                    }
                c.main.bind(d.event, function() {
                    var b = a(this);
                    var e = b.find("." + d.imgscrollItemClass).attr("data-url");
                    c.main.removeClass(g),
                        b.addClass(g),
                        f.attr("src", e)
                }),
                    c.isInit = !1,
                    c.isPlayLock = !1
            } else {
                setTimeout(function() {
                    c.isPlayLock = !1
                }, d.speed);
                var j = c.current * e;
                if (d.imgscrollLazyload) {
                    var i = c.main.eq(d.visible + c.current).find("." + d.imgscrollItemClass);
                    var h = i.attr("data-src");
                    i.attr("src", h)
                }
                c.content.stop(!0).animate({
                    left: -j
                }, d.speed)
            }
        },
        page: function() {
            var a = this;
            var b = a.options;
            var c = a.el.find("." + b.nextClass);
            var d = a.el.find("." + b.prevClass);
            d.bind("click", function(c) {
                a.isPlayLock && a.content && a.content.length > 0 || b.autoLock && 0 == a.current || (a.isPlayLock = !0,
                    a.prev(),
                    c.stopPropagation())
            }),
                c.bind("click", function(c) {
                    a.isPlayLock && a.content && a.content.length > 0 || b.autoLock && a.current >= a.size - b.visible || (a.isPlayLock = !0,
                        a.next(),
                        c.stopPropagation())
                })
        },
        next: function() {
            var b = this;
            var c = b.options;
            b.current = b.current + c.step,
                b.offsetIndex();
            var d = 0;
            !c.seamlessLoop && c.hasLoop && (d = -c.visible + c.step),
            b.current >= b.size + d && (b.current = 0);
            var e = c.visible > c.step ? c.visible : c.step;
            !c.seamlessLoop && b.current + e > b.size && (b.current = b.size > e ? b.size - e : 0);
            var f = c.seamlessLoop ? b.current + b.cloneCount : b.current;
            b.switchTo(b.current, f),
                b.updatePageButState(),
            a.isFunction(c.onNext) && c.onNext.call(b)
        },
        prev: function() {
            var b = this;
            var c = b.options;
            c.seamlessLoop ? b.offsetIndex(!0) : (b.current -= c.step,
            b.current < 0 && (b.current = b.current > -c.step ? 0 : b.size - c.step));
            var d = c.seamlessLoop ? b.current + b.cloneCount : b.current;
            b.switchTo(b.current, d),
                b.updatePageButState(),
            a.isFunction(c.onPrev) && c.onPrev.call(b)
        },
        updatePageButState: function() {
            var a = this;
            var b = a.options;
            if (b.hasPage && b.autoLock) {
                var c = a.el.find("." + b.nextClass);
                var d = a.el.find("." + b.prevClass);
                var e = b.pagCancelClass;
                a.current >= a.size - Math.max(b.visible, b.step) ? c.addClass(e) : c.removeClass(e),
                    a.current <= 0 ? d.addClass(e) : d.removeClass(e)
            }
        },
        offsetIndex: function(a) {
            var b = this;
            var c = b.content;
            var d = b.options;
            var e = b.mainWidth;
            var f = b.mainHeight;
            var g = null;
            var h = null;
            var i = null;
            a && d.seamlessLoop ? (i = b.current,
                b.current <= 0 ? (i = b.size - d.step + b.current,
                    g = -((b.size + (b.cloneCount + b.current)) * e),
                    h = -((b.size + (b.cloneCount + b.current)) * f)) : i -= d.step,
                b.current = i) : b.current >= b.size && d.seamlessLoop && (i = b.current - b.size,
                g = -((i + b.cloneCount - d.step) * e),
                h = -((i + b.cloneCount - d.step) * f),
                b.current = i),
                null != g && "left" == d.direction ? c.css({
                    left: g
                }) : null != h && "top" == d.direction && c.css({
                    top: h
                })
        },
        autoPlay: function() {
            var a = this;
            a.options.autoPlay && a.startPlay()
        },
        startPlay: function() {
            var a = this;
            var b = a.options;
            a.stopPlay(),
                a.autoInterval = setInterval(function() {
                    a.main.length <= b.step ? a.stopPlay() : "prev" == b.playDirection ? a.prev() : a.next()
                }, b.stayTime)
        },
        stopPlay: function() {
            var a = this;
            clearInterval(a.autoInterval)
        },
        iframe: function(a) {
            var b = this;
            var c = b.main.eq(a);
            var d = b.nav.eq(a);
            var e = d.attr(b.options.navIframe);
            if (e) {
                var f = document.createElement("iframe");
                f.src = e,
                    f.border = 0,
                    f.frameborder = "no",
                    f.marginwidth = 0,
                    f.marginheight = 0,
                    c.html(f),
                    d.removeAttr(b.options.navIframe)
            }
        },
        update: function(c, d) {
            var e = this;
            var f = e.options;
            var g = e.main.length;
            var h = -1;
            var i = -1;
            var j = !1;
            if (a.isFunction(c) && (d = c,
                c = 0),
                isNaN(parseInt(c)) ? (c.hasClass(f.mainClass) || (c = c.closest("." + f.mainClass)),
                c.hasClass(f.mainClass) && (i = c.data("switchable-idx"))) : i = c,
                h = i,
            f.autoPlay && (e.stopPlay(),
                f.autoPlay = !1,
                j = !0),
            f.seamlessLoop && g > f.step) {
                var k = e.main.length - 2 * f.step;
                var l = !1;
                e.main.each(function() {
                    var c = a(this);
                    "1" == c.data("switchable-clone") && (l = !0,
                        a(this).remove())
                }),
                l && (h = i < f.step || i >= k + f.step ? i >= k + f.step ? i - k - f.step : k - f.step + i : i - f.step)
            }
            if (f.hasPage) {
                var m = e.el.find("." + f.nextClass);
                var n = e.el.find("." + f.prevClass);
                m.unbind("click"),
                    n.unbind("click")
            }
            e.main = e.el.find("." + f.mainClass),
                g = e.main.length;
            var o = function(a) {
                if (a == b || null == a) {
                    var c = e.el.find("." + f.mainClass).length;
                    g > c ? h -= g - c : h = c > g ? c > f.visible ? c - f.visible : 0 : e.current,
                    0 > h && (h = 0),
                    j && (f.autoPlay = !0),
                    f.autoLock && !f.seamlessLoop && h + f.visible >= c && (h = c - f.visible,
                    0 > h && (h = 0))
                } else
                    h = a;
                f.defaultPanel = h,
                    e.init()
            };
            d.call(e.main.eq(h), e.content, h, o) ? e.el.find("." + f.mainClass).each(function(b) {
                a(this).data("switchable-idx", b)
            }) : o()
        }
    })
}(jQuery);
/* jdf-1.0.0/ dropdown.js Date:2021-12-28 11:00:42 */
!function(a) {
    a.ui.define("dropdown", {
        options: {
            hasCssLink: !1,
            baseVersion: "1.0.0",
            cssLinkVersion: "1.0.0",
            item: "ui-dropdown-item",
            trigger: !1,
            current: "ui-dropdown-hover",
            bodyClass: "ui-dropdown-bd",
            subBodyClass: "ui-dropdown-sub",
            topspeed: !1,
            boundary: 10,
            enterDelay: 0,
            leaveDelay: 0,
            zIndex: 1e3,
            align: "bottom",
            left: null,
            top: null,
            submenuLeft: 0,
            submenuTop: 0,
            onchange: null,
            onmouseleave: null
        },
        init: function() {
            this.mouseLocs = [],
                this.lastDelayLoc = null,
                this._create(),
                this.bind()
        },
        _create: function() {
            var a = this.options;
            this.item = a.trigger ? this.el : this.el.find("." + a.item),
                this.body = this.el.find("." + a.bodyClass);
            var b = a.top;
            var c = a.left;
            "bottom" == a.align && null == a.top && (a.top = this.item.outerHeight()),
            "right" == a.align && (a.top = 0,
            null == a.left && (a.left = this.item.outerWidth())),
            (null != b || null != c) && this.body.css({
                position: "absolute",
                top: a.top,
                left: a.left,
                zIndex: a.zIndex
            }),
                this.el.find("." + a.subBodyClass).css({
                    zIndex: a.zIndex + 1
                }),
                this.bodyOuterWidth = this.body.outerWidth(),
                this.bodyBorderWidth = 2 * this.getStyle(this.body[0], "borderWidth")
        },
        bind: function() {
            var b = this;
            var c = this.options;
            var d = !1;
            var e, f;
            var g = 3;
            var h = null;
            var i = null;
            var j = !1;
            this.el.bind("mouseenter", function() {
                clearTimeout(e)
            }),
                this.el.bind("mouseleave", function() {
                    d && (e = setTimeout(function() {
                        b.removeClass()
                    }, c.leaveDelay)),
                    c.onmouseleave && c.onmouseleave(a(this)),
                        h = null
                }),
                this.item.bind("mouseenter", function() {
                    if (j)
                        return !1;
                    var e = a(this);
                    var g = function() {
                        j = !0,
                            h = e.index(),
                            b.removeClass(),
                            e.addClass(c.current),
                            d = !0,
                        c.onchange && c.onchange(e)
                    };
                    f = setTimeout(function() {
                        0 == b.topspeed(e) && (g(),
                            clearTimeout(i))
                    }, c.enterDelay),
                    c.topspeed && (i = setTimeout(function() {
                        h != e.index() && g()
                    }, 700))
                }),
                this.item.bind("mouseleave", function() {
                    clearTimeout(f),
                        clearTimeout(i),
                        j = !1
                }),
                this.el.find("." + c.subBodyClass).bind("mouseenter", function() {
                    var d = b.bodyOuterWidth - b.bodyBorderWidth + c.submenuLeft;
                    var e = b.getStyle(a(this)[0], "paddingLeft");
                    d = a.browser.isIE6() ? d - e : d;
                    var f = 0 + c.submenuTop;
                    a(this).find("." + c.bodyClass).show().css({
                        left: d,
                        top: f
                    })
                }).bind("mouseleave", function() {
                    a(this).find("." + c.bodyClass).hide()
                }),
            c.topspeed && a(document).mousemove(function(a) {
                b.mouseLocs.push({
                    x: a.pageX,
                    y: a.pageY
                }),
                b.mouseLocs.length > g && b.mouseLocs.shift()
            })
        },
        removeClass: function() {
            this.item.removeClass(this.options.current)
        },
        getStyle: function(a, b) {
            if (a) {
                var c = window.getComputedStyle ? window.getComputedStyle(a, null)[b] : a.currentStyle[b];
                return c = parseInt(c),
                c || (c = 0),
                    c
            }
        },
        topspeed: function() {
            var a = this.options;
            if (!a.topspeed)
                return 0;
            var b = this.el;
            var c = b.offset()
                , d = {
                x: c.left,
                y: c.top
            }
                , e = {
                x: c.left + b.outerWidth(),
                y: d.y
            }
                , f = {
                x: c.left,
                y: c.top + b.outerHeight()
            }
                , g = {
                x: c.left + b.outerWidth(),
                y: f.y
            };
            if (loc = this.mouseLocs[this.mouseLocs.length - 1],
                prevLoc = this.mouseLocs[0],
                !loc)
                return 0;
            if (prevLoc || (prevLoc = loc),
            prevLoc.x < c.left || prevLoc.x > g.x || prevLoc.y < c.top || prevLoc.y > g.y)
                return 0;
            if (this.lastDelayLoc && loc.x == this.lastDelayLoc.x && loc.y == this.lastDelayLoc.y)
                return 0;
            function h(a, b) {
                return (b.y - a.y) / (b.x - a.x)
            }
            var i = e
                , j = g;
            var k = h(loc, i)
                , l = h(prevLoc, i)
                , m = h(loc, j)
                , n = h(prevLoc, j);
            return l > k && m > n ? prevLoc.x - d.x < a.boundary ? 0 : (this.lastDelayLoc = loc,
                300) : (this.lastDelayLoc = null,
                0)
        }
    })
}(jQuery);
/* jdf-1.0.0/ dialog.js Date:2021-12-28 11:00:42 */
!function(a) {
    a.ui.define("dialog", {
        options: {
            hasCssLink: !0,
            baseVersion: "1.0.0",
            cssLinkVersion: "1.0.0",
            maskHas: !0,
            maskClass: "ui-mask",
            maskIframe: !1,
            maskClose: !1,
            opacity: .15,
            zIndex: 9998,
            type: "text",
            source: null,
            extendMainClass: null,
            autoIframe: !0,
            autoOpen: !0,
            autoCloseTime: 0,
            title: !0,
            hasButton: !1,
            submitButton: "\u786e\u8ba4",
            cancelButton: "\u53d6\u6d88",
            onSubmit: null,
            onCancel: null,
            onBeforeClose: null,
            closeButton: !0,
            onReady: null,
            width: 480,
            height: null,
            fixed: !1,
            autoUpdate: !1,
            maskId: null,
            mainId: null,
            contentId: null,
            titleId: null,
            iframeName: "dialogIframe",
            iframeTimestamp: !0
        },
        init: function() {
            var b = this.options;
            a.browser.isIE6() && (b.fixed = !1),
                this.createMain(),
                this.createMask(),
                this.mainStyle(),
                b.autoOpen ? this.open() : this.hide(),
                this.bind()
        },
        show: function() {
            this.mask && this.mask.show(),
                this.el.show()
        },
        hide: function() {
            this.mask && this.mask.hide(),
                this.el.hide()
        },
        tpl: {
            mask: '<div class="ui-mask"></div>',
            close: '<a class="ui-dialog-close" title="\u5173\u95ed"><span class="ui-icon ui-icon-delete"></span></a>',
            title: '<div class="ui-dialog-title">						<span><%=title%></span>					</div>				',
            wrap: '<div class="ui-dialog"></div>',
            conten: '<div class="ui-dialog-content"></div>',
            button: '<div class="ui-dialog-btn">						<%if($.trim(submit)){%><a class="ui-dialog-btn-submit"><%=submit%></a><%}%>						<%if($.trim(cancel)){%><a class="ui-dialog-btn-cancel"><%=cancel%></a><%}%>					</div>				'
        },
        createMain: function() {
            var c = this.options;
            var d = "";
            c.title && (d = a.tpl(this.tpl.title, {
                title: c.title
            }));
            var e = a.tpl(this.tpl.button, {
                submit: this.options.submitButton,
                cancel: this.options.cancelButton
            });
            var f = d + this.tpl.conten + (c.hasButton ? e : "");
            this.el = a(this.tpl.wrap),
            c.extendMainClass && this.el.addClass(c.extendMainClass),
                a(f).appendTo(this.el),
                this.el.appendTo("body"),
                this.content = this.el.find(".ui-dialog-content"),
                this.title = this.el.find(".ui-dialog-title"),
            c.mainId && this.el.attr("id", c.mainId),
            c.contentId && this.content.attr("id", c.contentId),
            c.titleId && this.title.attr("id", c.titleId),
            c.closeButton && this.el.append(this.tpl.close)
        },
        createMask: function() {
            var b = this;
            var c = this.options;
            if (c.maskHas) {
                {
                    this.mask = a(document.createElement("div"))
                }
                this.mask.addClass(c.maskClass).css({
                    position: "absolute",
                    left: 0,
                    top: 0,
                    opacity: c.opacity,
                    zIndex: c.zIndex,
                    backgroundColor: "#000",
                    width: a.page.docWidth(),
                    height: a.page.docHeight()
                }),
                c.maskId && this.mask.attr("id", c.maskId),
                a("." + c.maskClass)[0] || this.mask.appendTo("body"),
                (a.browser.isIE6() || c.maskIframe) && this.mask.append('<iframe src="about:blank" class="jdMaskIframe" frameBorder="0" style="width:100%;height:100%;position:absolute;z-index:' + (c.zIndex + 1) + ';opacity:0;filter:alpha(opacity=0);top:0;left:0;">'),
                    a(window).resize(function() {
                        b.mask.css({
                            width: a.page.docWidth(),
                            height: a.page.docHeight()
                        })
                    })
            }
        },
        getPadding: function(a) {
            return {
                width: parseInt(a.css("paddingLeft"), 10) + parseInt(a.css("paddingRight"), 10),
                height: parseInt(a.css("paddingTop"), 10) + parseInt(a.css("paddingBottom"), 10)
            }
        },
        mainStyle: function() {
            var b = this.options;
            b.title && (b.height = b.height ? b.height + 28 : b.height,
                this.title.css({
                    width: b.width - this.getPadding(this.content).width
                })),
                this.content.css({
                    height: b.height ? b.height : "",
                    width: b.width ? b.width - this.getPadding(this.content).width : "",
                    overflow: "hidden"
                }),
            b.width && this.el.css({
                width: b.width
            });
            var c = b.fixed && !a.browser.isIE6() ? "fixed" : "absolute";
            this.el.css({
                position: c,
                zIndex: b.zIndex + 2,
                display: "block",
                overflow: "hidden"
            }),
                this.updateMain()
        },
        updateMain: function() {
            var b = this.options;
            var c = a.page.docWidth() != a.page.clientWidth() ? 16 : 0;
            var d = b.fixed ? 0 : a(document).scrollTop();
            var e = b.fixed ? 0 : a(document).scrollLeft();
            var f = (a.page.clientHeight() - this.el.outerHeight()) / 2 + d;
            var g = a.browser.msie && a.browser.version < 10 ? 0 : 8;
            var h = (a.page.clientWidth() - c - (b.width ? b.width + g : 0)) / 2 + e;
            0 > f && (f = 0),
            0 > h && (h = 0),
                this.el.css({
                    top: f,
                    left: h
                })
        },
        bind: function() {
            var b = this;
            var c = this.options;
            this.options.closeButton && this.el.find(".ui-dialog-close").bind("click", function() {
                b.close()
            }),
            this.options.autoUpdate && a(window).resize(function() {
                b.updateMain()
            }),
            c.hasButton && (this.el.find(".ui-dialog-btn-submit").bind("click", function() {
                c.onSubmit && c.onSubmit.call(this)
            }),
                this.el.find(".ui-dialog-btn-cancel").bind("click", function() {
                    b.close()
                })),
            this.options.maskHas && this.options.maskClose && a(this.mask).bind("click", function() {
                b.close()
            })
        },
        open: function() {
            this.openType(),
                this.autoClose(),
                this.show(),
                this.iframeSet(),
            this.options.onReady && this.options.onReady.call(this)
        },
        openType: function() {
            var b = this.options;
            var c = this;
            switch (b.type) {
                case "text":
                    this.content.html(b.source);
                    break;
                case "html":
                    a(b.source).clone().appendTo(this.content);
                    break;
                case "iframe":
                    var d = {
                        width: "100%",
                        height: "100%"
                    };
                    b.iframeTimestamp && !/&t=/.test(b.source) && (b.source += (b.source.indexOf("?") > -1 ? "&" : "?") + "t=" + (new Date).getTime()),
                        this.iframe = a('<iframe src="' + b.source + '" id="' + b.iframeName + '" name="' + b.iframeName + '" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" style="border:0"></iframe>').css(d).appendTo(this.content);
                    break;
                case "image":
                    var e = b.width ? 'width="' + b.width + '"' : "";
                    var f = b.height ? 'height="' + b.height + '"' : "";
                    var g = a("<img src=" + b.source + " " + e + f + "/>");
                    g.appendTo(this.content),
                        g.bind("load", function() {
                            c.updateMain()
                        });
                    break;
                case "json":
            }
            c.updateMain()
        },
        close: function() {
            var a = this.options;
            this.options.autoCloseTime;
            a.onBeforeClose && a.onBeforeClose.call(this),
                this.el.remove(),
            this.mask && this.mask.remove(),
            a.onCancel && a.onCancel.call(this)
        },
        autoClose: function() {
            var b = this;
            var c = this.options.autoCloseTime;
            if (c) {
                var d = c;
                a("<div class='ui-dialog-autoclose'><span id='ui-autoclose'>" + d + "</span>\u79d2\u540e\u81ea\u52a8\u5173\u95ed</div>").appendTo(this.el),
                    clearInterval(window.autoCloseTimerDialog),
                    window.autoCloseTimerDialog = setInterval(function() {
                        d--,
                            a("#ui-autoclose").html(d),
                        0 == d && (d = c,
                            b.close(),
                            clearInterval(window.autoCloseTimerDialog))
                    }, 1e3),
                    this.updateMain()
            }
        },
        getIframeHeight: function(a) {
            var b = a[0].contentWindow.document;
            return b.body.scrollHeight && b.documentElement.scrollHeight ? Math.min(b.body.scrollHeight, b.documentElement.scrollHeight) : b.documentElement.scrollHeight ? b.documentElement.scrollHeight : b.body.scrollHeight ? b.body.scrollHeight : void 0
        },
        syncHeight: function() {
            var a = this;
            var b;
            try {
                b = a.getIframeHeight(a.iframe)
            } catch (c) {}
            b && (a.iframe.css({
                height: b
            }),
                a.updateMain())
        },
        iframeSet: function() {
            var a = this;
            var b = this.options;
            "iframe" == b.type && b.autoIframe && this.iframe.one("load", function() {
                a.syncHeight()
            })
        }
    }),
        a.closeDialog = function() {
            a(".ui-dialog,.ui-mask").remove(),
                clearInterval(window.autoCloseTimerDialog)
        }
}(jQuery);
/* jdf-1.0.0/ lazyload.js Date:2021-12-28 11:00:42 */
!function(a) {
    var c = "done";
    function d(b, d, e) {
        var f = function(c) {
            b.removeClass(e.placeholderClass),
            a.isFunction(e.onLoadImg) && (c && d == e.blankImgUrl && (c = !1),
                e.onLoadImg.call(b, c)),
                b[0].onload = b[0].onerror = null
        };
        var g = b[0].onerror;
        b[0].onerror = function() {
            a.isFunction(g) ? g.call(b[0]) : b.attr("src", e.blankImgUrl).addClass(e.errorClass),
                f(!1)
        }
            ,
            b[0].onload = function() {
                f(!0)
            }
            ,
        d || b.attr("src") || (d = e.blankImgUrl),
            b.attr("src", d),
            b.attr(e.source, c),
        a.isFunction(e.onchange) && e.onchange.call(b)
    }
    function e(b, c, d) {
        "function" == typeof define && define.cmd ? seajs.use(b, function(a) {
            a.init(c),
                d()
        }) : (a.ajax({
            url: b,
            dataType: "script",
            cache: !0
        }),
            d())
    }
    function f(a, b, d) {
        "0" == a.attr("data-lazyload-fn") && (a.attr("data-lazyload-fn", c),
            d(),
        b.onchange && b.onchange(a))
    }
    a.ui.define("lazyload", {
        options: {
            type: "img",
            source: "data-lazy-path",
            init: "data-lazy-init",
            delay: 100,
            space: 100,
            onchange: null,
            onLoadImg: null,
            placeholderClass: "loading-style2",
            errorClass: "err-poster",
            blankImgUrl: "//misc.360buyimg.com/lib/img/e/blank.gif",
            isUseLeft: !1
        },
        init: function() {
            var b = this;
            var g = this.options;
            var h = null;
            var i = null;
            var j = null;
            "img" == g.type && ("data-lazy-path" == g.source && (g.source = "data-lazy-img"),
                j = g.source + "-install");
            var k = "div";
            if ("img" == g.type) {
                if (k = "IMG",
                    h = a("img[" + g.source + "][" + g.source + "!=done]", b.el),
                    i = h.size(),
                    !i)
                    return !1
            } else
                "fn" == g.type && (k = g.source);
            b.isNonTopTag = !(b.el.is("body,html") || b.el.is(document));
            var l = function() {
                h = "img" == g.type ? a("img[" + g.source + "][" + g.source + "!=done]", b.el) : a(k, b.el),
                    i = h.size();
                var l = a(document).scrollTop();
                var m = a(document).scrollLeft();
                b.isNonTopTag && b.el.scrollTop() && (l += b.el.scrollTop() - b.el.height() + g.space);
                var o = l + a.page.clientHeight() + g.space;
                var p = m + a.page.clientWidth();
                a.each(h, function() {
                    var h = a(this);
                    var j = null;
                    if (("js" == g.type || "img" == g.type) && (j = h.attr(g.source)),
                    j || "fn" == g.type || "img" == g.type) {
                        var k = b.getTop(h[0]);
                        var m = i > 0 && k > 0 && k > l - h.outerHeight() && o > k;
                        if (g.isUseLeft && m && (m = p > b.getLeft(h[0])),
                            m) {
                            var n = h.attr(g.init);
                            "img" == g.type ? (n = h.attr(g.source),
                                n != c ? (d(h, n, g),
                                    i -= 1) : n == c && (i -= 1)) : "js" == g.type ? h.attr(g.init) != c && e(j, n, function() {
                                i -= 1,
                                    h.attr(g.init, c)
                            }) : "fn" == g.type && f(h, g, function() {
                                i -= 1
                            })
                        }
                    }
                }),
                i || (j && b.el.removeAttr(j),
                b.isNonTopTag && a(b.el).unbind("scroll", n),
                    a(window).unbind("scroll", n),
                    a(window).unbind("resize", n))
            };
            var m = setTimeout(l, 0);
            var n = function() {
                m && clearTimeout(m),
                    m = setTimeout(l, g.delay)
            };
            return j && "1" == b.el.attr(j) ? !1 : (j && b.el.attr(j, 1),
            b.isNonTopTag && a(b.el).bind("scroll", n),
                a(window).bind("scroll", n),
                a(window).bind("resize", n),
                void ("fn" == g.type && g.source.attr("data-lazyload-fn", "0")))
        },
        getTop: function(a) {
            var b = a.offsetTop;
            if (null != a.parentNode) {
                var c = a.offsetParent;
                for (; null != c; )
                    b += c.offsetTop,
                        c = c.offsetParent
            }
            return b
        },
        getLeft: function(a) {
            var b = a.offsetLeft;
            if (null != a.parentNode) {
                var c = a.offsetParent;
                for (; null != c; )
                    b += c.offsetLeft,
                        c = c.offsetParent
            }
            return b
        }
    })
}(jQuery);
/* jdf-1.0.0/ areamini.js Date:2021-12-28 11:00:42 */
!function(a) {
    var c = window;
    var e = [1, 72, 0, 0];
    var f = e.join("-");
    var g = -1;
    var h = {
        province: {
            "\u5317\u4eac": 1,
            "\u4e0a\u6d77": 2,
            "\u5929\u6d25": 3,
            "\u91cd\u5e86": 4,
            "\u6cb3\u5317": 5,
            "\u5c71\u897f": 6,
            "\u6cb3\u5357": 7,
            "\u8fbd\u5b81": 8,
            "\u5409\u6797": 9,
            "\u9ed1\u9f99\u6c5f": 10,
            "\u5185\u8499\u53e4": 11,
            "\u6c5f\u82cf": 12,
            "\u5c71\u4e1c": 13,
            "\u5b89\u5fbd": 14,
            "\u6d59\u6c5f": 15,
            "\u798f\u5efa": 16,
            "\u6e56\u5317": 17,
            "\u6e56\u5357": 18,
            "\u5e7f\u4e1c": 19,
            "\u5e7f\u897f": 20,
            "\u6c5f\u897f": 21,
            "\u56db\u5ddd": 22,
            "\u6d77\u5357": 23,
            "\u8d35\u5dde": 24,
            "\u4e91\u5357": 25,
            "\u897f\u85cf": 26,
            "\u9655\u897f": 27,
            "\u7518\u8083": 28,
            "\u9752\u6d77": 29,
            "\u5b81\u590f": 30,
            "\u65b0\u7586": 31,
            "\u6e2f\u6fb3": 52993,
            "\u53f0\u6e7e": 32,
            "\u9493\u9c7c\u5c9b": 84,
            "\u6d77\u5916": 53283
        },
        city: {
            1: "1-72-2799",
            2: "2-2813-51976",
            3: "3-51035-39620",
            4: "4-113-9775",
            5: "5-142-143",
            6: "6-303-304",
            7: "7-412-415",
            8: "8-560-567",
            9: "9-639-640",
            10: "10-727-728",
            11: "11-799-801",
            12: "12-904-905",
            13: "13-2900-2908",
            14: "14-1151-1153",
            15: "15-1158-1224",
            16: "16-1303-1305",
            17: "17-1432-1435",
            18: "18-1482-1485",
            19: "19-1601-3633",
            20: "20-3168-3169",
            21: "21-1827-1828",
            22: "22-2103-2105",
            23: "23-3690-3693",
            24: "24-2144-2145",
            25: "25-4108-6823",
            26: "26-3970-3972",
            27: "27-2428-2429",
            28: "28-2525-2526",
            29: "29-2580-2581",
            30: "30-2628-2629",
            31: "31-4110-4122",
            52993: "52993-52994-52996",
            32: "32-2768-2769",
            84: "84-1310-0",
            53283: "53283-53309-0"
        },
        area: {},
        provinceList: null
    };
    h.province = function() {
        var b = {};
        return a.each(h.province, function(a, c) {
            b["_" + c] = a
        }),
            b
    }();
    var i = function(a, b, c) {
        if ("undefined" == typeof b) {
            var i = null;
            if (document.cookie && "" != document.cookie) {
                var j = document.cookie.split(";");
                for (var k = 0; k < j.length; k++) {
                    var l = jQuery.trim(j[k]).split("=");
                    if (l[0] == a && l.length > 1) {
                        try {
                            i = decodeURIComponent(l[1])
                        } catch (m) {
                            i = l[1]
                        }
                        break
                    }
                }
            }
            return i
        }
        c = c || {},
        null === b && (b = "",
            c.expires = -1);
        var d = "";
        if (c.expires && ("number" == typeof c.expires || c.expires.toUTCString)) {
            var e;
            "number" == typeof c.expires ? (e = new Date,
                e.setTime(e.getTime() + 24 * c.expires * 60 * 60 * 1e3)) : e = c.expires,
                d = "; expires=" + e.toUTCString()
        }
        var f = c.path ? "; path=" + c.path : "";
        var g = c.domain ? "; domain=" + c.domain : "";
        var h = c.secure ? "; secure" : "";
        document.cookie = [a, "=", encodeURIComponent(b), d, f, g, h].join("")
    };
    function j(a) {
        return (a || "").replace(/(^\s*)|(\s*$)/g, "")
    }
    function k(a) {
        var b = arguments;
        if (b.length > 1) {
            for (var c = 0, d = b.length; d > c; c++)
                if (k(b[c]))
                    return !0;
            return !1
        }
        return "undefined" === String(a) || "null" === String(a) || ("string" == typeof a ? "" === j(a) : !1)
    }
    function l(a, b) {
        var c = {
            provinceId: 0,
            provinceName: "",
            cityId: 0,
            cityName: "",
            districtId: 0,
            districtName: "",
            townId: 0,
            townName: ""
        };
        var d = a.split("-");
        0 == d[0] && (d = e);
        var f = n(d[0]).value;
        c.provinceId = f.id,
            c.provinceName = f.name,
            b(c)
    }
    function m() {
        var b = [];
        return h.provinceList && h.provinceList.length > 0 ? b = h.provinceList : (a.each(h.province, function(a, c) {
            b.push({
                id: a.replace("_", ""),
                name: c
            })
        }),
            h.provinceList = b),
            b
    }
    function n(a) {
        var b = {
            id: a,
            name: ""
        };
        var c = 0;
        var d = h.province["_" + a];
        return d || (d = h.province["_" + e[0]],
            c = 1,
            b.id = e[0]),
            b.name = d,
            {
                value: b,
                isDefault: c
            }
    }
    function o(a, b) {
        l(a.initArea || i(a.cookieMapping.allLocal) || a.defaultArea || f, b)
    }
    function p(a) {
        return a && [{
            id: a.provinceId,
            name: a.provinceName
        }, {
            id: a.cityId,
            name: a.cityName
        }, {
            id: a.districtId,
            name: a.districtName
        }, {
            id: a.townId,
            name: a.townName
        }] || []
    }
    function q(b, c, d) {
        a.each(p(b), function(a, b) {
            k(b.id) || 0 == b.id || (c.push(b.id),
                d.push(b.name))
        })
    }
    function r(b, c, d, e) {
        var f = "";
        if (c.name.length >= d.longerAreaSize ? f = "longer-area" : c.name.length >= d.longAreaSize && (f = "long-area"),
        e && d.className.selected || f) {
            var g = a(b);
            e && d.className.selected && g.find("a:first").addClass(d.className.selected),
            f && g.addClass(f),
                b = a("<div/>").html(g).html(),
                b = b.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        }
        return c.tpl ? a.tpl(c.tpl, c) : a.tpl(b, c)
    }
    function s(b, c, d, e) {
        var f = this;
        var g = f.options.provinceList;
        var h = [];
        var i = [];
        return i = g ? g : m(),
            a.each(i, function(a, b) {
                h.push(r(c, b, f.options, b.id == e.provinceId))
            }),
            a.tpl(b, {
                list: h.join(""),
                index: d
            })
    }
    function t() {
        var b = this;
        var c = b.el;
        var d = b.options;
        var e = d.className;
        a("." + e.content_content, c).undelegate("a[data-id]", "click").delegate("a[data-id]", "click", function(f) {
            f.preventDefault();
            var g = a(this);
            var h = {
                id: g.data("id"),
                name: g.html()
            };
            var i = y(c, h.id, 0);
            d.className.selected && a("." + e.content_content + " a." + d.className.selected, c).removeClass(d.className.selected),
                l(i, function(c) {
                    d.className.selected && g.addClass(d.className.selected),
                    d.selectedClose && v.call(b, !1),
                        A.call(b, c),
                    d.writeCookie && u(d, c.provinceId, i),
                    a.isFunction(d.onChange) && d.onChange.call(b, g, h, c)
                })
        }),
            a("." + e.content_content, c).undelegate("a[data-onchange=1]", "click").delegate("a[data-onchange=1]", "click", function() {
                var f = a(this);
                d.className.selected && (a("." + e.content_content + " a." + d.className.selected, c).removeClass(d.className.selected),
                    f.addClass(d.className.selected)),
                d.selectedClose && v.call(b, !1),
                a.isFunction(d.onChange) && d.onChange.call(b, f)
            })
    }
    function u(a, b, c) {
        i(a.cookieMapping.areaId, b, a.cookieOpts),
            i(a.cookieMapping.allLocal, c, a.cookieOpts)
    }
    function v(a) {
        var b = this;
        var c = b.options.className.hover;
        a ? (g > -1 && (clearTimeout(g),
            g = -1),
            w.call(b),
            b.el.addClass(c),
            g = setTimeout(function() {
                b.el.addClass(c)
            }, 1)) : (g > -1 && (clearTimeout(g),
            g = -1),
            b.el.removeClass(c))
    }
    function w() {
        var b = this;
        var d = b.el;
        var e = a(b.css.content);
        var f = a(b.css.text).width();
        var g = e.width();
        var h = a(c).width();
        var i = d.offset().left;
        var j = a(b.css.text).offset().left;
        if (e.data("left") ? e.css("left", e.data("left")) : e.data("left", e.css("left")),
        i + g > h) {
            var k = g - f - 10;
            k > j && (k -= k - j + f - 20),
                e.css({
                    left: "-" + k + "px"
                })
        } else
            i < -1 * parseInt(e.css("left")) && e.css({
                left: "0px"
            })
    }
    function x(a) {
        return a ? [a.provinceId, a.cityId, a.districtId, a.townId] : [0, 0, 0, 0]
    }
    function y(a, b) {
        var d = a.data("select-local");
        return d = d && d.split("-") || [0, 0, 0, 0],
            "object" == typeof b ? d = x(b) : (d = h.city[b],
            d && (d = (d + "-0").split("-"))),
            d = d.join("-"),
            a.data("select-local", d),
            d
    }
    function z(b, c) {
        var d = this;
        var e = d.el;
        var f = d.options;
        var g = f.tplContentWrap;
        var h = f.tplContentItem;
        a(d.css.content_content).html(s.call(d, g, h, 0, b)),
        -1 == c && y(e, b),
            t.call(d, f)
    }
    function A(b) {
        var c = this;
        var d = []
            , e = [];
        q(b, e, d),
            e = e.join("-"),
            d = d.join(""),
            a(c.css.text_text).html(d).attr("data-id", e).attr("title", d)
    }
    function B(b, c) {
        var d = {};
        return a.each(c, function(e, f) {
            var g = e.split("_");
            var h = [];
            var i = g.length;
            a.each(g, function(a, b) {
                return h.push("." + c[b]),
                    i > 1 && 2 + a == i ? (h.push("." + f),
                        !1) : void 0
            }),
                d[e] = b + " " + h.join(" ")
        }),
            d
    }
    a.ui.define("areamini", {
        options: {
            hasCssLink: !0,
            baseVersion: "1.0.0",
            cssLinkVersion: "1.0.0",
            initArea: null,
            defaultArea: null,
            provinceList: null,
            provinceExtend: !0,
            longAreaSize: 4,
            longerAreaSize: 12,
            cookieMapping: {
                areaId: "areaId",
                allLocal: "ipLoc-djd"
            },
            writeCookie: !0,
            cookieOpts: {
                expires: 30,
                path: "/",
                domain: document.domain,
                secure: null
            },
            className: {
                hover: "ui-areamini-hover",
                text: "ui-areamini-text-wrap",
                text_text: "ui-areamini-text",
                content: "ui-areamini-content-wrap",
                close: "ui-areamini-close",
                content_tab: "ui-areamini-tab",
                content_content: "ui-areamini-content",
                content_content_list: "ui-areamini-content-list",
                selected: ""
            },
            tplContentWrap: '<ul class="ui-areamini-content-list"><%=list%></ul>',
            tplContentItem: '<li><a data-id="<%=id%>" href="javascript:void(0)"><%=name%></a></li>',
            event: "hover",
            onReady: null,
            onChange: null,
            selectedClose: !0
        },
        css: {},
        init: function() {
            var b = this;
            var c = b.options;
            var d = b.el;
            c.scopeLevel = 1,
                b.css = B("#" + d[0].id, c.className),
            c.provinceList && c.provinceExtend && (c.provinceList = a.extend(!0, [], m().concat(c.provinceList))),
                o(c, function(e) {
                    A.call(b, e),
                        z.call(b, e, -1);
                    var f = "hover" == c.event ? "mouseenter" : "click";
                    a(b.css.text).bind(f, function() {
                        return v.call(b, !0),
                            !1
                    }),
                        a(d).bind("mouseleave", function() {
                            v.call(b, !1)
                        }),
                        a(b.css.close).bind("click", function() {
                            v.call(b, !1)
                        }),
                    a.isFunction(c.onReady) && c.onReady.call(b, e)
                })
        },
        hide: function() {
            var a = this;
            var b = a.options.className.hover;
            a.el.removeClass(b)
        },
        show: function() {
            var a = this;
            var b = a.options.className.hover;
            a.el.addClass(b)
        }
    })
}(jQuery);
/* jdf-1.0.0/ trimPath.js Date:2021-12-28 11:00:42 */
var TrimPath;
!function() {
    null == TrimPath && (TrimPath = new Object),
    null == TrimPath.evalEx && (TrimPath.evalEx = function(src) {
            return eval(src)
        }
    );
    var UNDEFINED;
    null == Array.prototype.pop && (Array.prototype.pop = function() {
            return 0 === this.length ? UNDEFINED : this[--this.length]
        }
    ),
    null == Array.prototype.push && (Array.prototype.push = function() {
            for (var a = 0; a < arguments.length; ++a)
                this[this.length] = arguments[a];
            return this.length
        }
    ),
        TrimPath.parseTemplate = function(a, b, c) {
            null == c && (c = TrimPath.parseTemplate_etc);
            var d = parse(a, b, c);
            var e = TrimPath.evalEx(d, b, 1);
            return null != e ? new c.Template(b,a,d,e,c) : null
        }
    ;
    try {
        String.prototype.process = function(a, b) {
            var c = TrimPath.parseTemplate(this, null);
            return null != c ? c.process(a, b) : this
        }
    } catch (e) {}
    TrimPath.parseTemplate_etc = {},
        TrimPath.parseTemplate_etc.statementTag = "forelse|for|if|elseif|else|var|macro",
        TrimPath.parseTemplate_etc.statementDef = {
            "if": {
                delta: 1,
                prefix: "if (",
                suffix: ") {",
                paramMin: 1
            },
            "else": {
                delta: 0,
                prefix: "} else {"
            },
            elseif: {
                delta: 0,
                prefix: "} else if (",
                suffix: ") {",
                paramDefault: "true"
            },
            "/if": {
                delta: -1,
                prefix: "}"
            },
            "for": {
                delta: 1,
                paramMin: 3,
                prefixFunc: function(a, b, c, d) {
                    if ("in" != a[2])
                        throw new d.ParseError(c,b.line,"bad for loop statement: " + a.join(" "));
                    var e = a[1];
                    var f = "__LIST__" + e;
                    return ["var ", f, " = ", a[3], ";", "var __LENGTH_STACK__;", "if (typeof(__LENGTH_STACK__) == 'undefined' || !__LENGTH_STACK__.length) __LENGTH_STACK__ = new Array();", "__LENGTH_STACK__[__LENGTH_STACK__.length] = 0;", "if ((", f, ") != null) { ", "var ", e, "_ct = 0;", "for (var ", e, "_index in ", f, ") { ", e, "_ct++;", "if (typeof(", f, "[", e, "_index]) == 'function') {continue;}", "__LENGTH_STACK__[__LENGTH_STACK__.length - 1]++;", "var ", e, " = ", f, "[", e, "_index];"].join("")
                }
            },
            forelse: {
                delta: 0,
                prefix: "} } if (__LENGTH_STACK__[__LENGTH_STACK__.length - 1] == 0) { if (",
                suffix: ") {",
                paramDefault: "true"
            },
            "/for": {
                delta: -1,
                prefix: "} }; delete __LENGTH_STACK__[__LENGTH_STACK__.length - 1];"
            },
            "var": {
                delta: 0,
                prefix: "var ",
                suffix: ";"
            },
            macro: {
                delta: 1,
                prefixFunc: function(a) {
                    var e = a[1].split("(")[0];
                    return ["var ", e, " = function", a.slice(1).join(" ").substring(e.length), "{ var _OUT_arr = []; var _OUT = { write: function(m) { if (m) _OUT_arr.push(m); } }; "].join("")
                }
            },
            "/macro": {
                delta: -1,
                prefix: " return _OUT_arr.join(''); };"
            }
        },
        TrimPath.parseTemplate_etc.modifierDef = {
            eat: function() {
                return ""
            },
            escape: function(a) {
                return String(a).replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">")
            },
            capitalize: function(a) {
                return String(a).toUpperCase()
            },
            "default": function(a, b) {
                return null != a ? a : b
            }
        },
        TrimPath.parseTemplate_etc.modifierDef.h = TrimPath.parseTemplate_etc.modifierDef.escape,
        TrimPath.parseTemplate_etc.Template = function(a, b, c, d, e) {
            this.process = function(a, b) {
                null == a && (a = {}),
                null == a._MODIFIERS && (a._MODIFIERS = {}),
                null == a.defined && (a.defined = function(b) {
                        return void 0 != a[b]
                    }
                );
                for (var c in e.modifierDef)
                    null == a._MODIFIERS[c] && (a._MODIFIERS[c] = e.modifierDef[c]);
                null == b && (b = {});
                var f = [];
                var g = {
                    write: function(a) {
                        f.push(a)
                    }
                };
                try {
                    d(g, a, b)
                } catch (h) {
                    if (1 == b.throwExceptions)
                        throw h;
                    var i = new String(f.join("") + "[ERROR: " + h.toString() + (h.message ? "; " + h.message : "") + "]");
                    return i.exception = h,
                        i
                }
                return f.join("")
            }
                ,
                this.name = a,
                this.source = b,
                this.sourceFunc = c,
                this.toString = function() {
                    return "TrimPath.Template [" + a + "]"
                }
        }
        ,
        TrimPath.parseTemplate_etc.ParseError = function(a, b, c) {
            this.name = a,
                this.line = b,
                this.message = c
        }
        ,
        TrimPath.parseTemplate_etc.ParseError.prototype.toString = function() {
            return "TrimPath template ParseError in " + this.name + ": line " + this.line + ", " + this.message
        }
    ;
    var parse = function(a, b, c) {
        a = cleanWhiteSpace(a);
        var d = ["var TrimPath_Template_TEMP = function(_OUT, _CONTEXT, _FLAGS) { with (_CONTEXT) {"];
        var e = {
            stack: [],
            line: 1
        };
        var f = -1;
        for (; f + 1 < a.length; ) {
            var g = f;
            for (g = a.indexOf("{", g + 1); g >= 0; ) {
                var h = a.indexOf("}", g + 1);
                var i = a.substring(g, h);
                var j = i.match(/^\{(cdata|minify|eval)/);
                if (j) {
                    var k = j[1];
                    var l = g + k.length + 1;
                    var m = a.indexOf("}", l);
                    if (m >= 0) {
                        var n;
                        n = 0 >= m - l ? "{/" + k + "}" : a.substring(l + 1, m);
                        var o = a.indexOf(n, m + 1);
                        if (o >= 0) {
                            emitSectionText(a.substring(f + 1, g), d);
                            var p = a.substring(m + 1, o);
                            "cdata" == k ? emitText(p, d) : "minify" == k ? emitText(scrubWhiteSpace(p), d) : "eval" == k && null != p && p.length > 0 && d.push("_OUT.write( (function() { " + p + " })() );"),
                                g = f = o + n.length - 1
                        }
                    }
                } else if ("$" != a.charAt(g - 1) && "\\" != a.charAt(g - 1)) {
                    var q = "/" == a.charAt(g + 1) ? 2 : 1;
                    if (0 == a.substring(g + q, g + 10 + q).search(TrimPath.parseTemplate_etc.statementTag))
                        break
                }
                g = a.indexOf("{", g + 1)
            }
            if (0 > g)
                break;
            var h = a.indexOf("}", g + 1);
            if (0 > h)
                break;
            emitSectionText(a.substring(f + 1, g), d),
                emitStatement(a.substring(g, h + 1), e, d, b, c),
                f = h
        }
        if (emitSectionText(a.substring(f + 1), d),
        0 != e.stack.length)
            throw new c.ParseError(b,e.line,"unclosed, unmatched statement(s): " + e.stack.join(","));
        return d.push("}}; TrimPath_Template_TEMP"),
            d.join("")
    };
    var emitStatement = function(a, b, c, d, e) {
        var f = a.slice(1, -1).split(" ");
        var g = e.statementDef[f[0]];
        if (null == g)
            return void emitSectionText(a, c);
        if (g.delta < 0) {
            if (b.stack.length <= 0)
                throw new e.ParseError(d,b.line,"close tag does not match any previous statement: " + a);
            b.stack.pop()
        }
        if (g.delta > 0 && b.stack.push(a),
        null != g.paramMin && g.paramMin >= f.length)
            throw new e.ParseError(d,b.line,"statement needs more parameters: " + a);
        if (c.push(null != g.prefixFunc ? g.prefixFunc(f, b, d, e) : g.prefix),
        null != g.suffix) {
            if (f.length <= 1)
                null != g.paramDefault && c.push(g.paramDefault);
            else
                for (var h = 1; h < f.length; h++)
                    h > 1 && c.push(" "),
                        c.push(f[h]);
            c.push(g.suffix)
        }
    };
    var emitSectionText = function(a, b) {
        if (!(a.length <= 0)) {
            var c = 0;
            var d = a.length - 1;
            for (; c < a.length && "\n" == a.charAt(c); )
                c++;
            for (; d >= 0 && (" " == a.charAt(d) || "	" == a.charAt(d)); )
                d--;
            if (c > d && (d = c),
            c > 0) {
                b.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
                var e = a.substring(0, c).replace("\n", "\\n");
                "\n" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)),
                    b.push(e),
                    b.push('");')
            }
            var f = a.substring(c, d + 1).split("\n");
            for (var g = 0; g < f.length; g++)
                emitSectionTextLine(f[g], b),
                g < f.length - 1 && b.push('_OUT.write("\\n");\n');
            if (d + 1 < a.length) {
                b.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');
                var e = a.substring(d + 1).replace("\n", "\\n");
                "\n" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)),
                    b.push(e),
                    b.push('");')
            }
        }
    };
    var emitSectionTextLine = function(a, b) {
        var c = "}";
        var d = -1;
        for (; d + c.length < a.length; ) {
            var e = "${"
                , f = "}";
            var g = a.indexOf(e, d + c.length);
            if (0 > g)
                break;
            "%" == a.charAt(g + 2) && (e = "${%",
                f = "%}");
            var h = a.indexOf(f, g + e.length);
            if (0 > h)
                break;
            emitText(a.substring(d + c.length, g), b);
            var i = a.substring(g + e.length, h).replace(/\|\|/g, "#@@#").split("|");
            for (var j in i)
                i[j].replace && (i[j] = i[j].replace(/#@@#/g, "||"));
            b.push("_OUT.write("),
                emitExpression(i, i.length - 1, b),
                b.push(");"),
                d = h,
                c = f
        }
        emitText(a.substring(d + c.length), b)
    };
    var emitText = function(a, b) {
        null == a || a.length <= 0 || (a = a.replace(/\\/g, "\\\\"),
            a = a.replace(/\n/g, "\\n"),
            a = a.replace(/"/g, '\\"'),
            b.push('_OUT.write("'),
            b.push(a),
            b.push('");'))
    };
    var emitExpression = function(a, b, c) {
        var d = a[b];
        if (0 >= b)
            return void c.push(d);
        var e = d.split(":");
        c.push('_MODIFIERS["'),
            c.push(e[0]),
            c.push('"]('),
            emitExpression(a, b - 1, c),
        e.length > 1 && (c.push(","),
            c.push(e[1])),
            c.push(")")
    };
    var cleanWhiteSpace = function(a) {
        return a = a.replace(/\t/g, "    "),
            a = a.replace(/\r\n/g, "\n"),
            a = a.replace(/\r/g, "\n"),
            a = a.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1")
    };
    var scrubWhiteSpace = function(a) {
        return a = a.replace(/^\s+/g, ""),
            a = a.replace(/\s+$/g, ""),
            a = a.replace(/\s+/g, " "),
            a = a.replace(/^(\s*\S*(\s+\S+)*)\s*$/, "$1")
    };
    TrimPath.parseDOMTemplate = function(a, b, c) {
        null == b && (b = document);
        var d = b.getElementById(a);
        var e = d.value;
        return null == e && (e = d.innerHTML),
            e = e.replace(/</g, "<").replace(/>/g, ">"),
            TrimPath.parseTemplate(e, a, c)
    }
        ,
        TrimPath.processDOMTemplate = function(a, b, c, d, e) {
            return TrimPath.parseDOMTemplate(a, d, e).process(b, c)
        }
}();
/* jdf-1.0.0/ getjsonp.js Date:2021-12-28 11:00:42 */
!function($) {
    $.extend({
        _jsonp: {
            scripts: {},
            counter: 1,
            charset: "gb2312",
            head: document.getElementsByTagName("head")[0],
            name: function(callback) {
                var name = "_jsonp_" + (new Date).getTime() + "_" + this.counter;
                this.counter++;
                var cb = function(json) {
                    eval("delete " + name),
                        callback(json),
                        $._jsonp.head.removeChild($._jsonp.scripts[name]),
                        delete $._jsonp.scripts[name]
                };
                return eval(name + " = cb"),
                    name
            },
            load: function(a, b, c, d) {
                var e = document.createElement("script");
                e.type = c || "text/javascript",
                    e.charset = d || this.charset,
                    e.src = a,
                    this.head.appendChild(e),
                    this.scripts[b] = e
            }
        },
        getJSONP: function(a, b, c, d) {
            var e = $._jsonp.name(b);
            var a = a.replace(/{callback};/, e);
            return $._jsonp.load(a, e, c, d),
                this
        }
    })
}(jQuery);
/* jdf-1.0.0/ login.js Date:2021-12-28 11:00:42 */
define("//misc.360buyimg.com/jdf/1.0.0/unit/login/1.0.0/login.js", ["//misc.360buyimg.com/jdf/1.0.0/unit/setUserInfo/5.0.0/setUserInfo.js", "//misc.360buyimg.com/jdf/1.0.0/unit/event/1.0.0/event.js", "//misc.360buyimg.com/jdf/1.0.0/ui/dialog/1.0.0/dialog.js"], function(require) {
    var c = require("//misc.360buyimg.com/jdf/1.0.0/unit/setUserInfo/5.0.0/setUserInfo.js");
    var d = require("//misc.360buyimg.com/jdf/1.0.0/unit/event/1.0.0/event.js");
    require("//misc.360buyimg.com/jdf/1.0.0/ui/dialog/1.0.0/dialog.js");
    var f = {};
    window.jdModelCallCenter = f;
    var g = "https:" == document.location.protocol ? "https://" : "http://";
    d.on("loginSuccessByIframe", function() {
        c({
            callback: function() {
                $.closeDialog(),
                    $.ajax({
                        url: g + "passport.jd.com/loginservice.aspx?callback=?",
                        data: {
                            method: "Login"
                        },
                        dataType: "json",
                        success: function(a) {
                            null != a && a.Identity.IsAuthenticated && d.trigger("loginSuccessCallback", a)
                        }
                    })
            }
        })
    });
    var h = {
        loginService: g + "passport.jd.com/loginservice.aspx?callback=?",
        loginMethod: "Login",
        loginUrl: g + "passport.jd.com/new/login.aspx",
        returnUrl: location.href,
        automatic: !1,
        complete: null,
        modal: !1,
        clstag1: 0,
        clstag2: 0,
        firstCheck: !0
    };
    var i = function(a) {
        a = $.extend({}, h, a || {});
        var b = {
            login: function() {
                var b = navigator.userAgent.toLowerCase()
                    , c = "ucweb" == b.match(/ucweb/i) || "rv:1.2.3.4" == b.match(/rv:1.2.3.4/i);
                return c ? void (location.href = a.loginUrl + "?ReturnUrl=" + escape(returnUrl)) : ($.closeDialog(),
                    void (this.loginDialog = $("body").dialog({
                        title: "\u60a8\u5c1a\u672a\u767b\u5f55",
                        width: 410,
                        height: 420,
                        autoIframe: !1,
                        type: "iframe",
                        fixed: !0,
                        mainId: "loginDialogBody",
                        source: "https://passport.jd.com/uc/popupLogin2013?clstag1=" + a.clstag1 + "&clstag2=" + a.clstag2 + "&r=" + Math.random(),
                        autoUpdate: !0
                    })))
            },
            regist: function() {
                $.closeDialog(),
                    this.registDialog = $("body").dialog({
                        title: "\u60a8\u5c1a\u672a\u767b\u5f55",
                        width: 410,
                        height: 470,
                        type: "iframe",
                        fixed: !0,
                        mainId: "registDialogBody",
                        source: "https://reg.jd.com/reg/popupPerson?clstag1=" + a.clstag1 + "&clstag2=" + a.clstag2 + "&r=" + Math.random(),
                        autoUpdate: !0
                    })
            }
        };
        if (f.regist = function() {
            b.regist()
        }
            ,
            f.login = function() {
                b.login()
            }
            ,
            f.init = function(a) {
                d.trigger("loginSuccessByIframe", a)
            }
            ,
        "" != a.loginService && "" != a.loginMethod) {
            var c = function(c) {
                if (null != c && (a.automatic && null != a.complete && a.complete(c),
                c.Identity.IsAuthenticated && null != a.complete && !a.automatic && a.complete(c),
                !c.Identity.IsAuthenticated && "" != a.loginUrl && !a.automatic))
                    if (a.modal) {
                        function e(b) {
                            null != a.complete && a.complete(b)
                        }
                        a.firstCheck && (b.login(),
                            d.off("loginSuccessCallback"),
                            d.on("loginSuccessCallback", e))
                    } else
                        location.href = a.loginUrl + "?ReturnUrl=" + escape(a.returnUrl)
            };
            a.firstCheck ? j(a, c) : (b.login(),
                d.on("loginSuccessCallback", function(b) {
                    null != a.complete && a.complete(b)
                }))
        }
    };
    function j(a, b) {
        $.ajax({
            url: a.loginService,
            data: {
                method: a.loginMethod
            },
            dataType: "jsonp",
            scriptCharset: "gbk",
            success: function(a) {
                b(a)
            }
        })
    }
    return i.isLogin = function(a, b) {
        $.isFunction(a) ? (b = a,
            a = h) : a = $.extend({}, h, a || {}),
        $.isFunction(b) || (b = function() {}
        );
        var c = function(a) {
            a && a.Identity ? b(a.Identity.IsAuthenticated, a) : b(!1, null)
        };
        j(a, c)
    }
        ,
        i
});
/* jdf-1.0.0/ event.js Date:2021-12-28 11:00:42 */
define("//misc.360buyimg.com/jdf/1.0.0/unit/event/1.0.0/event.js", [], function() {
    var c = {
        on: function(a, b) {
            var c = this;
            this.list = this.list || (this.list = []),
                this.list[a] = this.list[a] || [];
            if ("undefined" == typeof b)
                var b = function() {
                    c[a] && c[a]()
                };
            "function" == typeof b && this.list[a].push(b)
        },
        off: function(a, b) {
            if ("function" == typeof b) {
                if ("undefined" != typeof this.list) {
                    var c = this.list[a];
                    if (c) {
                        var d = c.length;
                        for (; d--; )
                            c[d] === b && c.splice(d, 1)
                    }
                }
            } else
                this.list[a] = []
        },
        trigger: function(a, b) {
            if ("undefined" != typeof this.list) {
                var c = this.list[a];
                if (c)
                    for (var d in c)
                        c.hasOwnProperty(d) && "function" == typeof c[d] && c[d](b)
            }
        },
        removeAll: function() {
            this.list = []
        }
    };
    return c
});
/* jdf-1.0.0/ hotkey.js Date:2021-12-28 11:00:42 */
define("//misc.360buyimg.com/jdf/1.0.0/unit/hotkey/1.0.0/hotkey.js", [], function() {
    function c() {
        document.onkeyup = function(a) {
            var b = document.activeElement.tagName.toLowerCase();
            if ("input" != b && "textarea" != b) {
                var a = a ? a : window.event
                    , c = a.keyCode || a.which;
                switch (c) {
                    case 68:
                        window.pageConfig.clientViewTop || (window.pageConfig.clientViewTop = 0),
                            window.pageConfig.clientViewTop += document.documentElement.clientHeight,
                            window.scrollTo(0, pageConfig.clientViewTop);
                        break;
                    case 83:
                        window.scrollTo(0, 0),
                            window.pageConfig.clientViewTop = 0,
                            document.getElementById("key").focus();
                        break;
                    case 84:
                        window.scrollTo(0, 0),
                            window.pageConfig.clientViewTop = 0
                }
            }
        }
    }
    return c
});
/* jdf-1.0.0/ globalReco.js Date:2021-12-28 11:00:42 */
define("//misc.360buyimg.com/jdf/1.0.0/unit/globalReco/1.0.0/globalReco.js", [], function() {
    var c = function(a) {
        if (this.param = $.extend({
            lid: readCookie("ipLoc-djd") || "",
            lim: 6,
            ec: "utf-8",
            uuid: -1,
            pin: readCookie("pin") || ""
        }, a.param),
            this.$el = a.$el,
            this.template = a.template,
            this.reBuildJSON = a.reBuildJSON,
            this.skuHooks = a.skuHooks || "SKUS_recommend",
            this.ext = a.ext || {},
            this.callback = a.callback || function() {}
            ,
            this.debug = a.debug,
            !this.param.p)
            throw new Error("The param [p] is not Specificed");
        this.init()
    };
    return c.prototype = {
        init: function() {
            var a = readCookie("__jda");
            this.param.lid = this.param.lid.indexOf("-") > 0 ? this.param.lid.split("-")[0] : "1",
                this.param.uuid = a ? "-" == a.split(".")[1] ? -1 : a.split(".")[1] : -1,
                this.get(this.rid)
        },
        get: function() {
            var c = this;
            var d;
            var e = pageConfig.queryParam;
            var f = [];
            if (pageConfig.product)
                for (d = 0; d < pageConfig.product.cat.length; d++)
                    this.param["c" + (d + 1)] = pageConfig.product.cat[d];
            if (e) {
                for (var g in e)
                    e.hasOwnProperty(g) && ("c1" == g || "c2" == g || "c3" == g ? c.param[g] = e[g] : f.push(g + ":" + e[g]));
                c.param.hi = f.join(",")
            }
            this.debug && console.info("//diviner.jd.com/diviner?" + decodeURIComponent($.param(this.param))),
                $.ajax({
                    url: "//diviner.jd.com/diviner?" + decodeURIComponent($.param(this.param)),
                    dataType: "jsonp",
                    scriptCharset: this.param.ec,
                    cache: !0,
                    jsonpCallback: "call" + parseInt(1e5 * Math.random(), 10),
                    success: function(a) {
                        var b = !!(a.success && a && a.data && a.data.length);
                        b ? c.set(a) : c.$el.html('<div class="ac">\u300c\u6682\u65e0\u6570\u636e\u300d</div>'),
                        this.debug && console.log(a),
                            c.callback.apply(c, [b, a])
                    }
                })
        },
        set: function(a) {
            pageConfig[this.skuHooks] = [],
                a.skuHooks = this.skuHooks,
                a.ext = this.ext,
            this.reBuildJSON && this.reBuildJSON > 0 && (a.data = tools.reBuildJSON(a.data, this.reBuildJSON)),
            this.debug && alert(this.template.process(a));
            try {
                this.$el.show().html(this.template.process(a))
            } catch (b) {
                /isdebug/.test(location.href) && "undefined" != typeof console && console.error("[pid=" + this.param.p + "] " + b)
            }
            this.setTrackCode(a.impr)
        },
        setTrackCode: function(a) {
            var b = this.$el.find("li");
            var c = this;
            var d = "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer);
            b.each(function() {
                var a = $(this).attr("data-clk");
                $(this).bind("click", function(b) {
                    var e = $(b.target);
                    (e.is("a") || e.is("img") || e.is("span")) && c.newImage(a + d, !0),
                    e.is("input") && 1 == e.attr("checked") && c.newImage(a + d, !0)
                })
            }),
                this.newImage(a + d, !0)
        },
        newImage: function(a, b, c) {
            var d = new Image;
            a = b ? a + "&random=" + Math.random() + new Date : a,
                d.onload = function() {
                    "undefined" != typeof c && c(a)
                }
                ,
                d.setAttribute("src", a)
        }
    },
        c
});
/* jdf-1.0.0/ cookie.js Date:2021-12-28 11:00:42 */
define("//misc.360buyimg.com/jdf/1.0.0/unit/cookie/1.0.0/cookie.js", [], function() {
    var c = function(a, b, c) {
        if ("undefined" == typeof b) {
            var i = null;
            if (document.cookie && "" != document.cookie) {
                var j = document.cookie.split(";");
                for (var k = 0; k < j.length; k++) {
                    var l = jQuery.trim(j[k]).split("=");
                    if (l[0] == a && l.length > 1) {
                        try {
                            i = decodeURIComponent(l[1])
                        } catch (m) {
                            i = l[1]
                        }
                        break
                    }
                }
            }
            return i
        }
        c = c || {},
        null === b && (b = "",
            c.expires = -1);
        var d = "";
        if (c.expires && ("number" == typeof c.expires || c.expires.toUTCString)) {
            var e;
            "number" == typeof c.expires ? (e = new Date,
                e.setTime(e.getTime() + 24 * c.expires * 60 * 60 * 1e3)) : e = c.expires,
                d = "; expires=" + e.toUTCString()
        }
        var f = c.path ? "; path=" + c.path : "";
        var g = c.domain ? "; domain=" + c.domain : "";
        var h = c.secure ? "; secure" : "";
        document.cookie = [a, "=", encodeURIComponent(b), d, f, g, h].join("")
    };
    return c
});
/* jdf-1.0.0/ search.js Date:2021-12-28 11:00:42 */
window.searchlog = window.searchlog || function() {
    var a = "//sstat." + pageConfig.FN_getDomain() + "/scslog?args=";
    var b = "{keyword}^#psort#^#page#^#cid#^" + encodeURIComponent(document.referrer);
    var c = "2";
    var d = "";
    var e = "";
    var f = function() {
        var f = "";
        var g = "";
        var h = "";
        var i = "0";
        if (arguments.length > 0)
            if (0 == arguments[0])
                f = a + c + "^" + b + "^^^58^^" + e + "^" + d;
            else if (1 == arguments[0]) {
                f = 10 != c ? a + "1^" + b + "^" : a + "11^" + b + "^";
                for (var j = 1; j < arguments.length; j++)
                    f += encodeURI(arguments[j]) + "^";
                arguments.length > 3 && "51" == arguments[3] && (g = arguments[1]),
                arguments.length > 3 && "55" == arguments[3] && (h = arguments[1]),
                arguments.length > 3 && "56" == arguments[3] && (i = arguments[1]);
                for (var j = 0, k = 5 - arguments.length; k > j; j++)
                    f += "^";
                f += e + "^" + d
            }
        f = f.replace("#cid#", g),
            f = f.replace("#psort#", h),
            f = f.replace("#page#", i),
            $.getScript(f);
        try {
            JA.tracker.ngloader("search.000006", {
                url: window.location.href
            })
        } catch (l) {}
    };
    return f
}();
function search(a, b) {
    var c, d = "//search.jd.com/Search?keyword={keyword}&enc={enc}{additional}";
    var e = search.additinal || "";
    if ("string" == typeof b && "" != b ? e += "&spm=a.0.0" : b = document.getElementById(a).value,
        b = b.replace(/^\s*(.*?)\s*$/, "$1"),
    b.length > 100 && (b = b.substring(0, 100)),
    "" == b)
        return void (window.location.href = window.location.href);
    var f = 0;
    "undefined" != typeof window.pageConfig && "undefined" != typeof window.pageConfig.searchType && (f = window.pageConfig.searchType);
    var g = "&cid{level}={cid}";
    var h = "string" == typeof search.cid ? search.cid : "";
    var i = "string" == typeof search.cLevel ? search.cLevel : "";
    var j = "string" == typeof search.ev_val ? search.ev_val : "";
    switch (f) {
        case 0:
            break;
        case 1:
            i = "-1",
                e += "&book=y";
            break;
        case 2:
            i = "-1",
                e += "&mvd=music";
            break;
        case 3:
            i = "-1",
                e += "&mvd=movie";
            break;
        case 4:
            i = "-1",
                e += "&mvd=education";
            break;
        case 5:
            var k = "&other_filters=%3Bcid1%2CL{cid1}M{cid1}[cid2]";
            switch (i) {
                case "51":
                    g = k.replace(/\[cid2]/, ""),
                        g = g.replace(/\{cid1}/g, "5272");
                    break;
                case "52":
                    g = k.replace(/\{cid1}/g, "5272"),
                        g = g.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                    break;
                case "61":
                    g = k.replace(/\[cid2]/, ""),
                        g = g.replace(/\{cid1}/g, "5273");
                    break;
                case "62":
                    g = k.replace(/\{cid1}/g, "5273"),
                        g = g.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                    break;
                case "71":
                    g = k.replace(/\[cid2]/, ""),
                        g = g.replace(/\{cid1}/g, "5274");
                    break;
                case "72":
                    g = k.replace(/\{cid1}/g, "5274"),
                        g = g.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}");
                    break;
                case "81":
                    g = k.replace(/\[cid2]/, ""),
                        g = g.replace(/\{cid1}/g, "5275");
                    break;
                case "82":
                    g = k.replace(/\{cid1}/g, "5275"),
                        g = g.replace(/\[cid2]/, "%3Bcid2%2CL{cid}M{cid}")
            }
            d = "//search-e.jd.com/searchDigitalBook?ajaxSearch=0&enc=utf-8&key={keyword}&page=1{additional}";
            break;
        case 6:
            i = "-1",
                d = "//music.jd.com/8_0_desc_0_0_1_15.html?key={keyword}";
            break;
        case 7:
            d = "//s-e.jd.com/Search?key={keyword}&enc=utf-8";
            break;
        case 8:
            d = "//search.jd.hk/Search?keyword={keyword}&enc=utf-8";
            break;
        case 9:
            e += "&market=1";
            break;
        case 10:
            e += "&gp=2"
    }
    if ("string" == typeof h && "" != h && "string" == typeof i) {
        var l = /^(?:[1-8])?([1-3])$/;
        i = "-1" == i ? "" : l.test(i) ? RegExp.$1 : "";
        var m = g.replace(/\{level}/, i);
        m = m.replace(/\{cid}/g, h),
            e += m
    }
    if ("string" == typeof j && "" != j && (e += "&ev=" + j),
        b = encodeURIComponent(b),
        c = d.replace(/\{keyword}/, b),
        c = c.replace(/\{enc}/, "utf-8"),
        c = c.replace(/\{additional}/, e),
    "object" == typeof $o && ("string" == typeof $o.lastKeyword && (c += "&wq=" + encodeURIComponent($o.lastKeyword)),
    "string" == typeof $o.pvid && (c += "&pvid=" + $o.pvid)),
    c.indexOf("/search.jd.com/") > 0)
        try {
            JA.tracker.ngloader("search.000009", {
                key: b,
                posid: a,
                target: c
            })
        } catch (n) {}
    ("undefined" == typeof search.isSubmitted || 0 == search.isSubmitted) && (setTimeout(function() {
        window.location.href = c
    }, 50),
        search.isSubmitted = !0)
}
var $o = function(a) {
    var b = $("#key");
    if (!(b.length < 1)) {
        var c = {};
        c.replace = function(a, b) {
            return a.replace(/#{(.*?)}/g, function() {
                var a = arguments[1];
                return "undefined" != typeof b[a] ? b[a] : arguments[0]
            })
        }
            ,
            c.genPvid = function() {
                var a = (new Date).getTime();
                var b = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(b) {
                    var c = (a + 16 * Math.random()) % 16 | 0;
                    return a = Math.floor(a / 16),
                        ("x" == b ? c : 3 & c | 8).toString(16)
                });
                return b
            }
            ,
            c.getQueryString = function(b, c) {
                var d = new RegExp("(^|\\?|&)" + b + "=([^&]*)(\\s|&|$)","i");
                var e = c ? c : a.location.search;
                return d.test(e) ? RegExp.$2 : ""
            }
            ,
            c.htmlspecialchars = function(a) {
                return "string" == typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : ""
            }
            ,
            c.htmlspecialcharsDecode = function(a) {
                return "string" == typeof a ? a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"') : ""
            }
            ,
            String.prototype.isEmpty = function() {
                return 0 == this.length
            }
            ,
            c.textSelect = function(a, b, c) {
                if ("string" == typeof a && (a = document.getElementById(a)),
                    a) {
                    var d = 1 * b
                        , e = 1 * c
                        , f = a.value.length;
                    if (f)
                        if (d || (d = 0),
                        e || (e = f),
                        d > f && (d = f),
                        0 > d && (d = f + d),
                        0 > e && (e = f + e),
                            a.createTextRange) {
                            var g = a.createTextRange();
                            g.moveStart("character", -f),
                                g.moveEnd("character", -f),
                                g.moveStart("character", d),
                                g.moveEnd("character", e),
                                g.select()
                        } else
                            a.setSelectionRange(d, e),
                                a.focus()
                }
            }
            ,
            c.getSelectText = function(a) {
                return document.selection ? document.selection.createRange().text : a ? a.value.substring(a.selectionStart, a.selectionEnd) : ""
            }
        ;
        var d = '<a style="color:#005AA0" onclick="$o.del(event)">\u5220\u9664</a>';
        var e = "\u641c\u7d22\u5386\u53f2"
            , f = "\u7ea6#{amount}\u4e2a\u5546\u54c1"
            , g = 'history="1"'
            , h = 'style="color:#005AA0"';
        var i = '<li id="d_#{id}" suggest-pos="#{suggest_pos}" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></li>';
        var j = '<li class="brand-search"><div id="d_#{id}" class="info J_shop_box" style="cursor:default;">#{guide}</div>#{categorys}</li>';
        var k = '<li class="fore1"><div id="d_#{id}" suggest-pos="#{suggest_pos}" class="fore1" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></div>#{categorys}</li>';
        var l = '<li class="fore1">#{categorys}</li>';
        var n = '<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" act="#{act_value}" onclick="$o.clickItem(this)"><div class="search-item">\u5728#{act_name}</div><div class="search-count">\u7ea6#{amount}\u4e2a\u5546\u54c1</div></div>';
        var o = '<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" act="#{act_value}" onclick="$o.clickItem(this)"><div class="search-item">#{act_name}</div><div class="search-count">\u7ea6#{amount}\u4e2a\u5546\u54c1</div></div>';
        var p = '<div id="d_#{id}" class="bs-item J_shop_box"><a class="logo" href="//mall.jd.com/index-#{shop_id}.html"><img width="90" height="30" src="#{shop_logo}"/></a><a class="name" href="//mall.jd.com/index-#{shop_id}.html">#{shop_name}</a></div>';
        var q = '<div id="d_#{id}" class="#{className}"><a href="#{link}" style="float:left;width:100%;">#{prom_name}</a></div>';
        var r = "#FFDFC6";
        var s = "#FFF";
        var t = $("#shelper");
        var u = null != navigator.userAgent.toLowerCase().match(/chrome/);
        var v = c.genPvid();
        var w = "//hiswd.jd.com/?pvid=" + v;
        var x = function(a) {
            var b = !1;
            switch (a.location.host) {
                case "cn.jd.com":
                case "global.jd.com":
                    b = !0
            }
            return b
        }(a);
        var y = function(a) {
            var b = ""
                , d = "";
            switch (a.location.host) {
                case "cn.jd.com":
                case "global.jd.com":
                    b += "//suggest-squanqiu.jd.com/?terminal=shouquanqiu";
                    break;
                default:
                    b += "//dd-search.jd.com/?terminal=pc&newjson=1"
            }
            if (b += "&ver=2&zip=1&key=#{keyword}&pvid=" + v + "&t=#{time}&curr_url=" + encodeURIComponent(a.location.host + a.location.pathname),
            a.QUERY_KEYWORD && (b += "&search_key=" + encodeURIComponent(a.QUERY_KEYWORD)),
            a.pageConfig && a.pageConfig.product && a.pageConfig.product.cat)
                d = "&cid1=" + (a.pageConfig.product.cat[0] || ""),
                    d += "&cid2=" + (a.pageConfig.product.cat[1] || ""),
                    d += "&cid3=" + (a.pageConfig.product.cat[2] || "");
            else if ("list.jd.com" == a.location.host)
                if (a.pageConfig && a.pageConfig.queryParam)
                    d = "&cid1=" + (a.pageConfig.queryParam.c1 || ""),
                        d += "&cid2=" + (a.pageConfig.queryParam.c2 || ""),
                        d += "&cid3=" + (a.pageConfig.queryParam.c3 || "");
                else {
                    var e = decodeURIComponent(c.getQueryString("cat")).split(",");
                    d = "&cid1=" + (e[0] || ""),
                        d += "&cid2=" + (e[1] || ""),
                        d += "&cid3=" + (e[2] || "")
                }
            return b + d
        }(a);
        function z() {
            this.length = 0,
                this.index = -1,
                this.iLastModified = 0,
                this.lastKeyword = !1,
                this.keep_keyword = "",
                this.pvid = v,
                this.enable_remind = !0,
                this.IME = !1
        }
        z.prototype.init = function() {
            this.length = 0,
                this.index = -1,
                this.version = 0,
                search.additinal = ""
        }
            ,
            z.prototype.hideTip = function() {
                this.init(),
                    this.lastKeyword = !1;
                var a = c.getSelectText(b[0]);
                this.keep_keyword && a && this.keep_keyword + a == b.val() && b.val(this.keep_keyword),
                    t.html("").hide()
            }
            ,
            z.prototype.clickItem = function(a) {
                var d = a.getAttribute("cid")
                    , e = "&suggest=" + a.getAttribute("suggest-pos") + "." + this.version;
                search.cid = null != d && "" != d ? d : null;
                var f = a.getAttribute("cLevel");
                search.cLevel = null != f && "" != f ? f : null;
                var g = a.getAttribute("title");
                null == g || $.trim(g).isEmpty() || b.val(c.htmlspecialcharsDecode(g)),
                null !== a.getAttribute("act") && (e += a.getAttribute("act")),
                    search.additinal = e,
                    search("key")
            }
            ,
            z.prototype.mouseenter = function(a) {
                var a = $(a);
                a.attr("history") && a.find(".search-count").html(d),
                    a.hasClass("J_shop_box") ? a.find(".name").css("text-decoration", "underline") : a.css("background", r);
                var b = a.attr("id").split("_")
                    , c = parseInt(b[1], 10);
                if (c != this.index) {
                    if (this.index > -1) {
                        var f = $("#d_" + this.index);
                        f.css("background", s),
                        f.attr("history") && f.find(".search-count").html(e),
                        f.hasClass("J_shop_box") && f.find(".name").css("text-decoration", "none")
                    }
                    this.index = c
                }
            }
            ,
            z.prototype.mouseleave = function(a) {
                a.css("background", s),
                a.attr("history") && a.find(".search-count").html(e)
            }
            ,
            z.prototype.selectItemNode = function(a) {
                var f = this
                    , g = $("#d_" + f.index);
                g.css("background-color", s),
                g.attr("history") && g.find(".search-count").html(e),
                g.hasClass("J_shop_box") && g.find(".name").css("text-decoration", "none"),
                -1 == f.index && -1 == a && (a = 0),
                    f.index = (f.length + f.index + a) % f.length;
                var h = $("#d_" + f.index)
                    , i = "&suggest=" + h.attr("suggest-pos") + "." + f.version;
                if (h.length > 0) {
                    h.attr("history") && h.find(".search-count").html(d),
                        h.hasClass("J_shop_box") ? h.find(".name").css("text-decoration", "underline") : h.css("background-color", r);
                    var j = h.attr("title");
                    null == j || $.trim(j).isEmpty() || b.val(c.htmlspecialcharsDecode(j));
                    var k = h.attr("cid");
                    search.cid = null != k && "" != k ? k : null;
                    var l = h.attr("cLevel");
                    search.cLevel = null != l && "" != l ? l : null,
                    "undefined" != typeof h.attr("act") && (i += h.attr("act")),
                        search.additinal = i
                }
            }
            ,
            z.prototype.input = function() {
                var a = this;
                a.timeoutId && clearTimeout(a.timeoutId),
                    a.timeoutId = setTimeout(function() {
                        var d = $.trim(b.val());
                        return d === a.lastKeyword ? !1 : (a.lastKeyword = d,
                            void $.ajax({
                                url: d ? c.replace(y, {
                                    keyword: encodeURIComponent(d),
                                    time: (new Date).getTime()
                                }) : w,
                                dataType: "jsonp",
                                scriptCharset: "utf-8",
                                jsonp: "callback",
                                cache: !0,
                                success: function(b) {
                                    return function(c) {
                                        a.iLastModified > b || (a.iLastModified = b,
                                            x ? a.onloadGLOBALItems(c) : a.onloadItems(c))
                                    }
                                }((new Date).getTime())
                            }))
                    }, 150)
            }
            ,
            z.prototype.keydown_up = function(c) {
                var d = this;
                var e = c || a.event;
                0 == b.length && (b = $("#key")),
                0 == t.length && (t = $("tie"));
                var f = e.keyCode;
                switch (f) {
                    case 38:
                        d.selectItemNode(-1);
                        break;
                    case 40:
                        d.selectItemNode(1);
                        break;
                    case 27:
                        d.hideTip();
                        break;
                    case 37:
                        break;
                    case 39:
                        break;
                    default:
                        d.IME = 229 == f,
                            8 == f || 46 == f ? d.disableRemind() : d.enable_remind = !0,
                        $.browser.mozilla || d.input()
                }
            }
            ,
            z.prototype.onloadGLOBALItems = function(d) {
                if (!d || !d.length)
                    return this.hideTip(),
                        !1;
                this.init();
                var l = this
                    , m = a.pageConfig && a.pageConfig.searchType ? a.pageConfig.searchType : 0
                    , o = 1
                    , r = sCategoriesHtml = ""
                    , s = iLen = iItemLen = 0
                    , u = d.length
                    , v = 0
                    , w = c.htmlspecialchars(b.val());
                for (d[u - 1] && d[u - 1].version && (l.version = d[u - 1].version); u > s; s++) {
                    var x = d[s];
                    if (x && (x.key || x.pcif) && (!x.pcif || 0 == iItemLen))
                        if (x.rem && l.remindKey(x.rem.rei, x.rem.req),
                            x.pcif) {
                            if (0 == m) {
                                for (var y = 0, z = x.pcif.length; z > y; y++)
                                    switch (x.pcif[y].iftp) {
                                        case "0":
                                            break;
                                        case "1":
                                            sCategoriesHtml += c.replace(n, {
                                                id: ++iLen,
                                                title: c.htmlspecialchars(x.pcif[y].shq),
                                                className: "item1",
                                                act_name: "<strong> \u6d77\u56e4\u5168\u7403 </strong>",
                                                act_value: "&gp=1",
                                                amount: x.pcif[y].wds,
                                                suggest_pos: o + ".wor.0"
                                            });
                                            break;
                                        case "2":
                                            sCategoriesHtml += c.replace(n, {
                                                id: ++iLen,
                                                title: c.htmlspecialchars(x.pcif[y].shq),
                                                className: "item1",
                                                act_name: x.pcif[y].acp ? ' <img src="//img11.360buyimg.com/img/' + x.pcif[y].acp + '"> ' : "<strong> " + x.pcif[y].acq + " </strong>",
                                                act_value: x.pcif[y].acu,
                                                amount: x.pcif[y].acc,
                                                suggest_pos: o + ".acq.0"
                                            });
                                            break;
                                        case "3":
                                            sCategoriesHtml += c.replace(q, {
                                                id: ++iLen,
                                                className: "item1",
                                                link: x.pcif[y].pru + (x.pcif[y].pru.indexOf("?") > 0 ? "&" : "?") + "suggest=1.prom.0." + l.version + "&wq=" + encodeURIComponent(b.val()),
                                                prom_name: x.pcif[y].prt.replace("&", ' <img src="' + x.pcif[y].prp + '"> ')
                                            });
                                            break;
                                        case "4":
                                            sCategoriesHtml += c.replace(n, {
                                                id: ++iLen,
                                                title: c.htmlspecialchars(x.pcif[y].shq),
                                                className: "item1",
                                                act_name: x.pcif[y].icu ? ' <img src="' + x.pcif[y].icu + '"> ' : "<strong> " + x.pcif[y].act + " </strong>",
                                                act_value: x.pcif[y].ftt,
                                                amount: x.pcif[y].acc,
                                                suggest_pos: o + ".acq.0"
                                            });
                                            break;
                                        case "5":
                                            r += c.replace(j, {
                                                id: 0,
                                                guide: x.pcif[y].ssq,
                                                categorys: c.replace(p, {
                                                    id: 1,
                                                    shop_id: x.pcif[y].shid,
                                                    shop_name: x.pcif[y].shn,
                                                    shop_logo: "//img30.360buyimg.com/n1/s90x30_" + x.pcif[y].shp
                                                })
                                            }),
                                                iItemLen++,
                                                v = 1
                                    }
                                v && (iLen = 1)
                            }
                        } else {
                            var A = c.htmlspecialchars(x.key)
                                , B = x.his ? e : x.qre && 0 != x.qre && "0" != x.qre ? c.replace(f, {
                                amount: x.qre
                            }) : ""
                                , C = x.his ? g : ""
                                , D = x.his ? h : ""
                                , E = A.indexOf(w)
                                , F = w.length && 0 == E && !x.his ? w + "<strong>" + A.substring(E + w.length) + "</strong>" : A;
                            0 == iItemLen && 0 == iLen && (iLen = -1),
                                r += 0 == iItemLen && iLen > 0 ? c.replace(k, {
                                    id: 0,
                                    title: A,
                                    keyword: F,
                                    suggest_pos: o++ + (x.his ? ".his.0" : ".def.0"),
                                    categorys: sCategoriesHtml,
                                    search_count: B,
                                    history_mark: C,
                                    history_style: D
                                }) : c.replace(i, {
                                    id: ++iLen,
                                    title: A,
                                    keyword: F,
                                    suggest_pos: o++ + (x.his ? ".his.0" : ".def.0"),
                                    search_count: B,
                                    history_mark: C,
                                    history_style: D
                                }),
                                iItemLen++
                        }
                }
                l.length = ++iLen,
                    "" != r ? (r += "object" == typeof x && x.his ? '<li class="close" onclick="$o.del(event)">\u5168\u90e8\u5220\u9664</li>' : '<li class="close" onclick="$o.hideTip()">\u5173\u95ed</li>',
                        t.html(r).show().find('[id^="d_"]').bind("mouseleave", function() {
                            l.mouseleave($(this))
                        }).bind("mouseenter", function() {
                            l.mouseenter($(this))
                        })) : t.html("").hide()
            }
            ,
            z.prototype.onloadItems = function(d) {
                if (!d || !d.length)
                    return this.hideTip(),
                        !1;
                this.init();
                var k = this
                    , m = a.pageConfig && a.pageConfig.searchType ? a.pageConfig.searchType : 0
                    , n = 1
                    , r = sCategoriesHtml = ""
                    , s = iLen = iItemLen = 0
                    , u = d.length
                    , v = 0
                    , w = c.htmlspecialchars(b.val());
                for (d[u - 1] && d[u - 1].version && (k.version = d[u - 1].version); u > s; s++) {
                    var x = d[s];
                    if (x && (x.key || x.pcif) && (!x.pcif || 0 == iItemLen))
                        if (x.rem && k.remindKey(x.rem.rei, x.rem.req),
                            x.pcif) {
                            if (0 == m) {
                                for (var y = 0, z = x.pcif.length; z > y; y++)
                                    switch (x.pcif[y].iftp) {
                                        case "0":
                                            break;
                                        case "1":
                                            sCategoriesHtml += c.replace(o, {
                                                id: ++iLen,
                                                title: c.htmlspecialchars(x.pcif[y].shq),
                                                className: "item1",
                                                act_name: ' <img class="dropdown-simg" src="https://img30.360buyimg.com/uba/jfs/t23851/25/1308766769/1435/39f22c3b/5b5983e7N8824e17c.png">\u5728\u6d77\u56e4\u5168\u7403\u4e0b\u641c\u7d22' + x.pcif[y].shq,
                                                act_value: "&gp=1",
                                                amount: x.pcif[y].wds,
                                                suggest_pos: n + ".wor.0"
                                            });
                                            break;
                                        case "2":
                                            sCategoriesHtml += c.replace(o, {
                                                id: ++iLen,
                                                title: c.htmlspecialchars(x.pcif[y].shq),
                                                className: "item1",
                                                act_name: x.pcif[y].acp ? ' <img src="//img11.360buyimg.com/img/' + x.pcif[y].acp + '"> \u5728' + x.pcif[y].acq + "\u4e0b\u641c\u7d22" + x.pcif[y].shq : "<strong> " + x.pcif[y].acq + " </strong>",
                                                act_value: x.pcif[y].acu,
                                                amount: x.pcif[y].acc,
                                                suggest_pos: n + ".acq.0"
                                            });
                                            break;
                                        case "3":
                                            sCategoriesHtml += c.replace(q, {
                                                id: ++iLen,
                                                className: "item1",
                                                link: x.pcif[y].pru + (x.pcif[y].pru.indexOf("?") > 0 ? "&" : "?") + "suggest=1.prom.0." + k.version + "&wq=" + encodeURIComponent(b.val()),
                                                prom_name: x.pcif[y].prt.replace("&", ' <img src="' + x.pcif[y].prp + '"> ')
                                            });
                                            break;
                                        case "4":
                                            sCategoriesHtml += c.replace(o, {
                                                id: ++iLen,
                                                title: c.htmlspecialchars(x.pcif[y].shq),
                                                className: "item1",
                                                act_name: ' <img class="dropdown-simg" src="https://img12.360buyimg.com/uba/jfs/t24568/321/1310443574/1688/ed91c737/5b5983e7Nf3dcb3b5.png">\u5728\u827a\u672f\u54c1\u4e0b\u641c\u7d22' + x.pcif[y].shq,
                                                act_value: x.pcif[y].ftt,
                                                amount: x.pcif[y].acc,
                                                suggest_pos: n + ".acq.0"
                                            });
                                            break;
                                        case "5":
                                            r += c.replace(j, {
                                                id: 0,
                                                guide: x.pcif[y].ssq,
                                                categorys: c.replace(p, {
                                                    id: 1,
                                                    shop_id: x.pcif[y].shid,
                                                    shop_name: x.pcif[y].shn,
                                                    shop_logo: "//img30.360buyimg.com/n1/s90x30_" + x.pcif[y].shp
                                                })
                                            }),
                                                iItemLen++,
                                                v = 1
                                    }
                                v && (iLen = 1),
                                    r += c.replace(l, {
                                        id: 0,
                                        title: A,
                                        keyword: F,
                                        suggest_pos: n++ + (x.his ? ".his.0" : ".def.0"),
                                        categorys: sCategoriesHtml,
                                        search_count: B,
                                        history_mark: C,
                                        history_style: D
                                    })
                            }
                        } else {
                            var A = c.htmlspecialchars(x.key)
                                , B = x.his ? e : x.qre && 0 != x.qre && "0" != x.qre ? c.replace(f, {
                                amount: x.qre
                            }) : ""
                                , C = x.his ? g : ""
                                , D = x.his ? h : ""
                                , E = A.indexOf(w)
                                , F = w.length && 0 == E && !x.his ? w + "<strong>" + A.substring(E + w.length) + "</strong>" : A;
                            0 == iItemLen && 0 == iLen && (iLen = -1),
                                r += c.replace(i, {
                                    id: ++iLen,
                                    title: A,
                                    keyword: F,
                                    suggest_pos: n++ + (x.his ? ".his.0" : ".def.0"),
                                    search_count: B,
                                    history_mark: C,
                                    history_style: D
                                }),
                                iItemLen++
                        }
                }
                k.length = ++iLen,
                    "" != r ? (r += "object" == typeof x && x.his ? '<li class="close" onclick="$o.del(event)">\u5168\u90e8\u5220\u9664</li>' : '<li class="close" onclick="$o.hideTip()">\u5173\u95ed</li>',
                        t.html(r).show().find('[id^="d_"]').bind("mouseleave", function() {
                            k.mouseleave($(this))
                        }).bind("mouseenter", function() {
                            k.mouseenter($(this))
                        })) : t.html("").hide()
            }
            ,
            z.prototype.disableRemind = function() {
                search.additinal = "&suggest=1.rem.0." + this.version,
                    this.enable_remind = !1
            }
            ,
            z.prototype.remindKey = function(a, d) {
                b.val() == a && this.enable_remind && (u && this.IME && /\w/.test(a.substr(-1)) || (b.val(d),
                    this.keep_keyword = a,
                    search.additinal = "&suggest=1.rem.1." + this.version,
                    c.textSelect("key", a.length)))
            }
            ,
            z.prototype.bind_input = function() {
                $.browser.mozilla ? (b.bind("keydown", function(a) {
                    A.keydown_up(a)
                }),
                    b.bind("input", function(a) {
                        A.input(a)
                    })) : b.bind("keydown", function(a) {
                    A.keydown_up(a)
                }),
                    b.focus(function() {
                        setTimeout(function() {
                            A.input()
                        }, 10)
                    }),
                    t.parent().bind("mouseenter", function() {
                        A.e_position = !0,
                        A.timeoutId && clearTimeout(A.timeoutId)
                    }).bind("mouseleave", function() {
                        A.e_position = !1,
                            A.timeoutId = setTimeout(function() {
                                A.hideTip()
                            }, 500)
                    }),
                    $(document).click(function() {
                        A.e_position || (A.hideTip(),
                            A.uploader.clear())
                    })
            }
            ,
            z.prototype.del = function(b) {
                var c = this;
                b = b ? b : a.event,
                    a.event ? (b.cancelBubble = !0,
                        b.returnValue = !1) : (b.stopPropagation(),
                        b.preventDefault());
                var d = $(b.srcElement ? b.srcElement : b.target)
                    , e = d.parent().parent().attr("title");
                $.ajax({
                    url: w + (void 0 == e ? "&delall=1" : "&del=" + encodeURIComponent(e)),
                    dataType: "jsonp",
                    scriptCharset: "utf-8",
                    success: function(a) {
                        c.onloadItems(a)
                    }
                })
            }
            ,
            z.prototype.uploader = {
                init: function() {
                    var c = this;
                    switch (a.location.host) {
                        case "search.jd.com":
                        case "www.jd.com":
                            break;
                        default:
                            return !1
                    }
                    b.bind("click", function() {
                        c.clear()
                    }).after('<span class="photo-search-btn"><form id="search-img-upload" clstag="h|keycount|2016|03d" method="post" action="//search.jd.com/image?op=upload" enctype="multipart/form-data" target="search_upload"><span class="upload-bg"></span><input type="file" name="file" class="upload-trigger" accept="image/png,image/jpeg,image/jpg"></form></span>'),
                        setTimeout(function() {
                            $("#search-img-upload").find("input").click(function(b) {
                                b.preventDefault ? b.preventDefault() : b.returnValue = !1,
                                    seajs.use("//misc.360buyimg.com/jdf/1.0.0/unit/login/1.0.0/login.js", function(b) {
                                        b.isLogin(function(b) {
                                            b ? ($("#search-img-upload").find("input").unbind("click"),
                                                $("#search-img-upload").find("input").click(function(a) {
                                                    a.preventDefault || (a.returnValue = !0),
                                                        A.hideTip(),
                                                        c.clear()
                                                }),
                                                $("#search-img-upload").find("input").click()) : a.location.href = "//passport.jd.com/new/login.aspx?ReturnUrl=" + encodeURIComponent(a.location.href)
                                        })
                                    })
                            }).change(function() {
                                c.msg("\u56fe\u7247\u4e0a\u4f20\u4e2d\uff0c\u5927\u6279\u76f8\u4f3c\u5546\u54c1\u6b63\u5728\u8d76\u6765\uff0c\u8bf7\u7a0d\u7b49......"),
                                    c.old_domain = document.domain,
                                    document.domain = "jd.com",
                                    $("body").append('<iframe id="J_image_upload" name="search_upload" style="display:none;"></iframe>'),
                                    $("#J_image_upload").load(function() {
                                        !c.is_callback && c.msg("\u62b1\u6b49\uff0c\u56fe\u7247\u4e0a\u4f20\u5931\u8d25", "\u7f51\u7edc\u72b6\u51b5\u4e0d\u597d\uff0c\u8bf7\u91cd\u65b0\u4e0a\u4f20\u8bd5\u8bd5~")
                                    });
                                try {
                                    JA.tracker.ngloader("search.000013", {
                                        url: a.location.href
                                    })
                                } catch (b) {}
                                $("#search-img-upload").submit()
                            })
                        }, 10)
                },
                msg: function(a, b) {
                    var c = $("#photo-search-dropdown");
                    c = c.length ? c : $('<div id="photo-search-dropdown"><div class="photo-search-tip"><div class="tip-inner tip-error"><i class="tip-icon"></i><div class="tip-main"><h5 class="tip-title"></h5><div class="tip-hint"></div></div></div></div></div>').insertAfter("#shelper");
                    var d = c.find(".tip-inner");
                    b ? d.addClass("tip-error").find(".tip-title").show().html(a).next().html(b) : d.removeClass("tip-error").find(".tip-title").hide().next().html(a)
                },
                callback: function(b) {
                    if (this.is_callback = 1,
                    "ERROR" == b.split(".")[0]) {
                        switch (b.split(".")[1]) {
                            case "UPLOAD_RETRY":
                                this.msg("\u62b1\u6b49\uff0c\u56fe\u7247\u4e0a\u4f20\u5931\u8d25", "\u7f51\u7edc\u72b6\u51b5\u4e0d\u597d\uff0c\u8bf7\u91cd\u65b0\u4e0a\u4f20\u8bd5\u8bd5~");
                                break;
                            case "UPLOAD_SIZE":
                                this.msg("\u62b1\u6b49\uff0c\u56fe\u7247\u4e0a\u4f20\u5931\u8d25", "\u56fe\u7247\u4e0d\u80fd\u5927\u4e8e4M\uff0c\u8bf7\u6362\u4e00\u5f20\u56fe\u8bd5\u8bd5~");
                                break;
                            case "UPLOAD_MIN_WH":
                                this.msg("\u62b1\u6b49\uff0c\u56fe\u7247\u4e0a\u4f20\u5931\u8d25", "\u56fe\u7247\u5c3a\u5bf8\u4e0d\u80fd\u5c0f\u4e8e201x201 px");
                                break;
                            case "UPLOAD_FORMAT":
                                this.msg("\u62b1\u6b49\uff0c\u56fe\u7247\u4e0a\u4f20\u5931\u8d25", "\u53ea\u652f\u6301jpg\u6216png\u683c\u5f0f\u7684\u56fe\u7247");
                                break;
                            case "UPLOAD_JSF":
                                this.msg("\u62b1\u6b49\uff0c\u56fe\u7247\u4e0a\u4f20\u5931\u8d25", "\u7f51\u7edc\u72b6\u51b5\u4e0d\u597d\uff0c\u8bf7\u91cd\u65b0\u4e0a\u4f20\u8bd5\u8bd5~");
                                break;
                            default:
                                this.clear()
                        }
                        $("#search-img-upload").find("input").val("")
                    } else
                        a.location.href = "//search.jd.com/image?path=" + encodeURIComponent(b) + "&op=search"
                },
                clear: function() {
                    this.old_domain && (document.domain = this.old_domain),
                        this.is_callback = 0,
                        $("#J_image_upload").remove(),
                        $("#photo-search-dropdown").remove()
                }
            };
        var A = new z;
        return A.bind_input(),
            A.uploader.init(),
            A
    }
}(window);
/* jdf-1.0.0/ setUserInfo.js Date:2021-12-28 11:00:42 */
define("//misc.360buyimg.com/jdf/1.0.0/unit/setUserInfo/5.0.0/setUserInfo.js", ["//misc.360buyimg.com/jdf/1.0.0/ui/switchable/1.0.0/switchable.js", "//misc.360buyimg.com/jdf/1.0.0/ui/dropdown/1.0.0/dropdown.js", "//misc.360buyimg.com/jdf/1.0.0/unit/cookie/1.0.0/cookie.js", "//misc.360buyimg.com/jdf/1.0.0/unit/setUserInfo/5.0.0/jsencrypt.js"], function(require) {
    require("//misc.360buyimg.com/jdf/1.0.0/ui/switchable/1.0.0/switchable.js");
    require("//misc.360buyimg.com/jdf/1.0.0/ui/dropdown/1.0.0/dropdown.js");
    var e = require("//misc.360buyimg.com/jdf/1.0.0/unit/cookie/1.0.0/cookie.js");
    require("//misc.360buyimg.com/jdf/1.0.0/unit/setUserInfo/5.0.0/jsencrypt.js");
    var g = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbGddyRSw4pUibfpPbekSXfpxHQa4e5p3bPF0dDuMhXq08M1/obrosi6EFo39MI6WuBGmFco8ELtQAQM8yUPnWtYPZgRptKPD2sYzvjjsePMyHx1aGThxqdwrHP8qyKXfiyYbsHoGdW/mWB8CWaG21wgM9LPXX6kVd9ec+GXBCWQIDAQAB";
    var h = function(a) {
        a = $.extend({
            el: $("#loginbar,#ttbar-login"),
            callback: null
        }, a || {});
        var b = function() {
            return "https:" == document.location.protocol ? "https://" : "http://"
        };
        var c = '<div class="dt cw-icon">						<i class="icon-plus-nickname"></i>						<i class="ci-right"><s>\u25c7</s></i>						<a class="nickname" target="_blank" href="//home.jd.com/"></a>					</div>					<div class="dd dorpdown-layer"></div>';
        $("#shortcut-2014 #ttbar-home .iconfont").length && (c = '<div class="dt cw-icon">						<i class="icon-plus-nickname"></i>						<a class="nickname" target="_blank" href="//home.jd.com/"></a>						<i class="iconfont">&#xe605;</i>					</div>					<div class="dd dorpdown-layer"></div>'),
            $.ajax({
                url: b() + "passport.jd.com/new/helloService.ashx",
                dataType: "jsonp",
                scriptCharset: "GBK",
                success: function(b) {
                    if (!b)
                        return !1;
                    b.nick ? (a.el.addClass("dorpdown"),
                        a.el.html(c),
                        a.el.find(".nickname").html(b.nick),
                        a.el.find(".dd").html('<div class="dd-spacer"></div><div class="dd-inner"><span class="loading"></span></div>'),
                        f(),
                        a.el.dropdown({
                            enterDelay: 100,
                            trigger: !0,
                            current: "hover",
                            onchange: function(a) {
                                a.attr("data-load") || (a.attr("data-load", 1),
                                    h(e("pin")))
                            }
                        })) : a.el.html(b.info);
                    var d = function() {
                        clearTimeout(g),
                        $.isFunction(a.callback) && a.callback(b),
                            d = $.noop
                    };
                    var g = setTimeout(function() {
                        d()
                    }, 2e3);
                    if (b.sso) {
                        var i = b.sso.length;
                        $.each(b.sso, function(a, b) {
                            $.getJSON(b).complete(function() {
                                0 == --i && d()
                            })
                        })
                    } else
                        d()
                }
            });
        function d(a, b) {
            var c = "//misc.360buyimg.com/lib/img/e/blank.gif";
            var d = '<a class="u-bc-user u-2-user hide">\u5207\u6362\u4e2a\u4eba\u8d26\u53f7</a>';
            var e = '<a class="u-bc-user u-1-user hide">\u5207\u6362\u4f01\u4e1a\u8d26\u53f7</a>';
            var f = '<div class="u-plus"><a href="https://passport.jd.com/uc/login?ltype=logout&ReturnUrl=' + encodeURIComponent(window.location.href) + '" class="link-logout">\u9000\u51fa</a>' + d + e + '<a href="https://plus.jd.com/index" target="_blank" class="icon-plus-dropdown"></a></div>';
            var g = '				<div class="dd-spacer"></div>				<div class="userinfo">					<div class="u-pic"><a target="_blank" href="//home.jd.com/"><img src="' + c + '" width="60" height="60" /></a></div>' + f + '					<div class="u-msg"></div>				</div>			';
            var a = a || 0;
            var h;
            var i = {
                mfsy: {
                    name: "\u514d\u8d39\u8bd5\u7528",
                    url: "//plus.jd.com/index"
                },
                yfdm: {
                    name: "\u8fd0\u8d39\u5355\u514d",
                    url: "//vip.jd.com/home.html"
                },
                srtq: {
                    name: "\u751f\u65e5\u7279\u6743",
                    url: "//vip.jd.com/home.html"
                },
                sdtk: {
                    name: "\u95ea\u7535\u9000\u6b3e",
                    url: "//vip.jd.com/home.html"
                },
                smhx: {
                    name: "\u4e0a\u95e8\u6362\u65b0",
                    url: "//vip.jd.com/home.html"
                },
                jxzlb: {
                    name: "\u4eac\u4eab\u503c\u793c\u5305",
                    url: "//vip.jd.com/home.html"
                },
                gbzx: {
                    name: "\u8d35\u5bbe\u4e13\u7ebf",
                    url: "//vip.jd.com/home.html"
                },
                yfsm: {
                    name: "\u8fd0\u8d39\u53cc\u514d",
                    url: "//vip.jd.com/home.html"
                },
                zxj: {
                    name: "\u4e13\u4eab\u4ef7",
                    url: "//bvip.jd.com"
                },
                zzfp: {
                    name: "\u81ea\u4e3b\u53d1\u7968",
                    url: "//bvip.jd.com"
                },
                mfxz: {
                    name: "\u552e\u540e\u53cc\u514d",
                    url: "//bvip.jd.com"
                },
                shsm: {
                    name: "\u4e13\u4eab\u8fd0\u8d39",
                    url: "//bvip.jd.com"
                },
                zskf: {
                    name: "\u4e13\u5c5e\u5ba2\u670d",
                    url: "//bvip.jd.com"
                }
            };
            h = 7 == b ? {
                has: ["zxj", "zzfp", "shsm", "mfxz", "zskf"]
            } : 200 >= a ? {
                hasnt: ["yfdm", "srtq", "sdtk", "smhx", "jxzlb", "gbzx", "yfsm"]
            } : 500 > a ? {
                has: ["yfdm"],
                hasnt: ["srtq", "sdtk", "smhx", "jxzlb", "gbzx", "yfsm"]
            } : 5e3 > a ? {
                has: ["yfdm", "srtq"],
                hasnt: ["sdtk", "smhx", "jxzlb", "gbzx", "yfsm"]
            } : 1e4 > a ? {
                has: ["yfdm", "srtq", "sdtk", "smhx"],
                hasnt: ["jxzlb", "gbzx", "yfsm"]
            } : 2e4 > a ? {
                has: ["yfdm", "srtq", "sdtk", "smhx", "jxzlb"],
                hasnt: ["gbzx", "yfsm"]
            } : {
                has: ["yfsm", "srtq", "sdtk", "smhx", "jxzlb", "gbzx"]
            };
            var j = 7 == b ? [] : ['<div class="badge-panel fore1"><a href="https://plus.jd.com/index" target="_blank"><i></i><p class="u-name">\u514d\u8d39\u8bd5\u7528</p></a></div>'];
            $.each(h, function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    j.push('<div class="badge-panel"><a href="' + i[this[b]].url + '" target="_blank"><i class="' + a + "-" + this[b] + '"></i><p class="u-name">' + i[this[b]].name + "</p></a></div>")
            });
            var k = '<div class="badge-list">								<a href="javascript:void(0);" class="badge-list-prev">&lt;</a>								<div class="u-badges">									<div class="badge-panel-main">' + j.join("") + '</div>								</div>								<a href="javascript:void(0);" class="badge-list-next">&gt;</a>							</div>';
            return g += k
        }
        function f() {
            $.ajax({
                url: "//passport.jd.com/user/petName/getUserInfoForMiniJd.action",
                dataType: "jsonp",
                success: function(b) {
                    if (!b)
                        return !1;
                    var c = b.userLevel || 1;
                    var e = parseInt(b.plusStatus);
                    var f = b.userScoreVO ? b.userScoreVO.totalScore : 0;
                    if (7 == c) {
                        var g = "//bvip.jd.com";
                        $("#shortcut-2014 li.fore4 .dt a").attr("href", g)
                    }
                    var h = d(f, c);
                    a.el.find(".dd").html(h),
                        $("#ttbar-login .u-bc-user").bind("click", function() {
                            i()
                        }),
                    b.imgUrl && a.el.find(".u-pic img").attr("src", b.imgUrl);
                    var k = a.el.find(".u-msg");
                    var l = a.el.find(".badge-panel-main .fore1");
                    e >= 1 && 4 >= e && (a.el.find(".dt").addClass("icon-plus-state" + e),
                        a.el.find(".dd").addClass("icon-plus-state" + e));
                    function o() {
                        1 == e ? (k.html('<a href="//plus.jd.com/index" target="_blank">\u5f00\u901aPLUS \u5e73\u5747\u77011012\u5143/\u5e74&gt;</a>'),
                            l.find(".u-name").html("\u5f00\u901a\u6b63\u5f0f\u7248")) : 2 == e ? (k.html('<a href="//plus.jd.com/index" target="_blank">\u5f00\u901aPLUS \u5e73\u5747\u77011012\u5143/\u5e74&gt;</a>'),
                            l.find(".u-name").html("\u5f00\u901a\u6b63\u5f0f\u7248"),
                            l.addClass("u-dis")) : 3 == e ? (k.html('<a href="//plus.jd.com/index" target="_blank">\u73b0\u5728\u7eed\u8d39PLUS\u4eab\u7279\u60e0\u4ef7&gt;</a>'),
                            l.find(".u-name").html("PLUS\u4e13\u4eab")) : 4 == e ? (k.html('<a href="//plus.jd.com/index" target="_blank">\u7eed\u8d39PLUS \u5e73\u5747\u77011012\u5143/\u5e74&gt;</a>'),
                            l.find(".u-name").html("PLUS\u7eed\u8d39"),
                            l.addClass("u-dis")) : 5 == e ? (k.html('<a href="//plus.jd.com/index" target="_blank">\u53ea\u5dee\u4e00\u6b65 \u6fc0\u6d3bPLUS\u4eab\u7279\u6743&gt;</a>'),
                            l.find(".u-name").html("\u6fc0\u6d3bPLUS"),
                            l.addClass("u-dis")) : (k.html('<a href="//plus.jd.com/index" target="_blank">\u5f00\u901aPLUS \u5e73\u5747\u77011012\u5143/\u5e74&gt;</a>'),
                            l.find(".u-name").html("\u514d\u8d39\u8bd5\u7528"),
                            l.addClass("u-dis"))
                    }
                    function p() {
                        k.html('<a href="//b.jd.com" target="_blank">\u4f01\u4e1a\u4f1a\u5458\u4eab\u7279\u4ef7&gt;</a>'),
                            a.el.addClass("u-ent"),
                            a.el.find(".icon-plus-dropdown").attr("href", "//bvip.jd.com")
                    }
                    switch (c) {
                        case 7:
                            p();
                            break;
                        default:
                            o()
                    }
                    $(".badge-list").switchable({
                        type: "slider",
                        mainClass: "badge-panel",
                        contentClass: "badge-panel-main",
                        prevClass: "badge-list-prev",
                        nextClass: "badge-list-next",
                        step: 2,
                        hasPage: !0
                    }),
                    b.householdAppliance && j(b.userScoreVO.pin)
                }
            })
        }
        function h(a) {
            try {
                var b = new window.JSEncrypt;
                var c = encodeURIComponent(a);
                b.setPublicKey(g);
                var d = {
                    appName: "misc_jdf",
                    timestamp: (new Date).getTime(),
                    pin: c
                };
                $.ajax({
                    dataType: "jsonp",
                    url: "//passport.jd.com/bc/relevancePin",
                    data: {
                        param: b.encryptLong(JSON.stringify(d))
                    },
                    success: function(a) {
                        if (1 == a.code) {
                            var b = "#ttbar-login .u-" + a.data.type + "-user";
                            $(b).show(),
                                e("bcpin", encodeURIComponent(a.data.pin))
                        }
                    }
                })
            } catch (f) {}
        }
        function i() {
            setTimeout(function() {
                try {
                    var a = new window.JSEncrypt;
                    var b = e("bcpin");
                    var c = encodeURIComponent(b);
                    a.setPublicKey(g);
                    var d = {
                        pin: c,
                        timestamp: (new Date).getTime()
                    };
                    getJdEid(function(b, c) {
                        $.ajax({
                            dataType: "jsonp",
                            url: "//passport.jd.com/bc/nplogin",
                            data: {
                                pin: a.encryptLong(JSON.stringify(d)),
                                eid: b,
                                fp: c
                            },
                            success: function(a) {
                                "1" == a.code ? window.location.href = "//www.jd.com" : "-999" == a.code && a.returnUrl ? window.location.href = a.returnUrl : window.location.reload()
                            }
                        })
                    })
                } catch (f) {
                    console.info(f)
                }
            }, 1e3)
        }
        function j(a) {
            require.async("jdf/1.0.0/unit/watermark/5.0.0/watermark.js", function(b) {
                b.init({
                    watermark_txt: a,
                    watermark_width: 150
                })
            })
        }
    };
    return h
});
/* jdf-1.0.0/ localStorage.js Date:2021-12-28 11:00:42 */
define("//misc.360buyimg.com/jdf/1.0.0/unit/localStorage/1.0.0/localStorage.js", [], function() {
    var c = {
        check: function() {
            return "object" == typeof window.localStorage
        },
        has: function(a) {
            return localStorage.getItem(a) ? !0 : !1
        },
        set: function(a, b) {
            try {
                localStorage.setItem(a, JSON.stringify(b))
            } catch (c) {}
        },
        get: function(a) {
            try {
                return JSON.parse(localStorage.getItem(a))
            } catch (b) {}
        },
        remove: function(a) {
            localStorage.removeItem(a)
        },
        clearByReg: function(a) {
            var b = new RegExp(a);
            var c = window.localStorage;
            for (var d in c)
                b.test(d) && this.remove(d)
        },
        clear: function() {
            localStorage.clear()
        }
    };
    return c
});
/* jdf-1.0.0/ myjd.js Date:2021-12-28 11:00:42 */
define("//misc.360buyimg.com/jdf/1.0.0/unit/myjd/2.0.0/myjd.js", ["//misc.360buyimg.com/jdf/1.0.0/unit/login/1.0.0/login.js", "//misc.360buyimg.com/jdf/1.0.0/ui/dropdown/1.0.0/dropdown.js", "//misc.360buyimg.com/jdf/1.0.0/unit/globalReco/1.0.0/globalReco.js", "//misc.360buyimg.com/jdf/1.0.0/unit/cookie/1.0.0/cookie.js"], function(require) {
    var c = require("//misc.360buyimg.com/jdf/1.0.0/unit/login/1.0.0/login.js");
    require("//misc.360buyimg.com/jdf/1.0.0/ui/dropdown/1.0.0/dropdown.js");
    var e = require("//misc.360buyimg.com/jdf/1.0.0/unit/globalReco/1.0.0/globalReco.js");
    var f = require("//misc.360buyimg.com/jdf/1.0.0/unit/cookie/1.0.0/cookie.js");
    var g = {
        init: function() {
            var a = $("#ttbar-myjd");
            a.find(".dd").html('<div class="dd-spacer"></div><div class="dd-inner"><span class="loading"></span></div>'),
                this.el = a,
                this.bind()
        },
        bind: function() {
            var b = this;
            this.el.dropdown({
                enterDelay: 100,
                trigger: !0,
                current: "hover",
                onchange: function(a) {
                    a.attr("data-load") || (a.attr("data-load", 1),
                        b.checkLoginInit())
                }
            })
        },
        checkLoginInit: function() {
            var a = this;
            c({
                automatic: !0,
                complete: function(b) {
                    if (b) {
                        var c = "";
                        b.Identity.IsAuthenticated ? (c = a.tpl(1, b.Identity.Unick),
                            a.hasLoginInit()) : c = a.tpl(0, ""),
                            a.el.find(".dd").html(c),
                            a.baitiaoInit()
                    }
                }
            })
        },
        tpl: function() {
            var c = '<div class="dd-spacer"></div>				<div class="myjdlist1">					<div class="fore1">						<div class="item">							<a href="//order.jd.com/center/list.action" clstag="" target="_blank">\u5f85\u5904\u7406\u8ba2\u5355<span id="num-unfinishedorder"></span></a>						</div>						<div class="item">							<a href="//myjd.jd.com/afs/indexNew.action?entry=1" clstag="" target="_blank">\u8fd4\u4fee\u9000\u6362\u8d27</a>						</div>						<div class="item">							<a href="//t.jd.com/product/followProductList.action?isReduce=true" clstag="" target="_blank">\u964d\u4ef7\u5546\u54c1<span id="num-reduction"></span></a>						</div>					</div>					<div class="fore2">						<div class="item">							<a href="http://question.jd.com/myjd/getMyjdAnswerList.action" clstag="" target="_blank">\u6211\u7684\u95ee\u7b54<span id="num-consultation"></span></a>						</div>						<div class="item">							<a href="//t.jd.com/home/follow" clstag="" target="_blank">\u6211\u7684\u5173\u6ce8</a>						</div>					</div>				</div>				<div class="myjdlist2">					<div class="fore1">						<div class="item">							<a href="//bean.jd.com/myJingBean/list" clstag="" target="_blank">\u6211\u7684\u4eac\u8c46</a>						</div>						<div class="item baitiao">							<a href="//baitiao.jd.com/" clstag="jr|keycount|njdhome|wdbaitiao" target="_blank">\u6211\u7684\u767d\u6761</a>						</div>					</div>					<div class="fore2">						<div class="item">							<a href="//quan.jd.com/user_quan.action" target="_blank">\u6211\u7684\u4f18\u60e0\u5238<span id="num-ticket"></span></a>						</div>						<div class="item">							<a href="//trade.jr.jd.com/centre/browse.action" clstag="" target="_blank">\u6211\u7684\u7406\u8d22</a>						</div>					</div>				</div>				<div class="viewlist" style="display:none;">					<div class="smt">						<h4>\u6211\u7684\u8db3\u8ff9</h4>						<span class="extra">							<a target="_blank" href="//my.jd.com/history/list.html">\u66f4\u591a&nbsp;&gt;</a>						</span>					</div>					<div class="smc"></div>				</div>			';
            return c
        },
        hasLoginInit: function() {
            var a = this;
            $.ajax({
                url: "//order.jd.com/lazy/getOrderListCountJson.action",
                dataType: "jsonp",
                success: function(b) {
                    if (b && b.info) {
                        var c = b.info.waitPay + b.info.waitReceive;
                        a.el.find("#num-unfinishedorder").html(a.numStyleSet(c))
                    }
                }
            }),
                $.ajax({
                    url: "//question.jd.com/myjd/getMyJdAnswerCount.action",
                    dataType: "jsonp",
                    success: function(b) {
                        var c = b.data;
                        c.success && a.el.find("#num-consultation").html(a.numStyleSet(c.result.answerCount))
                    }
                }),
                $.ajax({
                    url: "//pjapi.jd.com/followCommodity/queryForCountByReduceProductAndPin?",
                    data: {
                        sysName: "misc",
                        source: "pc_home"
                    },
                    dataType: "jsonp",
                    success: function(b) {
                        b && b.data > 0 && a.el.find("#num-reduction").html(a.numStyleSet(b.data))
                    }
                }),
                $.ajax({
                    url: "//quan.jd.com/getcouponcount.action",
                    dataType: "jsonp",
                    success: function(b) {
                        b && void 0 !== b.CouponCount && a.el.find("#num-ticket").html(a.numStyleSet(b.CouponCount))
                    }
                }),
                $.ajax({
                    url: "//passport.jd.com/user/petName/getUserInfoForMiniJd.action",
                    dataType: "jsonp",
                    success: function(b) {
                        if (b) {
                            b.imgUrl && a.el.find(".u-pic img").attr("src", b.imgUrl);
                            var c = b.userLevel;
                            if (c) {
                                var d = {
                                    1: "\u6ce8\u518c\u4f1a\u5458",
                                    2: "\u94dc\u724c\u4f1a\u5458",
                                    3: "\u94f6\u724c\u4f1a\u5458",
                                    4: "\u91d1\u724c\u4f1a\u5458",
                                    5: "\u94bb\u77f3\u4f1a\u5458",
                                    6: "VIP\u4f1a\u5458",
                                    7: "\u4f01\u4e1a\u4f1a\u5458"
                                };
                                $("#userLevel").attr({
                                    "class": "user-level" + c,
                                    title: d[c]
                                })
                            }
                        }
                    }
                })
        },
        numStyleSet: function(a) {
            return 0 == a ? "" : '<span class="num style-red">&nbsp;' + a + "</span>"
        },
        viewlist: function() {
            var a = this;
            new e({
                $el: $("#jduc-viewlist"),
                skuHooks: "SKUS_recent_view",
                template: "",
                param: {
                    p: 202001,
                    sku: "",
                    ck: "pin,ipLocation,atw,aview",
                    lim: 5
                },
                callback: function(b, c) {
                    if (b && c) {
                        var d = "";
                        c = c.data;
                        var e = 0;
                        $.each(c, function(a, b) {
                            4 > e && b.sku && b.img && (d += '<div class="item"><a href="//item.jd.com/' + b.sku + '.html" target="_blank" title="' + b.t + '"><img src="' + pageConfig.FN_GetImageDomain(b.sku) + "n5/" + b.img + '" width="50" height="50" alt="' + b.t + '" /></a></div>',
                                e++)
                        });
                        var f = a.el.find(".viewlist");
                        f.find(".smc").html(d),
                            f.show()
                    }
                }
            })
        },
        baitiaoInit: function() {
            var b = this;
            f("pin") ? this.baitiaoLinkSet(function(a) {
                var c = b.el.find(".baitiao");
                a.btName && a.btUrl && c.html('<a href="' + a.btUrl + '" target="_blank">' + a.btName + "</a>")
            }) : b.el.find(".baitiao").show()
        },
        baitiaoLinkSet: function(a) {
            $.ajax({
                url: "//b-plus.jd.com/api/user/getUserLevel",
                type: "get",
                dataType: "jsonp",
                scriptCharset: "utf-8",
                data: {
                    pin: f("pin")
                },
                success: function(c) {
                    c && c.success && (90 == c.userLevel ? a({
                        btName: "\u6211\u7684\u91d1\u91c7",
                        btUrl: "//jc.jd.com"
                    }) : b())
                },
                error: function() {
                    b()
                }
            });
            function b() {
                $.ajax({
                    url: "//btshow.jd.com/ious/queryBT.do?sourceType=137",
                    type: "get",
                    dataType: "jsonp",
                    scriptCharset: "utf-8",
                    success: function(b) {
                        b && b.btList && b.btList[0] && a(b.btList[0])
                    }
                })
            }
        }
    };
    function h() {
        g.init()
    }
    return h
});
/* jdf-1.0.0/ shortcut.js Date:2021-12-28 11:00:42 */
define("//misc.360buyimg.com/jdf/1.0.0/unit/shortcut/5.0.0/shortcut.js", ["//misc.360buyimg.com/jdf/1.0.0/ui/dropdown/1.0.0/dropdown.js", "//misc.360buyimg.com/jdf/1.0.0/ui/areamini/1.0.0/areamini.js", "//misc.360buyimg.com/jdf/1.0.0/unit/setUserInfo/5.0.0/setUserInfo.js", "//misc.360buyimg.com/jdf/1.0.0/unit/myjd/2.0.0/myjd.js", "//misc.360buyimg.com/jdf/1.0.0/unit/localStorage/1.0.0/localStorage.js", "//misc.360buyimg.com/jdf/1.0.0/unit/cookie/1.0.0/cookie.js"], function(require) {
    require("//misc.360buyimg.com/jdf/1.0.0/ui/dropdown/1.0.0/dropdown.js");
    require("//misc.360buyimg.com/jdf/1.0.0/ui/areamini/1.0.0/areamini.js");
    var e = require("//misc.360buyimg.com/jdf/1.0.0/unit/setUserInfo/5.0.0/setUserInfo.js");
    var f = require("//misc.360buyimg.com/jdf/1.0.0/unit/myjd/2.0.0/myjd.js");
    var g = require("//misc.360buyimg.com/jdf/1.0.0/unit/localStorage/1.0.0/localStorage.js");
    var h = require("//misc.360buyimg.com/jdf/1.0.0/unit/cookie/1.0.0/cookie.js");
    function i() {
        var a = $("#footer-2014 .copyright");
        if (a.length) {
            var b = a.html();
            var c = (new Date).getFullYear();
            2016 == c && a.html(b.replace("2004-2015", "2004-2016"))
        }
    }
    function j() {
        i();
        var a = $("#shortcut-2014");
        var b = '<div class="dd-spacer"></div><div class="dd-inner"><span class="loading"></span></div>';
        e({
            el: $("#ttbar-login")
        });
        var c = '			<div class="dt cw-icon ui-areamini-text-wrap" style="display:none;">				<i class="iconfont">&#xe604;</i>				<span class="ui-areamini-text"></span> 			</div>			<div class="dd dorpdown-layer">				<div class="dd-spacer"></div>				<div class="ui-areamini-content-wrap"> 					<div class="ui-areamini-content"></div> 				</div> 				<div class="areamini_inter"> 				  <div class="areamini_inter_split"></div> 				  <p class="areamini_inter_desc">\u5730\u533a\u4e13\u4eab\u7248\u672c</p> 				  <ul class="areamini_inter_list"> 					<li class="areamini_inter_item"> 					  <a class="areamini_inter_lk" href="//hk.jd.com" target="_blank" clstag="h|keycount|head|topbar|01hk"> 						<div class="areamini_inter_name">\u4e2d\u570b\u6e2f\u6fb3</div> 					  </a> 					</li> 					<li class="areamini_inter_item"> 					  <a class="areamini_inter_lk" href="//tw.jd.com" target="_blank" clstag="h|keycount|head|topbar|01tw"> 						<div class="areamini_inter_name">\u4e2d\u570b\u53f0\u7063</div> 					  </a> 					</li> 					<li class="areamini_inter_item"> 					  <a class="areamini_inter_lk" href="//global.jd.com" target="_blank" clstag="h|keycount|head|topbar|01gl"> 						<div class="areamini_inter_name">\u4eac\u4e1c\u5168\u7403</div> 					  </a> 					</li> 				  </ul> 				</div> 				<div class="areamini_inter"> 				  <div class="areamini_inter_split"></div> 				  <p class="areamini_inter_desc">Available Sites</p> 				  <ul class="areamini_inter_list"> 					<li class="areamini_inter_item"> 					  <a class="areamini_inter_lk" href="//www.joybuy.com/?source=1&visitor_from=2" target="_blank" clstag="h|keycount|head|topbar_0101"> 						<div class="areamini_inter_ico areamini_inter_ico_global"></div> 						<div class="areamini_inter_name">Global Site</div> 					  </a> 					</li> 					<li class="areamini_inter_item"> 					  <a class="areamini_inter_lk" href="//www.jd.ru/?source=1&visitor_from=2" target="_blank" clstag="h|keycount|head|topbar_0102"> 						<div class="areamini_inter_ico areamini_inter_ico_russia"></div> 						<div class="areamini_inter_name">\u0421\u0430\u0439\u0442 \u0420\u043e\u0441\u0441\u0438\u0438</div> 					  </a> 					</li> 					<li class="areamini_inter_item"> 					  <a class="areamini_inter_lk" href="//www.jd.id/?source=1&visitor_from=2" target="_blank" clstag="h|keycount|head|topbar_0103"> 						<div class="areamini_inter_ico areamini_inter_ico_indonesia"></div> 						<div class="areamini_inter_name">Situs Indonesia</div> 					  </a> 					</li> 					<li class="areamini_inter_item"> 					  <a class="areamini_inter_lk" href="//www.joybuy.es/?source=1&visitor_from=2" target="_blank" clstag="h|keycount|head|topbar_0103"> 						<div class="areamini_inter_ico areamini_inter_ico_spain"></div> 						<div class="areamini_inter_name">Sitio de Espa\xf1a</div> 					  </a> 					</li> 					<li class="areamini_inter_item"> 						<a class="areamini_inter_lk" href="//www.jd.co.th/?source=1&visitor_from=2" target="_blank" clstag="h|keycount|head|topbar_0105"> 						  <div class="areamini_inter_ico areamini_inter_ico_thailand"></div> 						  <div class="areamini_inter_name">\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22</div> 						</a> 					</li> 				  </ul> 				</div> 			</div>		';
        var d = h("areaId");
        var j = {
            expires: 10,
            path: "/",
            domain: document.domain,
            secure: null
        };
        d ? k(d) : $.ajax({
            url: "//lapi.jd.com/locate",
            data: {
                source: "public"
            },
            dataType: "jsonp",
            timeout: 3e3,
            success: function(a) {
                var b = null;
                0 == a.code && a.data ? (b = a.data.provinceid + "-" + a.data.cityid + "-" + a.data.districtid + "-" + a.data.townid,
                    h("areaId", a.data.provinceid, j),
                    h("ipLoc-djd", b, j),
                    k(a.data.provinceid)) : k(d)
            },
            error: function() {
                k(d)
            }
        });
        function k(a) {
            $("#ttbar-mycity").html(c).areamini({
                hasCssLink: !1,
                className: {
                    hover: "hover",
                    selected: "selected"
                },
                tplContentWrap: '<div class="ui-areamini-content-list clearfix"><%=list%></div>',
                tplContentItem: '<div class="item"><a data-id="<%=id%>" href="javascript:void(0)"><%=name%></a></div>',
                threeWordDeal: function(a) {
                    var b = a.find(".ui-areamini-text").html();
                    var c = a.find(".dd-spacer");
                    3 == b.length ? c.addClass("dd-spacer-extend") : c.removeClass("dd-spacer-extend")
                },
                onReady: function() {
                    if (this.el.find(".ui-areamini-text-wrap").show(),
                    g.check() && a) {
                        var c = "areaId";
                        g.get(c) ? g.get(c) != a && (g.set(c, a),
                            g.clearByReg("^jd_home_2015_")) : g.set(c, a)
                    }
                    this.options.threeWordDeal(this.el)
                },
                onChange: function(a, b) {
                    this.options.threeWordDeal(this.el),
                    "undefined" != typeof b && window.location.reload()
                }
            })
        }
        f();
        var l = '			<div class="dd dorpdown-layer">				<div class="dd-spacer"></div>				<div class="dd-inner" id="ttbar-apps-main">' + b + "				</div>			</div>		";
        $("#ttbar-apps").append(l).dropdown({
            enterDelay: 50,
            trigger: !0,
            current: "hover",
            onchange: function(a) {
                a.attr("data-load") || (a.attr("data-load", 1),
                    seajs.use("//nfa.jd.com/loadFa.action?aid=0_0_8762", function(a) {
                        a({
                            $el: $("#ttbar-apps-main")
                        })
                    }))
            }
        });
        var m = '			<li class="fore5 dorpdown" id="ttbar-ent">				<div class="dt cw-icon">					<a target="_blank" href="//b.jd.com/">\u4f01\u4e1a\u91c7\u8d2d</a><i class="iconfont">&#xe605;</i>				</div>				<div class="dd dorpdown-layer">					<div class="dd-spacer"></div>					<div class="dd-inner" id="ttbar-ent-main">' + b + "					</div>				</div>			</li>		";
        var n = '			<div class="item"><a href="//b.jd.com" target="_blank">\u4f01\u4e1a\u8d2d</a></div>			<div class="item"><a href="//shang.jd.com" target="_blank">\u5546\u7528\u573a\u666f\u9986</a></div>			<div class="item"><a href="//mro.jd.com" target="_blank">\u5de5\u4e1a\u54c1</a></div>			<div class="item"><a href="//o.jd.com" target="_blank">\u793c\u54c1\u5361</a></div>			<div class="item"><a href="//fs.jd.com/pt/38bAWIDm" target="_blank">\u4e30\u5ba2\u591a\u5546\u57ce</a></div>		';
        $("#ttbar-ent").prop("outerHTML", m),
            $("#ttbar-ent").dropdown({
                enterDelay: 50,
                trigger: !0,
                current: "hover",
                onchange: function(b) {
                    b.attr("data-load") || (b.attr("data-load", 1),
                        a.find("#ttbar-ent .dd-inner").html(n))
                }
            });
        var o = '			<div class="dd dorpdown-layer">				<div class="dd-spacer"></div>				<div class="dd-inner" id="ttbar-atte-main">' + b + "				</div>			</div>		";
        $("#ttbar-atte").append(o).attr("aid", "2_955_6494").dropdown({
            enterDelay: 50,
            trigger: !0,
            current: "hover",
            onchange: function(a) {
                a.attr("data-load") || (a.attr("data-load", 1),
                    $.ajax({
                        url: "//nfa.jd.com/loadFa.js?aid=2_955_6494",
                        dataType: "script",
                        success: function() {}
                    }))
            }
        }),
            a.find("#ttbar-serv .dd").html(b),
            a.find("#ttbar-serv").dropdown({
                enterDelay: 50,
                trigger: !0,
                current: "hover",
                onchange: function(b) {
                    if (!b.attr("data-load")) {
                        b.attr("data-load", 1);
                        var c = setTimeout(function() {
                            d("//d.jd.com/client/get")
                        }, 3e3);
                        var d = function(b) {
                            $.ajax({
                                url: b,
                                dataType: "jsonp",
                                scriptCharset: "gb2312",
                                cache: !0,
                                jsonpCallback: "getClientCallback",
                                success: function(b) {
                                    if (b && "object" == typeof b) {
                                        clearTimeout(c),
                                            b = b.data;
                                        var d = '<div class="dd-spacer"></div>';
                                        var e = ['<div class="item-client">\u5ba2\u6237</div>'];
                                        var f = ['<div class="item-business">\u5546\u6237</div>'];
                                        $.each(b, function(a) {
                                            var c = b[a];
                                            var d = !c.type;
                                            0 == c.c && e.push('<div class="item"><a href="' + c.u + '" target="_blank" ' + d + ">" + c.n + "</a></div>"),
                                            1 == c.c && f.push('<div class="item"><a href="' + c.u + '" target="_blank" ' + d + ">" + c.n + "</a></div>")
                                        }),
                                            d += e.join(""),
                                        f.length > 1 && (d += f.join("")),
                                            a.find("#ttbar-serv .dd").html(d)
                                    }
                                }
                            })
                        };
                        d("//dc.3.cn/client/get")
                    }
                }
            }),
            a.find("#ttbar-navs .dd").html(b),
            a.find("#ttbar-navs").dropdown({
                enterDelay: 50,
                trigger: !0,
                current: "hover",
                leaveDelay: 100,
                onchange: function(b) {
                    if (!b.attr("data-load")) {
                        b.attr("data-load", 1);
                        var c = setTimeout(function() {
                            d("//d.jd.com/navigation/get")
                        }, 3e3);
                        var d = function(b) {
                            $.ajax({
                                url: b,
                                dataType: "jsonp",
                                scriptCharset: "gb2312",
                                cache: !0,
                                jsonpCallback: "getNavigationCallback",
                                success: function(b) {
                                    if (b && "object" == typeof b) {
                                        clearTimeout(c),
                                            b = b.data;
                                        var d = '<div class="dd-spacer"></div>';
                                        $.each(b, function(a) {
                                            var c = b[a];
                                            var e = c.s;
                                            var f = "";
                                            $.each(e, function(a) {
                                                var b = e[a];
                                                var c = b.c ? 'class="' + b.c + '"' : "";
                                                f += '<div class="item"><a href="' + b.u + '" target="_blank" ' + c + ">" + b.n + "</a></div>"
                                            });
                                            var g = c.n;
                                            var h = c.c ? 'class="' + c.c + '"' : "";
                                            c.u && (g = '<a href="' + c.u + '" target="_blank" ' + h + ">" + c.n + "</a>"),
                                                d += '<dl class="fore' + (a + 1) + '">									<dt>' + g + "</dt>									<dd>										" + f + "									</dd>								</dl>"
                                        }),
                                            a.find("#ttbar-navs .dd").html(d)
                                    }
                                }
                            })
                        };
                        d("//dc.3.cn/navigation/get")
                    }
                }
            })
    }
    return j
});
/* jdf-1.0.0/ shoppingcart.js Date:2021-12-28 11:00:42 */
define("//misc.360buyimg.com/jdf/1.0.0/unit/shoppingcart/5.0.0/shoppingcart.js", ["//misc.360buyimg.com/jdf/1.0.0/ui/dropdown/1.0.0/dropdown.js", "//misc.360buyimg.com/jdf/1.0.0/unit/trimPath/1.0.0/trimPath.js"], function(require) {
    require("//misc.360buyimg.com/jdf/1.0.0/ui/dropdown/1.0.0/dropdown.js");
    require("//misc.360buyimg.com/jdf/1.0.0/unit/trimPath/1.0.0/trimPath.js");
    window.pageConfig = window.pageConfig || {},
        pageConfig.shoppingcartUrl = $("#settleup-url").attr("data-from") ? $("#settleup-url").attr("data-from") : "//cart.jd.com/";
    var e = {
        el: null,
        init: function() {
            var a = this;
            var b = function() {
                null != a.DATA_Amount && $("#shopping-amount").text(a.DATA_Amount)
            };
            document.getElementById("settleup") ? (null != a.DATA_Amount && $("#settleup s").eq(0).addClass("shopping"),
                this.el = $("#settleup dl")) : document.getElementById("settleup-2013") ? this.el = $("#settleup-2013 dl") : document.getElementById("settleup-2014") && (this.el = $("#settleup-2014"),
                this.el.find(".dorpdown-layer").html('<div class="spacer"></div><div id="settleup-content"><span class="loading"></span></div>'),
                this.el.find(".cw-icon .arrow").after('<i class="ci-count" id="shopping-amount"></i>'),
                this.el.find(".cw-icon .ci-right").after('<i class="ci-count" id="shopping-amount"></i>')),
                b(),
            null != this.el && ($('a[href$="//cart.jd.com/cart/cart.html"]', this.el).attr("href", "//cart.jd.com/cart.action"),
                this.el.dropdown({
                    enterDelay: 500,
                    trigger: !0,
                    current: "hover",
                    onchange: function() {
                        a.FN_Refresh(),
                            $("#settleup-url").attr("href", pageConfig.shoppingcartUrl)
                    }
                }))
        },
        DATA_Cookie: "cn",
        DATA_Amount: readCookie("cn") || "0",
        URL_Serv: "//cart.jd.com/cart/miniCartServiceNew.action",
        TPL_Iframe: '<iframe scrolling="no" frameborder="0" marginheight="0" marginwidth="0" id="settleup-iframe"></iframe>',
        TPL_NoGoods: '<div class="spacer"></div><div class="prompt"><div class="nogoods"><b></b>\u8d2d\u7269\u8f66\u4e2d\u8fd8\u6ca1\u6709\u5546\u54c1\uff0c\u8d76\u7d27\u9009\u8d2d\u5427\uff01</div></div>',
        TPL_List: {
            wrap: '<div class="spacer"></div><div id="settleup-content"><div class="smt"><h4 class="fl">\u6700\u65b0\u52a0\u5165\u7684\u5546\u54c1</h4></div><div class="smc"></div><div class="smb ar"><div class="p-total">\u5171<b>${Num}</b>\u4ef6\u5546\u54c1</div><a href="${pageConfig.shoppingcartUrl}" title="\u53bb\u8d2d\u7269\u8f66" id="btn-payforgoods">\u53bb\u8d2d\u7269\u8f66</a></div></div>',
            sigle: '<ul id="mcart-sigle">{for list in TheSkus}  <li>      <div class="p-img fl"><a href="//item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><a href="//item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\xd7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}" data-type="RemoveProduct" href="javascript:void(0)">\u5220\u9664</a>      </div>      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>{/for}</ul>',
            gift: '<ul id="mcart-gift">{for list in TheGifts}  <li>      <div class="p-img fl"><a href="//item.jd.com/${list.MainSKU.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.MainSKU.Id)}n5/${list.MainSKU.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><a href="//item.jd.com/${list.MainSKU.Id}.html" title="${list.MainSKU.Name}" target="_blank">${list.MainSKU.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\xd7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.MainSKU.Id}" data-type="RemoveProduct" href="#delete">\u5220\u9664</a>      </div>      {for gift in list.Skus}      <div class="gift"><a href="//item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>',
            suit: '{for suit in TheSuit}<ul id="mcart-suit">  <li class="dt">      <div class="fl"><span>[\u5957\u88c5]</span> ${suit.Name}</div>      <div class="fr"><em>\u5c0f\u8ba1\uff1a\uffe5${(suit.PromotionPrice*suit.Num).toFixed(2)}</em></div>      <div class="clr"></div>  </li>  {for list in suit.Skus}  <li>      <div class="p-img fl"><a href="//item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><span></span><a href="//item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\xd7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}|${suit.Id}" data-type="RemoveSuit" href="javascript:void(0)">\u5220\u9664</a>      </div>      {for gift in list.Gifts}      <div class="gift"><a href="//item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>{/for}',
            mj: '{for mj in ManJian}<ul id="mcart-mj">  <li class="dt">      <div class="fl"><span class="hl-green">\u6ee1\u51cf</span>{if mj.ManFlag} \u5df2\u8d2d\u6ee1{if mj.ManNum>0}${mj.ManNum}\u4ef6{else}${mj.ManPrice}\u5143{/if}\uff0c\u5df2\u51cf${mj.JianPrice}\u5143{else}\u8d2d\u6ee1{if mj.ManNum>0}${mj.ManNum}\u4ef6{else}${mj.ManPrice}\u5143{/if}\uff0c\u5373\u53ef\u4eab\u53d7\u6ee1\u51cf\u4f18\u60e0{/if}</div>      <div class="fr"><em>\u5c0f\u8ba1\uff1a\uffe5${(mj.PromotionPrice*mj.Num).toFixed(2)}</em></div>      <div class="clr"></div>  </li>  {for list in mj.Skus}  <li>      <div class="p-img fl"><a href="//item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><span></span><a href="//item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\xd7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}|${mj.Id}" data-type="RemoveSuit" href="#delete">\u5220\u9664</a>      </div>      {for gift in list.Gifts}      <div class="gift"><a href="//item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>{/for}',
            mz: '{for mz in ManZeng}<ul id="mcart-mz">  <li class="dt">      <div class="fl"><span class="hl-orange">{if mz.AddMoney > 0}\u52a0\u4ef7\u8d2d{else}\u6ee1\u8d60{/if}</span>			{if mz.AddMoney <= 0}          	{if mz.ManFlag}              	\u5df2\u8d2d\u6ee1${mz.ManPrice}\u5143\uff0c\u60a8{if mz.ManGifts.length>0}\u5df2{else}\u53ef{/if}\u9886\u8d60\u54c1          	{else}              	\u8d2d\u6ee1${mz.ManPrice}\u5143\uff0c\u5373\u53ef\u9886\u53d6\u8d60\u54c1          	{/if}          {else}				{if mz.ManFlag}              	\u5df2\u8d2d\u6ee1${mz.ManPrice}\u5143\uff0c\u60a8{if mz.ManGifts.length>0}\u5df2{else}\u53ef{/if}\u52a0\u4ef7\u6362\u8d2d\u5546\u54c1          	{else}              	\u8d2d\u6ee1${mz.ManPrice}\u5143\uff0c\u5373\u53ef\u52a0\u4ef7\u6362\u8d2d\u5546\u54c1          	{/if}          {/if}      </div>      <div class="fr"><em>\u5c0f\u8ba1\uff1a\uffe5${(mz.PromotionPrice*mz.Num).toFixed(2)}</em></div>      <div class="clr"></div>  </li>  {for gift in mz.ManGifts}<li class="dt-mz"><a href="${gift.Id}" target="_blank">[{if mz.AddMoney > 0}\u6362\u8d2d\u54c1{else}\u8d60\u54c1{/if}]${gift.Name}</a>\xd7${gift.Num}</li>{/for}  {for list in mz.Skus}  <li>      <div class="p-img fl"><a href="//item.jd.com/${list.Id}.html" target="_blank"><img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt=""></a></div>      <div class="p-name fl"><span></span><a href="//item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank">${list.Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>\uffe5${list.PromotionPrice.toFixed(2)}</strong>\xd7${list.Num}</span>          <br>          {if parseInt(list.FanPrice)>0}          <span class="hl-green">\u8fd4\u73b0\uff1a\uffe5<em>${list.FanPrice}</em></span>          <br>          {/if}          {if parseInt(list.Score)>0}          <span class="hl-orange">\u9001\u4eac\u8c46\uff1a<em>${list.Score}</em></span>          <br>          {/if}          <a class="delete" data-id="${list.Id}|${mz.Id}" data-type="RemoveSuit" href="#delete">\u5220\u9664</a>      </div>      {for gift in list.Gifts}      <div class="gift"><a href="//item.jd.com/${gift.Id}.html" target="_blank">[{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}</a></div>      {/for}      {for jq in list.CouponAD}      <div class="gift-jq">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></div>      {/for}  </li>  {/for}</ul>{/for}'
        },
        FN_BindEvents: function() {
            var a = this;
            $("#settleup-content .delete").bind("click", function() {
                var b = $(this).attr("data-id").split("|")
                    , c = $(this).attr("data-type")
                    , d = {
                    method: c,
                    cartId: b[0]
                };
                b && (b.length > 1 && b[1] && (d.targetId = b[1]),
                    $.ajax({
                        url: a.URL_Serv,
                        data: d,
                        dataType: "jsonp",
                        success: function(b) {
                            b.Result && a.FN_Refresh()
                        }
                    }))
            })
        },
        FN_Refresh: function() {
            var a = this;
            var b = this.el;
            var c;
            c = /dl/.test(b.selector) ? b.find("dd").eq(0) : b.find(".dorpdown-layer").eq(0);
            var e = function(b) {
                var d = b.Cart
                    , e = d.TheSkus.length + d.TheSuit.length + d.TheGifts.length + d.ManJian.length + d.ManZeng.length
                    , f = a.TPL_List.sigle.process(b.Cart)
                    , g = a.TPL_List.gift.process(b.Cart)
                    , h = a.TPL_List.suit.process(b.Cart)
                    , i = a.TPL_List.mz.process(b.Cart)
                    , j = a.TPL_List.mj.process(b.Cart);
                if (e > 0 ? (c.html(a.TPL_List.wrap.process(b.Cart)),
                    c.find("#settleup-content .smc").html(f + g + h + j + i),
                    $("#settleup-url").attr("href", pageConfig.shoppingcartUrl)) : c.html(a.TPL_NoGoods),
                $.browser.msie && 6 == $.browser.version) {
                    var k = $("#settleup-content");
                    k.before(a.TPL_Iframe);
                    var l = $("#settleup-iframe");
                    l.height(k.height())
                }
                a.FN_BindEvents()
            };
            $.ajax({
                url: a.URL_Serv,
                data: {
                    method: "GetCart"
                },
                dataType: "jsonp",
                success: function(a) {
                    e(a)
                }
            }),
                a.DATA_Amount = readCookie(a.DATA_Cookie),
            null != a.DATA_Amount && $("#shopping-amount").text(a.DATA_Amount).parent().show()
        }
    };
    function f() {
        e.init()
    }
    return f
});
/* jdf-1.0.0/ category.js Date:2021-12-28 11:00:42 */
define("//misc.360buyimg.com/jdf/1.0.0/unit/category/5.0.0/category.js", ["//misc.360buyimg.com/jdf/1.0.0/ui/lazyload/1.0.0/lazyload.js", "//misc.360buyimg.com/jdf/1.0.0/ui/dropdown/1.0.0/dropdown.js"], function(require) {
    require("//misc.360buyimg.com/jdf/1.0.0/ui/lazyload/1.0.0/lazyload.js"),
        require("//misc.360buyimg.com/jdf/1.0.0/ui/dropdown/1.0.0/dropdown.js");
    var c = /^\/\/(car\.jd\.com|group\.jd\.com|huishou\.jd\.com|dujia\.jd\.com)/;
    var d = {
        config: {
            el: $("#categorys-2014 .dd"),
            mainId: $("#categorys-2014"),
            dataUrl: "//dc.3.cn/category/get"
        },
        init: function(a) {
            var b = this;
            var c = $.extend({
                type: null,
                mainId: null,
                el: null
            }, a);
            if (c.mainId && (b.config.mainId = $(c.mainId)),
            c.el && (b.config.el = $(c.el)),
            b.config.mainId.attr("data-type") && (c.type = b.config.mainId.attr("data-type")),
            b.isHome() || "home" == c.type)
                b.config.mainId.bind("mouseenter", function() {
                    $(this).attr("data-load") || (b.getDataInit(),
                        $(this).attr("data-load", 1)),
                        b.config.el.show()
                }).one("mouseleave", function() {
                    b.config.mainId.find(".dd-inner .item").removeClass("hover")
                }),
                    b.config.mainId.find(".dd-inner .item").one("mouseenter", function() {
                        if (!b.config.mainId.attr("data-load")) {
                            var a = $(this).attr("data-index");
                            b.getDataInit(a),
                                b.config.el.show(),
                                b.config.mainId.attr("data-load", 1)
                        }
                    });
            else if ("mini" == c.type)
                b.config.mainId.bind("mouseenter", function() {
                    $(this).attr("data-load") || b.getDataInit(void 0, "mini"),
                        $(this).attr("data-load", 1),
                        b.config.mainId.addClass("hover"),
                        b.config.el.addClass("hover").show()
                }).bind("mouseleave", function() {
                    b.config.mainId.removeClass("hover"),
                        b.config.el.hide()
                });
            else if ("default" == c.type) {
                b.config.mainId.find(".dd").size() || (b.config.mainId.append('<div class="dd" style="display:none;"></div>'),
                    b.config.el = function() {
                        return $("#categorys-2014 .dd")
                    }()),
                    b.config.mainId.css({
                        height: "auto",
                        left: 0,
                        position: "absolute"
                    });
                var d = $("#navitems-2014");
                d.css({
                    "padding-left": 190
                }),
                $.browser.msie && $.browser.version <= 7 && !pageConfig.wideVersion && d.css({
                    marginRight: "-190px"
                }),
                    $(".dd", d).css({
                        "margin-top": 0,
                        "padding-top": 2
                    }),
                    b.config.mainId.bind("mouseenter", function() {
                        if ($(this).attr("data-load") || (b.getDataInit(),
                            $(this).attr("data-load", 1)),
                            b.config.el.show(),
                            b.config.mainId.addClass("hover"),
                            $.browser.msie) {
                            var a = 2;
                            $.browser.version < 9 && (a = 0,
                            $.browser.version < 7 && (a = 5)),
                                $(".ci-right s", b.config.mainId).css("top", a + "px")
                        }
                    }).bind("mouseleave", function() {
                        b.config.el.hide(),
                            b.config.mainId.removeClass("hover"),
                        $.browser.msie && $(".ci-right s", b.config.mainId).css("top", "-9px")
                    })
            }
        },
        getDataInit: function(a, b, c) {
            var d = this;
            $.ajax({
                url: d.config.dataUrl,
                dataType: "jsonp",
                scriptCharset: "gb2312",
                cache: !0,
                jsonpCallback: "getCategoryCallback",
                success: function(e) {
                    "mini" == b ? (d.render2(e),
                        d.bigiframe(d.config.el.find(".dd-inner"))) : (d.render(e),
                        d.bigiframe(d.config.el.find(".dorpdown-layer")),
                        d.bind(a)),
                    c && c()
                }
            })
        },
        imgIndex: 0,
        getLinkHtml: function(a, b, d, e, f, g, h) {
            var i = a.split("|");
            var j = [];
            i[0] = i[0].replace(/ /g, "");
            var k = /^\d.*\d$/.test(i[0]) ? i[0] : i[0].replace(/^(http\:\/\/|\/\/)/, "");
            "undefined" != typeof e && /^\d.*\d$/.test(i[0]) && (2 == e ? k = "channel.jd.com/" + i[0] + ".html" : 3 == e && (2 == i[0].split("-").length ? k = "channel.jd.com/" + i[0] + ".html" : 3 == i[0].split("-").length && (k = "list.jd.com/list.html?cat=" + i[0].replace(/\-/g, ",")))),
                k = "//" + k,
            "https:" == location.protocol && c.test(k) && (k = "http:" + k),
            i[2] && j.push("img-link"),
            j.length > 0 && (j = 'class="' + j.join(" ") + '"');
            var l = "";
            return l = i[0] ? '<a href="' + k + '" ' + j + ' target="_blank">' : "<span>",
                i[2] ? (this.imgIndex > 4 && (this.imgIndex = 0),
                    b = b ? ' width="' + b + '"' : "",
                    d = d ? ' height="' + d + '"' : "",
                    l += '<img src="//misc.360buyimg.com/lib/img/e/blank.gif" data-lazy-img="//img1' + this.imgIndex + ".360buyimg.com/" + i[2] + '"  ' + b + d + " />",
                    this.imgIndex += 1) : l += (f || "") + i[1] + (g || ""),
                l += i[0] ? "</a>" : "</span>",
            3 == e && 0 == h && 1 == i[3] && i[0] && (l = '<div class="style-red-border"><div class="left-b"></div><a href="' + k + '" target="_blank">' + (f || "") + i[1] + (g || "") + '</a><div class="right-b"></div></div>'),
                l
        },
        render: function(a) {
            var b = this;
            var c = a.data;
            var d = ""
                , e = "";
            $.each(c, function(a, f) {
                var g = "";
                var h = "";
                $.each(c[a].s, function(d) {
                    var e = c[a].s[d];
                    var i = !1;
                    h += b.getLinkHtml(e.n) + (d < c[a].s.length - 1 ? '<span class="cate_menu_line">/</span>' : ""),
                    "n" == f.id && 0 == d && (i = !0,
                        g += '<div class="subitems-main1">'),
                        $.each(e.s, function(a) {
                            var c = e.s[a].s;
                            var d = b.getLinkHtml(e.s[a].n, null, null, 2, null, "<i>&gt;</i>");
                            var f = "<dt>" + d + "</dt>";
                            var h = "";
                            0 != c && $.each(c, function(a) {
                                h += b.getLinkHtml(c[a].n, null, 16, 3, null, null, a)
                            }),
                                h = "<dd>" + h + "</dd>",
                                g += '<dl class="fore' + (a + 1) + '">' + f + h + "</dl>",
                            i && 6 == a && (g += '</div><div class="subitems-main2">')
                        }),
                    i && (g += "</div>")
                });
                var i = function(b) {
                    var c = 10 > a + 1 ? "0" + (a + 1) : a + 1;
                    return ' clstag="h|keycount|2015|05' + c + b + '"'
                };
                d += '<div class="item fore' + (a + 1) + '" data-index="' + (a + 1) + '" ' + i("a") + ">						<h3>" + h + "</h3>					</div>				",
                    g = '<div class="subitems"' + i("c") + ">" + g + "</div>";
                var j = "";
                $.each(c[a].c, function(d) {
                    var e = c[a].c[d];
                    j += b.getLinkHtml(e, null, 24)
                }),
                j && (j = '<span class="line"></span><div class="sale">' + j + "</div>");
                var k = "";
                $.each(c[a].t, function(d) {
                    var e = c[a].t[d];
                    k += b.getLinkHtml(e, null, 24, null, null, "<i>&gt;</i>")
                }),
                    k = '<div class="channels">' + k + "</div>" + j,
                    k = '<div class="item-channels"' + i("b") + ">" + k + "</div>";
                var l = "";
                var m = 0;
                $.each(c[a].b, function(d) {
                    if (8 > d) {
                        var e = c[a].b[d];
                        l += b.getLinkHtml(e, 83, 35),
                            m += 1
                    }
                }),
                m > 0 && m % 2 == 1 && (l += '<a><img src="//img10.360buyimg.com/da/jfs/t757/162/604852976/158/9ed36f8/54c8699bNc2cfc6a1.png"></a>'),
                    l = '<div class="item-brands"' + i("d") + '><div class="brands-inner">' + l + "</div></div>";
                var n = "";
                $.each(c[a].p, function(d) {
                    if (2 > d) {
                        var e = c[a].p[d];
                        n += b.getLinkHtml(e, 168, 134)
                    }
                }),
                    n = '<div class="item-promotions"' + i("e") + ">" + n + "</div>",
                    e += '<div class="item-sub" id="category-item-' + (a + 1) + '" data-id="' + c[a].id + '">' + l + k + g + n + "</div>"
            }),
                e = '<div class="dorpdown-layer" style="display: none;">				' + e + "				</div>			",
                d = '<div class="dd-inner">' + d + "</div>",
                b.config.el.append(b.isHome() ? e : d + e)
        },
        render2: function(a) {
            var b = this;
            var c = a.data;
            var d = "";
            $.each(c, function(a) {
                var f = "";
                $.each(c[a].s, function(d) {
                    var e = c[a].s[d];
                    f += b.getLinkHtml(e.n) + (d < c[a].s.length - 1 ? '<span class="cate_menu_line">/</span>' : "")
                });
                var g = function(b) {
                    var c = 10 > a + 1 ? "0" + (a + 1) : a + 1;
                    return ' clstag="h|keycount|2015|05' + c + b + '"'
                };
                d += '<div class="item fore' + (a + 1) + '" data-index="' + (a + 1) + '" ' + g("a") + ">						<h3>" + f + "</h3>					</div>				"
            }),
                d = '<div class="dd-inner">' + d + "</div>",
                b.config.el.html(d)
        },
        bind: function(a) {
            var b = this;
            var c = function(a) {
                b.config.el.find(".dorpdown-layer").show(),
                    b.config.el.find(".item-sub").removeClass("hover");
                var c = b.config.el.find(".item-sub").eq(a - 1);
                c.addClass("hover"),
                    c.lazyload(),
                    b.topRest()
            };
            b.config.el.dropdown({
                item: "item",
                current: "hover",
                topspeed: !0,
                bodyClass: "item-sub",
                onchange: function(a) {
                    c(a.attr("data-index")),
                    $.browser.msie && 6 == $.browser.version && b.iframeName && $("#" + b.iframeName).height(b.iframeContext.outerHeight())
                },
                onmouseleave: function() {
                    b.config.mainId.find(".dd-inner .item.hover").removeClass("hover"),
                        b.config.el.find(".dorpdown-layer").hide(),
                        b.config.el.find(".item-sub").removeClass("hover"),
                    $.browser.msie && 6 == $.browser.version && b.iframeName && $("#" + b.iframeName).height(0)
                }
            }),
            "undefined" != typeof a && (c(a),
                b.config.el.find(".item").removeClass("hover"),
                b.config.el.find(".item").eq(a - 1).addClass("hover"))
        },
        topRest: function() {
            var a = this;
            var b = a.config.el.offset().top;
            var c = $(window).scrollTop();
            b = c > b ? c - b + 44 : "",
                a.config.el.find(".dorpdown-layer").css({
                    top: b
                })
        },
        isHome: function() {
            return "undefined" != typeof pageConfig ? pageConfig.navId && "jdhome2015" == pageConfig.navId : !1
        },
        bigiframe: function(a, b, c) {
            var d = this;
            if (a && $.browser.msie && 6 == $.browser.version) {
                "undefined" == typeof b && (b = a.outerWidth()),
                "undefined" == typeof c && (c = a.outerHeight()),
                100 > c && (c = $(window).height()),
                    d.iframeName = "categoryIe6BgIframe",
                    d.iframeContext = a;
                var e = '<iframe src="javascript:false;" frameBorder="0" style="width:' + b + "px;height:" + c + 'px;position:absolute;z-index:-1;opacity:0;filter:alpha(opacity=0);top:0;left:0;" id="' + d.iframeName + '">';
                a.append(e)
            }
        }
    };
    function e(a) {
        d.init(a)
    }
    return e
});
//todo
/* jdf-1.0.0/ jsencrypt.js Date:2021-12-28 11:00:42 */
!function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : b(a.JSEncrypt = {})
}(this, function(a) {
    "use strict";
    var b = "0123456789abcdefghijklmnopqrstuvwxyz";
    function c(a) {
        return b.charAt(a)
    }
    function d(a, b) {
        return a & b
    }
    function e(a, b) {
        return a | b
    }
    function f(a, b) {
        return a ^ b
    }
    function g(a, b) {
        return a & ~b
    }
    function h(a) {
        if (0 == a)
            return -1;
        var b = 0;
        return 0 == (65535 & a) && (a >>= 16,
            b += 16),
        0 == (255 & a) && (a >>= 8,
            b += 8),
        0 == (15 & a) && (a >>= 4,
            b += 4),
        0 == (3 & a) && (a >>= 2,
            b += 2),
        0 == (1 & a) && ++b,
            b
    }
    function i(a) {
        for (var b = 0; 0 != a; )
            a &= a - 1,
                ++b;
        return b
    }
    var j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function k(a) {
        var b, c, d = "";
        for (b = 0; b + 3 <= a.length; b += 3)
            c = parseInt(a.substring(b, b + 3), 16),
                d += j.charAt(c >> 6) + j.charAt(63 & c);
        for (b + 1 == a.length ? (c = parseInt(a.substring(b, b + 1), 16),
            d += j.charAt(c << 2)) : b + 2 == a.length && (c = parseInt(a.substring(b, b + 2), 16),
            d += j.charAt(c >> 2) + j.charAt((3 & c) << 4)); 0 < (3 & d.length); )
            d += "=";
        return d
    }
    function l(a) {
        var b, d = "", e = 0, f = 0;
        for (b = 0; b < a.length && "=" != a.charAt(b); ++b) {
            var g = j.indexOf(a.charAt(b));
            0 > g || (0 == e ? (d += c(g >> 2),
                f = 3 & g,
                e = 1) : 1 == e ? (d += c(f << 2 | g >> 4),
                f = 15 & g,
                e = 2) : 2 == e ? (d += c(f),
                d += c(g >> 2),
                f = 3 & g,
                e = 3) : (d += c(f << 2 | g >> 4),
                d += c(15 & g),
                e = 0))
        }
        return 1 == e && (d += c(f << 2)),
            d
    }
    var m, n = function(a, b) {
        return (n = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        b.hasOwnProperty(c) && (a[c] = b[c])
                }
        )(a, b)
    };
    var o, p = function(a) {
        var b;
        if (void 0 === m) {
            var c = "0123456789ABCDEF"
                , d = " \f\n\r	\xa0\u2028\u2029";
            for (m = {},
                     b = 0; 16 > b; ++b)
                m[c.charAt(b)] = b;
            for (c = c.toLowerCase(),
                     b = 10; 16 > b; ++b)
                m[c.charAt(b)] = b;
            for (b = 0; b < d.length; ++b)
                m[d.charAt(b)] = -1
        }
        var e = []
            , f = 0
            , g = 0;
        for (b = 0; b < a.length; ++b) {
            var h = a.charAt(b);
            if ("=" == h)
                break;
            if (-1 != (h = m[h])) {
                if (void 0 === h)
                    throw new Error("Illegal character at offset " + b);
                f |= h,
                    2 <= ++g ? (e[e.length] = f,
                        g = f = 0) : f <<= 4
            }
        }
        if (g)
            throw new Error("Hex encoding incomplete: 4 bits missing");
        return e
    }, q = {
        decode: function(a) {
            var b;
            if (void 0 === o) {
                var c = "= \f\n\r	\xa0\u2028\u2029";
                for (o = Object.create(null),
                         b = 0; 64 > b; ++b)
                    o["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b)] = b;
                for (b = 0; b < c.length; ++b)
                    o[c.charAt(b)] = -1
            }
            var d = []
                , e = 0
                , f = 0;
            for (b = 0; b < a.length; ++b) {
                var g = a.charAt(b);
                if ("=" == g)
                    break;
                if (-1 != (g = o[g])) {
                    if (void 0 === g)
                        throw new Error("Illegal character at offset " + b);
                    e |= g,
                        4 <= ++f ? (d[d.length] = e >> 16,
                            d[d.length] = e >> 8 & 255,
                            d[d.length] = 255 & e,
                            f = e = 0) : e <<= 6
                }
            }
            switch (f) {
                case 1:
                    throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                case 2:
                    d[d.length] = e >> 10;
                    break;
                case 3:
                    d[d.length] = e >> 16,
                        d[d.length] = e >> 8 & 255
            }
            return d
        },
        re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
        unarmor: function(a) {
            var b = q.re.exec(a);
            if (b)
                if (b[1])
                    a = b[1];
                else {
                    if (!b[2])
                        throw new Error("RegExp out of sync");
                    a = b[2]
                }
            return q.decode(a)
        }
    }, r = 1e13, s = function() {
        function a(a) {
            this.buf = [+a || 0]
        }
        return a.prototype.mulAdd = function(a, b) {
            var c, d, e = this.buf, f = e.length;
            for (c = 0; f > c; ++c)
                (d = e[c] * a + b) < r ? b = 0 : d -= (b = 0 | d / r) * r,
                    e[c] = d;
            b > 0 && (e[c] = b)
        }
            ,
            a.prototype.sub = function(a) {
                var b, c, d = this.buf, e = d.length;
                for (b = 0; e > b; ++b)
                    (c = d[b] - a) < 0 ? (c += r,
                        a = 1) : a = 0,
                        d[b] = c;
                for (; 0 === d[d.length - 1]; )
                    d.pop()
            }
            ,
            a.prototype.toString = function(a) {
                if (10 != (a || 10))
                    throw new Error("only base 10 is supported");
                for (var b = this.buf, c = b[b.length - 1].toString(), d = b.length - 2; d >= 0; --d)
                    c += (r + b[d]).toString().substring(1);
                return c
            }
            ,
            a.prototype.valueOf = function() {
                for (var a = this.buf, b = 0, c = a.length - 1; c >= 0; --c)
                    b = b * r + a[c];
                return b
            }
            ,
            a.prototype.simplify = function() {
                var a = this.buf;
                return 1 == a.length ? a[0] : this
            }
            ,
            a
    }(), t = "\u2026", u = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, v = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
    function w(a, b) {
        return a.length > b && (a = a.substring(0, b) + t),
            a
    }
    var x, y = function() {
        function a(b, c) {
            this.hexDigits = "0123456789ABCDEF",
                b instanceof a ? (this.enc = b.enc,
                    this.pos = b.pos) : (this.enc = b,
                    this.pos = c)
        }
        return a.prototype.get = function(a) {
            if (void 0 === a && (a = this.pos++),
            a >= this.enc.length)
                throw new Error("Requesting byte offset " + a + " on a stream of length " + this.enc.length);
            return "string" == typeof this.enc ? this.enc.charCodeAt(a) : this.enc[a]
        }
            ,
            a.prototype.hexByte = function(a) {
                return this.hexDigits.charAt(a >> 4 & 15) + this.hexDigits.charAt(15 & a)
            }
            ,
            a.prototype.hexDump = function(a, b, c) {
                for (var d = "", e = a; b > e; ++e)
                    if (d += this.hexByte(this.get(e)),
                    !0 !== c)
                        switch (15 & e) {
                            case 7:
                                d += "  ";
                                break;
                            case 15:
                                d += "\n";
                                break;
                            default:
                                d += " "
                        }
                return d
            }
            ,
            a.prototype.isASCII = function(a, b) {
                for (var c = a; b > c; ++c) {
                    var d = this.get(c);
                    if (32 > d || d > 176)
                        return !1
                }
                return !0
            }
            ,
            a.prototype.parseStringISO = function(a, b) {
                for (var c = "", d = a; b > d; ++d)
                    c += String.fromCharCode(this.get(d));
                return c
            }
            ,
            a.prototype.parseStringUTF = function(a, b) {
                for (var c = "", d = a; b > d; ) {
                    var e = this.get(d++);
                    c += String.fromCharCode(128 > e ? e : e > 191 && 224 > e ? (31 & e) << 6 | 63 & this.get(d++) : (15 & e) << 12 | (63 & this.get(d++)) << 6 | 63 & this.get(d++))
                }
                return c
            }
            ,
            a.prototype.parseStringBMP = function(a, b) {
                for (var c, d, e = "", f = a; b > f; )
                    c = this.get(f++),
                        d = this.get(f++),
                        e += String.fromCharCode(c << 8 | d);
                return e
            }
            ,
            a.prototype.parseTime = function(a, b, c) {
                var d = this.parseStringISO(a, b)
                    , e = (c ? u : v).exec(d);
                return e ? (c && (e[1] = +e[1],
                    e[1] += +e[1] < 70 ? 2e3 : 1900),
                    d = e[1] + "-" + e[2] + "-" + e[3] + " " + e[4],
                e[5] && (d += ":" + e[5],
                e[6] && (d += ":" + e[6],
                e[7] && (d += "." + e[7]))),
                e[8] && (d += " UTC",
                "Z" != e[8] && (d += e[8],
                e[9] && (d += ":" + e[9]))),
                    d) : "Unrecognized time: " + d
            }
            ,
            a.prototype.parseInteger = function(a, b) {
                for (var c, d = this.get(a), e = d > 127, f = e ? 255 : 0, g = ""; d == f && ++a < b; )
                    d = this.get(a);
                if (0 === (c = b - a))
                    return e ? -1 : 0;
                if (c > 4) {
                    for (g = d,
                             c <<= 3; 0 == (128 & (+g ^ f)); )
                        g = +g << 1,
                            --c;
                    g = "(" + c + " bit)\n"
                }
                e && (d -= 256);
                for (var h = new s(d), i = a + 1; b > i; ++i)
                    h.mulAdd(256, this.get(i));
                return g + h.toString()
            }
            ,
            a.prototype.parseBitString = function(a, b, c) {
                for (var d = this.get(a), e = "(" + ((b - a - 1 << 3) - d) + " bit)\n", f = "", g = a + 1; b > g; ++g) {
                    for (var h = this.get(g), i = g == b - 1 ? d : 0, j = 7; j >= i; --j)
                        f += h >> j & 1 ? "1" : "0";
                    if (f.length > c)
                        return e + w(f, c)
                }
                return e + f
            }
            ,
            a.prototype.parseOctetString = function(a, b, c) {
                if (this.isASCII(a, b))
                    return w(this.parseStringISO(a, b), c);
                var d = b - a
                    , e = "(" + d + " byte)\n";
                (c /= 2) < d && (b = a + c);
                for (var f = a; b > f; ++f)
                    e += this.hexByte(this.get(f));
                return d > c && (e += t),
                    e
            }
            ,
            a.prototype.parseOID = function(a, b, c) {
                for (var d = "", e = new s, f = 0, g = a; b > g; ++g) {
                    var h = this.get(g);
                    if (e.mulAdd(128, 127 & h),
                        f += 7,
                        !(128 & h)) {
                        if ("" === d)
                            if ((e = e.simplify())instanceof s)
                                e.sub(80),
                                    d = "2." + e.toString();
                            else {
                                var i = 80 > e ? 40 > e ? 0 : 1 : 2;
                                d = i + "." + (e - 40 * i)
                            }
                        else
                            d += "." + e.toString();
                        if (d.length > c)
                            return w(d, c);
                        e = new s,
                            f = 0
                    }
                }
                return f > 0 && (d += ".incomplete"),
                    d
            }
            ,
            a
    }(), z = function() {
        function a(a, b, c, d, e) {
            if (!(d instanceof A))
                throw new Error("Invalid tag value.");
            this.stream = a,
                this.header = b,
                this.length = c,
                this.tag = d,
                this.sub = e
        }
        return a.prototype.typeName = function() {
            switch (this.tag.tagClass) {
                case 0:
                    switch (this.tag.tagNumber) {
                        case 0:
                            return "EOC";
                        case 1:
                            return "BOOLEAN";
                        case 2:
                            return "INTEGER";
                        case 3:
                            return "BIT_STRING";
                        case 4:
                            return "OCTET_STRING";
                        case 5:
                            return "NULL";
                        case 6:
                            return "OBJECT_IDENTIFIER";
                        case 7:
                            return "ObjectDescriptor";
                        case 8:
                            return "EXTERNAL";
                        case 9:
                            return "REAL";
                        case 10:
                            return "ENUMERATED";
                        case 11:
                            return "EMBEDDED_PDV";
                        case 12:
                            return "UTF8String";
                        case 16:
                            return "SEQUENCE";
                        case 17:
                            return "SET";
                        case 18:
                            return "NumericString";
                        case 19:
                            return "PrintableString";
                        case 20:
                            return "TeletexString";
                        case 21:
                            return "VideotexString";
                        case 22:
                            return "IA5String";
                        case 23:
                            return "UTCTime";
                        case 24:
                            return "GeneralizedTime";
                        case 25:
                            return "GraphicString";
                        case 26:
                            return "VisibleString";
                        case 27:
                            return "GeneralString";
                        case 28:
                            return "UniversalString";
                        case 30:
                            return "BMPString"
                    }
                    return "Universal_" + this.tag.tagNumber.toString();
                case 1:
                    return "Application_" + this.tag.tagNumber.toString();
                case 2:
                    return "[" + this.tag.tagNumber.toString() + "]";
                case 3:
                    return "Private_" + this.tag.tagNumber.toString()
            }
        }
            ,
            a.prototype.content = function(a) {
                if (void 0 === this.tag)
                    return null;
                void 0 === a && (a = 1 / 0);
                var b = this.posContent()
                    , c = Math.abs(this.length);
                if (!this.tag.isUniversal())
                    return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(b, b + c, a);
                switch (this.tag.tagNumber) {
                    case 1:
                        return 0 === this.stream.get(b) ? "false" : "true";
                    case 2:
                        return this.stream.parseInteger(b, b + c);
                    case 3:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(b, b + c, a);
                    case 4:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(b, b + c, a);
                    case 6:
                        return this.stream.parseOID(b, b + c, a);
                    case 16:
                    case 17:
                        return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                    case 12:
                        return w(this.stream.parseStringUTF(b, b + c), a);
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 26:
                        return w(this.stream.parseStringISO(b, b + c), a);
                    case 30:
                        return w(this.stream.parseStringBMP(b, b + c), a);
                    case 23:
                    case 24:
                        return this.stream.parseTime(b, b + c, 23 == this.tag.tagNumber)
                }
                return null
            }
            ,
            a.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            }
            ,
            a.prototype.toPrettyString = function(a) {
                void 0 === a && (a = "");
                var b = a + this.typeName() + " @" + this.stream.pos;
                if (0 <= this.length && (b += "+"),
                    b += this.length,
                    this.tag.tagConstructed ? b += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (b += " (encapsulates)"),
                    b += "\n",
                null !== this.sub) {
                    a += "  ";
                    for (var c = 0, d = this.sub.length; d > c; ++c)
                        b += this.sub[c].toPrettyString(a)
                }
                return b
            }
            ,
            a.prototype.posStart = function() {
                return this.stream.pos
            }
            ,
            a.prototype.posContent = function() {
                return this.stream.pos + this.header
            }
            ,
            a.prototype.posEnd = function() {
                return this.stream.pos + this.header + Math.abs(this.length)
            }
            ,
            a.prototype.toHexString = function() {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }
            ,
            a.decodeLength = function(a) {
                var b = a.get()
                    , c = 127 & b;
                if (c == b)
                    return c;
                if (c > 6)
                    throw new Error("Length over 48 bits not supported at position " + (a.pos - 1));
                if (0 === c)
                    return null;
                for (var d = b = 0; c > d; ++d)
                    b = 256 * b + a.get();
                return b
            }
            ,
            a.prototype.getHexStringValue = function() {
                var a = this.toHexString()
                    , b = 2 * this.header
                    , c = 2 * this.length;
                return a.substr(b, c)
            }
            ,
            a.decode = function(b) {
                var c;
                c = b instanceof y ? b : new y(b,0);
                var d = new y(c)
                    , e = new A(c)
                    , f = a.decodeLength(c)
                    , g = c.pos
                    , h = g - d.pos
                    , i = null
                    , j = function() {
                    var b = [];
                    if (null !== f) {
                        for (var d = g + f; c.pos < d; )
                            b[b.length] = a.decode(c);
                        if (c.pos != d)
                            throw new Error("Content size is not correct for container starting at offset " + g)
                    } else
                        try {
                            for (; ; ) {
                                var e = a.decode(c);
                                if (e.tag.isEOC())
                                    break;
                                b[b.length] = e
                            }
                            f = g - c.pos
                        } catch (b) {
                            throw new Error("Exception while decoding undefined length content: " + b)
                        }
                    return b
                };
                if (e.tagConstructed)
                    i = j();
                else if (e.isUniversal() && (3 == e.tagNumber || 4 == e.tagNumber))
                    try {
                        if (3 == e.tagNumber && 0 != c.get())
                            throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                        i = j();
                        for (var k = 0; k < i.length; ++k)
                            if (i[k].tag.isEOC())
                                throw new Error("EOC is not supposed to be actual content.")
                    } catch (b) {
                        i = null
                    }
                if (null === i) {
                    if (null === f)
                        throw new Error("We can't skip over an invalid tag with undefined length at offset " + g);
                    c.pos = g + Math.abs(f)
                }
                return new a(d,h,f,e,i)
            }
            ,
            a
    }(), A = function() {
        function a(a) {
            var b = a.get();
            if (this.tagClass = b >> 6,
                this.tagConstructed = 0 != (32 & b),
                this.tagNumber = 31 & b,
            31 == this.tagNumber) {
                for (var c = new s; b = a.get(),
                    c.mulAdd(128, 127 & b),
                128 & b; )
                    ;
                this.tagNumber = c.simplify()
            }
        }
        return a.prototype.isUniversal = function() {
            return 0 === this.tagClass
        }
            ,
            a.prototype.isEOC = function() {
                return 0 === this.tagClass && 0 === this.tagNumber
            }
            ,
            a
    }(), B = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], C = (1 << 26) / B[B.length - 1], D = function() {
        function a(a, b, c) {
            null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
        }
        return a.prototype.toString = function(a) {
            if (this.s < 0)
                return "-" + this.negate().toString(a);
            var b;
            if (16 == a)
                b = 4;
            else if (8 == a)
                b = 3;
            else if (2 == a)
                b = 1;
            else if (32 == a)
                b = 5;
            else {
                if (4 != a)
                    return this.toRadix(a);
                b = 2
            }
            var d, e = (1 << b) - 1, f = !1, g = "", h = this.t, i = this.DB - h * this.DB % b;
            if (0 < h--)
                for (i < this.DB && 0 < (d = this[h] >> i) && (f = !0,
                    g = c(d)); h >= 0; )
                    b > i ? (d = (this[h] & (1 << i) - 1) << b - i,
                        d |= this[--h] >> (i += this.DB - b)) : (d = this[h] >> (i -= b) & e,
                    0 >= i && (i += this.DB,
                        --h)),
                    d > 0 && (f = !0),
                    f && (g += c(d));
            return f ? g : "0"
        }
            ,
            a.prototype.negate = function() {
                var b = I();
                return a.ZERO.subTo(this, b),
                    b
            }
            ,
            a.prototype.abs = function() {
                return this.s < 0 ? this.negate() : this
            }
            ,
            a.prototype.compareTo = function(a) {
                var b = this.s - a.s;
                if (0 != b)
                    return b;
                var c = this.t;
                if (0 != (b = c - a.t))
                    return this.s < 0 ? -b : b;
                for (; 0 <= --c; )
                    if (0 != (b = this[c] - a[c]))
                        return b;
                return 0
            }
            ,
            a.prototype.bitLength = function() {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + P(this[this.t - 1] ^ this.s & this.DM)
            }
            ,
            a.prototype.mod = function(b) {
                var c = I();
                return this.abs().divRemTo(b, null, c),
                this.s < 0 && 0 < c.compareTo(a.ZERO) && b.subTo(c, c),
                    c
            }
            ,
            a.prototype.modPowInt = function(a, b) {
                var c;
                return c = 256 > a || b.isEven() ? new F(b) : new G(b),
                    this.exp(a, c)
            }
            ,
            a.prototype.clone = function() {
                var a = I();
                return this.copyTo(a),
                    a
            }
            ,
            a.prototype.intValue = function() {
                if (this.s < 0) {
                    if (1 == this.t)
                        return this[0] - this.DV;
                    if (0 == this.t)
                        return -1
                } else {
                    if (1 == this.t)
                        return this[0];
                    if (0 == this.t)
                        return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }
            ,
            a.prototype.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }
            ,
            a.prototype.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }
            ,
            a.prototype.signum = function() {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }
            ,
            a.prototype.toByteArray = function() {
                var a = this.t
                    , b = [];
                b[0] = this.s;
                var c, d = this.DB - a * this.DB % 8, e = 0;
                if (0 < a--)
                    for (d < this.DB && (c = this[a] >> d) != (this.s & this.DM) >> d && (b[e++] = c | this.s << this.DB - d); a >= 0; )
                        8 > d ? (c = (this[a] & (1 << d) - 1) << 8 - d,
                            c |= this[--a] >> (d += this.DB - 8)) : (c = this[a] >> (d -= 8) & 255,
                        0 >= d && (d += this.DB,
                            --a)),
                        0 != (128 & c) && (c |= -256),
                        0 == e && (128 & this.s) != (128 & c) && ++e,
                        (e > 0 || c != this.s) && (b[e++] = c);
                return b
            }
            ,
            a.prototype.equals = function(a) {
                return 0 == this.compareTo(a)
            }
            ,
            a.prototype.min = function(a) {
                return this.compareTo(a) < 0 ? this : a
            }
            ,
            a.prototype.max = function(a) {
                return 0 < this.compareTo(a) ? this : a
            }
            ,
            a.prototype.and = function(a) {
                var b = I();
                return this.bitwiseTo(a, d, b),
                    b
            }
            ,
            a.prototype.or = function(a) {
                var b = I();
                return this.bitwiseTo(a, e, b),
                    b
            }
            ,
            a.prototype.xor = function(a) {
                var b = I();
                return this.bitwiseTo(a, f, b),
                    b
            }
            ,
            a.prototype.andNot = function(a) {
                var b = I();
                return this.bitwiseTo(a, g, b),
                    b
            }
            ,
            a.prototype.not = function() {
                for (var a = I(), b = 0; b < this.t; ++b)
                    a[b] = this.DM & ~this[b];
                return a.t = this.t,
                    a.s = ~this.s,
                    a
            }
            ,
            a.prototype.shiftLeft = function(a) {
                var b = I();
                return 0 > a ? this.rShiftTo(-a, b) : this.lShiftTo(a, b),
                    b
            }
            ,
            a.prototype.shiftRight = function(a) {
                var b = I();
                return 0 > a ? this.lShiftTo(-a, b) : this.rShiftTo(a, b),
                    b
            }
            ,
            a.prototype.getLowestSetBit = function() {
                for (var a = 0; a < this.t; ++a)
                    if (0 != this[a])
                        return a * this.DB + h(this[a]);
                return this.s < 0 ? this.t * this.DB : -1
            }
            ,
            a.prototype.bitCount = function() {
                for (var a = 0, b = this.s & this.DM, c = 0; c < this.t; ++c)
                    a += i(this[c] ^ b);
                return a
            }
            ,
            a.prototype.testBit = function(a) {
                var b = Math.floor(a / this.DB);
                return b >= this.t ? 0 != this.s : 0 != (this[b] & 1 << a % this.DB)
            }
            ,
            a.prototype.setBit = function(a) {
                return this.changeBit(a, e)
            }
            ,
            a.prototype.clearBit = function(a) {
                return this.changeBit(a, g)
            }
            ,
            a.prototype.flipBit = function(a) {
                return this.changeBit(a, f)
            }
            ,
            a.prototype.add = function(a) {
                var b = I();
                return this.addTo(a, b),
                    b
            }
            ,
            a.prototype.subtract = function(a) {
                var b = I();
                return this.subTo(a, b),
                    b
            }
            ,
            a.prototype.multiply = function(a) {
                var b = I();
                return this.multiplyTo(a, b),
                    b
            }
            ,
            a.prototype.divide = function(a) {
                var b = I();
                return this.divRemTo(a, b, null),
                    b
            }
            ,
            a.prototype.remainder = function(a) {
                var b = I();
                return this.divRemTo(a, null, b),
                    b
            }
            ,
            a.prototype.divideAndRemainder = function(a) {
                var b = I()
                    , c = I();
                return this.divRemTo(a, b, c),
                    [b, c]
            }
            ,
            a.prototype.modPow = function(a, b) {
                var c, d, e = a.bitLength(), f = O(1);
                if (0 >= e)
                    return f;
                c = 18 > e ? 1 : 48 > e ? 3 : 144 > e ? 4 : 768 > e ? 5 : 6,
                    d = 8 > e ? new F(b) : b.isEven() ? new H(b) : new G(b);
                var g = []
                    , h = 3
                    , i = c - 1
                    , j = (1 << c) - 1;
                if (g[1] = d.convert(this),
                c > 1) {
                    var k = I();
                    for (d.sqrTo(g[1], k); j >= h; )
                        g[h] = I(),
                            d.mulTo(k, g[h - 2], g[h]),
                            h += 2
                }
                var l, m, n = a.t - 1, o = !0, p = I();
                for (e = P(a[n]) - 1; n >= 0; ) {
                    for (e >= i ? l = a[n] >> e - i & j : (l = (a[n] & (1 << e + 1) - 1) << i - e,
                    n > 0 && (l |= a[n - 1] >> this.DB + e - i)),
                             h = c; 0 == (1 & l); )
                        l >>= 1,
                            --h;
                    if ((e -= h) < 0 && (e += this.DB,
                        --n),
                        o)
                        g[l].copyTo(f),
                            o = !1;
                    else {
                        for (; h > 1; )
                            d.sqrTo(f, p),
                                d.sqrTo(p, f),
                                h -= 2;
                        h > 0 ? d.sqrTo(f, p) : (m = f,
                            f = p,
                            p = m),
                            d.mulTo(p, g[l], f)
                    }
                    for (; n >= 0 && 0 == (a[n] & 1 << e); )
                        d.sqrTo(f, p),
                            m = f,
                            f = p,
                            p = m,
                        --e < 0 && (e = this.DB - 1,
                            --n)
                }
                return d.revert(f)
            }
            ,
            a.prototype.modInverse = function(b) {
                var c = b.isEven();
                if (this.isEven() && c || 0 == b.signum())
                    return a.ZERO;
                for (var d = b.clone(), e = this.clone(), f = O(1), g = O(0), h = O(0), i = O(1); 0 != d.signum(); ) {
                    for (; d.isEven(); )
                        d.rShiftTo(1, d),
                            c ? (f.isEven() && g.isEven() || (f.addTo(this, f),
                                g.subTo(b, g)),
                                f.rShiftTo(1, f)) : g.isEven() || g.subTo(b, g),
                            g.rShiftTo(1, g);
                    for (; e.isEven(); )
                        e.rShiftTo(1, e),
                            c ? (h.isEven() && i.isEven() || (h.addTo(this, h),
                                i.subTo(b, i)),
                                h.rShiftTo(1, h)) : i.isEven() || i.subTo(b, i),
                            i.rShiftTo(1, i);
                    0 <= d.compareTo(e) ? (d.subTo(e, d),
                    c && f.subTo(h, f),
                        g.subTo(i, g)) : (e.subTo(d, e),
                    c && h.subTo(f, h),
                        i.subTo(g, i))
                }
                return 0 != e.compareTo(a.ONE) ? a.ZERO : 0 <= i.compareTo(b) ? i.subtract(b) : i.signum() < 0 ? (i.addTo(b, i),
                    i.signum() < 0 ? i.add(b) : i) : i
            }
            ,
            a.prototype.pow = function(a) {
                return this.exp(a, new E)
            }
            ,
            a.prototype.gcd = function(a) {
                var b = this.s < 0 ? this.negate() : this.clone()
                    , c = a.s < 0 ? a.negate() : a.clone();
                if (b.compareTo(c) < 0) {
                    var d = b;
                    b = c,
                        c = d
                }
                var e = b.getLowestSetBit()
                    , f = c.getLowestSetBit();
                if (0 > f)
                    return b;
                for (f > e && (f = e),
                     f > 0 && (b.rShiftTo(f, b),
                         c.rShiftTo(f, c)); 0 < b.signum(); )
                    0 < (e = b.getLowestSetBit()) && b.rShiftTo(e, b),
                    0 < (e = c.getLowestSetBit()) && c.rShiftTo(e, c),
                        0 <= b.compareTo(c) ? (b.subTo(c, b),
                            b.rShiftTo(1, b)) : (c.subTo(b, c),
                            c.rShiftTo(1, c));
                return f > 0 && c.lShiftTo(f, c),
                    c
            }
            ,
            a.prototype.isProbablePrime = function(a) {
                var b, c = this.abs();
                if (1 == c.t && c[0] <= B[B.length - 1]) {
                    for (b = 0; b < B.length; ++b)
                        if (c[0] == B[b])
                            return !0;
                    return !1
                }
                if (c.isEven())
                    return !1;
                for (b = 1; b < B.length; ) {
                    for (var d = B[b], e = b + 1; e < B.length && C > d; )
                        d *= B[e++];
                    for (d = c.modInt(d); e > b; )
                        if (d % B[b++] == 0)
                            return !1
                }
                return c.millerRabin(a)
            }
            ,
            a.prototype.copyTo = function(a) {
                for (var b = this.t - 1; b >= 0; --b)
                    a[b] = this[b];
                a.t = this.t,
                    a.s = this.s
            }
            ,
            a.prototype.fromInt = function(a) {
                this.t = 1,
                    this.s = 0 > a ? -1 : 0,
                    a > 0 ? this[0] = a : -1 > a ? this[0] = a + this.DV : this.t = 0
            }
            ,
            a.prototype.fromString = function(b, c) {
                var d;
                if (16 == c)
                    d = 4;
                else if (8 == c)
                    d = 3;
                else if (256 == c)
                    d = 8;
                else if (2 == c)
                    d = 1;
                else if (32 == c)
                    d = 5;
                else {
                    if (4 != c)
                        return void this.fromRadix(b, c);
                    d = 2
                }
                this.t = 0,
                    this.s = 0;
                for (var e = b.length, f = !1, g = 0; 0 <= --e; ) {
                    var h = 8 == d ? 255 & +b[e] : N(b, e);
                    0 > h ? "-" == b.charAt(e) && (f = !0) : (f = !1,
                        0 == g ? this[this.t++] = h : g + d > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - g) - 1) << g,
                            this[this.t++] = h >> this.DB - g) : this[this.t - 1] |= h << g,
                    (g += d) >= this.DB && (g -= this.DB))
                }
                8 == d && 0 != (128 & +b[0]) && (this.s = -1,
                g > 0 && (this[this.t - 1] |= (1 << this.DB - g) - 1 << g)),
                    this.clamp(),
                f && a.ZERO.subTo(this, this)
            }
            ,
            a.prototype.clamp = function() {
                for (var a = this.s & this.DM; 0 < this.t && this[this.t - 1] == a; )
                    --this.t
            }
            ,
            a.prototype.dlShiftTo = function(a, b) {
                var c;
                for (c = this.t - 1; c >= 0; --c)
                    b[c + a] = this[c];
                for (c = a - 1; c >= 0; --c)
                    b[c] = 0;
                b.t = this.t + a,
                    b.s = this.s
            }
            ,
            a.prototype.drShiftTo = function(a, b) {
                for (var c = a; c < this.t; ++c)
                    b[c - a] = this[c];
                b.t = Math.max(this.t - a, 0),
                    b.s = this.s
            }
            ,
            a.prototype.lShiftTo = function(a, b) {
                for (var c = a % this.DB, d = this.DB - c, e = (1 << d) - 1, f = Math.floor(a / this.DB), g = this.s << c & this.DM, h = this.t - 1; h >= 0; --h)
                    b[h + f + 1] = this[h] >> d | g,
                        g = (this[h] & e) << c;
                for (h = f - 1; h >= 0; --h)
                    b[h] = 0;
                b[f] = g,
                    b.t = this.t + f + 1,
                    b.s = this.s,
                    b.clamp()
            }
            ,
            a.prototype.rShiftTo = function(a, b) {
                b.s = this.s;
                var c = Math.floor(a / this.DB);
                if (c >= this.t)
                    b.t = 0;
                else {
                    var d = a % this.DB
                        , e = this.DB - d
                        , f = (1 << d) - 1;
                    b[0] = this[c] >> d;
                    for (var g = c + 1; g < this.t; ++g)
                        b[g - c - 1] |= (this[g] & f) << e,
                            b[g - c] = this[g] >> d;
                    d > 0 && (b[this.t - c - 1] |= (this.s & f) << e),
                        b.t = this.t - c,
                        b.clamp()
                }
            }
            ,
            a.prototype.subTo = function(a, b) {
                for (var c = 0, d = 0, e = Math.min(a.t, this.t); e > c; )
                    d += this[c] - a[c],
                        b[c++] = d & this.DM,
                        d >>= this.DB;
                if (a.t < this.t) {
                    for (d -= a.s; c < this.t; )
                        d += this[c],
                            b[c++] = d & this.DM,
                            d >>= this.DB;
                    d += this.s
                } else {
                    for (d += this.s; c < a.t; )
                        d -= a[c],
                            b[c++] = d & this.DM,
                            d >>= this.DB;
                    d -= a.s
                }
                b.s = 0 > d ? -1 : 0,
                    -1 > d ? b[c++] = this.DV + d : d > 0 && (b[c++] = d),
                    b.t = c,
                    b.clamp()
            }
            ,
            a.prototype.multiplyTo = function(b, c) {
                var d = this.abs()
                    , e = b.abs()
                    , f = d.t;
                for (c.t = f + e.t; 0 <= --f; )
                    c[f] = 0;
                for (f = 0; f < e.t; ++f)
                    c[f + d.t] = d.am(0, e[f], c, f, 0, d.t);
                c.s = 0,
                    c.clamp(),
                this.s != b.s && a.ZERO.subTo(c, c)
            }
            ,
            a.prototype.squareTo = function(a) {
                for (var b = this.abs(), c = a.t = 2 * b.t; 0 <= --c; )
                    a[c] = 0;
                for (c = 0; c < b.t - 1; ++c) {
                    var d = b.am(c, b[c], a, 2 * c, 0, 1);
                    (a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV && (a[c + b.t] -= b.DV,
                        a[c + b.t + 1] = 1)
                }
                0 < a.t && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1)),
                    a.s = 0,
                    a.clamp()
            }
            ,
            a.prototype.divRemTo = function(b, c, d) {
                var e = b.abs();
                if (!(e.t <= 0)) {
                    var f = this.abs();
                    if (f.t < e.t)
                        return null != c && c.fromInt(0),
                            void (null != d && this.copyTo(d));
                    null == d && (d = I());
                    var g = I()
                        , h = this.s
                        , i = b.s
                        , j = this.DB - P(e[e.t - 1]);
                    j > 0 ? (e.lShiftTo(j, g),
                        f.lShiftTo(j, d)) : (e.copyTo(g),
                        f.copyTo(d));
                    var k = g.t
                        , l = g[k - 1];
                    if (0 != l) {
                        var m = l * (1 << this.F1) + (k > 1 ? g[k - 2] >> this.F2 : 0)
                            , n = this.FV / m
                            , o = (1 << this.F1) / m
                            , p = 1 << this.F2
                            , q = d.t
                            , r = q - k
                            , s = null == c ? I() : c;
                        for (g.dlShiftTo(r, s),
                             0 <= d.compareTo(s) && (d[d.t++] = 1,
                                 d.subTo(s, d)),
                                 a.ONE.dlShiftTo(k, s),
                                 s.subTo(g, g); g.t < k; )
                            g[g.t++] = 0;
                        for (; 0 <= --r; ) {
                            var t = d[--q] == l ? this.DM : Math.floor(d[q] * n + (d[q - 1] + p) * o);
                            if ((d[q] += g.am(0, t, d, r, 0, k)) < t)
                                for (g.dlShiftTo(r, s),
                                         d.subTo(s, d); d[q] < --t; )
                                    d.subTo(s, d)
                        }
                        null != c && (d.drShiftTo(k, c),
                        h != i && a.ZERO.subTo(c, c)),
                            d.t = k,
                            d.clamp(),
                        j > 0 && d.rShiftTo(j, d),
                        0 > h && a.ZERO.subTo(d, d)
                    }
                }
            }
            ,
            a.prototype.invDigit = function() {
                if (this.t < 1)
                    return 0;
                var a = this[0];
                if (0 == (1 & a))
                    return 0;
                var b = 3 & a;
                return 0 < (b = (b = (b = (b = b * (2 - (15 & a) * b) & 15) * (2 - (255 & a) * b) & 255) * (2 - ((65535 & a) * b & 65535)) & 65535) * (2 - a * b % this.DV) % this.DV) ? this.DV - b : -b
            }
            ,
            a.prototype.isEven = function() {
                return 0 == (0 < this.t ? 1 & this[0] : this.s)
            }
            ,
            a.prototype.exp = function(b, c) {
                if (b > 4294967295 || 1 > b)
                    return a.ONE;
                var d = I()
                    , e = I()
                    , f = c.convert(this)
                    , g = P(b) - 1;
                for (f.copyTo(d); 0 <= --g; )
                    if (c.sqrTo(d, e),
                    (b & 1 << g) > 0)
                        c.mulTo(e, f, d);
                    else {
                        var h = d;
                        d = e,
                            e = h
                    }
                return c.revert(d)
            }
            ,
            a.prototype.chunkSize = function(a) {
                return Math.floor(Math.LN2 * this.DB / Math.log(a))
            }
            ,
            a.prototype.toRadix = function(a) {
                if (null == a && (a = 10),
                0 == this.signum() || 2 > a || a > 36)
                    return "0";
                var b = this.chunkSize(a)
                    , c = Math.pow(a, b)
                    , d = O(c)
                    , e = I()
                    , f = I()
                    , g = "";
                for (this.divRemTo(d, e, f); 0 < e.signum(); )
                    g = (c + f.intValue()).toString(a).substr(1) + g,
                        e.divRemTo(d, e, f);
                return f.intValue().toString(a) + g
            }
            ,
            a.prototype.fromRadix = function(b, c) {
                this.fromInt(0),
                null == c && (c = 10);
                for (var d = this.chunkSize(c), e = Math.pow(c, d), f = !1, g = 0, h = 0, i = 0; i < b.length; ++i) {
                    var j = N(b, i);
                    0 > j ? "-" == b.charAt(i) && 0 == this.signum() && (f = !0) : (h = c * h + j,
                    ++g >= d && (this.dMultiply(e),
                        this.dAddOffset(h, 0),
                        h = g = 0))
                }
                g > 0 && (this.dMultiply(Math.pow(c, g)),
                    this.dAddOffset(h, 0)),
                f && a.ZERO.subTo(this, this)
            }
            ,
            a.prototype.fromNumber = function(b, c, d) {
                if ("number" == typeof c)
                    if (2 > b)
                        this.fromInt(1);
                    else
                        for (this.fromNumber(b, d),
                             this.testBit(b - 1) || this.bitwiseTo(a.ONE.shiftLeft(b - 1), e, this),
                             this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(c); )
                            this.dAddOffset(2, 0),
                            this.bitLength() > b && this.subTo(a.ONE.shiftLeft(b - 1), this);
                else {
                    var f = []
                        , g = 7 & b;
                    f.length = 1 + (b >> 3),
                        c.nextBytes(f),
                        g > 0 ? f[0] &= (1 << g) - 1 : f[0] = 0,
                        this.fromString(f, 256)
                }
            }
            ,
            a.prototype.bitwiseTo = function(a, b, c) {
                var d, e, f = Math.min(a.t, this.t);
                for (d = 0; f > d; ++d)
                    c[d] = b(this[d], a[d]);
                if (a.t < this.t) {
                    for (e = a.s & this.DM,
                             d = f; d < this.t; ++d)
                        c[d] = b(this[d], e);
                    c.t = this.t
                } else {
                    for (e = this.s & this.DM,
                             d = f; d < a.t; ++d)
                        c[d] = b(e, a[d]);
                    c.t = a.t
                }
                c.s = b(this.s, a.s),
                    c.clamp()
            }
            ,
            a.prototype.changeBit = function(b, c) {
                var d = a.ONE.shiftLeft(b);
                return this.bitwiseTo(d, c, d),
                    d
            }
            ,
            a.prototype.addTo = function(a, b) {
                for (var c = 0, d = 0, e = Math.min(a.t, this.t); e > c; )
                    d += this[c] + a[c],
                        b[c++] = d & this.DM,
                        d >>= this.DB;
                if (a.t < this.t) {
                    for (d += a.s; c < this.t; )
                        d += this[c],
                            b[c++] = d & this.DM,
                            d >>= this.DB;
                    d += this.s
                } else {
                    for (d += this.s; c < a.t; )
                        d += a[c],
                            b[c++] = d & this.DM,
                            d >>= this.DB;
                    d += a.s
                }
                b.s = 0 > d ? -1 : 0,
                    d > 0 ? b[c++] = d : -1 > d && (b[c++] = this.DV + d),
                    b.t = c,
                    b.clamp()
            }
            ,
            a.prototype.dMultiply = function(a) {
                this[this.t] = this.am(0, a - 1, this, 0, 0, this.t),
                    ++this.t,
                    this.clamp()
            }
            ,
            a.prototype.dAddOffset = function(a, b) {
                if (0 != a) {
                    for (; this.t <= b; )
                        this[this.t++] = 0;
                    for (this[b] += a; this[b] >= this.DV; )
                        this[b] -= this.DV,
                        ++b >= this.t && (this[this.t++] = 0),
                            ++this[b]
                }
            }
            ,
            a.prototype.multiplyLowerTo = function(a, b, c) {
                var d = Math.min(this.t + a.t, b);
                for (c.s = 0,
                         c.t = d; d > 0; )
                    c[--d] = 0;
                for (var e = c.t - this.t; e > d; ++d)
                    c[d + this.t] = this.am(0, a[d], c, d, 0, this.t);
                for (e = Math.min(a.t, b); e > d; ++d)
                    this.am(0, a[d], c, d, 0, b - d);
                c.clamp()
            }
            ,
            a.prototype.multiplyUpperTo = function(a, b, c) {
                --b;
                var d = c.t = this.t + a.t - b;
                for (c.s = 0; 0 <= --d; )
                    c[d] = 0;
                for (d = Math.max(b - this.t, 0); d < a.t; ++d)
                    c[this.t + d - b] = this.am(b - d, a[d], c, 0, 0, this.t + d - b);
                c.clamp(),
                    c.drShiftTo(1, c)
            }
            ,
            a.prototype.modInt = function(a) {
                if (0 >= a)
                    return 0;
                var b = this.DV % a
                    , c = this.s < 0 ? a - 1 : 0;
                if (0 < this.t)
                    if (0 == b)
                        c = this[0] % a;
                    else
                        for (var d = this.t - 1; d >= 0; --d)
                            c = (b * c + this[d]) % a;
                return c
            }
            ,
            a.prototype.millerRabin = function(b) {
                var c = this.subtract(a.ONE)
                    , d = c.getLowestSetBit();
                if (0 >= d)
                    return !1;
                var e = c.shiftRight(d);
                B.length < (b = b + 1 >> 1) && (b = B.length);
                for (var f = I(), g = 0; b > g; ++g) {
                    f.fromInt(B[Math.floor(Math.random() * B.length)]);
                    var h = f.modPow(e, this);
                    if (0 != h.compareTo(a.ONE) && 0 != h.compareTo(c)) {
                        for (var i = 1; i++ < d && 0 != h.compareTo(c); )
                            if (0 == (h = h.modPowInt(2, this)).compareTo(a.ONE))
                                return !1;
                        if (0 != h.compareTo(c))
                            return !1
                    }
                }
                return !0
            }
            ,
            a.prototype.square = function() {
                var a = I();
                return this.squareTo(a),
                    a
            }
            ,
            a.prototype.gcda = function(a, b) {
                var c = this.s < 0 ? this.negate() : this.clone()
                    , d = a.s < 0 ? a.negate() : a.clone();
                if (c.compareTo(d) < 0) {
                    var e = c;
                    c = d,
                        d = e
                }
                var f = c.getLowestSetBit()
                    , g = d.getLowestSetBit();
                if (0 > g)
                    b(c);
                else {
                    g > f && (g = f),
                    g > 0 && (c.rShiftTo(g, c),
                        d.rShiftTo(g, d));
                    var h = function() {
                        0 < (f = c.getLowestSetBit()) && c.rShiftTo(f, c),
                        0 < (f = d.getLowestSetBit()) && d.rShiftTo(f, d),
                            0 <= c.compareTo(d) ? (c.subTo(d, c),
                                c.rShiftTo(1, c)) : (d.subTo(c, d),
                                d.rShiftTo(1, d)),
                            0 < c.signum() ? setTimeout(h, 0) : (g > 0 && d.lShiftTo(g, d),
                                setTimeout(function() {
                                    b(d)
                                }, 0))
                    };
                    setTimeout(h, 10)
                }
            }
            ,
            a.prototype.fromNumberAsync = function(b, c, d, f) {
                if ("number" == typeof c)
                    if (2 > b)
                        this.fromInt(1);
                    else {
                        this.fromNumber(b, d),
                        this.testBit(b - 1) || this.bitwiseTo(a.ONE.shiftLeft(b - 1), e, this),
                        this.isEven() && this.dAddOffset(1, 0);
                        var g = this
                            , h = function() {
                            g.dAddOffset(2, 0),
                            g.bitLength() > b && g.subTo(a.ONE.shiftLeft(b - 1), g),
                                g.isProbablePrime(c) ? setTimeout(function() {
                                    f()
                                }, 0) : setTimeout(h, 0)
                        };
                        setTimeout(h, 0)
                    }
                else {
                    var i = []
                        , j = 7 & b;
                    i.length = 1 + (b >> 3),
                        c.nextBytes(i),
                        j > 0 ? i[0] &= (1 << j) - 1 : i[0] = 0,
                        this.fromString(i, 256)
                }
            }
            ,
            a
    }(), E = function() {
        function a() {}
        return a.prototype.convert = function(a) {
            return a
        }
            ,
            a.prototype.revert = function(a) {
                return a
            }
            ,
            a.prototype.mulTo = function(a, b, c) {
                a.multiplyTo(b, c)
            }
            ,
            a.prototype.sqrTo = function(a, b) {
                a.squareTo(b)
            }
            ,
            a
    }(), F = function() {
        function a(a) {
            this.m = a
        }
        return a.prototype.convert = function(a) {
            return a.s < 0 || 0 <= a.compareTo(this.m) ? a.mod(this.m) : a
        }
            ,
            a.prototype.revert = function(a) {
                return a
            }
            ,
            a.prototype.reduce = function(a) {
                a.divRemTo(this.m, null, a)
            }
            ,
            a.prototype.mulTo = function(a, b, c) {
                a.multiplyTo(b, c),
                    this.reduce(c)
            }
            ,
            a.prototype.sqrTo = function(a, b) {
                a.squareTo(b),
                    this.reduce(b)
            }
            ,
            a
    }(), G = function() {
        function a(a) {
            this.m = a,
                this.mp = a.invDigit(),
                this.mpl = 32767 & this.mp,
                this.mph = this.mp >> 15,
                this.um = (1 << a.DB - 15) - 1,
                this.mt2 = 2 * a.t
        }
        return a.prototype.convert = function(a) {
            var b = I();
            return a.abs().dlShiftTo(this.m.t, b),
                b.divRemTo(this.m, null, b),
            a.s < 0 && 0 < b.compareTo(D.ZERO) && this.m.subTo(b, b),
                b
        }
            ,
            a.prototype.revert = function(a) {
                var b = I();
                return a.copyTo(b),
                    this.reduce(b),
                    b
            }
            ,
            a.prototype.reduce = function(a) {
                for (; a.t <= this.mt2; )
                    a[a.t++] = 0;
                for (var b = 0; b < this.m.t; ++b) {
                    var c = 32767 & a[b]
                        , d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
                    for (a[c = b + this.m.t] += this.m.am(0, d, a, b, 0, this.m.t); a[c] >= a.DV; )
                        a[c] -= a.DV,
                            a[++c]++
                }
                a.clamp(),
                    a.drShiftTo(this.m.t, a),
                0 <= a.compareTo(this.m) && a.subTo(this.m, a)
            }
            ,
            a.prototype.mulTo = function(a, b, c) {
                a.multiplyTo(b, c),
                    this.reduce(c)
            }
            ,
            a.prototype.sqrTo = function(a, b) {
                a.squareTo(b),
                    this.reduce(b)
            }
            ,
            a
    }(), H = function() {
        function a(a) {
            this.m = a,
                this.r2 = I(),
                this.q3 = I(),
                D.ONE.dlShiftTo(2 * a.t, this.r2),
                this.mu = this.r2.divide(a)
        }
        return a.prototype.convert = function(a) {
            if (a.s < 0 || a.t > 2 * this.m.t)
                return a.mod(this.m);
            if (a.compareTo(this.m) < 0)
                return a;
            var b = I();
            return a.copyTo(b),
                this.reduce(b),
                b
        }
            ,
            a.prototype.revert = function(a) {
                return a
            }
            ,
            a.prototype.reduce = function(a) {
                for (a.drShiftTo(this.m.t - 1, this.r2),
                     a.t > this.m.t + 1 && (a.t = this.m.t + 1,
                         a.clamp()),
                         this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                         this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); a.compareTo(this.r2) < 0; )
                    a.dAddOffset(1, this.m.t + 1);
                for (a.subTo(this.r2, a); 0 <= a.compareTo(this.m); )
                    a.subTo(this.m, a)
            }
            ,
            a.prototype.mulTo = function(a, b, c) {
                a.multiplyTo(b, c),
                    this.reduce(c)
            }
            ,
            a.prototype.sqrTo = function(a, b) {
                a.squareTo(b),
                    this.reduce(b)
            }
            ,
            a
    }();
    function I() {
        return new D(null)
    }
    function J(a, b) {
        return new D(a,b)
    }
    "Microsoft Internet Explorer" == navigator.appName ? (D.prototype.am = function(a, b, c, d, e, f) {
        for (var g = 32767 & b, h = b >> 15; 0 <= --f; ) {
            var i = 32767 & this[a]
                , j = this[a++] >> 15
                , k = h * i + j * g;
            e = ((i = g * i + ((32767 & k) << 15) + c[d] + (1073741823 & e)) >>> 30) + (k >>> 15) + h * j + (e >>> 30),
                c[d++] = 1073741823 & i
        }
        return e
    }
        ,
        x = 30) : "Netscape" != navigator.appName ? (D.prototype.am = function(a, b, c, d, e, f) {
        for (; 0 <= --f; ) {
            var g = b * this[a++] + c[d] + e;
            e = Math.floor(g / 67108864),
                c[d++] = 67108863 & g
        }
        return e
    }
        ,
        x = 26) : (D.prototype.am = function(a, b, c, d, e, f) {
        for (var g = 16383 & b, h = b >> 14; 0 <= --f; ) {
            var i = 16383 & this[a]
                , j = this[a++] >> 14
                , k = h * i + j * g;
            e = ((i = g * i + ((16383 & k) << 14) + c[d] + e) >> 28) + (k >> 14) + h * j,
                c[d++] = 268435455 & i
        }
        return e
    }
        ,
        x = 28),
        D.prototype.DB = x,
        D.prototype.DM = (1 << x) - 1,
        D.prototype.DV = 1 << x,
        D.prototype.FV = Math.pow(2, 52),
        D.prototype.F1 = 52 - x,
        D.prototype.F2 = 2 * x - 52;
    var K, L, M = [];
    for (K = "0".charCodeAt(0),
             L = 0; 9 >= L; ++L)
        M[K++] = L;
    for (K = "a".charCodeAt(0),
             L = 10; 36 > L; ++L)
        M[K++] = L;
    for (K = "A".charCodeAt(0),
             L = 10; 36 > L; ++L)
        M[K++] = L;
    function N(a, b) {
        var c = M[a.charCodeAt(b)];
        return null == c ? -1 : c
    }
    function O(a) {
        var b = I();
        return b.fromInt(a),
            b
    }
    function P(a) {
        var b, c = 1;
        return 0 != (b = a >>> 16) && (a = b,
            c += 16),
        0 != (b = a >> 8) && (a = b,
            c += 8),
        0 != (b = a >> 4) && (a = b,
            c += 4),
        0 != (b = a >> 2) && (a = b,
            c += 2),
        0 != (b = a >> 1) && (a = b,
            c += 1),
            c
    }
    D.ZERO = O(0),
        D.ONE = O(1);
    var Q = function() {
        function a() {
            this.i = 0,
                this.j = 0,
                this.S = []
        }
        return a.prototype.init = function(a) {
            var b, c, d;
            for (b = 0; 256 > b; ++b)
                this.S[b] = b;
            for (b = c = 0; 256 > b; ++b)
                c = c + this.S[b] + a[b % a.length] & 255,
                    d = this.S[b],
                    this.S[b] = this.S[c],
                    this.S[c] = d;
            this.i = 0,
                this.j = 0
        }
            ,
            a.prototype.next = function() {
                var a;
                return this.i = this.i + 1 & 255,
                    this.j = this.j + this.S[this.i] & 255,
                    a = this.S[this.i],
                    this.S[this.i] = this.S[this.j],
                    this.S[this.j] = a,
                    this.S[a + this.S[this.i] & 255]
            }
            ,
            a
    }();
    var R, S, T = 256, U = null;
    if (null == U) {
        U = [];
        var V = void (S = 0);
        if (window.crypto && window.crypto.getRandomValues) {
            var W = new Uint32Array(256);
            for (window.crypto.getRandomValues(W),
                     V = 0; V < W.length; ++V)
                U[S++] = 255 & W[V]
        }
        var X = function(a) {
            if (this.count = this.count || 0,
            256 <= this.count || S >= T)
                window.removeEventListener ? window.removeEventListener("mousemove", X, !1) : window.detachEvent && window.detachEvent("onmousemove", X);
            else
                try {
                    var b = a.x + a.y;
                    U[S++] = 255 & b,
                        this.count += 1
                } catch (a) {}
        };
        window.addEventListener ? window.addEventListener("mousemove", X, !1) : window.attachEvent && window.attachEvent("onmousemove", X)
    }
    function Y() {
        if (null == R) {
            for (R = new Q; T > S; ) {
                var a = Math.floor(65536 * Math.random());
                U[S++] = 255 & a
            }
            for (R.init(U),
                     S = 0; S < U.length; ++S)
                U[S] = 0;
            S = 0
        }
        return R.next()
    }
    var Z = function() {
        function a() {}
        return a.prototype.nextBytes = function(a) {
            for (var b = 0; b < a.length; ++b)
                a[b] = Y()
        }
            ,
            a
    }();
    var $ = function() {
        function a() {
            this.n = null,
                this.e = 0,
                this.d = null,
                this.p = null,
                this.q = null,
                this.dmp1 = null,
                this.dmq1 = null,
                this.coeff = null
        }
        return a.prototype.doPublic = function(a) {
            return a.modPowInt(this.e, this.n)
        }
            ,
            a.prototype.doPrivate = function(a) {
                if (null == this.p || null == this.q)
                    return a.modPow(this.d, this.n);
                for (var b = a.mod(this.p).modPow(this.dmp1, this.p), c = a.mod(this.q).modPow(this.dmq1, this.q); b.compareTo(c) < 0; )
                    b = b.add(this.p);
                return b.subtract(c).multiply(this.coeff).mod(this.p).multiply(this.q).add(c)
            }
            ,
            a.prototype.setPublic = function(a, b) {
                null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = J(a, 16),
                    this.e = parseInt(b, 16)) : console.error("Invalid RSA public key")
            }
            ,
            a.prototype.encrypt = function(a) {
                var b = function(a, b) {
                    if (b < a.length + 11)
                        return console.error("Message too long for RSA"),
                            null;
                    for (var c = [], d = a.length - 1; d >= 0 && b > 0; ) {
                        var e = a.charCodeAt(d--);
                        128 > e ? c[--b] = e : e > 127 && 2048 > e ? (c[--b] = 63 & e | 128,
                            c[--b] = e >> 6 | 192) : (c[--b] = 63 & e | 128,
                            c[--b] = e >> 6 & 63 | 128,
                            c[--b] = e >> 12 | 224)
                    }
                    c[--b] = 0;
                    for (var f = new Z, g = []; b > 2; ) {
                        for (g[0] = 0; 0 == g[0]; )
                            f.nextBytes(g);
                        c[--b] = g[0]
                    }
                    return c[--b] = 2,
                        c[--b] = 0,
                        new D(c)
                }(a, this.n.bitLength() + 7 >> 3);
                if (null == b)
                    return null;
                var c = this.doPublic(b);
                if (null == c)
                    return null;
                var d = c.toString(16);
                return 0 == (1 & d.length) ? d : "0" + d
            }
            ,
            a.prototype.encryptLong = function(a) {
                var b = this
                    , c = (this.n.bitLength() + 7 >> 3) - 11;
                try {
                    var d = "";
                    return a.length > c ? (a.match(/.{1,117}/g).forEach(function(a) {
                        var c = b.encrypt(a);
                        d += c
                    }),
                        k(d)) : k(this.encrypt(a))
                } catch (a) {
                    return !1
                }
            }
            ,
            a.prototype.decryptLong = function(a) {
                var b = this
                    , c = this.n.bitLength() + 7 >> 3;
                a = l(a);
                try {
                    if (a.length > c) {
                        var d = "";
                        return a.match(/.{1,256}/g).forEach(function(a) {
                            var c = b.decrypt(a);
                            d += c
                        }),
                            d
                    }
                    return this.decrypt(a)
                } catch (a) {
                    return !1
                }
            }
            ,
            a.prototype.setPrivate = function(a, b, c) {
                null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = J(a, 16),
                    this.e = parseInt(b, 16),
                    this.d = J(c, 16)) : console.error("Invalid RSA private key")
            }
            ,
            a.prototype.setPrivateEx = function(a, b, c, d, e, f, g, h) {
                null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = J(a, 16),
                    this.e = parseInt(b, 16),
                    this.d = J(c, 16),
                    this.p = J(d, 16),
                    this.q = J(e, 16),
                    this.dmp1 = J(f, 16),
                    this.dmq1 = J(g, 16),
                    this.coeff = J(h, 16)) : console.error("Invalid RSA private key")
            }
            ,
            a.prototype.generate = function(a, b) {
                var c = new Z
                    , d = a >> 1;
                this.e = parseInt(b, 16);
                for (var e = new D(b,16); ; ) {
                    for (; this.p = new D(a - d,1,c),
                           0 != this.p.subtract(D.ONE).gcd(e).compareTo(D.ONE) || !this.p.isProbablePrime(10); )
                        ;
                    for (; this.q = new D(d,1,c),
                           0 != this.q.subtract(D.ONE).gcd(e).compareTo(D.ONE) || !this.q.isProbablePrime(10); )
                        ;
                    if (this.p.compareTo(this.q) <= 0) {
                        var f = this.p;
                        this.p = this.q,
                            this.q = f
                    }
                    var g = this.p.subtract(D.ONE)
                        , h = this.q.subtract(D.ONE)
                        , i = g.multiply(h);
                    if (0 == i.gcd(e).compareTo(D.ONE)) {
                        this.n = this.p.multiply(this.q),
                            this.d = e.modInverse(i),
                            this.dmp1 = this.d.mod(g),
                            this.dmq1 = this.d.mod(h),
                            this.coeff = this.q.modInverse(this.p);
                        break
                    }
                }
            }
            ,
            a.prototype.decrypt = function(a) {
                var b = J(a, 16)
                    , c = this.doPrivate(b);
                return null == c ? null : function(a, b) {
                    var c = a.toByteArray()
                        , d = 0;
                    for (; d < c.length && 0 == c[d]; )
                        ++d;
                    if (c.length - d != b - 1 || 2 != c[d])
                        return null;
                    for (++d; 0 != c[d]; )
                        if (++d >= c.length)
                            return null;
                    var e = "";
                    for (; ++d < c.length; ) {
                        var f = 255 & c[d];
                        128 > f ? e += String.fromCharCode(f) : f > 191 && 224 > f ? (e += String.fromCharCode((31 & f) << 6 | 63 & c[d + 1]),
                            ++d) : (e += String.fromCharCode((15 & f) << 12 | (63 & c[d + 1]) << 6 | 63 & c[d + 2]),
                            d += 2)
                    }
                    return e
                }(c, this.n.bitLength() + 7 >> 3)
            }
            ,
            a.prototype.generateAsync = function(a, b, c) {
                var d = new Z
                    , e = a >> 1;
                this.e = parseInt(b, 16);
                var f = new D(b,16)
                    , g = this
                    , h = function() {
                    var b = function() {
                        if (g.p.compareTo(g.q) <= 0) {
                            var a = g.p;
                            g.p = g.q,
                                g.q = a
                        }
                        var b = g.p.subtract(D.ONE)
                            , d = g.q.subtract(D.ONE)
                            , e = b.multiply(d);
                        0 == e.gcd(f).compareTo(D.ONE) ? (g.n = g.p.multiply(g.q),
                            g.d = f.modInverse(e),
                            g.dmp1 = g.d.mod(b),
                            g.dmq1 = g.d.mod(d),
                            g.coeff = g.q.modInverse(g.p),
                            setTimeout(function() {
                                c()
                            }, 0)) : setTimeout(h, 0)
                    }
                        , i = function() {
                        g.q = I(),
                            g.q.fromNumberAsync(e, 1, d, function() {
                                g.q.subtract(D.ONE).gcda(f, function(a) {
                                    0 == a.compareTo(D.ONE) && g.q.isProbablePrime(10) ? setTimeout(b, 0) : setTimeout(i, 0)
                                })
                            })
                    }
                        , j = function() {
                        g.p = I(),
                            g.p.fromNumberAsync(a - e, 1, d, function() {
                                g.p.subtract(D.ONE).gcda(f, function(a) {
                                    0 == a.compareTo(D.ONE) && g.p.isProbablePrime(10) ? setTimeout(i, 0) : setTimeout(j, 0)
                                })
                            })
                    };
                    setTimeout(j, 0)
                };
                setTimeout(h, 0)
            }
            ,
            a.prototype.sign = function(a, b, c) {
                var d = function(a, b) {
                    if (b < a.length + 22)
                        return console.error("Message too long for RSA"),
                            null;
                    for (var c = b - a.length - 6, d = "", e = 0; c > e; e += 2)
                        d += "ff";
                    return J("0001" + d + "00" + a, 16)
                }((_[c] || "") + b(a).toString(), this.n.bitLength() / 4);
                if (null == d)
                    return null;
                var e = this.doPrivate(d);
                if (null == e)
                    return null;
                var f = e.toString(16);
                return 0 == (1 & f.length) ? f : "0" + f
            }
            ,
            a.prototype.verify = function(a, b, c) {
                var d = J(b, 16)
                    , e = this.doPublic(d);
                return null == e ? null : function(a) {
                    for (var b in _)
                        if (_.hasOwnProperty(b)) {
                            var c = _[b]
                                , d = c.length;
                            if (a.substr(0, d) == c)
                                return a.substr(d)
                        }
                    return a
                }(e.toString(16).replace(/^1f+00/, "")) == c(a).toString()
            }
            ,
            a
    }();
    var _ = {
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        ripemd160: "3021300906052b2403020105000414"
    };
    var ab = {};
    ab.lang = {
        extend: function(a, b, c) {
            if (!b || !a)
                throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
            var d = function() {};
            if (d.prototype = b.prototype,
                a.prototype = new d,
                (a.prototype.constructor = a).superclass = b.prototype,
            b.prototype.constructor == Object.prototype.constructor && (b.prototype.constructor = b),
                c) {
                var e;
                for (e in c)
                    a.prototype[e] = c[e];
                var f = function() {}
                    , g = ["toString", "valueOf"];
                try {
                    /MSIE/.test(navigator.userAgent) && (f = function(a, b) {
                            for (e = 0; e < g.length; e += 1) {
                                var c = g[e]
                                    , d = b[c];
                                "function" == typeof d && d != Object.prototype[c] && (a[c] = d)
                            }
                        }
                    )
                } catch (a) {}
                f(a.prototype, c)
            }
        }
    };
    var bb = {};
    void 0 !== bb.asn1 && bb.asn1 || (bb.asn1 = {}),
        bb.asn1.ASN1Util = new function() {
            this.integerToByteHex = function(a) {
                var b = a.toString(16);
                return b.length % 2 == 1 && (b = "0" + b),
                    b
            }
                ,
                this.bigIntToMinTwosComplementsHex = function(a) {
                    var b = a.toString(16);
                    if ("-" != b.substr(0, 1))
                        b.length % 2 == 1 ? b = "0" + b : b.match(/^[0-7]/) || (b = "00" + b);
                    else {
                        var c = b.substr(1).length;
                        c % 2 == 1 ? c += 1 : b.match(/^[0-7]/) || (c += 2);
                        for (var d = "", e = 0; c > e; e++)
                            d += "f";
                        b = new D(d,16).xor(a).add(D.ONE).toString(16).replace(/^-/, "")
                    }
                    return b
                }
                ,
                this.getPEMStringFromHex = function(a, b) {
                    return hextopem(a, b)
                }
                ,
                this.newObject = function(a) {
                    var b = bb.asn1
                        , c = b.DERBoolean
                        , d = b.DERInteger
                        , e = b.DERBitString
                        , f = b.DEROctetString
                        , g = b.DERNull
                        , h = b.DERObjectIdentifier
                        , i = b.DEREnumerated
                        , j = b.DERUTF8String
                        , k = b.DERNumericString
                        , l = b.DERPrintableString
                        , m = b.DERTeletexString
                        , n = b.DERIA5String
                        , o = b.DERUTCTime
                        , p = b.DERGeneralizedTime
                        , q = b.DERSequence
                        , r = b.DERSet
                        , s = b.DERTaggedObject
                        , t = b.ASN1Util.newObject
                        , u = Object.keys(a);
                    if (1 != u.length)
                        throw "key of param shall be only one.";
                    var v = u[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + v + ":"))
                        throw "undefined key: " + v;
                    if ("bool" == v)
                        return new c(a[v]);
                    if ("int" == v)
                        return new d(a[v]);
                    if ("bitstr" == v)
                        return new e(a[v]);
                    if ("octstr" == v)
                        return new f(a[v]);
                    if ("null" == v)
                        return new g(a[v]);
                    if ("oid" == v)
                        return new h(a[v]);
                    if ("enum" == v)
                        return new i(a[v]);
                    if ("utf8str" == v)
                        return new j(a[v]);
                    if ("numstr" == v)
                        return new k(a[v]);
                    if ("prnstr" == v)
                        return new l(a[v]);
                    if ("telstr" == v)
                        return new m(a[v]);
                    if ("ia5str" == v)
                        return new n(a[v]);
                    if ("utctime" == v)
                        return new o(a[v]);
                    if ("gentime" == v)
                        return new p(a[v]);
                    if ("seq" == v) {
                        for (var w = a[v], x = [], y = 0; y < w.length; y++) {
                            var z = t(w[y]);
                            x.push(z)
                        }
                        return new q({
                            array: x
                        })
                    }
                    if ("set" == v) {
                        for (w = a[v],
                                 x = [],
                                 y = 0; y < w.length; y++)
                            z = t(w[y]),
                                x.push(z);
                        return new r({
                            array: x
                        })
                    }
                    if ("tag" == v) {
                        var A = a[v];
                        if ("[object Array]" === Object.prototype.toString.call(A) && 3 == A.length) {
                            var B = t(A[2]);
                            return new s({
                                tag: A[0],
                                explicit: A[1],
                                obj: B
                            })
                        }
                        var C = {};
                        if (void 0 !== A.explicit && (C.explicit = A.explicit),
                        void 0 !== A.tag && (C.tag = A.tag),
                        void 0 === A.obj)
                            throw "obj shall be specified for 'tag'.";
                        return C.obj = t(A.obj),
                            new s(C)
                    }
                }
                ,
                this.jsonToASN1HEX = function(a) {
                    return this.newObject(a).getEncodedHex()
                }
        }
        ,
        bb.asn1.ASN1Util.oidHexToInt = function(a) {
            for (var b = "", c = parseInt(a.substr(0, 2), 16), d = (b = Math.floor(c / 40) + "." + c % 40,
                ""), e = 2; e < a.length; e += 2) {
                var f = ("00000000" + parseInt(a.substr(e, 2), 16).toString(2)).slice(-8);
                d += f.substr(1, 7),
                "0" == f.substr(0, 1) && (b = b + "." + new D(d,2).toString(10),
                    d = "")
            }
            return b
        }
        ,
        bb.asn1.ASN1Util.oidIntToHex = function(a) {
            var b = function(a) {
                var b = a.toString(16);
                return 1 == b.length && (b = "0" + b),
                    b
            }
                , c = function(a) {
                var c = ""
                    , d = new D(a,10).toString(2)
                    , e = 7 - d.length % 7;
                7 == e && (e = 0);
                for (var f = "", g = 0; e > g; g++)
                    f += "0";
                for (d = f + d,
                         g = 0; g < d.length - 1; g += 7) {
                    var h = d.substr(g, 7);
                    g != d.length - 7 && (h = "1" + h),
                        c += b(parseInt(h, 2))
                }
                return c
            };
            if (!a.match(/^[0-9.]+$/))
                throw "malformed oid string: " + a;
            var d = ""
                , e = a.split(".")
                , f = 40 * parseInt(e[0]) + parseInt(e[1]);
            d += b(f),
                e.splice(0, 2);
            for (var g = 0; g < e.length; g++)
                d += c(e[g]);
            return d
        }
        ,
        bb.asn1.ASN1Object = function() {
            this.getLengthHexFromValue = function() {
                if (void 0 === this.hV || null == this.hV)
                    throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1)
                    throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                var a = this.hV.length / 2
                    , b = a.toString(16);
                if (b.length % 2 == 1 && (b = "0" + b),
                128 > a)
                    return b;
                var c = b.length / 2;
                if (c > 15)
                    throw "ASN.1 length too long to represent by 8x: n = " + a.toString(16);
                return (128 + c).toString(16) + b
            }
                ,
                this.getEncodedHex = function() {
                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                        this.hL = this.getLengthHexFromValue(),
                        this.hTLV = this.hT + this.hL + this.hV,
                        this.isModified = !1),
                        this.hTLV
                }
                ,
                this.getValueHex = function() {
                    return this.getEncodedHex(),
                        this.hV
                }
                ,
                this.getFreshValueHex = function() {
                    return ""
                }
        }
        ,
        bb.asn1.DERAbstractString = function(a) {
            bb.asn1.DERAbstractString.superclass.constructor.call(this),
                this.getString = function() {
                    return this.s
                }
                ,
                this.setString = function(a) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = a,
                        this.hV = stohex(this.s)
                }
                ,
                this.setStringHex = function(a) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = a
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
            void 0 !== a && ("string" == typeof a ? this.setString(a) : void 0 !== a.str ? this.setString(a.str) : void 0 !== a.hex && this.setStringHex(a.hex))
        }
        ,
        ab.lang.extend(bb.asn1.DERAbstractString, bb.asn1.ASN1Object),
        bb.asn1.DERAbstractTime = function() {
            bb.asn1.DERAbstractTime.superclass.constructor.call(this),
                this.localDateToUTC = function(a) {
                    return utc = a.getTime() + 6e4 * a.getTimezoneOffset(),
                        new Date(utc)
                }
                ,
                this.formatDate = function(a, b, c) {
                    var d = this.zeroPadding
                        , e = this.localDateToUTC(a)
                        , f = String(e.getFullYear());
                    "utc" == b && (f = f.substr(2, 2));
                    var g = f + d(String(e.getMonth() + 1), 2) + d(String(e.getDate()), 2) + d(String(e.getHours()), 2) + d(String(e.getMinutes()), 2) + d(String(e.getSeconds()), 2);
                    if (!0 === c) {
                        var h = e.getMilliseconds();
                        if (0 != h) {
                            var i = d(String(h), 3);
                            g = g + "." + (i = i.replace(/[0]+$/, ""))
                        }
                    }
                    return g + "Z"
                }
                ,
                this.zeroPadding = function(a, b) {
                    return a.length >= b ? a : new Array(b - a.length + 1).join("0") + a
                }
                ,
                this.getString = function() {
                    return this.s
                }
                ,
                this.setString = function(a) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = a,
                        this.hV = stohex(a)
                }
                ,
                this.setByDateValue = function(a, b, c, d, e, f) {
                    var g = new Date(Date.UTC(a, b - 1, c, d, e, f, 0));
                    this.setByDate(g)
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
        }
        ,
        ab.lang.extend(bb.asn1.DERAbstractTime, bb.asn1.ASN1Object),
        bb.asn1.DERAbstractStructured = function(a) {
            bb.asn1.DERAbstractString.superclass.constructor.call(this),
                this.setByASN1ObjectArray = function(a) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array = a
                }
                ,
                this.appendASN1Object = function(a) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.asn1Array.push(a)
                }
                ,
                this.asn1Array = new Array,
            void 0 !== a && void 0 !== a.array && (this.asn1Array = a.array)
        }
        ,
        ab.lang.extend(bb.asn1.DERAbstractStructured, bb.asn1.ASN1Object),
        bb.asn1.DERBoolean = function() {
            bb.asn1.DERBoolean.superclass.constructor.call(this),
                this.hT = "01",
                this.hTLV = "0101ff"
        }
        ,
        ab.lang.extend(bb.asn1.DERBoolean, bb.asn1.ASN1Object),
        bb.asn1.DERInteger = function(a) {
            bb.asn1.DERInteger.superclass.constructor.call(this),
                this.hT = "02",
                this.setByBigInteger = function(a) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = bb.asn1.ASN1Util.bigIntToMinTwosComplementsHex(a)
                }
                ,
                this.setByInteger = function(a) {
                    var b = new D(String(a),10);
                    this.setByBigInteger(b)
                }
                ,
                this.setValueHex = function(a) {
                    this.hV = a
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
            void 0 !== a && (void 0 !== a.bigint ? this.setByBigInteger(a.bigint) : void 0 !== a.int ? this.setByInteger(a.int) : "number" == typeof a ? this.setByInteger(a) : void 0 !== a.hex && this.setValueHex(a.hex))
        }
        ,
        ab.lang.extend(bb.asn1.DERInteger, bb.asn1.ASN1Object),
        bb.asn1.DERBitString = function(a) {
            if (void 0 !== a && void 0 !== a.obj) {
                var b = bb.asn1.ASN1Util.newObject(a.obj);
                a.hex = "00" + b.getEncodedHex()
            }
            bb.asn1.DERBitString.superclass.constructor.call(this),
                this.hT = "03",
                this.setHexValueIncludingUnusedBits = function(a) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = a
                }
                ,
                this.setUnusedBitsAndHexValue = function(a, b) {
                    if (0 > a || a > 7)
                        throw "unused bits shall be from 0 to 7: u = " + a;
                    var c = "0" + a;
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = c + b
                }
                ,
                this.setByBinaryString = function(a) {
                    var b = 8 - (a = a.replace(/0+$/, "")).length % 8;
                    8 == b && (b = 0);
                    for (var c = 0; b >= c; c++)
                        a += "0";
                    var d = "";
                    for (c = 0; c < a.length - 1; c += 8) {
                        var e = a.substr(c, 8)
                            , f = parseInt(e, 2).toString(16);
                        1 == f.length && (f = "0" + f),
                            d += f
                    }
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = "0" + b + d
                }
                ,
                this.setByBooleanArray = function(a) {
                    for (var b = "", c = 0; c < a.length; c++)
                        b += 1 == a[c] ? "1" : "0";
                    this.setByBinaryString(b)
                }
                ,
                this.newFalseArray = function(a) {
                    for (var b = new Array(a), c = 0; a > c; c++)
                        b[c] = !1;
                    return b
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
            void 0 !== a && ("string" == typeof a && a.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(a) : void 0 !== a.hex ? this.setHexValueIncludingUnusedBits(a.hex) : void 0 !== a.bin ? this.setByBinaryString(a.bin) : void 0 !== a.array && this.setByBooleanArray(a.array))
        }
        ,
        ab.lang.extend(bb.asn1.DERBitString, bb.asn1.ASN1Object),
        bb.asn1.DEROctetString = function(a) {
            if (void 0 !== a && void 0 !== a.obj) {
                var b = bb.asn1.ASN1Util.newObject(a.obj);
                a.hex = b.getEncodedHex()
            }
            bb.asn1.DEROctetString.superclass.constructor.call(this, a),
                this.hT = "04"
        }
        ,
        ab.lang.extend(bb.asn1.DEROctetString, bb.asn1.DERAbstractString),
        bb.asn1.DERNull = function() {
            bb.asn1.DERNull.superclass.constructor.call(this),
                this.hT = "05",
                this.hTLV = "0500"
        }
        ,
        ab.lang.extend(bb.asn1.DERNull, bb.asn1.ASN1Object),
        bb.asn1.DERObjectIdentifier = function(a) {
            var b = function(a) {
                var b = a.toString(16);
                return 1 == b.length && (b = "0" + b),
                    b
            }
                , c = function(a) {
                var c = ""
                    , d = new D(a,10).toString(2)
                    , e = 7 - d.length % 7;
                7 == e && (e = 0);
                for (var f = "", g = 0; e > g; g++)
                    f += "0";
                for (d = f + d,
                         g = 0; g < d.length - 1; g += 7) {
                    var h = d.substr(g, 7);
                    g != d.length - 7 && (h = "1" + h),
                        c += b(parseInt(h, 2))
                }
                return c
            };
            bb.asn1.DERObjectIdentifier.superclass.constructor.call(this),
                this.hT = "06",
                this.setValueHex = function(a) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = a
                }
                ,
                this.setValueOidString = function(a) {
                    if (!a.match(/^[0-9.]+$/))
                        throw "malformed oid string: " + a;
                    var d = ""
                        , e = a.split(".")
                        , f = 40 * parseInt(e[0]) + parseInt(e[1]);
                    d += b(f),
                        e.splice(0, 2);
                    for (var g = 0; g < e.length; g++)
                        d += c(e[g]);
                    this.hTLV = null,
                        this.isModified = !0,
                        this.s = null,
                        this.hV = d
                }
                ,
                this.setValueName = function(a) {
                    var b = bb.asn1.x509.OID.name2oid(a);
                    if ("" === b)
                        throw "DERObjectIdentifier oidName undefined: " + a;
                    this.setValueOidString(b)
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
            void 0 !== a && ("string" == typeof a ? a.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(a) : this.setValueName(a) : void 0 !== a.oid ? this.setValueOidString(a.oid) : void 0 !== a.hex ? this.setValueHex(a.hex) : void 0 !== a.name && this.setValueName(a.name))
        }
        ,
        ab.lang.extend(bb.asn1.DERObjectIdentifier, bb.asn1.ASN1Object),
        bb.asn1.DEREnumerated = function(a) {
            bb.asn1.DEREnumerated.superclass.constructor.call(this),
                this.hT = "0a",
                this.setByBigInteger = function(a) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.hV = bb.asn1.ASN1Util.bigIntToMinTwosComplementsHex(a)
                }
                ,
                this.setByInteger = function(a) {
                    var b = new D(String(a),10);
                    this.setByBigInteger(b)
                }
                ,
                this.setValueHex = function(a) {
                    this.hV = a
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
            void 0 !== a && (void 0 !== a.int ? this.setByInteger(a.int) : "number" == typeof a ? this.setByInteger(a) : void 0 !== a.hex && this.setValueHex(a.hex))
        }
        ,
        ab.lang.extend(bb.asn1.DEREnumerated, bb.asn1.ASN1Object),
        bb.asn1.DERUTF8String = function(a) {
            bb.asn1.DERUTF8String.superclass.constructor.call(this, a),
                this.hT = "0c"
        }
        ,
        ab.lang.extend(bb.asn1.DERUTF8String, bb.asn1.DERAbstractString),
        bb.asn1.DERNumericString = function(a) {
            bb.asn1.DERNumericString.superclass.constructor.call(this, a),
                this.hT = "12"
        }
        ,
        ab.lang.extend(bb.asn1.DERNumericString, bb.asn1.DERAbstractString),
        bb.asn1.DERPrintableString = function(a) {
            bb.asn1.DERPrintableString.superclass.constructor.call(this, a),
                this.hT = "13"
        }
        ,
        ab.lang.extend(bb.asn1.DERPrintableString, bb.asn1.DERAbstractString),
        bb.asn1.DERTeletexString = function(a) {
            bb.asn1.DERTeletexString.superclass.constructor.call(this, a),
                this.hT = "14"
        }
        ,
        ab.lang.extend(bb.asn1.DERTeletexString, bb.asn1.DERAbstractString),
        bb.asn1.DERIA5String = function(a) {
            bb.asn1.DERIA5String.superclass.constructor.call(this, a),
                this.hT = "16"
        }
        ,
        ab.lang.extend(bb.asn1.DERIA5String, bb.asn1.DERAbstractString),
        bb.asn1.DERUTCTime = function(a) {
            bb.asn1.DERUTCTime.superclass.constructor.call(this, a),
                this.hT = "17",
                this.setByDate = function(a) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.date = a,
                        this.s = this.formatDate(this.date, "utc"),
                        this.hV = stohex(this.s)
                }
                ,
                this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                        this.s = this.formatDate(this.date, "utc"),
                        this.hV = stohex(this.s)),
                        this.hV
                }
                ,
            void 0 !== a && (void 0 !== a.str ? this.setString(a.str) : "string" == typeof a && a.match(/^[0-9]{12}Z$/) ? this.setString(a) : void 0 !== a.hex ? this.setStringHex(a.hex) : void 0 !== a.date && this.setByDate(a.date))
        }
        ,
        ab.lang.extend(bb.asn1.DERUTCTime, bb.asn1.DERAbstractTime),
        bb.asn1.DERGeneralizedTime = function(a) {
            bb.asn1.DERGeneralizedTime.superclass.constructor.call(this, a),
                this.hT = "18",
                this.withMillis = !1,
                this.setByDate = function(a) {
                    this.hTLV = null,
                        this.isModified = !0,
                        this.date = a,
                        this.s = this.formatDate(this.date, "gen", this.withMillis),
                        this.hV = stohex(this.s)
                }
                ,
                this.getFreshValueHex = function() {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                        this.s = this.formatDate(this.date, "gen", this.withMillis),
                        this.hV = stohex(this.s)),
                        this.hV
                }
                ,
            void 0 !== a && (void 0 !== a.str ? this.setString(a.str) : "string" == typeof a && a.match(/^[0-9]{14}Z$/) ? this.setString(a) : void 0 !== a.hex ? this.setStringHex(a.hex) : void 0 !== a.date && this.setByDate(a.date),
            !0 === a.millis && (this.withMillis = !0))
        }
        ,
        ab.lang.extend(bb.asn1.DERGeneralizedTime, bb.asn1.DERAbstractTime),
        bb.asn1.DERSequence = function(a) {
            bb.asn1.DERSequence.superclass.constructor.call(this, a),
                this.hT = "30",
                this.getFreshValueHex = function() {
                    for (var a = "", b = 0; b < this.asn1Array.length; b++)
                        a += this.asn1Array[b].getEncodedHex();
                    return this.hV = a,
                        this.hV
                }
        }
        ,
        ab.lang.extend(bb.asn1.DERSequence, bb.asn1.DERAbstractStructured),
        bb.asn1.DERSet = function(a) {
            bb.asn1.DERSet.superclass.constructor.call(this, a),
                this.hT = "31",
                this.sortFlag = !0,
                this.getFreshValueHex = function() {
                    for (var a = new Array, b = 0; b < this.asn1Array.length; b++) {
                        var c = this.asn1Array[b];
                        a.push(c.getEncodedHex())
                    }
                    return 1 == this.sortFlag && a.sort(),
                        this.hV = a.join(""),
                        this.hV
                }
                ,
            void 0 !== a && void 0 !== a.sortflag && 0 == a.sortflag && (this.sortFlag = !1)
        }
        ,
        ab.lang.extend(bb.asn1.DERSet, bb.asn1.DERAbstractStructured),
        bb.asn1.DERTaggedObject = function(a) {
            bb.asn1.DERTaggedObject.superclass.constructor.call(this),
                this.hT = "a0",
                this.hV = "",
                this.isExplicit = !0,
                this.asn1Object = null,
                this.setASN1Object = function(a, b, c) {
                    this.hT = b,
                        this.isExplicit = a,
                        this.asn1Object = c,
                        this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                            this.hTLV = null,
                            this.isModified = !0) : (this.hV = null,
                            this.hTLV = c.getEncodedHex(),
                            this.hTLV = this.hTLV.replace(/^../, b),
                            this.isModified = !1)
                }
                ,
                this.getFreshValueHex = function() {
                    return this.hV
                }
                ,
            void 0 !== a && (void 0 !== a.tag && (this.hT = a.tag),
            void 0 !== a.explicit && (this.isExplicit = a.explicit),
            void 0 !== a.obj && (this.asn1Object = a.obj,
                this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        }
        ,
        ab.lang.extend(bb.asn1.DERTaggedObject, bb.asn1.ASN1Object);
    var cb = function(a) {
        function b(c) {
            var d = a.call(this) || this;
            return c && ("string" == typeof c ? d.parseKey(c) : (b.hasPrivateKeyProperty(c) || b.hasPublicKeyProperty(c)) && d.parsePropertiesFrom(c)),
                d
        }
        return function(a, b) {
            function c() {
                this.constructor = a
            }
            n(a, b),
                a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype,
                    new c)
        }(b, a),
            b.prototype.parseKey = function(a) {
                try {
                    var b = 0
                        , c = 0
                        , d = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(a) ? p(a) : q.unarmor(a)
                        , e = z.decode(d);
                    if (3 === e.sub.length && (e = e.sub[2].sub[0]),
                    9 === e.sub.length) {
                        b = e.sub[1].getHexStringValue(),
                            this.n = J(b, 16),
                            c = e.sub[2].getHexStringValue(),
                            this.e = parseInt(c, 16);
                        var f = e.sub[3].getHexStringValue();
                        this.d = J(f, 16);
                        var g = e.sub[4].getHexStringValue();
                        this.p = J(g, 16);
                        var h = e.sub[5].getHexStringValue();
                        this.q = J(h, 16);
                        var i = e.sub[6].getHexStringValue();
                        this.dmp1 = J(i, 16);
                        var j = e.sub[7].getHexStringValue();
                        this.dmq1 = J(j, 16);
                        var k = e.sub[8].getHexStringValue();
                        this.coeff = J(k, 16)
                    } else {
                        if (2 !== e.sub.length)
                            return !1;
                        var l = e.sub[1].sub[0];
                        b = l.sub[0].getHexStringValue(),
                            this.n = J(b, 16),
                            c = l.sub[1].getHexStringValue(),
                            this.e = parseInt(c, 16)
                    }
                    return !0
                } catch (a) {
                    return !1
                }
            }
            ,
            b.prototype.getPrivateBaseKey = function() {
                var a = {
                    array: [new bb.asn1.DERInteger({
                        "int": 0
                    }), new bb.asn1.DERInteger({
                        bigint: this.n
                    }), new bb.asn1.DERInteger({
                        "int": this.e
                    }), new bb.asn1.DERInteger({
                        bigint: this.d
                    }), new bb.asn1.DERInteger({
                        bigint: this.p
                    }), new bb.asn1.DERInteger({
                        bigint: this.q
                    }), new bb.asn1.DERInteger({
                        bigint: this.dmp1
                    }), new bb.asn1.DERInteger({
                        bigint: this.dmq1
                    }), new bb.asn1.DERInteger({
                        bigint: this.coeff
                    })]
                };
                return new bb.asn1.DERSequence(a).getEncodedHex()
            }
            ,
            b.prototype.getPrivateBaseKeyB64 = function() {
                return k(this.getPrivateBaseKey())
            }
            ,
            b.prototype.getPublicBaseKey = function() {
                var a = new bb.asn1.DERSequence({
                    array: [new bb.asn1.DERObjectIdentifier({
                        oid: "1.2.840.113549.1.1.1"
                    }), new bb.asn1.DERNull]
                })
                    , b = new bb.asn1.DERSequence({
                    array: [new bb.asn1.DERInteger({
                        bigint: this.n
                    }), new bb.asn1.DERInteger({
                        "int": this.e
                    })]
                })
                    , c = new bb.asn1.DERBitString({
                    hex: "00" + b.getEncodedHex()
                });
                return new bb.asn1.DERSequence({
                    array: [a, c]
                }).getEncodedHex()
            }
            ,
            b.prototype.getPublicBaseKeyB64 = function() {
                return k(this.getPublicBaseKey())
            }
            ,
            b.wordwrap = function(a, b) {
                if (!a)
                    return a;
                var c = "(.{1," + (b = b || 64) + "})( +|$\n?)|(.{1," + b + "})";
                return a.match(RegExp(c, "g")).join("\n")
            }
            ,
            b.prototype.getPrivateKey = function() {
                var a = "-----BEGIN RSA PRIVATE KEY-----\n";
                return a += b.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
                    a += "-----END RSA PRIVATE KEY-----"
            }
            ,
            b.prototype.getPublicKey = function() {
                var a = "-----BEGIN PUBLIC KEY-----\n";
                return a += b.wordwrap(this.getPublicBaseKeyB64()) + "\n",
                    a += "-----END PUBLIC KEY-----"
            }
            ,
            b.hasPublicKeyProperty = function(a) {
                return (a = a || {}).hasOwnProperty("n") && a.hasOwnProperty("e")
            }
            ,
            b.hasPrivateKeyProperty = function(a) {
                return (a = a || {}).hasOwnProperty("n") && a.hasOwnProperty("e") && a.hasOwnProperty("d") && a.hasOwnProperty("p") && a.hasOwnProperty("q") && a.hasOwnProperty("dmp1") && a.hasOwnProperty("dmq1") && a.hasOwnProperty("coeff")
            }
            ,
            b.prototype.parsePropertiesFrom = function(a) {
                this.n = a.n,
                    this.e = a.e,
                a.hasOwnProperty("d") && (this.d = a.d,
                    this.p = a.p,
                    this.q = a.q,
                    this.dmp1 = a.dmp1,
                    this.dmq1 = a.dmq1,
                    this.coeff = a.coeff)
            }
            ,
            b
    }($)
        , db = function() {
        function a(a) {
            a = a || {},
                this.default_key_size = parseInt(a.default_key_size, 10) || 1024,
                this.default_public_exponent = a.default_public_exponent || "010001",
                this.log = a.log || !1,
                this.key = null
        }
        return a.prototype.setKey = function(a) {
            this.log && this.key && console.warn("A key was already set, overriding existing."),
                this.key = new cb(a)
        }
            ,
            a.prototype.setPrivateKey = function(a) {
                this.setKey(a)
            }
            ,
            a.prototype.setPublicKey = function(a) {
                this.setKey(a)
            }
            ,
            a.prototype.decrypt = function(a) {
                try {
                    return this.getKey().decrypt(l(a))
                } catch (a) {
                    return !1
                }
            }
            ,
            a.prototype.encrypt = function(a) {
                try {
                    return k(this.getKey().encrypt(a))
                } catch (a) {
                    return !1
                }
            }
            ,
            a.prototype.encryptLong = function(a) {
                try {
                    for (var b = this.getKey().encryptLong(a) || "", c = this.getKey().decryptLong(b) || "", d = 0, e = /null$/g; e.test(c) && (d++,
                        b = this.getKey().encryptLong(a) || "",
                        c = this.getKey().decryptLong(b) || "",
                        !(d > 10)); )
                        ;
                    return b
                } catch (a) {
                    return !1
                }
            }
            ,
            a.prototype.decryptLong = function(a) {
                try {
                    return this.getKey().decryptLong(a)
                } catch (a) {
                    return !1
                }
            }
            ,
            a.prototype.sign = function(a, b, c) {
                try {
                    return k(this.getKey().sign(a, b, c))
                } catch (a) {
                    return !1
                }
            }
            ,
            a.prototype.verify = function(a, b, c) {
                try {
                    return this.getKey().verify(a, l(b), c)
                } catch (a) {
                    return !1
                }
            }
            ,
            a.prototype.getKey = function(a) {
                if (!this.key) {
                    if (this.key = new cb,
                    a && "[object Function]" === {}.toString.call(a))
                        return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, a);
                    this.key.generate(this.default_key_size, this.default_public_exponent)
                }
                return this.key
            }
            ,
            a.prototype.getPrivateKey = function() {
                return this.getKey().getPrivateKey()
            }
            ,
            a.prototype.getPrivateKeyB64 = function() {
                return this.getKey().getPrivateBaseKeyB64()
            }
            ,
            a.prototype.getPublicKey = function() {
                return this.getKey().getPublicKey()
            }
            ,
            a.prototype.getPublicKeyB64 = function() {
                return this.getKey().getPublicBaseKeyB64()
            }
            ,
            a.version = "3.1.2",
            a
    }();
    window.JSEncrypt = db,
        a.JSEncrypt = db,
        a.default = db,
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
});
//todo
define(function() {
    return {
        dom: '<div class="headerqrcode" style="display:none" id="J_headerqrcode">{% var setting = o.setting[0] || null; %}{% if(setting && setting.NAME1) { %}<a href="javascript:;" class="headerqrcode_lk"><i class="headerqrcode_ico"></i><span class="headerqrcode_txt">{%= setting.NAME2 ? setting.NAME2 : \'扫码享受优惠\' %}</span></a><div class="headerqrcode_qc"><div class="headerqrcode_qcimg"><img data-src="//qrimg.jd.com/{%= encodeURIComponent(setting.NAME1) %}-110-1-4-0.png?v=1" src="//static.360buyimg.com/mtd/pc/cms/images/mod_1x1.png"></div><div class="headerqrcode_arrow"><i class="headerqrcode_arrow_bd"></i><i class="headerqrcode_arrow_bg"></i></div></div>{% } %}</div>',
        style: ".has_qrcode #search-2014{width:450px;margin-right:0}.has_qrcode #search-2014 .text{width:360px}.has_qrcode #search-2014 .form{width:450px}.has_qrcode #search-2014 .button{width:80px}.has_qrcode #settleup-2014{margin-left:30px;float:left}.has_qrcode #shelper{width:448px}.headerqrcode{position:relative;display:none;margin-top:27px;float:right;margin-left:30px;width:120px}.headerqrcode_lk{text-align:center;border:1px solid #dfdfdf;display:block;height:34px;line-height:34px;background:#f9f9f9;position:relative;padding-left:30px}.headerqrcode_lk:hover{color:#666}.headerqrcode_ico{width:25px;height:25px;background:url(//static.360buyimg.com/mtd/pc/cms/index/images/qrcode_25x25.png) no-repeat;position:absolute;top:5px;left:8px}.headerqrcode_ico,.headerqrcode_txt{display:inline-block}.headerqrcode_qc{position:absolute;border:1px solid #dfdfdf;width:108px;padding:5px;text-align:center;z-index:100;background:#fff;opacity:0;visibility:hidden;zoom:1;-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s;top:35px}.headerqrcode_qc s{font-size:0;position:absolute;right:1px;width:0;height:0;top:39%;border-width:7px;border-style:solid;border-color:transparent transparent transparent #fff}.headerqrcode:hover .headerqrcode_qc{opacity:1;visibility:visible}.headerqrcode_qcimg{width:110px;height:110px}.headerqrcode_qcimg img{width:100%;height:100%;background:url(//misc.360buyimg.com/mtd/pc/index/gb/images/loading.gif) no-repeat 50%!important}.headerqrcode_arrow{position:absolute;display:none;left:62px;top:-16px}.headerqrcode_arrow_bd,.headerqrcode_arrow_bg{position:absolute;left:0;top:0;width:0;height:0;overflow:hidden;border:8px dashed transparent}.headerqrcode_arrow_bg{border-bottom:8px solid #fff;top:1px;*display:none}.headerqrcode_arrow_bd{border-bottom:8px solid #c3c3c3}.o2_retina .headerqrcode_ico{-moz-background-size:25px 25px;background-size:25px 25px;background-image:url(//static.360buyimg.com/mtd/pc/cms/index/images/qrcode_25x25@2x.png)}",
        script: 'define("index/widget/headerqrcode",function(t,e,i){var n=function(t){$.extend(this,{$el:$("#J_headerqrcode"),$ref:"#settleup-2014",condition:".headerqrcode_qcimg","class":"has_qrcode",timer:null,interval:500,max:20},t),this.init()};return n.prototype={init:function(){pageConfig.wideVersion&&($(this.$ref).parent().addClass(this["class"]),$.when(this.ready()).then($.proxy(function(){this.append(this.$el.show()),this.clear(),this.bindEvent()},this)))},ready:function(t){var e=t||$.Deferred();return this.max--,this.detect()?e.resolve(!0):this.timer=setTimeout($.proxy(function(){this.max>0&&this.ready(e)},this),this.interval),e.promise()},detect:function(){return $(this.$ref).length>0},clear:function(){this.timer&&clearTimeout(this.timer)},append:function(t){this.$el.find(this.condition).length>0&&$(this.$ref).after(t)},bindEvent:function(){this.$el.bind({mouseenter:function(){var t=$(this).find("img");t.attr("src",t.data("src")),$(this).unbind("mouseenter")}})}},n});',
        version: "6746ac24549a4f62"
    }
});
//todo
define("//static.360buyimg.com/mtd/pc/components/1.0.0/carousel/carousel.js", [], function() {
    "use strict";
    var t = _.Class.extend({
        construct: function(t) {
            $.extend(this, {
                container: null,
                itemSelector: null,
                itemWidth: 0,
                activeClass: "active",
                startIndex: 0,
                duration: 500,
                delay: 2e3,
                switchType: "fade",
                isAuto: !0,
                onFirstSwitch: function() {},
                onBeforeSwitch: function() {},
                onAfterSwitch: function() {}
            }, t),
                this.$container = $(this.container),
                this.init()
        },
        init: function() {
            this.initElements(),
                this.initEvent(),
                this.hasSwitched = [],
                this.setCurrent(this.startIndex),
            this.isAuto && this.start()
        },
        initElements: function() {
            switch (this.$items = this.$container.find(this.itemSelector),
                this.length = this.$items.length,
                this.switchType) {
                case "fade":
                    this.$items.css({
                        opacity: 0,
                        zIndex: 0,
                        position: "absolute"
                    });
                    break;
                case "slide":
                    var t = this.$items
                        , i = $(t.get(0)).clone()
                        , s = $(t.get(this.length - 1)).clone();
                    this.$container.append(i).prepend(s),
                        this.$items = this.$container.find(this.itemSelector),
                        this.$container.css({
                            width: (this.length + 2) * this.itemWidth,
                            position: "absolute",
                            top: 0,
                            left: -this.itemWidth
                        })
            }
            return this
        },
        initEvent: function() {
            return this.$container.bind("mouseenter", $.proxy(this.stop, this)).bind("mouseleave", $.proxy(this.start, this)),
                this
        },
        setCurrent: function(t) {
            this.currentIndex = t,
            $.inArray(t, this.hasSwitched) < 0 && $.isFunction(this.onFirstSwitch) && (this.onFirstSwitch(t),
                this.hasSwitched.push(t));
            var i = this.$items
                , s = $(i.get(t));
            switch (i.removeClass(this.activeClass),
                s.addClass(this.activeClass),
                this.switchType) {
                case "fade":
                    $(i.get(t)).css({
                        opacity: 1,
                        zIndex: 5
                    })
            }
            return this
        },
        getCurrent: function() {
            return this.currentIndex
        },
        switchTo: function(t) {
            switch (this.switchType) {
                case "fade":
                    var i = this.$items
                        , s = this.currentIndex
                        , e = $(i.get(s))
                        , n = null;
                    t >= this.length ? t = 0 : t <= -1 && (t = this.length - 1),
                        n = $(i.get(t)),
                    $.isFunction(this.onBeforeSwitch) && this.onBeforeSwitch.call(this, s, t),
                        i.each(function(t) {
                            var i = $(this);
                            parseFloat(i.css("opacity")) > 0 && t !== s && i.stop().fadeTo(this.duration, 0).css("zIndex", "0")
                        }),
                        e.stop().fadeTo(this.duration, 0, $.proxy(function() {
                            e.css("zIndex", "0")
                        }, this)),
                        n.stop().fadeTo(this.duration, 1, $.proxy(function() {
                            this.setCurrent(t),
                                n.css({
                                    opacity: 1,
                                    zIndex: 5
                                }),
                            $.isFunction(this.onAfterSwitch) && this.onAfterSwitch.call(this, this.currentIndex)
                        }, this));
                    break;
                case "slide":
                    var i = this.$items
                        , e = $(i.get(this.currentIndex));
                    $.isFunction(this.onBeforeSwitch) && this.onBeforeSwitch.call(this, this.currentIndex, t),
                        this.$container.animate({
                            left: -(t + 1) * this.itemWidth
                        }, this.duration, $.proxy(function() {
                            t >= this.length ? (t = 0,
                                this.$container.css("left", -this.itemWidth * (t + 1))) : t <= -1 && (t = this.length - 1,
                                this.$container.css("left", -this.itemWidth * (t + 1))),
                                this.setCurrent(t),
                            $.isFunction(this.onAfterSwitch) && this.onAfterSwitch.call(this, this.currentIndex)
                        }, this))
            }
            return this
        },
        switchToPrev: function() {
            var t = this.currentIndex - 1;
            return this.switchTo(t),
                this
        },
        switchToNext: function() {
            var t = this.currentIndex + 1;
            return this.switchTo(t),
                this
        },
        start: function() {
            return clearTimeout(this.autoTimer),
                this.autoTimer = setTimeout($.proxy(function() {
                    this.switchToNext().start()
                }, this), this.delay),
                this
        },
        stop: function() {
            return clearTimeout(this.autoTimer),
                this
        },
        destroy: function() {
            this.unbind(),
                this.$container.remove()
        },
        unbind: function() {
            return this.$container.unbind(),
                this
        }
    });
    return t
});
define("//static.360buyimg.com/mtd/pc/components/1.0.0/util/util.js", [], function() {
    "use strict";
    return {
        throttle: function(e, t, n) {
            var a, u, i, r = null, l = 0;
            n || (n = {});
            var c = function() {
                l = n.leading === !1 ? 0 : (new Date).getTime(),
                    r = null,
                    i = e.apply(a, u),
                r || (a = u = null)
            };
            return function() {
                var s = (new Date).getTime();
                l || n.leading !== !1 || (l = s);
                var o = t - (s - l);
                return a = this,
                    u = arguments,
                    o <= 0 || o > t ? (clearTimeout(r),
                        r = null,
                        l = s,
                        i = e.apply(a, u),
                    r || (a = u = null)) : r || n.trailing === !1 || (r = setTimeout(c, o)),
                    i
            }
        },
        debounce: function(e, t, n) {
            var a, u, i, r, l, c = function() {
                var s = (new Date).getTime() - r;
                s < t && s > 0 ? a = setTimeout(c, t - s) : (a = null,
                n || (l = e.apply(i, u),
                a || (i = u = null)))
            };
            return function() {
                i = this,
                    u = arguments,
                    r = (new Date).getTime();
                var s = n && !a;
                return a || (a = setTimeout(c, t)),
                s && (l = e.apply(i, u),
                    i = u = null),
                    l
            }
        },
        indexOf: function(e, t) {
            var n = e.length
                , a = Number(arguments[2]) || 0;
            for (a < 0 && (a += n); a < n; ) {
                if (a in e && e[a] === t)
                    return a;
                a++
            }
            return -1
        },
        getCalendar: function(e, t) {
            if (!(!e instanceof Date)) {
                var n = e.getMonth() + 1
                    , a = e.getFullYear()
                    , u = e.getDate() + (t || 0);
                switch (0 === u && (n -= 1,
                0 === n && (n = 12,
                    a -= 1)),
                    n) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        u = 0 === u ? 31 : u,
                        u > 31 && (n += 1,
                            u = 1);
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        u = 0 === u ? 30 : u,
                        u > 30 && (n += 1,
                            u = 1);
                        break;
                    case 2:
                        a % 4 == 0 ? (u = 0 === u ? 29 : u,
                        u > 29 && (n += 1,
                            u = 1)) : (u = 0 === u ? 28 : u,
                        u > 28 && (n += 1,
                            u = 1))
                }
                return n > 12 && (n = 1,
                    a += 1),
                a + "/" + n + "/" + u
            }
        }
    }
});
//todo
/* toolbar-1.0.0 main.js Date:2017-08-24 19:35:02 */
seajs.config({
    paths: {
        TB_ROOT: "//static.360buyimg.com/devfe/toolbar/1.0.0",
        JDF_UI: "//misc.360buyimg.com/jdf/1.0.0/ui",
        JDF_UNIT: "//misc.360buyimg.com/jdf/1.0.0/unit"
    }
}),
    define("TB_ROOT/js/main", function(require, a, b) {
        require("JDF_UNIT/trimPath/1.0.0/trimPath.js");
        var d = require("JDF_UNIT/login/1.0.0/login.js");
        require("TB_ROOT/widget/common/common.css");
        var f = require("TB_ROOT/js/localStorageObj.js").localStorage;
        var g = {
            $el: $("#J-global-toolbar"),
            pType: "",
            enabled: !0,
            bars: {
                jdvip: {
                    index: .3,
                    enabled: !0,
                    title: "\u4eac\u4e1c\u4f1a\u5458",
                    login: !0,
                    vip: "1",
                    iframe: "//vip.jd.com/sideBar/index.html"
                },
                cart: {
                    index: 1,
                    enabled: !0,
                    title: "\u8d2d\u7269\u8f66",
                    href: "//cart.jd.com/cart.action?r=" + Math.random(),
                    js: "TB_ROOT/widget/cart/cart",
                    css: "TB_ROOT/widget/cart/cart.css"
                },
                follow: {
                    index: 2,
                    enabled: !0,
                    title: "\u6211\u7684\u5173\u6ce8",
                    login: !0,
                    href: "//t.jd.com/home/follow",
                    js: "TB_ROOT/widget/follow/follow",
                    css: "TB_ROOT/widget/follow/follow.css"
                },
                history: {
                    index: 3,
                    enabled: !0,
                    title: "\u6211\u7684\u8db3\u8ff9",
                    href: "//my.jd.com/history/list.html",
                    js: "TB_ROOT/widget/history/history",
                    css: "TB_ROOT/widget/history/history.css"
                },
                message: {
                    index: 4,
                    enabled: !0,
                    title: "\u6211\u7684\u6d88\u606f",
                    target: "//joycenter.jd.com/msgCenter/queryHistoryMessage.action"
                },
                jimi: {
                    index: 5,
                    enabled: !0,
                    title: "\u54a8\u8be2JIMI",
                    login: !0,
                    iframe: "//jimi.jd.com/index.action?source=jdhome"
                }
            },
            links: {
                top: {
                    index: 1,
                    title: "\u9876\u90e8",
                    anchor: "#shortcut-2013"
                },
                feedback: {
                    index: 2,
                    title: "\u53cd\u9988",
                    href: "//diaoyan.jd.com/survey/answerSurvey.htm?eSurveyId=AZDFYX5KJGMOK"
                }
            },
            ad: {
                enabled: !0,
                id: "0_0_7209",
                startTime: +new Date(2017,0,4,0,0,1) / 1e3,
                endTime: +new Date(2017,1,4,0,0,0) / 1e3
            }
        };
        var h = function(a) {
            return "mousewheel" === a.type ? a.wheelDelta > 0 ? "up" : "down" : "DOMMouseScroll" === a.type ? a.detail > 0 ? "down" : "up" : "unknown"
        };
        var i = function(a) {
            return 0 === a.scrollTop() ? "top" : a.scrollTop() + a.outerHeight() >= a[0].scrollHeight ? "bottom" : "middle"
        };
        var j = function(a) {
            return a[0].scrollHeight > a.innerHeight()
        };
        pageConfig.__toolbarLogin = function(a) {
            seajs.use("JDF_UNIT/login/1.0.0/login", function(b) {
                b({
                    modal: !0,
                    complete: function(b) {
                        a(b)
                    }
                })
            })
        }
        ;
        function k(a) {
            this.settings = $.extend(!0, {}, g, a),
                this.onOpen = a.onOpen || function() {}
                ,
                this.onClose = a.onClose || function() {}
                ,
                this.onSwitch = a.onSwitch || function() {}
                ,
                this.onLogin = a.onLogin || function() {}
                ,
            this.settings.links.top.href && delete this.settings.links.top.anchor,
            this.settings.links.feedback.anchor && delete this.settings.links.feedback.href,
                this.init()
        }
        k.prototype = {
            init: function() {
                return this.settings.enabled ? (this.$w = $(window),
                    this.$d = $(document),
                    this.isIE6 = $.browser.isIE6(),
                    this.settings.clsPageType = this.getPageType(),
                    this.render(),
                    this.bindEvent(),
                    this.opened = !1,
                    this.triggerClick = "z-jdm-tbar-tab-selected",
                    this.triggerHover = "z-jdm-tbar-tab-hover",
                    this.toolbarOpen = "z-jdm-toolbar-open",
                    this.$toolbar = this.settings.$el.find(".J-toolbar"),
                    this.$wrap = this.settings.$el.find(".J-wrap"),
                    this.$trigger = this.settings.$el.find('.J-trigger[data-type="bar"]'),
                    this.$content = this.settings.$el.find(".J-content"),
                    this.$newItemInCartHint = this.settings.$el.find(".jdm-tbar-tab-cart .tabs-tip"),
                    this.setBubbleCount("cart", readCookie("cn")),
                this.isIE6 && (this.resetLayout("height"),
                    this.resetLayout("top"),
                    this.resetLayout("right")),
                    this.settings.$el.find("#J-toolbar-load-hook").trigger("click"),
                    this.eventDispatcher = $({}),
                this.settings.ad.enabled && this.insertAD(),
                    this.bubbleKey = "toolbar_bubble",
                    void ("home" == this.settings.pType && this.setGiftBubble())) : !1
            },
            setGiftBubble: function() {
                var a = this;
                d.isLogin(function(b) {
                    b && a.setLocalStorage() && a.createGiftBubble()
                })
            },
            setLocalStorage: function() {
                var a = this;
                return f.check(a.bubbleKey)
            },
            createGiftBubble: function() {
                var a = this;
                var b = a.settings.$el.find(".jdm-toolbar-tabs");
                $.ajax({
                    url: "//vip.jd.com/gift/getWaitReceiveGift.html",
                    scriptCharset: "utf-8",
                    dataType: "jsonp",
                    success: function(c) {
                        var d = ""
                            , e = c.result.gifts;
                        c.success && e.length && (d = 1 == e.length ? '<div class="poptip"><i class="giftMsg"></i><b class="giftTxt">\u60a8\u6709\u4e00\u4e2a' + e[0].name + '\u5f85\u9886\u53d6\uff01</b><em class="giftClose"></em><span class="poptip-arrow poptip-arrow-right"><em>\u25c6</em><i>\u25c6</i></span></div>' : '<div class="poptip"><i class="giftMsg"></i><b class="giftTxt">\u4f60\u6709' + e.length + '\u4e2a\u793c\u5305\u5f85\u9886\u53d6\uff01</b><em class="giftClose"></em><span class="poptip-arrow poptip-arrow-right"><em>\u25c6</em><i>\u25c6</i></span></div>',
                            b.append(d),
                            $(".poptip .giftClose").unbind("click").bind("click", function() {
                                return $(".poptip").fadeOut(300, function() {
                                    $(".poptip").remove(),
                                        f.set(a.bubbleKey)
                                }),
                                    !1
                            }),
                            $(".poptip").unbind("click").bind("click", function() {
                                $(".jdm-tbar-tab-jdvip").trigger("click"),
                                    $(".poptip").fadeOut(300, function() {
                                        $(".poptip").remove()
                                    })
                            }))
                    }
                })
            },
            getPageType: function() {
                var a = "h";
                switch (this.settings.pType) {
                    case "home":
                        a = "h";
                        break;
                    case "list":
                        a = "thirdtype";
                        break;
                    case "search":
                        a = "thirdtype";
                        break;
                    case "item":
                        a = "shangpin";
                        break;
                    default:
                        a = "h"
                }
                return a
            },
            insertAD: function() {
                try {
                    if (this.settings.ad && this.settings.ad.startTime && this.settings.ad.id) {
                        this.settings.ad.endTime || (this.settings.ad.endTime = this.settings.ad.startTime + 7776e3);
                        var a;
                        var b;
                        var c = (new Date).valueOf() / 1e3;
                        window.pageConfig && window.pageConfig.timestamp ? (b = window.pageConfig.timestamp / 1e3,
                            a = 300 > c - b && c - b > 0 ? c : b) : a = c;
                        var d;
                        (d = window.location.search.match(/isdebugToolbarTime=(\d+)/)) && (a = parseInt(d[1], 10)),
                        a > this.settings.ad.startTime && a < this.settings.ad.endTime && this.loadAD()
                    } else
                        this.settings.ad = null
                } catch (e) {
                    this.settings.ad = null
                }
            },
            loadAD: function(a) {
                a = a ? a : this.settings.ad.id;
                var b = this;
                var c = "//nfa.jd.com/loadFa_toJson.js?aid=" + a;
                $.ajax({
                    url: c,
                    dataType: "script",
                    scriptCharset: "gbk",
                    success: function() {
                        b.settings.bars.ad = {
                            name: "ad",
                            iframe: b.$wrap.find(".jdm-tbar-panel-ad").attr("data-iframe")
                        }
                    }
                })
            },
            render: function() {
                var a = '            <div class="jdm-toolbar-wrap J-wrap">                <div class="jdm-toolbar J-toolbar">                    <div class="jdm-toolbar-panels J-panel">                    <div data-name="ad" class="J-content jdm-toolbar-panel jdm-tbar-panel-ad">                        <h3 class="jdm-tbar-panel-header J-panel-header">                            <a>                            <i></i>                            <em class="title"></em>                            </a>                            <span class="close-panel J-close"></span>                        </h3>                        <div class="jdm-tbar-panel-main">                            <div class="jdm-tbar-panel-content J-panel-content">                            </div>                        </div>                    </div>                    {for bar in bars}                    {if bar.enabled&&!bar.target}                        <div data-name="${bar.name}" class="J-content jdm-toolbar-panel jdm-tbar-panel-${bar.name}">                            <h3 class="jdm-tbar-panel-header J-panel-header">                                <{if bar.href}a href="${bar.href}" target="_blank"{else}span{/if} class="title" clstag="${clsPageType}|keycount|cebianlan_${clsPageType}_${bar.name}|title">                                <i></i>                                <em class="title">${bar.title}</em>                                </{if bar.href}a{else}span{/if}>                                <span class="close-panel J-close"></span>                            </h3>                            <div class="jdm-tbar-panel-main">                                <div class="jdm-tbar-panel-content J-panel-content" {if bar.iframe}style="overflow:hidden;"{/if}>                                <div class="jdm-tbar-tipbox2">                                    <div class="tip-inner">                                        <i class="i-loading"></i>                                    </div>                                </div>                                </div>                            </div>                            <div class="jdm-tbar-panel-footer J-panel-footer"></div>                        </div>                    {/if}                    {/for}                    </div>                    <div class="jdm-toolbar-header">                        <div class="jdm-tbar-act J-trigger" data-type="bar" data-name="ad" data-iframe="true"                             clstag="${clsPageType}|keycount|cebianlan_${clsPageType}_header|">                        </div>                    </div>                    <div class="jdm-toolbar-tabs J-tab">                    {for bar in bars}                    {if bar.enabled}                        <div {if !bar.target} data-type="bar" {/if}                            clstag="${clsPageType}|keycount|cebianlan_${clsPageType}_${bar.name}|btn"                             class="J-trigger jdm-toolbar-tab jdm-tbar-tab-${bar.name}"                             data-name="${bar.name}"                            {if bar.login}data-login="${bar.login}"{/if}                            {if bar.iframe}data-iframe="${bar.iframe}"{/if}>                                                        {if bar.target}<a target="_blank" href="${bar.target}">{/if}                            {if bar.vip}<i class="tab-tip"></i>{/if}                                <i class="tab-ico"></i>                                <em class="tab-text">                                    ${bar.title}                                </em>                                {if bar.extraHTML}${bar.extraHTML}{/if}                            {if bar.target}</a>{/if}                            <span class="tab-sub J-count hide">0</span>                            <div class="tabs-tip hide">                                <span class="ico"></span>                                <span class="text">\u6210\u529f\u52a0\u5165\u8d2d\u7269\u8f66!</span>                                <b></b>                            </div>                        </div>                    {/if}                    {/for}                    </div>                    <div class="jdm-toolbar-footer">                    {for link in links}                        <div data-type="link" class="J-trigger jdm-toolbar-tab jdm-tbar-tab-${link.name}">                            {if link.anchor}                                <a href="${link.anchor}" clstag="${clsPageType}|keycount|cebianlan_${clsPageType}|${link.name}">                                    <i class="tab-ico"></i>                                    <em class="tab-text">${link.title}</em>                                    {if link.extraHTML}${link.extraHTML}{/if}                                </a>                            {/if}                            {if link.href}                                <a href="${link.href}" target="_blank" clstag="${clsPageType}|keycount|cebianlan_${clsPageType}|${link.name}">                                    <i class="tab-ico"></i>                                    <em class="tab-text">${link.title}</em>                                    {if link.extraHTML}${link.extraHTML}{/if}                                </a>                            {/if}                        </div>                    {/for}                    </div>                    <div class="jdm-toolbar-mini">                    </div>                </div>                <div id="J-toolbar-load-hook" clstag="${clsPageType}|keycount|cebianlan_${clsPageType}|load"></div>            </div>';
                var b = this.sortJsonToArray(this.settings);
                b.clsPageType = this.getPageType(),
                    b.ad = this.settings.ad;
                try {
                    this.settings.$el.html(a.process(b))
                } catch (c) {
                    console.log("Toolbar rendered error >> " + c)
                }
            },
            sortJsonToArray: function(a) {
                var b = [];
                var c = [];
                for (var d in a.links)
                    a.links.hasOwnProperty(d) && (a.links[d].name = d,
                        c.push(a.links[d]));
                for (var e in a.bars)
                    a.bars.hasOwnProperty(e) && (a.bars[e].name = e,
                        b.push(a.bars[e]));
                function f(a, b) {
                    return a.index > b.index ? 1 : -1
                }
                return {
                    enabled: this.settings.enabled,
                    ad: this.settings.ad,
                    bars: b.sort(f),
                    links: c.sort(f),
                    clsPageType: this.clsPageType
                }
            },
            setBubbleCount: function(a, b) {
                var c = this.$trigger.filter('[data-name="' + a + '"]').find(".J-count");
                var d;
                b > 0 ? (d = b > 99 ? "99+" : b,
                    c.html(d).show()) : c.hide()
            },
            updateLayout: function() {
                var a = $(window).height();
                var b = this.$content.eq(this.m.index);
                var c = b.find(".J-panel-header").outerHeight();
                var d = b.find(".J-panel-footer").outerHeight();
                var e = b.find(".J-panel-content");
                e.css("height", a - c - d)
            },
            bindEvent: function() {
                var a = this;
                $(window).unbind("resize.toolbar").bind("resize.toolbar", function() {
                    a.opened && a.updateLayout()
                }),
                    $(document).undelegate("click.toolbar").delegate("body", "click.toolbar", function(b) {
                        $.contains(a.$wrap[0], b.target) || a.close()
                    }),
                    this.settings.$el.delegate(".J-trigger", "mouseenter", function() {
                        a.handleHover(!0, $(this)),
                        $(this).hasClass("jdm-tbar-tab-jdvip") && $(".poptip").length && $(".poptip").fadeOut(300, function() {
                            $(".poptip").hide()
                        })
                    });
                var b = null;
                this.settings.$el.delegate(".J-trigger", "mouseleave", function() {
                    a.handleHover(!1, $(this)),
                    $(this).hasClass("jdm-tbar-tab-jdvip") && $(".poptip").length && !a.opened && (clearTimeout(b),
                        b = setTimeout(function() {
                            $(".poptip").fadeIn(300, function() {
                                $(".poptip").show()
                            })
                        }, 300))
                }),
                    this.settings.$el.delegate(".J-trigger", "click", function() {
                        $(this).hasClass("jdm-tbar-tab-jdvip") && $(".poptip").length && $(".poptip").fadeOut(300, function() {
                            $(".poptip").remove()
                        }),
                            a.handleTrigger($(this))
                    }),
                    this.settings.$el.delegate(".J-close", "click", function() {
                        a.close()
                    }),
                    this.settings.$el.delegate(".J-panel-content", "mousewheel DOMMouseScroll", function(a) {
                        var b = $(this);
                        var c = h(a);
                        var d = i(b);
                        var e = j(b);
                        (!e || f() || g()) && a.preventDefault();
                        function f() {
                            return "up" === c && "top" === d
                        }
                        function g() {
                            return "down" === c && "bottom" === d
                        }
                    }),
                this.isIE6 && (this.$w.bind("resize", function() {
                    a.resetLayout("height"),
                        a.resetLayout("right")
                }),
                    this.$w.bind("scroll", function() {
                        a.resetLayout("top")
                    }))
            },
            resetLayout: function(a) {
                if ("height" === a) {
                    var b = this.$w.height();
                    this.$toolbar.add(this.$wrap).css("height", b)
                }
                if ("top" === a) {
                    var c = this.$d.scrollTop();
                    this.$wrap.css("top", c)
                }
                "right" === a && (this.$w.width() % 2 > 0 ? this.$wrap.css("right", -1) : this.$wrap.css("right", 0))
            },
            handleHover: function(a, b) {
                var c = this;
                b.parent().hasClass("jdm-toolbar-header") || (a ? b.addClass(c.triggerHover) : b.removeClass(c.triggerHover))
            },
            handleTrigger: function(a) {
                var b = this;
                var c = this.$trigger.index(a);
                var d = "bar" === a.attr("data-type");
                var e = {
                    index: c,
                    login: a.attr("data-login"),
                    name: a.attr("data-name"),
                    iframe: a.attr("data-iframe")
                };
                return b.opened && c === b.$content.data("last") ? void b.close() : (this.m = e,
                    d ? void (e.login ? seajs.use("JDF_UNIT/login/1.0.0/login", function(a) {
                        a.isLogin(function(c) {
                            c ? b.open(e) : "true" === e.login ? a({
                                modal: !0,
                                firstCheck: !1,
                                complete: function() {
                                    b.open(e),
                                        b.onLogin(e)
                                }
                            }) : location.href = "//passport.jd.com/new/login.aspx?ReturnUrl=" + encodeURIComponent(e.login)
                        })
                    }) : this.open(e)) : !1)
            },
            switchTo: function(a) {
                this.eventDispatcher.trigger(a.name + "PanelOpen"),
                    this.$trigger.removeClass(this.triggerClick),
                this.$trigger.eq(a.index).parent().hasClass("jdm-toolbar-header") || this.$trigger.eq(a.index).addClass(this.triggerClick);
                var b = this.$content.data("last");
                b != a.index && (this.$content.css("visibility", "hidden"),
                    this.$content.eq(a.index).css("z-index", "2"),
                    this.$content.eq(a.index).css("visibility", "visible"),
                void 0 != b && (this.$content.eq(b).css("z-index", "1").css("visibility", "visible"),
                    this.$content.eq(b).removeClass("toolbar-animate-in").addClass("toolbar-animate-out")),
                    this.$content.eq(a.index).removeClass("toolbar-animate-out").addClass("toolbar-animate-in"),
                    this.$content.data("last", a.index),
                this.settings.bars[a.name].loaded || this.load(a),
                    this.updateLayout(a))
            },
            load: function(a) {
                var b = this;
                var c = this.$content.eq(a.index);
                var d = c.find(".J-panel-header");
                var e = c.find(".J-panel-content");
                var f = c.find(".J-panel-footer");
                if (a.iframe) {
                    var g = '<iframe frameborder="0" style="height:100%;width:100%;" width="100%" height="100%" src="' + this.settings.bars[a.name].iframe + '"></iframe>';
                    e.html(g),
                        this.settings.bars[a.name].loaded = !0
                } else {
                    var h = this.settings.bars[a.name].js;
                    var i = this.settings.bars[a.name].css;
                    seajs.use([h, i], function(c) {
                        c && new c({
                            $header: d,
                            $content: e,
                            $footer: f
                        }),
                            b.settings.bars[a.name].loaded = !0
                    })
                }
            },
            open: function(a) {
                this.$wrap.addClass(this.toolbarOpen),
                    this.opened ? this.onSwitch(a) : this.onOpen(a),
                    this.opened = !0,
                    this.switchTo(a)
            },
            close: function() {
                this.$wrap.removeClass(this.toolbarOpen),
                    this.$trigger.removeClass(this.triggerClick).removeClass(this.triggerHover),
                    this.opened = !1,
                    this.onClose()
            },
            setStatus: function(a, b, c) {
                c = c || "fd";
                var d = '            <div>                <div class="jdm-tbar-tipbox2">                    <div class="tip-inner">                        <i class="i-face-' + c + ' tip-face"></i>                        <div class="tip-text">                            {content}                        </div>                    </div>                </div>            <div>';
                a.html(d.replace("{content}", b))
            },
            newItemInCart: function() {
                var a = this.$trigger.filter('[data-name="cart"]').find(".J-count");
                var b;
                b = a.is(":visible") ? parseInt(a.text(), 10) : 0,
                    this.setBubbleCount("cart", b + 1),
                    this.$newItemInCartHint.stop().show().css({
                        opacity: 1
                    }).delay(800).fadeOut(600)
            },
            sendLog: function(a, b, c) {
                log("ce_bian_lan", "0000110", this.settings.pType, a, b, c)
            }
        },
            b.exports = k
    });
//todo
/* toolbar-1.0.0 localStorageObj.js Date:2017-08-24 19:35:02 */
define("TB_ROOT/js/localStorageObj", function(require, a) {
    var c = !!window.localStorage;
    var d = {
        init: function(a) {
            return {
                expire: a || 7,
                ts: "_timestamp"
            }
        },
        get: function(a) {
            if (!c)
                return !1;
            var b = this.init();
            return localStorage.getItem(a + b.ts)
        },
        set: function(a, b) {
            if (!c)
                return !1;
            var d = this.init()
                , e = (new Date).getTime();
            b = b || e,
                localStorage.setItem(a + d.ts, b)
        },
        del: function(a) {
            var b = this.init();
            c && localStorage.removeItem(a + b.ts)
        },
        check: function(a, b) {
            var e, d = this.init(b);
            return c ? (e = this.get(a),
                e ? ((new Date).getTime() - e) / 1e3 / 60 / 60 / 24 > d.expire ? (this.del(a),
                    !0) : !1 : !0) : void 0
        }
    };
    a.localStorage = d
});
//todo
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    }
    ;
    if (!''.replace(/^/, String)) {
        while (c--)
            r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }
        ];
        e = function() {
            return '\\w+'
        }
        ;
        c = 1
    }
    ;while (c--)
        if (k[c])
            p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
    return p
}('J 4R(){!J(){K p=3f.6m();!J(w,x,y){1k.2O("3P",J(B){K A={3Q:3R(),ao:w,p:"3S:"==1c.3g.6n?"s":"h",fp:y,v:"2.6.14.1",f:"1"};S{A.o=3h,A.qs=3i}T(q){}U 0!==B&&1d!==B&&0<B.P&&(1w=B,2u=!0);U 0!==1w&&0<1w.P&&(A.fc=1w);B=!1;B=X.1O;B=0<B.N("1R 7.0")||0<B.N("1R 8.0")||0<B.N("1R 9.0");S{A.t=3j}T(q){}S{if("1x"!=1g 4S&&0<=4S.P)A.qi=4S;1q{K u=1k.4T("ap");A.qi=U 0==u?"":u}}T(q){}U 0!==2P&&0<2P.P&&(A.aq=2P);A="?a="+(B?3k(1W.2k(A)):1W.2k(A));3T=1W.6o();u=[];u.g=1W.2k(x);u.d=3T;6p(2Q+2R+"/ar.3l"+A,u,A,J(q){K z=q;0<q.N("*4U*")&&(z=q.1P("*4U*",2),q=4V.1I(z[1]),z=q.6q,6r=q);32<=z.P&&91>=z.P&&(1w=z,2u=!0,1k.3U("3P",z),4W(1w),4X())})})}("1S"==1g 6s?6s:"",p,2l)}()}J 6p(p,w,x,y){S{K B=X.1O;if(0<B.N("1R")&&(0<B.N("1R 7.0")||0<B.N("1R 8.0")||0<B.N("1R 9.0")))L x+="&g="+3k(w.g),3V("fc.3l",x);S{K A=W 1a.as}T(q){}if(!A)S{A=W 1a.2S("4Y.3m")}T(q){}if(!A)S{A=W 1a.2S("3n.3m")}T(q){}if(!A)S{A=W 1a.2S("at.3m")}T(q){}A.6t("au",p,!0);A.av=aw;A.ax("ay-az","aA/x-aB-aC-aD;aE=6u-8");A.aF=J(){4===A.aG&&6v===A.aH&&y(A.aI)};p="";Q(K u in w)p+=(""==p?"":"&")+u+"="+w[u];A.aJ(p)}T(q){}}J 3V(p,w){S{K x=1c.1T("6w");x.4Z=2Q+2R+"/"+p+w;1c.1E.2m(x)}T(y){}}J 4X(){K p=1c.51("6x");p&&p.6y&&p.6y.52(p);1k=3f=3T=1d}J aK(p){S{32<=p.P&&(2u=!0,1w=p,1k.3U("3P",p),4W(p)),4X()}T(w){}}J 6z(p,w,x){if("J"!=1g p)53 55("aL aM be a J.");if(U 0===w&&(w=1),U 0===x&&(x=15),!2u&&w<x)3o(J(){6z(p,w,x)},15*w),w++;1q{2v.6q=!1w||aN<1w.P?"":1w;2v.fp=2l;S{2v.aO=1z.1I(W 1z),2v.aP="1S"==1g 3j?3j:"",2v.aQ="1S"==1g 2P?2P:""}T(y){}p(1w,2l,2v)}}J 6A(p,w,x){if(U 0===p||0==p)53 55("aR aS aT be 1d.");if(U 0===w&&(w=1),U 0===x&&(x=15),!2u&&w<x)3o(J(){6A(p,w,x)},20*w),w++;1q if("1x"!=1g 3j&&0<1w.P&&0<2l.P){K y=3R();0<y.P&&(y={p:y,fp:2l,e:1w,ct:(W 1z).1X(),t:3j,aU:p},3V("aV.3l","?c="+1W.2k(y)))}}J 4W(p){S{if(32<=p.P){K w=3R();if(0<w.P){p={o:3h,p:w,e:p,f:2l};K x=X.1O,y=0<x.N("1R 7.0")||0<x.N("1R 8.0")||0<x.N("1R 9.0")?3k(1W.2k(p)):1W.2k(p);3V("r.3l?v="+1Y.2T()+"&d="+y,"")}}}T(B){}}J 3R(){K p="";L"1S"==1g 3Q?p=3Q:"57"==1g 3Q&&"1S"==1g 6B&&(p=6B),p}K 6C=(W 1z).1X(),2Q="3S:"==1c.3g.6n?"3S://":"aW://",2R=1a.aX||"6D.jd.2w";if(U 0===3p){K 3p=!0,3q="",3r="",3s=!0,3i="",58="",3h=J(){K p=1c.3g.6E.1p();S{58=/^3S?:\\/\\/(?:\\w+\\.)*?(\\w*\\.(?:2w\\.cn|cn|2w|aY|id))[\\\\\\/]*/.59(p)[1]}T(y){}K w=p.N("?");0<w&&(6F<(3i=p.1i(w+1)).P&&(3i=3i.1i(0,aZ)),p=p.1i(0,w));K x=(p=p.1i(2Q.P)).N("6G.2w");L-1<x&&(-1==w||x<w)&&(2R="6D.6G.2w"),p}();S{"1x"==1g 6H||6H||(3p=!1)}T(p){}K 2n=2n||J(p,w){w={};K x=w.2x={},y=x.6I=J(){J r(){}L{1e:J(d){r.2y=j;K h=W r;L d&&h.5a(d),h.3W("1h")||(h.1h=J(){h.$6J.1h.5b(j,6K)}),h.1h.2y=h,h.$6J=j,h},2U:J(){K d=j.1e();L d.1h.5b(d,6K),d},1h:J(){},5a:J(d){Q(K h in d)d.3W(h)&&(j[h]=d[h]);d.3W("1p")&&(j.1p=d.1p)},1Z:J(){L j.1h.2y.1e(j)}}}(),B=x.3X=y.1e({1h:J(r,d){r=j.1y=r||[];j.1r=U 0!=d?d:4*r.P},1p:J(r){L(r||u).2o(j)},5c:J(r){K d=j.1y,h=r.1y,g=j.1r;r=r.1r;if(j.5d(),g%4)Q(v=0;v<r;v++)d[g+v>>>2]|=(h[v>>>2]>>>24-v%4*8&O)<<24-(g+v)%4*8;1q if(V<h.P)Q(K v=0;v<r;v+=4)d[g+v>>>2]=h[v>>>2];1q d.M.5b(d,h);L j.1r+=r,j},5d:J(){K r=j.1y,d=j.1r;r[d>>>2]&=2p<<32-d%4*8;r.P=p.6L(d/4)},1Z:J(){K r=y.1Z.1U(j);L r.1y=j.1y.2V(0),r},2T:J(r){Q(K d=[],h=0;h<r;h+=4)d.M(6M*p.2T()|0);L W B.1h(d,r)}}),A=(x.6N=y.1e({6O:J(){Q(K r="b0-b1-b2-b3-b4".1P(""),d=0,h=r.P;d<h;d++)5e(r[d]){1l"x":r[d]=p.5f(16*p.2T()).1p(16);6P;1l"y":r[d]=(p.5f(4*p.2T())+8).1p(16)}L r.1j("")}}),w.2z={}),u=A.5g={2o:J(r){K d=r.1y;r=r.1r;K h=[];Q(K g=0;g<r;g++){K v=d[g>>>2]>>>24-g%4*8&O;h.M((v>>>4).1p(16));h.M((15&v).1p(16))}L h.1j("")},1I:J(r){Q(K d=r.P,h=[],g=0;g<d;g+=2)h[g>>>3]|=3t(r.3Y(g,2),16)<<24-g%8*4;L W B.1h(h,d/2)}},q=A.b5={2o:J(r){K d=r.1y;r=r.1r;Q(K h=[],g=0;g<r;g++)h.M(1A.1B(d[g>>>2]>>>24-g%4*8&O));L h.1j("")},1I:J(r){Q(K d=r.P,h=[],g=0;g<d;g++)h[g>>>2]|=(O&r.R(g))<<24-g%4*8;L W B.1h(h,d)}},z=A.5h={2o:J(r){S{L b6(b7(q.2o(r)))}T(d){53 55("b8 6u-8 b9");}},1I:J(r){L q.1I(ba(3k(r)))}},t=x.6Q=y.1e({28:J(){j.2A=W B.1h;j.5i=0},3u:J(r){"1S"==1g r&&(r=z.1I(r));j.2A.5c(r);j.5i+=r.1r},2W:J(r){K d=j.2A,h=d.1y,g=d.1r,v=j.2B,k=g/(4*v);r=(r?p.6L(k):p.bb((0|k)-j.5j,0))*v;g=p.bc(4*r,g);if(r){Q(K n=0;n<r;n+=v)j.5k(h,n);n=h.bd(0,r);d.1r-=g}L W B.1h(n,g)},1Z:J(){K r=y.1Z.1U(j);L r.2A=j.2A.1Z(),r},5j:0}),l=(x.6R=t.1e({1F:y.1e(),1h:J(r){j.1F=j.1F.1e(r);j.28()},28:J(){t.28.1U(j);j.3Z()},bf:J(r){L j.3u(r),j.2W(),j},3v:J(r){L r&&j.3u(r),j.41()},2B:16,42:J(r){L J(d,h){L(W r.1h(h)).3v(d)}},6S:J(r){L J(d,h){L(W l.bg.1h(r,h)).3v(d)}}}),w.43={});L w}(1Y);2n.2x.6T||J(p){K w=2n,x=w.2x,y=x.6I,B=x.3X,A=x.6Q,u=w.2z,q=(u.5h,u.bh,w.43.bi,x.6T=A.1e({1F:y.1e(),44:J(d,h){L j.2U(j.46,d,h)},1h:J(d,h,g){j.1F=j.1F.1e(g);j.5l=d;j.6U=h;j.28()},28:J(){A.28.1U(j);j.3Z()},bj:J(d){L j.3u(d),j.2W()},3v:J(d){L d&&j.3u(d),j.41()},6V:4,bk:4,46:1,bl:2,42:J(){L J(d){L{49:J(h,g,v){K k="1S"!=1g g?r:U 0;L k.49(d,h,g,v)}}}}()}));u=w.2C={};K z=x.bm=y.1e({44:J(d,h){L j.6W.2U(d,h)},1h:J(d,h){j.6X=d;j.5m=h}});u=u.6Y=J(){K d=z.1e();L d.6W=d.1e({6Z:J(h,g){K v=j.6X,k=v.2B,n=j.5m;n?j.5m=p:n=j.70;Q(K a=0;a<k;a++)h[g+a]^=n[a];v.71(h,g);j.70=h.2V(g,g+k)}}),d}();K t=(w.4a={}).72={4a:J(d,h){h*=4;h-=d.1r%h;Q(K g=h<<24|h<<16|h<<8|h,v=[],k=0;k<h;k+=4)v.M(g);h=B.2U(v,h);d.5c(h)},73:J(d){d.1r-=O&d.1y[d.1r-1>>>2]}},l=(x.74=q.1e({1F:q.1F.1e({2C:u,3w:t}),28:J(){q.28.1U(j);K d=j.1F,h=d.iv;d=d.2C;if(j.5l==j.46)g=d.44;1q{K g=d.bn;j.5j=1}j.76=g.1U(d,j,h&&h.1y)},5k:J(d,h){j.76.6Z(d,h)},41:J(){K d=j.1F.3w;if(j.5l==j.46)d.4a(j.2A,j.2B),h=j.2W(!0);1q{K h=j.2W(!0);d.73(h)}L h},2B:4}),x.bo=y.1e({1h:J(d){j.5a(d)},1p:J(d){L(d||j.77).2o(j)}})),r=(w.78={},x.bp=y.1e({1F:y.1e({}),49:J(d,h,g,v){v=j.1F.1e(v);K k=d.44(g,v);h=k.3v(h);k=k.1F;L l.2U({79:h,bq:g,iv:k.iv,br:d,2C:k.2C,3w:k.3w,2B:d.2B,77:v.78})},bs:J(d,h){L"1S"==1g d?h.1I(d,j):d}}))}();(J(){K p=2n,w=p.2x.74,x=p.43,y=[],B=[],A=[],u=[],q=[],z=[],t=[],l=[],r=[];!J(){Q(K h=[],g=0;7a>g;g++)h[g]=29>g?g<<1:g<<1^bt;K v=0,k=0;Q(g=0;7a>g;g++){K n=k^k<<1^k<<2^k<<3^k<<4;n=n>>>8^O&n^99;y[v]=n;K a=h[v],c=h[a],b=h[c],e=7b*h[n]^7c*n;B[v]=e<<24|e>>>8;A[v]=e<<16|e>>>16;u[v]=e<<8|e>>>24;q[v]=e;e=bu*b^bv*c^7b*a^7c*v;z[n]=e<<24|e>>>8;t[n]=e<<16|e>>>16;l[n]=e<<8|e>>>24;r[n]=e;v?(v=a^h[h[h[b^a]]],k^=h[h[k]]):v=k=1}}();K d=[0,1,2,4,8,16,32,64,29,27,54];x=x.5n=w.1e({3Z:J(){K h=j.6U,g=h.1y,v=h.1r/4;h=4*((j.7d=v+6)+1);Q(K k=j.7e=[],n=0;n<h;n++)n<v?k[n]=g[n]:(a=k[n-1],n%v?6<v&&4==n%v&&(a=y[a>>>24]<<24|y[a>>>16&O]<<16|y[a>>>8&O]<<8|y[O&a]):(a=y[(a=a<<8|a>>>24)>>>24]<<24|y[a>>>16&O]<<16|y[a>>>8&O]<<8|y[O&a],a^=d[n/v|0]<<24),k[n]=k[n-v]^a);g=j.bw=[];Q(v=0;v<h;v++){n=h-v;K a=v%4?k[n]:k[n-4];g[v]=4>v||4>=n?a:z[y[a>>>24]]^t[y[a>>>16&O]]^l[y[a>>>8&O]]^r[y[O&a]]}},71:J(h,g){j.7f(h,g,j.7e,B,A,u,q,y)},7f:J(h,g,v,k,n,a,c,b){Q(K e=j.7d,f=h[g]^v[0],m=h[g+1]^v[1],C=h[g+2]^v[2],E=h[g+3]^v[3],F=4,D=1;D<e;D++){K G=k[f>>>24]^n[m>>>16&O]^a[C>>>8&O]^c[O&E]^v[F++],H=k[m>>>24]^n[C>>>16&O]^a[E>>>8&O]^c[O&f]^v[F++],I=k[C>>>24]^n[E>>>16&O]^a[f>>>8&O]^c[O&m]^v[F++];E=k[E>>>24]^n[f>>>16&O]^a[m>>>8&O]^c[O&C]^v[F++];f=G;m=H;C=I}G=(b[f>>>24]<<24|b[m>>>16&O]<<16|b[C>>>8&O]<<8|b[O&E])^v[F++];H=(b[m>>>24]<<24|b[C>>>16&O]<<16|b[E>>>8&O]<<8|b[O&f])^v[F++];I=(b[C>>>24]<<24|b[E>>>16&O]<<16|b[f>>>8&O]<<8|b[O&m])^v[F++];E=(b[E>>>24]<<24|b[f>>>16&O]<<16|b[m>>>8&O]<<8|b[O&C])^v[F++];h[g]=G;h[g+1]=H;h[g+2]=I;h[g+3]=E},6V:8});p.5n=w.42(x)})();(J(){K p=2n,w=p.2x,x=w.3X,y=w.6R,B=[];w=p.43.5o=y.1e({3Z:J(){j.3x=W x.1h([7g,bx,by,7h,bz])},5k:J(A,u){Q(K q=j.3x.1y,z=q[0],t=q[1],l=q[2],r=q[3],d=q[4],h=0;80>h;h++){if(16>h)B[h]=0|A[u+h];1q{K g=B[h-3]^B[h-8]^B[h-14]^B[h-16];B[h]=g<<1|g>>>31}g=(z<<5|z>>>27)+d+B[h];g+=20>h?bA+(t&l|~t&r):40>h?bB+(t^l^r):60>h?(t&l|t&r|l&r)-bC:(t^l^r)-bD;d=r;r=l;l=t<<30|t>>>2;t=z;z=g}q[0]=q[0]+z|0;q[1]=q[1]+t|0;q[2]=q[2]+l|0;q[3]=q[3]+r|0;q[4]=q[4]+d|0},41:J(){K A=j.2A,u=A.1y,q=8*j.5i,z=8*A.1r;L u[z>>>5]|=29<<24-z%32,u[14+(z+64>>>9<<4)]=1Y.5f(q/6M),u[15+(z+64>>>9<<4)]=q,A.1r=4*u.P,j.2W(),j.3x},1Z:J(){K A=y.1Z.1U(j);L A.3x=j.3x.1Z(),A}});p.5o=y.42(w);p.bE=y.6S(w)})();(J(){K p=2n,w=p.2x.3X;p.2z.7i={2o:J(x){K y=x.1y,B=x.1r,A=j.7j;x.5d();x=[];Q(K u=0;u<B;u+=5){Q(K q=[],z=0;5>z;z++)q[z]=y[u+z>>>2]>>>24-(u+z)%4*8&O;q=[q[0]>>>3&31,(7&q[0])<<2|q[1]>>>6&3,q[1]>>>1&31,(1&q[1])<<4|q[2]>>>4&15,(15&q[2])<<1|q[3]>>>7&1,q[3]>>>2&31,(3&q[3])<<3|q[4]>>>5&7,31&q[4]];Q(z=0;8>z&&u+.bF*z<B;z++)x.M(A.1s(q[z]))}if(y=A.1s(32))Q(;x.P%8;)x.M(y);L x.1j("")},1I:J(x){L w.2U()},7j:"bG"}})();(J(p,w,x){"1x"!=1g 2a&&2a.2X?2a.2X=x():w.7k=x()})(0,j,J(){K p=J(){Q(K x=[],y="3y bH bI bJ bK bL bM bN bO bP bQ bR bS bT bU bV bW bX bY bZ c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 cb cc cd cf cg ch ci cj ck cl cm co cp cq cr cs cu cv cx cy cz cA cB cC cD cE cF cG cH cI cJ cK cL cM cN cO cP cQ cR cS cT cU cV cW cX cY cZ d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 da db dc dd de df dg dh di dj dk dl dm dn dp dq dr ds dt du dv dw dx dy dz dA dB dC dD dE dF dG dH dI dJ dK dL dM dN dO dP dQ dR dS dT dU dV dW dX dY dZ e0 e1 e2 e3 e4 e5 e6 e7 e8 e9 ea eb ec ed ee ef eg eh ei ej ek el em en eo ep eq er es et eu ev ew ex ey ez eA eB eC eD eE eF eG eH eI eJ eK eL eM eN eO eP eQ eR eS eT eU eV eW eX eY eZ f0 f1 f2 f3 f4 f5 f6 f7 f8 f9 fa fb fd fe ff fg fh fi fj fk fl fm fn fq fr fs ft fu fv fw fx fy fz fA fB fC fD fE fF fG fH fI fJ fK fL fM fN fO fP fQ fR fS fT fU fV fW".1P(" "),B=0;B<y.P;B++)x.M(3t(y[B],16));L x}(),w=J(){};L w.2y={4b:J(x){Q(K y=-1,B=0,A=x.P;B<A;B++)y=y>>>8^p[O&(y^x.R(B))];L(-1^y)>>>0}},w});K 2P=J(){S{K p=2n,w=[];w.M(3h);K x=p.2x.6N.6O();w.M(x);K y=(W 1z).1X();w.M(y);K B=p.5o(w.1j("")).1p().fX();w=[];w.M("fY");w.M(B);K A=(W 7k).4b(w.1j(""));w.M(A);K u=p.2z.5g.1I("fZ"),q=p.2z.5g.1I("g0"),z=w.1j("");L p.5n.49(p.2z.5h.1I(z),q,{2C:p.2C.6Y,3w:p.4a.72,iv:u}).79.1p(p.2z.7i)}T(t){}}();!J(){if(3p){K p=1c.1T("6w");p.4Z=2Q+2R+"/y.3l?v="+1Y.2T()+"&o="+3h;p.g1=!1;1c.1E.2m(p)}}();(J(p,w,x){"1x"!=1g 2a&&2a.2X?2a.2X=x():w.7l=x()})(0,j,J(){J p(a){if(1d==a||U 0==a||""==a)K c="1x";1q{if(1d==a||U 0==a||""==a)c="";1q{c=[];Q(K b=(1<<z)-1,e=0;e<a.P*z;e+=z)c[e>>5]|=(a.R(e/z)&b)<<e%32}a=a.P*z;c[a>>5]|=29<<a%32;c[14+(a+64>>>9<<4)]=a;a=7g;b=-g2;e=-g3;Q(K f=7h,m=0;m<c.P;m+=16){K C=a,E=b,F=e,D=f;b=A(b=A(b=A(b=A(b=B(b=B(b=B(b=B(b=y(b=y(b=y(b=y(b=x(b=x(b=x(b=x(b,e=x(e,f=x(f,a=x(a,b,e,f,c[m+0],7,-g4),b,e,c[m+1],12,-g5),a,b,c[m+2],17,g6),f,a,c[m+3],22,-g7),e=x(e,f=x(f,a=x(a,b,e,f,c[m+4],7,-g8),b,e,c[m+5],12,g9),a,b,c[m+6],17,-ga),f,a,c[m+7],22,-gb),e=x(e,f=x(f,a=x(a,b,e,f,c[m+8],7,gc),b,e,c[m+9],12,-gd),a,b,c[m+10],17,-ge),f,a,c[m+11],22,-gf),e=x(e,f=x(f,a=x(a,b,e,f,c[m+12],7,gg),b,e,c[m+13],12,-gh),a,b,c[m+14],17,-gi),f,a,c[m+15],22,gj),e=y(e,f=y(f,a=y(a,b,e,f,c[m+1],5,-gk),b,e,c[m+6],9,-gm),a,b,c[m+11],14,gn),f,a,c[m+0],20,-go),e=y(e,f=y(f,a=y(a,b,e,f,c[m+5],5,-gp),b,e,c[m+10],9,gq),a,b,c[m+15],14,-gr),f,a,c[m+4],20,-gs),e=y(e,f=y(f,a=y(a,b,e,f,c[m+9],5,gt),b,e,c[m+14],9,-gu),a,b,c[m+3],14,-gv),f,a,c[m+8],20,gw),e=y(e,f=y(f,a=y(a,b,e,f,c[m+13],5,-gx),b,e,c[m+2],9,-gy),a,b,c[m+7],14,gz),f,a,c[m+12],20,-gA),e=B(e,f=B(f,a=B(a,b,e,f,c[m+5],4,-gB),b,e,c[m+8],11,-gC),a,b,c[m+11],16,gD),f,a,c[m+14],23,-gE),e=B(e,f=B(f,a=B(a,b,e,f,c[m+1],4,-gF),b,e,c[m+4],11,gG),a,b,c[m+7],16,-gH),f,a,c[m+10],23,-gI),e=B(e,f=B(f,a=B(a,b,e,f,c[m+13],4,gJ),b,e,c[m+0],11,-gK),a,b,c[m+3],16,-gL),f,a,c[m+6],23,gM),e=B(e,f=B(f,a=B(a,b,e,f,c[m+9],4,-gN),b,e,c[m+12],11,-gO),a,b,c[m+15],16,gP),f,a,c[m+2],23,-gQ),e=A(e,f=A(f,a=A(a,b,e,f,c[m+0],6,-gR),b,e,c[m+7],10,gS),a,b,c[m+14],15,-gT),f,a,c[m+5],21,-gU),e=A(e,f=A(f,a=A(a,b,e,f,c[m+12],6,gV),b,e,c[m+3],10,-gW),a,b,c[m+10],15,-gX),f,a,c[m+1],21,-gY),e=A(e,f=A(f,a=A(a,b,e,f,c[m+8],6,gZ),b,e,c[m+15],10,-h0),a,b,c[m+6],15,-h1),f,a,c[m+13],21,h2),e=A(e,f=A(f,a=A(a,b,e,f,c[m+4],6,-h3),b,e,c[m+11],10,-h4),a,b,c[m+2],15,h5),f,a,c[m+9],21,-h6);a=u(a,C);b=u(b,E);e=u(e,F);f=u(f,D)}c=[a,b,e,f];a=q?"h7":"h8";b="";Q(e=0;e<4*c.P;e++)b+=a.1s(c[e>>2]>>e%4*8+4&15)+a.1s(c[e>>2]>>e%4*8&15);c=b}L c}J w(a,c,b,e,f,m){a=u(u(c,a),u(e,m));L u(a<<f|a>>>32-f,b)}J x(a,c,b,e,f,m,C){L w(c&b|~c&e,a,c,f,m,C)}J y(a,c,b,e,f,m,C){L w(c&e|b&~e,a,c,f,m,C)}J B(a,c,b,e,f,m,C){L w(c^b^e,a,c,f,m,C)}J A(a,c,b,e,f,m,C){L w(b^(c|~e),a,c,f,m,C)}J u(a,c){K b=(V&a)+(V&c);L(a>>16)+(c>>16)+(b>>16)<<16|V&b}K q=0,z=8,t={},l=X.1O.4c(),r=X.3z||X.h9;-1==l.N("5p")&&-1==l.N("5q os")&&-1==l.N("5r")&&-1==l.N("rv:1.2.3.4")&&-1==l.N("4d")&&-1==l.N("5s")&&-1==l.N("1t ce")&&l.N("1t 4e");K d="2q",h="2q";S{-1!=l.N("1Q")&&-1!=l.N("95")&&(d="1t",h="95"),-1!=l.N("1Q")&&-1!=l.N("98")&&(d="1t",h="98"),-1!=l.N("1Q 9x")&&-1!=l.N("4.90")&&(d="1t",h="me"),-1!=l.N("1Q")&&-1!=l.N("nt 5.0")&&(d="1t",h="ha"),-1!=l.N("1Q")&&-1!=l.N("nt")&&(d="1t",h="hb"),-1!=l.N("1Q")&&-1!=l.N("nt 5.1")&&(d="1t",h="hc"),-1!=l.N("1Q")&&-1!=l.N("32")&&(d="1t",h="32"),-1!=l.N("1Q")&&-1!=l.N("nt 5.1")&&(d="1t",h="7"),-1!=l.N("1Q")&&-1!=l.N("6.0")&&(d="1t",h="8"),-1==l.N("1Q")||-1==l.N("nt 6.0")&&-1==l.N("nt 6.1")||(d="1t",h="9"),-1!=l.N("1Q")&&-1!=l.N("nt 6.2")&&(d="1t",h="10"),-1!=l.N("7m")&&(d="7m"),-1!=l.N("7n")&&(d="7n"),-1!=l.N("7o")&&-1!=l.N("os")&&(d="7o os"),-1!=l.N("7p")&&-1!=l.N("os")&&(d="7p os/2"),-1!=l.N("4b")&&-1!=l.N("pc")&&(d="4b"),-1!=l.N("7q")&&(d="7q"),-1!=l.N("hd")&&(d="he"),-1!=l.N("7r")&&(d="7r"),-1!=l.N("hf")&&(d="hg"),-1!=l.N("hh")&&(d="hi"),-1!=l.N("hj")&&(d="hk"),-1!=l.N("hl")&&(d="hm",h=""),-1!=l.N("hn")&&(d="ho"),-1!=l.N("hp")&&(d="7s",h=l.1i(l.N("7s/")+10,3))}T(a){}K g="2q",v="2q",k="";S{-1!=l.N("5t")&&(g="ie",(v=l.1i(l.N("5t ")+5)).N(";")&&(v=v.1i(0,v.N(";")))),-1!=l.N("7t")&&(g="5u",v=l.1i(l.N("7t/")+8)),-1!=l.N("7u")&&(g="hq",v=l.1i(l.N("7u/")+6,4)),-1!=l.N("5v")&&(g="5v",v=l.1i(l.N("5v/")+7)),-1!=l.N("5w")&&(g="5w",(v=l.1i(l.N("5w/")+7)).N(" ")&&(v=v.1i(0,v.N(" ")),""!=(k=v)&&k.N(".")&&(k=v.1i(0,v.N("."))))),-1!=l.N("X")&&(g="X",v=l.1i(l.N("X/")+10)),-1!=l.N("7v")&&(g="hr",(v=l.1i(l.N("7v/")+12)).N(" ")&&(v=v.1i(0,v.N(" ")))),-1!=l.N("hs")&&(g="\\7w\\7x\\ht\\hu\\2D\\2E\\2F"),-1==l.N("hv")&&-1==l.N("4d")||(g="hw\\2D\\2E\\2F"),-1==l.N("hx")&&-1==l.N("hy")||(g="hz\\2D\\2E\\2F"),-1!=l.N("hA")&&(g="\\7w\\7x\\2D\\2E\\2F"),-1!=l.N("hB")&&(g="hC\\2D\\2E\\2F"),-1!=l.N("hD hE")&&(g="\\hF\\hG\\hH\\hI\\2D\\2E\\2F"),-1!=l.N("hJ")&&(g="\\hK\\hL\\2D\\2E\\2F")}T(a){}K n=J(a){j.1u=j.1e(a,{});j.5x=7y.2y.4f;j.5y=7y.2y.2G};L n.2y={1e:J(a,c){if(1d==a)L c;Q(K b in a)1d!=a[b]&&c[b]!==a[b]&&(c[b]=a[b]);L c},6m:J(){L t},2O:J(a){K c=1*v,b=[];"ie"==g&&7<=c?(b.M(l),b.M(r),t.1O=p(l),t.3z=r,j.5z(l)):(b=j.7z(b),b=j.7A(b));b.M(g);b.M(v);b.M(d);b.M(h);t.os=d;t.hM=h;t.hN=g;t.hO=v;b=j.7B(b);b=j.7C(b);b=j.7D(b);b=j.5A(b);b=j.5B(b);b=j.5C(b);b=j.5D(b);b=j.7E(b);b=j.7F(b);b=j.7G(b);b=j.7H(b);b=j.7I(b);b=j.7J(b);b=j.7K(b);b=j.7L(b);c=j.7M(b).1j("~~~");L a(j.7N(c,31))},7z:J(a){L j.1u.hP||(a.M(X.1O),t.1O=p(X.1O),j.5z(X.1O)),a},7O:J(a,c,b){Q(;0<=a.N(c);)a=a.4g(c,b);L a},5z:J(a){K c=a.4c();a="5p"==c.1V(/5p/i);K b="5q os"==c.1V(/5q os/i),e="5r"==c.1V(/5r/i),f="rv:1.2.3.4"==c.1V(/rv:1.2.3.4/i),m="4d"==c.1V(/4d/i),C="5s"==c.1V(/5s/i),E="1t ce"==c.1V(/1t ce/i);c="1t 4e"==c.1V(/1t 4e/i);t.hQ=a||b||e||f||m||C||E||c?"4e":"pc"},7A:J(a){L j.1u.hR||(a.M(X.3z),t.3z=j.7O(X.3z," ","4U")),a},7B:J(a){L j.1u.hS||(a.M(1J.4h),t.4h=1J.4h),a},7C:J(a){if(!j.1u.hT){K c=j.7P();U 0!==c&&(a.M(c.1j("x")),t.hU=c.1j("x"))}L a},7P:J(){L j.1u.hV?1J.2b>1J.2c?[1J.2b,1J.2c]:[1J.2c,1J.2b]:[1J.2b,1J.2c]},7D:J(a){L j.1u.hW||(a.M((W 1z).5E()),t.hX=(W 1z).5E()/60),a},5A:J(a){L!j.1u.7Q&&j.7R()&&(a.M("5A"),t.3A=!0),a},5B:J(a){L!j.1u.7Q&&j.7S()&&(a.M("5B"),t.3B=!0),a},5C:J(a){L!j.1u.hY&&j.7T()&&(a.M("5C"),t.hZ=!0),a},5D:J(a){L 1c.1E&&!j.1u.i0&&1c.1E.4i?(a.M("5D"),t.4i=!0):t.4i=!1,a},7E:J(a){L!j.1u.i1&&1a.2H?(a.M("2H"),t.2H=!0):t.2H=!1,a},7F:J(a){L j.1u.i2||(t.7U=j.7V(),a.M(t.7U)),a},7G:J(a){L t.4j=j.7W(),a.M(t.4j),a},7H:J(a){K c=j.7X();L a.M(c),t.i3=c,a},7I:J(a){K c=!0;if(""!=k&&!3C(k)&&47>3t(k)&&(c=!1),c)if(c=1a.i4||1a.i5){c=W c;K b=c.i6.1p();a.M(b);t.i7=b;c.5F&&c.5F()}L a},7J:J(a){L j.1u.i8||(t.7Y=j.7Z(),a.M(t.7Y)),a},7L:J(a){K c=!0;if(3s){K b=1k.1C("81"),e=1k.1C("82"),f=1k.1C("83");S{b&&e&&f&&84>=(W 1z).1X()-3t(f)&&p(b)==e&&(c=!1,t.2e=e,3q=e,a.M(b))}T(m){}}c&&!j.1u.i9&&j.5G()&&(c=j.85(),t.2e=p(c),3q=t.2e,a.M(c),3s&&(1k.1C("81",c),1k.1C("82",3q),1k.1C("83",(W 1z).1X())));L a},7M:J(a){K c=!0;if(3s){K b=1k.1C("86"),e=1k.1C("87"),f=1k.1C("88");S{b&&e&&f&&84>=(W 1z).1X()-3t(f)&&p(b)==e&&(c=!1,t.2Y=e,3r=e,a.M(b))}T(m){}}c&&!j.1u.ia&&j.5G()&&(c=j.89(),a.M(c),t.8a=p(c),3r=t.8a,3s&&(1k.1C("86",c),1k.1C("87",3r),1k.1C("88",(W 1z).1X())));L a},7K:J(a){K c=j.8b()?j.8c():j.8d();a.M(c);t.5H=p(c);L a},8d:J(){L j.2G(X.5H,J(a){K c=j.2G(a,J(b){L[b.5I,b.5J].1j("~")}).1j(",");L[a.1v,a.3D,c].1j("::")},j).1j(";")},8c:J(){L U 0!==1a.2S?j.2G("8e.2f;8f.8g;4k.4k;4l.4l.1;4m.4m;3n.8h;3n.3m;2f.8i;4n.4n;8j.8k.1;2g;2g.2g(4o) 4p 2r (32-4q);4r.4r(4o) 4p 2r (32-4q);5K.5L;4s.4s;4t.5M;4u.4u;8l.ib;4v.4v;8m.8n;5N.2g 5O 2r;5N.2g 5O 2r.1".1P(";"),J(a){S{L W 2S(a),a}T(c){L 1d}}).1j(";"):""},7R:J(){S{L!!1a.3A}T(a){L!0}},7S:J(){S{L!!1a.3B}T(a){L!0}},7T:J(){L!!1a.2I},7V:J(){L X.ic||X.8o?X.8o:"2q"},7W:J(){L X.4j?X.4j:"2q"},7X:J(){L X.8p?X.8p:"2q"},7Z:J(){L X.8q||X.8r?X.8q||X.8r:"2q"},85:J(){K a=[],c=1c.1T("2e");c.2c=ig;c.2b=6v;c.2h.4w="ih";K b=c.2Z("2d");L b.8s(0,0,10,10),b.8s(2,2,6,6),a.M("cw:"+(!1===b.ii(5,5,"8t")?"8u":"no")),b.ij="ik",b.2J="#il",b.im(io,1,62,20),b.2J="#ip",b.5P="iq no-ir-5P-is",b.8v("8w aa 8x 8y 8z 8A, \\8B\\8C",2,15),b.2J="it(iu, iw, 0, 0.2)",b.5P="ix 8D",b.8v("8w aa 8x 8y 8z 8A, \\8B\\8C",4,45),b.iy="iz",b.2J="3E(O,0,O)",b.5Q(),b.3F(50,50,50,0,2*1Y.3G,!0),b.5R(),b.4x(),b.2J="3E(0,O,O)",b.5Q(),b.3F(5S,50,50,0,2*1Y.3G,!0),b.5R(),b.4x(),b.2J="3E(O,O,0)",b.5Q(),b.3F(75,5S,50,0,2*1Y.3G,!0),b.5R(),b.4x(),b.2J="3E(O,0,O)",b.3F(75,75,75,0,2*1Y.3G,!0),b.3F(75,75,25,0,2*1Y.3G,!0),b.4x("8t"),a.M("iA:"+c.8E()),a.1j("~")},89:J(){K a,c=J(F){L a.iB(0,0,0,1),a.iC(a.iD),a.iE(a.iF),a.iG(a.iH|a.iI),"["+F[0]+", "+F[1]+"]"};if(!(a=j.8F()))L 1d;K b=[],e=a.iJ();a.iK(a.8G,e);K f=W iL([-.2,-.9,0,.4,-.26,0,0,.iM,0]);a.iN(a.8G,f,a.iO);e.8H=3;e.8I=3;f=a.iP();K m=a.8J(a.1n);a.8K(m,"iQ 4y 4z;8L 4y 4A;iR 4y 5T;U 8M(){4A=4z+5T;iS=8N(4z,0,1);}");a.8O(m);K C=a.8J(a.1o);a.8K(C,"1G iT iU;8L 4y 4A;U 8M() {iV=8N(4A,0,1);}");a.8O(C);a.8P(f,m);a.8P(f,C);a.iW(f);a.iX(f);f.8Q=a.iY(f,"4z");f.8R=a.iZ(f,"5T");a.j0(f.j1);a.j2(f.8Q,e.8H,a.j3,!1,0,0);a.j4(f.8R,1,1);a.j5(a.j6,0,e.8I);1d!=a.2e&&b.M(a.2e.8E());b.M("8S:"+a.8T().1j(";"));b.M("j7"+c(a.Z(a.j8)));b.M("j9"+c(a.Z(a.ja)));b.M("jb"+a.Z(a.jc));b.M("je"+(a.jf().jg?"8u":"no"));b.M("jh"+a.Z(a.ji));b.M("jj"+a.Z(a.jk));b.M("jl"+a.Z(a.jm));b.M("jn"+J(F){K D,G=F.3H("jo")||F.3H("jp")||F.3H("jq");L G?(0===(D=F.Z(G.jr))&&(D=2),D):1d}(a));b.M("js"+a.Z(a.jt));b.M("ju"+a.Z(a.jv));b.M("jw"+a.Z(a.jx));b.M("jy"+a.Z(a.jz));b.M("jA"+a.Z(a.jB));b.M("jC"+a.Z(a.jD));b.M("jE"+a.Z(a.jF));b.M("jG"+a.Z(a.jH));b.M("jI"+a.Z(a.jJ));b.M("jK"+a.Z(a.jL));b.M("jM"+c(a.Z(a.jN)));b.M("jO"+a.Z(a.jP));b.M("jQ"+a.Z(a.8U));b.M("jR"+a.Z(a.8V));b.M("jS"+a.Z(a.jT));b.M("jU"+a.Z(a.8W));b.M("jV"+a.Z(a.8X));S{K E=a.3H("8Y");E&&(b.M("8Z:"+a.Z(E.92)),b.M("94:"+a.Z(E.96)))}T(F){}L a.Y?(b.M("jW"+a.Y(a.1n,a.34).1G),b.M("jX"+a.Y(a.1n,a.34).1K),b.M("jY"+a.Y(a.1n,a.34).1L),b.M("jZ"+a.Y(a.1n,a.35).1G),b.M("k0"+a.Y(a.1n,a.35).1K),b.M("k1"+a.Y(a.1n,a.35).1L),b.M("k2"+a.Y(a.1n,a.36).1G),b.M("k3"+a.Y(a.1n,a.36).1K),b.M("k4"+a.Y(a.1n,a.36).1L),b.M("k5"+a.Y(a.1o,a.34).1G),b.M("k6"+a.Y(a.1o,a.34).1K),b.M("k7"+a.Y(a.1o,a.34).1L),b.M("k8"+a.Y(a.1o,a.35).1G),b.M("k9"+a.Y(a.1o,a.35).1K),b.M("ka"+a.Y(a.1o,a.35).1L),b.M("kb"+a.Y(a.1o,a.36).1G),b.M("kc"+a.Y(a.1o,a.36).1K),b.M("kd"+a.Y(a.1o,a.36).1L),b.M("ke"+a.Y(a.1n,a.37).1G),b.M("kf"+a.Y(a.1n,a.37).1K),b.M("kg"+a.Y(a.1n,a.37).1L),b.M("kh"+a.Y(a.1n,a.38).1G),b.M("ki"+a.Y(a.1n,a.38).1K),b.M("kj"+a.Y(a.1n,a.38).1L),b.M("kk"+a.Y(a.1n,a.39).1G),b.M("kl"+a.Y(a.1n,a.39).1K),b.M("km"+a.Y(a.1n,a.39).1L),b.M("kn"+a.Y(a.1o,a.37).1G),b.M("ko"+a.Y(a.1o,a.37).1K),b.M("kp"+a.Y(a.1o,a.37).1L),b.M("kq"+a.Y(a.1o,a.38).1G),b.M("kr"+a.Y(a.1o,a.38).1K),b.M("ks"+a.Y(a.1o,a.38).1L),b.M("kt"+a.Y(a.1o,a.39).1G),b.M("ku"+a.Y(a.1o,a.39).1K),b.M("kv"+a.Y(a.1o,a.39).1L),b.1j("\\97")):b.1j("\\97")},5G:J(){K a=1c.1T("2e");L!(!a.2Z||!a.2Z("2d"))},8b:J(){L"4Y kw kx"===X.9a||!("ky"!==X.9a||!/kz/.kA(X.1O))},8F:J(){K a=1c.1T("2e"),c=1d;S{c=a.2Z("2Y")||a.2Z("9b-2Y")}T(b){}L c||(c=1d),c},9c:J(a,c,b){if(1d!==a)if(j.5x&&a.4f===j.5x)a.4f(c,b);1q if(a.P===+a.P)Q(K e=0,f=a.P;e<f&&c.1U(b,a[e],e,a)!=={};e++);1q Q(e in a)if(a.3W(e)&&c.1U(b,a[e],e,a)==={})6P},2G:J(a,c,b){K e=[];L 1d==a?e:j.5y&&a.2G===j.5y?a.2G(c,b):(j.9c(a,J(f,m,C){e[e.P]=c.1U(b,f,m,C)}),e)},2i:J(a,c){a=[a[0]>>>16,V&a[0],a[1]>>>16,V&a[1]];c=[c[0]>>>16,V&c[0],c[1]>>>16,V&c[1]];K b=[0,0,0,0];L b[3]+=a[3]+c[3],b[2]+=b[3]>>>16,b[3]&=V,b[2]+=a[2]+c[2],b[1]+=b[2]>>>16,b[2]&=V,b[1]+=a[1]+c[1],b[0]+=b[1]>>>16,b[1]&=V,b[0]+=a[0]+c[0],b[0]&=V,[b[0]<<16|b[1],b[2]<<16|b[3]]},1H:J(a,c){a=[a[0]>>>16,V&a[0],a[1]>>>16,V&a[1]];c=[c[0]>>>16,V&c[0],c[1]>>>16,V&c[1]];K b=[0,0,0,0];L b[3]+=a[3]*c[3],b[2]+=b[3]>>>16,b[3]&=V,b[2]+=a[2]*c[3],b[1]+=b[2]>>>16,b[2]&=V,b[2]+=a[3]*c[2],b[1]+=b[2]>>>16,b[2]&=V,b[1]+=a[1]*c[3],b[0]+=b[1]>>>16,b[1]&=V,b[1]+=a[2]*c[2],b[0]+=b[1]>>>16,b[1]&=V,b[1]+=a[3]*c[1],b[0]+=b[1]>>>16,b[1]&=V,b[0]+=a[0]*c[3]+a[1]*c[2]+a[2]*c[1]+a[3]*c[0],b[0]&=V,[b[0]<<16|b[1],b[2]<<16|b[3]]},2K:J(a,c){L c%=64,32===c?[a[1],a[0]]:32>c?[a[0]<<c|a[1]>>>32-c,a[1]<<c|a[0]>>>32-c]:(c-=32,[a[1]<<c|a[0]>>>32-c,a[0]<<c|a[1]>>>32-c])},1D:J(a,c){L c%=64,0===c?a:32>c?[a[0]<<c|a[1]>>>32-c,a[1]<<c]:[a[1]<<c-32,0]},1f:J(a,c){L[a[0]^c[0],a[1]^c[1]]},5U:J(a){L a=j.1f(a,[0,a[0]>>>1]),a=j.1H(a,[kB,kC]),a=j.1f(a,[0,a[0]>>>1]),a=j.1H(a,[kD,kE]),j.1f(a,[0,a[0]>>>1])},7N:J(a,c){a=a||"";c=c||0;K b=a.P%16,e=a.P-b,f=[0,c];c=[0,c];Q(K m,C,E=[kF,kG],F=[kH,kI],D=0;D<e;D+=16)m=[O&a.R(D+4)|(O&a.R(D+5))<<8|(O&a.R(D+6))<<16|(O&a.R(D+7))<<24,O&a.R(D)|(O&a.R(D+1))<<8|(O&a.R(D+2))<<16|(O&a.R(D+3))<<24],C=[O&a.R(D+12)|(O&a.R(D+13))<<8|(O&a.R(D+14))<<16|(O&a.R(D+15))<<24,O&a.R(D+8)|(O&a.R(D+9))<<8|(O&a.R(D+10))<<16|(O&a.R(D+11))<<24],m=j.1H(m,E),m=j.2K(m,31),m=j.1H(m,F),f=j.1f(f,m),f=j.2K(f,27),f=j.2i(f,c),f=j.2i(j.1H(f,[0,5]),[0,kJ]),C=j.1H(C,F),C=j.2K(C,33),C=j.1H(C,E),c=j.1f(c,C),c=j.2K(c,31),c=j.2i(c,f),c=j.2i(j.1H(c,[0,5]),[0,kK]);5e(m=[0,0],C=[0,0],b){1l 15:C=j.1f(C,j.1D([0,a.R(D+14)],48));1l 14:C=j.1f(C,j.1D([0,a.R(D+13)],40));1l 13:C=j.1f(C,j.1D([0,a.R(D+12)],32));1l 12:C=j.1f(C,j.1D([0,a.R(D+11)],24));1l 11:C=j.1f(C,j.1D([0,a.R(D+10)],16));1l 10:C=j.1f(C,j.1D([0,a.R(D+9)],8));1l 9:C=j.1f(C,[0,a.R(D+8)]),C=j.1H(C,F),C=j.2K(C,33),C=j.1H(C,E),c=j.1f(c,C);1l 8:m=j.1f(m,j.1D([0,a.R(D+7)],56));1l 7:m=j.1f(m,j.1D([0,a.R(D+6)],48));1l 6:m=j.1f(m,j.1D([0,a.R(D+5)],40));1l 5:m=j.1f(m,j.1D([0,a.R(D+4)],32));1l 4:m=j.1f(m,j.1D([0,a.R(D+3)],24));1l 3:m=j.1f(m,j.1D([0,a.R(D+2)],16));1l 2:m=j.1f(m,j.1D([0,a.R(D+1)],8));1l 1:m=j.1f(m,[0,a.R(D)]),m=j.1H(m,E),m=j.2K(m,31),m=j.1H(m,F),f=j.1f(f,m)}L f=j.1f(f,[0,a.P]),c=j.1f(c,[0,a.P]),f=j.2i(f,c),c=j.2i(c,f),f=j.5U(f),c=j.5U(c),f=j.2i(f,c),c=j.2i(c,f),("3y"+(f[0]>>>0).1p(16)).2V(-8)+("3y"+(f[1]>>>0).1p(16)).2V(-8)+("3y"+(c[0]>>>0).1p(16)).2V(-8)+("3y"+(c[1]>>>0).1p(16)).2V(-8)}},n});S{!J(p){K w=p.1c,x=(p.kL,p.5V);S{K y=p.3B}T(u){}S{K B=p.3A}T(u){}K A={9d:!0,9e:!1,9f:5,kM:!1,2L:58,9g:2Q+2R,9h:""};p.9i=J(u){u=u||{};K q={},z;Q(z in A){K t=u[z];q[z]=U 0!==t?t:A[z]}"J"==1g q.2L&&(q.2L=q.2L(p));q.9d;q.9e;K l=q.9f,r=(q.9g,q.9h,q.2L),d=j;j.18={};j.2O=J(k,n,a){d.3I(k,n,U 0,U 0,a)};j.3U=J(k,n){d.3I(k,J(){},n)};j.3I=J(k,n,a,c,b){if(U 0===d.3I&&(d=j),U 0===c&&(c=1),1===c&&(d.9j(k,a),d.9k(k,a),d.18.4B=d.9l(k,a),d.18.5W=d.4T(k,a),d.18.5X=d.1C(k,a),d.18.5Y=d.9m(k,a),d.18.5Z=d.9n(k,a),d.18.kN=d.9o(k,a)),U 0==a)if((!("1x"!==d.18.4B&&d.18.4B||"1x"!==d.18.5W&&d.18.5W||"1x"!==d.18.5X&&d.18.5X||"1x"!==d.18.5Y&&d.18.5Y||"1x"!==d.18.5Z&&d.18.5Z||"1x"!==d.18.3J&&d.18.3J||"1x"!==d.18.3a&&d.18.3a)&&p.2H&&U 0===d.18.3J||("2I"in p||(p.2I=p.2I||p.9p||p.9q||p.9r))&&(U 0===d.18.3a||""===d.18.3a))&&c++<l)3o(J(){d.3I(k,n,a,c,b)},30);1q{K e,f,m=d.18,C=[],E=0;d.18={};Q(f in m)m[f]&&"1d"!==m[f]&&"1x"!==m[f]&&(C[m[f]]=U 0===C[m[f]]?1:C[m[f]]+1);Q(f in C)C[f]>E&&(E=C[f],e=f);U 0===e||U 0!==b&&1===b||d.3U(k,e);"J"==1g n&&n(e,m)}};j.9o=J(k,n){S{if(U 0===n)L j.61(k,p.1v);K a=p.1v;if(-1<a.N("&"+k+"=")||0===a.N(k+"=")){K c,b=a.N("&"+k+"=");K e=(-1===b&&(b=a.N(k+"=")),c=a.N("&",b+1),-1!==c?a.3Y(0,b)+a.3Y(c+(b?0:1))+"&"+k+"="+n:a.3Y(0,b)+"&"+k+"="+n)}1q e=a+"&"+k+"="+n;p.1v=e}T(f){}};j.9l=J(k,n){S{K a=j.4C("9s","6x",1);if(a.4i){if(k=k.1i(1),a.2h.kO="kP(#kQ#4B)",U 0===n)L a.kR(k),a.kS(k);a.65(k,n);a.kT(k)}}T(c){}};j.kU=J(k,n){};j.kV=J(k,n){};j.1C=J(k,n){S{if(y){if(U 0===n)L y.9t(k);y.9u(k,n)}}T(a){}};j.9j=J(k,n){S{if(p.2H){K a=p.2H("kW","","4D",kX);U 0!==n?a.66(J(c){c.67("kY kZ l0 4E l1 68(id l2 4E 69 l3 l4 l5, 1v 9v 4E 69, 3b 9v 4E 69, l6 (1v))",[],J(b,e){},J(b,e){});c.67("l7 l8 l9 la 68(1v, 3b) lb(?, ?)",[k,n],J(b,e){},J(b,e){})}):a.66(J(c){c.67("lc 3b ld 68 le 1v=?",[k],J(b,e){1<=e.9w.P?d.18.3J=e.9w.lf(0).3b:d.18.3J=""},J(b,e){})})}}T(c){}};j.9k=J(k,n){S{K a=p.2I||p.9p||p.9q||p.9r;p.lg||p.lh||p.li;p.lj||p.lk||p.ll;if(a){K c=a.6t("lm",1);c.ln=J(b){};c.lo=J(){c.4F.lp("4D",{lq:"1v"})};c.9y=J(){K b=c.4F,e=b.66(["4D"],"lr"),f=e.ls(["4D"]);if(U 0!==n)f.lt({1v:k,3b:n});1q{K m=f.2O(k);m.9y=J(){U 0===m.4F?d.18.3a=U 0:d.18.3a=m.4F.3b}}e.lu=J(){b.5F()}}}}T(b){}};j.9n=J(k,n){S{if(B){if(U 0===n)L B.9t(k);B.9u(k,n)}}T(a){}};j.9m=J(k,n){if(x){K a=j.9z();S{if(U 0===n)L x[a][k];x[a][k]=n}T(c){}}};j.lv=J(k,n){};j.lw=J(k){K n,a,c="",b=0;Q(k=j.9B(k);b<k.P;){K e=(n=k.R(b++))>>2;K f=(3&n)<<4|(n=k.R(b++))>>4;K m=(15&n)<<2|(a=k.R(b++))>>6;K C=63&a;3C(n)?m=C=64:3C(a)&&(C=64);c=c+"2s+/=".1s(e)+"2s+/=".1s(f)+"2s+/=".1s(m)+"2s+/=".1s(C)}L c};j.lx=J(k){K n,a,c,b="",e=0;Q(k=k.4g(/[^A-ly-lz-9\\+\\/=]/g,"");e<k.P;){K f="2s+/=".N(k.1s(e++))<<2|(n="2s+/=".N(k.1s(e++)))>>4;n=(15&n)<<4|(a="2s+/=".N(k.1s(e++)))>>2;K m=(3&a)<<6|(c="2s+/=".N(k.1s(e++)));b+=1A.1B(f);64!==a&&(b+=1A.1B(n));64!==c&&(b+=1A.1B(m))}L j.9C(b)};j.9B=J(k){Q(K n,a="",c=0,b=(k=k.4g(/\\r\\n/g,"\\n")).P;c<b;c++)29>(n=k.R(c))?a+=1A.1B(n):lA<n&&lB>n?(a+=1A.1B(n>>6|lC),a+=1A.1B(63&n|29)):(a+=1A.1B(n>>12|9D),a+=1A.1B(n>>6&63|29),a+=1A.1B(63&n|29));L a};j.9C=J(k){Q(K n="",a=0,c=k.P,b=0,e=0,f=0;a<c;)29>(b=k.R(a))?(n+=1A.1B(b),a+=1):lD<b&&9D>b?(e=k.R(a+1),n+=1A.1B((31&b)<<6|63&e),a+=2):(e=k.R(a+1),f=k.R(a+2),n+=1A.1B((15&b)<<12|(63&e)<<6|63&f),a+=3);L n};j.lE=J(k,n){};j.4C=J(k,n,a){K c;L c=U 0!==n&&w.51(n)?w.51(n):w.1T(k),c.2h.9E="9F",c.2h.lF="lG",n&&c.65("id",n),a&&w.1E.2m(c),c};j.lH=J(k,n){n=j.4C("lI",n,1);L n.65("4Z",k),n};j.4T=J(k,n){if(U 0===n)L j.61(k,w.4G);w.4G=k+"=; 9G=lJ, 20 lK lL 4H:4H:4H lM; 9H=/; 2L="+r;K a=W 1z;a.lN(a.1X()+lO);a=a.lP();w.4G=k+"="+n+"; 9G="+a+"; 9H=/; 2L="+r};j.61=J(k,n){if("1S"==1g n){K a;k+="=";K c=n.1P(/[;&]/);Q(n=0;n<c.P;n++){Q(a=c[n];" "===a.1s(0);)a=a.1i(1,a.P);if(0===a.N(k))L a.1i(k.P,a.P)}}};j.9z=J(){L p.3g.lQ.4g(/:\\d+/,"")};j.lR=J(k){Q(K n,a="",c=k.P,b=0;b<c;){Q(n=k.R(b++).1p(16);2>n.P;)n="0"+n;a+=n}L a};j.lS=J(k){Q(K n,a="",c=k.P;0<=c;)n=c-2,a=1A.1B("lT"+k.1i(n,c))+a,c=n;L a};j.lU=J(k){};K h,g=j.4C("a","4I");S{K v=1;(h=w.1T("2h")).9I?h.9I.3K="#4I:6a{4w:6b;2M:#6c}":h.3K?h.3K="#4I:6a{4w:6b;2M:#6c}":h.2m(w.lV("#4I:6a{4w:6b;2M:#6c}"))}T(k){v=0}j.9J=J(k,n){if(n&&0===v)L-1;g.6E=k;g.3K=k;w.1E.2m(h);w.1E.2m(g);if(w.6d){if(1d==w.6d.4J(g,1d))L-1;k=w.6d.4J(g,1d).9K("2M")}1q k=g.lW.2M;L k};j.lX=J(k,n){k=j.9J(k);L"3E(O, 0, 0)"===k||"#lY"===k?1:n&&k!==n?1:0}}}(1a)}T(p){}K 1W=W J(){J p(){K u=1a.lZ||1a.9L||1a.m0;if(u){K q=J(l){K r=/([0-9]{1,3}(\\.[0-9]{1,3}){3})/,d=/\\s*((([0-9A-1m-f]{1,4}:){7}([0-9A-1m-f]{1,4}|:))|(([0-9A-1m-f]{1,4}:){6}(:[0-9A-1m-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-1m-f]{1,4}:){5}(((:[0-9A-1m-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-1m-f]{1,4}:){4}(((:[0-9A-1m-f]{1,4}){1,3})|((:[0-9A-1m-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-1m-f]{1,4}:){3}(((:[0-9A-1m-f]{1,4}){1,4})|((:[0-9A-1m-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-1m-f]{1,4}:){2}(((:[0-9A-1m-f]{1,4}){1,5})|((:[0-9A-1m-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-1m-f]{1,4}:){1}(((:[0-9A-1m-f]{1,4}){1,6})|((:[0-9A-1m-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-1m-f]{1,4}){1,7})|((:[0-9A-1m-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?\\s*/;S{K h=r.59(l);1d!=h&&0!=h.P&&U 0!=h||(h=d.59(l));K g=h[1];U 0===z[g]&&y.M(g);z[g]=!0}T(v){}},z={};S{K t=W u({9M:[{m1:"9N:9N.m2.m3.2w"}]})}T(l){}S{U 0===t&&(t=W u({9M:[]}))}T(l){}if(t||1a.9L)S{t.m4("m5",{m6:!1})}T(l){}t&&(t.m7=J(l){l.4K&&q(l.4K.4K)},t.m8(J(l){t.m9(l,J(){},J(){})},J(){}),3o(J(){S{t.ma.mb.1P("\\n").4f(J(l){0===l.N("a=4K:")&&q(l)})}T(l){}},6F))}}J w(){J u(r){K d={};L t.2h.mc=r,1c.1E.2m(t),d.2b=t.md,d.2c=t.mf,1c.1E.52(t),d}K q=["mg","mh-9O","9O"],z=[],t=1c.1T("mi");t.2h.mj="mk";t.2h.9E="9F";t.3K="ml";Q(K l=0;l<q.P;l++)z[l]=u(q[l]);j.9P=J(r){Q(K d=0;d<z.P;d++){K h=u(r+","+q[d]),g=z[d];if(h.2b!==g.2b||h.2c!==g.2c)L!0}L!1}}J x(u){K q={};q.1v=u.1v;q.9Q=u.9Q.4c();q.3D=u.3D;U 0!==u.2j&&(q.2j=u.2j);q.9R=[];Q(K z=0;z<u.P;z++){K t=u[z],l={};l.3D=t.3D;l.5J=t.5J;l.5I=t.5I;q.9R.M(l)}L q}K y=[],B="mm 1M 9S 9T;6e mn 9U;6e mo;6e mp 9U;mq 9V;mr;ms mt;8D mu;mv;mw 93;mx 1M;my mz 9W;mA 1M;mB 9X 9Y;mC;mD;mE;mF 9V;mG;mH;mI;mJ 2N;mK;mL 1M;mM 2N 9T;mN mO 6f mP;mQ;mR-mS;mT;mU 1M;mV 6g 9Z;mW;mX;mY;mZ 2N n0;n1 3L 1M;n2;n3;n4;n5 9X 9Y;n6;n7;n8;n9;na 6f nb;nc;nd ne;nf;ng 1M;nh 2N ni;nj nk;nl;a0 nm;a0 nn;np;nq 2N;nr 1M 3L ns;nu;nv-nw;nx;a1 ny;a1 nz 6f 9W;nA 2N 1M;nB nC;nD;nE 3L 1M;nF;nG;nH;nI;nJ;nK;nL;3L 1M 6g;nM nN;nO 2N;nP;nQ 9Z;nR;nS nT 1M 9S nU 6g;nV;nW;nX;nY;nZ 3L;o0 o1".1P(";"),A="o2;o3;o4;o5;o6 a2 o7;o8 1N-3M;o9 oa 2r 3;ob 2t;oc;od a3 oe 1b;of;og;oh oi 2t;oj ok;ol om a4;on;oo op;oq or a5;ot 3c;6h ou 6i;6h ov 6j-in;6h ow 1N-in;ox 3c;oy 3c;oz 3N a6;6k 3N 1N-3M;6k oA 3e a7;6k oB a6 1N-in;oC 3e 1b;oD 2t;oE;oF oG;a8 oH oI 1b;a8 oJ oK;oL oM;oN 1b;oO a9 1N-in;oP 2t;oQ oR 1b;oS 3 3N 1b;oT;oU oV 3e 1N-in 16.4H;oW 1b;oX;oY 4t oZ;3O ab 1b;3O ab 1N-in;3O p0 0.5.33.0;3O p1 p2 1b;3O 3c;ac 5u 1b;ac 1N-3M;p3 & p4 p5;p6;p7 3g p8;p9 pa 2t;pb;pd 2t;pe pf pg;ph;ad 1b 1.0.0.pi;ad 1b 1.0.0.pj;pk-pl.2w 2t;4Y pm pn;po;pp 6i;pq 2f 1N-3M;pr ps pt 1b;pu pv pw;px 1b;py;pz;pA;pB;pC pD pE;pF pG 6j-in;pH a9;pI 3e 1b;pJ.ae pK 2t;2f pL do af;2f-pM ag;pN.1.2.2;pO;pP 1N-in;pQ 5u 1b;pR 1b;pS 1b;pT;pU 1b;pV a4 1b;pW 3c;pX 3c;pY;5K.5L;pZ 1b;4t.5M;q0 1N-3M;q1 q2;8l 3e 1b;q3 3N 1b;q4 q5 6i;q6 q7 6j-in;q8 q9 a2 1b;qa;qb a7;qc qd;qe;qf ae qg;qh qj 1b;3e qk;af-ql 2f;qm 3N qn;qo qp;qq;qr a5 1.4;ah a3 1b;ah 2f ag;qt 1N-in;qu".1P(";");j.4L="57"==1g 4V&&4V.2o;j.1h=J(){p();"J"!=1g j.4L&&(j.4L=J(u){if(U 0==u||1d==u)L 1d;K q="{",z;Q(z in u)q+="\'"+z+"\':","1S"==1g u[z]?q+="\'"+u[z]+"\'":q+=u[z],q+=",";L q=q.1i(0,q.P-1),q+"}"})};j.qv=J(u){K q,z=3&u.P,t=u.P-z;K l=U 0;Q(q=0;q<t;){K r=O&u.R(q)|(O&u.R(++q))<<8|(O&u.R(++q))<<16|(O&u.R(++q))<<24;++q;r=4M*(V&r)+((4M*(r>>>16)&V)<<16)&2p;r=r<<15|r>>>17;r=4N*(V&r)+((4N*(r>>>16)&V)<<16)&2p;l^=r;l=l<<13|l>>>19;l=5*(V&l)+((5*(l>>>16)&V)<<16)&2p;l=qw+(V&l)+((qx+(l>>>16)&V)<<16)}5e(r=0,z){1l 3:r^=(O&u.R(q+2))<<16;1l 2:r^=(O&u.R(q+1))<<8;1l 1:l^=4N*(V&(r=(r=4M*(V&(r^=O&u.R(q)))+((4M*(r>>>16)&V)<<16)&2p)<<15|r>>>17))+((4N*(r>>>16)&V)<<16)&2p}L l^=u.P,l^=l>>>16,l=ai*(V&l)+((ai*(l>>>16)&V)<<16)&2p,l^=l>>>13,l=aj*(V&l)+((aj*(l>>>16)&V)<<16)&2p,(l^l>>>16)>>>0};j.2k=J(u){u=j.4L(u);u=3k(u);K q,z="",t,l=0;do{K r=(q=u.R(l++))>>2;K d=(3&q)<<4|(q=u.R(l++))>>4;K h=(15&q)<<2|(t=u.R(l++))>>6;K g=63&t;3C(q)?h=g=64:3C(t)&&(g=64);z=z+"4O<4P*4Q.-".1s(r)+"4O<4P*4Q.-".1s(d)+"4O<4P*4Q.-".1s(h)+"4O<4P*4Q.-".1s(g)}qy(l<u.P);L z+"/"};j.6o=J(){K u=W 1z;S{K q=1c.1T("9s"),z={},t="qz qA qB qC qD qE qF qG qH qI qJ qK qL qM qN qO qP qQ qR qS qT qU qV qW qX qY qZ r0".1P(" ");if(1a.4J)Q(g=0;g<t.P;g++)1c.1E.2m(q),q.2h.2M=t[g],z[t[g]]=1a.4J(q).9K("2M"),1c.1E.52(q)}T(m){}q={ca:{},6l:{},m:{}};t=q.ca;t.r1=3q;t.r2=3r;K l=!1;if(1a.r3){Q(K r,d=["2Y","9b-2Y","r4-2Y","r5-3d"],h=[],g=0;g<d.P;g++)S{K v=!1;(v=1c.1T("2e").2Z(d[g],{r6:!0}))&&v&&(r=v,h.M(d[g]))}T(m){}h.P&&(l={1v:h,gl:r})}if(l){g=l.gl;t.r7=l.1v.1j();t.r8=g.Z(g.8X);t.r9=g.Z(g.8V);t.ra=g.Z(g.8W);t.rb=g.Z(g.8U);r=[];S{r=g.8T(),t.8S=r}T(m){}S{K k=g.3H("8Y");k&&(t.8Z=g.Z(k.92),t.94=g.Z(k.96))}T(m){}}q.m.ak=1c.ak;q.m.al=1c.al;k=[];t=W w;Q(g=0;g<B.P;g++)r=B[g],t.9P(r)&&k.M(r);q.fo=k;g={};k=[];Q(K n in X)"57"!=1g X[n]&&(g[n]=X[n]),k.M(n);g.rc=k;g.am=X.am();S{g.an=X.an()}T(m){}q.n=g;K a,c;g=X.1O.4c();(c=g.1V(/rv:([\\d.]+)\\) rd re/))&&(a=c[1]);(c=g.1V(/5t ([\\d.]+)/))&&(a=c[1]);c=[];if(a)Q(a="8e.2f;8f.8g;4k.4k;4l.4l.1;4m.4m;3n.8h;3n.3m;2f.8i;4n.4n;8j.8k.1;2g;2g.2g(4o) 4p 2r (32-4q);4r.4r(4o) 4p 2r (32-4q);5N.2g 5O 2r;5K.5L;4t.5M;4u.4u;4s.4s;4v.4v;8m.8n".1P(";"),g=0;g<a.P;g++){K b=a[g];S{K e=W 2S(b);(f={}).1v=b;S{f.2j=e.rf("$2j")}T(m){}S{f.2j=e.rg()}T(m){}f.2j&&0<f.2j.P||(f.2j="");c.M(f)}T(m){}}1q{a=X.5H;K f={};Q(g=0;g<a.P;g++)f[(b=a[g]).1v]=1,c.M(x(b));Q(g=0;g<A.P;g++)e=A[g],f[e]||(b=a[e])&&c.M(x(b))}e="rh ri 4h rj rk rl 2b 2c rm rn ro rp".1P(" ");b={};Q(g=0;e.P>g;g++)f=e[g],U 0!==1J[f]&&(b[f]=1J[f]);e=["rq","rr","rs"];a={};Q(g=0;e.P>g;g++)f=e[g],U 0!==1a[f]&&(a[f]=1a[f]);q.p=c;q.w=a;q.s=b;q.rt=z;q.ru=u.5E();q.rw=y.rx().1j("|");q.ry="";u={};S{u.4G=X.rz,u.3B=!!1a.3B,u.3A=!!1a.3A,u.5V=!!1a.5V,u.2I=!!1a.2I}T(m){}L q.rA=u,q.6l.rB=6C,q.6l.rC=(W 1z).1X(),j.2k(q)}},3T="",1k=1d,3f=1d,2l="",1w="",2u=!1,2v={},6r;!J(){3p&&(1k=W 9i,3f="1x"!=1g 2a&&2a.2X?W 2a.2X:W 7l,1k.2O("3P",J(p){U 0!=p&&1d!=p&&32<=p.P&&(1w=p,2u=!0)}),3f.2O(J(p){2l=p}),1W.1h(),U 0!==1c.1E&&1c.1E?3o(4R,5S):4R())}()};', 62, 1713, '|||||||||||||||||||this||||||||||||||||||||||||||function|var|return|push|indexOf|255|length|for|charCodeAt|try|catch|void|65535|new|navigator|getShaderPrecisionFormat|getParameter|||||||||_ec||window|Plugin|document|null|extend|x64Xor|typeof|init|substring|join|_JdJrRiskClientStorage|case|Fa|VERTEX_SHADER|FRAGMENT_SHADER|toString|else|sigBytes|charAt|windows|options|name|_JdEid|undefined|words|Date|String|fromCharCode|jdtdstorage_local_storage|x64LeftShift|body|cfg|precision|x64Multiply|parse|screen|rangeMin|rangeMax|MT|Plug|userAgent|split|win|MSIE|string|createElement|call|match|td_collect|getTime|Math|clone|||||||||reset|128|module|height|width||canvas|PDF|RealPlayer|style|x64Add|version|tdencrypt|_JdJrTdRiskFpInfo|appendChild|JDDSecCryptoJS|stringify|4294967295|NA|Control|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|plugin|_eidFlag|_JdTdudfp|com|lib|prototype|enc|_data|blockSize|mode|u6d4f|u89c8|u5668|map|openDatabase|indexedDB|fillStyle|x64Rotl|domain|color|Gothic|get|jd_shadow__|_CurrentPageProtocol|_JdJrTdRiskDomainName|ActiveXObject|random|create|slice|_process|exports|webgl|getContext|||||HIGH_FLOAT|MEDIUM_FLOAT|LOW_FLOAT|HIGH_INT|MEDIUM_INT|LOW_INT|idbData|value|Update||Web|_JdJrTdRiskFp|location|_CurrentPageUrl|_url_query_str|jd_risk_token_id|encodeURIComponent|html|XMLHTTP|Msxml2|setTimeout|_jd_load_td_finger_flag|_jdfp_canvas_md5|_jdfp_webgl_md5|use_breakcollect|parseInt|_append|finalize|padding|_hash|00000000|language|sessionStorage|localStorage|isNaN|description|rgb|arc|PI|getExtension|_jdtdstorage|dbData|innerHTML|Script|In|Browser|Google|3AB9D23F7A4B3C9B|pin|_jdJrTdCommonsObtainPin|https|_JdJrRiskClientCollectData|set|jdJrTdsendJsonpRequest|hasOwnProperty|WordArray|substr|_doReset||_doFinalize|_createHelper|algo|createEncryptor||_ENC_XFORM_MODE|||encrypt|pad|mac|toLowerCase|ucweb|mobile|forEach|replace|colorDepth|addBehavior|platform|AgControl|DevalVRXCtrl|MacromediaFlashPaper|QuickTime|tm|ActiveX|bit|RealVideo|SWCtl|Shell|ShockwaveFlash|TDCCtl|display|fill|vec2|attrVertex|varyinTexCoordinate|userData|createElem|jdtdstorage|NOT|result|cookie|00|_ec_rgb_link|getComputedStyle|candidate|toJson|3432918353|461845907|23IL|N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX|xeBjkltDEmn89|td_collect_exe|gia_fp_qd_uuid|jdtdstorage_cookie|_|JSON|_jdJrTdRelationEidPin|_JdJrReleaseResource|Microsoft|src||getElementById|removeChild|throw||Error||object|_root_domain|exec|mixIn|apply|concat|clamp|switch|floor|Hex|Utf8|_nDataBytes|_minBufferSize|_doProcessBlock|_xformMode|_iv|AES|SHA1|ipad|iphone|midp|android|msie|Firefox|safari|chrome|nativeForEach|nativeMap|browserRedirect|sessionStorageKey|localStorageKey|indexedDbKey|addBehaviorKey|getTimezoneOffset|close|isCanvasSupported|plugins|type|suffixes|Scripting|Dictionary|UIHelper|rmocx|G2|font|beginPath|closePath|100|uniformOffset|x64Fmix|globalStorage|cookieData|localData|globalData|sessionData||getFromStr||||setAttribute|transaction|executeSql|cache|NULL|visited|none|FF0000|defaultView|Adobe|Sans|Bold|Citrix|Client|plug|DivX|ts|getData|protocol|collect|jdJrTdsendCorsRequest|eid|_jd_e_joint_|orderId|open|UTF|200|script|userdata_el|parentNode|getJdEid|JdJrTdFingerDataStream|jd_jr_td_risk_pin|start_time|gia|href|500|joybuy|_jd_load_td_finger_switch|Base|super|arguments|ceil|4294967296|UUID|generateUuid|break|BufferedBlockAlgorithm|Hasher|_createHmacHelper|Cipher|_key|keySize|Encryptor|_cipher|CBC|processBlock|_prevBlock|encryptBlock|Pkcs7|unpad|BlockCipher||_mode|formatter|format|ciphertext|256|257|16843008|_nRounds|_keySchedule|_doCryptBlock|1732584193|271733878|Base32|_map|JDDMAC|JdJrTdRiskFinger|linux|unix|sun|ibm|aix|hpux|SymbianOS|firefox|opera|applewebkit|u641c|u72d7|Array|userAgentKey|languageKey|colorDepthKey|screenResolutionKey|timezoneOffsetKey|openDatabaseKey|cpuClassKey|platformKey|hardwareConcurrencyKey|audioKey|doNotTrackKey|pluginsKey|canvasKey|webglKey|x64hash128|replaceAll|getScreenResolution|excludeSessionStorage|hasSessionStorage|hasLocalStorage|hasIndexedDB|cpu|getNavigatorCpuClass|getNavigatorPlatform|getHardwareConcurrency|track|getDoNotTrack||cfjrrval|cfvalmdjrr|timecfjrr|864E5|getCanvasFp|jrrwebglv|webglvmdjrr|timejrrwg|getWebglFp|webglFp|isIE|getIEPluginsString|getRegularPluginsString|AcroPDF|Adodb|Stream|DOMDocument|PdfCtrl|QuickTimeCheckObject|QuickTimeCheck|Skype|WMPlayer|OCX|cpuClass|hardwareConcurrency|doNotTrack|msDoNotTrack|rect|evenodd|yes|fillText|Cwwm|fjorddbank|glbyphs|veext|qtuiz|ud83d|ude03|Arial|toDataURL|getWebglCanvas|ARRAY_BUFFER|itemSize|numItems|createShader|shaderSource|varying|main|vec4|compileShader|attachShader|vertexPosAttrib|offsetUniform|extensions|getSupportedExtensions|RENDERER|SHADING_LANGUAGE_VERSION|VENDOR|VERSION|WEBGL_debug_renderer_info|wuv|||UNMASKED_VENDOR_WEBGL||wur||UNMASKED_RENDERER_WEBGL|u00a7|||appName|experimental|each|history|java|tests|baseurl|asseturi|JDJRTDLOCALSTORAGE|jdtdstorage_database_storage|jdtdstorage_indexdb_storage|jdtdstorage_userdata|jdtdstorage_global_storage|jdtdstorage_session_storage|jdtdstorage_window|mozIndexedDB|webkitIndexedDB|msIndexedDB|div|getItem|setItem|TEXT|rows||onsuccess|getHost||_utf8_encode|_utf8_decode|224|visibility|hidden|expires|path|styleSheet|_getRGB|getPropertyValue|mozRTCPeerConnection|iceServers|stun|serif|checkSupportFont|filename|mimeTypes|Condensed|Light|Std|FB|Serif|Old|Style|ITC|Lucida|MS|NPAPI|Media|Launcher|Detector|Helper|Player|ESN|Downloader||Earth|Harmony|LogMeIn|TV|WebKit|Viewer|Yandex|2246822507|3266489909|documentMode|compatMode|javaEnabled|taintEnabled|oid|qd_uid|jtb|fcf|XMLHttpRequest|Msxml3|POST|timeout|1500|setRequestHeader|Content|Type|application|www|form|urlencoded|charset|onreadystatechange|readyState|status|responseText|send|callEidfingerRisk_3AB9D23F7A4B3C9B|callback|must|120|date|token|jstub|sourceCode|can|not|opt|stream|http|__fp_domain|net|499|xxxxxxxx|xxxx|4xxx|yxxx|xxxxxxxxxxxx|Latin1|decodeURIComponent|escape|Malformed|data|unescape|max|min|splice||update|HMAC|Base64|EvpKDF|process|ivSize|_DEC_XFORM_MODE|BlockCipherMode|createDecryptor|CipherParams|SerializableCipher|key|algorithm|_parse|283|16843009|65537|_invKeySchedule|4023233417|2562383102|3285377520|1518500249|1859775393|1894007588|899497514|HmacSHA1|625|ABCDEFGHIJKLMNOPQRSTUVWXYZ234567|77073096|EE0E612C|990951BA|076DC419|706AF48F|E963A535|9E6495A3|0EDB8832|79DCB8A4|E0D5E91E|97D2D988|09B64C2B|7EB17CBD|E7B82D07|90BF1D91|1DB71064|6AB020F2|F3B97148|84BE41DE|1ADAD47D|6DDDE4EB|F4D4B551|83D385C7|136C9856|646BA8C0|FD62F97A|8A65C9EC|14015C4F|63066CD9||FA0F3D63|8D080DF5|3B6E20C8||4C69105E|D56041E4|A2677172|3C03E4D1|4B04D447|D20D85FD|A50AB56B|35B5A8FA||42B2986C|DBBBC9D6|ACBCF940|32D86CE3|45DF5C75||DCD60DCF|ABD13D59||26D930AC|51DE003A|C8D75180|BFD06116|21B4F4B5|56B3C423|CFBA9599|B8BDA50F|2802B89E|5F058808|C60CD9B2|B10BE924|2F6F7C87|58684C11|C1611DAB|B6662D3D|76DC4190|01DB7106|98D220BC|EFD5102A|71B18589|06B6B51F|9FBFE4A5|E8B8D433|7807C9A2|0F00F934|9609A88E|E10E9818|7F6A0DBB|086D3D2D|91646C97|E6635C01|6B6B51F4|1C6C6162|856530D8|F262004E|6C0695ED|1B01A57B|8208F4C1|F50FC457|65B0D9C6|12B7E950|8BBEB8EA|FCB9887C|62DD1DDF|15DA2D49|8CD37CF3|FBD44C65|4DB26158|3AB551CE|A3BC0074|D4BB30E2|4ADFA541||3DD895D7|A4D1C46D|D3D6F4FB|4369E96A|346ED9FC|AD678846|DA60B8D0|44042D73|33031DE5|AA0A4C5F|DD0D7CC9|5005713C|270241AA|BE0B1010|C90C2086|5768B525|206F85B3|B966D409|CE61E49F|5EDEF90E|29D9C998|B0D09822|C7D7A8B4|59B33D17|2EB40D81|B7BD5C3B|C0BA6CAD|EDB88320|9ABFB3B6|03B6E20C|74B1D29A|EAD54739|9DD277AF|04DB2615|73DC1683|E3630B12|94643B84|0D6D6A3E|7A6A5AA8|E40ECF0B|9309FF9D|0A00AE27|7D079EB1|F00F9344|8708A3D2|1E01F268|6906C2FE|F762575D|806567CB|196C3671|6E6B06E7|FED41B76|89D32BE0|10DA7A5A|67DD4ACC|F9B9DF6F|8EBEEFF9|17B7BE43|60B08ED5|D6D6A3E8|A1D1937E|38D8C2C4|4FDFF252|D1BB67F1|A6BC5767|3FB506DD|48B2364B|D80D2BDA|AF0A1B4C|36034AF6|41047A60|DF60EFC3|A867DF55|316E8EEF|4669BE79|CB61B38C|BC66831A|256FD2A0|5268E236|CC0C7795|BB0B4703|220216B9|5505262F|C5BA3BBE|B2BD0B28|2BB45A92|5CB36A04|C2D7FFA7|B5D0CF31|2CD99E8B|5BDEAE1D|9B64C2B0|EC63F226|756AA39C|026D930A|9C0906A9|EB0E363F|72076785|05005713|95BF4A82|E2B87A14|7BB12BAE|0CB61B38|92D28E9B|E5D5BE0D|7CDCEFB7|0BDBDF21|86D3D2D4|F1D4E242|68DDB3F8|1FDA836E||81BE16CD|F6B9265B|6FB077E1|18B74777|88085AE6|FF0F6A70|66063BCA|11010B5C|8F659EFF|F862AE69|616BFFD3|||166CCF45|A00AE278|D70DD2EE|4E048354|3903B3C2|A7672661|D06016F7|4969474D|3E6E77DB|AED16A4A|D9D65ADC|40DF0B66|37D83BF0|A9BCAE53|DEBB9EC5|47B2CF7F|30B5FFE9|BDBDF21C|CABAC28A|53B39330|24B4A3A6|BAD03605|CDD70693|54DE5729|23D967BF|B3667A2E|C4614AB8|5D681B02|2A6F2B94|B40BBE37|C30C8EA1|5A05DF1B|2D02EF8D|toUpperCase|JD1|30313233343536373839616263646566|4c5751554935255042304e6458323365|async|271733879|1732584194|680876936|389564586|606105819|1044525330|176418897|1200080426|1473231341|45705983|1770035416|1958414417|42063|1990404162|1804603682|40341101|1502002290|1236535329|165796510||1069501632|643717713|373897302|701558691|38016083|660478335|405537848|568446438|1019803690|187363961|1163531501|1444681467|51403784|1735328473|1926607734|378558|2022574463|1839030562|35309556|1530992060|1272893353|155497632|1094730640|681279174|358537222|722521979|76029189|640364487|421815835|530742520|995338651|198630844|1126891415|1416354905|57434055|1700485571|1894986606|1051523|2054922799|1873313359|30611744|1560198380|1309151649|145523070|1120210379|718787259|343485551|0123456789ABCDEF|0123456789abcdef|browserLanguage|2000|NT|xp|powerpc|powerPC|netbsd|NetBSD|bsd|BSD|osf1|OSF1|irix|IRIX|freebsd|FreeBSD|symbianos|Opera|applewebkit_chrome|sogoumobilebrowser|u624b|u673a|ucbrowser|UC|qqbrowser|tencenttraveler|QQ|metasr|360se|360|the|world|u4e16|u754c|u4e4b|u7a97|maxthon|u9068|u6e38|osVersion|browser|browserVersion|excludeUserAgent|origin|excludeLanguage|excludeColorDepth|excludeScreenResolution|screenResolution|detectScreenOrientation|excludeTimezoneOffset|timezoneOffset|excludeIndexedDB|indexedDb|excludeAddBehavior|excludeOpenDatabase|excludeCpuClass|ccn|AudioContext|webkitAudioContext|sampleRate|asr|excludeDoNotTrack|excludeCanvas|excludeWebGL|Detection|oscpu||||2E3|inline|isPointInPath|textBaseline|alphabetic|f60|fillRect||125|069|11pt|real|123|rgba|102||204|18pt|globalCompositeOperation|multiply|cfp|clearColor|enable|DEPTH_TEST|depthFunc|LEQUAL|clear|COLOR_BUFFER_BIT|DEPTH_BUFFER_BIT|createBuffer|bindBuffer|Float32Array|732134444|bufferData|STATIC_DRAW|createProgram|attribute|uniform|gl_Position|mediump|float|gl_FragColor|linkProgram|useProgram|getAttribLocation|getUniformLocation|enableVertexAttribArray|vertexPosArray|vertexAttribPointer|FLOAT|uniform2f|drawArrays|TRIANGLE_STRIP|w1|ALIASED_LINE_WIDTH_RANGE|w2|ALIASED_POINT_SIZE_RANGE|w3|ALPHA_BITS||w4|getContextAttributes|antialias|w5|BLUE_BITS|w6|DEPTH_BITS|w7|GREEN_BITS|w8|EXT_texture_filter_anisotropic|WEBKIT_EXT_texture_filter_anisotropic|MOZ_EXT_texture_filter_anisotropic|MAX_TEXTURE_MAX_ANISOTROPY_EXT|w9|MAX_COMBINED_TEXTURE_IMAGE_UNITS|w10|MAX_CUBE_MAP_TEXTURE_SIZE|w11|MAX_FRAGMENT_UNIFORM_VECTORS|w12|MAX_RENDERBUFFER_SIZE|w13|MAX_TEXTURE_IMAGE_UNITS|w14|MAX_TEXTURE_SIZE|w15|MAX_VARYING_VECTORS|w16|MAX_VERTEX_ATTRIBS|w17|MAX_VERTEX_TEXTURE_IMAGE_UNITS|w18|MAX_VERTEX_UNIFORM_VECTORS|w19|MAX_VIEWPORT_DIMS|w20|RED_BITS|w21|w22|w23|STENCIL_BITS|w24|w25|w26|w27|w28|w29|w30|w31|w32|w33|w34|w35|w36|w37|w38|w39|w40|w41|w42|w43|w44|w45|w46|w47|w48|w49|w50|w51|w52|w53|w54|w55|w56|w57|w58|w59|w60|w61|Internet|Explorer|Netscape|Trident|test|4283543511|3981806797|3301882366|444984403|2277735313|289559509|1291169091|658871167|1390208809|944331445|Image|silverlight|windowData|behavior|url|default|load|getAttribute|save|jdtdstorage_lso|jdtdstorage_png|sqlite_jdtdstorage|1048576|CREATE|TABLE|IF|EXISTS|INTEGER|PRIMARY|KEY|AUTOINCREMENT|UNIQUE|INSERT|OR|REPLACE|INTO|VALUES|SELECT|FROM|WHERE|item|IDBTransaction|webkitIDBTransaction|msIDBTransaction|IDBKeyRange|webkitIDBKeyRange|msIDBKeyRange|idb_jdtdstorage|onerror|onupgradeneeded|createObjectStore|keyPath|readwrite|objectStore|put|oncomplete|jdtdstorage_silverlight|encode|decode|Za|z0|127|2048|192|191|jdtdstorage_history|position|absolute|createIframe|iframe|Mon|Sep|2010|UTC|setTime|2592E7|toUTCString|host|toHex|fromHex|0x|hasVisited|createTextNode|currentStyle|_testURL|ff0000|webkitRTCPeerConnection|RTCPeerConnection|urls|services|mozilla|createDataChannel|chat|reliable|onicecandidate|createOffer|setLocalDescription|localDescription|sdp|fontFamily|offsetHeight||offsetWidth|monospace|sans|span|fontSize|72px|mmmmmmmmmmlli|Abadi|Fangsong|Hebrew|Ming|Agency|Arab|Arabic|Typesetting|Black|Batang|Bauhaus|Bell|Bitstream|Vera|Bodoni|Bookman|Braggadocio|Broadway|Calibri|Californian|Castellar|Casual|Centaur|Century|Chalkduster|Colonna|Copperplate|DejaVu|LGC|Mono|Desdemona|DFKai|SB|Dotum|Engravers|Eras|Eurostile|FangSong|Forte|Franklin|Heavy|French|Gabriola|Gigi|Gisha|Goudy|Gulim|GungSeo|Haettenschweiler|Harrington|Hiragino|GB|Impact|Informal|Roman|KacstOne|Kino|Kozuka|Pr6N|Lohit|Gujarati|Loma|Bright|Fax||Magneto|Malgun|Matura|Capitals||Menlo|MingLiU|ExtB|MoolBoran|PMincho|Reference|News|Niagara|Solid|Nyala|Palace|Papyrus|Perpetua|Playbill|PMingLiU|Rachana|Rockwell|Sawasdee|Segoe|Print|Showcard|SimHei|Snap|TlwgMono|Tw|Cen|Extra|Ubuntu|Umpush|Univers|Utopia|Vladimir|Wide|Latin|4game|AdblockPlugin|AdobeExManCCDetect|AdobeExManDetect|Alawar|utils|Aliedit|Alipay|Security|AliSSOLogin|AmazonMP3DownloaderPlugin|AOL|Playback|AppUp|ArchiCAD|AVG|SiteSafety|Babylon|ToolBar|Battlelog|Game|BitCometAgent|Bitdefender|QuickScan|BlueStacks|Install||CatalinaGroup|ICA|online|Receiver|Coowon|DealPlyLive|Default|Plus|VOD|doubleTwist|Downloaders|downloadUpdater|eMusicPlugin|DLM6|Launch|Mozilla|Sonar|API|Exif|Everywhere|Facebook|File|FileLab|FlyOrDie|Games|Folx|FUZEShare|GDL|Object|GFACE|Ginger|Gnome|Integration|Gears|Talk|Effects|Heroes|Generals|live|HPDetect|Html5|provider|IE|Tab|iGetterScriptablePlugin||iMesh|Kaspersky|Password|Manager|LastPass|935|961|Ma|Config|Office|2013|MinibarPlugin|Native|Nitro|Nokia|Suite|Enabler|Norton|Identity|Safe|npAPI|NPLastPass|NPPlayerShell|npTongbuAddin|NyxLauncher|Octoshape|Streaming|Services|Online|Storage|Orbit|Pando|Parom|player|integrado|XChange|PhotoCenterPlugin1|Picasa|PlayOn|QQ2013|QQDownload|QQMiniDL|QQMusic|RealDownloader|Roblox|RockMelt|Safer|SafeSearch|SefClient|Silverlight|Simple|Pass|SumatraPDF|Symantec|PKI|Tencent|FTN|Thunder|DapCtrl|TorchHelper|Unity|Uplay|PC|VDownloader|Veetle|Core|VLC||Multimedia|Components|integrierte|WEBZEN|Extension|Wolfram|Mathematica|WordCaptureX|WPI||YouTube|zako|minHash|27492|58964|while|ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText|tdHash|webglHash|WebGLRenderingContext|moz|webkit|stencil|contextName|webglversion|shadingLV|vendor|renderer|enumerationOrder|like|gecko|GetVariable|GetVersions|availHeight|availWidth|bufferDepth|deviceXDPI|deviceYDPI|logicalXDPI|logicalYDPI|pixelDepth|updateInterval|devicePixelRatio|screenTop|screenLeft|sc|tz||lil|sort|wil|cookieEnabled|ss|deviceTime|deviceEndTime'.split('|'), 0, {}))
