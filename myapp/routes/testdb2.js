var express = require('express');
var router = express.Router();

// var MongoClient = require('mongodb').MongoClient,
//     f = require('util').format,
//     assert = require('assert');

// var user = encodeURIComponent('user1');
// var password = encodeURIComponent('user1');
// var authMechanism = 'DEFAULT';

// // Connection URL
// var url = f('mongodb://%s:%s@n-app-db:27017/testdb?authMechanism=%s',
//     user, password, authMechanism);

// MongoClient.connect(url, function (err, mongodb) {
//     assert.equal(null, err);
//     console.log("Connected correctly to server");
//     db = mongodb;
// });

// var collection = function (name) {
//     return db.collection(name);
// };

// /* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index', {
//         title: 'Express'
//     });
// });

module.exports = router;
