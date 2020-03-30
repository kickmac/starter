const gulp = require("gulp");
const config = require(`${process.cwd()}/gulp/configs/config`);

const ejs = require("gulp-ejs");
const gIconFont = require("gulp-iconfont");

let cssData;
let data;
/*--------------------------------------------------------------------------------------
*  makeIconFont
--------------------------------------------------------------------------------------*/
const makeIconFont = () => {
	return new Promise((resolve, reject) => {
		data = gulp
			.src(config.iconFont.src)
			.pipe(
				gIconFont({
					fontName: "icons",
					// prependUnicode: true,
					formats: ["ttf", "eot", "woff", "svg"],
					timestamp: gulp.lastRun("iconFont")
				})
			)
			.on("glyphs", function(glyphs, options) {
				cssData = {
					glyphs,
					options
				};
				resolve();
			});
	});
};

/*--------------------------------------------------------------------------------------
*  iconFont dest
--------------------------------------------------------------------------------------*/
const iconFontDest = () => {
	return new Promise((resolve, reject) => {
		data.pipe(gulp.dest(config.iconFont.dest));
		resolve();
	});
};

/*--------------------------------------------------------------------------------------
*  make css
--------------------------------------------------------------------------------------*/
const iconFontCss = () => {
	return new Promise((resolve, reject) => {
		gulp
			.src(config.iconFont.template)
			.pipe(
				ejs(
					{
						data: cssData.glyphs,
						options: cssData.options,
						fontPath: "/assets/fonts/iconfont/"
					},
					{
						delimiter: "?"
					}
				)
			)
			.on("error", (err) => {
				console.log(err);
				reject();
			})
			.pipe(gulp.dest(config.css.srcDir));
		resolve();
	});
};

/*--------------------------------------------------------------------------------------
*  iconFont Suite
--------------------------------------------------------------------------------------*/
const iconFont = gulp.series(makeIconFont, gulp.parallel(iconFontDest, iconFontCss))

module.exports = iconFont;
