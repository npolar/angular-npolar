'use strict';

// @ngInject
var MessageController = function ($scope, $route, $http, $location, $mdToast, npolarApiConfig, NpolarApiUser, NpolarApiSecurity, NpolarApiMessage) {

  //var flashError = function(message) {
  //
  //  let explanation = "";
  //
  //  if (message.body && message.body.error && message.body.error.explanation ) {
  //    explanation = message.body.error.explanation;
  //  } else if (message.body && message.body.reason) {
  //    explanation = message.body.reason;
  //  } else {
  //    explanation = message;
  //  }
  //
  //  $mdToast.show({
  //    controller: 'ToastCtrl',
  //    templateUrl: 'angular-npolar/src/ui/message/_message_toast.html',
  //    hideDelay: 5000,
  //    action: "OK",
  //    locals: { message: message, explanation: explanation },
  //    position: "top left"
  //  }).then(function() {
  //    //$route.reload();
  //  });
  //};

  var flashInfo = function(message) {
    let explanation = message;

    $mdToast.show({
      controller: 'ToastCtrl',
      templateUrl: 'angular-npolar/src/ui/message/_message_toast.html',
      hideDelay: 5000,
      action: "OK",
      locals: { message: message, explanation: explanation },
      position: "bottom left"
    }).then(function() {
      // noop
    });
  };

  var flashError = flashInfo;

  NpolarApiMessage.on("npolar-info", function(message) {
    console.log("<- npolar-info", message);
    flashInfo(message);
  });

  NpolarApiMessage.on("npolar-api-info", function(response) {
    console.log("<- npolar-api-info", response);
    if ("POST" === response.method || "PUT" === response.method) {
      let time = new Date(response.time);
      flashInfo(`Saved at ${ time.toISOString() }`);
    } else if ("DELETE" === response.method) {
      flashInfo(`Deleted document ${ response.uri } at ${ response.time }`);
    }
  });

  NpolarApiMessage.on("npolar-login", function(user) {
    flashInfo(`${user.name} logged in`);
  });

  NpolarApiMessage.on("npolar-logout", function(user) {
    flashInfo(`${user.name} logged out`);
  });

  NpolarApiMessage.on("npolar-api-error", function(message) {
    console.log("<- npolar-api-error", message);

    if (401 === message.status) {
      flashError("Login failed, please check your username and password");
    } else if (403 === message.status) {
      flashError("Not authorized");
    } else if (404 === message.status) {
      flashError("Not found");
    } else {
      flashError(message, message.body);
    }
  });

  $scope.closeToast = function () {
    $mdToast.hide();
  };
  // 401 username / password failed
  // 403 forbidden => not permitted
  // token expired

};

module.exports = MessageController;
