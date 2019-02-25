var $$$ = $$$ || {};
/*************************************************************************************
* オーバーレイ
*************************************************************************************/
$$$.overlay = (function() {
	var _init = function(args) {}
	var _open = function(){
		$$$.anim.enter.call($('.overlay'))
		$('.overlay').on('touchmove', function(event) {
			event.preventDefault();
		});
	}
	var _close = function(){
		$$$.anim.leave.call($('.overlay'))
		$('.overlay').off('touchmove');
	}
	var _toggle = function(){
		$$$.anim.toggle.call($('.overlay'))
	}

	return {
		open: _open,
		close: _close,
		toggle: _toggle,
	};
}());
