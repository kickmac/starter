module.exports = function(gulp, $, config) {
	var taskName = 'iconsCssMove';

	gulp.task(taskName, function () {
		var src = gulp.src(config.css.dest + '/icons.css')
		src.pipe(gulp.dest(config.styleGuide.dest + '/assets/styles/'));

		$.del(config.css.dest + '/icons.css*');
		return src;
	});
};