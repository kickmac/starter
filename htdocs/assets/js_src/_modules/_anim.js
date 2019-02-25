var $$$ = $$$ || {};
/*************************************************************************************
* amin
*************************************************************************************/
$$$.anim = (function(){
	var _enter = function(){
		var _$this = $(this);
		var _name = $(this).data('anim');

		if (_$this.data('anim-flag')) { return false }
		_$this.off(' transitionend webkitTransitionEnd')

		_$this.data('anim-flag', true);
		_$this.removeClass(_name + '-leave-active ' + _name + '-leave ' +  _name + '-leave-to').addClass(_name + '-enter-active ' + _name + '-enter ');
		setTimeout(function(){
			_$this.removeClass(_name + '-enter').addClass(_name + '-enter-to');
		}, 1)
		// _$this.on(' transitionend webkitTransitionEnd',function(){
		// });
	}
	var _leave = function(cb){
		var _$this = $(this);
		var _name = $(this).data('anim');

		if (!_$this.data('anim-flag')) { return false }
		_$this.off(' transitionend webkitTransitionEnd')
		_$this.on(' transitionend webkitTransitionEnd',function(e){
			_$this.removeClass(_name + '-enter-active ' + _name + '-enter ' +  _name + '-enter-to ' + _name + '-leave-active ' + _name + '-leave ' +  _name + '-leave-to');
			_$this.data('anim-flag', false);
			if(cb){cb();}
		});

		_$this.removeClass(_name + '-enter-active ' + _name + '-enter ' +  _name + '-enter-to').addClass(_name + '-leave-active ' + _name + '-leave ');
		setTimeout(function(){
			_$this.removeClass(_name + '-leave').addClass(_name + '-leave-to');
		}, 1)
	}
	var _toggle = function(){
		var _$this = $(this);
		if (_$this.data('anim-flag')) {
			_leave.call(_$this)
		} else {
			_enter.call(_$this)
		}
	}
	return {
		enter: _enter,
		leave: _leave,
		toggle: _toggle,
	}
}())
