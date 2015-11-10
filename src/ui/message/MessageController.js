'use strict';

// @ngInject
var MessageController = function ($scope, $mdToast, $timeout, NpolarApiMessage) {
  var tmpl = require('./_message_toast.html');

  var flashError = function(error) {
    $mdToast.show({
      controller: 'NpolarToastController',
      template: tmpl,
      hideDelay: 5000,
      action: "OK",
      locals: { explanation: error.message || error, msgType: 'error'},
      position: "top left"
    });
  };

  var flashInfo = function(message) {
    $mdToast.show({
      controller: 'NpolarToastController',
      template: tmpl,
      hideDelay: 5000,
      action: "OK",
      locals: { explanation: message, msgType: message.type || 'info' },
      position: "top left"
    });
  };

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

  NpolarApiMessage.on("npolar-error", function(error) {
    console.log("<- npolar-error", error);
    flashError(error);
  });

  NpolarApiMessage.on("npolar-api-error", function(error) {
    console.log("<- npolar-api-error", error);
    flashError(error);
  });
};

module.exports = MessageController;
