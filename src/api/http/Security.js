'use strict';

/**
 * @ngInject
 */
var Security = function($log, base64, jwtHelper, npolarApiConfig, NpolarApiUser) {
  
  const authenticateUri = 'https://'+ npolarApiConfig.base.split("//")[1] +'/user/authenticate';
  
  const actions = ['create', 'read', 'update', 'delete'];

  this.authorization = function () {

    let user = NpolarApiUser.getUser();
   
    if ('basic' === npolarApiConfig.security.authorization) {
      return 'Basic '+ this.basicToken(user);
    } else if ('jwt' === npolarApiConfig.security.authorization) {
      return 'Bearer '+ user.jwt;
    } else {
      console.error('NpolarApiSecurity authorization not implemented: ' + npolarApiConfig.security.authorization);
      return '';
    }
  };

  this.basicToken = function(user) {
    return base64.encode(user.username + ':' + user.password);
  };

  this.decodeJwt = function(jwt) {
    return jwtHelper.decodeToken(jwt);
  };

  this.getUser = function() {
    try {
      return NpolarApiUser.getUser();
    } catch (e) {
      return {};
    }
  };
  
  this.hasGroup = function(group) {
    let user = this.getUser();
    if (!user.groups) {
      return false;
    }
    return user.groups.includes(group);
  };
  
  this.getJwt = function() {
    return this.getUser().jwt;
  };
  
  this.isAuthenticated = function() {
    return this.isJwtValid();
  };
  
  // Is current user authorized to perform action on the provided uri?
  // Checks if the user is authorized *at the current time* - ie. always returns false if not authenticated
  // @param action ["create" | "read" | "update" | "delete"] => actions
  this.isAuthorized = function(action, uri) {
    
    if (false === actions.includes(action)) {
      $log.error(`isAuthorized(${action}, ${uri}) called with invalid action`);
      return false;
    }
    
    // @todo support relative URIs
    // @todo support just ngResource or NpolarApiResurce => get path from that
    // @todo fallback to relative application path
    
    if (uri === undefined || false === (/\/\//).test(uri)) {
      $log.error(`isAuthorized(${action}, ${uri}) called with invalid URI`);
      return false;
    }
    
    if (uri instanceof String && (/^\/[^/]/).test(uri)) {
    //  uri = npolarApiConfig.base + uri;
      console.log(uri);
    }    
    uri = uri.split('//')[1];
    
    // First, verify login
    if (false === this.isAuthenticated()) {
      return false;
    }
    // Then check permissions
    return this.isPermitted(action, uri, this.getUser());
  };
  
  this.isJwtExpired = function() {
    let jwt = this.getJwt();
    
    if (jwt === undefined || jwt === null || !angular.isString(jwt)) {
      return true;
    }
    
    try {  
      return ((Date.now() / 1000) > this.decodeJwt(jwt).exp );
    } catch (e) {
      return true;
    }
  };
  
  
  // Check permissions for action on uri for any user
  // @see isAuthorized()
  this.isPermitted = function(action, uri, user) {
   
    uri = uri.split('//')[1];
    
    // 1. Find all systems URIs matching current URI or *
    let systems = user.systems.filter(
      system => {
        
        system.uri = system.uri.split('//')[1];
        
        if (system.uri === uri) {
          return true;   
        } else if (system.uri === npolarApiConfig.base.split('//')[1]+"/*") {
          return true;
        } else {
          return false;
        }
      }
    );

    // 3. Does any matching system include the right to perform action?
    systems = systems.filter(
      system => {
        return system.rights.includes(action);
      }
    );
    
     // User is authorized if we are left with at least 1 system
    let isPermitted = (systems.length > 0);
    //console.log(`isAuthorized(${action}, ${uri})`, isAuthorized);
    return isPermitted;
  };
  
  
  this.isJwtValid = function() {
    return (false === this.isJwtExpired());
  };
    
  this.notAuthenticated = () => { return !this.isAuthenticated(); };
  
  this.removeUser = function() {
    return NpolarApiUser.removeUser();
  };
  
  this.setUser = function(user) {
    return NpolarApiUser.setUser(user);
  };

};

module.exports = Security;