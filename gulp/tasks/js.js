module.exports = function(gulp, $, config) {
	var taskName = 'js';

	gulp.task(taskName, function () {
		return gulp.src( config.js.src + '/common.js' )
			.pipe($.resolveDependencies ({
				pattern: /\* @requires [\s-]*(.*\.js)/g
			}))
			.pipe($.concat('common.js'))
			.pipe($.babel({
				presets: require.resolve('babel-preset-es2015')
			}))
			// .pipe($.uglify())
			.pipe( gulp.dest(config.js.dest))
			.pipe($.browserSync.stream())
	});

};