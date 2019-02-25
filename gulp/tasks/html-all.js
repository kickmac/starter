module.exports = function(gulp, $, config) {
	var taskName = 'html-all';
	var ejsConfig = require('../ejs_config.js')(config);

	gulp.task(taskName, function () {
		return gulp.src( config.html.src)
			.pipe($.plumber({
				errorHandler: $.notify.onError("Error: <%= error.message %>")
			}))
			.pipe($.ejs(ejsConfig.data, ejsConfig.options, ejsConfig.settings))
			// .pipe($.rename({
				// extname: ".php"
			// }))
			.pipe( gulp.dest(config.html.dest))
	});
};