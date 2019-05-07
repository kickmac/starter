const term = require( 'terminal-kit' ).terminal;
const gulp = require('gulp')
const babel = require('gulp-babel')
const resolveDependencies = require('gulp-resolve-dependencies')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const bs = require('browser-sync')

const config = require(process.cwd() + '/gulpfile.js/configs/config')
const sazae = require(process.cwd() + '/gulpfile.js/util/sazae');

let js;

gulp.task('js', done => {
	return js = gulp.src( config.js.src + '/common.js' )
		.pipe(resolveDependencies ({
			pattern: /\* @requires [\s-]*(.*\.js)/g
		}))
		.pipe(concat('common.js'))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		// .pipe(uglify())
		.pipe(gulp.dest(config.js.dest))
		.pipe(bs.stream())
	// done();
})




gulp.task('jsMin', gulp.series('js', done => {
	return js
		.pipe(uglify())
		.pipe(gulp.dest(config.js.dest))
	// done();
}))