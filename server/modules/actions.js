var actions = [
  {id: 1, name: "action one"},
  {id: 2, name: "action two"}
];

exports.find = function(req, res, next){
  res.json(actions);
};

exports.findById = function(req, res, next){
  var found = 0;
  actions.forEach(function(action) {
    if(action.id == req.params.id) { 
      res.json(action);
      found++;
    }
  });
  if(found == 0) {
    next(new Error("not found action with id "+req.params.id));
  } 
};