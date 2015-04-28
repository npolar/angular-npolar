/**
* Authorization interceptor, adds Basic or Bearer tokens to (FIXME: currently all) API requests
*
* // Usage:npolarApiError
* myApp.config(function($httpProvider, npolarApiAuthInterceptorProvider) {
*  $httpProvider.interceptors.push('npolarApiAuthInterceptor');
* });
*
*/
'use strict';

/**
 * @ngInject
 */
var AuthInterceptor = function ($rootScope, $q, $window, npolarApiConfig, npolarApiSecurity) {
  return {
    request: function (config) {
      // Only intercept Npolar API requests
      if (config.url.indexOf(npolarApiConfig.base) === 0) {
        config.headers = config.headers || {};
        console.log(config.headers);
        if (!config.headers.Authorization) {
          config.headers.Authorization = npolarApiSecurity.authorization();
        }
        console.log(config.method +' '+ config.url, config.params||{}, '[npolarApi]');
        if ('PUT' === config.method) {
          $rootScope.saving = true;
        } else if ('DELETE' === config.method) {
          $rootScope.deleting = true;
        }
      }
      return config;
    },
    response: function (response) {

      if (response.status >= 300 || response.status < 100) {
        console.error(response.status +' '+ response.statusText + ' <- '+ response.config.method +' '+ response.config.url + ' [npolarApi]');
      }
      if (response.config.method !== 'GET') {
        console.log(response.status +' '+ response.statusText + ' <- '+ response.config.method +' '+ response.config.url + ' [npolarApi]');
      }
      if ('PUT' === response.config.method) {
        $rootScope.saving = false;
      } else if ('DELETE' === response.config.method) {
        $rootScope.deleting = false;
      }
      return response || $q.when(response);
    }
  };
};

module.exports = AuthInterceptor;
