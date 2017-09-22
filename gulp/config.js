var webpack = require('webpack');

module.exports = {
	src: ['./htdocs/**/*', '!./htdocs/**/_*', '!./htdocs/**/copy_*'],
	dest: './htdocs',

	html: {
		src: ['./htdocs/ejs/**/*.ejs', '!./htdocs/ejs/**/_*.ejs', '!./htdocs/ejs/**/copy_*.ejs'],
		dest: './htdocs'
	},
	css: {
		src: ['./htdocs/assets/scss/**/*.scss', '!./htdocs/assets/scss/**/copy_*.scss'],
		dest: './htdocs/assets/styles'
	},
	sprite: {
		src: ['./htdocs/assets/images/_sprite/*', '!./htdocs/assets/images/_sprite/_*', '!./htdocs/assets/images/_sprite/copy_*'],
		dest: './htdocs/assets/images'
	},
	spriteCss: {
		src: ['./htdocs/assets/images/_sprite/*', '!./htdocs/assets/images/_sprite/_*', '!./htdocs/assets/images/_sprite/copy_*'],
		dest: './htdocs/assets/scss'
	},
	icons: {
		tempDir: './gulp/iconfont_template/',
		scssDir: './htdocs/assets/scss/',
		src: ['./htdocs/assets/svg/icons/**/*.svg', '!./htdocs/assets/svg/icons/**/_*.svg', '!./htdocs/assets/svg/icons/**/copy_*.svg'],
		dest: './htdocs/assets/fonts/icons'
	},
	images: {
		src: ['./htdocs/assets/images/**/*', '!./htdocs/assets/images/**/_*', '!./htdocs/assets/images/**/copy_*'],
		dest: './htdocs/assets/images'
	},
	js: {
		src: ['./htdocs/assets/js_src/**/*.js', '!./htdocs/assets/js_src/**/_*.js', '!./htdocs/assets/js_src/**/copy_*.js'],
		// entry: './htdocs/assets/js_src/common.js',
		dest: './htdocs/assets/js'
	},
	webpack: {
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
			]
		},
		externals: {
			jquery: 'jQuery',
			$: 'jQuery',
		},
		plugins: [
			// new webpack.optimize.UglifyJsPlugin(),
			// new webpack.ProvidePlugin({
			// 	jQuery: "jquery",
			// 	$: "jquery"
			// })
		]
	},
	styleGuide: {
		tempDir: './gulp/styleguide_template',
		dest: './htdocs/_style_guide'
	}
};