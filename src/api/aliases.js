'use strict';

// Aliases => (official) email address
// Use name property only for people/entities without official email (ie. not in npolarPeople)

let aliases = [
  { email: 'external@data.npolar.no', alias: ['external@data.npolar.no'], name: 'System'},
  { email: 'stein.tronstad@npolar.no', alias: ['stein@npolar.no', 'steint@npolar.no', 'stein', 'steint', 'st', 's']},
  { email: 'stein.orjan.nilsen@npolar.no', alias: ['steinnilsen@npolar.no', 'steinnilsen']},
  { email: 'are.bjordal@npolar.no', alias: ['are@npolar.no', 'are']},
  { email: 'polona.itkin@npolar.no', alias: ['polona@npolar.no', 'polona']},
  { email: 'ermias.beyene.tesfamariam@npolar.no', alias: ['ermias@npolar.no', 'ermias.tesfamariam@npolar.no', 'ermias']},
  { email: 'conrad.helgeland@npolar.no', alias: ['conrad@npolar.no', 'conrad', 'ch', 'c']},
  { email: 'ruben.dens@npolar.no', alias: ['ruben@npolar.no', 'ruben', 'rd', 'r']},
  { email: 'dag.vongraven@npolar.no', alias: ['vongraven@npolar.no']},
  { email: 'trevor.lovett@npolar.no', name: 'Trevor Lovett', alias: ['trevor@npolar.no', 'trevor']},
  { email: 'christian.lydersen@npolar.no', alias: ['lydersen@npolar.no', 'lydersen']},
  { email: 'stephen.hudson@npolar.no', alias: ['hudson@npolar.no', 'hudson']},
  { email: 'cesar.deschamps.berger@npolar.no', name: 'César Deschamps-Berger', alias: ['cesar@npolar.no', 'cesar']}
];

module.exports = aliases;