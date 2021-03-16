const argv = require('minimist')(process.argv.slice(2));
const DEV = !!argv.dev

const dirs = require(`${process.cwd()}/gulp/configs/dirs`);
const babelConfig = require(`${process.cwd()}/gulp/configs/js`);

const chalk = require('chalk');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const glob = require('glob');
const path = require('path');
const browserify = require('browserify');
const babelify = require('babelify');
const stream = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const bs = require('browser-sync');


module.exports = () => {
	const files = glob.sync(`**/*.js`, {
		cwd: dirs.js.src,
		absolute: true,
		ignore: '**/_*.js'
	})

	const list = files.map(file => {
		return new Promise((resolve, reject) => {
			const fileName = path.relative(dirs.js.src, file)
			browserify({
				debug: DEV,
			})
				.add(file)
				.transform(babelify, babelConfig)
				.bundle()
				.on('error', err => {
					console.log(`
${chalk.white.bgRed.bold('JS コンパイルエラー')}
${chalk.green(err)}`);

					reject();
				})
				.pipe(stream(fileName))
				.pipe(buffer())
				.pipe(gulpIf(!DEV, uglify()))
				.pipe(gulp.dest(dirs.js.dist))
				.pipe(bs.stream());
			resolve(file)
		})
	})

	return Promise.all(list)
}