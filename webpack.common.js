const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	entry: path.join(__dirname, "/src/index.js"),
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [{ test: /\.jsx?/, include: /src/, loader: "babel-loader" }, { test: /\.css/, use: ["style-loader", "css-loader"] }]
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			ActionCreators: path.resolve(__dirname, "src/actionCreators"),
			ActionTypes$: path.resolve(__dirname, "src/constants/index.js"),
			Components: path.resolve(__dirname, "src/components"),
			Reducers$: path.resolve(__dirname, "src/reducers/index.js"),
			Reducers: path.resolve(__dirname, "src/reducers"),
			Store$: path.resolve(__dirname, "src/store/index.js"),
			Styles: path.resolve(__dirname, "src/styles"),
		}
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src/index.html"),
			filename: "index.html"
		}),
		new CleanWebpackPlugin(["dist"])
	]
};
