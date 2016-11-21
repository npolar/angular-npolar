'use strict';

function Request(NpolarApiSecurity) {
  
  'ngInject';
  
  let self = this;
  
  self.factory = () => new XMLHttpRequest();
  
  self.head = (request, uri, listener, event='load') => {
    request.addEventListener(event, listener);
    request.open('HEAD', uri);
    request.setRequestHeader('Authorization', NpolarApiSecurity.authorization());
    request.send();
  }; 
}
module.exports = Request;