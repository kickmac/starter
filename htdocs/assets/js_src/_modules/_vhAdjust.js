var $$$ = $$$ || {};
/*************************************************************************************
* vh adjust
*************************************************************************************/
$$$.vhAdjust = (function(){
	var _vh = 0;
	var _init = function(){
		_vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', _vh + 'px');
	}
	return {
		init: _init,
	}
}());
