var config = require('./gulp/config.js');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.browserSync = require('browser-sync');
$.del = require('del');
$.async = require('async');
$.dirTree  = require('directory-tree');

require('./gulp/tasks/html.js')(gulp, $, config);
require('./gulp/tasks/html-all.js')(gulp, $, config);
require('./gulp/tasks/css.js')(gulp, $, config);
require('./gulp/tasks/js.js')(gulp, $, config);
require('./gulp/tasks/pageList.js')(gulp, $, config);
require('./gulp/tasks/iconFont.js')(gulp, $, config);
require('./gulp/tasks/svgSprite.js')(gulp, $, config);
require('./gulp/tasks/suite.js')(gulp, $, config);

gulp.task('default', ['html', 'css'], function(){
	$.browserSync.init({
		server: {
			baseDir: config.dest
		},
		// proxy: './htdocs/'
		middleware: [
			{
				route: '/_api/html-all',
				handle: function (req, res, next) {
					gulp.start('html-all');
					res.writeHead(301, {Location: '/_api'});
					return next();
				}
			},
			{
				route: '/_api/css',
				handle: function (req, res, next) {
					gulp.start('css');
					res.writeHead(301, {Location: '/_api'});
					return next();
				}
			},
			{
				route: '/_api/iconfont',
				handle: function (req, res, next) {
					gulp.start('iconFont');
					res.writeHead(301, {Location: '/_api'});
					return next();
				}
			},
			{
				route: '/_api/svgsprite',
				handle: function (req, res, next) {
					gulp.start('svgSprite');
					res.writeHead(301, {Location: '/_api'});
					return next();
				}
			},
			{
				route: '/_api/js',
				handle: function (req, res, next) {
					gulp.start('js');
					res.writeHead(301, {Location: '/_api'});
					return next();
				}
			},
		],
	});
	$.watch(config.html.src, {
		// usePolling: true
	}, function () {
		gulp.start('html');
	});

	$.watch(config.iconFont.src, {
		// usePolling: true
	}, function () {
		gulp.start('iconFont');
	});

	$.watch(config.svgSprite.src, {
		// usePolling: true
	}, function () {
		gulp.start('svgSprite');
	});

	$.watch(config.js.src, {
		// usePolling: true
	}, function () {
		gulp.start('js');
	});

	$.watch(config.css.src, {
		// usePolling: true
	}, function () {
		gulp.start('css');
	});

});