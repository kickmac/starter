const $ = require('jquery');
const anim = require('../_utils/_anim');
/*************************************************************************************
* オーバーレイ
*************************************************************************************/
const _open = function(){
	anim.enter.call($('.overlay'))
	$('.overlay').on('touchmove', function(event) {
		event.preventDefault();
	});
}
var _close = function(){
	anim.leave.call($('.overlay'))
	$('.overlay').off('touchmove');
}
var _toggle = function(){
	anim.toggle.call($('.overlay'))
}

module.exports = {
	open: _open,
	close: _close,
	toggle: _toggle,
};
