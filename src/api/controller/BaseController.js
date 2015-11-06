'use strict';
/**
* NpolarBaseController is meant to be the parent of a safe controller,
* ie. a controller dealing with only with presentation, search, etc.
* See also NpolarEditController.
*
*/

// @ngInject
var BaseController = function($scope, $location, $rootScope, $routeParams, $http, NpolarApiSecurity) {

  let init = function() {
    $scope.security = NpolarApiSecurity;
  };

  // Show action, ie. fetch document and inject into scope
  $scope.show = function() {
    return $scope.resource.fetch($routeParams, function(document) {
      $scope.document = document;
      $rootScope.$broadcast('npolar-document', document);
    });
  };

  // Search action, ie. fetch feed and inject into scope
  $scope.search = function(query) {
    let fullQuery = Object.assign({}, $location.search(), query);
    return $scope.resource.feed(fullQuery, function(response) {
      $scope.feed = response.feed;
      $rootScope.$broadcast('npolar-feed', response.feed);
    });
  };

  init();

};

module.exports = BaseController;
