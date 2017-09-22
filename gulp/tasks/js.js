module.exports = function(gulp, $, config) {
	var taskName = 'js';

	var createBundler = function(plugins, debugBuild) {
		return $.browserify({
			entries: config.js.entries,
			debug: debugBuild,
			plugin: plugins
		})
		.transform($.browserifyShim)
		.transform($.babelify, {presets: require.resolve('babel-preset-es2015')});
	};

	var bundle = function(bundler, debugBuild) {
		var b = bundler
			.bundle()
			.on("error", function(err){console.log(err)})
			.on("end", function(){console.log("browserify compile success.")})
			.pipe($.vinyl("common.js"))
			.pipe($.buffer())


			if (!debugBuild) {
				b = b
				.pipe($.uglify());
			}
			return b.pipe(gulp.dest(config.js.dest))
				.pipe($.browserSync.reload({ stream:true }));
	};

	gulp.task(taskName, function (){
		var debug = true;
		bundle(createBundler([], debug), debug);
	});

	gulp.task(taskName + ":min", function (){
		bundle(createBundler([]));
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