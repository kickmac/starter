const term = require( 'terminal-kit' ).terminal;
const gulp = require('gulp')
const babelify = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const resolveDependencies = require('gulp-resolve-dependencies')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const bs = require('browser-sync')

const config = require(process.cwd() + '/gulpfile.js/configs/config')
const sazae = require(process.cwd() + '/gulpfile.js/util/sazae');

let js;

gulp.task('js', done => {
	return js = browserify({
		entries: [ config.js.src + '/common.js' ]
	})
		.transform('babelify', {presets: ['@babel/env']})
		.bundle()
		.pipe(source('common.js'))
		.pipe(gulp.dest(config.js.dest))
		// .pipe(uglify())
		.pipe(bs.stream())

	// return js = gulp.src( config.js.src + '/common.js' )
	// 	.pipe(resolveDependencies ({
	// 		pattern: /\* @requires [\s-]*(.*\.js)/g
	// 	}))
	// 	.pipe(concat('common.js'))
	// 	.pipe(babel({
	// 		presets: ['@babel/env']
	// 	}))
	// 	// .pipe(uglify())
	// 	.pipe(gulp.dest(config.js.dest))
	// 	.pipe(bs.stream())
	// // done();
})




gulp.task('jsMin', gulp.series('js', done => {
	return gulp.src( config.js.dest + '/**/*.js' )
		.pipe(uglify())
		.pipe(gulp.dest(config.js.dest))
	// done();
}))