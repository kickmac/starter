/*************************************************************************************
* displayToggle
*************************************************************************************/
const _getData = el => {
	let _options = {
		target: null,
		inversion: false,
	};
	let _data = $(el).data('display-target')
	const _type = typeof _data;

	if (_type === 'object') {
		$.extend(true, _options, _data);
	} else if(_type === 'string') {
		_options.target = _data;
	}

	return _options;
}

const init = function(){
	$(this).each(function(index, el) {
		change.call(this)
	});
}

const change = function(){
	if ($(this)[0].type === 'checkbox') {
		_checkboxChange.call(this);
	} else if($(this)[0].type === 'radio') {
		_radioChange.call(this);
	} else if($(this)[0].localName === 'select') {
		_selectChange.call(this);
	}

}

const _checkboxChange = function(){
	const _options = _getData(this);
	const _$target = $(`[data-display="${_options.target}"]`);
	let _flag = $(this).prop('checked');

	if (_options.inversion) { _flag = !_flag }

	if (_flag) {
		_$target.removeClass('hidden')
	} else {
		_$target.addClass('hidden')
	}
}

const _radioChange = function(){
	const _$group = $(`[name="${$(this).attr('name')}"]`);

	_$group.each(function(index, el) {
		const _options = _getData(this);
		const _$target = $(`[data-display="${_options.target}"]`);
		let _flag = $(this).prop('checked');

		if (_options.inversion) { _flag = !_flag }

		if (_flag) {
			_$target.removeClass('hidden')
		} else {
			_$target.addClass('hidden')
		}
	});
}

const _selectChange = function(){
	const _$group = $(this).find('[data-display-target]');

	_$group.each(function(index, el) {
		const _options = _getData(this);
		const _$target = $(`[data-display="${_options.target}"]`);
		let _flag = $(this).prop('selected');

		if (_options.inversion) { _flag = !_flag }

		if (_flag) {
			_$target.removeClass('hidden')
		} else {
			_$target.addClass('hidden')
		}
	});
}

module.exports = {
	init,
	change,
}
