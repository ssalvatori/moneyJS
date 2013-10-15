var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = require('mongoose').Types.ObjectId;

/* load model*/
var ActionModel = require('../models/action.js');

exports.find = function(req, res){
  
  var apikey = ObjectId.fromString(req.params.apikey);
  ActionModel.find({user:  apikey}, function(error, actions) {
    if(error) {
      next(new Error("error")); 
    }
    res.json(actions);
  });
  
};

exports.create = function(req, res) {
  
  console.log(req.body);
  console.log(Date(req.body.realzied));
  
  var action = new ActionModel({
    user: ObjectId.fromString(req.params.apikey),
    amount: parseFloat(req.body.amount),
    name:  req.body.name,
    realized_at: Date(req.body.realized),
  });

  action.save(function (err) {
    if (err) {
      console.log(err);
      res.send(500);
    }
    ActionModel.findById(action, function (err, doc) {
      if (err) return handleError(err);
      res.send("ok");
    });
  });  
  
};

exports.findById = function(req, res){
  
};

exports.findByDate = function(req, res){
  
  var startDate = req.params.startDate;
  var endDate = req.params.endDate;
  
  console.log("startDate ".Date(startDate));
  console.log("endDate ".Date(endDate));
  
  ActionModel.find({'realized_at': { $gte: Date(startDate), $lt: Date(endDate)}},function (error, actions) {
    if(error) {
      next(new Error("error")); 
    }
    res.json(actions);
  });
   
};

exports.findByType = function(req, res){
  var type = req.params.type;
};
