'use strict';

/**
 * Module dependencies
 */
var acl = require('acl'),
  mongoose = require('mongoose'),
  PermissionApi = mongoose.model('PermissionApi'),
  Endpoint = mongoose.model('Endpoint'),
  _ = require('lodash'),
  Setting = mongoose.model('Setting');

// Using the memory backend
acl = new acl(new acl.memoryBackend());

/**
 * Invoke Admin Permissions
 */
exports.invokeRolesPolicies = function() {
  acl.allow([
    {
      roles: ['admin'],
      allows: [
        {
          resources: '/api/users',
          permissions: '*'
        },
        {
          resources: '/api/users/bulk',
          permissions: '*'
        },
        {
          resources: '/api/users/group/:groupId',
          permissions: 'get'
        },
        {
          resources: '/api/users/:userId/picture',
          permissions: 'post'
        },
        {
          resources: '/api/users/:userId',
          permissions: '*'
        }
      ]
    }
  ]);
};

/**
 * Check If Admin Policy Allows
 */
exports.isAllowed = function(req, res, next) {
  // Admin alwasy has policy
   return next();
  
};
