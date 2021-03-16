const argv = require('minimist')(process.argv.slice(2));
const DEV = !!argv.dev

const dirs = require(`${process.cwd()}/gulp/configs/dirs`);

const chalk = require('chalk');
const path = require('path');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const svgSprite = require('svg-sprite-data');
const through = require('through2');
const camelCase = require('camelcase');
const ejs = require('gulp-ejs');
const slash = require('slash');
const sass = require('gulp-sass');
sass.compiler = require('sass');
const fibers = require('fibers');
const fs = require('fs-extra');
const bs = require('browser-sync');


let svgSpriteData;
const mkSpriteData = () => {
	return new Promise((resolve, reject) => {
		const spriter = new svgSprite({
			common: 'svgSprite',
			dims: false,
			layout: 'diagonal'
		});

		gulp.src([`**/*.svg`, `!_**/*.svg`, `!**/_*.svg`], {
			cwd: dirs.svgSprite.src,
		})
			.pipe(
				through.obj(function(a, b, cb){
					spriter.add(a.path, a.contents.toString())
					cb()
				})
			)
			.on('finish', () => {
				return spriter.compile(function(err, data){
					if (err) {
						console.log(`
${chalk.white.bgRed.bold('svgSprite コンパイルエラー')}
${chalk.green(err)}`);

						reject();
					}

					svgSpriteData = data;
					svgSpriteData.data.svgPath = `/${slash(path.relative(dirs.base, dirs.svgSprite.dist))}/sprite.svg`
					svgSpriteData.data.scssPath = `${slash(path.relative(`${dirs.styleGuide.dist}/assets/scss`, dirs.css.src))}`

					resolve(svgSpriteData)
				})
			})

	})
}

const cssDist = () => {
	return new Promise((resolve, reject) => {
		gulp.src([`svgSprite.scss`, `_svgSprite.scss`], {
			cwd: `${dirs.svgSprite.template}`,
		})
			.pipe(ejs(svgSpriteData.data, {delimiter: '?'}))
			.pipe(gulpif(file => {
				return path.basename(file.path) === '_svgSprite.scss'
			} , gulp.dest(`${dirs.css.src}`)))
			.pipe(gulpif(file => {
				return path.basename(file.path) === 'svgSprite.scss'
			} , gulp.dest(`${dirs.styleGuide.dist}/assets/scss`)))
			.on('finish', () => {resolve()})


	})
}

const svgDest = () => {
	return new Promise((resolve, reject) => {
		fs.outputFile(
			`${dirs.svgSprite.dist}/sprite.svg`,
			svgSpriteData.svg,
			(err) => {
				if (err) {
						console.log(`
${chalk.white.bgRed.bold('svgSprite 書き出しエラー')}
${chalk.green(err)}`);

					reject();
				}
				resolve();
			}
		);
	})
}

const scss2css = () => {
    	return new Promise((resolve, reject) => {
		setTimeout(() => {
	    		cssData = gulp.src([`svgSprite.scss`], {
				cwd: `${dirs.styleGuide.dist}/assets/scss`,
			})
				.pipe(
					sass({
						fiber: fibers,
					}).on('error', err => {
						console.log(`
	${chalk.white.bgRed.bold('svgSprite SCSS コンパイルエラー')}
	${chalk.green(err.formatted)}`);
						reject();
					})
				)
				.pipe(gulp.dest(`${dirs.styleGuide.dist}/assets/styles`))
				.on('finish', () => {resolve()})
		}, 3000)
    	})
}


module.exports = gulp.series(mkSpriteData, gulp.parallel(cssDist, svgDest), scss2css);