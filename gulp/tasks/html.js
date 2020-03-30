const gulp = require("gulp");
const config = require(process.cwd() + "/gulp/configs/config");
const bs = require("browser-sync");

const ejs = require("gulp-ejs");
const ejsConfig = require(process.cwd() + "/gulp/configs/ejs_config")(config);
const rename = require("gulp-rename");
const beautify = require("gulp-html-beautify");

/*--------------------------------------------------------------------------------------
*  html
--------------------------------------------------------------------------------------*/
const html = () => {
	return new Promise((resolve, reject) => {
		gulp
			.src(config.html.src, {
				since: gulp.lastRun("html")
			})
			.pipe(
				ejs(ejsConfig.data, ejsConfig.options).on("error", (err) => {
					console.log(err);
					reject();
				})
			)
			.pipe(
				rename({
					extname: ".html"
				})
			)
			.pipe(
				beautify({
					eol: "\n",
					indent_level: 0,
					indent_with_tabs: true,
					preserve_newlines: true,
					max_preserve_newlines: 2,
					jslint_happy: true,
					space_after_anon_function: true,
					brace_style: "end-expand",
					keep_array_indentation: true,
					keep_function_indentation: true,
					space_before_conditional: true,
					break_chained_methods: true,
					eval_code: false,
					unescape_strings: false,
					wrap_line_length: 0,
					wrap_attributes: "auto",
					wrap_attributes_indent_size: 4,
					end_with_newline: false,
				})
			)
			.pipe(gulp.dest(config.html.dest))
			.pipe(bs.stream());

		resolve();
	});
};

module.exports = html;
