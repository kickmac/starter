const $ = require('jquery');
/*************************************************************************************
* disabledToggle
*************************************************************************************/
const init = function(){
	$(this).each(function(index, el) {
		change.call(this)
	});
}

const change = function(){
	const _$target = $(this).data('disabled-target');
	let _flag;

	if ($(this)[0].type === 'checkbox') {
		_flag = _checkboxChange.call(this);
	} else if($(this)[0].type === 'radio') {
		_flag = _radioChange.call(this);
	} else if($(this)[0].localName === 'select') {
		_flag = _selectChange.call(this);
	}

	$(`[data-disabled="${_$target}"]`).prop('disabled', _flag)
}

const _checkboxChange = function(){
	let _flag = !$(this).prop('checked');
	if ($(this).data('disabled-condition')) {
		_flag = !_flag;
	}
	return _flag;
}

const _radioChange = function(){
	const _name = $(this).data('disabled-target');
	let _flag = $(`[data-disabled-target="${_name}"]:checked`).data('disabled-condition');
	return _flag;
}

const _selectChange = function(){
	let _flag = $(this).children(':selected').eq(0).data('disabled-condition');
	if (_flag === undefined) {
		_flag = true;
	}
	return _flag;
}

module.exports = {
	init,
	change,
}
