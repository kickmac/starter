module.exports = {
	src: ['./htdocs/**/*', '!./htdocs/**/_*', '!./htdocs/**/copy_*'],
	dest: './htdocs/',

	html: {
		src: ['./htdocs/ejs/**/*.ejs', '!./htdocs/ejs/**/_*.ejs', '!./htdocs/ejs/**/copy_*.ejs'],
		dest: './htdocs/'
	},
	css: {
		src: ['./htdocs/assets/scss/**/*.scss', '!./htdocs/assets/scss/**/copy_*.scss'],
		dest: './htdocs/assets/styles'
	},
	sprite: {
		src: ['./htdocs/assets/images/_sprite/*', '!./htdocs/assets/images/_sprite/_*', '!./htdocs/assets/images/_sprite/copy_*'],
		dest: './htdocs/assets/images'
	},
	spriteCss: {
		src: ['./htdocs/assets/images/_sprite/*', '!./htdocs/assets/images/_sprite/_*', '!./htdocs/assets/images/_sprite/copy_*'],
		dest: './htdocs/assets/scss'
	},
	icons: {
		tempDir: './gulp/iconfont_template/',
		scssDir: './htdocs/assets/scss/',
		src: ['./htdocs/assets/svg/icons/**/*.svg', '!./htdocs/assets/svg/icons/**/_*.svg', '!./htdocs/assets/svg/icons/**/copy_*.svg'],
		dest: './htdocs/assets/fonts/icons'
	},
	images: {
		src: ['./htdocs/assets/images/**/*', '!./htdocs/assets/images/**/_*', '!./htdocs/assets/images/**/copy_*'],
		dest: './htdocs/assets/images'
	},
	js: {
		src: [
			'./htdocs/assets/js_src/plugins/jquery-1.11.1.min.js',
			'./htdocs/assets/js_src/plugins/jquery.easing.1.3.js',

			'./htdocs/assets/js_src/plugins/jquery.matchHeight-min.js',
			'./htdocs/assets/js_src/plugins/jquery.resizeend.min.js',
			'./htdocs/assets/js_src/plugins/slick.min.js',

			//lightgallery
			'./htdocs/assets/js_src/plugins/lightgallery/lightgallery.min.js',
			'./htdocs/assets/js_src/plugins/lightgallery/lg-video.min.js',
			'./htdocs/assets/js_src/plugins/lightgallery/lg-zoom.min.js',
			'./htdocs/assets/js_src/plugins/lightgallery/lg-thumbnail.min.js',

			//以下はpluginより後に読み込むこと
			'./htdocs/assets/js_src/modules.js',
			'./htdocs/assets/js_src/common.js'
		],
		dest: './htdocs/assets/js'
	},
	styleGuide: {
		tempDir: './gulp/styleguide_template',
		dest: './htdocs/_style_guide'
	}
};