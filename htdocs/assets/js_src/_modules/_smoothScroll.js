const $ = require('jquery')
require('jquery.easing')
const $$$ = {}

$$$.pcsp = require('./_pcsp');

/*************************************************************************************
* スムーズスクロール
*************************************************************************************/
const _config = {
	speed: 1000, // 'slow', 'fast', 1000
	easing: 'easeInOutQuad' // 'swing', 'linear'
}
let _hash;
let _top = 0;
let _adjust = 0;

const _getOffset = function(){
	if (location.pathname !== $(this)[0].pathname) {
		return false
	}

	_hash = $(this)[0].hash;
	if ($(this).attr('href') === '#') {
		_hash = '#'
		_top = 0;
	} else {
		_top = $(_hash).offset().top;
	}
	if ($$$.pcsp.getMode() === 'sp') {
		_adjust = 75 + 10;
	} else {
		_adjust = 20;
	}

	if (_hash) {
		return _top - _adjust
	} else {
		return false
	}
}
const _scroll = function(e){
	var $self = this;
	var _offset = _getOffset.call($self);

	if (_offset) {
		e.preventDefault();
		_stopScroll();
		$(window).on('wheel', function(event) {
			_stopScroll();
		});
		$('html,body').animate({
			scrollTop: _offset,
		},_config.speed, _config.easing, function(){
			$(window).off('wheel');
		});
	}

}
const _stopScroll = function(){
	$('html,body').stop();
}

module.exports = {
	scroll: _scroll,
};
