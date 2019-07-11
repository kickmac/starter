const $ = require('jquery')
require('jquery.easing')
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
const _scroll = function(){
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
const _stopScroll = function(){
	$('html,body').stop();
}

module.exports = {
	scroll: _scroll,
};
