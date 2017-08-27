/*
 * @Author: zhanghuiming
 * @Date:   2017-08-24 16:03:26
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-24 16:04:33
 */
var express = require('express'),
	router = express.Router();
var Note = require('../models/note.js');
var React = require('react');
var ReactDOMServer = require("react-dom/server");
var NoteItem = require('../../client/components/NoteItem').default;

//显示笔记
router.get('/', function(req, res) {
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

module.exports = router;