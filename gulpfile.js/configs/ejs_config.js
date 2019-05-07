module.exports = function(config){
	return {
		data: {
			siteName: 'サイト名',
		},
		options: {
			delimiter: '?',
			root: config.dest + '/ejs/',
		}
	}
}
