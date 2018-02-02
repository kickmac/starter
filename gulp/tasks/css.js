module.exports = function(gulp, $, config) {
	var taskName = 'css';
	var css;
	gulp.task(taskName + '-scss2css', function(){
		var _css = gulp.src(config.css.src)
			.pipe($.changed(config.css.dest))
			.pipe($.plumber({
				errorHandler: $.notify.onError("Error: <%= error.message %>")
			}))
			.pipe($.sourcemaps.init())
			.pipe($.sass());

			css = _css;

			_css.pipe( gulp.dest(config.css.dest))

			_css.pipe($.kss({
				templateDirectory: config.styleGuide.tempDir
			}))
			.pipe($.plumber({
				errorHandler: $.notify.onError("Error: <%= error.message %>")
			}))
			.pipe(gulp.dest(config.styleGuide.dest));

			return true;
	})

	gulp.task(taskName + '-pleeease', function(){
		return css
			.pipe($.pleeease({
				browsers: ['last 3 versions', 'ie 8', 'ios 4', 'android 2.3'],
				mqpacker: true,
				minifier: true,
			}))
			.pipe($.sourcemaps.write('.'))
			.pipe( gulp.dest(config.css.dest))
			.pipe($.browserSync.stream())
	})

	gulp.task(taskName + '-iconCssMove', function(){
		return gulp.src([config.css.dest + '/iconFont.css', config.css.dest + '/svgSprite.css'])
			.pipe(gulp.dest(config.styleGuide.dest + '/assets/styles/'));
	})

	gulp.task(taskName + '-iconCssDel', function(){
		return $.del([config.css.dest + '/iconFont.css', config.css.dest + '/iconFont.css.map', config.css.dest + '/svgSprite.css', config.css.dest + '/svgSprite.css.map'], {
			force: true
		});
	})

	gulp.task(taskName, function () {
		return $.runSequence(taskName + '-scss2css', taskName + '-pleeease', taskName + '-iconCssMove', taskName + '-iconCssDel')
	});
};
