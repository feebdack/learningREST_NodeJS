'use strict';

module.exports = function(app) {
  var projectList = require('../controllers/projectListController');


  // projectList Routes
  app.route('/projects')
    .get(projectList.list_projects)
    .post(projectList.create_a_project);
    //Add option to check duplicat projects using a post


  app.route('/projects/:projectID')
    .get(projectList.read_a_project)
    .put(projectList.update_a_project)
    .delete(projectList.delete_a_project);
};