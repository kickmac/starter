module.exports = function(gulp, $, config) {
	var taskName = 'sprite';

	gulp.task(taskName, function () {
		var spriteData = gulp.src( config.sprite.src)
			.pipe($.changed(config.sprite.dest))
			.pipe( $.spritesmith({
				imgName: 'sprite.png',
				cssName: '_sprite.scss',
				imgPath : '../images/sprite.png',
				algorithm: 'diagonal',
				// cssOpts: {// スプライト用SCSS内のmixinの記述をなくす
				// 	functions: false
				// },
			}));

		spriteData.img
			.pipe(gulp.dest(config.sprite.dest));

		spriteData.css
			.pipe(gulp.dest(config.spriteCss.dest));

	});
};