/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* $ and $$$ 外出し
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
const $ = global.$ = global.jQuery = require('jquery');
const $$$ = global.$$$ = {}

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* プラグインrequire
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
require('jquery.easing')
require('es6-promise/auto');
require('jquery-match-height');
require('lightgallery');
require('lg-zoom');
require('lg-fullscreen');
require('lg-thumbnail');
require('slick-carousel');

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* require utils
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
// $$$.anim = require('./_utils/_anim');

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* require module
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$$$.ua = require('./_modules/_ua');
$$$.pcsp = require('./_modules/_pcsp');
$$$.viewport = require('./_modules/_viewport');
$$$.vhAdjust = require('./_modules/_vhAdjust');
$$$.windowInfo = require('./_modules/_windowInfo');
$$$.resizeend = require('./_modules/_resizeend');
$$$.resizeendHeight = require('./_modules/_resizeendHeight');
$$$.smoothScroll = require('./_modules/_smoothScroll');
$$$.anchorJump = require('./_modules/_anchorJump');
$$$.objFitPolyfill = require('./_modules/_objFitPolyfill');
$$$.dialog = require('./_modules/_dialog');
$$$.loading = require('./_modules/_loading');
$$$.overlay = require('./_modules/_overlay');
$$$.contentsModal = require('./_modules/_contentsModal');
$$$.disabledToggle = require('./_modules/_disabledToggle');
$$$.acc = require('./_modules/_acc');
$$$.tab = require('./_modules/_tab');
$$$.tree = require('./_modules/_tree');
$$$.sticky = require('./_modules/_sticky');
$$$.fileForm = require('./_modules/_fileForm');
$$$.ajaxMore = require('./_modules/_ajaxMore');


/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* もろもろ実行
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$$$.ua.judge();
$$$.pcsp.init(736);
$$$.viewport.init(1220, 767);
$$$.vhAdjust.init();
$$$.windowInfo.init();
$$$.resizeend.init();
$$$.resizeendHeight.init();
$$$.disabledToggle.init();
$$$.fileForm.init();


/*************************************************************************************
* window load
*************************************************************************************/
$(window).on('load', function(event) {
	$$$.anchorJump.init();
	$$$.objFitPolyfill.init();
	$$$.acc.init.call($('[data-acc]'));
	$$$.tab.init.call($('[data-tab]'));
	$$$.tree.init.call($('[data-tree]'));
	$$$.sticky.init.call($('[data-sticky]'));
	$$$.ajaxMore.init.call($('[data-ajax-more]'))
});

/*************************************************************************************
* window resize
*************************************************************************************/
$(window).on('resize', function(event) {
	$$$.pcsp.judge();
	$$$.windowInfo.updateSize();
});

/*************************************************************************************
* window resizeend
*************************************************************************************/
$(window).on('resizeend', function(event) {
	$$$.viewport.update();
	$$$.vhAdjust.update();
	$$$.objFitPolyfill.update();
});

/*************************************************************************************
* window resizeendHeight
*************************************************************************************/
$(window).on('resizeendHeight', function(event) {
	$$$.vhAdjust.update();
	$$$.objFitPolyfill.update();
});

/*************************************************************************************
* window pcsp.changed
*************************************************************************************/
$(window).on('pcsp.changed', function(event) {
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
$(document).on('click', '[href^="#"]', function(event) {
	event.preventDefault();
	$$$.smoothScroll.scroll.call($(this))
});

//overlay
$(document).on('click', '.overlay', function(event) {
	event.preventDefault();
	$$$.overlay.close();
});

//fileForm ローカルファイルを選択
//選択
$(document).on('click', '.fileForm_btn > a', function(event) {
	event.preventDefault();
	$$$.fileForm.add.call($(this));
});

//削除
$(document).on('click', '.fileForm_del', function(event) {
	event.preventDefault();
	$$$.fileForm.remove.call($(this));
});

/*************************************************************************************
* other event
*************************************************************************************/
//disabledToggle
$(document).on('change', '[data-disabled-target]', function(event) {
	event.preventDefault();
	$$$.disabledToggle.change.call($(this))
	console.log('test');
});

/*************************************************************************************
* モーダル
*************************************************************************************/
//modal
$('[data-modal]').lightGallery({
	selector: 'this',
	download: false,
	counter: false,
	zoom: true,
	hash: false,
	share: false,
	fullScreen: false,
});

//modal-gallery
$('[data-modal-gallerys]').lightGallery({
	selector: $(this).find('[data-modal-gallery]'),
	download: false,
	counter: true,
	zoom: true,
	hash: false,
	share: false,
	fullScreen: false,
});

//modal-iframe
$('[data-modal-iframe]').attr('data-iframe', 'true').lightGallery({
	selector: 'this',
	download: false,
	counter: false,
	zoom: false,
	hash: false,
	share: false,
	fullScreen: false,
});

//modal-contents
$(document).on('click', '[data-modal-contents]', function(event) {
	event.preventDefault();
	$$$.contentsModal.open.call($(this))
});
$(document).on('click', '.contentsModal_close, .contentsModal_overlay:not(.contentsModal_overlay-noClose)', function(event) {
	event.preventDefault();
	$$$.contentsModal.close.call($(this))
});


/*************************************************************************************
* plugin
*************************************************************************************/
