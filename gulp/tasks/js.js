module.exports = function(gulp, $, config) {
	var taskName = 'js';

	gulp.task(taskName, function () {
		gulp.src( config.js.src)
			.pipe($.changed(config.js.dest))
			.pipe($.vinylNamed(function(file) {
				return file.relative.replace(/\.[^\.]+$/, '');
			}))
			.pipe( $.webpack(config.webpack))
			.pipe( gulp.dest(config.js.dest))
			.pipe($.browserSync.reload({ stream:true }));
	});

	// gulp.task(taskName, function () {
	// 	gulp.src( config.js.src)
	// 		.pipe($.changed(config.js.dest))
	// 		.pipe( gulp.dest(config.js.dest))
	// 		.pipe($.browserSync.reload({ stream:true }));
	// });
};