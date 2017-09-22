module.exports = function(gulp, $, config) {
	var taskName = 'list';
	var ejsConfig = require('../ejs_config.js');

	var fs = require('fs');
	var async = require('async');
	var iconv = require('iconv-lite');


	//csv to json
	var Converter = require("csvtojson").Converter;
	var converter = new Converter({});
	converter.on("end_parsed", function (jsonArray) {
		createTree(jsonArray)
	});

	var tree = {};
	var createTree = function(list){
		async.each(list, function(data){
			dirCmd = makeDir(data);
			makeFile(data, dirCmd);
		});
		list = JSON.stringify(tree, null, '');
		ejs(list)
	}

	var makeDir = function(data){
		if (!data.path || data.path === '') {
			data.path = data.url;
		}
		data.path = data.path.replace(/^\//, '');
		data.path = data.path.replace(/\.html/, '');
		data.path = data.path.replace(/\/$/, '');
		if (data.path === 'index' || data.path === '' ) {
			data.path = 'root'
		}
		data.path += '/'
		data.path = data.path.replace(/\//g, 'Dir/');
		data.path = data.path.replace(/\/$/, '');
		data.path = data.path.split('/')
		data.path = data.path.join('.children.')
		if (data.path === 'rootDir') {
			eval('tree.' + data.path + '= tree.' + data.path + '|| {"type": "dir", "children": {}}');
		} else {
			eval('tree.rootDir.children.' + data.path + '= tree.rootDir.children.' + data.path + '|| {"type": "dir", "children": {}}');
		}
		return data.path;
	}

	var makeFile = function(data, dirCmd){
		var _dataUrl = data.url
		if (!_dataUrl.match(/\.html/)) {
			_dataUrl += 'index.html'
		}
		_dataUrl = _dataUrl.split('/');
		var _fileName = _dataUrl.pop();
		_fileName = _fileName.replace(/\.html/, 'Html');

		if (data.finish === "1") {
			data.finish = true;
		} else {
			data.finish = false;
		}

		var _file = "{\
			type: 'file',\
			url: '" + data.url + "',\
			name:'" +  data.name + "',\
			id:'" + data.id + "',\
			finish:" + data.finish + ",\
		}";
		if (data.path === 'rootDir') {
			eval('tree.' + data.path + '.children.' + _fileName + '=' + _file);
		} else {
			eval('tree.rootDir.children.' + data.path + '.children.' + _fileName + '=' + _file)
		}

	}


	var ejs = function(json){
		gulp.src( config.list.temp )
			.pipe( $.plumber({
				errorHandler: $.notify.onError("Error: <%= error.message %>")
			}) )
			.pipe($.ejs({
				jsonData: json,
				delimiter: '?'
			}))
			.pipe(gulp.dest( config.list.dest ))
			.pipe($.browserSync.reload({ stream:true }));
	}

	gulp.task(taskName, function () {
		fs.createReadStream(config.list.csv)
			.pipe(iconv.decodeStream('SJIS'))
			.pipe(iconv.encodeStream('UTF-8'))
			.pipe(converter);
	});
};