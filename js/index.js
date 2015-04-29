'use strict';
var angular = require('angular');

// angular modules
window.angular = angular;
require('angular-resource');
require('angular-utf8-base64');
require('angular-jwt');

/**
 * npolarApi: Angular 1.x module for the [Npolar API](http://api.npolar.no/)
 */
var npolarApi = angular.module('npolarApi', ['ngResource', 'utf8-base64', 'angular-jwt']);
npolarApi.value('npolarApiConfig', require('./config'));
npolarApi.service('NpolarApiUser', require('./user'));
npolarApi.service('NpolarApiSecurity', require('./security'));
npolarApi.service('NpolarApiResource', require('./resource'));
npolarApi.service('npolarApiText', require('./text'));
npolarApi.factory('npolarApiAuthInterceptor', require('./auth_interceptor'));
NpolarUi.controller('npolarApiBaseController', require('./base_Controller'));
NpolarUi.controller('npolarApiEditController', require('./edit_Controller'));
npolarApi.directive('npolarJsonText', require('./json_text'));


angular.module('npolarUiLoginLogoutDirective', []).directive('loginLogout', require('./login_logout'));
angular.module('npdcNavDirective', []).directive('npdcNav', require('./nav'));
angular.module('npolarUiBreadcrumbsDirective', []).directive('appVersion', require('./breadcrumbs'));

angular.module('npolarUi', [
   'npolarUiBreadcrumbsDirective',
   'npolarUiLoginLogoutDirective',
   'npdcNavDirective'
]).value('version', '0.1');
