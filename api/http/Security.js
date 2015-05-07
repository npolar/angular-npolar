'use strict';

/**
 * @ngInject
 */
var Security = function(base64, jwtHelper, npolarApiConfig, NpolarApiUser) {

  this.authorization = function () {

    var user = NpolarApiUser.getUser();

    if ('basic' === npolarApiConfig.security.authorization) {
      return 'Basic '+ this.basicToken(user);
    } else if ('jwt' === npolarApiConfig.security.authorization) { // or bearer?
      return 'Bearer '+ this.jsonWebToken(user);
    } else {
      console.error('NpolarApiSecurity authorization not implemented: ' + npolarApiConfig.security.authorization);
      return '';
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
    return NpolarApiUser.getUser();
  };

  this.setUser = function(user) {
    // if valid... @todo
    return NpolarApiUser.setUser(user);
  };

  this.removeUser = function() {
    return NpolarApiUser.removeUser();
  };

};

module.exports = Security;
