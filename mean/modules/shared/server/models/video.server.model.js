'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Video Schema
 */
var VideoSchema = new Schema({
    transcript: {
        type: String,
        trim: true
    },
    videoUrl: {
        type: String,
        trim: true
    },
    videoCaptionUrl: {
        type: String,
        trim: true
    },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Video', VideoSchema);
