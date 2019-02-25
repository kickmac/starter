var $$$ = $$$ || {};
/*************************************************************************************
* parseArgs
*************************************************************************************/
$$$.parseArgs = (function(){
	var _args = function(args){
		this.values = Array.prototype.slice.call(args, 0);
	}
	_args.prototype = {
		values: undefined,
		_slice: function (index, type) {
			var s = this;
			var hit = (!type) || (typeof(s.values[index]) === type);
			if (hit) {
				return s.values.splice(index, 1).shift();
			} else {
				return undefined;
			}
		},
		/** 先頭の型が一致した場合のみ取得 */
		shift: function (type) {
			var s = this;
			return s._slice(0, type);
		},
		/** 末尾の型が一致した場合のみ取得 */
		pop: function (type) {
			var s = this;
			return s._slice(s.values.length - 1, type);
		},
		/** 残り全部取得 */
		remain: function () {
			var s = this;
			var values = s.values;
			s.values = undefined;
			return values;
		}
	}

	return function(args){
		var _arg = new _args(args);
		return {
			callback: _arg.pop('function'),
			options: _arg.pop('object'),
			values: _arg.remain(),
		}
	}
}())
