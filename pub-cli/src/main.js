let serv = require('pub-services');
function getListPub(){
  let liste = serv.services.pubService.listePubs();
  return liste;
}
function getPubsOuverts(){
  let liste = serv.services.pubService.listePubsOuvertsJours();
  return liste;
}

module.exports = {
getListPub: getListPub,
getPubsOuverts: getPubsOuverts
}
