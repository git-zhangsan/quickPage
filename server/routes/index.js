/*
 * @Author: zhanghuiming
 * @Date:   2017-06-22 13:59:32
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-24 16:48:46
 */

'use strict';
module.exports = function(app, express) {
	app.use('/', require('./login'));
	app.use('/reg', require('./reg'));
	app.use('/login', require('./login'));
	app.use('/addnote', require('./addnote'));
	app.use('/mynote', require('./mynote'));
	app.use('/mytags', require('./mytags'));
};