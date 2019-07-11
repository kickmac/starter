const $ = require('jquery');
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
const _itemTemplate = '<div class="contentsModal_item" data-anim="contentsModal_item"><a href="javascript: void(0);" class="contentsModal_overlay" data-anim="contentsModal_overlay"></a><div class="contentsModal_toolBar"><a href="javascript: void(0);" class="contentsModal_close"></a></div><div class="contentsModal_contents" data-anim="contentsModal_contents"><div class="contentsModal_body"></div></div><div class="contentsModal_loading" data-anim="contentsModal_loading"></div></div>';
const _init = function(args) {
	$('body').append(_listTemplate);
}

const _open = function() {
	if (!$('.contentsModal')[0]) { _init() }
	$('.contentsModal_list').append(_itemTemplate)
	const _$target = $('.contentsModal_list').find('.contentsModal_item').last()

	const _url = $(this).attr('href');
	const _options = $(this).data('modal-contents')

	if (_options.noClose) {
		_$target.find('.contentsModal_overlay').addClass('contentsModal_overlay-noClose')
	}

	_killScroll();
	anim.enter.call(_$target)
	anim.enter.call(_$target.find('.contentsModal_overlay'))
	anim.enter.call(_$target.find('.contentsModal_loading'))
	if (_options.width) {
		_$target.find('.contentsModal_contents').css('width', _options.width)
	}

	if (_url.match(/^#.+/)) {
		_html(_url, _$target, _options);
	} else {
		_ajax(_url, _$target, _options);
	}
}

const _close = function(){
	const _$target = $(this).closest('.contentsModal_item');
	anim.leave.call(_$target.find('.contentsModal_overlay'))
	anim.leave.call(_$target.find('.contentsModal_contents'))
	anim.leave.call(_$target, function(){
		_$target.remove();
		if (!$('.contentsModal_item')[0]) {
			_revivalScroll();
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
			anim.enter.call($target.find('.contentsModal_contents'))
			anim.leave.call($target.find('.contentsModal_loading'))
			_replace();
		})
	})
	.fail(function() {
		_close.call($target)
		$$$.dialog.open({
			title: 'エラー',
			txt: '<p class="tCenter">読み込みエラー</p>',
			btns: [{
				name: 'OK',
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
		anim.enter.call($target.find('.contentsModal_contents'))
		anim.leave.call($target.find('.contentsModal_loading'))
		_replace();
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
	$('html, body').css({
		overflowY: 'hidden'
	});
	$('.contentsModal_overlay').on('scroll wheel touchmove', _noScroll);
	$('.contentsModal_contents').on('scroll wheel touchmove', _contentsScroll);
}
const _revivalScroll = function(e){
	$('html, body').css({
		overflowY: 'inherit'
	});
	$('.contentsModal_overlay').off('scroll wheel touchmove', _noScroll);
	$('.contentsModal_contents').off('scroll wheel touchmove', _contentsScroll);
}
const _replace = function(){
	const _$target = $('.contentsModal_contents');
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


module.exports = {
	open: _open,
	close: _close,
	replace: _replace,
};