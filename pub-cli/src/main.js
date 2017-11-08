const serv = require('pub-services');
function getListPub(){
  const liste = serv.services.pubService.listePubs();
  return liste;
}
function getPubsOuverts(){
  const liste = serv.services.pubService.listePubsOuvertsJours();
  return liste;
}

module.exports = {
getListPub: getListPub,
getPubsOuverts: getPubsOuverts
}
