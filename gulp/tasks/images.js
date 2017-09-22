module.exports = function(gulp, $, config) {
	var taskName = 'images';

	gulp.task(taskName, function () {
		gulp.src( config.images.src)
			.pipe($.changed(config.images.dest))
			.pipe($.imagemin())
			.pipe( gulp.dest(config.images.dest))
			.pipe($.browserSync.reload({ stream:true }));
	});
};