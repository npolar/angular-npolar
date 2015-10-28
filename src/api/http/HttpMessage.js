'use strict';

var EventEmitter = require('events').EventEmitter;

/**
 * @ngInject
 */
var HttpMessage = function() {

  let washError = function (error) {
    if (error) {
      error = error.replace('_', ' ');
      error = error.charAt(0).toUpperCase() + error.slice(1);
    }
    return error;
  };

  let apiError = function (error) {
    return error ? error.explanation : undefined;
  };

  let couchError = function (error) {
    return error.error && error.reason ? washError(error.error) : undefined;
  };

  this.getMessage = function(response) {

    let time = new Date(Date.now()).toJSON();
    let message;

    if (response.body && response.body.time) {
      time = response.body.time;
    }

    if (0 === response.status) {
      message = `HTTP ${response.config.method} to Npolar API ${response.config.url} failed with status: 0`;
    } else if (response.body) {
        message = apiError(response.body.error) || couchError(response.body) ||
          response.body.reason || response.body.error || response.body;
    }

    return { status: response.status,
      method: response.config.method,
      uri: response.config.url,
      headers: response.headers(),
      time: time,
      message
    };

  };

  return Object.assign(new EventEmitter(), this);

};

module.exports = HttpMessage;
