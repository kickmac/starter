const $ = require('jquery');
const anim = require('../_utils/_anim');

/*************************************************************************************
* dialog
*************************************************************************************/
const init = function(){
	$('body').append(
		`<div class="customDialog" data-anim="customDialog">
			<div class="customDialog_overlay"></div>
			<div class="customDialog_inner">
			</div>
		</div>`
	);
}

const _pause = function(){
	$(document).off('click', '.customDialog_btnItem > [data-btn-id]')
	return new Promise(function(resolve, reject){
		$(document).on('click', '.customDialog_btnItem > [data-btn-id]', function(event) {
			event.preventDefault();
			resolve($(this).data('btn-id'));
		});
	})
}

const open = function(options){
	if (!$('.customDialog')[0]) { init(); }

	$('.customDialog_inner').html('');
	let _btns = '';
	let _title = '';

	if (options.title) {
		_title = `<div class="customDialog_title">${options.title}</div>`;
	}

	if (options.btns) {
		for (let i = 0, l = options.btns.length; i < l; i++) {
			const _class = options.btns[i].class || 'customDialog_btn'
			_btns += `<li class="customDialog_btnItem"><a href="javascript: void(0);" data-btn-id="${i}" class="${_class}">${options.btns[i].name}</a></li>`
		}
		_btns = `<ul class="customDialog_btns">${_btns}</ul>`;
	}
	const _contents = `${_title}<div class="customDialog_txt">${options.txt}</div>${_btns}`;
	$('.customDialog_inner').append(_contents);

	_killScroll();
	anim.enter.call($('.customDialog'));
	replace();

	_pause().then(
		function(id){
			if (options.btns[id].action) {
				options.btns[id].action()
			}

			if (options.btns[id].autoClose === false) {
				if (options.btns[id].callback) {
					options.btns[id].callback()
				}
			} else {
				if (options.btns[id].callback) {
					close(options.btns[id].callback);
				} else {
					close();
				}
			}
		},
		function(){
			close();
		}
	);
}

const close = function(cb){
	if (cb) {
		anim.leave.call($('.customDialog'), function(){
			cb()
			$(document).off('.click', '.customDialog_btnItem > [data-btn-id]');
		})
	} else {
		anim.leave.call($('.customDialog'), function(){
			$(document).off('.click', '.customDialog_btnItem > [data-btn-id]');
		})
	}
	if (!$('.customDialog')[0]) {
		_revivalScroll();
	}
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
	$('.customDialog_overlay').on('scroll wheel touchmove', _noScroll);
	$('.customDialog_inner').on('scroll wheel touchmove', _contentsScroll);
}

const _revivalScroll = function(e){
	$('.customDialog_overlay').off('scroll wheel touchmove', _noScroll);
	$('.customDialog_inner').off('scroll wheel touchmove', _contentsScroll);
}


const replace = function(){
	const _$t = $('.customDialog_inner')
	_$t.css({
		marginTop: _$t.outerHeight() / -2,
		marginLeft: _$t.outerWidth() / -2,
	})
}


module.exports = {
	open,
	close,
	replace,
};