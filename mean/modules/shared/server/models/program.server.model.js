'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Program Schema
 */
var ProgramSchema = new Schema({
	name: {
	    type: String,
	    default: '',
	    required: 'Please fill Course name',
	    trim: true
	  },
	  summary: {
	    type: String,
	    default: '',
	    trim: true
	  },
	  detail: {
	    type: String,
	    default: '',
	    trim: true
	  },
	  code: {
	      type: String,
	      default: '',
	      trim: true
	  },
	  status: {
	      type: String,
	      enum: ['draft','available', 'unavailable'],
	      default: 'draft'
	  },
	  enrollPolicy: {
	      type: String,
	      enum: ['open','censor'],
	      default: 'open'
	  },
	  enrollStatus: {
	      type: Boolean,
	      default: false
	  },
	  displayMode: {
	    type: String,
	    enum: ['open','login','enroll'],
	    default: 'open'
	  },
	  logoURL: {
	    type: String,
	      default: '/files/logo/uploads/place-holder.png'
	  },
	  group: {
	      type: Schema.ObjectId,
	      ref: 'Group'
	  },
	  courses: {
	      type: [ {
	              type: Schema.ObjectId,
	              ref: 'Course'
	              } ]
	   },
	   competencies: {
	     type: [{
	       type: Schema.ObjectId,
	       ref: 'Competency'
	     }]
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

mongoose.model('Program', ProgramSchema);
