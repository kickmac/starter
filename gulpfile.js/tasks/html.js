const term = require( 'terminal-kit' ).terminal;
const gulp = require('gulp')
const bs = require('browser-sync')

const config = require(process.cwd() + '/gulpfile.js/configs/config')
const sazae = require(process.cwd() + '/gulpfile.js/util/sazae');

const ejs = require('gulp-ejs');
const ejsConfig = require(process.cwd() + '/gulpfile.js/configs/ejs_config')(config)
const rename = require('gulp-rename');


/*--------------------------------------------------------------------------------------
*  html
--------------------------------------------------------------------------------------*/
gulp.task('html', done => {
	return gulp
		.src(config.html.src, {
			since: gulp.lastRun('html'),
		})
		.pipe(ejs(
			ejsConfig.data,
			ejsConfig.options,
		).on('error', (err) => {

			let _line = '';
			for (var i = 0, l = term.width; i < l; i++) {
				_line += '─'
			}
			term.bell()

			sazae.err('ejs2html Error!!!')

			term.green(`${_line}\n`)
			term.green(`file：${err.message}\n`)
			term.green(`${_line}\n\n`)

			done();
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest(config.html.dest))
		.pipe(bs.stream())

	// done();
})

/*--------------------------------------------------------------------------------------
*  htmlAll
--------------------------------------------------------------------------------------*/
gulp.task('htmlAll', done => {
	return gulp
		.src(config.html.src)
		.pipe(ejs(
			ejsConfig.data,
			ejsConfig.options,
		).on('error', (err) => {

			let _line = '';
			for (var i = 0, l = term.width; i < l; i++) {
				_line += '─'
			}
			term.bell()

			sazae.err('ejs2html Error!!!')

			term.green(`${_line}\n`)
			term.green(`file：${err.message}\n`)
			term.green(`${_line}\n\n`)

			done();
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest(config.html.dest))
		// .pipe(bs.stream())

	// done();
})