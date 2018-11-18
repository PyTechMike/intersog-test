const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
	mode: 'development',
	entry: [
		'./index.js'
	],
	module: {
		rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		{
			test: /\.css$/,
			use: [
				'vue-style-loader',
				'css-loader'
			]
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: [
				{
					loader: 'file-loader',
					options: {}
				}
			]
		}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
		vue: 'vue/dist/vue.js'
		}
	}
}