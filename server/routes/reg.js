/*
 * @Author: zhanghuiming
 * @Date:   2017-06-30 13:44:15
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-10 17:43:58
 */


'use strict';

var express = require('express'),
	router = express.Router();
var User = require('../models/user.js');
var React = require('react');
var ReactDOMServer = require("react-dom/server");
var Register = require('../../client/register').default;
router.get('/', function(req, res) {
	res.render('reg', {
		mark: ReactDOMServer.renderToString(<Register/>)
	});
});

router.post('/', function(req, res) {
	var name = req.body.name,
		password = req.body.password,
		confirmPass = req.body['confirmPass'],
		email = req.body.emails;
	//检验用户两次输入的密码是否一致
	if (confirmPass != password) {
		req.flash('error');
		req.flash('error', '两次输入的密码不一致!');
		return res.redirect('/reg'); //返回主册页
	}
	var newUser = new User({
		name: name,
		password: password,
		email: email
	});
	// //检查用户是否存在
	User.get(newUser.name, function(err, user) {
		if (user) {
			req.flash('error');
			req.flash('error', '用户已存在!');
			return res.redirect('/reg');
		}

		//如果不存在则新增用户
		newUser.save(function(err, user) {
			if (err) {
				return res.redirect('/reg');
			}
			req.session.user = user;
			res.redirect('/');
		});
	})
});

module.exports = router;