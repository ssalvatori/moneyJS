var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

/* models */
var UserModel = require('../models/user');

exports.authenticate = function(req, res, next){
   
  var apikey = ObjectId.fromString(req.params.apikey);
  var username = req.params.username;
  
  console.log("apikey: "+apikey);
  console.log("username: "+username);
  
  UserModel.findOne({_id: apikey, username: username}, function(error, results) {
    if(error) next(new Error("auth error: "+error));
    if(results) {
      next();
    }
    else {
      next(new Error("Auth Error, incorrect username & apikey"));
    }
  });
};