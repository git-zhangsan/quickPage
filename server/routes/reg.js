/*
 * @Author: zhanghuiming
 * @Date:   2017-06-30 13:44:15
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-24 15:52:46
 */


'use strict';

var express = require('express'),
	router = express.Router();
var User = require('../models/user.js');

router.get('/', function(req, res) {
	res.render('reg');
});

router.post('/', function(req, res) {
	var name = req.body.name,
		password = req.body.password,
		email = req.body.emails;

	var newUser = new User({
		name: name,
		password: password,
		email: email
	});
	// //检查用户是否存在
	User.get(newUser.name, function(err, user) {
		if (user) {
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