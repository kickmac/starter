(function() {

	// デバッグモード切替
	var debugMode = true;

	// 置換対象のメソッドを配列として保持する
	var methods = [
		'log',
		'debug',
		'info',
		'warn',
		'error',
		'dir',
		'trace',
		'assert',
		'dirxml',
		'group',
		'groupEnd',
		'time',
		'timeEnd',
		'count',
		'profile',
		'profileEnd',
		'table'
	];

	// consoleが使えない場合は空のオブジェクトを設定しておく
	if (typeof window.console === "undefined") {
		window.console = {};
	}

	// 各メソッドをwindowへ直接追加して行く
	for (var i in methods) {
		(function(m) {
			// consoleにある？デバッグモードは有効？consoleのものは関数？
			if (!console[m] || !debugMode || !typeof console[m] === "function") {
				console[m] = function() {};
			}

		})(methods[i]);
	}
})();
