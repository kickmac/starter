module.exports = function(gulp, $, config) {
	var taskName = 'suite';

	gulp.task(taskName, function(){
		return $.runSequence(['svgSprite', 'sprite', 'iconfont'], ['html', 'css', 'kss', 'js', /*'images'*/], 'iconsCssMove', 'list');
	});
};