'use strict';

var _ = require('lodash');

/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
module.exports = _.merge(_.cloneDeep(require('../base/Model')), {
  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    organization: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      unique: true,
      required: true
    },
    department: {
      type: 'string'
    },
    streetAddress: {
      type: 'string'
    },
    postalCode: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    slug: {
      type: 'string',
      unique: true,
      required: true
    },
    telephone: {
      type: 'string'
    },
    role: {
      type: 'string',
      enum: ['user', 'admin'],
      defaultsTo: 'user',
      required: true
    },
    username: {
      type: 'string',
      unique: true
    },
    admin: {
      type: 'boolean',
      defaultsTo: false
    },

    // Below is all specification for relations to another models

    // Passport configurations
    passports: {
      collection: 'Passport',
      via: 'user'
    },
    // Login objects that are attached to user
    logins: {
      collection: 'UserLogin',
      via:        'user'
    }
  }
});
