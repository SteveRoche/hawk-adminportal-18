const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.jsx?/, include: /src/, loader: 'babel-loader'},
			{ test: /\.css/, use: ['style-loader', 'css-loader'] }
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			Components: path.resolve(__dirname, 'src/components')
		}
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/index.html'),
			filename: 'index.html'
		}),
		new CleanWebpackPlugin(['dist'])
	]
};