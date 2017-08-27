/*
 * @Author: zhanghuiming
 * @Date:   2017-06-21 14:56:28
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-27 13:51:12
 */

'use strict';

var webpack = require('webpack');
var path = require('path');

var publicPath = '/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?noInfo=true&reload=true';
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: './client/main.js',
	// entry: {
	// 	page1: ['./client/', hotMiddlewareScript],
	// 	login: ['./client/login', hotMiddlewareScript]
	// },
	output: {
		filename: './[name]/bundle.js',
		//输出的文件夹public至于根目录下
		path: path.resolve(__dirname, './public'),
		publicPath: publicPath
	},
	// devtool: 'eval-source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({
				loader: [{
					loader: 'css-loader',
					query: {
						localIdentName: '[hash:8]',
						modules: true
					}
				}, {
					loader: 'postcss-loader'
				}, {
					loader: 'sass-loader'
				}]
			})
		}]

	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}