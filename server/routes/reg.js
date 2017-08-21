/*
 * @Author: zhanghuiming
 * @Date:   2017-06-30 13:44:15
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-07-26 17:47:15
 */


'use strict';

var express = require('express'),
	router = express.Router();

router.get('/', function(req, res) {
	res.render('reg');
});

module.exports = router;