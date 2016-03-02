/**
 * Investment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    owner: {
      model: 'customer',
      required: true
    },

    category: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string',
      required: true
    },

    recent_date: {
      type: 'string',
      required: true
    },

    acquired_date: {
      type: 'string',
      required: true
    },

    recent_value: {
      type: 'string',
      required: true
    },

    acquired_value: {
      type: 'string',
      required: true
    }

  }
};

