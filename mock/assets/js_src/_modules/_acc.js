/*************************************************************************************
* acc
*************************************************************************************/
const _init = function(op) {
	return $(this).each(function(index, el) {

		let _options = Object.assign({
			content: '[data-acc-content]',
			toggleBtn: '[data-acc-btn]',
			openBtn: '[data-acc-open-btn]',
			closeBtn: '[data-acc-close-btn]',

			beforeInit: null,
			afterInit: null,
			beforeResize: null,
			afterOpen: null,
			beforeClose: null,
			afterClose: null,
		}, op)

		_options.root = $(this);
		_options.content = $(this).find(_options.content);
		_options.toggleBtn = $(this).find(_options.toggleBtn);
		_options.openBtn = $(this).find(_options.openBtn);
		_options.closeBtn = $(this).find(_options.closeBtn);

		if (_options.beforeInit) {
			_options.beforeInit()
		}

		if (_options.root.attr('data-acc-root') !== 'open') {
			_options.root.attr('data-acc-root', '')
		}
		_options.content.attr('data-acc-content', '');
		_options.toggleBtn.attr('data-acc-btn', '');
		_options.openBtn.attr('data-acc-open-btn', '');
		_options.closeBtn.attr('data-acc-close-btn', '');

		_set(_options)

		_options.toggleBtn.on('click', function(event) {
			event.preventDefault();
			_toggle(_options)
		});
		_options.openBtn.on('click', function(event) {
			event.preventDefault();
			_open(_options)
		});
		_options.closeBtn.on('click', function(event) {
			event.preventDefault();
			_close(_options)
		});

		$(window).on('resizeend.any pcsp.changed', function(event) {
			event.preventDefault();
			_set(_options);
		});

		if (_options.afterInit) {
			_options.afterInit({
				root: _options.root,
				content: _options.content,
				toggleBtn: _options.toggleBtn,
				openBtn: _options.openBtn,
				closeBtn: _options.closeBtn,
			})
		}

		$(this)[0].accOptions = _options;
	});
}

const _reset = function(){
	$(this).each(function(index, el) {
		_set($(this)[0].accOptions)
	});
}

const _set = function(_options){

	_options.content.attr('style', '');
	_options.content.data('acc-max-h', _options.content.outerHeight())

	if (_options.root.attr('data-acc-root') !== 'open') {
		_options.content.css({
			maxHeight: 0,
		});
	} else {
		_options.content.css({
			maxHeight: _options.content.data('acc-max-h'),
		});
	}

	_options.content.css({
		visibility: 'visible',
	});

}

const _open = function(_options){
	if (_options.beforeOpen && _options.root.attr('data-acc-root') !== 'open') {
		_options.beforeOpen({
			root: _options.root,
			content: _options.content,
			toggleBtn: _options.toggleBtn,
			openBtn: _options.openBtn,
			closeBtn: _options.closeBtn,
		})
	}

	_options.content.off('transitionend webkitTransitionEnd')
	if (_options.afterOpen) {
		_options.content.on('transitionend webkitTransitionEnd', function(e){
			if(e.target === _options.content[0]) {
				_options.afterOpen({
					root: _options.root,
					content: _options.content,
					toggleBtn: _options.toggleBtn,
					openBtn: _options.openBtn,
					closeBtn: _options.closeBtn,
				});
			}
		})
	}

	_txtSwitch(_options)
	_options.root.attr('data-acc-root', 'open');
	_options.content.css({
		maxHeight: _options.content.data('acc-max-h')
	})
}

const _close = function(_options){
	if (_options.beforeClose && _options.root.attr('data-acc-root') === 'open') {
		_options.beforeClose({
			root: _options.root,
			content: _options.content,
			toggleBtn: _options.toggleBtn,
			openBtn: _options.openBtn,
			closeBtn: _options.closeBtn,
		})
	}

	_options.content.off('transitionend webkitTransitionEnd')
	if (_options.afterClose) {
		_options.content.on('transitionend webkitTransitionEnd', function(e){
			if(e.target === _options.content[0]) {
				_options.afterClose({
					root: _options.root,
					content: _options.content,
					toggleBtn: _options.toggleBtn,
					openBtn: _options.openBtn,
					closeBtn: _options.closeBtn,
				});
			}
		})
	}

	_txtSwitch(_options)
	_options.root.attr('data-acc-root', '');
	_options.content.css({
		maxHeight: 0
	})
}

const _txtSwitch = function(_options){
	const _$targets = _options.root.find('[data-acc-btn-txt]');
	_$targets.each(function(index, el) {
		const _cache = $(this).text();
		$(this).text($(this).attr('data-acc-btn-txt'));
		$(this).attr('data-acc-btn-txt', _cache)
	});
}

const _toggle = function(_options){
	if (_options.root.attr('data-acc-root') === 'open') {
		_close(_options)
	} else {
		_open(_options)
	}
}

module.exports = {
	init: _init,
	reset: _reset,
};
