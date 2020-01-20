const $ = require('jquery')
/*************************************************************************************
* amin
*************************************************************************************/
const _enter = function(cb){
	const _$this = $(this);
	const _name = $(this).data('anim');

	_$this.off(' transitionend webkitTransitionEnd')
	_$this.on(' transitionend webkitTransitionEnd', function(e){
		if (e.target ===  _$this[0]) {
			if(cb){cb();}
		}
	});

	_$this.removeClass(_name + '-leave-active ' + _name + '-leave ' +  _name + '-leave-to').addClass(_name + '-enter-active ' + _name + '-enter ');
	setTimeout(function(){
		_$this.removeClass(_name + '-enter').addClass(_name + '-enter-to');
	}, 50)
}

const _leave = function(cb){
	const _$this = $(this);
	const _name = $(this).data('anim');

	if (!_$this.hasClass(_name + '-enter-active')) {
		return false
	}

	_$this.off(' transitionend webkitTransitionEnd')
	_$this.on(' transitionend webkitTransitionEnd', function(e){
		if (e.target ===  _$this[0]) {
			_$this.removeClass(_name + '-enter-active ' + _name + '-enter ' +  _name + '-enter-to ' + _name + '-leave-active ' + _name + '-leave ' +  _name + '-leave-to');
			if(cb){cb();}
		}
	});

	_$this.removeClass(_name + '-enter-active ' + _name + '-enter ' +  _name + '-enter-to').addClass(_name + '-leave-active ' + _name + '-leave ');
	setTimeout(function(){
		_$this.removeClass(_name + '-leave').addClass(_name + '-leave-to');
	}, 50)

}

module.exports = {
	enter: _enter,
	leave: _leave,
}