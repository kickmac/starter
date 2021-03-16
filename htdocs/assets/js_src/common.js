/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* $ and $$$ 外出し
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
const $$$ = global.$$$ = $$$ || {}

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* プラグインrequire
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
require('babel-polyfill');
require('jquery.easing')
require('jquery-match-height');
// require('lightgallery');
// require('lg-zoom');
// require('lg-fullscreen');
// require('lg-thumbnail');
// require('slick-carousel');

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* require utils
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$$$.anim = require('./_utils/_anim');

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* require module
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$$$.ua = require('./_modules/_ua');
$$$.pcsp = require('./_modules/_pcsp');
$$$.viewport = require('./_modules/_viewport');
// $$$.vhAdjust = require('./_modules/_vhAdjust');
$$$.windowInfo = require('./_modules/_windowInfo');
$$$.resizeend = require('./_modules/_resizeend');
$$$.smoothScroll = require('./_modules/_smoothScroll');
$$$.anchorJump = require('./_modules/_anchorJump');
$$$.objFitPolyfill = require('./_modules/_objFitPolyfill');
// $$$.dialog = require('./_modules/_dialog');
// $$$.loading = require('./_modules/_loading');
$$$.overlay = require('./_modules/_overlay');
// $$$.contentsModal = require('./_modules/_contentsModal');
// $$$.disabledToggle = require('./_modules/_disabledToggle');
// $$$.displayToggle = require('./_modules/_displayToggle');
// $$$.acc = require('./_modules/_acc');
// $$$.tab = require('./_modules/_tab');
// $$$.tree = require('./_modules/_tree');
$$$.sticky = require('./_modules/_sticky');
// $$$.fileForm = require('./_modules/_fileForm');
// $$$.ajaxMore = require('./_modules/_ajaxMore');


/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* もろもろ実行
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$$$.ua.judge();
$$$.pcsp.init(736);
$$$.viewport.init(1220, 767);
// $$$.vhAdjust.init();
$$$.windowInfo.init();
$$$.resizeend.init();
// $$$.fileForm.init();


/*************************************************************************************
* window load
*************************************************************************************/
$(window).on('load', function(event) {
	$$$.anchorJump.init();
	$$$.objFitPolyfill.init();
	// $$$.acc.init.call($('[data-acc]'));
	// $$$.tab.init.call($('[data-tab]'));
	// $$$.tree.init.call($('[data-tree]'));
	$$$.sticky.init.call($('[data-sticky]'));
	// $$$.ajaxMore.init.call($('[data-ajax-more]'))
	// $$$.disabledToggle.init.call('[data-disabled-target], [data-disabled-target-parent]');
	// $$$.displayToggle.init.call('[data-display-target], [data-display-target-parent]');
});

/*************************************************************************************
* window resize
*************************************************************************************/
$(window).on('resize', function(event) {
	$$$.pcsp.judge();
	$$$.windowInfo.updateSize();
});

/*************************************************************************************
* window resizeend.any
*************************************************************************************/
$(window).on('resizeend.any', function(event) {
	$$$.viewport.update();
	// $$$.vhAdjust.update();
	$$$.objFitPolyfill.update();
	// $$$.contentsModal.replace();
	// $$$.dialog.replace();
	// $$$.sticky.reset.call($('[data-sticky]'));
});

/*************************************************************************************
* window resizeend.width
*************************************************************************************/
$(window).on('resizeend.width', function(event) {
});

/*************************************************************************************
* window resizeend.height
*************************************************************************************/
$(window).on('resizeend.height', function(event) {
});

/*************************************************************************************
* window pcsp.changed
*************************************************************************************/
$(window).on('pcsp.changed', function(event, mode) {
	$$$.viewport.update();
	// $$$.vhAdjust.update();
	$$$.objFitPolyfill.update();
	// $$$.contentsModal.replace();
	// $$$.dialog.replace();
	// $$$.sticky.reset.call($('[data-sticky]'));
});

/*************************************************************************************
* window scroll
*************************************************************************************/
$(window).on('scroll', function(event) {
	$$$.windowInfo.updateScroll();
});

/*************************************************************************************
* click event
*************************************************************************************/
//smoothScroll
$(document).on('click', '[href*="#"]:not([data-modal-contents])', function(event) {
	$$$.smoothScroll.scroll.call($(this), event)
});

//overlay
$(document).on('click.overlay', '.overlay', function(event) {
	event.preventDefault();
	$$$.overlay.close();
});

//fileForm ローカルファイルを選択
//選択
// $(document).on('click', '.fileForm_btn > a', function(event) {
// 	event.preventDefault();
// 	$$$.fileForm.add.call($(this));
// });

//削除
// $(document).on('click', '.fileForm_del', function(event) {
// 	event.preventDefault();
// 	$$$.fileForm.remove.call($(this));
// });

/*************************************************************************************
* other event
*************************************************************************************/
//EnterでformのSubmit防止
$(document).on('keydown', 'input', function(event) {
	if ((event.which && event.which === 13) || (event.keyCode && event.keyCode === 13)) {
		event.preventDefault();
		return false;
	}
});
//disabledToggle
// $(document).on('change', '[data-disabled-target], [data-disabled-target-parent]', function(event) {
// 	event.preventDefault();
// 	$$$.disabledToggle.change.call($(this))
// });

//displayToggle
// $(document).on('change', '[data-display-target], [data-display-target-parent]', function(event) {
// 	event.preventDefault();
// 	$$$.displayToggle.change.call($(this))
// });

/*************************************************************************************
* モーダル
*************************************************************************************/
//modal
// $('[data-modal]').lightGallery({
// 	selector: 'this',
// 	download: false,
// 	counter: false,
// 	zoom: true,
// 	hash: false,
// 	share: false,
// 	fullScreen: false,
// });

//modal-gallery
// $('[data-modal-gallerys]').lightGallery({
// 	selector: '[data-modal-gallery]',
// 	download: false,
// 	counter: true,
// 	zoom: true,
// 	hash: false,
// 	share: false,
// 	fullScreen: false,
// });

//modal-iframe
// $('[data-modal-iframe]').attr('data-iframe', 'true').lightGallery({
// 	selector: 'this',
// 	download: false,
// 	counter: false,
// 	zoom: false,
// 	hash: false,
// 	share: false,
// 	fullScreen: false,
// });

//modal-contents
// $(document).on('click', '[data-modal-contents]', function(event) {
// 	event.preventDefault();
// 	$$$.contentsModal.open.call($(this))
// });
// $(document).on('click', '.contentsModal_close, .contentsModal_overlay:not(.contentsModal_overlay-noClose)', function(event) {
// 	event.preventDefault();
// 	$$$.contentsModal.close.call($(this))
// });


/*************************************************************************************
* plugin
*************************************************************************************/
