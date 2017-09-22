/*************************************************************************************
* アコーディオン
*************************************************************************************/
export default (function() {
	var _init = function(args) {
		$('[data-acc-body]').attr('style', '');
		$('[data-acc]').each(function(index, el) {
			var _$root = $(this);
			var _$btn = _$root.find('[data-acc-btn]');
			var _$body = _$root.find('[data-acc-body]');

			_$body
				.data('acc-max-h', _$body.outerHeight())
				.css({
					visibility: 'visible',
				});

			_slide.call(_$btn)
		});
	}
	var _slide = function(){
		var _$root = $(this).closest('[data-acc]');
		var _$btn = _$root.find('[data-acc-btn]');
		var _$body = _$root.find('[data-acc-body]');

		if (_$btn.attr('data-acc-btn') === 'open') {
			_$body.css({
				maxHeight: _$body.data('acc-max-h')
			})
		} else {
			_$body.css({
				maxHeight: 0
			})
		}
	}
	var _txtSwitch = function(){
		var _$root = $(this).closest('[data-acc]');
		var _$txt = _$root.find('[data-acc-btn-txt]');
		var _cash = '';

		if (!_$txt) { return false }
		_$txt.each(function(index, el) {
			if ( $(this).data('acc-btn-txt') === '') { return false }
			_cash =$(this).text();
			$(this).text($(this).data('acc-btn-txt'));
			$(this).data('acc-btn-txt', _cash);
		});

	}
	var _toggle = function(){
		var _$btns = $(this).closest('[data-acc]').find('[data-acc-btn]');
		if ($(this).attr('data-acc-btn') === 'open') {
			_$btns.each(function(index, el) {
				$(this).attr('data-acc-btn', '');
			});
		} else {
			_$btns.each(function(index, el) {
				$(this).attr('data-acc-btn', 'open');
			});
		}
		_txtSwitch.call($(this));
		_slide.call($(this));
	}

	return {
		init: _init,
		reinit: _init,
		toggle: _toggle
	};
}());