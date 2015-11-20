'use strict';
var angular = require('angular');
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-route');

var npolarUi = angular.module('npolarUi', ['ngMaterial', 'ngRoute']);

npolarUi.controller('NpolarLoginController', require('./auth/LoginController'));
npolarUi.directive('npolarLoginLogout', require('./auth/loginLogout'));

npolarUi.controller('NpolarMessageController', require('./message/MessageController'));
npolarUi.controller('NpolarToastController', require('./message/ToastController'));
npolarUi.directive('npolarApiMessage', require('./message/message'));

npolarUi.filter('isodate', require('./filters/isodate'));
npolarUi.filter('year', require('./filters/year'));
npolarUi.filter('lang', require('./filters/lang'));

// i18n
npolarUi.service('NpolarLang', require('./i18n/LangService'));
npolarUi.service('NpolarTranslate', require('./i18n/TranslateService'));
npolarUi.value('npolarTranslateDictionary', require('./i18n/translateDictionary'));
npolarUi.filter('t', require('./i18n/translateFilter'));
//npolarUi.filter('title', require('./i18n/titleFilter')); @todo
npolarUi.directive('npolarLangMenu', require('./i18n/langMenuDirective'));

module.exports = npolarUi;

