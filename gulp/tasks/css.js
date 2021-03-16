const argv = require('minimist')(process.argv.slice(2));
const DEV = !!argv.dev

const dirs = require(`${process.cwd()}/gulp/configs/dirs`);

const chalk = require('chalk');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const merge = require('merge2');
const sass = require('gulp-sass');
sass.compiler = require('sass');
const fibers = require('fibers');
const cssAdjustUrlPath = require('gulp-css-adjust-url-path');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cachebuster = require('postcss-cachebuster');
const csso = require('postcss-csso');

const concat = require("gulp-concat");
const through = require('through2');
const kssParse = require('kss').parse;
const fs = require('fs-extra');
const path = require('path');
const slash = require('slash');
const bs = require('browser-sync');



let cssData;

const scss2css = () => {
    	return new Promise((resolve, reject) => {
    		cssData = gulp.src([`**/*.scss`, `!_**/*.scss`, `!**/_*.scss`], {
			// since: gulp.lastRun(scss2css),
			sourcemaps: DEV,
			cwd: dirs.css.src,
		})
			.pipe(
				sass({
					fiber: fibers,
				}).on('error', err => {
					console.log(`
${chalk.white.bgRed.bold('SCSS コンパイルエラー')}
${chalk.green(err.formatted)}`);
					reject();
				})
			)
			.pipe(cssAdjustUrlPath(/(url\(['"]?)[/]?(\assets)/g));

		resolve();
    	})
}

const postTrans = () => {
	const plugins = [
		autoprefixer({
			grid: 'autoplace', // false, 'no-autoplace'
		}),
		mqpacker(),
		cachebuster({
			imagesPath: `/${slash(path.relative(process.cwd(), dirs.base))}`,
			paramName: 'v=',
			type: 'checksum'
		})
    ];
    if(!DEV) { plugins.push(csso()) }

	return new Promise((resolve, reject) => {
		cssData
			.pipe(postcss(plugins))
			.pipe(gulp.dest(dirs.css.dist, {
				sourcemaps: '.'
			}))
			.pipe(bs.stream());

		resolve();
	})
}

const kss = () => {
	fs.mkdirsSync(dirs.styleGuide.dist);
	fs.copySync(dirs.styleGuide.template, dirs.styleGuide.dist);

	return new Promise((resolve, reject) => {
		merge(
			cssData,
			gulp.src(['*.css'], {
				cwd: `${dirs.styleGuide.dist}/assets/styles/`,
			})
		)

			.pipe(concat('styles.css'))
			.pipe(through.obj((file, enc, cb) => {
				let _data = kssParse(file.contents.toString());
				_data.data.sections.sort((a, b) => {
					return parseFloat(a.reference) - parseFloat(b.reference)
				})
				fs.mkdirsSync(dirs.styleGuide.dist);
				fs.writeJsonSync(`${dirs.styleGuide.dist}/guide.json`, _data, {
					space: '\t'
				})
				cb()
			}))

		resolve();
	})
}


module.exports = gulp.series(scss2css, gulp.parallel(postTrans, kss))
