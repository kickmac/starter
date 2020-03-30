const $ = require('jquery');
/*************************************************************************************
* displayToggle
*************************************************************************************/
const init = function(){
	$(this).each(function(index, el) {
		change.call(this)
	});
}

const change = function(){
	const _$target = $(this).data('display-target');
	let _flag;

	if ($(this)[0].type === 'checkbox') {
		_flag = _checkboxChange.call(this);
	} else if($(this)[0].type === 'radio') {
		_flag = _radioChange.call(this);
	} else if($(this)[0].localName === 'select') {
		_flag = _selectChange.call(this);
	}

	if (_flag) {
		$(`[data-display="${_$target}"]`).removeClass('hidden')
	} else {
		$(`[data-display="${_$target}"]`).addClass('hidden')
	}
}

const _checkboxChange = function(){
	let _flag = $(this).prop('checked');
	if ($(this).data('display-condition')) {
		_flag = !_flag;
	}
	return _flag;
}

const _radioChange = function(){
	const _name = $(this).data('display-target');
	let _flag = $(`[data-display-target="${_name}"]:checked`).data('display-condition');
	return _flag;
}

const _selectChange = function(){
	let _flag = $(this).children(':selected').eq(0).data('display-condition');
	if (_flag === undefined) {
		_flag = false;
	}
	return _flag;
}

module.exports = {
	init,
	change,
}





// const $ = require('jquery');
// /*************************************************************************************
// * displayToggle
// *************************************************************************************/
// const _init = function(){
// 	$('[data-display-target]:checked, select[data-display-target]').each(function (index, el) {
// 		_change.call($(this));
// 	});
// }

// const _change = function (args) {
// 	const _$target = $(this).data('display-target');
// 	const _isReverse = $(this).data('display-reverse') !== undefined;

// 	if ($(this).data('display-condition') !== undefined || $(this).children('option[data-display-condition]')[0]) {
// 		if ($(this).data('display-condition') || $(this).children('option:selected').data('display-condition')) {
// 			_show(_$target)
// 		} else {
// 			_hide(_$target)
// 		}
// 	} else {
// 		if ($(this).prop('checked')) {
// 			_isReverse ? _hide(_$target) : _show(_$target)
// 		} else {
// 			_isReverse ? _show(_$target) : _hide(_$target)
// 		}
// 	}
// };

// const _show = _$target => {
// 	// $('[data-display]').not(`[data-display="${_$target}"]`).hide();
// 	$(`[data-display="${_$target}"]`).fadeIn(400);
// }
// const _hide = _$target => {
// 	$(`[data-display="${_$target}"]`).hide();
// }

// module.exports = {
// 	init: _init,
// 	change: _change
// };

