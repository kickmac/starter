const $ = require('jquery');
/*************************************************************************************
* タブレットにフィットさせる
*************************************************************************************/

const _tag = $('meta[name=viewport]');

let _maxWidth;
let _minWidth;

const _init = function(maxWidth, minWidth) {
	_maxWidth = maxWidth;
	_minWidth = minWidth;
	_update()
}

const _update = function() {
	_tag.attr('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0');
	const _ww = ( $(window).innerWidth() < window.screen.width ) ? $(window).innerWidth() : window.screen.width;
	const _ratio =  _ww / _maxWidth;
	if( _ww < _maxWidth && _ww > _minWidth){
		_tag.attr('content', 'width=' + _ww + ', initial-scale=' + _ratio + ', minimum-scale=' + _ratio + ', maximum-scale=' + _ratio);
	}
}

module.exports = {
	init: _init,
	update: _update,
}