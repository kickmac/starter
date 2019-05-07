const term = require( 'terminal-kit' ).terminal;
const gulp = require('gulp')
const bs = require('browser-sync')

const config = require(process.cwd() + '/gulpfile.js/configs/config')
const sazae = require(process.cwd() + '/gulpfile.js/util/sazae');


const ejs = require('gulp-ejs');
const gIconFont = require('gulp-iconfont')
const css = require(process.cwd() + '/gulpfile.js/tasks/css');

let cssData;
let data;
/*--------------------------------------------------------------------------------------
*  makeIconFont
--------------------------------------------------------------------------------------*/
gulp.task('makeIconFont', done => {
	data = gulp.src(config.iconFont.src)
		.pipe(gIconFont({
			fontName: 'icons',
			// prependUnicode: true,
			formats: ['ttf', 'eot', 'woff', 'svg'],
			timestamp: gulp.lastRun('iconFont'),
		})).on('glyphs', function(glyphs, options) {
			cssData = {
				glyphs,
				options
			}
			done();
		})
})

/*--------------------------------------------------------------------------------------
*  iconFont dest
--------------------------------------------------------------------------------------*/
gulp.task('iconFontDest', done => {
	return data
		.pipe(gulp.dest(config.iconFont.dest));
	// done();
})


/*--------------------------------------------------------------------------------------
*  make css
--------------------------------------------------------------------------------------*/
gulp.task('iconFontCss', done => {
	return gulp
		.src(config.iconFont.template)
		.pipe(ejs({
			data: cssData.glyphs,
			options: cssData.options,
			fontPath: '/assets/fonts/iconfont/'
		}, {
			delimiter: '?',
		}))
		.on('error', (err) =>{
			let _line = '';
			for (var i = 0, l = term.width; i < l; i++) {
				_line += '─'
			}
			term.bell()
			sazae.err('css2kss ejs Render ERROR!!')
			term.green(`${_line}\n`);
			term.green(`file：${err.message}\n`);
			term.green(`${_line}\n\n`);
		})
		.pipe(gulp.dest(config.css.srcDir))
		// done();
})



/*--------------------------------------------------------------------------------------
*  iconFont Suite
--------------------------------------------------------------------------------------*/
gulp.task('iconFont',
	gulp.series(
		'makeIconFont',
		gulp.parallel(
			'iconFontDest',
			gulp.series(
				'iconFontCss',
				'css'
			)
		)
	)
)

