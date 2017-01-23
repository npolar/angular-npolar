'use strict';

// hudson
// lydersen
// Alias to official email address
// Use name property for people/entities without official email (ie. not in npolarPeople)

let aliases = [
  { email: 'external@data.npolar.no', alias: ['external@data.npolar.no'], name: 'System'},
  { email: 'stein.tronstad@npolar.no', alias: ['stein@npolar.no', 'steint@npolar.no']},
  { email: 'are.bjordal@npolar.no', alias: ['are@npolar.no', 'are']},
  { email: 'polona.itkin@npolar.no', alias: ['polona@npolar.no', 'polona']},
  { email: 'ermias.beyene.tesfamariam@npolar.no', alias: ['ermias@npolar.no', 'ermias.tesfamariam@npolar.no', 'ermias']},
  { email: 'conrad.helgeland@npolar.no', alias: ['conrad@npolar.no', 'conrad']},
  { email: 'ruben.dens@npolar.no', alias: ['ruben@npolar.no', 'ruben']},
  { email: 'dag.vongraven@npolar.no', alias: ['vongraven@npolar.no']},
  { email: 'trevor.lovett@npolar.no', name: 'Trevor Lovett', alias: ['trevor@npolar.no', 'trevor']},
  { email: 'cesar.deschamps.berger@npolar.no', name: 'César Deschamps-Berger', alias: ['cesar@npolar.no', 'cesar']}
];

module.exports = aliases;