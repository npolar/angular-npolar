'use strict';

var loginLogout = function () {
  return {
   scope: {},
   controller: 'NpolarUiEditController',
   template: require('./_user.html'),
   link: function(scope) {
      scope.user = {};
   }
  };
};

module.exports = loginLogout;
