'use strict';


var mongoose = require('mongoose'),
  Project = mongoose.model('Projects');

exports.list_projects = function(req, res) {
  console.log("Listing all project.");
  Project.find({}, function(err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
};

exports.create_a_project = function(req, res) {
  var new_project = new Project(req.body);
  console.log("Creating new project.");
  new_project.save(function(err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
};


exports.read_a_project = function(req, res) {
  console.log("Searching project by query: "+req.params.projectID);
  Project.findById({_id: req.params.projectID}, function(err, project) {
    if (err){
      //res.send(err);
      Project.find({name: { "$regex": req.params.projectID, "$options": "i" }}, function(err2,project2){
        if(err2){
          res.send(err2);
        }else
        res.json(project2);
      })
    }else
    res.json(project);
  });
};


exports.update_a_project = function(req, res) {
  console.log("Updating existing project: "+req.params.projectID);
  Project.findOneAndUpdate({_id: req.params.projectID}, req.body, {new: true}, function(err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
};


exports.delete_a_project = function(req, res) {
  console.log("Removing project: "+req.params.projectID);
  Project.remove({
    _id: req.params.projectID
  }, function(err, project) {
    if (err)
      res.send(err);
    res.json({ message: 'Project successfully deleted' });
  });
};