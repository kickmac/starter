const $ = require('jquery')

const pcsp = require('./_pcsp');
/*************************************************************************************
* anchorJump
*************************************************************************************/
const _hash = location.hash
let _adjust = 0;

const init = function(args) {
	if (_hash) {
		if (pcsp.mode === 'sp') {
			_adjust = 63 + 10;
		} else {
			_adjust = 0;
		}
		$(window).scrollTop($(_hash).offset().top - _adjust);
	}
}
module.exports = {
	init,
};