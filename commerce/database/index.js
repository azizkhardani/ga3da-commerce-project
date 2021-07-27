const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/commerce';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true } );
const db = mongoose.Connection;


  var selectAll = function(callback) {
    Item.find({}, function(err, items) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, items);
      }
    });
  };
  
  var create = function(item, callback){
    Item.create(item, function(err, items) {
      if (err){
        callback(err, null);
      } else {
        callback(null, items)
      }
    })
  }
  
  var update = function(item, newItem, callback){
    Item.updateOne(item, { $set : newItem}, function(err, items){
      if (err){
        callback(err, null);
      } else {
        callback(null, items)
      }
    })
  }
  
  var deleteOne = function(item, callback){
    Item.deleteOne(item, function(err, items){
      if (err){
        callback(err, null);
      } else {
        callback(null, items)
      }
    })
  }
  
module.exports = db;
module.exports.selectAll = selectAll;
module.exports.create = create;
module.exports.update = update;
module.exports.deleteOne = deleteOne;