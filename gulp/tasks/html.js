module.exports = function(gulp, $, config) {
	var taskName = 'html';
	var ejsConfig = require('../ejs_config.js');

	gulp.task(taskName, function () {
		return gulp.src( config.html.src)
			.pipe($.changed(config.html.dest))
			.pipe($.plumber({
				errorHandler: $.notify.onError("Error: <%= error.message %>")
			}))
			.pipe($.ejs(ejsConfig))
			// .pipe($.rename({
				// extname: ".php"
			// }))
			.pipe( gulp.dest(config.html.dest))
			.pipe($.browserSync.reload({ stream:true }));
	});
};