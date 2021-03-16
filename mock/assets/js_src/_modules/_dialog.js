const anim = require('../_utils/_anim');


/*************************************************************************************
* dialog

■開くとき
dialog.open({
	title: タイトル（string default: ''）
	txt: テキスト（string|html defailt: ''）,
	beforeOpen: オープン前に実行する関数（function default: null）,
	afterOpen: オープン後に実行する関数（function default: null）,
	btns:[{
		name: ボタンの文字（string）,
		class: ボタンに付くクラス（string default: 'customDialog_btn'）,
		autoClose: ボタンクリックで閉じるかどうか（boolean default: true）,
		beforeOpen: クローズ前に実行する関数（function default: null）,
		afterOpen: クローズ後に実行する関数（function default: null）,
	},{
		name: ボタンの文字（string）,
		class: ボタンに付くクラス（string default: 'customDialog_btn'）,
		autoClose: ボタンクリックで閉じるかどうか（boolean default: true）,
		beforeOpen: クローズ前に実行する関数（function default: null）,
		afterOpen: クローズ後に実行する関数（function default: null）,
	}]
})

■ダイアログ外から閉じるとき
dialog.close.call(閉じる対象（.customDialog_item）のjQuery element, {
	beforeClose: クローズ前に実行する関数（function default: null）,
	afterClose: クローズ後に実行する関数（function default: null）,
})
*************************************************************************************/
const _itemTmpl =
`<div class="customDialog_item" data-anim="customDialog_item">
	<div class="customDialog_overlay"></div>
	<div class="customDialog_inner"></div>
</div>`;

const init = function(){
	$('body').append(
		`<div class="customDialog">
			<div class="customDialog_list"></div>
		</div>`
	);
}

const open = (options) => {
	if (!$('.customDialog')[0]) { init(); }
	let _options = {
		title: '',
		txt: '',
		beforeOpen: null,
		afterOpen: null,
	}
	_options = options ? Object.assign(_options, options) : _options;

	let _$dom = $(_itemTmpl).clone();
	let _$btns = '';

	if (options.title) {
		_$dom.find('.customDialog_inner').append(`<div class="customDialog_title">${options.title}</div>`)
	}
	if (options.txt) {
		_$dom.find('.customDialog_inner').append(`<div class="customDialog_txt">${options.txt}</div>`)
	}

	if (options.btns) {
		_options.btns.forEach((btn, i) => {
			const _class = btn.class || 'customDialog_btn'
			_$btns += `<li class="customDialog_btnItem"><a href="javascript: void(0);" data-btn-id="${i}" class="${_class}">${btn.name}</a></li>`
		})
		_$dom.find('.customDialog_inner').append(`<ul class="customDialog_btns">${_$btns}</ul>`);
		_$dom.find('.customDialog_btnItem > a').each(function(index, el) {
			$(el).on('click', function(){
				const _id = $(this).data('btn-id');
				const _$root = $(this).closest('.customDialog_item');
				close.call(_$root, _options.btns[_id])
			})
		});
	}

	$('.customDialog_list').append(_$dom);

	anim.enter.call(_$dom, {
		beforeEnter: _options.beforeOpen,
		afterEnter: _options.afterOpen,
	})
}

const close = function(options) {
	let _options = Object.assign({
		beforeClose: null,
		afterClose: null,
	}, options);
	const _$this = $(this) || $('.customDialog_item').last();

	if(_options.beforeClose) {
		_options.beforeClose();
	};

	if(_options.autoClose !== false) {
		anim.leave.call(_$this, {
			afterLeave: () => {
				_$this.find('.customDialog_btnItem > a').off('click');
				_$this.remove()
				if(_options.afterClose) {
					_options.afterClose()
				}
			},
		})
	}
}

module.exports = {
	init,
	open,
	close,
}
