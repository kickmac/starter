const pcsp = require('./_pcsp');

/*************************************************************************************
* スムーズスクロール
*************************************************************************************/
const _config = {
	speed: 1000, // 'slow', 'fast', 1000
	easing: 'swing' // 'swing', 'linear'
}
let _hash;
let _top = 0;

const _getOffset = function(options){
	if (location.pathname !== $(this)[0].pathname) {
		return false
	}

	let _adjust = 0;
	_hash = $(this)[0].hash;
	if ($(this).attr('href') === '#') {
		_hash = '#'
		_top = 0;
	} else {
		_top = $(_hash).offset().top;
	}
	if (pcsp.mode === 'sp') {
		_adjust = options.spAdjust;
	} else {
		_adjust = options.adjust;
	}

	if (_hash) {
		return _top - _adjust
	} else {
		return false
	}
}
const scroll = function(e, options){
	const $self = this;
	let _options = Object.assign({
		adjust: 0,
		spAdjust: 0
	}, options)

	let _offset = _getOffset.call($self, _options);

	if(_offset) {
		e.preventDefault()
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
	scroll,
};
