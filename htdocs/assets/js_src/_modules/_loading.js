const $ = require('jquery');
const dialog = require('./_dialog');
/*************************************************************************************
* loading
*************************************************************************************/
const _open = function(options){
	dialog.open({
		txt: options.txt
	})
}

const _close = function(cb){
	dialog.close(function(){
		if (cb) {
			cb();
		}
	})
}


module.exports = {
	open: _open,
	close: _close
};
