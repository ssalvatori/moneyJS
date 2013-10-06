var express = require('express');
var app = express();
var actions = require('./modules/actions');
var user = require('./modules/user');

/* error midleware */
app.use(function(err, req, res, next) {
  //do logging and user-friendly error message display
  console.log("---");
  console.log("request: "+req);
  console.log("response: "+res);
  console.log("---");
  console.log("ERROR: "+err);
  res.send(500, {status:500, message: 'internal error', type:'internal'});
});

/* actions */
app.get('/actions/:apikey/find/all', user.authenticate, actions.find);
app.get('/actions/:apikey/find/:id', user.authenticate, actions.findById);

app.listen(8080);
console.log('Express app started on port 8080');