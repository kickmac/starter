module.exports = function(gulp, $, config) {
	var taskName = 'js';

	gulp.task(taskName, function () {
		gulp.src( config.js.src)
			.pipe($.concat('common.js'))
			.pipe($.babel({
				presets: require.resolve('babel-preset-es2015')
			}))
			// .pipe($.uglify())
			.pipe( gulp.dest(config.js.dest))
			.pipe($.browserSync.reload({ stream:true }));
	});


	// gulp.task(taskName, function () {
	// 	gulp.src( config.js.src)
	// 		.pipe($.concat('common.js'))
	// 		// .pipe($.uglify())
	// 		// .pipe($.rename('common.min.js'))
	// 		.pipe( gulp.dest(config.js.dest))
	// 		.pipe($.browserSync.reload({ stream:true }));
	// });
};