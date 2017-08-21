/*
 * @Author: zhanghuiming
 * @Date:   2017-06-22 13:59:57
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-06-22 14:00:54
 */

'use strict';

var express = require('express'),
	router = express.Router();

router.get('/', function(req, res) {
	res.render('page1');
});

module.exports = router