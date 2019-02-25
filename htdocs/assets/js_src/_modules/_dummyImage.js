var $$$ = $$$ || {};
/*************************************************************************************
* dummyImage生成
*************************************************************************************/
$$$.dummyImage = (function(){
	var _init = function(){
		$(this).each(function(index, el) {
			_setImg.call($(this));
		});
	}
	var _imageToBase64 = function(option){
		var canvas = document.createElement('canvas');
		canvas.width  = option.w;
		canvas.height = option.h;
		var ctx = canvas.getContext('2d');

		//背景
		ctx.fillStyle = option.background;
		ctx.fillRect(0, 0, option.w, option.h);
		ctx.lineWidth = 1;
		ctx.strokeStyle = option.borderColor;
		ctx.strokeRect(0, 0, option.w, option.h)

		//文字
		ctx.textBaseline = 'middle';
		ctx.fillStyle = option.color;
		ctx.font = option.fontSize + ' ' + option.fontFamily;
		ctx.textAlign = "center";
		ctx.fillText(option.str, canvas.width/2, canvas.height/2);
		return canvas.toDataURL('image/png');
	}
	var _setImg = function(){
		var _options = $(this).data('options')
		$(this).attr('src', _imageToBase64({
			str: _options.str || '',
			w: _options.w || 300,
			h: _options.h || 300,
			fontSize: _options.fontSize || '16px',
			fontFamily: _options.fontFamily || 'Arial',
			color: _options.color || '#000',
			background: _options.background || '#fff',
			borderColor: _options.borderColor || '#888',
		}))
	}

	return {
		init: _init,
		setImg: _setImg,
	}
}())
