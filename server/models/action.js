var mongoose = require('mongoose');
var timestamps = require("mongoose-times");
var Schema = mongoose.Schema;

var actionSchema = new Schema({
  name:  String,
  amount: Number,
  user: {
    type: mongoose.Schema.ObjectId
  },
  realized_at: Date
});
  
actionSchema.plugin(timestamps, { created: "created_at", lastUpdated: "updated_at" });
module.exports = mongoose.model('Action', actionSchema);