var mongojs = require('mongojs');
var db = mongojs('project', ['users']);
var _ = require('underscore');

var ObjectId = mongojs.ObjectId;

exports.db = db;
exports.ObjectId = ObjectId;