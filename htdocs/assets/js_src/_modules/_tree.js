const $ = require('jquery');
/*************************************************************************************
* tree
*************************************************************************************/
const _init = function(op) {
	return $(this).each(function(index, el) {
		let _options = {
			root: null,
			list: '[data-tree-list]',
			item: '[data-tree-item]',
			toggleBtn: '[data-tree-toggle]',

			beforeInit: null,
			afterInit: null,
			beforeOpen: null,
			afterOpen: null,
			beforeClose: null,
			afterClose: null,
		}
		$.extend(_options, op);

		_options.root = $(this);
		_options.list = $(this).find(_options.list);
		_options.item = $(this).find(_options.item);
		_options.toggleBtn = $(this).find(_options.toggleBtn);


		if (_options.beforeInit) {
			_options.beforeInit()
		}

		_options.root.attr('data-tree-root', '')
		_options.list.attr('data-tree-list', '');
		_options.item.attr('data-tree-item', '');
		_options.toggleBtn.each(function(index, el) {
			if ($(this).attr('data-tree-toggle')) {
				$(this).attr('data-tree-toggle', 'open');
				_open.call(this, _options)
			} else {
				$(this).attr('data-tree-toggle', '');
			}
		});


		$(_options.toggleBtn).on('click', function(event) {
			event.preventDefault();
			_toggle.call($(this), _options);
		});

		if (_options.afterInit) {
			_options.afterInit({
				root: _options.root,
				list: _options.list,
				item: _options.item,
				toggleBtn: _options.toggleBtn,
			})
		}

		$(this)[0].treeOptions = _options;

	});
}

const _open = function(_options){
	const _target = $(this).closest('[data-tree-item]').children('[data-tree-list]')

	if (_options.beforeOpen) {
		_options.beforeOpen({
			root: _options.root,
			list: _options.list,
			item: _options.item,
			toggleBtn: _options.toggleBtn,
			target: _target,
		})
	}

	$(this).attr('data-tree-toggle', 'open')
	$(this).closest('[data-tree-item]').children('[data-tree-list]').attr('data-tree-list', 'open')

	_target.off('transitionend webkitTransitionEnd')
	if (_options.afterOpen) {
		_target.on('transitionend webkitTransitionEnd', function(e){
			if(e.target === _target[0] && e.originalEvent.propertyName === "line-height") {
				_options.afterOpen({
					root: _options.root,
					list: _options.list,
					item: _options.item,
					toggleBtn: _options.toggleBtn,
					target: _target,
				})
			}
		})
	}
}

const _close = function(_options){
	const _target = $(this).closest('[data-tree-item]').children('[data-tree-list]')

	if (_options.beforeClose) {
		_options.beforeClose({
			root: _options.root,
			list: _options.list,
			item: _options.item,
			toggleBtn: _options.toggleBtn,
			target: _target,
		})
	}

	$(this).closest('[data-tree-item]').find('[data-tree-toggle]').attr('data-tree-toggle', '')
	$(this).closest('[data-tree-item]').find('[data-tree-list]').attr('data-tree-list', '')

	$(this).closest('[data-tree-item]').find('[data-tree-list]').off('transitionend webkitTransitionEnd')
	if (_options.afterClose) {
		_target.on('transitionend webkitTransitionEnd', function(e){
			if(e.target === _target[0] && e.originalEvent.propertyName === "line-height") {
				_options.afterClose({
					root: _options.root,
					list: _options.list,
					item: _options.item,
					toggleBtn: _options.toggleBtn,
					target: _target,
				})
			}
		})
	}
}

const _toggle = function(_options){
	if ($(this).attr('data-tree-toggle') === 'open') {
		_close.call($(this), _options)
	} else {
		_open.call($(this), _options)
	}
}

module.exports = {
	init: _init,
};
