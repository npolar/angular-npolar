'use strict';

var LoginController = function ($scope, $http, npolarApiConfig, NpolarApiUser, NpolarApiSecurity) {

  $scope.login = function() {
    if (!$scope.user.username || !$scope.user.password) {
      return false;
    }
    var url = npolarApiConfig.base+"/user/authenticate/";

    var req = { method: "GET", url: url,
      headers: { "Authorization": "Basic " + NpolarApiSecurity.basicToken($scope.user) }
    };
    $http(req).success(function(data) {

        $scope.user.jwt = data.token;
        $scope.user.name = $scope.user.username;
        NpolarApiUser.setUser($scope.user);

    }).error(function(error){
      console.error(error);
      $scope.logout();
    });

  };

  $scope.logout = function() {
    NpolarApiSecurity.removeUser();
    $scope.user = {};
  };
};

module.exports = LoginController;
