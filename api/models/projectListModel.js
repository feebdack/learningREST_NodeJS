'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProjectSchema = new Schema({
  name: {
    type: String,
    Required: 'What is your project named?'
  },
  description:{
    type: String,
    Required: "Give a brief description of your project."
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Projects', ProjectSchema);