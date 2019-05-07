const term = require( 'terminal-kit' ).terminal;
const gulp = require('gulp')
const bs = require('browser-sync')

const config = require(process.cwd() + '/gulpfile.js/configs/config')
const sazae = require(process.cwd() + '/gulpfile.js/util/sazae');

const sass = require('gulp-sass')
const pleeease = require('gulp-pleeease')
const kss = require('kss')
const ejs = require('gulp-ejs')
const fs = require('fs-extra')
const rename = require('gulp-rename');
const gFilter = require('gulp-filter');
const concat = require('gulp-concat');
const through = require('through2');

let cssData;

/*--------------------------------------------------------------------------------------
*  scss2css
--------------------------------------------------------------------------------------*/
gulp.task('scss2css', done => {

	return Promise.resolve().then(() => {
		return cssData = gulp
			.src(config.css.src, {
				// since: gulp.lastRun(scss2css),
				sourcemaps: true,
			})
			.pipe(sass({
					outputStyle: 'expanded',
					indentType: '\t',
					linefeed: 'crlf',
				}).on('error', function(err){
					let _line = '';
					for (var i = 0, l = term.width; i < l; i++) {
						_line += '─'
					}
					term.bell()

					sazae.err('scss2css ERROR!!!')

					term.green(`${_line}\n`)
					term.green(`file：${err.relativePath}\n`)
					term.green(`line：${err.line}\n`)
					term.green(`column：${err.column}\n`)
					term.green(`${err.messageOriginal}\n`)
					term.green(`${_line}\n\n`)

					// done()
					this.emit('end');
				})
			)
	}).then(()=>{
		done()
	})



	// done();
})


/*--------------------------------------------------------------------------------------
*  css2pleeease
--------------------------------------------------------------------------------------*/
gulp.task('css2pleeease', done => {
	const exclusionFiles = [
		'!**/svgSprite.css',
		'!**/imgSprite.css',
		'!**/iconFonts.css',
	];

	return cssData
		.pipe(gFilter(['**/*.css', ...exclusionFiles]))
		.pipe(pleeease({
			browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'], //['last 3 versions', 'ie 8', 'ios 4', 'android 2.3'],
			mqpacker: true,
			minifier: true,
		})).on('error', err => {
			let _line = '';
			for (var i = 0, l = term.width; i < l; i++) {
				_line += '─'
			}
			term.bell()

			sazae.err('css2pleeease ERROR!!!')

			// term.green(`${_line}\n`)
			// term.green(`file：${err.relativePath}\n`)
			// term.green(`line：${err.line}\n`)
			// term.green(`column：${err.column}\n`)
			// term.green(`${err.messageOriginal}\n`)
			// term.green(`${_line}\n\n`)

			// done()
			this.emit('end');
		})

		.pipe(gulp.dest(config.css.dest, {
			sourcemaps: '.'
		}))
		.pipe(bs.stream());

	// done();
})

/*--------------------------------------------------------------------------------------
*  delExcessCss
--------------------------------------------------------------------------------------*/
const delCss = file => {
	fs.remove(file, function(err){
		if (err) {
			let _line = '';
			for (var i = 0, l = term.width; i < l; i++) {
				_line += '─'
			}
			term.bell()

			sazae.err('delExcessCss ERROR!!!')
			console.log(err);

			// term.green(`${_line}\n`)
			// term.green(`file：${err.relativePath}\n`)
			// term.green(`line：${err.line}\n`)
			// term.green(`column：${err.column}\n`)
			// term.green(`${err.messageOriginal}\n`)
			// term.green(`${_line}\n\n`)
		};
	});
}
gulp.task('delExcessCss', done => {
	const files = [
		config.css.dest + '/svgSprite.css',
		config.css.dest + '/svgSprite.css.map',
		config.css.dest + '/iconFonts.css',
		config.css.dest + '/iconFonts.css.map',
	];

	Promise.all(files.map(file => {delCss(file)}))
		.then(() => {
			done();
		})

	// Promise.resolve().then(()=>{
	// 	return files.forEach(file => {
	// 		delCss(file);
	// 		// setTimeout(()=>{
	// 		// }, 3000)
	// 	})
	// }).then(() => {
	// 	done();
	// })

})


/*--------------------------------------------------------------------------------------
*  css2kss sub
--------------------------------------------------------------------------------------*/
/*  jsonTransform  -----------------------------------------*/
const jsonTransform = (data) => {
	var _json = {
		group: [],
		list: data.meta.referenceMap,
		tree: [],
	}

	_json.group = makeGroup(objectCopy(_json.list))
	_json.tree = makeTree(objectCopy(_json.list))

	return _json;
}

/*  objectを値渡しでコピー  -----------------------------------------*/
const objectCopy = (data) => {
	var _data = JSON.stringify(data);
	_data = JSON.parse(_data);
	return _data;
}

/*  menu用tree作成  -----------------------------------------*/
const makeTree = (data)=> {
	let tree = []

	Object.keys(data).map((item) => {
		const _path = data[item].reference.split('.')
		_path.reduce((a, b) => {
			a[b - 1] = a[b - 1] || {
				id: data[item].reference,
				children: []
			}
			return a[b - 1].children
		}, tree)
		return  tree
	})
	tree = delNull(tree)

	return tree;
}

/*  Nullを消す  -----------------------------------------*/
const delNull = (data) => {
	var data = data.filter((item) => {
		if (item.children && item.children.length > 0) {
			item.children = delNull(item.children)
		} else {
			delete item.children
		}
		return item
	})

	return data
}

/*  group json作成  -----------------------------------------*/
const makeGroup = (data) => {
	let group = [];

	group = Object.keys(data).map((key)=>{
		return data[key].referenceNumber
	})

	group = group.reduce((a, b)=>{
		let _path = b.split('.');
		if (_path.length === 1) {
			a[_path[0] - 1] = [b, []];
			return a
		} else {
			a[_path[0] - 1][1].push(b);
			return a
		}
	}, []);

	group = delNull(group)

	return group;
}

/*--------------------------------------------------------------------------------------
*  css2kss 本体
--------------------------------------------------------------------------------------*/
gulp.task('css2kss', done => {
	return cssData
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(config.styleGuide.dest + '/assets/styles/'))
		.pipe(through.obj((file, enc, cb)=>{
			// console.log(file.contents.toString());
			let _data = file.contents.toString()
			_data = _data.replace(/^(.*?)=*(\*\/)/gmu, '$1\n$2');
			_data = kss.parse(_data)
			_data = jsonTransform(_data);
			_data = JSON.parse(JSON.stringify(_data))
			// console.log(_data.tree);
			_data.group.forEach(function(v, k){
				gulp
					.src(config.styleGuide.template)
					.pipe(ejs({
						importCss: config.styleGuide.importCss,
						importJs: config.styleGuide.importJs,
						tree: _data.tree,
						group: _data.group[k],
						list: _data.list,
						sectionNum: v[0],
					}, {
						delimiter: '?',
					})
						.on('error', (err) =>{
								let _line = '';
								for (var i = 0, l = term.width; i < l; i++) {
									_line += '─'
								}
								term.bell()
								sazae.err('css2kss ejs Render ERROR!!')
								term.green(`${_line}\n`);
								term.green(`file：${err.message}\n`);
								term.green(`${_line}\n\n`);
						}))
					.pipe(rename({
						basename: `section-${v[0]}`,
						extname: '.html'
					}))
					.pipe(gulp.dest(config.styleGuide.dest))
			})

			cb()
		}))

	// new Promise((resolve, reject) => {
	// 	fs.readFile(config.styleGuide.dest + '/assets/styles/styles.css', (err, data) => {
	// 		if (err) {
	// 			let _line = '';
	// 			for (var i = 0, l = term.width; i < l; i++) {
	// 				_line += '─'
	// 			}
	// 			term.bell()
	// 			sazae.err('css2kss css Read ERROR!!')
	// 			term.green(`${_line}\n`)
	// 			term.green(`file：${err.path}\n`)
	// 			term.green(`${_line}\n\n`)

	// 			sazae.tarao('1回目のアナゴさんは気にしなくていいですぅ')

	// 			done()
	// 		} else {
	// 			data = data.toString().replace(/^(.*?)=*(\*\/)/gmu, '$1\n$2')
	// 			data = kss.parse(data.toString())
	// 			data = jsonTransform(data);
	// 			fs.writeFile(process.cwd() + '/data.json', JSON.stringify(data, undefined, '\t'))
	// 			resolve(data);
	// 		}
	// 	})
	// })
	// .then((data)=>{
	// 	data = JSON.parse(JSON.stringify(data))
	// 	data.group.forEach(function(v, k){
	// 		gulp
	// 			.src(config.styleGuide.template)
	// 			.pipe(ejs({
	// 				importCss: config.styleGuide.importCss,
	// 				importJs: config.styleGuide.importJs,
	// 				tree: data.tree,
	// 				group: data.group[k],
	// 				list: data.list,
	// 				sectionNum: v[0],
	// 			}, {
	// 				delimiter: '?',
	// 			})
	// 				.on('error', (err) =>{
	// 						let _line = '';
	// 						for (var i = 0, l = term.width; i < l; i++) {
	// 							_line += '─'
	// 						}
	// 						term.bell()
	// 						sazae.err('css2kss ejs Render ERROR!!')
	// 						term.green(`${_line}\n`);
	// 						term.green(`file：${err.message}\n`);
	// 						term.green(`${_line}\n\n`);
	// 				}))
	// 			.pipe(rename({
	// 				basename: `section-${v[0]}`,
	// 				extname: '.html'
	// 			}))
	// 			.pipe(gulp.dest(config.styleGuide.dest))
	// 	})
	// 	done();
	// })
})


/*--------------------------------------------------------------------------------------
*  css Suite
--------------------------------------------------------------------------------------*/
gulp.task('css',
	gulp.series(
		'scss2css',
		gulp.parallel(
			'css2kss',
			'css2pleeease',
		),
	)
)
