module.exports = function(gulp, $, config) {
	var taskName = 'suite';
	var ejsConfig = require('../ejs_config.js');

	gulp.task(taskName, function () {
		return $.runSequence(['html', 'svgSprite', 'iconFont', 'js'] , 'css')
	});
};