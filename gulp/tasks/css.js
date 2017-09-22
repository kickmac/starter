module.exports = function(gulp, $, config) {
	var taskName = 'css';

	gulp.task(taskName, function () {
			console.log('css')
		return gulp.src( config.css.src)
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
			// .pipe($.header('@charset "utf-8";'))
			.pipe($.sourcemaps.write('.'))
			.pipe( gulp.dest(config.css.dest))
			.pipe($.browserSync.reload({ stream:true }))
	});
};