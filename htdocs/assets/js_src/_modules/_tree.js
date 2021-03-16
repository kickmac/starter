const anim = require('../_utils/_anim.js');
/*************************************************************************************
* tree
*************************************************************************************/

const init = function(){
	$(this).attr('data-tree-root', '');
	$(document).on('click', '[data-tree-root] [data-tree-toggle]', function(){
		toggle.call(this)
	})
}

const open = function(){
	const _$target = $(this).closest('[data-tree-item]').children('[data-tree-list]');

	$(this).attr('data-tree-toggle', 'open');
	_$target.attr('data-tree-list', 'open');

	_$target.off('transitionend webkitTransitionEnd');
	_$target.on('transitionend webkitTransitionEnd', function(event) {
		event.preventDefault();
		_$target
			.css({
				maxHeight: 'none'
			})
			.off('transitionend webkitTransitionEnd')
	});

	_$target.css({
		maxHeight: _$target.outerHeight()
	});
	setTimeout(function(){
		_$target.css({
			maxHeight: _$target[0].scrollHeight
		});
	}, 10)

}

const close = function(){
	const _$target = $(this).closest('[data-tree-item]').children('[data-tree-list]');

	$(this).attr('data-tree-toggle', '');
	_$target.attr('data-tree-list', '');

	_$target.off('transitionend webkitTransitionEnd');
	_$target.on('transitionend webkitTransitionEnd', function(event) {
		event.preventDefault();
		_$target
			.removeAttr('style')
			.off('transitionend webkitTransitionEnd')
	});

	_$target.css({
		maxHeight: _$target.outerHeight()
	});
	setTimeout(function(){
		_$target.css({
			maxHeight: 0
		});
	}, 10)
}

const toggle = function(){
	if ($(this).closest('[data-tree-item]').children('[data-tree-list]').attr('data-tree-list') === 'open') {
		close.call(this)
	} else {
		open.call(this)
	}
}

module.exports = {
	init,
	open,
	close,
	toggle,
}