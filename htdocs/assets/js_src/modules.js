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
* anchorJump
*************************************************************************************/
$$$.anchorJump = (function() {
	var _hash = location.hash
	var _jump = function(args) {
		if (_hash) {
			$(window).scrollTop($(_hash).offset().top);
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

	var _getOffset = function(){
		_hash = $(this).attr('href');
		if (_hash === '#') {
			_top = 0;
		} else {
			_top = $(_hash).offset().top;
		}
		return _top
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
* コメント
*************************************************************************************/
$$$.moduleName = (function() {
	var _init = function(args) {}

	return {
		init: _init,
	};
}());

