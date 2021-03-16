/*************************************************************************************
* ajaxMore
*************************************************************************************/
const _init = function() {
	$(this).each(function(index, el) {
		const _$root = $(this);
		const _$btn = $(this).find('[data-ajax-more-btn]');

		const _option = $(this).data('ajax-more');

		if (_option.page * _option.per +  _option.default >= _option.total) {
			_$btn.remove();
			_$root.trigger('ajaxMore.allShow', [_option.page, _option.page * _option.per, _option.total]);
		}

		_$root.find('[data-ajax-more-btn]').on('click', function(event) {
			_load.call(this, _option);
		});

		_$root.trigger('ajaxMore.init', [_option.page, _option.page * _option.per, _option.total]);
	});
}

const _load = function(_option){
	const _$root = $(this).closest('[data-ajax-more]');
	const _$list = $(this).closest('[data-ajax-more]').find('[data-ajax-more-list]');
	const _$btn = $(this);


	$.ajax({
		url: _option.url,
		type: 'GET',
		dataType: 'html',
		data: {
			per: _option.per,
			total: _option.total,
			page: _option.page,
			customData: _option.data
		},
	})
	.done(function(res) {
		_option.page++;
		_$list.append(res)

		_$root.trigger('ajaxMore.show', [_option.page, _option.page * _option.per, _option.total])

		if (_option.page * _option.per +  _option.default  >= _option.total) {
			_$btn.remove();
			_$root.trigger('ajaxMore.allShow', [_option.page, _option.page * _option.per, _option.total]);
		}

	})
	.fail(function() {
		// console.log("error");
	})
	.always(function() {
		// console.log("complete");
	});
}

module.exports = {
	init: _init,
};

