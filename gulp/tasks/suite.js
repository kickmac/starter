module.exports = function(gulp, $, config) {
	var taskName = 'suite';

	gulp.task(taskName, ['html', 'css', 'js', 'images']);
};