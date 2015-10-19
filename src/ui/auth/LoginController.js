'use strict';

/**
 * @ngInject
 */
var LoginController = function ($rootScope, $scope, $http, $route, $log, $location, Gouncer, NpolarApiMessage, NpolarApiSecurity) {

  $scope.security = NpolarApiSecurity;
  
  // After login: store user and JWT in local storage
  let onLogin = function(response) {
    
    NpolarApiSecurity.setJwt(response.data.token);
    NpolarApiMessage.emit("npolar-login", NpolarApiSecurity.getUser());
    $route.reload();
    
  };
  
  let onLoginError = function(response) {
    NpolarApiMessage.emit("npolar-api-error", "Login failed");
    $route.reload();
  };

  // Login (using username and password)
  $scope.login = function(email, password) {
    Gouncer.authenticate(email, password).then(onLogin, onLoginError);
  };

  $scope.logout = function() {
    var who = NpolarApiSecurity.getUser();
    NpolarApiMessage.emit("npolar-logout", who);

    NpolarApiSecurity.removeUser();
    $location.path('/');
    $route.reload();

  };

};

module.exports = LoginController;