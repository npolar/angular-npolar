'use strict';
/**
* NpolarBaseController is meant to be the parent of a safe controller,
* ie. a controller dealing with only with presentation, search, etc.
* See also NpolarEditController.
*
*/

// @ngInject
var BaseController = function($scope, $location, $route, $routeParams, $window, $controller, $http,
  npolarApiConfig, NpolarApiSecurity, NpolarApiUser, NpolarApiResource) {

  let init = function() {
    $scope.base = npolarApiConfig.base;
    $scope.environment = npolarApiConfig.environment;
    //$scope.lang = npolarApiConfig.lang;
    $scope.user = NpolarApiSecurity.getUser();
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
    let fullQuery = Object.assign($location.search(), query);
    $location.search(fullQuery);
    return $scope.resource.feed(fullQuery, function(response) {
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
