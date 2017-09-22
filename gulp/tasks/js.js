module.exports = function(gulp, $, config) {
	var taskName = 'js';

	gulp.task(taskName, function () {
		gulp.src( config.js.src)
			.pipe($.changed(config.js.dest))
			.pipe( gulp.dest(config.js.dest))
			.pipe($.browserSync.reload({ stream:true }));
	});
};