const argv = require('minimist')(process.argv.slice(2));
const DEV = argv.dev || !argv.prod;

module.exports = {
	presets: [
		['@babel/preset-env', {
			// 必要な polyfill のみを import させたい場合、'usage'を指定する（必須）
			useBuiltIns: 'usage',

			// polyfill を利用する core-js のバージョンを指定する（指定しないとバージョン2が利用され警告が出力される）
			corejs: 3,

			// trueにすると利用しているポリフィルなどの情報が出力される
			// polyfill が import されているかどうかを確認するためのものなので必須ではない
			debug: false
		}]
	],

	inputSourceMap: true,
	sourceMaps: 'both',
}