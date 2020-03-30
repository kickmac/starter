const gulp = require("gulp");
const config = require(`${process.cwd()}/gulp/configs/config`);
const bs = require("browser-sync");

const sass = require("gulp-sass");
const pleeease = require("gulp-pleeease");
const kss = require("kss");
const gFilter = require("gulp-filter");
const fs = require("fs-extra");
const concat = require("gulp-concat");
const through = require("through2");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");

sass.compiler = require("sass"); //dart sass

let cssData;

/*-------------------------------------------------------------------------------------
	* scss2css
	-------------------------------------------------------------------------------------*/
const scss2css = () => {
	return new Promise((resolve, reject) => {
		cssData = gulp
			.src(config.css.src, {
				sourcemaps: true
			})
			.pipe(
				sass().on("error", (sass) => {
					console.log(sass.message);
					resolve();
				})
			);
		resolve();
	});
};

/*-------------------------------------------------------------------------------------
	* css2pleeease
	-------------------------------------------------------------------------------------*/
const css2pleeease = () => {
	const exclusionFiles = [
		"!**/svgSprite.css",
		"!**/imgSprite.css",
		"!**/iconFonts.css"
	];

	return new Promise((resolve, reject) => {
		cssData
			.pipe(gFilter(["**/*.css", ...exclusionFiles]))
			.pipe(
				pleeease({
					browsers: ["ie 11"],
					minifier: true,
					mqpacker: true
				}).on("error", (res) => {
					console.log(res.message);
					reject();
				})
			)
			.pipe(
				gulp.dest(config.css.dest, {
					sourcemaps: "."
				})
			)
			.pipe(bs.stream());
		resolve();
	});
};

/*-------------------------------------------------------------------------------------
	* delExcessCss
	-------------------------------------------------------------------------------------*/
const delExcessCss = (done) => {
	const files = [
		config.css.dest + "/svgSprite.css",
		config.css.dest + "/svgSprite.css.map",
		config.css.dest + "/iconFonts.css",
		config.css.dest + "/iconFonts.css.map"
	];

	Promise.all(
		files.map((file) => {
			fs.remove(file);
		})
	).then(() => {
		done();
	});
};

/*--------------------------------------------------------------------------------------
	*  css2kss sub
	--------------------------------------------------------------------------------------*/
/*  jsonTransform  -----------------------------------------*/
const jsonTransform = (data) => {
	var _json = {
		group: [],
		list: data.meta.referenceMap,
		tree: []
	};

	_json.group = makeGroup(objectCopy(_json.list));
	_json.tree = makeTree(objectCopy(_json.list));

	return _json;
};

/*  objectを値渡しでコピー  -----------------------------------------*/
const objectCopy = (data) => {
	var _data = JSON.stringify(data);
	_data = JSON.parse(_data);
	return _data;
};

/*  menu用tree作成  -----------------------------------------*/
const makeTree = (data) => {
	let tree = [];

	Object.keys(data).map((item) => {
		const _path = data[item].reference.split(".");
		_path.reduce((a, b) => {
			a[b - 1] = a[b - 1] || {
				id: data[item].reference,
				children: []
			};
			return a[b - 1].children;
		}, tree);
		return tree;
	});
	tree = delNull(tree);

	return tree;
};

/*  Nullを消す  -----------------------------------------*/
const delNull = (data) => {
	var data = data.filter((item) => {
		if (item.children && item.children.length > 0) {
			item.children = delNull(item.children);
		} else {
			delete item.children;
		}
		return item;
	});

	return data;
};

/*  group json作成  -----------------------------------------*/
const makeGroup = (data) => {
	let group = [];

	group = Object.keys(data).map((key) => {
		return data[key].referenceNumber;
	});

	group = group.reduce((a, b) => {
		let _path = b.split(".");
		if (_path.length === 1) {
			a[_path[0] - 1] = [b, []];
			return a;
		} else {
			a[_path[0] - 1][1].push(b);
			return a;
		}
	}, []);

	group = delNull(group);

	return group;
};

/*--------------------------------------------------------------------------------------
*  css2kss 本体
--------------------------------------------------------------------------------------*/
const css2kss = (done) => {
	return new Promise((resolve, reject) => {
		cssData
			.pipe(concat("styles.css"))
			.pipe(gulp.dest(config.styleGuide.dest + "/assets/styles/"))
			.pipe(
				through.obj((file, enc, cb) => {
					let _data = file.contents.toString();
					_data = _data.replace(/^(.*?)=*(\*\/)/gmu, "$1\n$2");
					_data = kss.parse(_data);
					_data = jsonTransform(_data);
					_data = JSON.parse(JSON.stringify(_data));
					_data.group.forEach(function(v, k) {
						gulp
							.src(config.styleGuide.template)
							.pipe(
								ejs(
									{
										importCss: config.styleGuide.importCss,
										importJs: config.styleGuide.importJs,
										tree: _data.tree,
										group: _data.group[k],
										list: _data.list,
										sectionNum: v[0]
									},
									{
										delimiter: "?"
									}
								).on("error", (err) => {
									console.log(err);
								})
							)
							.pipe(
								rename({
									basename: `section-${v[0]}`,
									extname: ".html"
								})
							)
							.pipe(gulp.dest(config.styleGuide.dest));
					});
					cb();
				})
			);
		resolve();
	});
};

/*-------------------------------------------------------------------------------------
	* cssSuite
	-------------------------------------------------------------------------------------*/
const css = gulp.series(
	scss2css,
	gulp.parallel(css2pleeease, gulp.series(css2kss, delExcessCss))
);

module.exports = css;
