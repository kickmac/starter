var $$$ = $$$ || {};
/*************************************************************************************
* contentsModal
*************************************************************************************/
$$$.contentsModal = (function() {
	var _layers = [];
	var _onImgLoad = function(callback){
		$$$.imagesLoadListener.listen($('.contentsModal'), callback)
	}
	var _listTemplate = '<div class="contentsModal"><div class="contentsModal_list"></div></div>';
	var _itemTemplate = '<div class="contentsModal_item" data-anim="contentsModal_item"><a href="javascript: void(0);" class="contentsModal_overlay" data-anim="contentsModal_overlay"></a><div class="contentsModal_toolBar"><a href="javascript: void(0);" class="contentsModal_close"></a></div><div class="contentsModal_contents" data-anim="contentsModal_contents"><div class="contentsModal_body"></div></div><div class="contentsModal_loading" data-anim="contentsModal_loading"></div></div>';
	var _init = function(args) {
		$('body').append(_listTemplate);
	}

	var _open = function() {
		if (!$('.contentsModal')[0]) { _init() }
		$('.contentsModal_list').append(_itemTemplate)
		var _$target = $('.contentsModal_list').find('.contentsModal_item').last()

		var _url = $(this).attr('href');
		var _options = $(this).data('modal-contents')

		_killScroll();
		$$$.anim.enter.call(_$target)
		$$$.anim.enter.call(_$target.find('.contentsModal_overlay'))
		$$$.anim.enter.call(_$target.find('.contentsModal_loading'))
		if (_options.width) {
			_$target.find('.contentsModal_contents').css('width', _options.width)
		}

		if (_url.match(/^#.+/)) {
			_html(_url, _$target, _options);
		} else {
			_ajax(_url, _$target, _options);
		}
	}

	var _close = function(){
		var _$target = $(this).closest('.contentsModal_item');
		$$$.anim.leave.call(_$target.find('.contentsModal_overlay'))
		$$$.anim.leave.call(_$target, function(){
			_$target.remove();
			if (!$('.contentsModal_item')[0]) {
				_revivalScroll();
			}
		})
	}

	var _ajax = function(url, $target, options) {
		$.ajax({
			url: url,
		})
		.done(function(data) {
			$target.find('.contentsModal_body').append(data);
		})
		.fail(function() {
			$target.find('.contentsModal_body').append('<p>読み込みエラー</p>');
		})
		.always(function() {
			$$$.imagesLoadListener.listen($target, function(){
				$$$.anim.enter.call($target.find('.contentsModal_contents'))
				$$$.anim.leave.call($target.find('.contentsModal_loading'))
				_replace();
			})
		});
	}
	var _html = function(url, $target, options) {
		$target.find('.contentsModal_body').append($(url).clone());
		$$$.imagesLoadListener.listen($target, function(){
			$$$.anim.enter.call($target.find('.contentsModal_contents'))
			$$$.anim.leave.call($target.find('.contentsModal_loading'))
			_replace();
		})
	}

	var _noScroll = function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	}
	var _contentsScroll = function(e){
		if ($(this).scrollTop() === 0) {
			$(this).scrollTop(1);
			e.preventDefault();
			e.stopPropagation();
			return false;
		} else if($(this).scrollTop() + $(this).outerHeight() === $(this)[0].scrollHeight) {
			$(this).scrollTop($(this).scrollTop() - 1)
			e.preventDefault();
			e.stopPropagation();
			return false;
		} else {
			e.stopPropagation();
		}
	}
	var _killScroll = function(){
		$('html, body').css({
			overflowY: 'hidden'
		});
		$('.contentsModal_overlay').on('scroll wheel touchmove', _noScroll);
		$('.contentsModal_contents').on('scroll wheel touchmove', _contentsScroll);
	}
	var _revivalScroll = function(e){
		$('html, body').css({
			overflowY: 'inherit'
		});
		$('.contentsModal_overlay').off('scroll wheel touchmove', _noScroll);
		$('.contentsModal_contents').off('scroll wheel touchmove', _contentsScroll);
	}
	var _replace = function(){
		var _$target = $('.contentsModal_contents');
		if ($$$.pcsp.getMode() === 'pc') {
			_$target.each(function(index, el) {
				$(this).css({
					marginTop: $(this).outerHeight() / -2 + $(this).closest('.contentsModal_item').find('.contentsModal_toolBar').outerHeight() / 2,
					marginLeft: $(this).outerWidth() / -2,
				})
			});
		} else {
			_$target.each(function(index, el) {
				$(this).css({
					marginTop: 0,
					marginLeft: 0,
				})
			});
		}
	}


	return {
		open: _open,
		close: _close,
		replace: _replace,
	};
}());
