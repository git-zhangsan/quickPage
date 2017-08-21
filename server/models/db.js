/*
 * @Author: zhanghuiming
 * @Date:   2017-06-26 18:29:27
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-06-26 18:29:42
 */

'use strict';

var settings = require('../../setting'),
	Db = require('mongodb').Db,
	Connection = require('mongodb').Connection,
	Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, settings.port), {
	safe: true
});