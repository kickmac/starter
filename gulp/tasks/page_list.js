const gulp = require("gulp");
const config = require(`${process.cwd()}/gulp/configs/config`);

const ejsConfig = require(process.cwd() + '/gulp/configs/ejs_config')(config)

const dirTree = require('directory-tree');
const fs = require('fs-extra');
const path = require('path');
const cheerio  = require('cheerio');
const _regexpTitle = new RegExp('｜' + ejsConfig.data.siteName);

const makeTree = () => {
	return _data =dirTree(config.dest, {
		extensions: /\.html/,
		exclude: /(assets|ejs|_api|_style_guide|_page_list)/,
		// normalizePath: true
	});
}

const sortTree = data => {
	const order = [
		'index.html',
		'list.html',
		'detail.html',
		'form.html',
		'confirm.html',
		'finish.html',
	];

	return data
		.sort()
		.sort((a,b) => {
			let aW;
			let bW;
			if (a.type === 'directory') {
				a.children = sortTree(a.children)
				aW = 9999
			} else if (order.includes(a.name)) {
				aW = order.indexOf(a.name)
			} else {
				aW = order.length
			}
			if (b.type === 'directory') {
				b.children = sortTree(b.children)
				bW = 9999
			} else if (order.includes(b.name)) {
				bW = order.indexOf(b.name)
			} else {
				bW = order.length
			}
			return aW - bW
		})
}
const trfLeaf = {
	//path2relative
	path2relative: data => {
		return data = '/' + path.relative(process.cwd() + '/htdocs', data).replace(/\\/g, '/');
	},

	//setPageTitle
	setPageTitle: data => {
		let _title;
		const _dom = cheerio.load(fs.readFileSync(data, 'utf-8'))
		if (_dom('title').text()) {
			_title = _dom('title').text();
			if (_title !== ejsConfig.data.siteName) {
				_title = _title.replace(_regexpTitle, '');
			}
		}
		return _title;
	}
}

const _trfTree = data => {
	return data.map((item) => {
		if (item.children) {
			item.children = _trfTree(item.children)
		}

		if (item.type === 'file') {
			item.title = trfLeaf.setPageTitle(item.path)
		}

		item.path = trfLeaf.path2relative(item.path)

		return item;
	})
}


const pageList = () => {
	return new Promise((resolve, reject) => {
		gulp.src(config.pageList.template + '**/*')
			.pipe(gulp.dest(config.pageList.dest));

		return Promise.resolve()
			.then((data)=>{
				return makeTree();
			})
			.then((data)=>{
				data.children =  sortTree(data.children)
				return data;
			})
			.then((data)=>{
				data.children =  _trfTree(data.children)
				return data;
			})
			.then((data)=>{
				fs.outputJson(config.pageList.dest + '/tree.json', data, {
					spaces: '\t'
				}, (err)=>{
					resolve()
				})
			})
	})
}

module.exports = pageList;