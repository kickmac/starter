var $$$ = $$$ || {};
/*************************************************************************************
* loading
*************************************************************************************/
$$$.loading = (function() {
	var _open = function(options){
		$$$.dialog.open({
			txt: options.txt
		})
	}

	var _close = function(cb){
		$$$.dialog.close(function(){
			if (cb) {
				cb();
			}
		})
	}


	return {
		open: _open,
		close: _close
	};
}());
