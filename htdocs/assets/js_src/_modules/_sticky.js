const windowInfo = require('./_windowInfo');
const resizeend = require('./_resizeend');
/*************************************************************************************
* sticky
*************************************************************************************/
const _STICKY = class {
	constructor(t, options){
		this.mode = 'top';
		this.adjust = {
			top: 0,
			bottom: 0,
		}

		$.extend(true, this, options);

		this._$target = t;
		this._$placeholder = this._$target.wrap('<div data-sticky-placeholder></div>').parent();
		this._$container = this._$placeholder.parent().attr('data-sticky-container', '');


		this.reInit();
	}

	reInit() {
		this._$target.attr('data-sticky', '').removeAttr('style');
		this._$placeholder.removeAttr('style');

		this.targetBox = {
			width: this._$target.outerWidth(),
			height: this._$target.outerHeight(),
			top: this._$target.offset().top,
			left: this._$target.offset().left,
			bottom: this._$target.offset().top + this._$target.outerHeight(),
		}
		this.containerBox = {
			top: this._$container.offset().top,
			bottom: this._$container.offset().top + this._$container.outerHeight(),
		}

		this._$placeholder.outerHeight(this.targetBox.height)

		this.judge(windowInfo.sc)
	}

	stickyTop() {
		if (this._$target.attr('data-sticky') === 'sticky-top') {
			return false;
		}
		this._$target.attr('data-sticky', 'sticky-top').css({
			width: this.targetBox.width,
			top: this.adjust.top,
			left: this.targetBox.left,
		})
	}
	stickyBottom() {
		if (this._$target.attr('data-sticky') === 'sticky-bottom') {
			return false;
		}
		this._$target.attr('data-sticky', 'sticky-bottom').css({
			width: this.targetBox.width,
			bottom: this.adjust.bottom,
			left: this.targetBox.left,
		})
	}

	lockBottom() {
		if (this._$target.attr('data-sticky') === 'lock-bottom') {
			return false;
		}
		this._$target.attr('data-sticky', 'lock-bottom').css({
			width: this.targetBox.width,
			bottom: this.adjust.bottom,
			top: 'auto',
			left: 'auto',
		})
	}
	setDefault() {
		if (!this._$target.attr('data-sticky')) {
			return false;
		}
		this._$target.attr('data-sticky', '').removeAttr('style')
	}

	judge(sc) {
		if (this.mode === 'top') {
			if (sc.top <= this.targetBox.top - this.adjust.top) {
				this.setDefault();
			} else if (sc.top + this.adjust.top + this.targetBox.height + this.adjust.bottom <= this.containerBox.bottom) {
				this.stickyTop();
			} else {
				this.lockBottom();
			}
		} else {
			 if (sc.bottom  - this.adjust.bottom - this.targetBox.height - this.adjust.top <= this.containerBox.top + this.adjust.top) {
				this.setDefault();
			} else if (sc.bottom - this.adjust.bottom <= this.containerBox.bottom - this.adjust.bottom) {
				this.stickyBottom();
			} else {
				this.lockBottom();
			}
		}
	}

	leftScroll(sc) {
		if (this._$target.attr('data-sticky') !== 'sticky-top' && this._$target.attr('data-sticky') !== 'sticky-bottom' ) {
			return false;
		}
		this._$target.css({
			left: this.targetBox.left - sc.left,
		})
	}
}

const init = function(){
	const _$this = $(this);
	_$this.each(function(index, el) {
		$(this)[0].sticky = new _STICKY($(this), $(this).data('sticky'));
		console.log($(this)[0].sticky);
	});

	$(window).on('scroll', function(event) {
		event.preventDefault();
		_$this.each(function(index, el) {
			$(this)[0].sticky.judge(windowInfo.sc);
			$(this)[0].sticky.leftScroll(windowInfo.sc)
		});
	});

	$(window).on('resizeend.any', function(event) {
		event.preventDefault();
		_$this.each(function(index, el) {
			$(this)[0].sticky.reInit($(this), $(this).data('sticky'))
		})
	});
}


module.exports = {
	init,
}