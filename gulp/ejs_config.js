var config = require('./config.js');
module.exports = {
	data: {
		siteName: 'サイト名',
	},
	options: {
		delimiter: '?',
		root: config.dest + '/ejs/',
	},
	settings: {
		ext: '.html',
	}
};