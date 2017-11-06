var pubs = require('../mocks/pubs.json');
var moment = require('moment');
//var pubsOuverts=[];
var today = moment().format('dddd');
function listePubs(){
  return pubs;
}
function listePubsOuvertsJours(){
  var pubsOuverts = pubs.filter(openToday)
  return pubsOuverts;
  /*for(pub of pubs ){

    if(pub.openDays.includes(today)){
      pubsOuverts.push(pub);
      return pubsOuverts;
    }
  }*/
}
function openToday(element){
  return element.openDays.includes(today);
}
module.exports={
  listePubs: listePubs,
  listePubsOuvertsJours: listePubsOuvertsJours
}
