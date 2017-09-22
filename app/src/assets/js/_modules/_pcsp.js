/*************************************************************************************
* pcかスマホか判定（幅で）
*************************************************************************************/
export default (function($) {
	const _breakpoint = 736
	let _mode;
	let _oldMode;
	const _init = function(args) {
		_judge();
	}
	const _judge = function(){
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
	const _getMode = function(){
		return _mode
	}
	const _getBreakpoint = function(){
		return _breakpoint
	}
	return {
		init: _init,
		judge: _judge,
		getMode: _getMode,
		getBreakpoint: _getBreakpoint,
	};
}($));