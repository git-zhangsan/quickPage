/*
 * @Author: zhanghuiming
 * @Date:   2017-06-21 16:30:38
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-27 13:37:53
 */

'use strict';
//开发环境，静态文件使用热插拔

var express = require('express'),
	path = require('path'),
	consolidate = require('consolidate');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var settings = require('./setting');
var flash = require('connect-flash');

import qs from 'qs';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';
var compiler = webpack(webpackConfig);

var isDev = process.env.NODE_ENV !== 'production';
var app = express();
var port = 3000;

//app.engine('html', consolidate.ejs);

app.set('view engine', 'ejs');

// app.set('view engine', 'html');

app.set('views', path.resolve(__dirname, './server/views'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(cookieParser());

app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: settings.cookieSecret,
	key: settings.db, //cookie name
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 10
	}, //30 days
	store: new MongoStore({
		url: 'mongodb://' + settings.host + ':' + settings.port + '/' + settings.db
	})
}));

app.use(flash());

app.use(function(req, res, next) {
	res.locals.errors = req.flash('error');
	res.locals.infos = req.flash('info');
	res.locals.success = req.flash('success');
	next();
});

// 热插拔
// app.use(webpackDevMiddleware(compiler, {
// 	publicPath: webpackConfig.output.publicPath,
// 	contentBase: './client/',
// 	hot: true,
// 	quiet: false,
// 	noInfo: false,
// 	lazy: false,
// 	stats: 'normal'
// }));

// app.use(webpackHotMiddleware(compiler, {
// 	path: '/__webpack_hmr'
// }));

require('./server/routes')(app);

// 不能热插拔的往下执行
var reload = require('reload');
var http = require('http');
var server = http.createServer(app);
reload(server, app);

server.listen(port, function() {
	console.log('App (dev) is now running on port 3000!');
});