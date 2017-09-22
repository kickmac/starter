module.exports = function(gulp, $, config) {
	var taskName = 'suite';

	gulp.task(taskName, function(){
		return $.runSequence('sprite', ['html', 'css',/* 'js', 'images'*/]);
	});
};