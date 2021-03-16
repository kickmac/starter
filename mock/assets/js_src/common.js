/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* $$$ 外出し
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
const $$$ = global.$$$ = {};

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* プラグインrequire
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
// window.AjaxZip3 = require('./_plugins/_ajaxzip3.custom')

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* require utils
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$$$.anim = require('./_utils/_anim');

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* require modules
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$$$.ua = require('./_modules/_ua');
$$$.pcsp = require('./_modules/_pcsp');
$$$.viewport = require('./_modules/_viewport');
$$$.windowInfo = require('./_modules/_windowInfo');
$$$.resizeend = require('./_modules/_resizeend');
$$$.smoothScroll = require('./_modules/_smoothScroll');
$$$.anchorJump = require('./_modules/_anchorJump');
$$$.overlay = require('./_modules/_overlay');
// $$$.dialog = require('./_modules/_dialog');
// $$$.contentsModal = require('./_modules/_contentsModal');
// $$$.disabledToggle = require('./_modules/_disabledToggle');
// $$$.displayToggle = require('./_modules/_displayToggle');
// $$$.fileForm = require('./_modules/_fileForm');
// $$$.acc = require('./_modules/_acc');
// $$$.tab = require('./_modules/_tab');
// $$$.tree = require('./_modules/_tree');
// $$$.ajaxMore = require('./_modules/_ajaxMore');
// $$$.objFitPolyfill = require('./_modules/_objFitPolyfill');


/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* もろもろ実行
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$$$.ua.judge();
$$$.pcsp.init(736);
$$$.viewport.init(1240, 736);
$$$.windowInfo.init();
$$$.resizeend.init();
// $$$.fileForm.init();


/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* window load
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$(window).on('load', function(event) {
	$$$.anchorJump.init({
		adjust: 20,
		spAdjust: 20
	});
	// $$$.objFitPolyfill.init();
	// $$$.acc.init.call($('[data-acc]'));
	// $$$.tab.init.call($('[data-tab]'));
	// $$$.tree.init.call($('[data-tree]'));
	// $$$.ajaxMore.init.call($('[data-ajax-more]'))
	// $$$.disabledToggle.init.call('[data-disabled-target]');
	// $$$.displayToggle.init.call('[data-display-target]');
});


/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* window resize
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$(window).on('resize', function(event) {
	$$$.pcsp.judge();
	$$$.windowInfo.updateSize();
});

$(window).on('resizeend.any', function(event) {
	$$$.viewport.update();
	// $$$.objFitPolyfill.update();
});

$(window).on('resizeend.width', function(event) {
});

$(window).on('resizeend.height', function(event) {
});


/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* window pcsp.changed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$(window).on('pcsp.changed', function(event, mode) {
	$$$.viewport.update();
	// $$$.objFitPolyfill.update();
});



/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* window scroll
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
$(window).on('scroll', function(event) {
	$$$.windowInfo.updateScroll();
});



/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* click event
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/


//smoothScroll
$(document).on('click', '[href*="#"]:not([data-contents-modal])', function(event) {
	$$$.smoothScroll.scroll.call($(this), event, {
		adjust: 110,
		spAdjust: 110
	})
});

//overlay
$(document).on('click.overlay', '.overlay', function(event) {
	event.preventDefault();
	$$$.overlay.close();
});

//contents-modal
// $(document).on('click', '[data-contents-modal]', function(event) {
// 	event.preventDefault();
// 	$$$.contentsModal.open.call($(this))
// });


//fileForm ローカルファイルを選択
// $(document).on('click', '.fileForm_btn > a', function(event) {
// 	event.preventDefault();
// 	$$$.fileForm.add.call($(this));
// });

//fileForm 選択済みアイテム削除
// $(document).on('click', '.fileForm_del', function(event) {
// 	event.preventDefault();
// 	$$$.fileForm.remove.call($(this));
// });


/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* other event
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
//EnterでformのSubmit防止
$(document).on('keydown', '[data-no-submit-on-enter] input', function(event) {
	if ((event.which && event.which === 13) || (event.keyCode && event.keyCode === 13)) {
		event.preventDefault();
		return false;
	}
});

//disabledToggle
// $(document).on('change', '[data-disabled-target]', function(event) {
// 	event.preventDefault();
// 	$$$.disabledToggle.change.call($(this))
// });

//displayToggle
// $(document).on('change', '[data-display-target]', function(event) {
// 	event.preventDefault();
// 	$$$.displayToggle.change.call($(this))
// });


/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
* plugins
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
