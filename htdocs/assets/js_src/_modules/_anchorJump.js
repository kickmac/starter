const $ = require('jquery')
/*************************************************************************************
* anchorJump
*************************************************************************************/
const _hash = location.hash
let _adjust = 0;

const _init = function(args) {
	if (_hash) {
		if ($$$.pcsp.getMode() === 'sp') {
			_adjust = 63 + 10;
		} else {
			_adjust = 0;
		}
		$(window).scrollTop($(_hash).offset().top - _adjust);
	}
}
module.exports = {
	init: _init,
};