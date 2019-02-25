var $$$ = $$$ || {};
/*************************************************************************************
* ua判定
*************************************************************************************/
$$$.ua = (function(){
	var _judge = function(){
		var _ua = navigator.userAgent;
		if (_ua.indexOf('iPhone') > 0 || _ua.indexOf('iPod') > 0 || _ua.indexOf('Android') > 0 && _ua.indexOf('Mobile') > 0){
			$('body').addClass('UA-sp');
		} else if(_ua.indexOf('iPad') > 0 || _ua.indexOf('Android') > 0){
			$('body').addClass('UA-tab');
		} else {
			$('body').addClass('UA-pc');
		}
	}

	return {
		judge: _judge
	}
}())

