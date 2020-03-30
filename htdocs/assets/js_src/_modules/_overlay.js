const $ = require('jquery');
const anim = require('../_utils/_anim');
/*************************************************************************************
* オーバーレイ
*************************************************************************************/
const open = function(){
	anim.enter.call($('.overlay'))
	$('.overlay').on('touchmove', function(event) {
		event.preventDefault();
	});
}
const close = function(){
	anim.leave.call($('.overlay'))
	$('.overlay').off('touchmove');
}
const toggle = function(){
	anim.toggle.call($('.overlay'))
}

module.exports = {
	open,
	close,
	toggle,
};
