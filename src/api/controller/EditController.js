'use strict';
/**
 * NpolarEditController extends [NpolarBaseController](https://github.com/npolar/angular-npolar/blob/master/src/api/controller/BaseController.js) with scope methods for REST-style document editing (using ngResource)
 * and [formula](https://github.com/npolar/formula)-bound controller action methods, like $scope.edit()
 *
 * For following ngResource-bound scope methods are defined
 * - create()
 * - update()
 * - delete()
 * - save()
 *
 * Usage example: https://github.com/npolar/npdc-dataset/blob/ae0dc74d33708c76ac88fc8f0f492ac14759cae7/src/edit/DatasetEditController.js
 *
 */

let EditController = function($scope, $location, $route, $routeParams, $controller,
  Gouncer, npolarApiConfig, NpolarApiSecurity, NpolarMessage) {
    'ngInject';

  // Extend NpolarBaseController
  $controller('NpolarBaseController', {
    $scope: $scope
  });

  $scope.document = null;
  $scope._error = false;

  // Refresh JWT
  let refreshJwt = function() {
    if (NpolarApiSecurity.isAuthenticated()) {
      Gouncer.authenticate().then(function(response) {
        NpolarApiSecurity.setJwt(response.data.token);
      });
    }
  };

  // Formula compatible save
  // SHOULD NOT BE CALLED DIRECTLY, FORMULA DOES THE VALIDATION!!
  let save = function (model) {
    if (!model._rev) {
      return $scope.create(model);
    } else {
      return $scope.update(model);
    }
  };

  // Set formula model
  let updateFormulaInstance = function (model) {
    $scope.formula.setModel(model);
  };

  // jshint -W016, -W116
  let generateUUID = function (){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c == 'x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  };

  // Create action, ie. save document and redirect to new URI
  $scope.create = function(model) {
    $scope.document = null;
    return $scope.resource.save(model, function(document) {
      let uri = $location.path().replace(/\/__new(\/edit)?$/, '/' + document.id + '/edit');
      $scope._error = false;
      updateFormulaInstance(document);
      $scope.document = document;
      refreshJwt();
      $location.path(uri);
    }, function(errorData) {
      $scope._error = errorData.statusText;
    });
  };

  // Edit action, ie. fetch document and edit with formula
  $scope.editAction = function() {
    $scope._error = false;
    let docDeferred = $scope.resource.fetch($routeParams, function(document) {
      updateFormulaInstance(document);
      $scope.document = document;
    }, function(errorData) {
      $scope._error = errorData.statusText;
    });
    return docDeferred;
  };

  // New action, ie. create new document and edit with formula
  $scope.newAction = function(document={}) {
    var doc = new $scope.resource(document);
    updateFormulaInstance(doc);
    $scope.document = doc;
  };

  // Edit (or new) action
  $scope.edit = function(generateId) {
    $scope.formula.setOnSave(save);

    if ($routeParams.id === '__new') {
      let doc;
      if (generateId) {
        doc = {
          id: generateUUID()
        };
      }
      return $scope.newAction(doc);
    } else {
      return $scope.editAction();
    }
  };

  // PUT document, ie resource update
  $scope.update = function(model) {
    $scope.document = null;
    $scope._error = false;
    return $scope.resource.update(model, function(document) {
      updateFormulaInstance(document);
      $scope.document = document;
      $scope.i = 0;
      refreshJwt();
      $route.reload();
    }, function(errorData) {
      $scope._error = errorData.statusText;
    });
  };

  // DELETE document, ie. resource remove
  $scope.delete = function() {
    let id = $scope.document.id;
    $scope.document = null;
    $scope._error = false;
    return $scope.resource.remove({id}, function() {
      refreshJwt();
      $location.path('/');
      $route.reload();
    }, function(errorData) {
      $scope._error = errorData.statusText;
    });
  };

  $scope.save = function () {
    try {
      $scope.formula.save();
    } catch (e) {
      NpolarMessage.error("Document not valid, please review " + (e || []).join(", "));
    }
  };

};

module.exports = EditController;
