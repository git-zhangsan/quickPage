/*
 * @Author: zhanghuiming
 * @Date:   2017-06-19 16:43:27
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-06-21 14:03:21
 */

'use strict';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import fs from 'fs';


global.WATCH = true;
const webpackConfig = require('./webpack.config'); // Client-side bundle configuration
var nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});
const bundler = webpack({
	entry: [
		'webpack/hot/poll?1000',
		'../src/main.js'
	],
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'main.js'
	},
	target: 'node',
	externals: nodeModules,
	context: __dirname,
	node: {
		__filename: false,
		__dirname: false
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: [
				path.resolve(__dirname, "node_modules"),
			],
			query: {
				plugins: ['transform-runtime'],
				presets: ['es2015', 'stage-0'],
			}
		}, {
			test: /\.json$/,
			loader: 'json-loader'
		}]
	},
	resolve: {
		extensions: ['.js', '.json', '.scss']
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}, (err, stats) => {
	if (err || stats.hasErrors()) {
		// 在这里处理错误
	}
});