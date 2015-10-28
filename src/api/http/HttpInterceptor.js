/**
 * Npolar API HTTP interceptor:
 * - adds JWT (Bearer token) in the Authorization header
 * - emits "npolar-api-*" messages
 *
 * Usage:
 * myApp.config(function($httpProvider) {
 *  $httpProvider.interceptors.push('npolarApiInterceptor');
 * });
 *
 */

'use strict';

/**
 * @ngInject
 */
var HttpInterceptor = function($log, $q, npolarApiConfig, NpolarApiMessage, NpolarApiSecurity) {

  var isNpolarApiRequest = function(config) {
    if (config.url === undefined || false === (/\/\//).test(config.url)) {
      return false;
    }
    var isApi = (config.url.split("//")[1].indexOf(npolarApiConfig.base.split("//")[1]) === 0);
    return isApi;
  };

  var isNpolarApiResponse = function(response) {
    if (0 === response.status) {
      return true; // Assume it's a crashed API request
    }
    return (isJSON(response.headers('Content-Type')) && isNpolarApiRequest(response.config));
  };

  var isJSON = function(content_type) {
    return (/^application\/(vnd\.\w+\+)?json/.test(content_type));
  };

  return {

    // Intercept API requests: add Authorization header (JWT)
    request: function(config) {

      // Only intercept Npolar API requests
      if (isNpolarApiRequest(config)) {

        config.headers = config.headers || {};

        //@todo if ( body && ('PUT' === config.method || 'POST' === config.method)) { fire saving event? }
        //@todo if ('DELETE' === config.method) { fire deleting event? }

        // Add Authorization: Bearer [JWT]
        if (!config.headers.Authorization) {
          config.headers.Authorization = NpolarApiSecurity.authorization();
        }
      }
      return config;
    },


    response: function(response) {
      // Only intercept non-GET Npolar API responses
      if (response.config.method !== "GET" && isNpolarApiResponse(response)) {
        NpolarApiMessage.emit("npolar-api-info", NpolarApiMessage.getMessage(response));
      }
      // @todo fire saved event?
      // @todo fire deleted event?

      return response;
    },

    requestError: function(response) {
      response.body = {
        error: {
          explanation: "Request failed"
        }
      };
      NpolarApiMessage.emit("npolar-api-error", NpolarApiMessage.getMessage(response));
      return $q.reject(response);
    },

    responseError: function(response) {
      response.body = response.data;
      if (isNpolarApiResponse(response)) {
        NpolarApiMessage.emit("npolar-api-error", NpolarApiMessage.getMessage(response));
      }
      return $q.reject(response);
    }

  };
};

module.exports = HttpInterceptor;
