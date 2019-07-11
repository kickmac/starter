const $ = require('jquery');
/*************************************************************************************
* windowInfo
*************************************************************************************/

const _updateScroll = function(){
	_sc.top = $(window).scrollTop();
	_sc.bottom = _sc.top + _size.h;
	_sc.left = $(window).scrollLeft();
}
const _updateSize = function(){
	_size.w = $(window).innerWidth();
	_size.h = $(window).innerHeight();
}

const _init = function(){
	_updateScroll();
	_updateSize();
};

let _size = {
	w: 0,
	h: 0,
}
let _sc = {
	top: 0,
	bottom: 0,
	left: 0
}

module.exports = {
	init: _init,
	updateScroll: _updateScroll,
	updateSize: _updateSize,
	sc: _sc,
	size: _size,
}