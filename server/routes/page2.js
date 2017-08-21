/*
 * @Author: zhanghuiming
 * @Date:   2017-06-22 14:00:03
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-06-22 14:01:19
 */

'use strict';

var express = require('express'),
	router = express.Router();

router.get('/', function(req, res) {
	res.render('page2');
});

module.exports = router;