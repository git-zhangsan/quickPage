/*
 * @Author: zhanghuiming
 * @Date:   2017-06-22 13:59:32
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-21 16:34:51
 */

'use strict';
var User = require('../models/user.js');
var Note = require('../models/note.js');
var React = require('react');
var ReactDOMServer = require("react-dom/server");
var HomePage = require('../../client/components/HomePage').default;
var NoteItem = require('../../client/components/NoteItem').default;
module.exports = function(app, express) {
	app.use('/', require('./page1'));
	app.use('/page2', require('./page2'));
	app.use('/reg', require('./reg'));



	app.post('/reg', function(req, res) {
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
	//app.use('/login', require('./login'))
	app.get('/login', function(req, res) {
		res.render('login', {
			user: req.session.user,
			mark: ReactDOMServer.renderToString(<HomePage title={req.session.user.name}/>)
		})
	});
	app.post('/login', function(req, res) {
		var password = req.body.password;
		User.get(req.body.username, function(err, user) {
			if (!user) {
				req.flash('error');
				req.flash('error', '用户不存在！');
				console.log('用户名不存在');
				return res.redirect('/login');
			}
			//检查密码是否一致
			if (user.password != password) {
				req.flash('error');
				req.flash('error', '密码错误！');
				console.log('密码错误！');
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

	app.get('/addnote', function(req, res) {
		res.render('addnote', {
			user: req.session.user,
			success: req.flash('success').toString(),
			error: req.flash('error').toString(),
			status: 'add'
		});
	});

	app.post('/addnote', function(req, res) {
		var time = new Date();
		if (!req.body.title) {
			console.log('不能为空');
		}

		var newNote = new Note({
			author: req.session.user.name,
			title: req.body.title,
			content: req.body.content,
			tags: strToArr(req.body.tags, /[,，]/),
			time: time
		});

		newNote.save(function(err, note) {
			if (err) {
				console.log(err);
			}

			res.send(note);
		})
	});
	//显示笔记
	app.get('/mynote', function(req, res) {
		Note.get(req.session.user.name, function(err, note) {
			res.render('mynote', {
				user: req.session.user,
				success: req.flash('success').toString(),
				error: req.flash('error').toString(),
				note: note,
				mark: ReactDOMServer.renderToString(<NoteItem content={note}/>)
			});
		});
	});
	//显示标签
	app.get('/mytags', function(req, res) {
		Note.gettags(req.session.user.name, function(err, tags) {
			res.render('mytags', {
				user: req.session.user,
				success: req.flash('success').toString(),
				error: req.flash('error').toString(),
				tags: tags
			});
		});
	});
	//分割字符串去除空值
	function strToArr(str, rex) {
		var getArr = str.split(rex);
		getArr.map(function(value, index, arr) {
			if (!value) {
				arr.splice(index, 1);
			}
		});
		return getArr;
	}
};