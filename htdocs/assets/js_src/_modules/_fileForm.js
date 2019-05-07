var $$$ = $$$ || {};
/*************************************************************************************
* fileForm
*************************************************************************************/
$$$.fileForm = (function() {
	var _parent;
	var _option;
	var _$dom;

	var _init = function(){

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

	var _add = function(args) {
		_parent = $(this).closest('.fileForm');
		_option = _parent.data('option') || {};

		if(_qtyError([''])){
			return false
		};

		_$dom = _parent.find('.fileForm_item-template').clone().removeClass('fileForm_item-template');
		$(_$dom.find('[type="file"]')).on('change', function(event) {

			_preUpload(_$dom.find('[type="file"]')[0].files[0], _option.src, _$dom);

			$(this).off('change')

		});
		_$dom.find('[type="file"]').trigger('click');
	}

	var _drop = function(files){
		_parent = $(this).closest('.fileForm');
		_option = _parent.data('option') || {};

		if(_qtyError(files)){
			return false
		};


		for (var i = 0, l = files.length; i < l; i++) {
			_$dom = _parent.find('.fileForm_item-template').clone().removeClass('fileForm_item-template');
			_preUpload(files[i], _option.src, _$dom);
		}
	}

	var _preUpload = function(file, src, _$dom){
		if(_typeError(file) || _sizeError(file)) {
			return false
		}
		var _fd = new FormData();
		_fd.append('file', file)

		$.ajax({
			url: src,
			type: 'POST',
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
		})
		.fail(function() {
			// console.log("error");
		})
		.always(function() {
			// console.log("complete");
		});
	}

	var _qtyError = function(files){
		if (_option.maxQty && _parent.find('.fileForm_item').not('.fileForm_item-template').length + files.length > _option.maxQty) {
			$$$.dialog.open({
				txt: _option.maxQtyError,
				btns: [{
					name: 'OK'
				}]
			})
			return true;
		}
	}

	var _typeError = function(file){
		if (_option.type && _option.type.length > 0 && _option.type.indexOf(file.name.toLowerCase().split('.').pop()) < 0) {
			$$$.dialog.open({
				txt: _option.typeError,
				btns: [{
					name: 'OK'
				}]
			})
			return true;
		}
	}

	var _sizeError = function(file){
		if (_option.maxSize && _option.maxSize > 0 && file.size > _option.maxSize) {
			$$$.dialog.open({
				txt: _option.maxSizeError,
				btns: [{
					name: 'OK'
				}]
			})
			return true;
		}
	}

	var _remove = function(){
		var _$this = $(this)
		$$$.dialog.open({
			txt: '削除しますか？',
			btns: [{
				name: 'はい',
				callback:function(){
					_$this.closest('.fileForm_item').remove();
				},
			},{
				name: 'いいえ',
			}]
		});
	}

	return {
		init: _init,
		add: _add,
		remove: _remove,
	};
}());
