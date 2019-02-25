var $$$ = $$$ || {};
/*************************************************************************************
* windowInfo
*************************************************************************************/
$$$.windowInfo = (function(){
	var _init = function(){
		_size.w = $(window).innerWidth();
		_size.h = $(window).innerHeight();
		_sc.top = $(window).scrollTop();
		_sc.bottom = _sc.top + _size.h;
		_sc.left = $(window).scrollLeft();
	}
	var _size = {
		w: 0,
		h: 0,
	}
	var _sc = {
		top: 0,
		bottom: 0,
		left: 0
	}

	return {
		init: _init,
		sc: _sc,
		size: _size,
	}
}())