/**
 * These are like imports in Angular 
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

const MONGODB_URI = 'mongodb://<username>:<password>@ds135963.mlab.com:35963/idleg';

/**
 * TODO: We're going to define paths below
 */

/**
 * http://localhost:3000/api
 */
router.get('/', function (req, res, next) {
  res.send('Hello, World from Express REST API');
});

/**
 * http://localhost:3000/api/about
 */
router.get('/about', function (req, res, next) {
  res.send({ "version": "0.1.0" });
});


/**
 * http://localhost:3000/api/find
 */
router.get('/find', function (req, res, next) {
  MongoClient.connect(MONGODB_URI, function (err, db) {
    if (err) throw err

    db.collection('User').find().toArray(function (err, result) {
      if (err) throw err

      console.log(result);
      res.send(result);
    })
  })

});



/**
 * And now let's export our router
 */
module.exports = router;

