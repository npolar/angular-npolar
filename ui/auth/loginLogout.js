'use strict';

var loginLogout = function (NpolarApiSecurity) {
  return {
   scope: {},
   controller: 'NpolarUiLoginController',
   templateUrl: 'angular-npolar/ui/auth/_user.html',
   link: function(scope) {
      scope.user = NpolarApiSecurity.getUser();
   }
  };
};

module.exports = loginLogout;
