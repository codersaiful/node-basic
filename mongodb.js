/**
 * THis tutorial has taken from w3schools
 * but it's not working properly
 * 
 * need to update
 * please check: mongodb-connect.js file
 * 
 * @Since database
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("saiful");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});