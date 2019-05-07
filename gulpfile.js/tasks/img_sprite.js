const term = require( 'terminal-kit' ).terminal;
const gulp = require('gulp')
const bs = require('browser-sync')

const config = require(process.cwd() + '/gulpfile.js/configs/config')
const sazae = require(process.cwd() + '/gulpfile.js/util/sazae');

const sprite = require('spritesmith');
const ejs = require('gulp-ejs');
const css = require(process.cwd() + '/gulpfile.js/tasks/css');
const path = require('path');
const fs = require('fs-extra');
const through = require('through2');


const toCamel = str => {
	str = str.charAt(0).toLowerCase() + str.slice(1);
	return str.replace(/[-_](.)/g, function(match, group1) {
		return group1.toUpperCase();
	});
}

let imgSpriteData;

gulp.task('makeImgSprite', done => {
	let spriteList = [];
	return gulp.src(config.imgSprite.src)
		.pipe(through.obj(function(a, b, cb) {
			spriteList.push(a.history[0])
			cb(null, a)
		}))
		.on('end', () => {
			sprite.run({
				src: spriteList,
				algorithm: 'diagonal'
			}, (err, result) => {
				if (err) {
					throw err;
				}

				fs.outputFile(config.imgSprite.dest + '/sprite.png', result.image)

				let images = Object.keys(result.coordinates).map((k, v) => {
					let reg = new RegExp(path.extname(k), 'ig');
					return obj = {
						name: toCamel('sprite-' + path.basename(k).replace(reg, '')),
						...result.coordinates[k]
					}
				})

				result.properties.path = '/' + path.relative(config.dir, config.imgSprite.dest).replace(/\\/g, '/') + '/sprite.png';

				// fs.outputJson(config.imgSprite.template + '/data.json', {
				// 	images: images,
				// 	meta: result.properties
				// })
				gulp.src(config.imgSprite.template + '**/*.scss')
					.pipe(ejs({
						images: images,
						meta: result.properties
					}, {
						delimiter: '?',
					}))
					.pipe(gulp.dest(config.css.srcDir))
			})
		})
})



gulp.task('imgSprite', gulp.series('makeImgSprite', 'css'))