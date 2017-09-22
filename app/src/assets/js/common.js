$.fn.extend({
	switchClass : function(before, after) {
		$(this).removeClass(before)
		$(this).addClass(after)
	},
})

//plugins
import './_plugins/_lightgallery/_lightgallery.min.js';
import './_plugins/_lightgallery/_lg-thumbnail.min.js';
import './_plugins/_lightgallery/_lg-video.min.js';
import './_plugins/_lightgallery/_lg-zoom.min.js';

import './_plugins/_jquery.matchHeight-min.js';
import './_plugins/_slick.min.js';


//_modules
import resizeend from './_modules/_resizeend.js';
import pcsp from './_modules/_pcsp.js';
import anchorJump from './_modules/_anchorJump.js';
import accordion from './_modules/_accordion.js';
import smoothScroll from './_modules/_smoothScroll.js';
import overlay from './_modules/_overlay.js';
import alert from './_modules/_alert.js';
import confirm from './_modules/_confirm.js';

$(function(){
	resizeend.init();
	/*************************************************************************************
	* window load
	*************************************************************************************/
	$(window).on('load', function(event) {
		anchorJump.init();
	});

	/*************************************************************************************
	* window resize
	*************************************************************************************/
	$(window).on('load resizeend', function(event) {
		pcsp.judge();
		$.fn.matchHeight._update();
		accordion.init();
	});

	/*************************************************************************************
	* pcspのbreakpointが切り替わったとき
	*************************************************************************************/
	$(window).on('pcsp.changed', function(event, mode) {
		// console.log(pcsp.getMode())
		overlay.close();
	});

	/*************************************************************************************
	* クリックイベント
	*************************************************************************************/
	$(document).on('click', '[href^=#]', function(event) {
		event.preventDefault();
		smoothScroll.scroll.call($(this))
	});
	$(document).on('click', '[data-acc-btn], [data-acc-close]', function(event) {
		event.preventDefault();
		accordion.toggle.call($(this))
	});

	//overlay
	$(document).on('click', '.overlay', function(event) {
		event.preventDefault();
		overlay.close();
	});
	$(document).on('click', '.btna', function(event) {
		event.preventDefault();
		overlay.toggle();
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