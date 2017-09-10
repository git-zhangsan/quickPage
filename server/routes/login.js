/*
 * @Author: zhanghuiming
 * @Date:   2017-07-28 14:05:05
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 14:30:32
 */

'use strict';
var express = require('express'),
	router = express.Router();
var User = require('../models/user.js');
var React = require('react');
var ReactDOMServer = require("react-dom/server");
var Login = require('../../client/login').default;

router.get('/', function(req, res) {
	res.render('login', {
		user: req.session.user,
		mark: ReactDOMServer.renderToString(<Login/>)
	})
});

router.post('/', function(req, res) {
	var password = req.body.password;
	User.get(req.body.username, function(err, user) {
		if (!user) {
			req.flash('error');
			req.flash('error', '用户不存在！');
			return res.redirect('/login');
		}
		//检查密码是否一致
		if (user.password != password) {
			req.flash('error');
			req.flash('error', '密码错误！');
			return res.redirect('login');
		}
		//用户名和密码匹配之后，将用户信息存入session
		req.session.user = user;
		req.flash('user');
		req.flash('user', user);
		req.flash('success');
		req.flash('success', '登录成功！');
		res.redirect('/');
	})
});

module.exports = router;