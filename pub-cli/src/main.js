var serv = require('pub-services');
function getListPub(){
  var liste = serv.services.pubService.listePubs();
  return liste;
}
function getPubsOuverts(){
  var liste = serv.services.pubService.listePubsOuvertsJours();
  return liste;
}

module.exports = {
getListPub: getListPub,
getPubsOuverts: getPubsOuverts
}
