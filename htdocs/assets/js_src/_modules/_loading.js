const dialog = require('./_dialog');
/*************************************************************************************
* loading
*************************************************************************************/
const open = function(options){
	dialog.open({
		txt: options.txt
	})
}

const close = function(cb){
	dialog.close(function(){
		if (cb) {
			cb();
		}
	})
}

module.exports = {
	open: open,
	close: close
};
