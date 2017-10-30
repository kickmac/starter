var dir = process.cwd() + '/htdocs/';
// var dir = 'Z:/www/mock/gcdental.co.jp/implant/';


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
	svgSprite: {
		tempDir: './gulp/svgsprite_template/',
		scssDir: dir + 'assets/scss/',
		src: [dir + 'assets/svg_src/sprite/*', '!' + dir +  '/assets/images/svg_src/sprite/_*', '!' + dir +  '/assets/images/svg_src/sprite/copy_*'],
		dest: dir + 'assets/svg'
	},
	iconFont: {
		tempDir: './gulp/iconfont_template/',
		scssDir: dir + 'assets/scss/',
		src: [dir + 'assets/fonts_src/icons/**/*.svg', '!' + dir +  '/assets/fonts_src/icons/**/_*.svg', '!' + dir +  '/assets/fonts_src/icons/**/copy_*.svg'],
		dest: dir + 'assets/fonts/iconfont'
	},
	images: {
		src: [dir + 'assets/images/**/*', '!' + dir +  '/assets/images/**/_*', '!' + dir +  '/assets/images/**/copy_*'],
		dest: dir + 'assets/images'
	},
	js: {
		src: dir + 'assets/js_src',
		dest: dir + 'assets/js'
	},
	styleGuide: {
		tempDir: './gulp/styleguide_template',
		dest: dir + '_style_guide'
	}
};