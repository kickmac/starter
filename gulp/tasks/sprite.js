module.exports = function(gulp, $, config) {
	var taskName = 'sprite';

	gulp.task(taskName, function () {
		var spriteData = gulp.src( config.sprite.src)
			.pipe($.changed(config.sprite.dest))
			.pipe( $.spritesmith({
				imgName: 'sprite.png',
				imgPath : '../images/sprite.png',
				cssName: '_sprite.scss',

				// retinaSrcFilter: 'Z:/www/develop/jmedj_mock/htdocs/assets/images/sprite/*-2x.png',
				// retinaImgName: 'sprite-2x.png',
				// retinaImgPath: '../images/sprite-2x.png',

				algorithm: 'binary-tree',
				// algorithmOpts : {// 画像の並ぶ順をファイル名順に
				// 	sort: false
				// },

				cssOpts: {// スプライト用SCSS内のmixinの記述をなくす
					functions: false
				},
			}));

		spriteData.img
			.pipe(gulp.dest(config.sprite.dest));

		spriteData.css
			.pipe(gulp.dest(config.spriteCss.dest));

	});

};