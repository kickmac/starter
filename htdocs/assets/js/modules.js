var $$$ = $$$ || {};
$(function() {
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
		_init();
		return {
			init: _init,
			judge: _judge,
			get mode(){ return _mode },
			get breakpoint(){ return _breakpoint },
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
			reinit: _init,
			toggle: _toggle
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

});