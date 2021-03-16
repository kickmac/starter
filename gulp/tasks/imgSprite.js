const argv = require('minimist')(process.argv.slice(2));
const DEV = !!argv.dev

const dirs = require(`${process.cwd()}/gulp/configs/dirs`);

const chalk = require('chalk');
const gulp = require('gulp');
const gutil = require('gulp-util');
const through = require('through2');
const fs = require('fs-extra');
const spritesmith = require('spritesmith');
const camelCase = require('camelcase');
const ejs = require('ejs');
const slash = require('slash');
const sass = require('gulp-sass');
sass.compiler = require('sass');
const fibers = require('fibers');
const path = require('path');
const bs = require('browser-sync');


const debug = require('gulp-debug');


const mkSpriteData = function(options){
	let spriteList = []

	const transform = function(chunk, enc, cb) {
		spriteList.push(chunk.path)
		cb()
	}

	const flush = function(cb) {
		const _this = this;
		new Promise((resolve, reject) => {
			spritesmith.run({
				src: spriteList,
				algorithm: 'diagonal'
			}, function (err, result) {
				if(err) {
					console.log(`
${chalk.white.bgRed.bold('imgSprite 変換エラー')}
${chalk.green(err)}`);
					reject();
				}

				const innerTask = [];
				Object.keys(result.coordinates).forEach(k => {
					result.coordinates[k].name = camelCase(slash(k).split('/').slice(-1)[0].split('.')[0])
				})

				//sprite画像
				innerTask[0] = Promise.resolve(result).then(res => {
					fs.mkdirsSync(`${dirs.imgSprite.dist}`);
					fs.writeFileSync(`${dirs.imgSprite.dist}/sprite.png`, res.image)
					return true;
				})

				//_imgSprite.scss
				innerTask[1] = mkScss(result).then(res => {
					fs.mkdirsSync(`${dirs.css.src}`);
					fs.writeFileSync(`${dirs.css.src}/_imgSprite.scss`, res)
					return true;
				})

				//StyleGuideScss
				innerTask[2] = mkStyleGuideScss(result).then(res => {
					fs.mkdirsSync(`${dirs.styleGuide.dist}/assets/scss/`);
					fs.writeFileSync(`${dirs.styleGuide.dist}/assets/scss/imgSprite.scss`, res);
					return true;
				})

				Promise.all(innerTask).then(res => {
					resolve(res)
				})
			})

		}).then(res => {
			res.forEach(e => _this.push(e))
			cb()
		})
	}

	return through.obj(transform, flush)
}

const mkScss = (result) => {
	return new Promise((resolve, reject) => {
		ejs.renderFile(
			`${dirs.imgSprite.template}/_imgSprite.scss`,
			{
				coordinates: result.coordinates,
				properties: result.properties,
				imgPath: `/${slash(path.relative(dirs.base, `${dirs.imgSprite.dist}/sprite.png`))}`,
			},
			{delimiter: '?'},
			function(err, str){
				if (err) {
					console.log(err);
					reject()
				}
				resolve(str);
			}
		)
	})
}

const mkStyleGuideScss = (result) => {
	return new Promise((resolve, reject) => {
		ejs.renderFile(
			`${dirs.imgSprite.template}/imgSprite.scss`,
			{
				coordinates: result.coordinates,
				properties: result.properties,
				imgPath: slash(path.relative(dirs.css.src, `${dirs.imgSprite.dist}/sprite.png`)),
				cssPath: slash(path.relative(`${dirs.styleGuide.dist}/assets/scss`, dirs.css.src)),
			},
			{delimiter: '?'},
			function(err, str){
				if (err) {
					console.log(err);
					reject()
				}
				resolve(str);
			}
		)
	})
}



const mkFiles = () => {
	return new Promise((resolve, reject) => {
		gulp.src([`*`, `!_*`], {
			cwd: dirs.imgSprite.src,
		})
			.pipe(mkSpriteData())

		resolve()
	})
}

const scss2css = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			gulp.src([`imgSprite.scss`], {
				cwd: `${dirs.styleGuide.dist}/assets/scss`,
				allowEmpty: true
			})
				.pipe(sass({
					fiber: fibers,
				}).on('error', err => {
					console.log(`
	${chalk.white.bgRed.bold('imgSprite SCSS コンパイルエラー')}
	${chalk.green(err.formatted)}`);
					reject();
				}))
				.pipe(gulp.dest(`${dirs.styleGuide.dist}/assets/styles`))
				.on('finish', () => {
					resolve();
				})
		}, 3000)
	})
}

module.exports = gulp.series(mkFiles, scss2css);