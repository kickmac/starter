/*************************************************************************************
* vh adjust
*************************************************************************************/
let _vh = 0;
const _init = function(){
	_update();
}
const _update = function(){
	_vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', _vh + 'px');
}

module.exports = {
	init: _init,
	update: _update,
}
