'use strict';
var angular = require('angular');
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-route');

var npolarUi = angular.module('npolarUi', ['ngMaterial', 'ngRoute']);
npolarUi.value('version', '0.1');

npolarUi.controller('NpolarLoginController', require('./auth/LoginController'));
npolarUi.directive('npolarLoginLogout', require('./auth/loginLogout'));

npolarUi.controller('NpolarMessageController', require('./message/MessageController'));
npolarUi.controller('NpolarToastController', require('./message/ToastController'));
npolarUi.directive('npolarApiMessage', require('./message/message'));

npolarUi.filter('isodate', require('./filters/isodate'));
npolarUi.filter('year', require('./filters/year'));
npolarUi.filter('lang', require('./filters/lang'));

module.exports = npolarUi;
