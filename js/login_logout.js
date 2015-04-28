'use strict';

var LoginLogout = function () {
  return {
   scope: {},
   controller: 'npolarApiEditController',
   templateUrl: '/node_modules/angular-npolar/html/_user.html',
   link: function(scope) {
      scope.user = {};
   }
  };
};

module.exports = LoginLogout;
