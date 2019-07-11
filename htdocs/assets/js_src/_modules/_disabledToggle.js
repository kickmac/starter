const $ = require('jquery');
/*************************************************************************************
* disabledToggle
*************************************************************************************/
const _init = function(){
	$('[data-disabled-target]:checked').each(function (index, el) {
		$$$.disabledToggle.change.call($(this));
	});
}

const _change = function (args) {
	const _$target = $(this).data('disabled-target');

	if ($(this).data('disabled-condition')) {
		if (!$(this).data('disabled-condition')) {
			$('[data-disabled="' + _$target + '"]').removeAttr('disabled');
		} else {
			$('[data-disabled="' + _$target + '"]').attr('disabled', 'disabled');
		}
	} else {
		if ($(this).prop('checked')) {
			$('[data-disabled="' + _$target + '"]').removeAttr('disabled');
		} else {
			$('[data-disabled="' + _$target + '"]').attr('disabled', 'disabled');
		}
	}

};

module.exports = {
	init: _init,
	change: _change
};

