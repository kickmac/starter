module.exports = function(gulp, $, config) {
	var taskName = 'kss';

	gulp.task(taskName, function () {
		var src = gulp.src( config.css.src)
		src
			// .pipe($.changed(config.css.dest))
			.pipe($.plumber({
				errorHandler: $.notify.onError("Error: <%= error.message %>")
			}))
			.pipe($.sass())
			.pipe($.pleeease({
				browsers: ['last 3 versions', 'ie 8', 'ios 4', 'android 2.3'],
				mqpacker: true,
				minifier: false,
			}))
			.pipe($.header('@charset "utf-8";'))
			.pipe($.kss({
				templateDirectory: config.styleGuide.tempDir
			}))
			.pipe(gulp.dest(config.styleGuide.dest))

		return src;
	});
};