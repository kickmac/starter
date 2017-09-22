module.exports = function(gulp, $, config) {
	var taskName = 'suite';

	gulp.task(taskName, function(){
		return $.runSequence(['sprite', 'iconfont'], ['html', 'css', 'kss', 'images', 'js'], 'iconsCssMove');
	});
	gulp.task(taskName + ':min', function(){
		return $.runSequence(['sprite', 'iconfont'], ['html', 'css:min', 'kss', 'images', 'js:min'], 'iconsCssMove');
	});
};