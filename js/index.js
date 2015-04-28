'use strict';
var angular = require('angular');

// angular modules
require('angular-route');
require('angular-resource');
require('angular-utf8-base64');
require('angular-jwt');

/**
 * npolarApi: Angular 1.x module for the [Npolar API](http://api.npolar.no/)
 */
var npolarApi = angular.module('npolarApi', ['ngResource', 'base64', 'angular-jwt']);
npolarApi.value('npolarApiConfig', require('./config'));
npolarApi.service('npolarApiUser', require('./user'));
npolarApi.service('npolarApiSecurity', require('./security'));
npolarApi.service('npolarApiResource', require('./resource'));
npolarApi.service('npolarApiText', require('./text'));
npolarApi.factory('npolarApiAuthInterceptor', require('./auth_interceptor'));
npolarApi.controller('npolarApiBaseController', require('./base_controller'));
npolarApi.controller('npolarApiEditController', require('./edit_controller'));
npolarApi.directive('npolarJsonText', require('./json_text'));
