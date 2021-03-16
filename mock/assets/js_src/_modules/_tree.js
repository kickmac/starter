const anim = require('../_utils/_anim.js');
/*************************************************************************************
* tree
*************************************************************************************/

const init = function(){
	$(this).attr('data-tree-root', '');

	$(this).find('[data-tree-current]').each(function(index, el) {
		open.call($(this).closest('[data-tree-item]').find('[data-tree-toggle]').eq(0))
		_ancestorOpen.call(this)
	});

	$(document).on('click', '[data-tree-root] [data-tree-toggle]', function(){
		toggle.call(this)
	})
}

const open = function(){
	const _$target = $(this).closest('[data-tree-item]').find('[data-tree-list]').eq(0);

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

const _ancestorOpen = function(){
	const _$t = $(this).closest('[data-tree-list]').closest('[data-tree-item]').find('[data-tree-toggle]').eq(0);
	if(!_$t[0]) { return false };
	open.call(_$t)
	_ancestorOpen.call(_$t)
}

module.exports = {
	init,
	open,
	close,
	toggle,
}