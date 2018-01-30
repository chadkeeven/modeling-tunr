var db = require('../models');
var Manager = db.models.Manager;

function index(req, res) {
	Manager.findAll().then(function(managers) {
		res.json(managers);
	});
}

function show(req, res) {
  Manager.findById(req.params.id)
    .then(function(manager){
      if(!manager) res.send("manager not found");
      else {
        res.json(manager);
      }
    });
}

function create(req, res) {
  Manager.create(req.body).then(function(manager){
    if(!manager) res.send("manager not saved");
    else {
      res.json(manager);
    }
  });
}

function update(req, res) {
  Manager.findById(req.params.id)
    .then(function(manager){
      if(!manager) res.send("manager not found");
      return manager.updateAttributes(req.body);
    })
    .then(function(manager){
      res.json(manager);
    });
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
