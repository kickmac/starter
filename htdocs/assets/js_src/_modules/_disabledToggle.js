const $ = require('jquery');
/*************************************************************************************
* disabledToggle
*************************************************************************************/
const _init = function(){
	$('[data-disabled-target]:checked, select[data-disabled-target]').each(function (index, el) {
		_change.call($(this));
	});
}

const _change = function (args) {
	const _$target = $(this).data('disabled-target');
	if ($(this).data('disabled-condition') !== undefined || $(this).children('option[data-disabled-condition]')[0]) {
		if ($(this).data('disabled-condition') || $(this).children('option:selected').data('disabled-condition')) {
			_disabled(_$target)
		} else {
			_abled(_$target)
		}
	} else {
		if ($(this).prop('checked')) {
			_abled(_$target)
		} else {
			_disabled(_$target)
		}
	}
};

const _disabled = _$target => {
	$('[data-disabled="' + _$target + '"]').attr('disabled', 'disabled');
}
const _abled = _$target => {
	$('[data-disabled="' + _$target + '"]').removeAttr('disabled');
}

module.exports = {
	init: _init,
	change: _change
};

