const $ = require('jquery');
/*************************************************************************************
* pcかスマホか判定（幅で）
*************************************************************************************/
let _breakpoint
let _mode;
let _oldMode;

const init = function(bp) {
	_breakpoint = bp;
	judge();
}
const judge = function(){
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

module.exports = {
	init,
	judge,
	get mode () {
		return _mode;
	},
	get breakpoint () {
		return _breakpoint;
	}
};