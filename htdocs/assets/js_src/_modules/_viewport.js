var $$$ = $$$ || {};
/*************************************************************************************
* タブレットにフィットさせる
*************************************************************************************/
$$$.viewport = (function() {
	var _tag = $('meta[name=viewport]');
	var _ww = ( $(window).innerWidth() < window.screen.width ) ? $(window).innerWidth() : window.screen.width; //get proper width
	var _mw = 1220;
	var _ratio =  _ww / _mw;

	var _init = function(args) {
		_tag.attr('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0');
		_ww = ( $(window).innerWidth() < window.screen.width ) ? $(window).innerWidth() : window.screen.width;
		_ratio =  _ww / _mw;
		if( _ww < _mw && _ww > 767){
			_tag.attr('content', 'width=' + _ww + ', initial-scale=' + _ratio + ', minimum-scale=' + _ratio + ', maximum-scale=' + _ratio);
		}
	}
	return {
		init: _init,
	};
}());