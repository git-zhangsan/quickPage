/*
 * @Author: zhanghuiming
 * @Date:   2017-08-24 15:59:41
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-24 16:07:35
 */
var express = require('express'),
	router = express.Router();
var Note = require('../models/note.js');

router.get('/', function(req, res) {
	res.render('addnote', {
		user: req.session.user,
		success: req.flash('success').toString(),
		error: req.flash('error').toString(),
		status: 'add'
	});
});

router.post('/', function(req, res) {
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
module.exports = router;