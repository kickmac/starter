var $$$ = $$$ || {};
/*************************************************************************************
* moduleName
*************************************************************************************/
$$$.moduleName = (function() {
	var _init = function() {
		var _args = $$$.parseArgs(arguments);
		console.log({
			callback: _args.callback,
			options: _args.options,
			values: _args.values
		});
	}

	return {
		init: _init,
	};
}());

