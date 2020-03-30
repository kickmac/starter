const $ = require('jquery');
/*************************************************************************************
* 画像preload
*************************************************************************************/
const listen = function(elem, cb){
	const _imgs = elem.find('img');
	let _counter = 0;

	if (!_imgs[0]) {
		cb();
		return false;
	}

	for (let i = 0, l = _imgs.length; i < l; i++) {
		var _img = new Image();

		_img.onload = function(){
			_counter++;
			_judge(_counter, l, cb)
		}
		_img.onerror = function(){
			_counter++;
			_judge(_counter, l, cb)
		}
		_img.src = _imgs.eq(i).attr('src');
	}
}

const _judge = function(a, b, cb){
	if (a !== b) { return false }
		cb();
}

module.exports = {
	listen,
}