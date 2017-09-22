module.exports = function(gulp, $, config) {
	var taskName = 'iconfont';

	gulp.task(taskName, function () {
		var fontName = 'icons';
		var src = gulp.src(config.iconFont.src);
		//svg to svgfont
		var svgFont = src.pipe($.svgicons2svgfont({
				fontName: fontName
			})).on('glyphs', function(glyphs) {
				console.log(glyphs);
				$.async.parallel([
					function(cb){
						gulp.src(config.iconFont.tempDir + '_iconsMixin.scss')
							.pipe($.consolidate('lodash', {
								glyphs: glyphs,
								fontName: fontName,
								fontPath: '../fonts/icons/',
								className: 'icons'
							}))
							.pipe(gulp.dest(config.iconFont.scssDir));
							// .on('finish', cb);

						gulp.src(config.iconFont.tempDir + '_icons.scss')
							.pipe($.consolidate('lodash', {
								glyphs: glyphs,
								fontName: fontName,
								fontPath: '../fonts/icons/',
								className: 'icons'
							}))
							.pipe(gulp.dest(config.iconFont.scssDir))
							.on('finish', cb);

					},
					function(cb){
						gulp.src(config.iconFont.tempDir + 'icons.scss')
							.pipe($.consolidate('lodash', {
								glyphs: glyphs,
								fontName: fontName,
								fontPath: '../../../assets/fonts/icons/',
								className: 'icons'
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

// module.exports = function(gulp, $, config) {
// 	var taskName = 'iconfont';

// 	gulp.task(taskName, function () {
// 		var fontName = 'icons';
// 		var runTimestamp = Math.round(Date.now()/1000);
// 		var iconStream = gulp.src(config.iconFont.src)
// 			.pipe($.changed(config.css.dest))
// 			.pipe($.plumber({
// 				errorHandler: $.notify.onError("Error: <%= error.message %>")
// 			}))
// 			.pipe($.iconfont({
// 				fontName: fontName,
// 				formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
// 				timestamp: runTimestamp
// 			}))

// 		$.async.parallel([
// 			function makeMixin (cb) {
// 				iconStream.on('glyphs', function(glyphs, options) {
// 					gulp.src(config.iconFont.tempDir + '_iconsMixin.scss')
// 						.pipe($.consolidate('lodash', {
// 							glyphs: glyphs,
// 							fontName: fontName,
// 							fontPath: '../fonts/icons/',
// 							className: 'icons'
// 						}))
// 						.pipe(gulp.dest(config.iconFont.scssDir))
// 						.on('finish', cb);
// 				});
// 			},
// 			function makeScss (cb) {
// 				iconStream.on('glyphs', function(glyphs, options) {
// 					gulp.src(config.iconFont.tempDir + 'icons.scss')
// 						.pipe($.consolidate('lodash', {
// 							glyphs: glyphs,
// 							fontName: fontName,
// 							fontPath: '../../../assets/fonts/icons/',
// 							className: 'icons'
// 						}))
// 						.pipe(gulp.dest(config.iconFont.scssDir))
// 						.on('finish', cb);
// 				});
// 			},
// 			function handleFonts (cb) {
// 				iconStream
// 					.pipe(gulp.dest(config.iconFont.dest))
// 					.on('finish', cb);
// 			}
// 		], function(){
// 			$.browserSync.reload({ stream:true })
// 			return iconStream;
// 		});

// 	});
// };