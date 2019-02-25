var $$$ = $$$ || {};
/*************************************************************************************
* 画像preload
*************************************************************************************/
$$$.imagesLoadListener = (function(){
	var _listen = function(elem, cb){
		var _imgs = elem.find('img');
		var _counter = 0;

		if (!_imgs[0]) {
			cb();
			return false;
		}

		for (var i = 0, l = _imgs.length; i < l; i++) {
			var _img = new Image();

			_img.onload = function(){
				_counter++;
				_judge(_counter, i, cb)
			}
			_img.onerror = function(){
				_counter++;
				_judge(_counter, i, cb)
			}
			_img.src = _imgs.eq(i).attr('src');
		}
	}

	var _judge = function(a, b, cb){
		if (a !== b) { return false }
			cb();
	}

	return {
		listen: _listen,
	}
})();