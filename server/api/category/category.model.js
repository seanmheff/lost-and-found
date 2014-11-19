'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
	dateAdded: {
  	type: Date, 
  	default: Date.now
  }
});

module.exports = mongoose.model('Category', CategorySchema);