/*************************************************************************************
* amin
*************************************************************************************/

const _nextFrame = cb => {
	requestAnimationFrame(() => {
		requestAnimationFrame(() => cb())
	})
	// setTimeout(cb, 10)
}

const enter = function(options){
	const _$this = $(this);
	const _animName = $(this).data('anim');

	const _options = Object.assign({
		beforeEnter: null,
		afterEnter: null,
	}, options)


	_$this.off(`transitionend.${_animName}.enter`)

	if(_options.beforeEnter){_options.beforeEnter(_$this);}

	_$this
		.removeClass(`
			${_animName}-leave-active
			${_animName}-leave
			${_animName}-leave-to
		`)
		.addClass(`
			${_animName}-enter-active
			${_animName}-enter
		`);

	_nextFrame(()=> {
		_$this.removeClass(`${_animName}-enter`).addClass(`${_animName}-enter-to`);
		_$this.one(`transitionend.${_animName}.enter`, function(e){
			if (e.currentTarget ===  _$this[0]) {
				if(_options.afterEnter){
					_options.afterEnter(_$this);
				}
			}
		});
	})
}

const leave = function(options){
	const _$this = $(this);
	const _animName = $(this).data('anim');

	const _options = Object.assign({
		beforeLeave: null,
		afterLeave: null,
	}, options)


	if (!_$this.hasClass(`${_animName}-enter-active`)) {
		return false
	}

	_$this.off(`transitionend.${_animName}.leave`)

	if(_options.beforeLeave){_options.beforeLeave(_$this);}

	_$this
		.removeClass(`
			${_animName}-enter-active
			${_animName}-enter
			${_animName}-enter-to
		`)
		.addClass(`
			${_animName}-leave-active
			${_animName}-leave
		`);

	_nextFrame(()=> {
		_$this.one(`transitionend.${_animName}.leave`, function(e){
			if (e.currentTarget ===  _$this[0]) {
				_$this.removeClass(`
					${_animName}-leave-active
					${_animName}-leave
					${_animName}-leave-to
					${_animName}-enter-active
					${_animName}-enter
					${_animName}-enter-to
				`);
				if(_options.afterLeave){_options.afterLeave(_$this);}
			}
		});
		_$this.removeClass(`${_animName}-leave`).addClass(`${_animName}-leave-to`);
	})

}


module.exports = {
	enter,
	leave,
}