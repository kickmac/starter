const pcsp = require('./_pcsp');
/*************************************************************************************
* anchorJump
*************************************************************************************/
const _hash = location.hash
let _adjust = 0;

const init = function(options) {
	const _options = Object.assign({
		adjust: 0,
		spAdjust: 0
	}, options);

	if (_hash) {
		if (pcsp.mode === 'sp') {
			_adjust = _options.spAdjust;
		} else {
			_adjust = _options.adjust;
		}
		$(window).scrollTop($(_hash).offset().top - _adjust);
	}
}
module.exports = {
	init,
};