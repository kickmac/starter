const $ = require('jquery');
const $$$ = {}

$$$.windowInfo = require('./_windowInfo');
/*************************************************************************************
* sticky
*************************************************************************************/
const _init = function(op) {
	$$$.windowInfo.init();
	return $(this).each(function(index, el) {
		const _$this = $(this);

		_$this[0].stickyOptions = {
			mode: 'top',
			content: null,
			container: '[data-sticky-container]',
			placeholder: '[data-sticky-placeholder]',
			adjust: {
				top: 0,
				bottom: 0,
			},
			beforeInit: null,
			afterInit: null,
			beforeStartLock: null,
			afterStartLock: null,
			beforeSticky: null,
			afterSticky: null,
			beforeEndLock: null,
			afterendLock: null,
			contentInfo: {
				size: {
					width: 0,
					height: 0,
				},
				offset: {
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
				}
			},
			containerInfo: {
				size: {
					width: 0,
					height: 0,
				},
				offset: {
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
				}
			}
		};

		$.extend(true, _$this[0].stickyOptions, op);

		if (_$this[0].stickyOptions.beforeInit) {
			_$this[0].stickyOptions.beforeInit()
		}


		_$this[0].stickyOptions.content = $(this);
		_$this[0].stickyOptions.container = $(this).closest(_$this[0].stickyOptions.container)[0] ?  $(this).closest(_$this[0].stickyOptions.container) : $(this).parent();
		_$this[0].stickyOptions.placeholder = _$this[0].stickyOptions.content.wrap('<div data-sticky-placeholder />').parent('[data-sticky-placeholder]')

		_$this[0].stickyOptions.content.attr('data-sticky-content', '')
		_$this[0].stickyOptions.container.attr('data-sticky-container', '')

		_set(_$this[0].stickyOptions)

		_judge(_$this[0].stickyOptions)

		$(window).on('scroll', function(event) {
			event.preventDefault();
			if(!_$this[0].stickyOptions){ return false };
			_judge(_$this[0].stickyOptions)
			_leftScroll(_$this[0].stickyOptions)
		});

		if (_$this[0].stickyOptions.afterInit) {
			_$this[0].stickyOptions.afterInit({
				mode: _$this[0].stickyOptions.mode,
				content: _$this[0].stickyOptions.content,
				container: _$this[0].stickyOptions.container,
				placeholder: _$this[0].stickyOptions.placeholder,
				adjust: _$this[0].stickyOptions.adjust,
				contentInfo: _$this[0].stickyOptions.contentInfo,
				containerInfo:  _$this[0].stickyOptions.containerInfo,
			})
		}

		_$this[0].stickyOptions = _$this[0].stickyOptions
	});
}

const _set = function(_options){
		_options.content.removeAttr('style').attr('data-sticky-content', '');
		_options.placeholder.removeAttr('style');

		_options.containerInfo.size.width = _options.container.outerWidth();
		_options.containerInfo.size.height = _options.container.outerHeight();
		_options.containerInfo.offset.top = _options.container.offset().top;
		_options.containerInfo.offset.left = _options.container.offset().left;
		_options.containerInfo.offset.bottom = _options.containerInfo.offset.top + _options.containerInfo.size.height;
		_options.containerInfo.offset.right = _options.containerInfo.offset.left + _options.containerInfo.size.width;

		_options.contentInfo.size.width = _options.content.outerWidth();
		_options.contentInfo.size.height = _options.content.outerHeight();
		_options.contentInfo.offset.top = _options.content.offset().top - _options.containerInfo.offset.top;
		_options.contentInfo.offset.left = _options.content.offset().left - _options.containerInfo.offset.left;
		_options.contentInfo.offset.bottom = _options.contentInfo.offset.top + _options.contentInfo.size.height;
		_options.contentInfo.offset.right = _options.contentInfo.offset.left + _options.contentInfo.size.width;

		_options.content.outerWidth(_options.contentInfo.size.width)
		_options.placeholder.outerHeight(_options.contentInfo.size.height)
}

const _reset = function(){
	$(this).each(function(index, el) {
		_set($(this)[0].stickyOptions)
		_judge($(this)[0].stickyOptions);
		_leftScroll($(this)[0].stickyOptions)
	});
}

const _leftScroll = function(_options) {
	if (_options.content.attr('data-sticky-content') === 'startLock' || _options.content.attr('data-sticky-content') === 'endLock') { return false }

	_options.content.css({
		left: _options.containerInfo.offset.left - $$$.windowInfo.sc.left,
	})
}

const _sticky = function(_options){
	if (_options.content.attr('data-sticky-content') === 'sticky') { return false }

	if (_options.beforeSticky) {
		_options.beforeSticky({
			mode: _options.mode,
			content: _options.content,
			container: _options.container,
			placeholder: _options.placeholder,
			adjust: _options.adjust,
			contentInfo: _options.contentInfo,
			containerInfo:  _options.containerInfo,
		})
	}

	_options.content.css({
		position: 'fixed',
		top: (function(){
			if (_options.mode === 'top') {
				return _options.adjust.top
			} else {
				return 'auto'
			}
		}()),
		bottom: (function(){
			if (_options.mode === 'top') {
				return 'auto'
			} else {
				return _options.adjust.bottom
			}
		}()),
		// left: _options.contentInfo.offset.left - $$$.windowInfo.sc.left,
	}).attr('data-sticky-content', 'sticky')

	if (_options.afterSticky) {
		_options.afterSticky({
			mode: _options.mode,
			content: _options.content,
			container: _options.container,
			placeholder: _options.placeholder,
			adjust: _options.adjust,
			contentInfo: _options.contentInfo,
			containerInfo:  _options.containerInfo,
		})
	}
}

const _startLock = function(_options){
	if (_options.content.attr('data-sticky-content') === 'startLock') { return false }

	if (_options.beforeStartLock) {
		_options.beforeStartLock({
			mode: _options.mode,
			content: _options.content,
			container: _options.container,
			placeholder: _options.placeholder,
			adjust: _options.adjust,
			contentInfo: _options.contentInfo,
			containerInfo:  _options.containerInfo,
		})
	}

	_options.content.css({
		position: (function(){
			if (_options.mode === 'top') {
				return 'relative'
			} else {
				return 'absolute'
			}
		}()),
		top: (function(){
			if (_options.mode === 'top') {
				return 0
			} else {
				return 'auto'
			}
		}()),
		bottom: (function(){
			if (_options.mode === 'top') {
				return 'auto'
			} else {
				return 0
			}
		}()),
		left: 'auto',
	}).attr('data-sticky-content', 'startLock')
	// _options.content.css({
	// 	position: 'relative',
	// 	top: 'auto',
	// 	bottom: 'auto',
	// 	left: 'auto'
	// })

	if (_options.afterStartLock) {
		_options.afterStartLock({
			mode: _options.mode,
			content: _options.content,
			container: _options.container,
			placeholder: _options.placeholder,
			adjust: _options.adjust,
			contentInfo: _options.contentInfo,
			containerInfo:  _options.containerInfo,
		})
	}

}

const _endLock = function(_options){
	if (_options.content.attr('data-sticky-content') === 'endLock') { return false }

	if (_options.beforeEndLock) {
		_options.beforeEndLock({
			mode: _options.mode,
			content: _options.content,
			container: _options.container,
			placeholder: _options.placeholder,
			adjust: _options.adjust,
			contentInfo: _options.contentInfo,
			containerInfo:  _options.containerInfo,
		})
	}

	_options.content.css({
		position: 'absolute',
		top: (function(){
			if (_options.mode === 'top') {
				return 'auto'
			} else {
				return _options.adjust.top
			}
		}()),
		bottom: (function(){
			if (_options.mode === 'top') {
				return _options.adjust.bottom
			} else {
				return 'auto'
			}
		}()),
		left: 'auto',
	}).attr('data-sticky-content', 'endLock')

	if (_options.afterEndLock) {
		_options.afterEndLock({
			mode: _options.mode,
			content: _options.content,
			container: _options.container,
			placeholder: _options.placeholder,
			adjust: _options.adjust,
			contentInfo: _options.contentInfo,
			containerInfo:  _options.containerInfo,
		})
	}
}

const _judge = function(_options){
	if (_options.mode === 'top') {
		if($$$.windowInfo.sc.top <= _options.contentInfo.offset.top + _options.containerInfo.offset.top - _options.adjust.top) {
			_startLock(_options)
		} else if (_options.containerInfo.offset.bottom < $$$.windowInfo.sc.top + _options.contentInfo.size.height + _options.adjust.bottom + _options.adjust.top) {
			_endLock(_options)
		} else {
			_sticky(_options)
		}

	} else {

		if ($$$.windowInfo.sc.bottom >= _options.containerInfo.offset.bottom +  _options.adjust.bottom) {
			_startLock(_options)
		} else if($$$.windowInfo.sc.bottom < _options.containerInfo.offset.top + _options.contentInfo.size.height + _options.adjust.bottom) {
			_endLock(_options)
		} else {
			_sticky(_options)
		}

	}
}

const _destroy = function(){
	if (!$(this)[0].stickyOptions) { return false }
	$(this)[0].stickyOptions.container.removeAttr('data-sticky-container')
	$(this)[0].stickyOptions.content.removeAttr('style data-sticky-content').unwrap();
	$(this)[0].stickyOptions = null;
}

module.exports = {
	init: _init,
	reset: _reset,
	destroy: _destroy,
};

