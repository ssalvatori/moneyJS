exports.authenticate = function(req, res, next){
  if(req.params.apikey == 'ABC123') {
    next();
  }else {
    next(new Error("user apikey"));
  }
};