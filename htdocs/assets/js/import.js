(function() {

	var jsfiles = [
		'console.js',
		'plugins/jquery-1.11.1.min.js',
		'plugins/jquery.easing.1.3.js',

		'plugins/jquery.matchHeight-min.js',
		'plugins/jquery.resizeend.min.js',

		//lightgallery
		'plugins/lightgallery/lightgallery.min.js',
		'plugins/lightgallery/lg-video.min.js',
		'plugins/lightgallery/lg-zoom.min.js',
		'plugins/lightgallery/lg-thumbnail.min.js',

		//以下はpluginより後に読み込むこと
		'modules.js',
		'common.js'
	];  // ロードされるスクリプト（このファイルからの相対パス指定）



	/****************************** DO NOT EDIT BELOW *****************************/
	function lastof(es)    { return es[es.length - 1]; }
	function dirname(path) { return path.substring(0, path.lastIndexOf('/')); }
	var prefix = dirname(lastof(document.getElementsByTagName('script')).src);
	for(var i = 0; i < jsfiles.length; i++) {
		if (jsfiles[i].match(/^http/)) {
			document.write('<script type="text/javascript" src="' + jsfiles[i] + '"></script>');
		} else {
			document.write('<script type="text/javascript" src="' + prefix + '/' + jsfiles[i] + '"></script>');
		}
	}
}).call(this);