var $$$ = $$$ || {};
/*************************************************************************************
* tree
*************************************************************************************/
$$$.tree = (function() {
	var _init = function(op) {
		return $(this).each(function(index, el) {
			var _options = {
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
			_options.toggleBtn.attr('data-tree-toggle', '');


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
	var _open = function(_options){
		var _target = $(this).closest('[data-tree-item]').children('[data-tree-list]')

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
	var _close = function(_options){
		var _target = $(this).closest('[data-tree-item]').children('[data-tree-list]')

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
	var _toggle = function(_options){
		if ($(this).attr('data-tree-toggle') === 'open') {
			_close.call($(this), _options)
		} else {
			_open.call($(this), _options)
		}
	}

	return {
		init: _init,
	};
}());

/*************************************************************************************
* tree
*************************************************************************************/

// $$$.tree = (function() {
// 	var _init = function(args) {
// 		$('.tree_name-isActive').each(function(index, el) {
// 			var _$parent = $(this).parents('.tree_list');
// 			_$parent.addClass('tree_list-isOpen');
// 			_$parent.prev('.tree_head').find('.tree_toggle').addClass('tree_toggle-isOpen')
// 		});
// 	}
// 	var _open = function(args) {
// 		$(this).children('.tree_head').children('.tree_toggle').addClass('tree_toggle-isOpen');
// 		$(this).children('.tree_list').addClass('tree_list-isOpen');
// 	}
// 	var _close = function(args) {
// 		$(this).find('.tree_toggle').removeClass('tree_toggle-isOpen')
// 		$(this).find('.tree_list').removeClass('tree_list-isOpen')
// 	}
// 	var _toggle = function(args) {
// 		var _$root = $(this).closest('.tree_item');
// 		var _$btn = $(this).closest('.tree_toggle');
// 		if (_$btn.hasClass('tree_toggle-isOpen')) {
// 			_close.call(_$root)
// 		} else {
// 			_open.call(_$root)
// 		}
// 	}

// 	return {
// 		init: _init,
// 		toggle: _toggle,
// 	};
// }());