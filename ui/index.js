'use strict';
var angular = require('angular');

var npolarUi = angular.module('npolarUi', []);
npolarUi.value('version', '0.1');

npolarUi.controller('NpolarUiLoginController', require('./auth/LoginController'));

npolarUi.directive('npolarUiLoginLogout', require('./auth/loginLogout'));
npolarUi.directive('npolarUiNpdcNav', require('./navigation/nav'));
npolarUi.directive('npolarUiAppVersion', require('./breadcrumbs/breadcrumbs'));

module.exports = npolarUi;
