$.fn.extend({
	switchClass : function(before, after) {
		$(this).removeClass(before)
		$(this).addClass(after)
	},
})

var $$$ = $$$ || {};

/*************************************************************************************
* parseArgs
*************************************************************************************/
$$$.parseArgs = (function(){
	var _args = function(args){
		this.values = Array.prototype.slice.call(args, 0);
	}
	_args.prototype = {
		values: undefined,
		_slice: function (index, type) {
			var s = this;
			var hit = (!type) || (typeof(s.values[index]) === type);
			if (hit) {
				return s.values.splice(index, 1).shift();
			} else {
				return undefined;
			}
		},
		/** 先頭の型が一致した場合のみ取得 */
		shift: function (type) {
			var s = this;
			return s._slice(0, type);
		},
		/** 末尾の型が一致した場合のみ取得 */
		pop: function (type) {
			var s = this;
			return s._slice(s.values.length - 1, type);
		},
		/** 残り全部取得 */
		remain: function () {
			var s = this;
			var values = s.values;
			s.values = undefined;
			return values;
		}
	}

	return function(args){
		var _arg = new _args(args);
		return {
			callback: _arg.pop('function'),
			options: _arg.pop('object'),
			values: _arg.remain(),
		}
	}
}())
/*************************************************************************************
* amin
*************************************************************************************/
$$$.anim = (function(){
	var _enter = function(){
		var _$this = $(this);
		var _name = $(this).data('anim');

		if (_$this.data('anim-flag')) { return false }
		_$this.off(' transitionend webkitTransitionEnd')

		_$this.data('anim-flag', true);
		_$this.removeClass(_name + '-leave-active ' + _name + '-leave ' +  _name + '-leave-to').addClass(_name + '-enter-active ' + _name + '-enter ');
		setTimeout(function(){
			_$this.removeClass(_name + '-enter').addClass(_name + '-enter-to');
		}, 1)
		// _$this.on(' transitionend webkitTransitionEnd',function(){
		// });
	}
	var _leave = function(cb){
		var _$this = $(this);
		var _name = $(this).data('anim');

		if (!_$this.data('anim-flag')) { return false }
		_$this.off(' transitionend webkitTransitionEnd')
		_$this.on(' transitionend webkitTransitionEnd',function(e){
			_$this.removeClass(_name + '-enter-active ' + _name + '-enter ' +  _name + '-enter-to ' + _name + '-leave-active ' + _name + '-leave ' +  _name + '-leave-to');
			_$this.data('anim-flag', false);
			if(cb){cb();}
		});

		_$this.removeClass(_name + '-enter-active ' + _name + '-enter ' +  _name + '-enter-to').addClass(_name + '-leave-active ' + _name + '-leave ');
		setTimeout(function(){
			_$this.removeClass(_name + '-leave').addClass(_name + '-leave-to');
		}, 1)
	}
	var _toggle = function(){
		var _$this = $(this);
		if (_$this.data('anim-flag')) {
			_enter.call(_$this)
		} else {
			_leave.call(_$this)
		}
	}
	return {
		enter: _enter,
		leave: _leave,
		toggle: _toggle,
	}
}())

/*************************************************************************************
* vh adjust
*************************************************************************************/
$$$.vhAdjust = (function(){
	var _vh = 0;
	var _init = function(){
		_vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', _vh + 'px');
	}
	return {
		init: _init,
	}
}());

/*************************************************************************************
* windowInfo
*************************************************************************************/
$$$.windowInfo = (function(){
	var _init = function(){
		_sc.top = $(window).scrollTop();
		_sc.left = $(window).scrollLeft();
	}
	var _sc = {
		top: 0,
		left: 0
	}

	return {
		init: _init,
		sc: _sc,
	}

}())

/*************************************************************************************
* 画像preload
*************************************************************************************/
$$$.imagesLoadListener = (function() {
	var _imageCollector = function(expectedCount, completeFn) {
		var receivedCount = 0;
		return function() {
			receivedCount++;
			if (receivedCount === expectedCount) {
				completeFn();
			}
		};
	};
	var _imagesLoadListener = function(element, callback) {
		var _images = element.find('img');
		if (!_images[0]) {
			callback();
			return;
		}
		//画像の数だけloadListenerが呼ばれたらcallbackが呼ばれる;
		var _loadListener = _imageCollector(_images.length, callback);
		Array.prototype.forEach.call(_images, function(img) {
			if (img.complete) {
				_loadListener();
			} else {
				img.onload = _loadListener;
			}
		});
	};

	return {
		listen: _imagesLoadListener,
	}
})();

/*************************************************************************************
* resizeend(幅のみ)
*************************************************************************************/
$$$.resizeend = (function(){
	var _delta = 200;
	var _rtime;
	var _timeout = false;
	var _ww = 0;

	var _init = function(args) {
		_ww = $(window).width();

		$(window).on('resize', function(event) {
			_rtime = new Date();
			if (!_timeout) {
				_timeout = true;
				setTimeout(_judge, _delta);
			}
		});
	}

	var _judge = function(){
		if (new Date() - _rtime < _delta) {
			setTimeout(_judge, _delta);
		} else {
			_timeout = false;
			$$$.viewport.init();
			if (_ww !== $(window).width()) {
				$(window).trigger('resizeend');
			}
			_ww = $(window).width();
		}
	}
	return {
		init: _init,
	}
}());

/*************************************************************************************
* resizeendHeight
*************************************************************************************/
$$$.resizeendHeight = (function(){
	var _delta = 200;
	var _rtime;
	var _timeout = false;
	var _wh = 0;

	var _init = function(args) {
		_wh = $(window).height();

		$(window).on('resize', function(event) {
			_rtime = new Date();
			if (!_timeout) {
				_timeout = true;
				setTimeout(_judge, _delta);
			}
		});
	}

	var _judge = function(){
		if (new Date() - _rtime < _delta) {
			setTimeout(_judge, _delta);
		} else {
			_timeout = false;
			if (_wh !== $(window).height()) {
				$(window).trigger('resizeendHeight');
			}
			_wh = $(window).height();
		}
	}
	return {
		init: _init,
	}
}());

/*************************************************************************************
* pcかスマホか判定（幅で）
*************************************************************************************/
$$$.pcsp = (function() {
	var _breakpoint = 736
	var _mode;
	var _oldMode;
	var _init = function(args) {
		_judge();
	}
	var _judge = function(){
		if (_mode) {
			_oldMode = _mode;
		}
		if ($(window).innerWidth() > _breakpoint) {
			_mode = 'pc'
		} else {
			_mode = 'sp'
		}

		//modeが変わったらpcsp.changedイベント発火
		if (_mode !== _oldMode) {
			$(window).trigger('pcsp.changed', [_mode]);
		}
	}
	var _getMode = function () {
		return _mode;
	}
	var _getBreakpoint = function () {
		return _breakpoint;
	}

	return {
		init: _init,
		judge: _judge,
		getMode: _getMode,
		getBreakpoint: _getBreakpoint,
	};
}());

/*************************************************************************************
* タブレットにフィットさせる
*************************************************************************************/
$$$.viewport = (function() {
	var _tag = $('meta[name=viewport]');
	var _ww = ( $(window).innerWidth() < window.screen.width ) ? $(window).innerWidth() : window.screen.width; //get proper width
	var _mw = 1220;
	var _ratio =  _ww / _mw;

	var _init = function(args) {
		_tag.attr('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0');
		_ww = ( $(window).innerWidth() < window.screen.width ) ? $(window).innerWidth() : window.screen.width;
		_ratio =  _ww / _mw;
		if( _ww < _mw && _ww > 767){
			_tag.attr('content', 'width=' + _ww + ', initial-scale=' + _ratio + ', minimum-scale=' + _ratio + ', maximum-scale=' + _ratio);
		}
	}
	return {
		init: _init,
	};
}());

/*************************************************************************************
* anchorJump
*************************************************************************************/
$$$.anchorJump = (function() {
	var _hash = location.hash
	var _adjust = 0;

	var _jump = function(args) {
		if (_hash) {
			if ($$$.pcsp.getMode() === 'sp') {
				_adjust = 63 + 10;
			} else {
				_adjust = 0;
			}
			$(window).scrollTop($(_hash).offset().top - _adjust);
		}
	}
	return {
		init: _jump,
	};
}());

/*************************************************************************************
* スムーズスクロール
*************************************************************************************/
$$$.smoothScroll = (function() {
	var _config = {
		speed: 1000, // 'slow', 'fast', 1000
		easing: 'easeInOutQuad' // 'swing', 'linear'
	}
	var _speed;
	var _hash;
	var _top = 0;
	var _adjust = 0;

	var _getOffset = function(){
		_hash = $(this).attr('href');
		if (_hash === '#') {
			_top = 0;
		} else {
			_top = $(_hash).offset().top;
		}
		if ($$$.pcsp.getMode() === 'sp') {
			_adjust = 63 + 10;
		} else {
			_adjust = 0;
		}
		return _top - _adjust
	}
	var _scroll = function(){
		var $self = this;
		_stopScroll();
		$(window).on('wheel', function(event) {
			_stopScroll();
		});
		$('html,body').animate({
			scrollTop: _getOffset.call($self),
		},_config.speed, _config.easing, function(){
			$(window).off('wheel');
		});
	}
	var _stopScroll = function(){
		$('html,body').stop();
	}

	return {
		scroll: _scroll,
	};
}());

/*************************************************************************************
* アコーディオン
*************************************************************************************/
$$$.accordion = (function() {
	var _init = function(args) {
		$('[data-acc-body]').attr('style', '');
		$('[data-acc]').each(function(index, el) {
			var _$root = $(this);
			var _$btn = _$root.find('[data-acc-btn]');
			var _$body = _$root.find('[data-acc-body]');

			_$body
				.data('acc-max-h', _$body.outerHeight())
				.css({
					visibility: 'visible',
				});

			_slide.call(_$btn)
		});
	}
	var _slide = function(){
		var _$root = $(this).closest('[data-acc]');
		var _$btn = _$root.find('[data-acc-btn]');
		var _$body = _$root.find('[data-acc-body]');

		if (_$btn.attr('data-acc-btn') === 'open') {
			_$body.css({
				maxHeight: _$body.data('acc-max-h')
			})
		} else {
			_$body.css({
				maxHeight: 0
			})
		}
	}
	var _txtSwitch = function(){
		var _$root = $(this).closest('[data-acc]');
		var _$txt = _$root.find('[data-acc-btn-txt]');
		var _cash = '';

		if (!_$txt) { return false }
		_$txt.each(function(index, el) {
			if ( $(this).data('acc-btn-txt') === '') { return false }
			_cash =$(this).text();
			$(this).text($(this).data('acc-btn-txt'));
			$(this).data('acc-btn-txt', _cash);
		});

	}
	var _toggle = function(){
		var _$btns = $(this).closest('[data-acc]').find('[data-acc-btn]');
		if ($(this).attr('data-acc-btn') === 'open') {
			_$btns.each(function(index, el) {
				$(this).attr('data-acc-btn', '');
			});
		} else {
			_$btns.each(function(index, el) {
				$(this).attr('data-acc-btn', 'open');
			});
		}
		_txtSwitch.call($(this));
		_slide.call($(this));
	}

	return {
		init: _init,
		toggle: _toggle
	};
}());

/*************************************************************************************
* オーバーレイ
*************************************************************************************/
$$$.overlay = (function() {
	var _init = function(args) {}
	var _open = function(){
		$('.overlay').switchClass('overlay-isClose', 'overlay-isOpen');
		$('.overlay').on('touchmove', function(event) {
			event.preventDefault();
		});
	}
	var _close = function(){
		if ($('.overlay').hasClass('overlay-isOpen')) {
			$('.overlay').switchClass('overlay-isOpen', 'overlay-isClose');
			$('.overlay').off('touchmove');
		}
	}
	var _toggle = function(){
		if ($('.overlay').hasClass('overlay-isOpen')) {
			$('.overlay').switchClass('overlay-isOpen', 'overlay-isClose');
		} else {
			$('.overlay').switchClass('overlay-isClose', 'overlay-isOpen');
		}
	}

	return {
		init: _init,
		open: _open,
		close: _close,
		toggle: _toggle,
	};
}());

/*************************************************************************************
* アラート
*************************************************************************************/
$$$.alert = (function() {
	var _init = function(){
		$('body').append(
			'<div class="customDialog">\
				<div class="customDialog_overlay"></div>\
				<div class="customDialog_inner">\
				</div>\
			</div>'
		);
	}
	var _pause = function(){
		return new Promise(function(resolve, reject){
			$(document).on('click', '.customDialog_btn-ok > a', function(event) {
				event.preventDefault();
				resolve();
			});
		})
	}
	var _open = function(options){
		if (!$('.customDialog')[0]) { _init(); }

		$('.customDialog_inner').html('');
		var _contents = '<p class="customDialog_txt">' + options.text + '</p><ul class="customDialog_btns"><li class="customDialog_btn customDialog_btn-ok"><a href="javascript: void(0);">OK</a></li></ul>';
		$('.customDialog_inner').append(_contents);

		$('.customDialog').switchClass('customDialog-isClose', 'customDialog-isOpen');

		_pause().then(
			function(){
				_close();
				if (options.ok) {options.ok()}
			},
			function(){
				_close();
			}
		);

	}

	var _close = function(){
		$('.customDialog').switchClass('customDialog-isOpen', 'customDialog-isClose');
		$(document).off('.click', '.customDialog_btn > a');
	}


	return {
		open: _open
	};
}());

/*************************************************************************************
* confirm
*************************************************************************************/
$$$.confirm = (function() {
	var _init = function(){
		$('body').append(
			'<div class="customDialog">\
				<div class="customDialog_overlay"></div>\
				<div class="customDialog_inner">\
				</div>\
			</div>'
		);
	}
	var _pause = function(){
		return new Promise(function(resolve, reject){
			$(document).on('click', '.customDialog_btn-ok > a', function(event) {
				event.preventDefault();
				resolve();
			});
			$(document).on('click', '.customDialog_btn-cancel > a', function(event) {
				event.preventDefault();
				reject();
			});
		})
	}
	var _open = function(options){
		if (!$('.customDialog')[0]) { _init(); }

		$('.customDialog_inner').html('');
		var _contents = '<p class="customDialog_txt">' + options.text + '</p><ul class="customDialog_btns"><li class="customDialog_btn customDialog_btn-cancel"><a href="javascript: void(0);">キャンセル</a></li><li class="customDialog_btn customDialog_btn-ok"><a href="javascript: void(0);">OK</a></li></ul>';
		$('.customDialog_inner').append(_contents);

		$('.customDialog').switchClass('customDialog-isClose', 'customDialog-isOpen');

		_pause().then(
			function(){
				_close();
				if (options.ok) {options.ok()}
				return true;
			},
			function(){
				_close();
				if (options.cancel) {options.cancel()}
				return false;
			}
		);

	}

	var _close = function(){
		$('.customDialog').switchClass('customDialog-isOpen', 'customDialog-isClose');
		$(document).off('.click', '.customDialog_btn > a');
	}


	return {
		open: _open
	}
}());

/*************************************************************************************
* dialog
*************************************************************************************/
$$$.dialog = (function() {
	var _init = function(){
		$('body').append(
			'<div class="customDialog">\
				<div class="customDialog_overlay"></div>\
				<div class="customDialog_inner">\
				</div>\
			</div>'
		);
	}
	var _pause = function(){
		return new Promise(function(resolve, reject){
			$(document).on('click', '.customDialog_btn > a', function(event) {
				event.preventDefault();
				resolve($(this).data('btn-id'));
			});
		})
	}
	var _open = function(options){
		if (!$('.customDialog')[0]) { _init(); }

		$('.customDialog_inner').html('');
		var _btns = ''
		for (var i = 0, l = options.btns.length; i < l; i++) {
			_btns += '<li class="customDialog_btn"><a href="javascript: void(0);" data-btn-id="' + i + '">' + options.btns[i].txt +'</a></li>'
		}
		var _contents = '<p class="customDialog_txt">' + options.text + '</p><ul class="customDialog_btns">' + _btns + '</ul>';
		$('.customDialog_inner').append(_contents);

		$('.customDialog').switchClass('customDialog-isClose', 'customDialog-isOpen');

		_pause().then(
			function(id){
				_close();
				if (options.btns[id].ok) {options.btns[id].ok()}
			},
			function(){
				_close();
			}
		);

	}

	var _close = function(){
		$('.customDialog').switchClass('customDialog-isOpen', 'customDialog-isClose');
		$(document).off('.click', '.customDialog_btn > a');
	}


	return {
		open: _open
	};
}());

/*************************************************************************************
* loading
*************************************************************************************/
$$$.loading = (function() {
	var _init = function(){
		$('body').append(
			'<div class="customDialog">\
				<div class="customDialog_overlay"></div>\
				<div class="customDialog_inner">\
				</div>\
			</div>'
		);
	}
	var _open = function(options){
		if (!$('.customDialog')[0]) { _init(); }

		$('.customDialog_inner').html('');
		var _contents = '<p class="customDialog_txt">' + options.text + '</p>';
		$('.customDialog_inner').append(_contents);

		$('.customDialog').switchClass('customDialog-isClose', 'customDialog-isOpen');
	}

	var _close = function(){
		$('.customDialog').switchClass('customDialog-isOpen', 'customDialog-isClose');
	}


	return {
		open: _open,
		close: _close
	};
}());

/*************************************************************************************
* tab
*************************************************************************************/
$$$.tab = (function() {
	var _init = function(args) {
		$('[data-tab]').each(function(index, el) {
			$(this).find('[data-tab-content-active]').removeAttr('data-tab-content-active');
			var _index = 0;
			if ($(this).find('[data-tab-item][data-tab-item-active]').length > 0) {
				_index = $(this).find('[data-tab-item][data-tab-item-active]').eq(0).data('tab-item')
				$(this).find('[data-tab-item-active]').removeAttr('data-tab-item-active');
			}
			$(this).find('[data-tab-item]').eq(_index).attr('data-tab-item-active', '');
			$(this).find('[data-tab-content]').eq(_index).attr('data-tab-content-active', '');
		});
	}
	var _show = function(){
		var _$root = $(this).closest('[data-tab]');
		var _index = $(this).data('tab-item');
		_hide.call($(this));
		_$root.find('[data-tab-item=' + _index + ']').attr('data-tab-item-active', '');
		_$root.find('[data-tab-content=' + _index + ']').attr('data-tab-content-active', '');
	}
	var _hide = function(){
		$(this).closest('[data-tab]').find('[data-tab-content-active]').removeAttr('data-tab-content-active');
		$(this).closest('[data-tab]').find('[data-tab-item-active]').removeAttr('data-tab-item-active');
	}

	return {
		init: _init,
		show: _show,
		hide: _hide,
	};
}());

/*************************************************************************************
* tree
*************************************************************************************/
$$$.tree = (function() {
	var _init = function(args) {
		$('.tree_name-isActive').each(function(index, el) {
			var _$parent = $(this).parents('.tree_list');
			_$parent.addClass('tree_list-isOpen');
			_$parent.prev('.tree_head').find('.tree_toggle').addClass('tree_toggle-isOpen')
		});
	}
	var _open = function(args) {
		$(this).children('.tree_head').children('.tree_toggle').addClass('tree_toggle-isOpen');
		$(this).children('.tree_list').addClass('tree_list-isOpen');
	}
	var _close = function(args) {
		$(this).find('.tree_toggle').removeClass('tree_toggle-isOpen')
		$(this).find('.tree_list').removeClass('tree_list-isOpen')
	}
	var _toggle = function(args) {
		var _$root = $(this).closest('.tree_item');
		var _$btn = $(this).closest('.tree_toggle');
		if (_$btn.hasClass('tree_toggle-isOpen')) {
			_close.call(_$root)
		} else {
			_open.call(_$root)
		}
	}

	return {
		init: _init,
		toggle: _toggle,
	};
}());

/*************************************************************************************
* agree 同意しますか？のやつ
*************************************************************************************/
$$$.agree = function () {
	var _change = function _change(args) {
		var _$target = $(this).data('agree-target');
		if ($(this).data('agree-condition') === 'yes') {
			$('[data-agree="' + _$target + '"]').removeAttr('disabled');
		} else {
			$('[data-agree="' + _$target + '"]').attr('disabled', 'disabled');
		}
	};

	return {
		change: _change
	};
}();


/*************************************************************************************
* contentsModal
*************************************************************************************/
$$$.contentsModal = (function() {
	var _layers = [];
	var _onImgLoad = function(callback){
		$$$.imagesLoadListener.listen($('.contentsModal'), callback)
	}
	var _listTemplate = '<div class="contentsModal"><div class="contentsModal_list"></div></div>';
	var _itemTemplate = '<div class="contentsModal_item" data-anim="contentsModal_item"><a href="javascript: void(0);" class="contentsModal_overlay" data-anim="contentsModal_overlay"></a><div class="contentsModal_toolBar"><a href="javascript: void(0);" class="contentsModal_close"></a></div><div class="contentsModal_contents" data-anim="contentsModal_contents"><div class="contentsModal_body"></div></div><div class="contentsModal_loading" data-anim="contentsModal_loading"></div></div>';

	var _init = function(args) {
		$('body').append(_listTemplate);
	}
	var _destroy = function(args) {
		$('.contentsModal_body').html('');
		$('.contentsModal_contents').removeAttr('style')
	}
	var _ajax = function(url, $target, options) {
		$.ajax({
			url: url,
		})
		.done(function(data) {
			$target.find('.contentsModal_body').append(data);
		})
		.fail(function() {
			$target.find('.contentsModal_body').append('<p>読み込みエラー</p>');
		})
		.always(function() {
			if (options.width) {
				$target.find('.contentsModal_contents').css('width', options.width)
			}
			$$$.anim.enter.call($target)
			$$$.anim.enter.call($target.find('.contentsModal_overlay'))
			$$$.anim.enter.call($target.find('.contentsModal_loading'))
			_killScroll();
			_onImgLoad(function(){
				$$$.anim.enter.call($target.find('.contentsModal_contents'))
				$$$.anim.leave.call($target.find('.contentsModal_loading'))
			})
			_replace();
		});
	}
	var _html = function(url, $target, options) {
		$target.find('.contentsModal_body').append($(url).clone());
		$$$.anim.enter.call($target)
		if (options.width) {
			$target.find('.contentsModal_contents').css('width', options.width)
		}
		setTimeout(function(){
			$$$.anim.enter.call($target.find('.contentsModal_overlay'))
			_killScroll();
			$$$.anim.enter.call($target.find('.contentsModal_contents'))
		}, 100)
		_replace
	}
	var _open = function() {
		if (!$('.contentsModal')[0]) { _init() }
		$('.contentsModal_list').append(_itemTemplate)
		var _$target = $('.contentsModal_list').find('.contentsModal_item').last()

		// _destroy();
		var _url = $(this).attr('href');
		var _options = $(this).data('modal-contents')
		if (_url.match(/^#.+/)) {
			_html(_url, _$target, _options);
		} else {
			_ajax(_url, _$target, _options);
		}
	}
	var _close = function(){
		var _$target = $(this).closest('.contentsModal_item');
		$$$.anim.leave.call(_$target.find('.contentsModal_overlay'))
		$$$.anim.leave.call(_$target, function(){
			_$target.remove();
			_revivalScroll();
		})
	}
	var _noScroll = function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	}
	var _contentsScroll = function(e){
		if ($(this).scrollTop() === 0) {
			$(this).scrollTop(1);
			e.preventDefault();
			e.stopPropagation();
			return false;
		} else if($(this).scrollTop() + $(this).outerHeight() === $(this)[0].scrollHeight) {
			$(this).scrollTop($(this).scrollTop() - 1)
			e.preventDefault();
			e.stopPropagation();
			return false;
		} else {
			e.stopPropagation();
		}
	}
	var _killScroll = function(){
		$('html, body').css({
			overflowY: 'hidden'
		});
		$('.contentsModal_overlay').on('scroll wheel touchmove', _noScroll);
		$('.contentsModal_contents').on('scroll wheel touchmove', _contentsScroll);
	}
	var _revivalScroll = function(e){
		$('html, body').css({
			overflowY: 'inherit'
		});
		$('.contentsModal_overlay').off('scroll wheel touchmove', _noScroll);
		$('.contentsModal_contents').off('scroll wheel touchmove', _contentsScroll);
	}
	var _replace = function(){
		var _$target = $('.contentsModal_contents');
		if ($$$.pcsp.getMode() === 'pc') {
			_$target.each(function(index, el) {
				$(this).css({
					marginTop: $(this).outerHeight() / -2 + $(this).closest('.contentsModal_item').find('.contentsModal_toolBar').outerHeight() / 2,
					marginLeft: $(this).outerWidth() / -2,
				})
			});
		} else {
			_$target.each(function(index, el) {
				$(this).css({
					marginTop: 0,
					marginLeft: 0,
				})
			});
		}
	}


	return {
		open: _open,
		close: _close,
		replace: _replace,
	};
}());

/*************************************************************************************
* dummyImage生成
*************************************************************************************/
$$$.dummyImage = (function(){
	var _init = function(){
		$(this).each(function(index, el) {
			_setImg.call($(this));
		});
	}
	var _imageToBase64 = function(option){
		var canvas = document.createElement('canvas');
		canvas.width  = option.w;
		canvas.height = option.h;
		var ctx = canvas.getContext('2d');

		//背景
		ctx.fillStyle = option.background;
		ctx.fillRect(0, 0, option.w, option.h);
		ctx.lineWidth = 1;
		ctx.strokeStyle = option.borderColor;
		ctx.strokeRect(0, 0, option.w, option.h)

		//文字
		ctx.textBaseline = 'middle';
		ctx.fillStyle = option.color;
		ctx.font = option.fontSize + ' ' + option.fontFamily;
		ctx.textAlign = "center";
		ctx.fillText(option.str, canvas.width/2, canvas.height/2);
		return canvas.toDataURL('image/png');
	}
	var _setImg = function(){
		var _options = $(this).data('options')
		$(this).attr('src', _imageToBase64({
			str: _options.str || '',
			w: _options.w || 300,
			h: _options.h || 300,
			fontSize: _options.fontSize || '16px',
			fontFamily: _options.fontFamily || 'Arial',
			color: _options.color || '#000',
			background: _options.background || '#fff',
			borderColor: _options.borderColor || '#888',
		}))
	}

	return {
		init: _init,
		setImg: _setImg,
	}
}())

/*************************************************************************************
* fileForm
*************************************************************************************/
$$$.fileForm = (function() {
	var _parent;
	var _option;

	var _init = function(){

		$(document).on('dragover', '.fileForm_dropArea', function(event) {
			event.preventDefault();
			event.originalEvent.dataTransfer.dropEffect = 'copy';
			$(this).addClass('fileForm_dropArea-isDragOver')
		});

		$(document).on('dragleave', '.fileForm_dropArea', function(event) {
			event.preventDefault();
			$(this).removeClass('fileForm_dropArea-isDragOver')
		});

		$(document).on('drop', '.fileForm_dropArea', function(event) {
			event.preventDefault();
			event.stopPropagation();
			$(this).closest('.fileForm_dropArea').removeClass('fileForm_dropArea-isDragOver')
			_drop.call($(this), event.originalEvent.dataTransfer.files);
		});
	}

	var _add = function(args) {
		_parent = $(this).closest('.fileForm');
		_option = _parent.data('option') || {};

		if(_qtyError([''])){
			return false
		};

		var _$dom = _parent.find('.fileForm_item-template').clone().removeClass('fileForm_item-template');
		$(_$dom.find('[type="file"]')).on('change', function(event) {
			if(_typeError(_$dom.find('[type="file"]')[0].files[0]) || _sizeError(_$dom.find('[type="file"]')[0].files[0])) {
				return false
			}

			_$dom.find('span').text(_$dom.find('[type="file"]')[0].files[0].name);
			_parent.find('.fileForm_list').append(_$dom);
			$(this).off('change')

			// _fd.append('body', $('.contents').val())
		});
		_$dom.find('[type="file"]').trigger('click');
	}

	var _drop = function(files){
		_parent = $(this).closest('.fileForm');
		_option = _parent.data('option') || {};
		if(_qtyError(files)){
			return false
		};


		for (var i = 0, l = files.length; i < l; i++) {
			var _$dom = _parent.find('.fileForm_item-template').clone().removeClass('fileForm_item-template');
			if(_typeError(files[i]) || _sizeError(files[i])) {
				return false
			}
			var _fd = new FormData();
			_fd.append('file', files[i])

			$.ajax({
				url: '/', //ここに送信先
				type: 'POST',
				contentType: false,
				processData: false,
				data: _fd,
				dataType: 'json',
			})
			.done(function(res) {
				_$dom.find('[name*="selected"]').val(res.path)
				_$dom.find('[name*="original_name"]').val(res.name)
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});


			_$dom.find('span').text(files[i].name);
			_parent.find('.fileForm_list').append(_$dom);

			// _$dom.find('[type="file"]')[0] = files[i];
		}


	}

	var _qtyError = function(files){
		if (_option.maxQty && _parent.find('.fileForm_item').not('.fileForm_item-template').length + files.length > _option.maxQty) {
			$$$.alert.open({
				text: _option.maxQtyError
			})
			return true;
		}
	}

	var _typeError = function(file){
		if (_option.type && _option.type.length > 0 && _option.type.indexOf(file.name.toLowerCase().split('.').pop()) < 0) {

			$$$.alert.open({
				text: _option.typeError
			})
			return true;
		}
	}

	var _sizeError = function(file){
		if (_option.maxSize && _option.maxSize > 0 && file.size > _option.maxSize) {
			$$$.alert.open({
				text: _option.maxSizeError
			})
			return true;
		}
	}

	var _remove = function(){
		var _$this = $(this)
		$$$.confirm.open({
			text: '削除しますか？',
			ok: function(){
				_$this.closest('.fileForm_item').remove();
			},
			cancel: function(){}
		});
	}

	return {
		init: _init,
		add: _add,
		remove: _remove,
	};
}());

/*************************************************************************************
* コメント
*************************************************************************************/
/*$$$.moduleName = (function() {
	var _init = function() {
		var _args = $$$.parseArgs(arguments);
		console.log({
			callback: _args.callback,
			options: _args.options,
			values: _args.values
		});
	}

	return {
		init: _init,
	};
}());*/

