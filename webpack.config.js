/*
 * @Author: zhanghuiming
 * @Date:   2017-06-21 14:56:28
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-18 16:40:36
 */

'use strict';

var webpack = require('webpack');
var path = require('path');

var publicPath = '/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?noInfo=true&reload=true';
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		page1: ['./client/', hotMiddlewareScript],
		login: ['./client/login', hotMiddlewareScript],
		// page1: ['./client/page1', hotMiddlewareScript],
		// page2: ['./client/page2', hotMiddlewareScript]
	},
	output: {
		filename: './[name]/bundle.js',
		//输出的文件夹public至于根目录下
		path: path.resolve(__dirname, './public'),
		publicPath: publicPath
	},
	devtool: 'eval-source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
		}]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}