// var dir = process.cwd().replace(/\\/g, '/') + '/htdocs/';
var dir = 'X:/www/develop/green-ribbon.jp/htdocs/';


module.exports = {
	dir: dir,
	src: [dir + '**/*', '!' + dir +  '/**/_*', '!' + dir +  '/**/copy_*'],
	dest: dir,

	html: {
		src: [dir + 'ejs/**/*.ejs', '!' + dir +  'ejs/**/_*.ejs', '!' + dir +  'ejs/**/copy_*.ejs'],
		dest: dir
	},
	pageList: {
		template: process.cwd() + '/gulpfile.js/templates/page_list/',
		dest: dir + '_page_list'
	},
	css: {
		srcDir: dir + 'assets/scss/',
		src: [dir + 'assets/scss/**/*.scss', '!' + dir +  '/assets/scss/**/copy_*.scss'],
		dest: dir + 'assets/styles'
	},
	imgSprite: {
		template: process.cwd() + '/gulpfile.js/templates/img_sprite/',
		src: [dir + 'assets/images/_sprite/*', '!' + dir +  '/assets/images/_sprite/_*', '!' + dir +  '/assets/images/_sprite/copy_*'],
		dest: dir + 'assets/images'
	},
	svgSprite: {
		template: process.cwd() + '/gulpfile.js/templates/svg_sprite/',
		src: [dir + 'assets/svg_src/sprite/*', '!' + dir +  '/assets/images/svg_src/sprite/_*', '!' + dir +  '/assets/images/svg_src/sprite/copy_*'],
		dest: dir + 'assets/svg'
	},
	iconFont: {
		template: process.cwd() + '/gulpfile.js/templates/icon_font/**/*.scss',
		scssDir: dir + 'assets/scss/',
		src: [dir + 'assets/fonts_src/iconfont/**/*.svg', '!' + dir +  '/assets/fonts_src/iconfont/**/_*.svg', '!' + dir +  '/assets/fonts_src/iconfont/**/copy_*.svg'],
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
		template: process.cwd() + '/gulpfile.js/templates/style_guide/index.ejs',
		importCss: ['./assets/styles/styles.css'],
		importJs: ['/assets/js/common.js'],
		dest: dir + '_style_guide'
	}
};