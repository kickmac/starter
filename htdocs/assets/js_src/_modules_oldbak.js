$.fn.extend({
	switchClass : function(before, after) {
		$(this).removeClass(before)
		$(this).addClass(after)
	},
})

var $$$ = $$$ || {};
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
	}
	var _close = function(){
		if ($('.overlay').hasClass('overlay-isOpen')) {
			$('.overlay').switchClass('overlay-isOpen', 'overlay-isClose');
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
	var _onImgLoad = function(callback){
		if ($('.contentsModal img')[0]) {
			$('.contentsModal img').each(function(){
				if (this.complete || /*for IE 10-*/ $(this).height() > 0) {
					callback.apply(this);
				} else {
					$(this).on('load', function(){
						callback.apply(this);
					});
				}
			});
		} else {
			callback();
		}
	}
	var _init = function(args) {
		$('body').append('<div class="contentsModal"><a href="javascript: void(0);" class="contentsModal_overlay"></a><div class="contentsModal_toolBar"><a href="javascript: void(0);" class="contentsModal_close"></a></div><div class="contentsModal_contents"></div></div>');
	}
	var _destroy = function(args) {
		$('.contentsModal_contents').html('');
	}
	var _ajax = function(url) {
		$.ajax({
			url: url,
			// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			// data: {param1: 'value1'},
		})
		.done(function(data) {
			$('.contentsModal_contents').append(data);
		})
		.fail(function() {
			$('.contentsModal_contents').append('<p>読み込みエラー</p>');
		})
		.always(function() {
			_onImgLoad(function(){
				$('.contentsModal').switchClass('contentsModal-isClose', 'contentsModal-isOpen');
			})
		});
	}
	var _html = function(url) {
		$('.contentsModal_contents').append($(url).clone());
		$('.contentsModal').switchClass('contentsModal-isClose', 'contentsModal-isOpen');
	}
	var _open = function() {
		if (!$('.contentsModal')[0]) { _init() }
		_destroy();
		var _url = $(this).attr('href');
		if (_url.match(/^#.+/)) {
			_html(_url);
		} else {
			_ajax(_url);
		}
	}
	var _close = function(){
		$('.contentsModal').switchClass('contentsModal-isOpen', 'contentsModal-isClose');
	}

	return {
		open: _open,
		close: _close,
	};
}());

/*************************************************************************************
* コメント
*************************************************************************************/
$$$.moduleName = (function() {
	var _init = function(args) {}

	return {
		init: _init,
	};
}());
