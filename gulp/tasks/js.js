const gulp = require("gulp");
const config = require(`${process.cwd()}/gulp/configs/config`);
const bs = require("browser-sync");

const buffer = require("gulp-buffer");
const uglify = require("gulp-uglify");
const tap = require("gulp-tap");

const browserify = require("browserify");
const babelify = require("babelify");


let jsData;

/*-------------------------------------------------------------------------------------
* jsConvert
-------------------------------------------------------------------------------------*/
const jsConvert = () => {
	return new Promise((resolve, reject) => {
		jsData = gulp
			.src(config.js.src)
			.pipe(
				tap((file) => {
					file.contents = browserify(file.path, {
						debug: false,
						paths: [`${process.cwd()}/node_modules`]
					})
						.transform('babelify', {
							presets: ['@babel/env'],
							plugins: [
								['@babel/plugin-transform-runtime', { 'corejs': 2 }]
							],
						})
						.bundle()
						.on("error", function (err) {
							console.log("Error : " + err.message);
							this.emit("error");
						});
				})
			)
			.pipe(buffer())

		resolve();

	});
};

/*-------------------------------------------------------------------------------------
* js min
-------------------------------------------------------------------------------------*/
const jsMinify = () => {
	return new Promise((resolve, reject) => {
		jsData = jsData.pipe(uglify());
		resolve();
	});
};
/*-------------------------------------------------------------------------------------
* jsjsDest
-------------------------------------------------------------------------------------*/
const jsDest = () => {
	return new Promise((resolve, reject) => {
		jsData
			.pipe(gulp.dest(config.js.dest))
			.pipe(bs.stream());

		resolve();
	});
};

/*-------------------------------------------------------------------------------------
* js
-------------------------------------------------------------------------------------*/
const js = gulp.series(jsConvert, jsDest);
const jsMin = gulp.series(jsConvert, jsMinify, jsDest);

exports.js = js;
exports.jsMin = jsMin;
