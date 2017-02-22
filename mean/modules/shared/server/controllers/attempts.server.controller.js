'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  CourseAttempt = mongoose.model('CourseAttempt'),
  CourseMember = mongoose.model('CourseMember'),
  EditionSection = mongoose.model('EditionSection'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');

/**
 * Create a Attempt
 */
exports.create = function(req, res) {
  var attempt = new CourseAttempt(req.body);
  attempt.user = req.user;

  attempt.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(attempt);
    }
  });
};

/**
 * Show the current Attempt
 */
exports.read = function(req, res) {
  // convert mongoose document to JSON
  var attempt = req.attempt ? req.attempt.toJSON() : {};

  // Add a custom field to the Article, for determining if the current User is the "owner".
  // NOTE: This field is NOT persisted to the database, since it doesn't exist in the Article model.
  attempt.isCurrentUserOwner = req.user && attempt.user && attempt.user._id.toString() === req.user._id.toString();

  res.jsonp(attempt);
};

/**
 * Update a Attempt
 */
exports.update = function(req, res) {
  var attempt = req.attempt;

  attempt = _.extend(attempt, req.body);

  attempt.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
     
      res.jsonp(attempt);
    }
  });
};

/**
 * Delete an Attempt
 */
exports.delete = function(req, res) {
  var attempt = req.attempt;

  attempt.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(attempt);
    }
  });
};

/**
 * List of Attempts
 */
exports.list = function(req, res) {
  CourseAttempt.find().sort('-created').populate('user', 'displayName').populate('answers').exec(function(err, attempts) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(attempts);
    }
  });
};


exports.listByCourseAndMember = function(req, res) {
    CourseAttempt.find({member:req.member._id,edition:req.edition._id}).sort('-created').populate('user', 'displayName').populate('answers').exec(function(err, attempts) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.jsonp(attempts);
      }
    });
  };
  
  exports.listBySectionAndMember = function(req, res) {
      CourseAttempt.find({member:req.member._id,section:req.section._id,edition:req.edition._id}).sort('-created').populate('user', 'displayName').populate('answers').exec(function(err, attempts) {
        if (err) {
          return res.status(400).send({
            message: errorHandler.getErrorMessage(err)
          });
        } else {
          res.jsonp(attempts);
        }
      });
    };
    
    exports.listBySection = function(req, res) {
        CourseAttempt.find({section:req.section._id,edition:req.edition._id}).sort('-created').populate('user', 'displayName').populate('answers').exec(function(err, attempts) {
          if (err) {
            return res.status(400).send({
              message: errorHandler.getErrorMessage(err)
            });
          } else {
            res.jsonp(attempts);
          }
        });
      };

/**
 * Attempt middleware
 */
exports.attemptByID = function(req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Attempt is invalid'
    });
  }

  CourseAttempt.findById(id).populate('user', 'displayName').populate('answer').exec(function (err, attempt) {
    if (err) {
      return next(err);
    } else if (!attempt) {
      return res.status(404).send({
        message: 'No Attempt with that identifier has been found'
      });
    }
    req.attempt = attempt;
    next();
  });
};