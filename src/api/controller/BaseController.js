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
  
  const authenticateUri = "https://"+ npolarApiConfig.base.split("//")[1] +"/user/authenticate";

  let init = function() {
    $scope.base = npolarApiConfig.base;
    //$scope.environment = npolarApiConfig.environment;
    //$scope.lang = npolarApiConfig.lang;
    //$scope.user = NpolarApiSecurity.getUser();
    $scope.security = NpolarApiSecurity;
  };
  
  $scope.refreshJwt = function() {
    let request = { method: "GET", url: authenticateUri,
      headers: { "Authorization": `Bearer ${ $scope.security.getUser().jwt }` }
    };
    $log.debug(request);
    
    $http(request).success(response => {
        
        //$log.debug(response);
        //NpolarApiMessage.emit("npolar-api-info", 'JWT refreshed');
        
      }).error(response => {
      
        // NpolarApiMessage.emit("npolar-api-error", 'Session expired, please log in again');
      }
    );
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

  // Deprecated
  //$scope.getLang = function() {
  //  return $scope.lang;
  //};
  //
  //$scope.setLang = function(lang) {
  //  $scope.lang = lang;
  //  $scope.title = $scope.getTitle(lang);
  //};
  //
  //$scope.getTitle = function(lang) {
  //  return _.where($scope.document.titles,
  //    { lang: lang }
  //  )[0].text || $scope.document.titles[0].text;
  //};
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
    console.debug($scope.feed.links);
    let nextLink = $scope.feed.links.find(link => { return (link.rel === "next"); });
    if (nextLink.href) {
        $http.get(nextLink.href.replace(/^https?:/, "")).success(function(response) {
        response.feed.entries = $scope.feed.entries.concat(response.feed.entries);
        $scope.feed = response.feed;
      });
    }
  };
  

  init();
};

module.exports = BaseController;
