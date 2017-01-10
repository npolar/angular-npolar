'use strict';

module.exports = function(npolarPeople, npolarAliases) {
  'ngInject';

  return function(email) {
    let name;

    // Alias?
    let a = npolarAliases.find(a => a.alias.includes(email));
    if (a) {
      if (a.name) {
        name = a.name;
      } else {
        email = a.email; // Lookup in next block
      }
    }

    // In people <= Person API?
    let p = npolarPeople.people.find(p => p.email === email);
    if (p && p.first_name && p.last_name) {
      name = `${p.first_name} ${p.last_name}`;
    } else {
      // Bail out => return input
      name = email;
    }

    return name;
  };
};