module.exports = function(gulp, $, config) {
	var taskName = 'svgSprite';

	gulp.task(taskName, function () {
		var spriteData = gulp.src( config.svgSprite.src)
			.pipe($.svgmin())
			.pipe($.svgstore({ inlineSvg: true }))
			.pipe($.rename('sprite.svg'))
			.pipe(gulp.dest(config.svgSprite.dest));

		var pngSprite = gulp.src(config.svgSprite.src)
			.pipe($.svg2png(3))
			.pipe($.rename({ prefix: "icons.svg." }))
			.pipe(gulp.dest(config.svgSprite.dest + '/sprite_fallbacks/'));

	});

};