const gulp = require("gulp");
const config = require(`${process.cwd()}/gulp/configs/config`);

const sprite = require("svg-sprite-data");
const ejs = require("gulp-ejs");
const path = require("path");
const fs = require("fs-extra");
const through = require("through2");

const spriter = new sprite({
	common: "svgSprite",
	dims: false,
	layout: "diagonal"
});
let svgSpriteData;

/*--------------------------------------------------------------------------------------
*  makeSvgSpriteData
--------------------------------------------------------------------------------------*/
const makeSvgSpriteData = () => {
	return new Promise((resolve, reject) => {
		gulp
			.src(config.svgSprite.src)
			.pipe(
				through.obj(function(a, b, cb) {
					spriter.add(
						"/" + path.relative(config.dir, a.history[0]).replace(/\\/g, "/"),
						a.contents.toString()
					);
					cb();
				})
			)
			.on("finish", () => {
				spriter.compile(function(err, svg) {
					svgSpriteData = svg;
					svgSpriteData.data.path =
						"/" +
						path
							.relative(config.dir, config.svgSprite.dest + "/sprite.svg")
							.replace(/\\/g, "/");
					resolve();
				});
			});
	});
};

/*--------------------------------------------------------------------------------------
*  svgSpriteDest
--------------------------------------------------------------------------------------*/
const svgSpriteDest = () => {
	return new Promise((resolve, reject) => {
		fs.outputFile(
			config.svgSprite.dest + "/sprite.svg",
			svgSpriteData.svg,
			(err) => {
				if (err) {
					console.log(err);
					reject();
				}
				resolve();
			}
		);
	})
};

/*--------------------------------------------------------------------------------------
*  svgSpriteCss
--------------------------------------------------------------------------------------*/
const svgSpriteCss = ()=> {
	return new Promise((resolve, reject) => {
		gulp
			.src(config.svgSprite.template + "**/*.scss")
			.pipe(
				ejs(svgSpriteData.data, {
					delimiter: "?"
				})
			)
			.on("error", (err) => {
				console.log(err);
				reject();
			})
			.pipe(gulp.dest(config.css.srcDir))
			.on("end", function() {
				resolve();
			});;
	})
};

/*-------------------------------------------------------------------------------------
*
-------------------------------------------------------------------------------------*/
const svgSprite = gulp.series(
	makeSvgSpriteData,
	gulp.parallel(svgSpriteDest, svgSpriteCss)
)

module.exports = svgSprite;