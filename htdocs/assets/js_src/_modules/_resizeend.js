var $$$ = $$$ || {};
/*************************************************************************************
* resizeend(幅のみ)
*************************************************************************************/
$$$.resizeend = (function(){
	var _delta = 200;
	var _rtime;
	var _timeout = false;
	var _ww = 0;

	var _init = function(args) {
		_ww = $(window).width();

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
			$$$.viewport.init();
			if (_ww !== $(window).width()) {
				$(window).trigger('resizeend');
			}
			_ww = $(window).width();
		}
	}
	return {
		init: _init,
	}
}());