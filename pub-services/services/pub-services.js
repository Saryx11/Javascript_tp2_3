let pubs = require('../mocks/pubs.json');
let moment = require('moment');
//var pubsOuverts=[];
let today = moment().format('dddd');
function listePubs(){
  return pubs;
}
function listePubsOuvertsJours(){
  let pubsOuverts = pubs.filter(openToday)
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
