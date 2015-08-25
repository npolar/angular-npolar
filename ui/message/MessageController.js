'use strict';

// @ngInject
var MessageController = function ($scope, $route, $http, $location, $mdToast, npolarApiConfig, NpolarApiUser, NpolarApiSecurity, NpolarApiMessage) {
  
  var flashError = function(message) {

    let explanation = "";
    
    if (message.body && message.body.error && message.body.error.explanation ) {
      explanation = message.body.error.explanation;
    } else {
      explanation = message;
    }
    
    $mdToast.show({
      controller: 'ToastCtrl',
      templateUrl: 'angular-npolar/ui/message/_message_toast.html',
      hideDelay: 30000,
      action: "OK",
      locals: { message: message, explanation: explanation },
      position: "top left"
    }).then(function() {
      $route.reload();
    });
  };
  
  var flashInfo = function(message) {
    
    let explanation = "";
    
    explanation = message;
    
    
    $mdToast.show({
      controller: 'ToastCtrl',
      templateUrl: 'angular-npolar/ui/message/_message_toast.html',
      hideDelay: 5000,
      action: "OK",
      locals: { message: message, explanation: explanation },
      position: "bottom right"
    }).then(function() {
      $route.reload();
    });
  };
  
  
  NpolarApiMessage.on("npolar-api-info", function(response) {
    console.log(response);
    if ("POST" === response.method || "PUT" === response.method) {
      flashInfo(`Saved document at ${ new Date(response.time).toLocaleTimeString() }`);
    }
  });
  
  NpolarApiMessage.on("npolar-login", function(user) {
    flashInfo(`${user.name} logged in`);
  });
  
  NpolarApiMessage.on("npolar-logout", function(user) {
    flashInfo(`${user.name} logged out`);    
  });
    
  NpolarApiMessage.on("npolar-api-error", function(message) {
    flashError(message);
  });
  
};

module.exports = MessageController;