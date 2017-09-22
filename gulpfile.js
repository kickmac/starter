var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.browserSync = require('browser-sync');
$.async = require('async');
$.del = require('del');
$.webpack = require('webpack-stream');
$.vinylNamed = require('vinyl-named');
var config = require('./gulp/config.js');

require('./gulp/tasks/html.js')(gulp, $, config);
require('./gulp/tasks/css.js')(gulp, $, config);
require('./gulp/tasks/kss.js')(gulp, $, config);
require('./gulp/tasks/icons_css_move.js')(gulp, $, config);
require('./gulp/tasks/sprite.js')(gulp, $, config);
require('./gulp/tasks/iconfont.js')(gulp, $, config);
require('./gulp/tasks/js.js')(gulp, $, config);
require('./gulp/tasks/images.js')(gulp, $, config);
require('./gulp/tasks/suite.js')(gulp, $, config);

gulp.task('default', ['suite'], function(){
	$.browserSync.init({
		server: './htdocs/',
		// proxy: './htdocs/'
	});
	$.watch(config.html.src, {
		//usePolling: true
	}, function () {
		gulp.start('html');
	});

	$.watch(config.css.src, {
		//usePolling: true
	}, function () {
		$.runSequence(['css', 'kss'], 'iconsCssMove');
	});

	$.watch(config.icons.src, {
		//usePolling: true
	}, function () {
		gulp.start('iconfont');
	});

	$.watch(config.sprite.src, {
		//usePolling: true
	}, function () {
		gulp.start('sprite');
	});
	$.watch(config.js.src, function () {
		//usePolling: true
		gulp.start('js');
	});
	// $.watch(config.images.src, function () {
	// 	gulp.start('images');
	// });
});