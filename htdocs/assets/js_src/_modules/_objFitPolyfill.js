var $$$ = $$$ || {};
/*************************************************************************************
* objFitPolyfill
*************************************************************************************/
$$$.objFitPolyfill = (function() {
	var _init = function() {
		$('[data-object-fit]').removeAttr('style').unwrap('.js-objectFitPolyfil');

		var _img = $('<img />');
		_img.css({
			objectFit: 'cover'
		})
		if (!_img.css('object-fit')) {
			$('[data-object-fit]').each(function(index, el) {
				_fit.call($(this))
			});
		}
	}
	var _fit = function(){
		var _mode = $(this).data('object-fit') || 'scale-down';

		var _size = {
			natural: {
				w: $(this)[0].naturalWidth,
				h: $(this)[0].naturalHeight,
				ratio: $(this)[0].naturalHeight / $(this)[0].naturalWidth
			},
			assigned: {
				w: $(this).width(),
				h: $(this).height(),
				ratio: $(this).height() / $(this).width()
			}
		}
		$(this).wrap('<div class="js-objectFitPolyfil" />')
		$(this).parent('.js-objectFitPolyfil').css({
			width: _size.assigned.w,
			height: _size.assigned.h,
		})

		if (_mode === 'cover') {
			_cover.call($(this), _size)
		} else if(_mode === 'contain') {
			_contain.call($(this), _size)
		} else if(_mode === 'scale-down') {
			_scaleDown.call($(this), _size)
		}
		_rePosition.call($(this), _size)
	}

	var _cover = function(_size){
		if (_size.natural.ratio < _size.assigned.ratio) {
			$(this).height('100%')
		} else {
			$(this).width('100%')
		}
	}

	var _contain = function(_size){
		if (_size.natural.ratio < _size.assigned.ratio) {
			$(this).width('100%');
		} else {
			$(this).height('100%')
		}
	}

	var _scaleDown = function(_size){
		if (_size.natural.ratio < _size.assigned.ratio) {
			$(this).css('max-width', '100%');
		} else {
			$(this).css('max-height', '100%');
		}
	}

	var _rePosition = function(_size){

		var _position = $(this).data('object-position') || '.5 .5';
		_position = _position.split(' ');
		_position = $.grep(_position, function(e){return e !== '';});

		if (_position.length === 1 ) {
			_position[1] = '.5'
		}
		for (var i = 0, l = _position.length; i < l; i++) {
			if (_position[i].match(/%/)) {
				_position[i] = parseFloat(_position[i]) / 100
			}

			if (_position[i] === 'center') {
				_position[i] = .5
			} else if(_position[i] === 'left' || _position[i] === 'top') {
				_position[i] = 0
			}else if(_position[i] === 'right' || _position[i] === 'bottom') {
				_position[i] = 1
			}

		}

		$(this).css({
			top: (typeof _position[1] === 'string' && _position[1].match(/px/)) ? parseInt(_position[1]) : ( _size.assigned.h - $(this).height() ) * _position[1],
			left: (typeof _position[0] === 'string' && _position[0].match(/px/)) ? parseInt(_position[0]) :( _size.assigned.w - $(this).width() ) * _position[0],
		})
	}

	return {
		init: _init,
	};
}());
