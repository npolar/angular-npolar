/**
 *
 *
 *
 *
 */
'use strict';
require('angular-utf8-base64');

/**
 * @ngInject
 */
var Security = function(base64, jwtHelper, npolarApiConfig, npolarApiUser) {

  this.authorization = function () {

    var user = npolarApiUser.getUser();

    if ("basic" === npolarApiConfig.security.authorization) {
      return "Basic "+ this.basicToken(user);
    } else if ("jwt" === npolarApiConfig.security.authorization) { // or bearer?
      return "Bearer "+ this.jsonWebToken(user);
    } else {
      console.error("npolarApiSecurity authorization not implemented: " + npolarApiConfig.security.authorization);
      return "";
    }
  };

  this.basicToken = function(user) {
  return base64.encode(user.username + ':' + user.password);
  };

  this.jsonWebToken = function(user) {
    return user.jwt;
  };

  this.decodeJwt = function(jwt) {
    return jwtHelper.decodeToken(jwt);
  };

  this.user = function() {
    // if user not void and valid => setUser
    return this.getUser();
  };

  this.getUser = function() {
    return npolarApiUser.getUser();
  };

  this.setUser = function(user) {
    // if valid... @todo
    return npolarApiUser.setUser(user);
  };

  this.removeUser = function() {
    return npolarApiUser.removeUser();
  };

};

module.exports = Security;
