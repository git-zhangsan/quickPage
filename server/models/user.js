/*
 * @Author: zhanghuiming
 * @Date:   2017-06-26 18:30:58
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-07-27 17:27:27
 */

'use strict';

var mongodb = require('./db');

function User(user) {
	this.name = user.name;
	this.password = user.password;
	this.email = user.email;
}

module.exports = User;

//获取用户信息
User.get = function(name, callback) {
	//打开数据库
	mongodb.open(function(err, db) {
		if (err) return callback(err);

		db.collection('users', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}

			//查找用户名（name键）值为name的一个文档

			collection.findOne({
				name: name
			}, function(err, user) {
				mongodb.close();
				if (err) {
					return callback(err); //失败！返回 err
				}
				callback(null, user); //成功！返回查询的用户信息
			})
		})
	})
}

User.prototype.save = function(callback) {
	var user = {
		name: this.name,
		password: this.password,
		email: this.email
	}
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err); //错误，返回 err 信息
		}

		//读取 users 集合
		db.collection('users', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err); //错误，返回 err 信息
			}
			//将用户数据插入 users 集合
			collection.insert(user, {
				safe: true
			}, function(err, user) {
				mongodb.close();
				if (err) {
					return callback(err);
				}
				console.log("user0 : ");
				console.log(user);
				callback(null, user.ops[0]); //成功！err为null,返回结果,user.ops是返回的数据结构
			});
		});
	})
}