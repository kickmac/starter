/*************************************************************************************
* resizeend
*************************************************************************************/
const _delta = 200;
let _rtime;
let _timeout = false;
let _ww = 0;
let _wh = 0;


const init = function(args) {
	_ww = $(window).innerWidth();
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

		if (_ww !== $(window).innerWidth() || _wh !== $(window).height()) {
			$(window).trigger('resizeend.any');
		}

		if (_ww !== $(window).innerWidth()) {
			$(window).trigger('resizeend.width');
			_ww = $(window).innerWidth();
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
