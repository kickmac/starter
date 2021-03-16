const argv = require('minimist')(process.argv.slice(2));
const DEV = !!argv.dev

const siteName = require(`${process.cwd()}/package.json`).siteName;
const dirs = require(`${process.cwd()}/gulp/configs/dirs`);
const ejsConfig = require(`${process.cwd()}/gulp/configs/ejs`);

const chalk = require('chalk');
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const beautify = require('gulp-html-beautify');
const rename = require('gulp-rename');
const bs = require('browser-sync');


const ejs2Html = () => {
	return new Promise((resolve, reject) => {
		gulp.src([`**/*.ejs`, `!_**/*.ejs`, `!**/_*.ejs`], {
			cwd: dirs.html.src,
		})
			.pipe(
				ejs({siteName: siteName}, ejsConfig.options)
					.on('error', err => {
						console.log(`
${chalk.white.bgRed.bold('EJS コンパイルエラー')}
${chalk.green(err)}`);

						reject();
					})
			)
			.pipe(beautify(ejsConfig.beautify))
			.pipe( rename({ extname: '.html' }) )
			.pipe( gulp.dest(dirs.html.dist) )
			.pipe(bs.stream());

		resolve()
	})
}

module.exports = ejs2Html;