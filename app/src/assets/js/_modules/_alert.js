/*************************************************************************************
* アラート
*************************************************************************************/
export default (function() {
	const _init = () => {
		$('body').append(
			'<div class="customDialog">\
				<div class="customDialog_overlay"></div>\
				<div class="customDialog_inner">\
				</div>\
			</div>'
		);
	}
	let _pause = () => {
		return new Promise((resolve, reject) => {
			$(document).on('click', '.customDialog_btn-ok > a', function(event) {
				event.preventDefault();
				resolve();
			});
		})
	}
	const _open = (options) => {
		if (!$('.customDialog')[0]) { _init(); }

		$('.customDialog_inner').html('');
		let _contents = '<p class="customDialog_txt">' + options.text + '</p><ul class="customDialog_btns"><li class="customDialog_btn customDialog_btn-ok"><a href="javascript: void(0);">OK</a></li></ul>';
		$('.customDialog_inner').append(_contents);

		$('.customDialog').switchClass('customDialog-isClose', 'customDialog-isOpen');

		_pause().then(
			() => {
				_close();
				if (options.ok) {options.ok()}
			},
			() => {
				_close();
			}
		);

	}

	const _close = () => {
		$('.customDialog').switchClass('customDialog-isOpen', 'customDialog-isClose');
		$(document).off('.click', '.customDialog_btn > a');
	}


	return _open;
}());
