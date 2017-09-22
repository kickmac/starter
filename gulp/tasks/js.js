module.exports = function(gulp, $, config) {
	var taskName = 'js';

	gulp.task(taskName, function () {
		gulp.src( config.js.src)
			.pipe($.concat('common.js'))
			// .pipe($.uglify())
			// .pipe($.rename('common.min.js'))
			.pipe( gulp.dest(config.js.dest))
			.pipe($.browserSync.reload({ stream:true }));
	});
};