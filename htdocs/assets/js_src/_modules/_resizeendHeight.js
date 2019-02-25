var $$$ = $$$ || {};
/*************************************************************************************
* resizeendHeight
*************************************************************************************/
$$$.resizeendHeight = (function(){
	var _delta = 200;
	var _rtime;
	var _timeout = false;
	var _wh = 0;

	var _init = function(args) {
		_wh = $(window).height();

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
			if (_wh !== $(window).height()) {
				$(window).trigger('resizeendHeight');
			}
			_wh = $(window).height();
		}
	}
	return {
		init: _init,
	}
}());