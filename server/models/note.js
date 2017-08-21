/*
 * @Author: zhanghuiming
 * @Date:   2017-08-02 10:22:28
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-04 14:32:42
 */

'use strict';

var mongodb = require('./db');

function Note(note) {
	this.author = note.author;
	this.title = note.title;
	this.content = note.content;
	this.tags = note.tags;
	this.time = note.time;
}

module.exports = Note;

//获取作者的所有文章
Note.get = function(author, callback) {
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err)
		}
		db.collection('note', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			//通过作者名字查找文章
			collection.find({
				author: author,
				delete: false
			}).sort({
				id: -1
			}).toArray(function(err, note) {
				if (note.length > 0) {
					for (var i = 0; i < note.length; i++) {
						var time = note[i].time.getFullYear() + '-' + (note[i].time.getMonth() + 1) + '-' + note[i].time.getDate();
						note[i].time = time;
					}
				}

				mongodb.close();
				if (err) {
					return callback(err);
				}
				callback(null, note);
			})
		})
	})
};
//获取所有的标签
Note.gettags = function(author, callback) {
	mongodb.open(function(err, db) {
		if (err) return callback(err);

		db.collection('note', function(err, collection) {
			if (err) {
				mongodb.close();
				return callback(err);
			}
			collection.find({
				author: author,
				delete: false
			}).toArray(function(err, note) {
				var tagsobj = {};
				if (note.length > 0) {
					for (var i = 0; i < note.length; i++) {
						if (note[i].tags.length > 0) {
							for (var j = 0; j < note[i].tags.length; j++) {
								tagsobj[note[i].tags[j]] = 'default';
							}
						}
					}
				}
				mongodb.close();
				if (err) callback(err);
				callback(null, tagsobj);
			})
		});
	});
};
//新增note
Note.prototype.save = function(callback) {
	var note = {
		author: this.author,
		title: this.title,
		content: this.content,
		tags: this.tags,
		time: this.time,
		delete: false
	};

	mongodb.open(function(err, db) {
		if (err) return callback(err);
		db.collection('note', function(err, collection) {
			if (err) return callback(err);

			collection.insert(note, {
				safe: true
			}, function(err, note) {
				mongodb.close();
				if (err) {
					return callback(err);
				}
				callback(null, note.ops[0]);
			})
		})

	})
};