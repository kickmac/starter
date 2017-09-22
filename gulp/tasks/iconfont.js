module.exports = function(gulp, $, config) {
	var taskName = 'iconFont';
	var fontName = 'icons';

	gulp.task(taskName, function () {
		var src = gulp.src(config.iconFont.src);
		//svg to svgfont
		var svgFont = src.pipe($.svgicons2svgfont({
				fontName: fontName,
				normalize: true,
			})).on('glyphs', function(glyphs) {
				$.async.parallel([
					function(cb){
						gulp.src(config.iconFont.tempDir + '_iconFontMixin.scss')
							.pipe($.consolidate('lodash', {
								glyphs: glyphs,
								fontName: fontName,
								fontPath: '../fonts/iconfont/',
								className: 'icons'
							}))
							.pipe(gulp.dest(config.iconFont.scssDir));
							// .on('finish', cb);

						gulp.src(config.iconFont.tempDir + 'iconFont.scss')
							.pipe($.consolidate('lodash', {
								glyphs: glyphs,
							}))
							.pipe(gulp.dest(config.iconFont.scssDir))
							.on('finish', cb);

					}
				], function(){
					$.browserSync.reload({ stream:true })
				})
			})
			.pipe(gulp.dest(config.iconFont.dest))

		//svgfont to ttf
		var ttf = svgFont.pipe($.svg2ttf())
			.pipe(gulp.dest(config.iconFont.dest))
			.on('end', function(event) {
				//ttf  to woff
				gulp.src(config.iconFont.dest + '/' + fontName + '.ttf').pipe($.ttf2woff())
					.pipe(gulp.dest(config.iconFont.dest))

				//ttf  to eot
				gulp.src(config.iconFont.dest + '/' + fontName + '.ttf').pipe($.ttf2eot())
					.pipe(gulp.dest(config.iconFont.dest))
			});


	});
};