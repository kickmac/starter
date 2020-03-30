const gulp = require("gulp");
const config = require(`${process.cwd()}/gulp/configs/config`);

const sprite = require("spritesmith");
const ejs = require("gulp-ejs");
const path = require("path");
const fs = require("fs-extra");
const through = require("through2");

let imgSpriteData;

/*-------------------------------------------------------------------------------------
* toCamel
-------------------------------------------------------------------------------------*/
const toCamel = (str) => {
	str = str.charAt(0).toLowerCase() + str.slice(1);
	return str.replace(/[-_](.)/g, function(match, group1) {
		return group1.toUpperCase();
	});
};

/*-------------------------------------------------------------------------------------
* imgSprite
-------------------------------------------------------------------------------------*/
const imgSprite = () => {
	return new Promise((resolve, reject) => {
		let spriteList = [];
		gulp
			.src(config.imgSprite.src)
			.pipe(
				through.obj(function(a, b, cb) {
					spriteList.push(a.history[0]);
					cb(null, a);
				})
			)
			.on("finish", () => {
				sprite.run(
					{
						src: spriteList,
						algorithm: "diagonal"
					},
					(err, result) => {
						if (err) {
							throw err;
						}

						fs.outputFile(config.imgSprite.dest + "/sprite.png", result.image);

						let images = Object.keys(result.coordinates).map((k, v) => {
							let reg = new RegExp(path.extname(k), "ig");
							return (obj = {
								name: toCamel("sprite-" + path.basename(k).replace(reg, "")),
								...result.coordinates[k]
							});
						});

						result.properties.path =
							"/" +
							path
								.relative(config.dir, config.imgSprite.dest)
								.replace(/\\/g, "/") +
							"/sprite.png";

						// fs.outputJson(config.imgSprite.template + '/data.json', {
						// 	images: images,
						// 	meta: result.properties
						// })
						gulp
							.src(config.imgSprite.template + "**/*.scss")
							.pipe(
								ejs(
									{
										images: images,
										meta: result.properties
									},
									{
										delimiter: "?"
									}
								)
							)
							.pipe(gulp.dest(config.css.srcDir))
							.on("end", function() {
								resolve();
							});
					}
				);
			});
	});
};

module.exports = imgSprite;
