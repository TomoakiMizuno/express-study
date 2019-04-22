/**
 * node-mongodbのドキュメント
 * http://mongodb.github.io/node-mongodb-native/2.2/
 */
var db;
// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');

var MongoClient = require('mongodb').MongoClient,
    f = require('util').format,
    assert = require('assert');

var user = encodeURIComponent('user1');
var password = encodeURIComponent('user1');
var authMechanism = 'DEFAULT';

// Connection URL
var url = f('mongodb://%s:%s@localhost/testdb?authMechanism=%s',
    user, password, authMechanism);

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, mongodb) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db = mongodb;
});

var collection = function (name) {
    return db.collection(name);
};

module.exports = collection;