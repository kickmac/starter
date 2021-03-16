/*************************************************************************************
* tab
*************************************************************************************/
const _init = function(op) {
	return $(this).each(function(index, el) {
		const _options = Object.assign({
			btns: '[data-tab-btn]',
			contents: '[data-tab-content]',

			beforeInit: null,
			afterInit: null,
			beforeChange: null,
			afterChange: null,
		}, op)

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
	const _from = _options.root.attr('data-tab-root')
	const _to = $(this).attr('data-tab-btn')

	if (_from !== _to && _options.beforeChange) {
		_options.beforeChange(_from, _to, {
			root: _options.root,
			contents: _options.contents,
			btns: _options.btns,
		});
	}

	_options.contents.off('transitionend.tab')
	if (_from !== _to && _options.afterChange) {
		_options.contents.one('transitionend.tab', function(e){
			if(e.currentTarget === _options.contents[_to]) {
				_options.afterChange(_from, _to, {
					root: _options.root,
					contents: _options.contents,
					btns: _options.btns,
				});
			}
		})
	}

	_options.root.attr('data-tab-root', _to)
	_set(_options);

}

module.exports = {
	init: _init,
};
