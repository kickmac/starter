var sgGNav = (function(){
	var _$btn
		,_$elem
		,_toggle
		,_init;

	_toggle= function(){
		_$elem.slideToggle(400);
		_$btn.toggleClass('sgGHeader_btn-isOpen');
	}
	_init = function(){
		_$btn = $('.sgGHeader_btn')
		_$elem = $('.sgGNav')
	}
	return {
		toggle: _toggle
		,init: _init
	}
})()

var viewCode = (function(){
	var _toggle = function(){
		$(this).parent('.sgSection_codeBtn').toggleClass('sgSection_codeBtn-isOpen');
		$(this).closest('.sgSection').find('.sgSection_code').slideToggle(400);
	}
	return {
		toggle: _toggle
	}
})();

var copyCode = (function(){
	return function(){
		var _copyArea = $("<textarea/>")
			,_txt = $(this).closest('.sgSection_code').find('pre').text();

		_copyArea.text(_txt);
		$("body").append(_copyArea);
		_copyArea.select();
		document.execCommand("copy");
		_copyArea.remove();
	}
})()

$(function() {
	sgGNav.init();
	$(document).on('click', '.sgGHeader_btn a', function(event) {
		event.preventDefault();
		sgGNav.toggle();
	});

	$(document).on('click', '.sgSection_codeBtn a', function(event) {
		event.preventDefault();
		viewCode.toggle.apply(this);
	});

	$(document).on('click', '.sgSection_copyBtn a', function(event) {
		event.preventDefault();
		copyCode.apply(this);
	});
});