module.exports = function(gulp, $, config) {
	var taskName = 'clean';

	gulp.task(taskName, function () {
		$.del(config.dest);
	});
};