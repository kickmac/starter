const dialog = require('../_modules/_dialog');
/*************************************************************************************
* fileForm
*************************************************************************************/
let _parent;
let _option;
let _$dom;

const _init = function(){
	$(document).on('dragover', '.fileForm_dropArea', function(event) {
		event.preventDefault();
		event.originalEvent.dataTransfer.dropEffect = 'copy';
		$(this).addClass('fileForm_dropArea-isDragOver')
	});

	$(document).on('dragleave', '.fileForm_dropArea', function(event) {
		event.preventDefault();
		$(this).removeClass('fileForm_dropArea-isDragOver')
	});

	$(document).on('drop', '.fileForm_dropArea', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).closest('.fileForm_dropArea').removeClass('fileForm_dropArea-isDragOver')
		_drop.call($(this), event.originalEvent.dataTransfer.files);
	});
}

const _add = function(args) {
	_parent = $(this).closest('.fileForm');
	_option = _parent.data('option') || {};

	if(_qtyError([''])){
		return false
	};

	// _$dom = _parent.find('.fileForm_item-template').clone().removeClass('fileForm_item-template');
	_parent.find('.fileForm_item-template').find('[type="file"]').one('change', function(event) {
		if(_qtyError(this.files)){
			return false
		};

		$(this.files).each(function(index, el) {
			_preUpload(el, _option, _parent.find('.fileForm_item-template').clone().removeClass('fileForm_item-template'));
		});

	});
	_parent.find('.fileForm_item-template').find('[type="file"]').trigger('click');
}

const _drop = function(files){
	_parent = $(this).closest('.fileForm');
	_option = _parent.data('option') || {};

	if(_qtyError(files)){
		return false
	};


	for (var i = 0, l = files.length; i < l; i++) {
		_$dom = _parent.find('.fileForm_item-template').clone().removeClass('fileForm_item-template');
		_preUpload(files[i], _option, _$dom);
	}
}

const _preUpload = function(file, _option, _$dom){
	if(_typeError(file) || _sizeError(file)) {
		return false
	}
	var _fd = new FormData();
	_fd.append('file', file)
	$.ajax({
		url: _option.src,
		type: _option.method,
		contentType: false,
		processData: false,
		data: _fd,
		dataType: 'json',
		rsync:true
	})
	.done(function(res) {
		_$dom.find('[name*="selected"]').val(res.path)
		_$dom.find('[name*="original_name"]').val(res.name)
		_$dom.find('.fileForm_name').text(res.name);
		if (_$dom.find('.fileForm_name').get(0).tagName === 'A') {
			_$dom.find('.fileForm_name').attr('href', res.path)
		}
		_parent.find('.fileForm_list').append(_$dom);
		if (_parent.find('.fileForm_item').not('.fileForm_item-template').length > 0) {
			_parent.find('.fileForm_btn > span').addClass('hidden')
		}
	})
	.fail(function() {
		// console.log("error");
	})
	.always(function() {
		// console.log("complete");
	});
}

const _qtyError = function(files){
	if (_option.maxQty && _parent.find('.fileForm_item').not('.fileForm_item-template').length + files.length > _option.maxQty) {
		dialog.open({
			title: 'エラー',
			txt: _option.maxQtyError,
			btns: [{
				name: 'OK',
				class: 'btn btn-blue',
			}]
		})
		return true;
	}
}

const _typeError = function(file){
	if (_option.type && _option.type.length > 0 && _option.type.indexOf(file.name.toLowerCase().split('.').pop()) < 0) {
		dialog.open({
			title: 'エラー',
			txt: _option.typeError,
			btns: [{
				name: 'OK',
				class: 'btn btn-blue',
			}]
		})
		return true;
	}
}

const _sizeError = function(file){
	if (_option.maxSize && _option.maxSize > 0 && file.size > _option.maxSize) {
		dialog.open({
			title: 'エラー',
			txt: _option.maxSizeError,
			btns: [{
				name: 'OK',
				class: 'btn btn-blue',
			}]
		})
		return true;
	}
}

const _remove = function(){
	const _$this = $(this)
	dialog.open({
		txt: '<p class="tCenter">削除しますか？</p>',
		btns: [{
			name: 'はい',
			class: 'btn btn-blue',
			callback:function(){
				_$this.closest('.fileForm_item').remove();
				if (_parent.find('.fileForm_item').not('.fileForm_item-template').length === 0) {
					_parent.find('.fileForm_btn > span').removeClass('hidden')
				}
			},
		},{
			name: 'いいえ',
			class: 'btn btn-gray',
		}]
	});
}

module.exports = {
	init: _init,
	add: _add,
	remove: _remove,
};
