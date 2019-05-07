const term = require( 'terminal-kit' ).terminal;
const gulp = require('gulp')
const bs = require('browser-sync')

const config = require(process.cwd() + '/gulpfile.js/configs/config')
const sazae = require(process.cwd() + '/gulpfile.js/util/sazae');

const sprite = require('svg-sprite-data');
const ejs = require('gulp-ejs');
const css = require(process.cwd() + '/gulpfile.js/tasks/css');
const path = require('path');
const fs = require('fs-extra');
const through = require('through2');

const spriter = new sprite({
	common: 'svgSprite',
	dims: false,
	layout: 'diagonal',
});
let svgSpriteData;

/*--------------------------------------------------------------------------------------
*  makeSvgSpriteData
--------------------------------------------------------------------------------------*/
gulp.task('makeSvgSpriteData', done => {
	return gulp.src(config.svgSprite.src)
		.pipe(through.obj(function(a, b, cb){
			spriter.add('/' + path.relative(config.dir, a.history[0]).replace(/\\/g, '/'), a.contents.toString())
			cb()
		}))
		.on('end', ()=>{
			spriter.compile(function (err, svg) {
				svgSpriteData = svg;
				svgSpriteData.data.path = '/' + path.relative(config.dir, config.svgSprite.dest + '/sprite.svg').replace(/\\/g, '/')
				done()
			})
		})
})

/*--------------------------------------------------------------------------------------
*  svgSpriteDest
--------------------------------------------------------------------------------------*/
gulp.task('svgSpriteDest', done => {
	fs.outputFile(config.svgSprite.dest + '/sprite.svg', svgSpriteData.svg, (err) => {
		done();
	})
	// done();
})

/*--------------------------------------------------------------------------------------
*  svgSpriteCss
--------------------------------------------------------------------------------------*/
gulp.task('svgSpriteCss', done => {
	// console.log(svgSpriteData.data);
	return gulp.src(config.svgSprite.template + '**/*.scss')
		.pipe(ejs(svgSpriteData.data, {
			delimiter: '?',
		}))
		.on('error', (err) =>{
			let _line = '';
			for (var i = 0, l = term.width; i < l; i++) {
				_line += '─'
			}
			term.bell()
			sazae.err('svgSpriteCss ERROR!!')
			term.green(`${_line}\n`);
			term.green(`file：${err.message}\n`);
			term.green(`${_line}\n\n`);

			done()
		})
		.pipe(gulp.dest(config.css.srcDir))
})


gulp.task('svgSprite', gulp.series('makeSvgSpriteData', gulp.parallel('svgSpriteDest', 'svgSpriteCss'), 'css'))
gulp.task('makeSvgSprite', gulp.series('makeSvgSpriteData', gulp.parallel('svgSpriteDest', 'svgSpriteCss')))

