const $ = require('jquery');
/*************************************************************************************
* displayToggle
*************************************************************************************/
const _init = function(){
	$('[data-display-target]:checked, select[data-display-target]').each(function (index, el) {
		_change.call($(this));
	});
}

const _change = function (args) {
	const _$target = $(this).data('display-target');
	if ($(this).data('display-condition') !== undefined || $(this).children('option[data-display-condition]')[0]) {
		if ($(this).data('display-condition') || $(this).children('option:selected').data('display-condition')) {
			_show(_$target)
		} else {
			_hide(_$target)
		}
	} else {
		if ($(this).prop('checked')) {
			_show(_$target)
		} else {
			_hide(_$target)
		}
	}
};

const _show = _$target => {
	// $('[data-display]').not(`[data-display="${_$target}"]`).hide();
	$(`[data-display="${_$target}"]`).fadeIn(400);
}
const _hide = _$target => {
	$(`[data-display="${_$target}"]`).hide();
}

module.exports = {
	init: _init,
	change: _change
};

