/* load model*/
var ActionModel = require('../models/action.js');

exports.find = function(req, res){
  
  ActionModel.find(function(error, actions) {
    if(error) {
      next(new Error("error")); 
    }
    res.json(actions);
  });
  
};