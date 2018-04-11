module.exports = function(gulp, $, config) {
	var taskName = 'html-all';
	var ejsConfig = require('../ejs_config.js');

	gulp.task(taskName, function () {
		return gulp.src( config.html.src)
			.pipe($.cached('html'))
			.pipe($.progeny())
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