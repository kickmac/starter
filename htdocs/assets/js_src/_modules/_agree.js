var $$$ = $$$ || {};
/*************************************************************************************
* agree 同意しますか？のやつ
*************************************************************************************/
//yesのチェック1個ならこっち
$$$.agree = function () {
	var _change = function _change(args) {
		var _$target = $(this).data('agree-target');
		if ($(this).prop('checked')) {
			$('[data-agree="' + _$target + '"]').removeAttr('disabled');
		} else {
			$('[data-agree="' + _$target + '"]').attr('disabled', 'disabled');
		}
	};

	return {
		change: _change
	};
}();

// yes / no のラジオならこっち
// $$$.agree = function () {
// 	var _change = function _change(args) {
// 		var _$target = $(this).data('agree-target');
// 		if ($(this).data('agree-condition') === 'yes') {
// 			$('[data-agree="' + _$target + '"]').removeAttr('disabled');
// 		} else {
// 			$('[data-agree="' + _$target + '"]').attr('disabled', 'disabled');
// 		}
// 	};

// 	return {
// 		change: _change
// 	};
// }();