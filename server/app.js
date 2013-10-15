var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect(process.env.MONGO_DEV_URI);

/* API MODULES */
var actionsAPI = require('./api/actions');
var usersAPI = require('./api/users');

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

/* actions */
app.get('/actions/:username/:apikey/find', usersAPI.authenticate, actionsAPI.find);
app.get('/actions/:username/:apikey/findById', usersAPI.authenticate, actionsAPI.findById);
app.get('/actions/:username/:apikey/findByDate', usersAPI.authenticate, actionsAPI.findByDate);
app.get('/actions/:username/:apikey/findByType', usersAPI.authenticate, actionsAPI.findByType);
app.post('/actions/:username/:apikey/create', usersAPI.authenticate, actionsAPI.create);


app.listen(8080);
console.log('Express app started on port 8080');