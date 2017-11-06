var pubs = require('../mocks/pubs.json');
var moment = require('moment');
var pubsOuverts=[];
function listePubs(){
  return pubs;
}
function listePubsOuvertsJours(){
  var today = moment().format('dddd');
  var tomorrow = moment().add(1,'d').format('dddd');
  for(pub of pubs ){
    if(pub.openDays.includes(today)){
      pubsOuverts.push(pub);
      return pubsOuverts;
    }
  }
}
module.exports={
  listePubs: listePubs,
  listePubsOuvertsJours: listePubsOuvertsJours
}
