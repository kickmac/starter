module.exports = function(gulp, $, config) {
	var taskName = 'suite';

	gulp.task(taskName, function(){
		return $.runSequence(['sprite', 'iconfont'], ['html', 'css', 'kss', 'js', /*'images'*/], 'iconsCssMove');
	});
};