/*************************************************************************************
* amin
*************************************************************************************/
const enter = function(cb){
	const _$this = $(this);
	const _animName = $(this).data('anim');


	_$this.off(`transitionend.${_animName} webkitTransitionEnd.${_animName}`)
	_$this.on(`transitionend.${_animName} webkitTransitionEnd.${_animName}`, function(e){
		if (e.target ===  _$this[0]) {
			if(cb){cb();}
		}
	});

	_$this
		.removeClass(`${_animName}-leave-active ${_animName}-leave ${_animName}-leave-to`)
		.addClass(`${_animName}-enter-active ${_animName}-enter`);

	setTimeout(function(){
		_$this.removeClass(`${_animName}-enter`).addClass(`${_animName}-enter-to`);
	}, 10)
}

const leave = function(cb){
	const _$this = $(this);
	const _animName = $(this).data('anim');

	if (!_$this.hasClass(`${_animName}-enter-active`)) {
		return false
	}

	_$this.off(`transitionend.${_animName} webkitTransitionEnd.${_animName}`)
	_$this.on(`transitionend.${_animName} webkitTransitionEnd.${_animName}`, function(e){
		if (e.target ===  _$this[0]) {
			_$this.removeClass(`
				${_animName}-leave-active
				${_animName}-leave
				${_animName}-leave-to
				${_animName}-enter-active
				${_animName}-enter
				${_animName}-enter-to
			`);
			if(cb){cb();}
		}
	});

	_$this
		.removeClass(`${_animName}-enter-active ${_animName}-enter ${_animName}-enter-to`)
		.addClass(`${_animName}-leave-active ${_animName}-leave`);
	setTimeout(function(){
		_$this.removeClass(`${_animName}-leave`).addClass(`${_animName}-leave-to`);
	}, 10)

}


module.exports = {
	enter,
	leave,
}