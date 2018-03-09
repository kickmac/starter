module.exports = function(gulp, $, config) {
	var taskName = 'pageList';
	var ejsConfig = require('../ejs_config.js');
	// var async = require('async')
	var fs = require('fs');
	var path = require("path");
	// var iconv = require('iconv-lite');
	var cheerio  = require('cheerio');

	_transformTree = function(data){
		data.children.map(function(d, i, arr){
			if (d.isFile) {
				if (d.name === 'index.html') {
					var _iii = arr.splice(i, 1);
					arr.unshift(_iii[0])
				}
				var _dom = cheerio.load(fs.readFileSync(d.path, 'utf-8'))
				d.name = _dom('title').text()
			} else {
				_transformTree(d)
			}
		})
		fs.writeFile(config.dest + 'aaaaa.json', JSON.stringify(data))
		// console.log(data);
		_createTree(data)
	}

	var _createTree = function(data){
		gulp.src( config.list.temp )
			.pipe( $.plumber({
				errorHandler: $.notify.onError("Error: <%= error.message %>")
			}) )
			.pipe($.ejs(
				{
					jsonData: data,
				},
				{
					delimiter: '?',
				},
				{
					ext: '.html',
				}
			))
			.pipe(gulp.dest( config.list.dest ))
			.pipe($.browserSync.reload({ stream:true }));
	}

	gulp.task(taskName + '-first', function () {
		gulp.src([config.html.dest + '**/*.html', '!' + config.dest +  '/assets/**/*', '!' + config.dest +  '/_style_guide/**/*', '!' + config.dest +  '/ejs/**/*', '!' + config.dest +  '/_html_list/**/*', '!' + config.dest +  '/_api/**/*'])
				.pipe($.fileTree({}))
				.pipe(gulp.dest(config.dest))

		var data = fs.readFileSync(config.dest + 'tree.json', 'utf-8')
		data = data.replace(/\\\\/g, '/');
		data = JSON.parse(data);
		_transformTree(data)
		_createTree(data)
	});

	gulp.task(taskName, function () {
		var data = fs.readFileSync(config.dest + 'tree.json', 'utf-8')
		data = data.replace(/\\\\/g, '/');
		data = JSON.parse(data);
		_transformTree(data)
		_createTree(data)
		// fs.createReadStream(config.list.csv)
		// 	.pipe(iconv.decodeStream('SJIS'))
		// 	.pipe(iconv.encodeStream('UTF-8'))
		// 	.pipe(converter);
	});

};