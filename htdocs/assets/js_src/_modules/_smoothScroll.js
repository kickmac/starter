var $$$ = $$$ || {};
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
