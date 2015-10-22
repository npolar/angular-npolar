/**
 * Angular service to communicate with [Gouncer](https://github.com/npolar/gouncer)
 */
'use strict';

// @ngInject
let Gouncer = function($log, $http, NpolarApiSecurity) {

  const base = NpolarApiSecurity.canonicalUri('/user');

  // Authenticate
  this.authenticate = function(email,password) {

    // Use HTTP Basic if email and password is passed
    if (email !== undefined && password !== undefined) {

      if (false === (/[@]/).test(email)) {
        email = email + '@npolar.no';
      }

      let request = { method: "GET", url: `${base}/authenticate`,
        headers: { "Authorization": "Basic " + NpolarApiSecurity.basicToken(email, password) }
      };
      return $http(request);

    } else if (NpolarApiSecurity.isJwtValid()) {
      return $http.get(`${base}/authenticate`);
    } else {
      throw new Error("Cannot authenticate: either JWT is invalid or username/password is blank");
    }
  };

  // One time password
  this.onetime = function(email) {
    return $http.post(`${base}/onetime`, { email });
  };

  return this;
};

module.exports = Gouncer;
