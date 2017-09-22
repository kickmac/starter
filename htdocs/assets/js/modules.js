var $$$ = $$$ || {};
$(function() {
	/*************************************************************************************
	* pcかスマホか判定（幅で）
	*************************************************************************************/
	$$$.pcsp = (function() {
		var _breakpoint = 600
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
		_init();
		return {
			init: _init,
			judge: _judge,
			get mode(){ return _mode },
			get breakpoint(){ return _breakpoint },
		};
	}());

	/*************************************************************************************
	* コメント
	*************************************************************************************/
	$$$.moduleName = (function() {
		var _init = function(args) {}

		return {
			init: _init,
		};
	}());

});