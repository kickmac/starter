import $ from 'jquery';
import jQuery from 'jquery';

//plugins
import './_plugins/_lightgallery/_lightgallery.min';
import './_plugins/_lightgallery/_lg-thumbnail.min';
import './_plugins/_lightgallery/_lg-video.min';
import './_plugins/_lightgallery/_lg-zoom.min';

import './_plugins/_jquery.resizeend.min';
import './_plugins/_jquery.matchHeight-min';
import './_plugins/_slick.min';


//_modules
import pcsp from './_modules/_pcsp';
import anchorJump from './_modules/_anchorJump';
import accordion from './_modules/_accordion';
import smoothScroll from './_modules/_smoothScroll';



$(function(){

	pcsp.init();

	/*************************************************************************************
	* window load
	*************************************************************************************/
	$(window).on('load', function(event) {
		anchorJump.init();
		accordion.init();
	});

	/*************************************************************************************
	* window load & resize
	*************************************************************************************/
	$(window).on('load resizeend', function(event) {
		pcsp.init();
		$.fn.matchHeight._update();
	});

	/*************************************************************************************
	* window resize
	*************************************************************************************/
	$(window).on('resizeend', function(event) {
		accordion.reinit();
	});

	/*************************************************************************************
	* pcspのbreakpointが切り替わったとき
	*************************************************************************************/
	$(window).on('pcsp.changed', function(event, mode) {
		console.log(pcsp.getMode())
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