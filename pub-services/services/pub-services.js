const Pub = require('./Pub.js');
const pubs = require('../mocks/pubs.json');

const pubList = pubs.map(pub => new Pub(pub));


function listePubs(){
  return pubList;
}

function listePubsOuvertsJours(){
  return pubList.filter(pub=>pub.isOpen());
}

module.exports={
  listePubs,
  listePubsOuvertsJours
}
