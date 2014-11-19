'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
  title: String,
  description: String,
  location: {
  	longitude: Number,
  	latitude: Number,
  },
  dateAdded: {
  	type: Date, 
  	default: Date.now
  },
  category: Schema.Types.ObjectId
});


/**
 * Validations
 */

// Validate title
ItemSchema
  .path('title')
  .validate(function(title) {
    return title.length;
  }, 'Title cannot be blank');

module.exports = mongoose.model('Item', ItemSchema);