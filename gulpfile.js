var config = require('./gulp/config.js');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.browserSync = require('browser-sync');
$.async = require('async');
$.del = require('del');

require('./gulp/tasks/html.js')(gulp, $, config);
require('./gulp/tasks/css.js')(gulp, $, config);
require('./gulp/tasks/js.js')(gulp, $, config);
require('./gulp/tasks/pageList.js')(gulp, $, config);
require('./gulp/tasks/iconFont.js')(gulp, $, config);
require('./gulp/tasks/svgSprite.js')(gulp, $, config);
require('./gulp/tasks/suite.js')(gulp, $, config);

gulp.task('default', ['suite'], function(){
	$.browserSync.init({
		server: config.dest,
		// proxy: './htdocs/'
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