var dir = process.cwd() + '/htdocs/';
// var dir = 'Z:/www/mock/aaaaaaaaaaa/';


module.exports = {
	src: [dir + '**/*', '!' + dir +  '/**/_*', '!' + dir +  '/**/copy_*'],
	dest: dir,

	html: {
		src: [dir + 'ejs/**/*.ejs', '!' + dir +  '/ejs/**/_*.ejs', '!' + dir +  '/ejs/**/copy_*.ejs'],
		dest: dir
	},
	list: {
		csv: dir + 'ejs/list.csv',
		temp: './gulp/list_template/index.ejs',
		dest: dir + '_html_list'
	},
	css: {
		src: [dir + 'assets/scss/**/*.scss', '!' + dir +  '/assets/scss/**/copy_*.scss'],
		dest: dir + 'assets/styles'
	},
	sprite: {
		src: [dir + 'assets/images/_sprite/*', '!' + dir +  '/assets/images/_sprite/_*', '!' + dir +  '/assets/images/_sprite/copy_*'],
		dest: dir + 'assets/images'
	},
	spriteCss: {
		src: [dir + 'assets/images/_sprite/*', '!' + dir +  '/assets/images/_sprite/_*', '!' + dir +  '/assets/images/_sprite/copy_*'],
		dest: dir + 'assets/scss'
	},
	icons: {
		tempDir: './gulp/iconfont_template/',
		scssDir: dir + 'assets/scss/',
		src: [dir + 'assets/svg/icons/**/*.svg', '!' + dir +  '/assets/svg/icons/**/_*.svg', '!' + dir +  '/assets/svg/icons/**/copy_*.svg'],
		dest: dir + 'assets/fonts/icons'
	},
	images: {
		src: [dir + 'assets/images/**/*', '!' + dir +  '/assets/images/**/_*', '!' + dir +  '/assets/images/**/copy_*'],
		dest: dir + 'assets/images'
	},
	js: {
		src: [
			dir + 'assets/js_src/plugins/jquery-1.11.1.min.js',
			dir + 'assets/js_src/plugins/jquery.easing.1.3.js',

			dir + 'assets/js_src/plugins/jquery.matchHeight-min.js',
			dir + 'assets/js_src/plugins/slick.min.js',
			dir + 'assets/js_src/plugins/es6-promise.auto.js',
			dir + 'assets/js_src/plugins/lightgallery-all.js',

			//以下はpluginより後に読み込むこと
			dir + 'assets/js_src/modules.js',
			dir + 'assets/js_src/common.js'
		],
		dest: dir + 'assets/js'
	},
	styleGuide: {
		tempDir: './gulp/styleguide_template',
		dest: dir + '_style_guide'
	}
};