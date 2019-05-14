var $$$ = $$$ || {};
/*************************************************************************************
* dialog
*************************************************************************************/
$$$.dialog = (function() {
	var _init = function(){
		$('body').append(
			'<div class="customDialog" data-anim="customDialog">\
				<div class="customDialog_overlay"></div>\
				<div class="customDialog_inner">\
				</div>\
			</div>'
		);
	}
	var _pause = function(){
		$(document).off('click', '.customDialog_btnItem > [data-btn-id]')
		return new Promise(function(resolve, reject){
			$(document).on('click', '.customDialog_btnItem > [data-btn-id]', function(event) {
				event.preventDefault();
				resolve($(this).data('btn-id'));
			});
		})
	}
	var _open = function(options){
		if (!$('.customDialog')[0]) { _init(); }

		$('.customDialog_inner').html('');
		var _btns = '';
		var _title = '';

		if (options.title) {
			_title = `<div class="customDialog_title">${options.title}</div>`;
		}

		if (options.btns) {
			for (var i = 0, l = options.btns.length; i < l; i++) {
				var _class = options.btns[i].class || 'customDialog_btn'
				_btns += `<li class="customDialog_btnItem"><a href="javascript: void(0);" data-btn-id="${i}" class="${_class}">${options.btns[i].name}</a></li>`
			}
			_btns = `<ul class="customDialog_btns">${_btns}</ul>`;
		}
		var _contents = `${_title}<div class="customDialog_txt">${options.txt}</div>${_btns}`;
		$('.customDialog_inner').append(_contents);
		$$$.anim.enter.call($('.customDialog'))

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
						_close(options.btns[id].callback);
					} else {
						_close();
					}
				}
			},
			function(){
				_close();
			}
		);


	}

	var _close = function(cb){
		if (cb) {
			$$$.anim.leave.call($('.customDialog'), function(){
				cb()
				$(document).off('.click', '.customDialog_btnItem > [data-btn-id]');
			})
		} else {
			$$$.anim.leave.call($('.customDialog'), function(){
				$(document).off('.click', '.customDialog_btnItem > [data-btn-id]');
			})
		}
	}


	return {
		open: _open,
		close: _close
	};
}());
