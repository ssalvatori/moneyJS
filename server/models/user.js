var mongoose = require('mongoose');
var timestamps = require("mongoose-times");
var Schema = mongoose.Schema;
 
var userSchema = new Schema({
  username:  String,
  email: String
});
  
userSchema.plugin(timestamps, { created: "created_at", lastUpdated: "updated_at" });
module.exports = mongoose.model('User', userSchema);