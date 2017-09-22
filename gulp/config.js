module.exports = {
	src: ['./src/**/*', '!./src/**/_*', '!./src/**/copy_*'],
	dest: './dest',

	html: {
		src: ['./src/**/*.ejs', '!./src/**/_*.ejs', '!./src/**/copy_*.ejs'],
		dest: './dest'
	},
	css: {
		src: ['./src/assets/scss/**/*.scss', '!./src/assets/scss/**/_*.scss', '!./src/assets/scss/**/copy_*.scss'],
		dest: './dest/assets/styles'
	},
	images: {
		src: ['./src/assets/images/**/*', '!./src/assets/images/**/_*', '!./src/assets/images/**/copy_*'],
		dest: './dest/assets/images'
	},
	js: {
		src: ['./src/assets/js/**/*.js', '!./src/assets/js/**/_*.js', '!./src/assets/js/**/copy_*.js'],
		dest: './dest/assets/js'
	},
	styleGuide: {
		tempDir: './gulp/styleguide_template',
		dest: './dest/_style_guide'
	}
};