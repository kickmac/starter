const cFonts = require("cfonts");
const gulp = require("gulp");
const config = require(`${process.cwd()}/gulp/configs/config`);
const bs = require("browser-sync");

/*-------------------------------------------------------------------------------------
* load tasks
-------------------------------------------------------------------------------------*/
const html = require(`${process.cwd()}/gulp/tasks/html`);
const css = require(`${process.cwd()}/gulp/tasks/css`);
const js = require(`${process.cwd()}/gulp/tasks/js`);
const iconFont = require(`${process.cwd()}/gulp/tasks/icon_font`);
const imgSprite = require(`${process.cwd()}/gulp/tasks/img_sprite`);
const svgSprite = require(`${process.cwd()}/gulp/tasks/svg_sprite`);
const pageList = require(`${process.cwd()}/gulp/tasks/page_list`);

/*-------------------------------------------------------------------------------------
* watch
-------------------------------------------------------------------------------------*/
const watch = () => {
	gulp.watch(
		config.html.src, {
			queue: true,
			usePolling: false,
			ignoreInitial: true
		},
		gulp.task("html")
	);

	gulp.watch(
		config.css.src, {
			queue: true,
			usePolling: false,
			ignoreInitial: true
		},
		gulp.task("css")
	);

	gulp.watch(
		config.js.srcDir, {
			queue: true,
			usePolling: false,
			ignoreInitial: true
		},
		gulp.task("jsMin")
	);

	gulp.watch(
		config.iconFont.src, {
			queue: true,
			usePolling: false,
			ignoreInitial: true
		},
		gulp.task("iconFont")
	);

	gulp.watch(
		config.svgSprite.src, {
			queue: true,
			usePolling: false,
			ignoreInitial: true
		},
		gulp.task("svgSprite")
	);

	gulp.watch(
		config.imgSprite.src, {
			queue: true,
			usePolling: false,
			ignoreInitial: true
		},
		gulp.task("imgSprite")
	);
}

/*-------------------------------------------------------------------------------------
* bsInit
-------------------------------------------------------------------------------------*/
const bsInit = () => {
	return new Promise((resolve, reject) => {
		bs.init({
				logLevel: "silent",
				logFileChanges: false,
				logConnections: true,
				notify: true,
				server: {
					baseDir: config.dest
				}
				// proxy: './htdocs/',
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

/*-------------------------------------------------------------------------------------
* defaultTask
-------------------------------------------------------------------------------------*/
const defaultTask = gulp.series(
	pre = () => {
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
		html,
		css,
		js.jsMin,
		iconFont,
		imgSprite,
		svgSprite
	),
	bsInit,
	watch
)

const test = done => {
	const text = 'Always after me lucky charms.';
	const canvas = Canvas.create().reset().hideCursor();

for (let y = 0; y < process.stdout.rows; y++) canvas.moveTo(0, y).write('E'.repeat(process.stdout.columns));

canvas.moveTo(process.stdout.columns / 2, process.stdout.rows / 2).flush();

setTimeout(() => canvas.eraseToStart().flush(), 1000);
setTimeout(() => canvas.eraseToEnd().flush(), 2000);
setTimeout(() => canvas.eraseToUp().flush(), 3000);
setTimeout(() => canvas.eraseToDown().flush(), 4000);
setTimeout(() => canvas.eraseScreen().flush().showCursor(), 5000);

	done();
}

/*-------------------------------------------------------------------------------------
* task export
-------------------------------------------------------------------------------------*/
module.exports = {
	test,
	default: defaultTask,
	html,
	css,
	js: js.js,
	jsMin: js.jsMin,
	iconFont,
	imgSprite,
	svgSprite,
	pageList,
	watch,
	bsInit
};
