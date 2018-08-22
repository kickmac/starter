module.exports = function(gulp, $, config) {
	var taskName = 'pageList';

	var ejsConfig = require('../ejs_config.js');
	var fs = require("fs");
	var path = require("path");
	var cheerio  = require('cheerio');
	var _regexpTitle = new RegExp('｜' + ejsConfig.data.siteName);
	var _rootPath = config.dest.replace(/\\/g, '/');
	var _regexpRootPath = new RegExp(_rootPath, 'g');

	var _setTitle = new Promise(function(resolve){
		var data = $.dirTree(config.dest, {
			extensions: /\.html/,
			exclude: /(assets|ejs|_api|_style_guide|_html_list)/
		});
		data = JSON.stringify(data)
		data = data.replace(/\\\\/g, '/');
		data = JSON.parse(data);

		var _transformTree = function(data){
			data.children.map(function(d, i ,arr){
				if (d.type === 'file'){
					if (d.name === 'index.html') {
						var _iii = arr.splice(i, 1);
						arr.unshift(_iii[0])
					}
					var _dom = cheerio.load(fs.readFileSync(d.path, 'utf-8'))
					if (_dom('title').text()) {
						d.name = _dom('title').text();
						if (d.name !== ejsConfig.data.siteName) {
							d.name = d.name.replace(_regexpTitle, '');
						}
					} else {
						arr.splice(i, 1);
					}
				} else {
					_transformTree(d)
				}
			})
		}
		_transformTree(data)
		resolve(data)
	})

	var _transformTree = function(){
	}

	gulp.task(taskName, function() {
		if (!fs.existsSync(config.list.dest)) {
			fs.mkdirSync(config.list.dest);
		}

		gulp.src(config.list.temp)
			.pipe(gulp.dest(config.list.dest))

		_setTitle.then(function(data){
			data = JSON.stringify(data)
			data = data.replace(_regexpRootPath, '/');
			fs.writeFile(config.list.dest + '/list.json', data)
		})


	});

};
