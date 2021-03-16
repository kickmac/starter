const imagesLoadListener = require('../_utils/_imagesLoadListener');
const anim = require('../_utils/_anim');
/*************************************************************************************
* contentsModal
*************************************************************************************/
let _layers = [];
const _onImgLoad = function(callback){
	imagesLoadListener.listen($('.contentsModal'), callback)
}
const _listTemplate = '<div class="contentsModal"><div class="contentsModal_list"></div></div>';
const _itemTemplate = `
<div class="contentsModal_item" data-anim="contentsModal_item">
	<a href="javascript: void(0);" class="contentsModal_overlay contentsModal_overlay-noClose" data-anim="contentsModal_overlay"></a>
	<div class="contentsModal_contents" data-anim="contentsModal_contents">
		<a href="javascript: void(0);" class="contentsModal_close"></a>
		<div class="contentsModal_body"></div>
	</div>
	<div class="contentsModal_loading" data-anim="contentsModal_loading"></div>
</div>
`;
const _init = function(args) {
	$('body').append(_listTemplate);
}

const open = function(options) {
	$(':focus').blur()
	const _options = Object.assign({
		closeOnOverlay: false,
		width: null,
		beforeOpen: null,
		afterOpen: null,
		beforeClose: null,
		afterClose: null,
	}, options, $(this).data('modal-contents'))

	if (!$('.contentsModal')[0]) { _init() }
	$('.contentsModal_list').append(_itemTemplate)
	const _$target = $('.contentsModal_list').find('.contentsModal_item').last()

	const _url = $(this).attr('href');

	if (_options.closeOnOverlay) {
		_$target.find('.contentsModal_overlay').removeClass('contentsModal_overlay-noClose')
	}

	_killScroll();

	if (_options.beforeOpen) {
		_options.beforeOpen()
	}

	anim.enter.call(_$target)
	anim.enter.call(_$target.find('.contentsModal_overlay'))
	anim.enter.call(_$target.find('.contentsModal_loading'))

	_$target.find('.contentsModal_close, .contentsModal_overlay:not(.contentsModal_overlay-noClose)').one('click', function(event) {
		event.preventDefault();
		close.call($(this), _options)
	});

	if (_options.width) {
		_$target.find('.contentsModal_contents').css('width', _options.width)
	}

	if (_url.match(/^#.+/)) {
		_html(_url, _$target, _options);
	} else {
		_ajax(_url, _$target, _options);
	}
}

const close = function(options) {
	const _options = Object.assign({
		beforeClose: null,
		afterClose: null,
	}, options, $(this).data('modal-contents'))

	const _$target = $(this).closest('.contentsModal_item');

	anim.leave.call(_$target.find('.contentsModal_overlay'))
	anim.leave.call(_$target.find('.contentsModal_contents'))
	anim.leave.call(_$target, {
		beforeLeave: options.beforeClose,
		afterLeave: function(){
			if(options.afterClose) {
				options.afterClose();
			}
			_$target.remove();
			if (!$('.contentsModal_item')[0]) {
				_revivalScroll();
			}
		}
	})
}

const _ajax = function(url, $target, options) {
	$.ajax({
		url: url,
	})
	.done(function(data) {
		$target.find('.contentsModal_body').append(data);
		imagesLoadListener.listen($target, function(){
			anim.enter.call($target.find('.contentsModal_contents'), {
				afterEnter: options.afterOpen
			})
			anim.leave.call($target.find('.contentsModal_loading'))
			// replace();
		})
	})
	.fail(function() {
		$target.remove();
		$$$.dialog.open({
			title: 'エラー',
			txt: '<p class="tCenter">読み込みエラー</p>',
			btns: [{
				name: 'OK',
				beforeClose: function(){
					_revivalScroll()
				}
				// class: 'btn',
			}]
		})
	})
	.always(function() {
	});
}

const _html = function(url, $target, options) {
	$target.find('.contentsModal_body').append($(url).clone());
	imagesLoadListener.listen($target, function(){
		anim.enter.call($target.find('.contentsModal_contents'), {
			afterEnter: options.afterOpen
		})
		anim.leave.call($target.find('.contentsModal_loading'))
		// replace();
	})
}

const _noScroll = function(e){
	e.preventDefault();
	e.stopPropagation();
	return false;
}

const _contentsScroll = function(e){
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

const _killScroll = function(){
	$('.contentsModal_overlay').on('scroll wheel touchmove', _noScroll);
	$('.contentsModal_body').on('scroll wheel touchmove', _contentsScroll);
}

const _revivalScroll = function(e){
	$('.contentsModal_overlay').off('scroll wheel touchmove', _noScroll);
	$('.contentsModal_body').off('scroll wheel touchmove', _contentsScroll);
}

// const replace = function(){
// 	const _$target = $('.contentsModal_contents');
// 	if ($$$.pcsp.mode === 'pc') {
// 		_$target.each(function(index, el) {
// 			$(this).css({
// 				marginTop: $(this).outerHeight() / -2,
// 				marginLeft: $(this).outerWidth() / -2,
// 			})
// 		});
// 	} else {
// 		_$target.each(function(index, el) {
// 			$(this).css({
// 				marginTop: 0,
// 				marginLeft: 0,
// 			})
// 		});
// 	}
// }


module.exports = {
	open,
	close,
	// replace,
};