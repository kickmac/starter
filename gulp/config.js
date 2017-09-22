module.exports = {
	src: ['./htdocs/**/*', '!./htdocs/**/_*', '!./htdocs/**/copy_*'],
	dest: './htdocs',

	html: {
		src: ['./htdocs/ejs/**/*.ejs', '!./htdocs/ejs/**/_*.ejs', '!./htdocs/ejs/**/copy_*.ejs'],
		dest: './htdocs'
	},
	css: {
		src: ['./htdocs/assets/scss/**/*.scss', '!./htdocs/assets/scss/**/_*.scss', '!./htdocs/assets/scss/**/copy_*.scss'],
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
	images: {
		src: ['./htdocs/assets/images/**/*', '!./htdocs/assets/images/**/_*', '!./htdocs/assets/images/**/copy_*'],
		dest: './htdocs/assets/images'
	},
	js: {
		src: ['./htdocs/assets/js/**/*.js', '!./htdocs/assets/js/**/_*.js', '!./htdocs/assets/js/**/copy_*.js'],
		dest: './htdocs/assets/js'
	},
	styleGuide: {
		tempDir: './gulp/styleguide_template',
		dest: './htdocs/_style_guide'
	}
};