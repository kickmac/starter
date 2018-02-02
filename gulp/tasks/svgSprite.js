module.exports = function(gulp, $, config) {
	var taskName = 'svgSprite';
	$.fs = require("fs");

	gulp.task(taskName, function () {
		return gulp.src( config.svgSprite.src)
			.pipe($.svgSprites({
				layout: 'diagonal',
				svgPath: '../svg/%f',
				pngPath: '../svg/%f',
				svg: {
					sprite: 'sprite.svg'
				},
				baseSize: 1,
				templates: {
					css: $.fs.readFileSync(config.svgSprite.tempDir + 'svgSprite.scss', "utf-8")
				},
				cssFile: '../scss/svgSprite.scss',
				preview: false,
				afterTransform: function (data) {
					gulp.src( config.svgSprite.tempDir + '_svgSpriteMixin.scss')
						.pipe($.consolidate('lodash', {
							relWidth: data.swidth,
							relHeight: data.sheight,
							svg: data.svg,
							svgPath: '../svg/sprite.svg',
							pngPath: '../svg/sprite.png',
						}))
						.pipe(gulp.dest(config.svgSprite.scssDir))
					return data; // modify the data and return it
				},
			}))
			.pipe(gulp.dest(config.svgSprite.dest))
			.pipe($.svg2png())
			.pipe(gulp.dest(config.svgSprite.dest))
			.pipe($.browserSync.stream());
	});

};