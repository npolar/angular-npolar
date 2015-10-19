/**
* NpolarBaseController is meant to be the parent of a safe controller,
* ie. a controller dealing with only with presentation, search, etc.
* See also NpolarEditController.
*
* Usage example: 
*/

'use strict';
var _ = require('lodash');

// @ngInject
var BaseController = function($scope, $location, $log, $route, $routeParams, $window, $controller, $http,
  npolarApiConfig, NpolarApiMessage, NpolarApiSecurity, NpolarApiUser, NpolarApiResource) {
  
  let init = function() {
    $scope.security = NpolarApiSecurity;
  };
  
  // Show action, ie. fetch document and inject into scope
  $scope.show = function() {

    return $scope.resource.fetch($routeParams, function(document) {
      $scope.document = document;
    });
  };
  
  // Search action, ie. fetch feed and inject into scope
  $scope.search = function(query) {
    return $scope.resource.feed(query, function(response) {
      $scope.feed = response.feed;
    });
  };

  $scope.showNext = function() {
    if (!$scope.feed) {
      return false;
    }
    return ($scope.feed.entries.length < $scope.feed.opensearch.totalResults);
  };
  
  $scope.next = function() {
    if (!$scope.feed.links) {
      return;
    }

    let nextLink = $scope.feed.links.find(link => { return (link.rel === "next"); });
    if (nextLink.href) {
      $http.get(nextLink.href.replace(/^https?:/, '')).success(function(response) {
        response.feed.entries = $scope.feed.entries.concat(response.feed.entries);
        $scope.feed = response.feed;
      });
    }
  };
  

  init();
  
};

module.exports = BaseController;
