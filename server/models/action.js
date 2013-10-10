var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var actionSchema = new Schema({
  username:  String
});
 
module.exports = mongoose.model('Action', actionSchema);