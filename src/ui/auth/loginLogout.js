'use strict';

var loginLogout = function () {
  return {
   scope: {},
   controller: 'NpolarUiEditController',
   templateUrl: './_user.html',
   link: function(scope) {
      scope.user = {};
   }
  };
};

module.exports = loginLogout;
