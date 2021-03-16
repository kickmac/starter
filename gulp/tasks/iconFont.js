const argv = require('minimist')(process.argv.slice(2));
const DEV = !!argv.dev

const dirs = require(`${process.cwd()}/gulp/configs/dirs`);

const chalk = require('chalk');
const gulp = require('gulp');
const gIconFont = require('gulp-iconfont');
const ejs = require('ejs');
const path = require('path');
const slash = require('slash');
const fs = require('fs-extra');
const sass = require('gulp-sass');
sass.compiler = require('sass');
const fibers = require('fibers');
const bs = require('browser-sync');


let cssData;
let data;


const makeIconFont = () => {
	return new Promise((resolve, reject) => {
		data = gulp.src([`**/*.svg`, `!_**/*.svg`, `!**/_*.svg`], {
			cwd: dirs.iconFont.src,
		})
			.pipe(gIconFont({
				fontName: 'icons',
				formats: ['ttf', 'eot', 'woff', 'svg'],
				normalize: true,
				fontHeight: 1000,
			}))
			.on('glyphs', function(glyphs, options) {
				cssData = {
					glyphs,
					options
				};
				resolve();
			})
	})
}


const iconFontDest = () => {
	return new Promise((resolve, reject) => {
		data
		.pipe(gulp.dest(dirs.iconFont.dist));
		resolve();
	});
};

const mkScss = () => {
	return new Promise((resolve, reject) => {
		ejs.renderFile(
			`${dirs.iconFont.template}/_iconFonts.scss`,
			{
				data: cssData.glyphs,
				options: cssData.options,
				fontPath: `/${slash(path.relative(dirs.base, dirs.iconFont.dist))}`,
			},
			{delimiter: '?'},
			function(err, str){
				if (err) {
					console.log(err);
					reject()
				}
				fs.mkdirsSync(`${dirs.css.src}`);
				fs.writeFileSync(`${dirs.css.src}/_iconFonts.scss`, str);
				resolve(str);
			}
		)

	});
};

const mkStyleGuideScss = () => {
	return new Promise((resolve, reject) => {
		ejs.renderFile(
			`${dirs.iconFont.template}/iconFonts.scss`,
			{
				data: cssData.glyphs,
				options: cssData.options,
				fontPath: slash(path.relative(`${dirs.styleGuide.dist}/assets/scss`, dirs.iconFont.dist)),
				cssPath: slash(path.relative(`${dirs.styleGuide.dist}/assets/scss`, `${dirs.css.src}`)),
			},
			{delimiter: '?'},
			function(err, str){
				if (err) {
					console.log(err);
					reject()
				}
				fs.mkdirsSync(`${dirs.styleGuide.dist}/assets/scss`);
				fs.writeFileSync(`${dirs.styleGuide.dist}/assets/scss/iconFonts.scss`, str);
				resolve(str);
			}
		)

	});
};


const scss2css = () => {
    	return new Promise((resolve, reject) => {
		setTimeout(() => {
	    		gulp.src([`iconFonts.scss`], {
				cwd: `${dirs.styleGuide.dist}/assets/scss`,
			})
				.pipe(
					sass({
						fiber: fibers,
					}).on('error', err => {
						console.log(`
	${chalk.white.bgRed.bold('iconFonts SCSS コンパイルエラー')}
	${chalk.green(err.formatted)}`);
						reject();
					})
				)
				.pipe(gulp.dest(`${dirs.styleGuide.dist}/assets/styles`))
				.on('finish', () => {resolve()})
		}, 3000)
    	})
}



module.exports = gulp.series(makeIconFont, gulp.parallel(iconFontDest, mkScss, gulp.series(mkStyleGuideScss, scss2css)));