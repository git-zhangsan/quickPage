/*
 * @Author: zhanghuiming
 * @Date:   2017-08-24 16:05:56
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-24 16:06:45
 */
var express = require('express'),
	router = express.Router();
var Note = require('../models/note.js');

//显示标签
router.get('/', function(req, res) {
	Note.gettags(req.session.user.name, function(err, tags) {
		res.render('mytags', {
			user: req.session.user,
			success: req.flash('success').toString(),
			error: req.flash('error').toString(),
			tags: tags
		});
	});
});
module.exports = router;