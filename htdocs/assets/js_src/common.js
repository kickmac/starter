/*
* @requires _plugins/_jquery-3.3.1.min.js
* @requires _plugins/_jquery.easing.1.3.js
* @requires _plugins/_jquery.matchHeight-min.js
* @requires _plugins/_slick.min.js
* @requires _plugins/_es6-promise.auto.js
* @requires _plugins/_lightgallery-all.js
*
* @requires ./_modules/_acc.js
* @requires ./_modules/_agree.js
* @requires ./_modules/_anchorJump.js
* @requires ./_modules/_anim.js
* @requires ./_modules/_contentsModal.js
* @requires ./_modules/_dialog.js
* @requires ./_modules/_dummyImage.js
* @requires ./_modules/_fileForm.js
* @requires ./_modules/_imagesLoadListener.js
* @requires ./_modules/_loading.js
* @requires ./_modules/_objFitPolyfill.js
* @requires ./_modules/_overlay.js
* @requires ./_modules/_parseArgs.js
* @requires ./_modules/_pcsp.js
* @requires ./_modules/_resizeend.js
* @requires ./_modules/_resizeendHeight.js
* @requires ./_modules/_smoothScroll.js
* @requires ./_modules/_tab.js
* @requires ./_modules/_tree.js
* @requires ./_modules/_ua.js
* @requires ./_modules/_vhAdjust.js
* @requires ./_modules/_viewport.js
* @requires ./_modules/_windowInfo.js
* @requires ./_modules/_sticky.js
*/


$(function(){
	$$$.ua.judge();
	$$$.dummyImage.init.call($('.dam'))
	$$$.pcsp.init();
	$$$.viewport.init();
	$$$.resizeend.init();
	$$$.resizeendHeight.init();
	$$$.vhAdjust.init();
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
* window resize
*************************************************************************************/
$(window).on('load resizeend', function(event) {
	$$$.pcsp.judge();
	$.fn.matchHeight._update();
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
* window load
*************************************************************************************/
$(window).on('load', function(event) {
	$$$.anchorJump.init();
	$$$.acc.init.call($('[data-acc]'));
	$$$.tab.init.call($('[data-tab]'));
	$$$.tree.init.call($('[data-tree]'));
	$$$.sticky.init.call($('[data-sticky]'));
	$$$.sticky.init.call($('.footer'), {
		mode: 'bottom',
		adjust: {
			top: 100,
			bottom: 10,
		},
		beforeInit: function(){ console.log('beforeInit'); },
		afterInit: function(){ console.log('afterInit'); },
		beforeStartLock: function(){ console.log('beforeStartLock'); },
		afterStartLock: function(){ console.log('afterStartLock'); },
		beforeEndLock: function(){ console.log('beforeEndLock'); },
		afterEndLock: function(){ console.log('afterEndLock'); },
		beforeSticky: function(){ console.log('beforeSticky'); },
		afterSticky: function(){ console.log('afterSticky'); },
	});
	$$$.sticky.init.call($('.header'), {
		adjust: {
			top: 100,
			bottom: 10,
		},
		beforeInit: function(){ console.log('beforeInit'); },
		afterInit: function(){ console.log('afterInit'); },
		beforeStartLock: function(){ console.log('beforeStartLock'); },
		afterStartLock: function(){ console.log('afterStartLock'); },
		beforeEndLock: function(){ console.log('beforeEndLock'); },
		afterEndLock: function(){ console.log('afterEndLock'); },
		beforeSticky: function(){ console.log('beforeSticky'); },
		afterSticky: function(){ console.log('afterSticky'); },
	});
	$$$.sticky.init.call($('.sticky_item-2'), {
		mode: 'bottom',
		container: '.layout_sideContainer'
	});
});

/*************************************************************************************
* pcspのbreakpointが切り替わったとき
*************************************************************************************/
$(window).on('pcsp.changed', function(event, mode) {
	// console.log($$$.pcsp.mode)
});

