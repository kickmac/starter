/*************************************************************************************
* オーバーレイ
*************************************************************************************/
export default (function() {
	var _init = function(args) {}
	var _open = function(){
		$('.overlay').switchClass('overlay-isClose', 'overlay-isOpen');
	}
	var _close = function(){
		if ($('.overlay').hasClass('overlay-isOpen')) {
			$('.overlay').switchClass('overlay-isOpen', 'overlay-isClose');
		}
	}
	var _toggle = function(){
		if ($('.overlay').hasClass('overlay-isOpen')) {
			$('.overlay').switchClass('overlay-isOpen', 'overlay-isClose');
		} else {
			$('.overlay').switchClass('overlay-isClose', 'overlay-isOpen');
		}
	}

	return {
		init: _init,
		open: _open,
		close: _close,
		toggle: _toggle,
	};
}());
