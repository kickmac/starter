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
			// .pipe($.autoprefixer({
			// 	browsers: ['last 3 versions', 'ie 8', 'ios 4', 'android 2.3'],
			// }))
			// .pipe($.cssbeautify({
			// 	indent: '\t',
			// 	autosemicolon: true
			// }))
			//.pipe($.cssmin())
			.pipe($.pleeease({
				"browsers": ['last 3 versions', 'ie 8', 'ios 4', 'android 2.3'],
				"mqpacker": true,
			}))
			.pipe($.sourcemaps.write('.'))
			.pipe( gulp.dest(config.css.dest))
			.pipe($.browserSync.reload({ stream:true }))

		gulp.src( config.css.src)
			.pipe($.changed(config.css.dest))
			.pipe($.plumber({
				errorHandler: $.notify.onError("Error: <%= error.message %>")
			}))
			.pipe($.sass())
			.pipe($.autoprefixer({
				browsers: ['last 3 versions', 'ie 8', 'ios 4', 'android 2.3'],
			}))
			.pipe($.sass())
			.pipe($.autoprefixer({
				browsers: ['last 3 versions', 'ie 8', 'ios 4', 'android 2.3'],
			}))
			.pipe($.kss({
				templateDirectory: config.styleGuide.tempDir
			}))
			.pipe(gulp.dest(config.styleGuide.dest))
			.pipe($.browserSync.reload({ stream:true }));
	});
};