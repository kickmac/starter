/*************************************************************************************
* tab
*************************************************************************************/
const _init = function(op) {
	return $(this).each(function(index, el) {
		let _options = {
			btns: '[data-tab-btn]',
			contents: '[data-tab-content]',

			beforeInit: null,
			afterInit: null,
			beforeChange: null,
			afterChange: null,
		}
		$.extend(_options, op);
		_options.root = $(this);
		_options.btns = $(this).find(_options.btns);
		_options.contents = $(this).find(_options.contents);

		if (_options.beforeInit) {
			_options.beforeInit();
		}

		if (!_options.root.attr('data-tab-root')) {
			_options.root.attr('data-tab-root', 0)
		}
		_options.btns.each(function(index, el) {
			if (!$(this).attr('data-tab-btn')) {
				$(this).attr('data-tab-btn', index)
			}
		});
		_options.contents.each(function(index, el) {
			if (!$(this).attr('data-tab-content')) {
				$(this).attr('data-tab-content', index)
			}
		});

		_set(_options);

		_options.btns.on('click', function(event) {
			event.preventDefault();
			_change.call($(this), _options)
		});

		if (_options.afterInit) {
			_options.afterInit({
				root: _options.root,
				contents: _options.contents,
				btns: _options.btns,
			});
		}

		$(this)[0].taboptions = _options;
	});
}

const _set = function(_options){
	const _index = _options.root.attr('data-tab-root')

	_options.btns.removeAttr('data-tab-btn-active');
	_options.contents.removeAttr('data-tab-content-active');

	_options.root.find(`[data-tab-btn="${_index}"]`).attr('data-tab-btn-active', '')
	_options.root.find(`[data-tab-content="${_index}"]`).attr('data-tab-content-active', '')
}

const _change = function(_options){
	if (_options.beforeChange) {
		_options.beforeChange({
			root: _options.root,
			contents: _options.contents,
			btns: _options.btns,
		});
	}

	const _index = $(this).attr('data-tab-btn')
	_options.root.attr('data-tab-root', _index)

	_set(_options);

	_options.contents.off('transitionend webkitTransitionEnd')
	if (_options.afterChange) {
		_options.contents.on('transitionend webkitTransitionEnd', function(e){
			if(e.target === _options.contents[0]) {
				_options.afterChange({
					root: _options.root,
					contents: _options.contents,
					btns: _options.btns,
				});
			}
		})
	}
}

module.exports = {
	init: _init,
};
