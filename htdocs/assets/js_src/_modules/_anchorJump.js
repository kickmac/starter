var $$$ = $$$ || {};
/*************************************************************************************
* anchorJump
*************************************************************************************/
$$$.anchorJump = (function() {
	var _hash = location.hash
	var _adjust = 0;

	var _jump = function(args) {
		if (_hash) {
			if ($$$.pcsp.getMode() === 'sp') {
				_adjust = 63 + 10;
			} else {
				_adjust = 0;
			}
			$(window).scrollTop($(_hash).offset().top - _adjust);
		}
	}
	return {
		init: _jump,
	};
}());
