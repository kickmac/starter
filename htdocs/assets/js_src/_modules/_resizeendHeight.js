/*************************************************************************************
* resizeendHeight
*************************************************************************************/

const _delta = 200;
let _rtime;
let _timeout = false;
let _wh = 0;

const _init = function(args) {
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
		if (_wh !== $(window).height()) {
			$(window).trigger('resizeendHeight');
		}
		_wh = $(window).height();
	}
}
module.exports = {
	init: _init,
}