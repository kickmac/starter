const $ = require('jquery');
const viewport = require('../_modules/_viewport');
/*************************************************************************************
* resizeend
*************************************************************************************/
const _delta = 200;
let _rtime;
let _timeout = false;
let _ww = 0;
let _wh = 0;


const init = function(args) {
	_ww = $(window).width();
	_wh = $(window).height();

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
		viewport.update();

		if (_ww !== $(window).width() || _wh !== $(window).height()) {
			$(window).trigger('resizeend.any');
		}

		if (_ww !== $(window).width()) {
			$(window).trigger('resizeend.width');
			_ww = $(window).width();
		}

		if (_wh !== $(window).height()) {
			$(window).trigger('resizeend.height');
			_wh = $(window).height();
		}
	}
}
module.exports = {
	init,
}
