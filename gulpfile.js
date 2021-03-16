const argv = require('minimist')(process.argv.slice(2));
const DEV = !!argv.dev

const dirs = require(`${process.cwd()}/gulp/configs/dirs`);

const gulp = require('gulp')
const cFonts = require("cfonts");
const bs = require("browser-sync");

const html = require('./gulp/tasks/html');
const css = require('./gulp/tasks/css');
const js = require('./gulp/tasks/js');
const imgSprite = require('./gulp/tasks/imgSprite');
const svgSprite = require('./gulp/tasks/svgSprite');
const iconFont = require('./gulp/tasks/iconFont');
const favicon = require('./gulp/tasks/favicon');
const pageList = require('./gulp/tasks/pageList');

const networkDir = false;
const proxyUrl = 'https://shift-jp.net';



const watcher = () => {
	if(!networkDir) {
		gulp.watch(
			[`${dirs.html.src}/**/*.ejs`, `!${dirs.html.src}/_**/*.ejs`, `!${dirs.html.src}/**/_*.ejs`],
			{
				queue: true,
				usePolling: networkDir,
				ignoreInitial: true
			},
			gulp.task('html')
		);
	}

	gulp.watch(
		[`${dirs.css.src}/**/*.scss`],
		{
			queue: true,
			usePolling: networkDir,
			ignoreInitial: true
		},
		gulp.task('css')
	);

	gulp.watch(
		[`${dirs.js.src}/**/*.js`],
		{
			queue: true,
			usePolling: networkDir,
			ignoreInitial: true
		},
		gulp.task('js')
	);

	gulp.watch(
		[`${dirs.imgSprite.src}/**/*`, `!${dirs.imgSprite.src}/**/_*`],
		{
			queue: true,
			usePolling: networkDir,
			ignoreInitial: true
		},
		gulp.task('imgSprite')
	);

	gulp.watch(
		[`${dirs.svgSprite.src}/**/*.svg`, `!${dirs.svgSprite.src}/**/_*.svg`],
		{
			queue: true,
			usePolling: networkDir,
			ignoreInitial: true
		},
		gulp.task('svgSprite')
	);

	gulp.watch(
		[`${dirs.iconFont.src}/**/*.svg`, `!${dirs.iconFont.src}/_**/*.svg`, `!${dirs.iconFont.src}/**/_*.svg`],
		{
			queue: true,
			usePolling: networkDir,
			ignoreInitial: true
		},
		gulp.task('iconFont')
	);
}


const bsInit = () => {
	return new Promise((resolve, reject) => {
		bs.init({
				logLevel: 'silent',
				logFileChanges: false,
				logConnections: true,
				notify: true,
				server: !networkDir ? {
					baseDir: dirs.base
				} : false,
				proxy: networkDir ? proxyUrl : false,
			},
			() => {
				cFonts.say("LET'S CODING", {
					font: "chrome",
					align: "center",
					colors: ["cyan", "redBright", "yellow"],
					backgtound: "green"
				});
				resolve();
			}
		);
	});
}



const defaultTask = gulp.series(
	start = () => {
		return new Promise((resolve, reject) => {
			cFonts.say("GULP START!!", {
				font: "chrome",
				align: "center",
				colors: ["cyan", "redBright", "yellow"],
				backgtound: "green"
			});
			resolve();
		})
	},
	gulp.parallel(
		(()=>{
			let _list = [
				js,
				iconFont,
				imgSprite,
				svgSprite
			]
			if(!networkDir) {
				_list = [html, ..._list]
			}
			return _list;
		})()
	),
	css,
	bsInit,
	watcher
)




exports.default = defaultTask
exports.html = html;
exports.css = css;
exports.js = js;
exports.imgSprite = imgSprite;
exports.svgSprite = svgSprite;
exports.iconFont = iconFont;
exports.favicon = favicon;
exports.pageList = pageList;
