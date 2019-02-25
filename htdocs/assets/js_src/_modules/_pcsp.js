var $$$ = $$$ || {};
/*************************************************************************************
* pcかスマホか判定（幅で）
*************************************************************************************/
$$$.pcsp = (function() {
	var _breakpoint = 736
	var _mode;
	var _oldMode;
	var _init = function(args) {
		_judge();
	}
	var _judge = function(){
		if (_mode) {
			_oldMode = _mode;
		}
		if ($(window).innerWidth() > _breakpoint) {
			_mode = 'pc'
		} else {
			_mode = 'sp'
		}

		//modeが変わったらpcsp.changedイベント発火
		if (_mode !== _oldMode) {
			$(window).trigger('pcsp.changed', [_mode]);
		}
	}
	var _getMode = function () {
		return _mode;
	}
	var _getBreakpoint = function () {
		return _breakpoint;
	}

	return {
		init: _init,
		judge: _judge,
		getMode: _getMode,
		getBreakpoint: _getBreakpoint,
	};
}());