const argv = require('minimist')(process.argv.slice(2));
const DEV = !!argv.dev

const siteName = require(`${process.cwd()}/package.json`).siteName;
const dirs = require(`${process.cwd()}/gulp/configs/dirs`);
const ejsConfig = require(`${process.cwd()}/gulp/configs/ejs`);

const chalk = require('chalk');
const gulp = require('gulp');
const favicons = require('gulp-favicons');
const path = require('path');
const ora = require('ora');
const filter = require('gulp-filter');
const rename = require('gulp-rename');

const debug = require('gulp-debug')

let faviconData;
const mkFavicon =  (cb) => {
	const spinner = ora('favicon 処理中...').start()

	return gulp.src([`${dirs.favicon.src}/favicon.png`])
		.pipe(favicons({
			appName: siteName,
			appShortName: siteName,
			appDescription: siteName,
			developerName: 'SHIFT Inc.',
			developerURL: 'https://www.shift-jp.net/',
			// background: '#020307',
			path: `/${path.relative(dirs.base, dirs.favicon.dist)}`,
			// url: 'http://haydenbleasel.com/',
			display: 'standalone',
			orientation: 'portrait',
			scope: '/',
			start_url: '/',
			version: 1.0,
			logging: false,
			html: '_favicons.ejs',
			pipeHTML: true,
			replace: true,
		}))
		.pipe(gulp.dest(dirs.favicon.dist))
		.on('end', () => {
			spinner.stop();
			cb()
		});
}

const moveEjs = cb => {
	return gulp.src([`${dirs.favicon.dist}/_favicons.ejs`])
		.pipe(gulp.dest(`${dirs.html.src}/_include`))
}

// const destIcons = cb => {
// 	console.log('destIcons');
// 	faviconData
// 		.pipe(debug({title: 'destIcons'}))
// 		.pipe(filter(['!_favicons.ejs']))
// 		.pipe(gulp.dest(dirs.favicon.dist))
// 		.on('end', cb)
// }

module.exports = gulp.series(mkFavicon, moveEjs);