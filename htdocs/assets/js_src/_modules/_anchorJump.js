/*************************************************************************************
* anchorJump
*************************************************************************************/
export default (function() {
	var _hash = location.hash
	var _jump = function(args) {
		if (_hash) {
			$(window).scrollTop($(_hash).offset().top);
		}
	}
	return {
		init: _jump,
	};
}());
