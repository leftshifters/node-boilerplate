var mongojs = require('mongojs');
var db = mongojs('shemaroo', ['users', 'categories', 'items', 'ratings', 'history', 'settings', 'purchases', 'tokens']);
var _ = require('underscore');

var ObjectId = mongojs.ObjectId;

exports.db = db;
exports.ObjectId = ObjectId;