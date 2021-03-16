const slash = require('slash');
const base =  slash(`${process.cwd()}/mock`);

module.exports = {
	base,
	assets: `${base}/assets/`,
	images: `${base}/assets/images`,


	html: {
		src: `${base}/ejs`,
		dist: `${base}`,
	},

	css: {
		src: `${base}/assets/scss`,
		dist: `${base}/assets/styles`,
	},

	styleGuide: {
		dist: `${base}/_style_guide`,
		template: `${process.cwd()}/gulp/configs/style_guide/templates`,
	},

	js: {
		src: `${base}/assets/js_src`,
		dist: `${base}/assets/js`,
	},

	imgSprite: {
		src: `${base}/assets/images/_img_sprite`,
		dist: `${base}/assets/images`,
		template: `${process.cwd()}/gulp/configs/img_sprite/templates`,
	},

	svgSprite: {
		src: `${base}/assets/images/_svg_sprite`,
		dist: `${base}/assets/images`,
		template: `${process.cwd()}/gulp/configs/svg_sprite/templates`,
	},

	iconFont: {
		src: `${base}/assets/fonts_src/iconfont`,
		dist: `${base}/assets/fonts/iconfont`,
		template: `${process.cwd()}/gulp/configs/icon_font/template`,
	},

	favicon: {
		src: `${base}/assets`,
		dist: `${base}/favicons`,
	},

	pageList: {
		dist: `${base}/_page_list`,
		template: `${process.cwd()}/gulp/configs/page_list/template`,
	},

}