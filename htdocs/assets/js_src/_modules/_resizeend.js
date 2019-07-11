const $ = require('jquery');
/*************************************************************************************
* resizeend(幅のみ)
*************************************************************************************/
const _delta = 200;
let _rtime;
let _timeout = false;
let _ww = 0;

const _init = function(args) {
	_ww = $(window).width();

	$(window).on('resize', function(event) {
		_rtime = new Date();
		if (!_timeout) {
			_timeout = true;
			setTimeout(_judge, _delta);
		}
	});
}

const _judge = function(){
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
module.exports = {
	init: _init,
}
