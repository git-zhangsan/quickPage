/*
 * @Author: zhanghuiming
 * @Date:   2017-08-18 16:43:48
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-18 16:44:46
 */

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

export function fetchCounter(callback) {
	setTimeout(() => {
		callback(getRandomInt(1, 100))
	}, 500)
}