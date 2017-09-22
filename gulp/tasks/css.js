module.exports = function(gulp, $, config) {
	var taskName = 'css';

	gulp.task(taskName, function () {
		gulp.src( config.css.src)
			.pipe($.changed(config.css.dest))
			.pipe($.plumber({
				errorHandler: $.notify.onError("Error: <%= error.message %>")
			}))
			.pipe($.sourcemaps.init())
			.pipe($.sass())
			.pipe($.pleeease({
				browsers: ['last 3 versions', 'ie 8', 'ios 4', 'android 2.3'],
				mqpacker: true,
				minifier: true,
			}))
			.pipe($.header('@charset "utf-8";'))
			.pipe($.sourcemaps.write('.'))
			.pipe( gulp.dest(config.css.dest))
			.pipe($.browserSync.reload({ stream:true }))

		gulp.src( config.css.src)
			.pipe($.changed(config.css.dest))
			.pipe($.plumber({
				errorHandler: $.notify.onError("Error: <%= error.message %>")
			}))
			.pipe($.sass())
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
			.pipe($.browserSync.reload({ stream:true }));
	});
};