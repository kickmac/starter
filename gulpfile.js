var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.browserSync = require('browser-sync');
var config = require('./gulp/config.js');

require('./gulp/tasks/html.js')(gulp, $, config);
require('./gulp/tasks/css.js')(gulp, $, config);
require('./gulp/tasks/js.js')(gulp, $, config);
require('./gulp/tasks/images.js')(gulp, $, config);
require('./gulp/tasks/suite.js')(gulp, $, config);

gulp.task('default', ['suite'], function(){
	$.browserSync.init({
		server: './dest/'
	});
	$.watch(config.html.src, function () {
		gulp.start('html');
	});
	$.watch(config.css.src, function () {
		gulp.start('css');
	});
	$.watch(config.js.src, function () {
		gulp.start('js');
	});
	$.watch(config.images.src, function () {
		gulp.start('images');
	});
});