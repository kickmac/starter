var dir = process.cwd() + '/app/'
// var dir = 'Z:/www/mock/test/'
var srcDir = dir + 'src/';
var destDir = dir + 'dist/';

module.exports = {
	src: [srcDir + '**/*', '!' + srcDir + '**/_*', '!' + srcDir + '**/copy_*'],
	dest: destDir,

	html: {
		src: [srcDir + 'ejs/**/*.ejs', '!' + srcDir + '**/_*.ejs', '!' + srcDir + '**/copy_*.ejs'],
		dest: destDir
	},
	css: {
		src: [srcDir + 'assets/scss/**/*.scss', '!' + srcDir + 'scss/**/copy_*.scss'],
		dest: destDir + 'assets/styles'
	},
	sprite: {
		src: [srcDir + 'assets/images/_sprite/*', '!' + srcDir + 'assets/images/_sprite/_*', '!' + srcDir + 'assets/images/_sprite/copy_*'],
		dest: destDir + 'assets/images'
	},
	spriteCss: {
		src: [srcDir + 'assets/images/_sprite/*', '!' + srcDir + 'assets/images/_sprite/_*', '!' + srcDir + 'assets/images/_sprite/copy_*'],
		dest: destDir + 'assets/scss'
	},
	icons: {
		tempDir: './gulp/iconfont_template/',
		scssDir: srcDir + 'assets/scss/',
		src: [srcDir + 'assets/fonts/**/*', '!' + srcDir + 'assets/fonts/**/_*', '!' + srcDir + 'assets/fonts/**/copy_*'],
		dest: destDir + 'assets/fonts/',
		svg_src: [srcDir + 'assets/svg/icons/**/*.svg', '!' + srcDir + 'assets/svg/icons/**/_*.svg', '!' + srcDir + 'assets/svg/icons/**/copy_*.svg'],
		svg_dest: destDir + 'assets/fonts/icons',
	},
	images: {
		src: [srcDir + 'assets/images/**/*', '!' + srcDir + 'assets/images/**/_*', '!' + srcDir + 'assets/images/**/copy_*'],
		dest: destDir + 'assets/images'
	},
	js: {
		entries: [srcDir + 'assets/js/common.js'],
		src: srcDir + 'assets/js/',
		dest: destDir + 'assets/js'
	},
	styleGuide: {
		tempDir: './gulp/styleguide_template',
		dest: destDir + '_style_guide'
	}
};