/*
* @requires plugins/jquery-3.3.1.min.js
* @requires plugins/jquery.easing.1.3.js
* @requires plugins/jquery.matchHeight-min.js
* @requires plugins/slick.min.js
* @requires plugins/es6-promise.auto.js
* @requires plugins/lightgallery-all.js
*
* @requires modules.js
*/


var $$$ = $$$ || {};

$(function(){
	$$$.dummyImage.init.call($('.dam'))
	$$$.pcsp.init();
	$$$.viewport.init();
	$$$.resizeend.init();
	$$$.resizeendHeight.init();
	$$$.vhAdjust.init();
	$$$.tab.init();
	$$$.fileForm.init();
	$('[data-agree-target]:checked').each(function (index, el) {
		$$$.agree.change.call($(this));
	});

	/*************************************************************************************
	* クリックイベント
	*************************************************************************************/
	$(document).on('click', '[href^="#"]', function(event) {
		event.preventDefault();
		$$$.smoothScroll.scroll.call($(this))
	});
	$(document).on('click', '[data-acc-btn], [data-acc-close]', function(event) {
		event.preventDefault();
		$$$.accordion.toggle.call($(this))
	});
	$(document).on('click', '[data-tab-item]', function(event) {
		event.preventDefault();
		$$$.tab.show.call($(this))
	});
	$(document).on('click', '.tree_toggle', function(event) {
		event.preventDefault();
		$$$.tree.toggle.call($(this))
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

	//overlay
	$(document).on('click', '.overlay', function(event) {
		event.preventDefault();
		$$$.overlay.close();
	});

	/*************************************************************************************
	* スクロールイベント
	*************************************************************************************/
	$(window).on('scroll', function(event) {
		$$$.windowInfo.init();
	});

	/*************************************************************************************
	* その他イベント
	*************************************************************************************/
	// 同意しますかのやつ
	$(document).on('change', '[data-agree-target]', function(event) {
		event.preventDefault();
		$$$.agree.change.call($(this))
	});

	//EnterでformのSubmit防止
	$(document).on('keydown', 'input', function(event) {
		if ((event.which && event.which === 13) || (event.keyCode && event.keyCode === 13)) {
			event.preventDefault();
			return false;
		}
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
	$(document).on('click', '.contentsModal_close, .contentsModal_overlay', function(event) {
		event.preventDefault();
		$$$.contentsModal.close.call($(this))
	});

	/*************************************************************************************
	* プラグイン
	*************************************************************************************/
})

/*************************************************************************************
* window load
*************************************************************************************/
$(window).on('load', function(event) {
	$$$.anchorJump.init();
});

/*************************************************************************************
* window resize
*************************************************************************************/
$(window).on('load resizeend', function(event) {
	$$$.pcsp.judge();
	$.fn.matchHeight._update();
	$$$.accordion.init();
	$$$.tree.init();
	$$$.windowInfo.init();
	$$$.contentsModal.replace();
	$$$.objFitPolyfill.init();
});
$(window).on('load resizeendHeight', function(event) {
	$$$.windowInfo.init();
	$$$.contentsModal.replace();
});
$(window).on('resize', function(event) {
	$$$.vhAdjust.init();
});

/*************************************************************************************
* pcspのbreakpointが切り替わったとき
*************************************************************************************/
$(window).on('pcsp.changed', function(event, mode) {
	// console.log($$$.pcsp.mode)
});
