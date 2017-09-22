var $$$ = $$$ || {};

$(function(){
	$$$.resizeend.init();
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
	});

	/*************************************************************************************
	* pcspのbreakpointが切り替わったとき
	*************************************************************************************/
	$(window).on('pcsp.changed', function(event, mode) {
		// console.log($$$.pcsp.mode)
	});

	/*************************************************************************************
	* クリックイベント
	*************************************************************************************/
	$(document).on('click', '[href^=#]', function(event) {
		event.preventDefault();
		$$$.smoothScroll.scroll.call($(this))
	});
	$(document).on('click', '[data-acc-btn], [data-acc-close]', function(event) {
		event.preventDefault();
		$$$.accordion.toggle.call($(this))
	});

	/*************************************************************************************
	* その他イベント
	*************************************************************************************/

	/*************************************************************************************
	* プラグイン
	*************************************************************************************/
	//modal
	$('[data-modal]').lightGallery({
		selector: 'this',
		download: false,
		counter: false,
		zoom: true,
	});

	//modal-gallery
	$('[data-modal-gallerys]').lightGallery({
		selector: $(this).find('[data-modal-gallery]'),
		download: false,
		counter: true,
		zoom: true,
	});

})