const term = require( 'terminal-kit' ).terminal;
const gulp = require('gulp')
const bs = require('browser-sync');
const fs = require('fs-extra');

const config = require(process.cwd() + '/gulpfile.js/configs/config')
const sazae = require(process.cwd() + '/gulpfile.js/util/sazae');

const cFonts = require('cfonts');

/*--------------------------------------------------------------------------------------
*  require tasks
--------------------------------------------------------------------------------------*/
require(process.cwd() + '/gulpfile.js/tasks/html');
require(process.cwd() + '/gulpfile.js/tasks/css');
require(process.cwd() + '/gulpfile.js/tasks/js');
require(process.cwd() + '/gulpfile.js/tasks/icon_font');
require(process.cwd() + '/gulpfile.js/tasks/svg_sprite');
require(process.cwd() + '/gulpfile.js/tasks/img_sprite');
require(process.cwd() + '/gulpfile.js/tasks/page_list');

/*--------------------------------------------------------------------------------------
*  watch Task
--------------------------------------------------------------------------------------*/
gulp.task('watch', done => {
		gulp.watch(config.html.src, {
			queue: true,
			usePolling: false,
			ignoreInitial: true,
		}, gulp.task('html'));

		gulp.watch(config.css.src, {
			queue: true,
			usePolling: false,
			ignoreInitial: true,
		}, gulp.task('css'));

		gulp.watch(config.js.src, {
			queue: true,
			usePolling: false,
			ignoreInitial: true,
		}, gulp.task('js'));

		gulp.watch(config.iconFont.src, {
			queue: true,
			usePolling: false,
			ignoreInitial: true,
		}, gulp.task('iconFont'));

		gulp.watch(config.svgSprite.src, {
			queue: true,
			usePolling: false,
			ignoreInitial: true,
		}, gulp.task('svgSprite'));

		gulp.watch(config.imgSprite.src, {
			queue: true,
			usePolling: false,
			ignoreInitial: true,
		}, gulp.task('imgSprite'))

		sazae.namihei('Wach Start!!!')
})

/*--------------------------------------------------------------------------------------
*  bsInit Task
--------------------------------------------------------------------------------------*/
gulp.task('bsInit', done => {
	bs.init({
		logLevel: 'silent',
		logFileChanges: false,
		logConnections: true,
		notify: true,
		server: {
			baseDir: config.dest
		},
		// proxy: './htdocs/',
		middleware: [
			{
				route: '/_api/html-all',
				handle: function (req, res, next) {
					gulp.task('htmlAll')();
					return next();
				}
			},
			{
				route: '/_api/css',
				handle: function (req, res, next) {
					gulp.task('css')();
					return next();
				}
			},
			{
				route: '/_api/iconfont',
				handle: function (req, res, next) {
					gulp.task('iconFont')();
					return next();
				}
			},
			{
				route: '/_api/svgsprite',
				handle: function (req, res, next) {
					gulp.task('svgSprite')();
					return next();
				}
			},
			{
				route: '/_api/imgsprite',
				handle: function (req, res, next) {
					gulp.task('imgSprite')();
					return next();
				}
			},
			{
				route: '/_api/js',
				handle: function (req, res, next) {
					gulp.task('js')();
					return next();
				}
			},
			{
				route: '/_api',
				handle: function (req, res, next) {
					fs.readFile(process.cwd() + '/gulpfile.js/templates/api/index.html', 'utf8', (err, data) => {
						res.writeHead(200, {'Content-Type': 'text/html'});
						res.end(data);
						return next();
					})
				}
			},

		],
	}, () => {
		term.clear();
		cFonts.say('LET\'S CODING', {
			font: 'shade',
			align: 'center',
			colors: ['redBright', 'yellow'],
			backgtound: 'transparent'
		})
		term.drawImage('./gulpfile.js/mario.gif', {
			shrink: {
				width: 30,
				height: 30
			},
		}, ()=>{
			done()
		})
	});
})

/*--------------------------------------------------------------------------------------
*  Default Task
--------------------------------------------------------------------------------------*/
gulp.task('default', gulp.series(
	preStart = done => {
		term.clear();
		cFonts.say('GULP START!!', {
			font: 'shade',
			align: 'center',
			colors: ['redBright', 'yellow'],
			backgtound: 'transparent'
		})
		done()
	},
	'makeIconFont',
	gulp.parallel(
		'iconFontDest',
		'iconFontCss',
		'makeSvgSprite',
		'makeImgSprite',
		'html',
		'js',
	),
	'css',
	'bsInit',
	'watch'
))


