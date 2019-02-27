var $$$ = $$$ || {};
/*************************************************************************************
* sticky
*************************************************************************************/
$$$.sticky = (function() {
	var _init = function(op) {
		$$$.windowInfo.init();
		return $(this).each(function(index, el) {
			var _options = {
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
			$.extend(true, _options, op);

			if (_options.beforeInit) {
				_options.beforeInit()
			}


			_options.content = $(this);
			_options.container = $(this).closest(_options.container)[0] ?  $(this).closest(_options.container) : $(this).parent();
			_options.placeholder = _options.content.wrap('<div data-sticky-placeholder />').parent('[data-sticky-placeholder]')

			_options.content.attr('data-sticky-content', '')
			_options.container.attr('data-sticky-container', '')

			_set(_options)

			_judge(_options)
			$(window).on('scroll', function(event) {
				event.preventDefault();
				_judge(_options)
			});

			$(window).on('resizeend', function(event) {
				event.preventDefault();
				_set(_options)
			});

			if (_options.afterInit) {
				_options.afterInit({
					mode: _options.mode,
					content: _options.content,
					container: _options.container,
					placeholder: _options.placeholder,
					adjust: _options.adjust,
					contentInfo: _options.contentInfo,
					containerInfo:  _options.containerInfo,
				})
			}

			$(this)[0].stickyOptions = _options
		});
	}

	var _set = function(_options){
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

	var _reset = function(){
		$(this).each(function(index, el) {
			_set($(this)[0].stickyOptions)
		});
	}

	var _sticky = function(_options){
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

	var _startLock = function(_options){
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
			position: 'relative',
			top: 'auto',
			bottom: 'auto',
		}).attr('data-sticky-content', 'startLock')

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

	var _endLock = function(_options){
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

	var _judge = function(_options){
		if (_options.mode === 'top') {
			if($$$.windowInfo.sc.top <= _options.contentInfo.offset.top + _options.containerInfo.offset.top - _options.adjust.top) {
				_startLock(_options)
			} else if ($$$.windowInfo.sc.top > _options.containerInfo.offset.bottom - _options.contentInfo.size.height - _options.adjust.bottom) {
				_endLock(_options)
			} else {
				_sticky(_options)
			}

		} else {

			if ($$$.windowInfo.sc.bottom >= _options.contentInfo.offset.bottom + _options.containerInfo.offset.top +  _options.adjust.bottom) {
				_startLock(_options)
			} else if($$$.windowInfo.sc.bottom < _options.containerInfo.offset.top + _options.contentInfo.size.height + _options.adjust.bottom) {
				_endLock(_options)
			} else {
				_sticky(_options)
			}

		}
	}

	return {
		init: _init,
		reset: _reset,
	};
}());

