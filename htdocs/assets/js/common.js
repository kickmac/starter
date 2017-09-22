/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

	__webpack_require__(9);

	__webpack_require__(10);

	var _pcsp = __webpack_require__(11);

	var _pcsp2 = _interopRequireDefault(_pcsp);

	var _anchorJump = __webpack_require__(12);

	var _anchorJump2 = _interopRequireDefault(_anchorJump);

	var _accordion = __webpack_require__(13);

	var _accordion2 = _interopRequireDefault(_accordion);

	var _smoothScroll = __webpack_require__(14);

	var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//_modules
	(0, _jquery2.default)(function () {

		_pcsp2.default.init();

		/*************************************************************************************
	 * window load
	 *************************************************************************************/
		(0, _jquery2.default)(window).on('load', function (event) {
			_anchorJump2.default.init();
			_accordion2.default.init();
		});

		/*************************************************************************************
	 * window load & resize
	 *************************************************************************************/
		(0, _jquery2.default)(window).on('load resizeend', function (event) {
			_pcsp2.default.init();
			_jquery2.default.fn.matchHeight._update();
		});

		/*************************************************************************************
	 * window resize
	 *************************************************************************************/
		(0, _jquery2.default)(window).on('resizeend', function (event) {
			_accordion2.default.reinit();
		});

		/*************************************************************************************
	 * pcspのbreakpointが切り替わったとき
	 *************************************************************************************/
		(0, _jquery2.default)(window).on('pcsp.changed', function (event, mode) {
			console.log(_pcsp2.default.getMode());
		});

		/*************************************************************************************
	 * クリックイベント
	 *************************************************************************************/
		(0, _jquery2.default)(document).on('click', '[href^=#]', function (event) {
			event.preventDefault();
			_smoothScroll2.default.scroll.call((0, _jquery2.default)(this));
		});
		(0, _jquery2.default)(document).on('click', '[data-acc-btn], [data-acc-close]', function (event) {
			event.preventDefault();
			_accordion2.default.toggle.call((0, _jquery2.default)(this));
		});

		/*************************************************************************************
	 * その他イベント
	 *************************************************************************************/

		/*************************************************************************************
	 * プラグイン
	 *************************************************************************************/
		//modal
		(0, _jquery2.default)('[data-modal]').lightGallery({
			selector: 'this',
			download: false,
			counter: false,
			zoom: true
		});

		//modal-gallery
		(0, _jquery2.default)('[data-modal-gallerys]').lightGallery({
			selector: (0, _jquery2.default)(this).find('[data-modal-gallery]'),
			download: false,
			counter: true,
			zoom: true
		});
	});

	//plugins

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! lightgallery - v1.3.6 - 2016-11-18
	* http://sachinchoolur.github.io/lightGallery/
	* Copyright (c) 2016 Sachin N; Licensed GPLv3 */
	!function (a, b) {
	   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a) {
	    return b(a);
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b(require("jquery")) : b(a.jQuery);
	}(undefined, function (a) {
	  !function () {
	    "use strict";
	    function b(b, d) {
	      if (this.el = b, this.$el = a(b), this.s = a.extend({}, c, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this;
	    }var c = { mode: "lg-slide", cssEasing: "ease", easing: "linear", speed: 600, height: "100%", width: "100%", addClass: "", startClass: "lg-start-zoom", backdropDuration: 150, hideBarsDelay: 6e3, useLeft: !1, closable: !0, loop: !0, escKey: !0, keyPress: !0, controls: !0, slideEndAnimatoin: !0, hideControlOnEnd: !1, mousewheel: !0, getCaptionFromTitleOrAlt: !0, appendSubHtmlTo: ".lg-sub-html", subHtmlSelectorRelative: !1, preload: 1, showAfterLoad: !0, selector: "", selectWithin: "", nextHtml: "", prevHtml: "", index: !1, iframeMaxWidth: "100%", download: !0, counter: !0, appendCounterTo: ".lg-toolbar", swipeThreshold: 50, enableSwipe: !0, enableDrag: !0, dynamic: !1, dynamicEl: [], galleryId: 1 };b.prototype.init = function () {
	      var b = this;b.s.preload > b.$items.length && (b.s.preload = b.$items.length);var c = window.location.hash;c.indexOf("lg=" + this.s.galleryId) > 0 && (b.index = parseInt(c.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function () {
	        b.build(b.index);
	      }), a("body").addClass("lg-on"))), b.s.dynamic ? (b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function () {
	        b.build(b.index), a("body").addClass("lg-on");
	      })) : b.$items.on("click.lgcustom", function (c) {
	        try {
	          c.preventDefault(), c.preventDefault();
	        } catch (a) {
	          c.returnValue = !1;
	        }b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || b.$items.index(this), a("body").hasClass("lg-on") || (b.build(b.index), a("body").addClass("lg-on"));
	      });
	    }, b.prototype.build = function (b) {
	      var c = this;c.structure(), a.each(a.fn.lightGallery.modules, function (b) {
	        c.modules[b] = new a.fn.lightGallery.modules[b](c.el);
	      }), c.slide(b, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 && (c.arrow(), setTimeout(function () {
	        c.enableDrag(), c.enableSwipe();
	      }, 50), c.s.mousewheel && c.mousewheel()), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
	        c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function () {
	          c.$outer.addClass("lg-hide-items");
	        }, c.s.hideBarsDelay);
	      });
	    }, b.prototype.structure = function () {
	      var b,
	          c = "",
	          d = "",
	          e = 0,
	          f = "",
	          g = this;for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), e = 0; e < this.$items.length; e++) {
	        c += '<div class="lg-item"></div>';
	      }if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'), b = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>", a("body").append(b), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), g.setTop(), a(window).on("resize.lg orientationchange.lg", function () {
	        setTimeout(function () {
	          g.setTop();
	        }, 100);
	      }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
	        var h = this.$outer.find(".lg-inner");h.css("transition-timing-function", this.s.cssEasing), h.css("transition-duration", this.s.speed + "ms");
	      }setTimeout(function () {
	        a(".lg-backdrop").addClass("in");
	      }), setTimeout(function () {
	        g.$outer.addClass("lg-visible");
	      }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(window).scrollTop();
	    }, b.prototype.setTop = function () {
	      if ("100%" !== this.s.height) {
	        var b = a(window).height(),
	            c = (b - parseInt(this.s.height, 10)) / 2,
	            d = this.$outer.find(".lg");b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px");
	      }
	    }, b.prototype.doCss = function () {
	      var a = function a() {
	        var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
	            b = document.documentElement,
	            c = 0;for (c = 0; c < a.length; c++) {
	          if (a[c] in b.style) return !0;
	        }
	      };return !!a();
	    }, b.prototype.isVideo = function (a, b) {
	      var c;if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a && c) return { html5: !0 };var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
	          e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
	          f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
	          g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return d ? { youtube: d } : e ? { vimeo: e } : f ? { dailymotion: f } : g ? { vk: g } : void 0;
	    }, b.prototype.counter = function () {
	      this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>");
	    }, b.prototype.addHtml = function (b) {
	      var c,
	          d,
	          e = null;if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c) if ("undefined" != typeof e && null !== e) {
	        var f = e.substring(0, 1);"." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html());
	      } else e = "";".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), "undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b]);
	    }, b.prototype.preload = function (a) {
	      var b = 1,
	          c = 1;for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) {
	        this.loadContent(a + b, !1, 0);
	      }for (c = 1; c <= this.s.preload && !(a - c < 0); c++) {
	        this.loadContent(a - c, !1, 0);
	      }
	    }, b.prototype.loadContent = function (b, c, d) {
	      var e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = this,
	          l = !1,
	          m = function m(b) {
	        for (var c = [], d = [], e = 0; e < b.length; e++) {
	          var g = b[e].split(" ");"" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1]);
	        }for (var h = a(window).width(), i = 0; i < c.length; i++) {
	          if (parseInt(c[i], 10) > h) {
	            f = d[i];break;
	          }
	        }
	      };if (k.s.dynamic) {
	        if (k.s.dynamicEl[b].poster && (l = !0, g = k.s.dynamicEl[b].poster), j = k.s.dynamicEl[b].html, f = k.s.dynamicEl[b].src, k.s.dynamicEl[b].responsive) {
	          var n = k.s.dynamicEl[b].responsive.split(",");m(n);
	        }h = k.s.dynamicEl[b].srcset, i = k.s.dynamicEl[b].sizes;
	      } else {
	        if (k.$items.eq(b).attr("data-poster") && (l = !0, g = k.$items.eq(b).attr("data-poster")), j = k.$items.eq(b).attr("data-html"), f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src"), k.$items.eq(b).attr("data-responsive")) {
	          var o = k.$items.eq(b).attr("data-responsive").split(",");m(o);
	        }h = k.$items.eq(b).attr("data-srcset"), i = k.$items.eq(b).attr("data-sizes");
	      }var p = !1;k.s.dynamic ? k.s.dynamicEl[b].iframe && (p = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (p = !0);var q = k.isVideo(f, b);if (!k.$slide.eq(b).hasClass("lg-loaded")) {
	        if (p) k.$slide.eq(b).prepend('<div class="lg-video-cont" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');else if (l) {
	          var r = "";r = q && q.youtube ? "lg-has-youtube" : q && q.vimeo ? "lg-has-vimeo" : "lg-has-html5", k.$slide.eq(b).prepend('<div class="lg-video-cont ' + r + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>');
	        } else q ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), k.$el.trigger("hasVideo.lg", [b, f, j])) : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');if (k.$el.trigger("onAferAppendSlide.lg", [b]), e = k.$slide.eq(b).find(".lg-object"), i && e.attr("sizes", i), h) {
	          e.attr("srcset", h);try {
	            picturefill({ elements: [e[0]] });
	          } catch (a) {
	            console.error("Make sure you have included Picturefill version 2");
	          }
	        }".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b), k.$slide.eq(b).addClass("lg-loaded");
	      }k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function () {
	        var c = 0;d && !a("body").hasClass("lg-from-hash") && (c = d), setTimeout(function () {
	          k.$slide.eq(b).addClass("lg-complete"), k.$el.trigger("onSlideItemLoad.lg", [b, d || 0]);
	        }, c);
	      }), q && q.html5 && !l && k.$slide.eq(b).addClass("lg-complete"), c === !0 && (k.$slide.eq(b).hasClass("lg-complete") ? k.preload(b) : k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function () {
	        k.preload(b);
	      }));
	    }, b.prototype.slide = function (b, c, d) {
	      var e = this.$outer.find(".lg-current").index(),
	          f = this;if (!f.lGalleryOn || e !== b) {
	        var g = this.$slide.length,
	            h = f.lGalleryOn ? this.s.speed : 0,
	            i = !1,
	            j = !1;if (!f.lgBusy) {
	          if (this.s.download) {
	            var k;k = f.s.dynamic ? f.s.dynamicEl[b].downloadUrl !== !1 && (f.s.dynamicEl[b].downloadUrl || f.s.dynamicEl[b].src) : "false" !== f.$items.eq(b).attr("data-download-url") && (f.$items.eq(b).attr("data-download-url") || f.$items.eq(b).attr("href") || f.$items.eq(b).attr("data-src")), k ? (a("#lg-download").attr("href", k), f.$outer.removeClass("lg-hide-download")) : f.$outer.addClass("lg-hide-download");
	          }if (this.$el.trigger("onBeforeSlide.lg", [e, b, c, d]), f.lgBusy = !0, clearTimeout(f.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
	            f.addHtml(b);
	          }, h), this.arrowDisable(b), c) {
	            var l = b - 1,
	                m = b + 1;0 === b && e === g - 1 ? (m = 0, l = g - 1) : b === g - 1 && 0 === e && (m = 0, l = g - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), f.$slide.eq(l).addClass("lg-prev-slide"), f.$slide.eq(m).addClass("lg-next-slide"), f.$slide.eq(b).addClass("lg-current");
	          } else f.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), b < e ? (j = !0, 0 !== b || e !== g - 1 || d || (j = !1, i = !0)) : b > e && (i = !0, b !== g - 1 || 0 !== e || d || (j = !0, i = !1)), j ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")) : i && (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(e).addClass("lg-prev-slide")), setTimeout(function () {
	            f.$slide.removeClass("lg-current"), f.$slide.eq(b).addClass("lg-current"), f.$outer.removeClass("lg-no-trans");
	          }, 50);f.lGalleryOn ? (setTimeout(function () {
	            f.loadContent(b, !0, 0);
	          }, this.s.speed + 50), setTimeout(function () {
	            f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d]);
	          }, this.s.speed)) : (f.loadContent(b, !0, f.s.backdropDuration), f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])), f.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1);
	        }
	      }
	    }, b.prototype.goToNextSlide = function (a) {
	      var b = this;b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-right-end"), setTimeout(function () {
	        b.$outer.removeClass("lg-right-end");
	      }, 400)));
	    }, b.prototype.goToPrevSlide = function (a) {
	      var b = this;b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-left-end"), setTimeout(function () {
	        b.$outer.removeClass("lg-left-end");
	      }, 400)));
	    }, b.prototype.keyPress = function () {
	      var b = this;this.$items.length > 1 && a(window).on("keyup.lg", function (a) {
	        b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()));
	      }), a(window).on("keydown.lg", function (a) {
	        b.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy());
	      });
	    }, b.prototype.arrow = function () {
	      var a = this;this.$outer.find(".lg-prev").on("click.lg", function () {
	        a.goToPrevSlide();
	      }), this.$outer.find(".lg-next").on("click.lg", function () {
	        a.goToNextSlide();
	      });
	    }, b.prototype.arrowDisable = function (a) {
	      !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"));
	    }, b.prototype.setTranslate = function (a, b, c) {
	      this.s.useLeft ? a.css("left", b) : a.css({ transform: "translate3d(" + b + "px, " + c + "px, 0px)" });
	    }, b.prototype.touchMove = function (b, c) {
	      var d = c - b;Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0));
	    }, b.prototype.touchEnd = function (a) {
	      var b = this;"lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function () {
	        b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style");
	      }), setTimeout(function () {
	        b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide");
	      }, b.s.speed + 100);
	    }, b.prototype.enableSwipe = function () {
	      var a = this,
	          b = 0,
	          c = 0,
	          d = !1;a.s.enableSwipe && a.isTouch && a.doCss() && (a.$slide.on("touchstart.lg", function (c) {
	        a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX);
	      }), a.$slide.on("touchmove.lg", function (e) {
	        a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0);
	      }), a.$slide.on("touchend.lg", function () {
	        a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"));
	      }));
	    }, b.prototype.enableDrag = function () {
	      var b = this,
	          c = 0,
	          d = 0,
	          e = !1,
	          f = !1;b.s.enableDrag && !b.isTouch && b.doCss() && (b.$slide.on("mousedown.lg", function (d) {
	        b.$outer.hasClass("lg-zoomed") || (a(d.target).hasClass("lg-object") || a(d.target).hasClass("lg-video-play")) && (d.preventDefault(), b.lgBusy || (b.manageSwipeClass(), c = d.pageX, e = !0, b.$outer.scrollLeft += 1, b.$outer.scrollLeft -= 1, b.$outer.removeClass("lg-grab").addClass("lg-grabbing"), b.$el.trigger("onDragstart.lg")));
	      }), a(window).on("mousemove.lg", function (a) {
	        e && (f = !0, d = a.pageX, b.touchMove(c, d), b.$el.trigger("onDragmove.lg"));
	      }), a(window).on("mouseup.lg", function (g) {
	        f ? (f = !1, b.touchEnd(d - c), b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"), e && (e = !1, b.$outer.removeClass("lg-grabbing").addClass("lg-grab"));
	      }));
	    }, b.prototype.manageSwipeClass = function () {
	      var a = this.index + 1,
	          b = this.index - 1,
	          c = this.$slide.length;this.s.loop && (0 === this.index ? b = c - 1 : this.index === c - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide");
	    }, b.prototype.mousewheel = function () {
	      var a = this;a.$outer.on("mousewheel.lg", function (b) {
	        b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault());
	      });
	    }, b.prototype.closeGallery = function () {
	      var b = this,
	          c = !1;this.$outer.find(".lg-close").on("click.lg", function () {
	        b.destroy();
	      }), b.s.closable && (b.$outer.on("mousedown.lg", function (b) {
	        c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"));
	      }), b.$outer.on("mouseup.lg", function (d) {
	        (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy());
	      }));
	    }, b.prototype.destroy = function (b) {
	      var c = this;b || c.$el.trigger("onBeforeClose.lg"), a(window).scrollTop(c.prevScrollTop), b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(c.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function (a) {
	        c.modules[a] && c.modules[a].destroy();
	      }), this.lGalleryOn = !1, clearTimeout(c.hideBartimeout), this.hideBartimeout = !1, a(window).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), c.$outer && c.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function () {
	        c.$outer && c.$outer.remove(), a(".lg-backdrop").remove(), b || c.$el.trigger("onCloseAfter.lg");
	      }, c.s.backdropDuration + 50);
	    }, a.fn.lightGallery = function (c) {
	      return this.each(function () {
	        if (a.data(this, "lightGallery")) try {
	          a(this).data("lightGallery").init();
	        } catch (a) {
	          console.error("lightGallery has not initiated properly");
	        } else a.data(this, "lightGallery", new b(this, c));
	      });
	    }, a.fn.lightGallery.modules = {};
	  }();
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! lg-thumbnail - v1.0.0 - 2016-09-20
	* http://sachinchoolur.github.io/lightGallery
	* Copyright (c) 2016 Sachin N; Licensed GPLv3 */
	!function (a, b) {
	   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return b();
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b() : b();
	}(undefined, function () {
	  !function (a, b, c, d) {
	    "use strict";
	    var e = { thumbnail: !0, animateThumb: !0, currentPagerPosition: "middle", thumbWidth: 100, thumbContHeight: 100, thumbMargin: 5, exThumbImage: !1, showThumbByDefault: !0, toogleThumb: !0, pullCaptionUp: !0, enableThumbDrag: !0, enableThumbSwipe: !0, swipeThreshold: 50, loadYoutubeThumbnail: !0, youtubeThumbSize: 1, loadVimeoThumbnail: !0, vimeoThumbSize: "thumbnail_small", loadDailymotionThumbnail: !0 },
	        f = function f(b) {
	      return this.core = a(b).data("lightGallery"), this.core.s = a.extend({}, e, this.core.s), this.$el = a(b), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.left = 0, this.init(), this;
	    };f.prototype.init = function () {
	      var a = this;this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function () {
	        a.core.$outer.addClass("lg-thumb-open");
	      }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb ? (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss() && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss() && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress());
	    }, f.prototype.build = function () {
	      function c(a, b, c) {
	        var d,
	            h = e.core.isVideo(a, c) || {},
	            i = "";h.youtube || h.vimeo || h.dailymotion ? h.youtube ? d = e.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + e.core.s.youtubeThumbSize + ".jpg" : b : h.vimeo ? e.core.s.loadVimeoThumbnail ? (d = "//i.vimeocdn.com/video/error_" + g + ".jpg", i = h.vimeo[1]) : d = b : h.dailymotion && (d = e.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h.dailymotion[1] : b) : d = b, f += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + e.core.s.thumbWidth + "px; margin-right: " + e.core.s.thumbMargin + 'px"><img src="' + d + '" /></div>', i = "";
	      }var d,
	          e = this,
	          f = "",
	          g = "",
	          h = '<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';switch (this.core.s.vimeoThumbSize) {case "thumbnail_large":
	          g = "640";break;case "thumbnail_medium":
	          g = "200x150";break;case "thumbnail_small":
	          g = "100x75";}if (e.core.$outer.addClass("lg-has-thumb"), e.core.$outer.find(".lg").append(h), e.$thumbOuter = e.core.$outer.find(".lg-thumb-outer"), e.thumbOuterWidth = e.$thumbOuter.width(), e.core.s.animateThumb && e.core.$outer.find(".lg-thumb").css({ width: e.thumbTotalWidth + "px", position: "relative" }), this.core.s.animateThumb && e.$thumbOuter.css("height", e.core.s.thumbContHeight + "px"), e.core.s.dynamic) for (var i = 0; i < e.core.s.dynamicEl.length; i++) {
	        c(e.core.s.dynamicEl[i].src, e.core.s.dynamicEl[i].thumb, i);
	      } else e.core.$items.each(function (b) {
	        e.core.s.exThumbImage ? c(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(e.core.s.exThumbImage), b) : c(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), b);
	      });e.core.$outer.find(".lg-thumb").html(f), d = e.core.$outer.find(".lg-thumb-item"), d.each(function () {
	        var b = a(this),
	            c = b.attr("data-vimeo-id");c && a.getJSON("//www.vimeo.com/api/v2/video/" + c + ".json?callback=?", { format: "json" }, function (a) {
	          b.find("img").attr("src", a[0][e.core.s.vimeoThumbSize]);
	        });
	      }), d.eq(e.core.index).addClass("active"), e.core.$el.on("onBeforeSlide.lg.tm", function () {
	        d.removeClass("active"), d.eq(e.core.index).addClass("active");
	      }), d.on("click.lg touchend.lg", function () {
	        var b = a(this);setTimeout(function () {
	          (e.thumbClickable && !e.core.lgBusy || !e.core.doCss()) && (e.core.index = b.index(), e.core.slide(e.core.index, !1, !0));
	        }, 50);
	      }), e.core.$el.on("onBeforeSlide.lg.tm", function () {
	        e.animateThumb(e.core.index);
	      }), a(b).on("resize.lg.thumb orientationchange.lg.thumb", function () {
	        setTimeout(function () {
	          e.animateThumb(e.core.index), e.thumbOuterWidth = e.$thumbOuter.width();
	        }, 200);
	      });
	    }, f.prototype.setTranslate = function (a) {
	      this.core.$outer.find(".lg-thumb").css({ transform: "translate3d(-" + a + "px, 0px, 0px)" });
	    }, f.prototype.animateThumb = function (a) {
	      var b = this.core.$outer.find(".lg-thumb");if (this.core.s.animateThumb) {
	        var c;switch (this.core.s.currentPagerPosition) {case "left":
	            c = 0;break;case "middle":
	            c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;break;case "right":
	            c = this.thumbOuterWidth - this.core.s.thumbWidth;}this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (b.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || b.animate({ left: -this.left + "px" }, this.core.s.speed)) : this.core.doCss() || b.css("left", -this.left + "px"), this.setTranslate(this.left);
	      }
	    }, f.prototype.enableThumbDrag = function () {
	      var c = this,
	          d = 0,
	          e = 0,
	          f = !1,
	          g = !1,
	          h = 0;c.$thumbOuter.addClass("lg-grab"), c.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function (a) {
	        c.thumbTotalWidth > c.thumbOuterWidth && (a.preventDefault(), d = a.pageX, f = !0, c.core.$outer.scrollLeft += 1, c.core.$outer.scrollLeft -= 1, c.thumbClickable = !1, c.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
	      }), a(b).on("mousemove.lg.thumb", function (a) {
	        f && (h = c.left, g = !0, e = a.pageX, c.$thumbOuter.addClass("lg-dragging"), h -= e - d, h > c.thumbTotalWidth - c.thumbOuterWidth && (h = c.thumbTotalWidth - c.thumbOuterWidth), h < 0 && (h = 0), c.setTranslate(h));
	      }), a(b).on("mouseup.lg.thumb", function () {
	        g ? (g = !1, c.$thumbOuter.removeClass("lg-dragging"), c.left = h, Math.abs(e - d) < c.core.s.swipeThreshold && (c.thumbClickable = !0)) : c.thumbClickable = !0, f && (f = !1, c.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"));
	      });
	    }, f.prototype.enableThumbSwipe = function () {
	      var a = this,
	          b = 0,
	          c = 0,
	          d = !1,
	          e = 0;a.core.$outer.find(".lg-thumb").on("touchstart.lg", function (c) {
	        a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(), b = c.originalEvent.targetTouches[0].pageX, a.thumbClickable = !1);
	      }), a.core.$outer.find(".lg-thumb").on("touchmove.lg", function (f) {
	        a.thumbTotalWidth > a.thumbOuterWidth && (f.preventDefault(), c = f.originalEvent.targetTouches[0].pageX, d = !0, a.$thumbOuter.addClass("lg-dragging"), e = a.left, e -= c - b, e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth), e < 0 && (e = 0), a.setTranslate(e));
	      }), a.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
	        a.thumbTotalWidth > a.thumbOuterWidth && d ? (d = !1, a.$thumbOuter.removeClass("lg-dragging"), Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0), a.left = e) : a.thumbClickable = !0;
	      });
	    }, f.prototype.toogle = function () {
	      var a = this;a.core.s.toogleThumb && (a.core.$outer.addClass("lg-can-toggle"), a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
	        a.core.$outer.toggleClass("lg-thumb-open");
	      }));
	    }, f.prototype.thumbkeyPress = function () {
	      var c = this;a(b).on("keydown.lg.thumb", function (a) {
	        38 === a.keyCode ? (a.preventDefault(), c.core.$outer.addClass("lg-thumb-open")) : 40 === a.keyCode && (a.preventDefault(), c.core.$outer.removeClass("lg-thumb-open"));
	      });
	    }, f.prototype.destroy = function () {
	      this.core.s.thumbnail && this.core.$items.length > 1 && (a(b).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"));
	    }, a.fn.lightGallery.modules.Thumbnail = f;
	  }(jQuery, window, document);
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! lg-video - v1.0.0 - 2016-09-20
	* http://sachinchoolur.github.io/lightGallery
	* Copyright (c) 2016 Sachin N; Licensed GPLv3 */
	!function (a, b) {
	   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return b();
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b() : b();
	}(undefined, function () {
	  !function (a, b, c, d) {
	    "use strict";
	    var e = { videoMaxWidth: "855px", youtubePlayerParams: !1, vimeoPlayerParams: !1, dailymotionPlayerParams: !1, vkPlayerParams: !1, videojs: !1, videojsOptions: {} },
	        f = function f(b) {
	      return this.core = a(b).data("lightGallery"), this.$el = a(b), this.core.s = a.extend({}, e, this.core.s), this.videoLoaded = !1, this.init(), this;
	    };f.prototype.init = function () {
	      var b = this;b.core.$el.on("hasVideo.lg.tm", function (a, c, d, e) {
	        if (b.core.$slide.eq(c).find(".lg-video").append(b.loadVideo(d, "lg-object", !0, c, e)), e) if (b.core.s.videojs) try {
	          videojs(b.core.$slide.eq(c).find(".lg-html5").get(0), b.core.s.videojsOptions, function () {
	            b.videoLoaded || this.play();
	          });
	        } catch (a) {
	          console.error("Make sure you have included videojs");
	        } else b.core.$slide.eq(c).find(".lg-html5").get(0).play();
	      }), b.core.$el.on("onAferAppendSlide.lg.tm", function (a, c) {
	        b.core.$slide.eq(c).find(".lg-video-cont").css("max-width", b.core.s.videoMaxWidth), b.videoLoaded = !0;
	      });var c = function c(a) {
	        if (a.find(".lg-object").hasClass("lg-has-poster") && a.find(".lg-object").is(":visible")) if (a.hasClass("lg-has-video")) {
	          var c = a.find(".lg-youtube").get(0),
	              d = a.find(".lg-vimeo").get(0),
	              e = a.find(".lg-dailymotion").get(0),
	              f = a.find(".lg-html5").get(0);if (c) c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");else if (d) try {
	            $f(d).api("play");
	          } catch (a) {
	            console.error("Make sure you have included froogaloop2 js");
	          } else if (e) e.contentWindow.postMessage("play", "*");else if (f) if (b.core.s.videojs) try {
	            videojs(f).play();
	          } catch (a) {
	            console.error("Make sure you have included videojs");
	          } else f.play();a.addClass("lg-video-playing");
	        } else {
	          a.addClass("lg-video-playing lg-has-video");var g,
	              h,
	              i = function i(c, d) {
	            if (a.find(".lg-video").append(b.loadVideo(c, "", !1, b.core.index, d)), d) if (b.core.s.videojs) try {
	              videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0), b.core.s.videojsOptions, function () {
	                this.play();
	              });
	            } catch (a) {
	              console.error("Make sure you have included videojs");
	            } else b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play();
	          };b.core.s.dynamic ? (g = b.core.s.dynamicEl[b.core.index].src, h = b.core.s.dynamicEl[b.core.index].html, i(g, h)) : (g = b.core.$items.eq(b.core.index).attr("href") || b.core.$items.eq(b.core.index).attr("data-src"), h = b.core.$items.eq(b.core.index).attr("data-html"), i(g, h));var j = a.find(".lg-object");a.find(".lg-video").append(j), a.find(".lg-video-object").hasClass("lg-html5") || (a.removeClass("lg-complete"), a.find(".lg-video-object").on("load.lg error.lg", function () {
	            a.addClass("lg-complete");
	          }));
	        }
	      };b.core.doCss() && b.core.$items.length > 1 && (b.core.s.enableSwipe && b.core.isTouch || b.core.s.enableDrag && !b.core.isTouch) ? b.core.$el.on("onSlideClick.lg.tm", function () {
	        var a = b.core.$slide.eq(b.core.index);c(a);
	      }) : b.core.$slide.on("click.lg", function () {
	        c(a(this));
	      }), b.core.$el.on("onBeforeSlide.lg.tm", function (c, d, e) {
	        var f = b.core.$slide.eq(d),
	            g = f.find(".lg-youtube").get(0),
	            h = f.find(".lg-vimeo").get(0),
	            i = f.find(".lg-dailymotion").get(0),
	            j = f.find(".lg-vk").get(0),
	            k = f.find(".lg-html5").get(0);if (g) g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");else if (h) try {
	          $f(h).api("pause");
	        } catch (a) {
	          console.error("Make sure you have included froogaloop2 js");
	        } else if (i) i.contentWindow.postMessage("pause", "*");else if (k) if (b.core.s.videojs) try {
	          videojs(k).pause();
	        } catch (a) {
	          console.error("Make sure you have included videojs");
	        } else k.pause();j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));var l;l = b.core.s.dynamic ? b.core.s.dynamicEl[e].src : b.core.$items.eq(e).attr("href") || b.core.$items.eq(e).attr("data-src");var m = b.core.isVideo(l, e) || {};(m.youtube || m.vimeo || m.dailymotion || m.vk) && b.core.$outer.addClass("lg-hide-download");
	      }), b.core.$el.on("onAfterSlide.lg.tm", function (a, c) {
	        b.core.$slide.eq(c).removeClass("lg-video-playing");
	      });
	    }, f.prototype.loadVideo = function (b, c, d, e, f) {
	      var g = "",
	          h = 1,
	          i = "",
	          j = this.core.isVideo(b, e) || {};if (d && (h = this.videoLoaded ? 0 : 1), j.youtube) i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1", this.core.s.youtubePlayerParams && (i = i + "&" + a.param(this.core.s.youtubePlayerParams)), g = '<iframe class="lg-video-object lg-youtube ' + c + '" width="560" height="315" src="//www.youtube.com/embed/' + j.youtube[1] + i + '" frameborder="0" allowfullscreen></iframe>';else if (j.vimeo) i = "?autoplay=" + h + "&api=1", this.core.s.vimeoPlayerParams && (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)), g = '<iframe class="lg-video-object lg-vimeo ' + c + '" width="560" height="315"  src="//player.vimeo.com/video/' + j.vimeo[1] + i + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if (j.dailymotion) i = "?wmode=opaque&autoplay=" + h + "&api=postMessage", this.core.s.dailymotionPlayerParams && (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)), g = '<iframe class="lg-video-object lg-dailymotion ' + c + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + j.dailymotion[1] + i + '" frameborder="0" allowfullscreen></iframe>';else if (j.html5) {
	        var k = f.substring(0, 1);"." !== k && "#" !== k || (f = a(f).html()), g = f;
	      } else j.vk && (i = "&autoplay=" + h, this.core.s.vkPlayerParams && (i = i + "&" + a.param(this.core.s.vkPlayerParams)), g = '<iframe class="lg-video-object lg-vk ' + c + '" width="560" height="315" src="http://vk.com/video_ext.php?' + j.vk[1] + i + '" frameborder="0" allowfullscreen></iframe>');return g;
	    }, f.prototype.destroy = function () {
	      this.videoLoaded = !1;
	    }, a.fn.lightGallery.modules.video = f;
	  }(jQuery, window, document);
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! lg-zoom - v1.0.2 - 2016-11-20
	* http://sachinchoolur.github.io/lightGallery
	* Copyright (c) 2016 Sachin N; Licensed GPLv3 */
	!function (a, b) {
	   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a) {
	    return b(a);
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b(require("jquery")) : b(jQuery);
	}(undefined, function (a) {
	  !function () {
	    "use strict";
	    var b = { scale: 1, zoom: !0, actualSize: !0, enableZoomAfter: 300 },
	        c = function c(_c) {
	      return this.core = a(_c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()), this;
	    };c.prototype.init = function () {
	      var b = this,
	          c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'), this.core.$outer.find(".lg-toolbar").append(c), b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (c, d, e) {
	        var f = b.core.s.enableZoomAfter + e;a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"), b.zoomabletimeout = setTimeout(function () {
	          b.core.$slide.eq(d).addClass("lg-zoomable");
	        }, f + 30);
	      });var d = 1,
	          e = function e(c) {
	        var d,
	            e,
	            f = b.core.$outer.find(".lg-current .lg-image"),
	            g = (a(window).width() - f.prop("offsetWidth")) / 2,
	            h = (a(window).height() - f.prop("offsetHeight")) / 2 + a(window).scrollTop();d = b.pageX - g, e = b.pageY - h;var i = (c - 1) * d,
	            j = (c - 1) * e;f.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c), f.parent().css({ left: -i + "px", top: -j + "px" }).attr("data-x", i).attr("data-y", j);
	      },
	          f = function f() {
	        d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(), d < 1 && (d = 1), e(d);
	      },
	          g = function g(c, e, _g, h) {
	        var i,
	            j = e.prop("offsetWidth");i = b.core.s.dynamic ? b.core.s.dynamicEl[_g].width || e[0].naturalWidth || j : b.core.$items.eq(_g).attr("data-width") || e[0].naturalWidth || j;var k;b.core.$outer.hasClass("lg-zoomed") ? d = 1 : i > j && (k = i / j, d = k || 2), h ? (b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX, b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY), f(), setTimeout(function () {
	          b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
	        }, 10);
	      },
	          h = !1;b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (a, c) {
	        var d = b.core.$slide.eq(c).find(".lg-image");d.on("dblclick", function (a) {
	          g(a, d, c);
	        }), d.on("touchstart", function (a) {
	          h ? (clearTimeout(h), h = null, g(a, d, c)) : h = setTimeout(function () {
	            h = null;
	          }, 300), a.preventDefault();
	        });
	      }), a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function () {
	        b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop(), e(d);
	      }), a("#lg-zoom-out").on("click.lg", function () {
	        b.core.$outer.find(".lg-current .lg-image").length && (d -= b.core.s.scale, f());
	      }), a("#lg-zoom-in").on("click.lg", function () {
	        b.core.$outer.find(".lg-current .lg-image").length && (d += b.core.s.scale, f());
	      }), a("#lg-actual-size").on("click.lg", function (a) {
	        g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0);
	      }), b.core.$el.on("onBeforeSlide.lg.tm", function () {
	        d = 1, b.resetZoom();
	      }), b.core.isTouch || b.zoomDrag(), b.core.isTouch && b.zoomSwipe();
	    }, c.prototype.resetZoom = function () {
	      this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop();
	    }, c.prototype.zoomSwipe = function () {
	      var a = this,
	          b = {},
	          c = {},
	          d = !1,
	          e = !1,
	          f = !1;a.core.$slide.on("touchstart.lg", function (c) {
	        if (a.core.$outer.hasClass("lg-zoomed")) {
	          var d = a.core.$slide.eq(a.core.index).find(".lg-object");f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height(), e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width(), (e || f) && (c.preventDefault(), b = { x: c.originalEvent.targetTouches[0].pageX, y: c.originalEvent.targetTouches[0].pageY });
	        }
	      }), a.core.$slide.on("touchmove.lg", function (g) {
	        if (a.core.$outer.hasClass("lg-zoomed")) {
	          var h,
	              i,
	              j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");g.preventDefault(), d = !0, c = { x: g.originalEvent.targetTouches[0].pageX, y: g.originalEvent.targetTouches[0].pageY }, a.core.$outer.addClass("lg-zoom-dragging"), i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")), h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")), (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && j.css({ left: h + "px", top: i + "px" });
	        }
	      }), a.core.$slide.on("touchend.lg", function () {
	        a.core.$outer.hasClass("lg-zoomed") && d && (d = !1, a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f));
	      });
	    }, c.prototype.zoomDrag = function () {
	      var b = this,
	          c = {},
	          d = {},
	          e = !1,
	          f = !1,
	          g = !1,
	          h = !1;b.core.$slide.on("mousedown.lg.zoom", function (d) {
	        var f = b.core.$slide.eq(b.core.index).find(".lg-object");h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height(), g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width(), b.core.$outer.hasClass("lg-zoomed") && a(d.target).hasClass("lg-object") && (g || h) && (d.preventDefault(), c = { x: d.pageX, y: d.pageY }, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"));
	      }), a(window).on("mousemove.lg.zoom", function (a) {
	        if (e) {
	          var i,
	              j,
	              k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");f = !0, d = { x: a.pageX, y: a.pageY }, b.core.$outer.addClass("lg-zoom-dragging"), j = h ? -Math.abs(k.attr("data-y")) + (d.y - c.y) : -Math.abs(k.attr("data-y")), i = g ? -Math.abs(k.attr("data-x")) + (d.x - c.x) : -Math.abs(k.attr("data-x")), k.css({ left: i + "px", top: j + "px" });
	        }
	      }), a(window).on("mouseup.lg.zoom", function (a) {
	        e && (e = !1, b.core.$outer.removeClass("lg-zoom-dragging"), !f || c.x === d.x && c.y === d.y || (d = { x: a.pageX, y: a.pageY }, b.touchendZoom(c, d, g, h)), f = !1), b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
	      });
	    }, c.prototype.touchendZoom = function (a, b, c, d) {
	      var e = this,
	          f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
	          g = e.core.$slide.eq(e.core.index).find(".lg-object"),
	          h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
	          i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
	          j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
	          k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
	          l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
	          m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);(Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)), c && (h <= -m ? h = -m : h >= -l && (h = -l)), d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), f.css({ left: h + "px", top: i + "px" }));
	    }, c.prototype.destroy = function () {
	      var b = this;b.core.$el.off(".lg.zoom"), a(window).off(".lg.zoom"), b.core.$slide.off(".lg.zoom"), b.core.$el.off(".lg.tm.zoom"), b.resetZoom(), clearTimeout(b.zoomabletimeout), b.zoomabletimeout = !1;
	    }, a.fn.lightGallery.modules.zoom = c;
	  }();
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*!
	 * jQuery resizeend - A jQuery plugin that allows for window resize-end event handling.
	 * 
	 * Copyright (c) 2015 Erik Nielsen
	 * 
	 * Licensed under the MIT license:
	 *    http://www.opensource.org/licenses/mit-license.php
	 * 
	 * Project home:
	 *    http://312development.com
	 * 
	 * Version:  0.2.0
	 * 
	 */

	!function (a) {
	  var b = window.Chicago || { utils: { now: Date.now || function () {
	        return new Date().getTime();
	      }, uid: function uid(a) {
	        return (a || "id") + b.utils.now() + "RAND" + Math.ceil(1e5 * Math.random());
	      }, is: { number: function number(a) {
	          return !isNaN(parseFloat(a)) && isFinite(a);
	        }, fn: function fn(a) {
	          return "function" == typeof a;
	        }, object: function object(a) {
	          return "[object Object]" === Object.prototype.toString.call(a);
	        } }, debounce: function debounce(a, b, c) {
	        var d;return function () {
	          var e = this,
	              f = arguments,
	              g = function g() {
	            d = null, c || a.apply(e, f);
	          },
	              h = c && !d;d && clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f);
	        };
	      } }, $: window.jQuery || null };if ("function" == "function" && __webpack_require__(8) && !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return b.load = function (a, c, d, e) {
	      var f = a.split(","),
	          g = [],
	          h = (e.config && e.config.chicago && e.config.chicago.base ? e.config.chicago.base : "").replace(/\/+$/g, "");if (!h) throw new Error("Please define base path to jQuery resize.end in the requirejs config.");for (var i = 0; i < f.length;) {
	        var j = f[i].replace(/\./g, "/");g.push(h + "/" + j), i += 1;
	      }c(g, function () {
	        d(b);
	      });
	    }, b;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), window && window.jQuery) return a(b, window, window.document);if (!window.jQuery) throw new Error("jQuery resize.end requires jQuery");
	}(function (a, b, c) {
	  a.$win = a.$(b), a.$doc = a.$(c), a.events || (a.events = {}), a.events.resizeend = { defaults: { delay: 250 }, setup: function setup() {
	      var b,
	          c = arguments,
	          d = { delay: a.$.event.special.resizeend.defaults.delay };a.utils.is.fn(c[0]) ? b = c[0] : a.utils.is.number(c[0]) ? d.delay = c[0] : a.utils.is.object(c[0]) && (d = a.$.extend({}, d, c[0]));var e = a.utils.uid("resizeend"),
	          f = a.$.extend({ delay: a.$.event.special.resizeend.defaults.delay }, d),
	          g = f,
	          h = function h(b) {
	        g && clearTimeout(g), g = setTimeout(function () {
	          return g = null, b.type = "resizeend.chicago.dom", a.$(b.target).trigger("resizeend", b);
	        }, f.delay);
	      };return a.$(this).data("chicago.event.resizeend.uid", e), a.$(this).on("resize", a.utils.debounce(h, 100)).data(e, h);
	    }, teardown: function teardown() {
	      var b = a.$(this).data("chicago.event.resizeend.uid");return a.$(this).off("resize", a.$(this).data(b)), a.$(this).removeData(b), a.$(this).removeData("chicago.event.resizeend.uid");
	    } }, function () {
	    a.$.event.special.resizeend = a.events.resizeend, a.$.fn.resizeend = function (b, c) {
	      return this.each(function () {
	        a.$(this).on("resizeend", b, c);
	      });
	    };
	  }();
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	* jquery.matchHeight-min.js v0.5.2
	* http://brm.io/jquery-match-height/
	* License: MIT
	*/
	(function (c) {
	  var n = -1,
	      f = -1,
	      r = function r(a) {
	    var b = null,
	        d = [];c(a).each(function () {
	      var a = c(this),
	          k = a.offset().top - h(a.css("margin-top")),
	          l = 0 < d.length ? d[d.length - 1] : null;null === l ? d.push(a) : 1 >= Math.floor(Math.abs(b - k)) ? d[d.length - 1] = l.add(a) : d.push(a);b = k;
	    });return d;
	  },
	      h = function h(a) {
	    return parseFloat(a) || 0;
	  },
	      p = function p(a) {
	    var b = { byRow: !0, remove: !1, property: "height" };if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) return c.extend(b, a);"boolean" === typeof a ? b.byRow = a : "remove" === a && (b.remove = !0);return b;
	  },
	      b = c.fn.matchHeight = function (a) {
	    a = p(a);if (a.remove) {
	      var e = this;this.css(a.property, "");c.each(b._groups, function (a, b) {
	        b.elements = b.elements.not(e);
	      });return this;
	    }if (1 >= this.length) return this;b._groups.push({ elements: this, options: a });b._apply(this, a);return this;
	  };b._groups = [];b._throttle = 80;b._maintainScroll = !1;b._beforeUpdate = null;b._afterUpdate = null;b._apply = function (a, e) {
	    var d = p(e),
	        g = c(a),
	        k = [g],
	        l = c(window).scrollTop(),
	        f = c("html").outerHeight(!0),
	        m = g.parents().filter(":hidden");m.each(function () {
	      var a = c(this);a.data("style-cache", a.attr("style"));
	    });m.css("display", "block");d.byRow && (g.each(function () {
	      var a = c(this),
	          b = "inline-block" === a.css("display") ? "inline-block" : "block";a.data("style-cache", a.attr("style"));a.css({ display: b, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px" });
	    }), k = r(g), g.each(function () {
	      var a = c(this);a.attr("style", a.data("style-cache") || "");
	    }));c.each(k, function (a, b) {
	      var e = c(b),
	          f = 0;d.byRow && 1 >= e.length ? e.css(d.property, "") : (e.each(function () {
	        var a = c(this),
	            b = { display: "inline-block" === a.css("display") ? "inline-block" : "block" };b[d.property] = "";a.css(b);a.outerHeight(!1) > f && (f = a.outerHeight(!1));a.css("display", "");
	      }), e.each(function () {
	        var a = c(this),
	            b = 0;"border-box" !== a.css("box-sizing") && (b += h(a.css("border-top-width")) + h(a.css("border-bottom-width")), b += h(a.css("padding-top")) + h(a.css("padding-bottom")));a.css(d.property, f - b);
	      }));
	    });m.each(function () {
	      var a = c(this);a.attr("style", a.data("style-cache") || null);
	    });b._maintainScroll && c(window).scrollTop(l / f * c("html").outerHeight(!0));return this;
	  };b._applyDataApi = function () {
	    var a = {};c("[data-match-height], [data-mh]").each(function () {
	      var b = c(this),
	          d = b.attr("data-match-height") || b.attr("data-mh");a[d] = d in a ? a[d].add(b) : b;
	    });c.each(a, function () {
	      this.matchHeight(!0);
	    });
	  };var q = function q(a) {
	    b._beforeUpdate && b._beforeUpdate(a, b._groups);c.each(b._groups, function () {
	      b._apply(this.elements, this.options);
	    });b._afterUpdate && b._afterUpdate(a, b._groups);
	  };b._update = function (a, e) {
	    if (e && "resize" === e.type) {
	      var d = c(window).width();if (d === n) return;n = d;
	    }a ? -1 === f && (f = setTimeout(function () {
	      q(e);f = -1;
	    }, b._throttle)) : q(e);
	  };c(b._applyDataApi);c(window).bind("load", function (a) {
	    b._update(!1, a);
	  });c(window).bind("resize orientationchange", function (a) {
	    b._update(!0, a);
	  });
	})(jQuery);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*
	     _ _      _       _
	 ___| (_) ___| | __  (_)___
	/ __| | |/ __| |/ /  | / __|
	\__ \ | | (__|   < _ | \__ \
	|___/_|_|\___|_|\_(_)/ |___/
	                   |__/

	 Version: 1.6.0
	  Author: Ken Wheeler
	 Website: http://kenwheeler.github.io
	    Docs: http://kenwheeler.github.io/slick
	    Repo: http://github.com/kenwheeler/slick
	  Issues: http://github.com/kenwheeler/slick/issues

	 */
	!function (a) {
	  "use strict";
	   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
	}(function (a) {
	  "use strict";
	  var b = window.Slick || {};b = function () {
	    function c(c, d) {
	      var f,
	          e = this;e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(b, c) {
	          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
	        }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
	    }var b = 0;return c;
	  }(), b.prototype.activateADA = function () {
	    var a = this;a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
	  }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
	    var e = this;if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
	      a(c).attr("data-slick-index", b);
	    }), e.$slidesCache = e.$slides, e.reinit();
	  }, b.prototype.animateHeight = function () {
	    var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
	      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({ height: b }, a.options.speed);
	    }
	  }, b.prototype.animateSlide = function (b, c) {
	    var d = {},
	        e = this;e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function step(a) {
	        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
	      }, complete: function complete() {
	        c && c.call();
	      } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
	      e.disableTransition(), c.call();
	    }, e.options.speed));
	  }, b.prototype.getNavTarget = function () {
	    var b = this,
	        c = b.options.asNavFor;return c && null !== c && (c = a(c).not(b.$slider)), c;
	  }, b.prototype.asNavFor = function (b) {
	    var c = this,
	        d = c.getNavTarget();null !== d && "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && d.each(function () {
	      var c = a(this).slick("getSlick");c.unslicked || c.slideHandler(b, !0);
	    });
	  }, b.prototype.applyTransition = function (a) {
	    var b = this,
	        c = {};b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
	  }, b.prototype.autoPlay = function () {
	    var a = this;a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
	  }, b.prototype.autoPlayClear = function () {
	    var a = this;a.autoPlayTimer && clearInterval(a.autoPlayTimer);
	  }, b.prototype.autoPlayIterator = function () {
	    var a = this,
	        b = a.currentSlide + a.options.slidesToScroll;a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
	  }, b.prototype.buildArrows = function () {
	    var b = this;b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
	  }, b.prototype.buildDots = function () {
	    var c,
	        d,
	        b = this;if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
	      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
	        d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
	      }b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
	    }
	  }, b.prototype.buildOut = function () {
	    var b = this;b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
	      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
	    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
	  }, b.prototype.buildRows = function () {
	    var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h,
	        a = this;if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
	      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
	        var i = document.createElement("div");for (c = 0; c < a.options.rows; c++) {
	          var j = document.createElement("div");for (d = 0; d < a.options.slidesPerRow; d++) {
	            var k = b * h + (c * a.options.slidesPerRow + d);g.get(k) && j.appendChild(g.get(k));
	          }i.appendChild(j);
	        }e.appendChild(i);
	      }a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
	    }
	  }, b.prototype.checkResponsive = function (b, c) {
	    var e,
	        f,
	        g,
	        d = this,
	        h = !1,
	        i = d.$slider.width(),
	        j = window.innerWidth || a(window).width();if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
	      f = null;for (e in d.breakpoints) {
	        d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
	      }null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
	    }
	  }, b.prototype.changeSlide = function (b, c) {
	    var f,
	        g,
	        h,
	        d = this,
	        e = a(b.currentTarget);switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {case "previous":
	        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);break;case "next":
	        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);break;case "index":
	        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");break;default:
	        return;}
	  }, b.prototype.checkNavigable = function (a) {
	    var c,
	        d,
	        b = this;if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
	      if (a < c[e]) {
	        a = d;break;
	      }d = c[e];
	    }return a;
	  }, b.prototype.cleanUpEvents = function () {
	    var b = this;b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
	  }, b.prototype.cleanUpSlideEvents = function () {
	    var b = this;b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
	  }, b.prototype.cleanUpRows = function () {
	    var b,
	        a = this;a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
	  }, b.prototype.clickHandler = function (a) {
	    var b = this;b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
	  }, b.prototype.destroy = function (b) {
	    var c = this;c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
	      a(this).attr("style", a(this).data("originalStyling"));
	    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
	  }, b.prototype.disableTransition = function (a) {
	    var b = this,
	        c = {};c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
	  }, b.prototype.fadeSlide = function (a, b) {
	    var c = this;c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function () {
	      c.disableTransition(a), b.call();
	    }, c.options.speed));
	  }, b.prototype.fadeSlideOut = function (a) {
	    var b = this;b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
	  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
	    var b = this;null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
	  }, b.prototype.focusHandler = function () {
	    var b = this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
	      c.stopImmediatePropagation();var d = a(this);setTimeout(function () {
	        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
	      }, 0);
	    });
	  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
	    var a = this;return a.currentSlide;
	  }, b.prototype.getDotCount = function () {
	    var a = this,
	        b = 0,
	        c = 0,
	        d = 0;if (a.options.infinite === !0) for (; b < a.slideCount;) {
	      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
	    } else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
	      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
	    } else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);return d - 1;
	  }, b.prototype.getLeft = function (a) {
	    var c,
	        d,
	        f,
	        b = this,
	        e = 0;return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
	  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
	    var b = this;return b.options[a];
	  }, b.prototype.getNavigableIndexes = function () {
	    var e,
	        a = this,
	        b = 0,
	        c = 0,
	        d = [];for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
	      d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
	    }return d;
	  }, b.prototype.getSlick = function () {
	    return this;
	  }, b.prototype.getSlideCount = function () {
	    var c,
	        d,
	        e,
	        b = this;return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
	      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
	    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
	  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
	    var c = this;c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
	  }, b.prototype.init = function (b) {
	    var c = this;a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
	  }, b.prototype.initADA = function () {
	    var b = this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
	      a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
	    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
	      a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
	    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
	  }, b.prototype.initArrowEvents = function () {
	    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide));
	  }, b.prototype.initDotEvents = function () {
	    var b = this;b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
	  }, b.prototype.initSlideEvents = function () {
	    var b = this;b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
	  }, b.prototype.initializeEvents = function () {
	    var b = this;b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
	  }, b.prototype.initUI = function () {
	    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
	  }, b.prototype.keyHandler = function (a) {
	    var b = this;a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
	  }, b.prototype.lazyLoad = function () {
	    function g(c) {
	      a("img[data-lazy]", c).each(function () {
	        var c = a(this),
	            d = a(this).attr("data-lazy"),
	            e = document.createElement("img");e.onload = function () {
	          c.animate({ opacity: 0 }, 100, function () {
	            c.attr("src", d).animate({ opacity: 1 }, 200, function () {
	              c.removeAttr("data-lazy").removeClass("slick-loading");
	            }), b.$slider.trigger("lazyLoaded", [b, c, d]);
	          });
	        }, e.onerror = function () {
	          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
	        }, e.src = d;
	      });
	    }var c,
	        d,
	        e,
	        f,
	        b = this;b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
	  }, b.prototype.loadSlider = function () {
	    var a = this;a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
	  }, b.prototype.next = b.prototype.slickNext = function () {
	    var a = this;a.changeSlide({ data: { message: "next" } });
	  }, b.prototype.orientationChange = function () {
	    var a = this;a.checkResponsive(), a.setPosition();
	  }, b.prototype.pause = b.prototype.slickPause = function () {
	    var a = this;a.autoPlayClear(), a.paused = !0;
	  }, b.prototype.play = b.prototype.slickPlay = function () {
	    var a = this;a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
	  }, b.prototype.postSlide = function (a) {
	    var b = this;b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
	  }, b.prototype.prev = b.prototype.slickPrev = function () {
	    var a = this;a.changeSlide({ data: { message: "previous" } });
	  }, b.prototype.preventDefault = function (a) {
	    a.preventDefault();
	  }, b.prototype.progressiveLazyLoad = function (b) {
	    b = b || 1;var e,
	        f,
	        g,
	        c = this,
	        d = a("img[data-lazy]", c.$slider);d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
	      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
	    }, g.onerror = function () {
	      3 > b ? setTimeout(function () {
	        c.progressiveLazyLoad(b + 1);
	      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
	    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
	  }, b.prototype.refresh = function (b) {
	    var d,
	        e,
	        c = this;e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1);
	  }, b.prototype.registerBreakpoints = function () {
	    var c,
	        d,
	        e,
	        b = this,
	        f = b.options.responsive || null;if ("array" === a.type(f) && f.length) {
	      b.respondTo = b.options.respondTo || "window";for (c in f) {
	        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
	          for (; e >= 0;) {
	            b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
	          }b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
	        }
	      }b.breakpoints.sort(function (a, c) {
	        return b.options.mobileFirst ? a - c : c - a;
	      });
	    }
	  }, b.prototype.reinit = function () {
	    var b = this;b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
	  }, b.prototype.resize = function () {
	    var b = this;a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
	      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
	    }, 50));
	  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
	    var d = this;return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
	  }, b.prototype.setCSS = function (a) {
	    var d,
	        e,
	        b = this,
	        c = {};b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
	  }, b.prototype.setDimensions = function () {
	    var a = this;a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
	  }, b.prototype.setFade = function () {
	    var c,
	        b = this;b.$slides.each(function (d, e) {
	      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 });
	    }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 });
	  }, b.prototype.setHeight = function () {
	    var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
	      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height", b);
	    }
	  }, b.prototype.setOption = b.prototype.slickSetOption = function () {
	    var c,
	        d,
	        e,
	        f,
	        h,
	        b = this,
	        g = !1;if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
	      b.options[a] = c;
	    });else if ("responsive" === h) for (d in f) {
	      if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
	        for (c = b.options.responsive.length - 1; c >= 0;) {
	          b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
	        }b.options.responsive.push(f[d]);
	      }
	    }g && (b.unload(), b.reinit());
	  }, b.prototype.setPosition = function () {
	    var a = this;a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
	  }, b.prototype.setProps = function () {
	    var a = this,
	        b = document.body.style;a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
	  }, b.prototype.setSlideClasses = function (a) {
	    var c,
	        d,
	        e,
	        f,
	        b = this;d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
	  }, b.prototype.setupInfinite = function () {
	    var c,
	        d,
	        e,
	        b = this;if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
	      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
	        d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
	      }for (c = 0; e > c; c += 1) {
	        d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
	      }b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
	        a(this).attr("id", "");
	      });
	    }
	  }, b.prototype.interrupt = function (a) {
	    var b = this;a || b.autoPlay(), b.interrupted = a;
	  }, b.prototype.selectHandler = function (b) {
	    var c = this,
	        d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
	        e = parseInt(d.attr("data-slick-index"));return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
	  }, b.prototype.slideHandler = function (a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        j,
	        h = null,
	        i = this;return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
	      i.postSlide(d);
	    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
	      i.postSlide(d);
	    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
	      i.postSlide(e);
	    })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
	      i.postSlide(e);
	    }) : i.postSlide(e))));
	  }, b.prototype.startLoad = function () {
	    var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
	  }, b.prototype.swipeDirection = function () {
	    var a,
	        b,
	        c,
	        d,
	        e = this;return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
	  }, b.prototype.swipeEnd = function (a) {
	    var c,
	        d,
	        b = this;if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
	      switch (d = b.swipeDirection()) {case "left":case "down":
	          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;break;case "right":case "up":
	          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;}"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
	    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
	  }, b.prototype.swipeHandler = function (a) {
	    var b = this;if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {case "start":
	        b.swipeStart(a);break;case "move":
	        b.swipeMove(a);break;case "end":
	        b.swipeEnd(a);}
	  }, b.prototype.swipeMove = function (a) {
	    var d,
	        e,
	        f,
	        g,
	        h,
	        b = this;return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
	  }, b.prototype.swipeStart = function (a) {
	    var c,
	        b = this;return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
	  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
	    var a = this;null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
	  }, b.prototype.unload = function () {
	    var b = this;a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
	  }, b.prototype.unslick = function (a) {
	    var b = this;b.$slider.trigger("unslick", [b, a]), b.destroy();
	  }, b.prototype.updateArrows = function () {
	    var b,
	        a = this;b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
	  }, b.prototype.updateDots = function () {
	    var a = this;null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
	  }, b.prototype.visibility = function () {
	    var a = this;a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
	  }, a.fn.slick = function () {
	    var f,
	        g,
	        a = this,
	        c = arguments[0],
	        d = Array.prototype.slice.call(arguments, 1),
	        e = a.length;for (f = 0; e > f; f++) {
	      if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
	    }return a;
	  };
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*************************************************************************************
	* pcかスマホか判定（幅で）
	*************************************************************************************/
	exports.default = function ($) {
		var _breakpoint = 736;
		var _mode = void 0;
		var _oldMode = void 0;
		var _init = function _init(args) {
			_judge();
		};
		var _judge = function _judge() {
			if (_mode) {
				_oldMode = _mode;
			}
			if ($(window).innerWidth() > _breakpoint) {
				_mode = 'pc';
			} else {
				_mode = 'sp';
			}

			//modeが変わったらpcsp.changedイベント発火
			if (_mode !== _oldMode) {
				$(window).trigger('pcsp.changed', [_mode]);
			}
		};
		var _getMode = function _getMode() {
			return _mode;
		};
		var _getBreakpoint = function _getBreakpoint() {
			return _breakpoint;
		};
		return {
			init: _init,
			judge: _judge,
			getMode: _getMode,
			getBreakpoint: _getBreakpoint
		};
	}($);

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*************************************************************************************
	* anchorJump
	*************************************************************************************/
	exports.default = function () {
		var _hash = location.hash;
		var _jump = function _jump(args) {
			if (_hash) {
				$(window).scrollTop($(_hash).offset().top);
			}
		};
		return {
			init: _jump
		};
	}();

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*************************************************************************************
	* アコーディオン
	*************************************************************************************/
	exports.default = function () {
		var _init = function _init(args) {
			$('[data-acc-body]').attr('style', '');
			$('[data-acc]').each(function (index, el) {
				var _$root = $(this);
				var _$btn = _$root.find('[data-acc-btn]');
				var _$body = _$root.find('[data-acc-body]');

				_$body.data('acc-max-h', _$body.outerHeight()).css({
					visibility: 'visible'
				});

				_slide.call(_$btn);
			});
		};
		var _slide = function _slide() {
			var _$root = $(this).closest('[data-acc]');
			var _$btn = _$root.find('[data-acc-btn]');
			var _$body = _$root.find('[data-acc-body]');

			if (_$btn.attr('data-acc-btn') === 'open') {
				_$body.css({
					maxHeight: _$body.data('acc-max-h')
				});
			} else {
				_$body.css({
					maxHeight: 0
				});
			}
		};
		var _txtSwitch = function _txtSwitch() {
			var _$root = $(this).closest('[data-acc]');
			var _$txt = _$root.find('[data-acc-btn-txt]');
			var _cash = '';

			if (!_$txt) {
				return false;
			}
			_$txt.each(function (index, el) {
				if ($(this).data('acc-btn-txt') === '') {
					return false;
				}
				_cash = $(this).text();
				$(this).text($(this).data('acc-btn-txt'));
				$(this).data('acc-btn-txt', _cash);
			});
		};
		var _toggle = function _toggle() {
			var _$btns = $(this).closest('[data-acc]').find('[data-acc-btn]');
			if ($(this).attr('data-acc-btn') === 'open') {
				_$btns.each(function (index, el) {
					$(this).attr('data-acc-btn', '');
				});
			} else {
				_$btns.each(function (index, el) {
					$(this).attr('data-acc-btn', 'open');
				});
			}
			_txtSwitch.call($(this));
			_slide.call($(this));
		};

		return {
			init: _init,
			reinit: _init,
			toggle: _toggle
		};
	}();

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	/*************************************************************************************
	* スムーズスクロール
	*************************************************************************************/
	exports.default = function () {
		var _config = {
			speed: 1000, // 'slow', 'fast', 1000
			easing: 'easeInOutQuad' // 'swing', 'linear'
		};
		var _speed;
		var _hash;
		var _top = 0;

		var _getOffset = function _getOffset() {
			_hash = $(this).attr('href');
			if (_hash === '#') {
				_top = 0;
			} else {
				_top = $(_hash).offset().top;
			}
			return _top;
		};
		var _scroll = function _scroll() {
			var $self = this;

			$(window).on('wheel', function (event) {
				_stopScroll();
			});
			$('html,body').animate({
				scrollTop: _getOffset.call($self)
			}, _config.speed, _config.easing, function () {
				$(window).off('wheel');
			});
		};
		var _stopScroll = function _stopScroll() {
			$('html,body').stop();
		};

		return {
			scroll: _scroll
		};
	}();

/***/ }
/******/ ]);