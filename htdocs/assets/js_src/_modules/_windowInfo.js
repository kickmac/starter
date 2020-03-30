const $ = require('jquery');
/*************************************************************************************
* windowInfo
*************************************************************************************/

const updateScroll = function(){
	_sc.top = $(window).scrollTop();
	_sc.bottom = _sc.top + _size.h;
	_sc.left = $(window).scrollLeft();
}
const updateSize = function(){
	_size.w = $(window).innerWidth();
	_size.h = $(window).innerHeight();
}

const init = function(){
	updateScroll();
	updateSize();
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
	init,
	updateScroll,
	updateSize,
	get sc(){
		return _sc
	},
	get size(){
		return _size
	},
}