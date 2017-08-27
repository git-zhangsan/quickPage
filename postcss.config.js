/*
 * @Author: zhanghuiming
 * @Date:   2017-08-25 16:16:34
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-25 16:16:43
 */
const autoprefixer = require('autoprefixer');

module.exports = {
	plugins: [
		autoprefixer({
			browsers: [
				'last 2 versions',
				'IE >= 9',
				'safari >= 8'
			]
		})
	]
};