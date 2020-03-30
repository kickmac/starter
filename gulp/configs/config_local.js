const slash = require('slash');

const dir = slash(slash(`${process.cwd()}/htdocs/`));
// const dir = 'Z:/www/mock/gcdental.co.jp/implant/';

const srcDir = `${dir}`;
const destDir = `${dir}`;


module.exports = {
	dir: dir,
	src: [
		`${srcDir}**/*`,
		`!${srcDir}**/_*`,
	],
	dest: `${destDir}`,

	html: {
		src: [
			`${srcDir}ejs/**/*.ejs`,
			`!${srcDir}ejs/**/_*.ejs`,
		],
		dest: `${destDir}`,
	},
	pageList: {
		template: slash(`${process.cwd()}/gulp/templates/page_list/`),
		dest: `${destDir}_page_list/`,
	},
	css: {
		srcDir: `${srcDir}assets/scss/`,
		src: [
			`${srcDir}assets/scss/**/*.scss`,
		],
		dest: `${destDir}assets/styles/`,
	},
	imgSprite: {
		template: slash(`${process.cwd()}/gulp/templates/img_sprite/`),
		src: [
			`${srcDir}assets/images/_sprite/*`,
			`!${srcDir}/assets/images/_sprite/_*`,
		],
		dest: `${destDir}assets/images/`,
	},
	svgSprite: {
		template: slash(`${process.cwd()}/gulp/templates/svg_sprite/`),
		src: [
			`${srcDir}assets/images/_svg_sprite/*`,
			`!${srcDir}/assets/images/_svg_sprite/_*`,
		],
		dest: `${destDir}assets/images/`,
	},
	iconFont: {
		template: slash(`${process.cwd()}/gulp/templates/icon_font/**/*.scss`),
		scssDir: `${srcDir}assets/scss/`,
		src: [
			`${srcDir}assets/fonts_src/iconfont/**/*.svg`,
			`!${srcDir}assets/fonts_src/iconfont/**/_*.svg`,
		],
		dest: `${destDir}assets/fonts/iconfont/`,
	},
	images: {
		src: [
			`${srcDir}assets/images/**/*`,
			`!${srcDir}assets/images/**/_*`,
		],
		dest: `${destDir}assets/images/`,
	},
	js: {
		srcDir: `${srcDir}assets/js_src/`,
		src: [
			`${srcDir}assets/js_src/**/*.js`,
			`!${srcDir}assets/js_src/**/_*.js`,
		],
		dest: `${destDir}assets/js/`,
	},
	styleGuide: {
		template: slash(`${process.cwd()}/gulp/templates/style_guide/index.ejs`),
		importCss: ["./assets/styles/styles.css"],
		importJs: ["/assets/js/common.js"],
		dest: `${destDir}_style_guide/`,
	}
};