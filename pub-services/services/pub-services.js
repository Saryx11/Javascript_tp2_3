const pubclass = require('./pub.js');
const pubs = require('../mocks/pubs.json');

let pubList=[];
for(p of pubs){
  pubList.push(new pubclass.Pub(p.name,p.owner,p.openDays,p.openHours,p.beers));
}

function listePubs(){
  return pubList;
}

function listePubsOuvertsJours(){
  const pubsOuverts = pubList.filter(pub=>pub.isOpen());
  return pubsOuverts;
  /*for(pub of pubs ){

    if(pub.openDays.includes(today)){
      pubsOuverts.push(pub);
      return pubsOuverts;
    }
  }*/
}
/*function openToday(element){
  return element.isOpen();
}*/
module.exports={
  listePubs: listePubs,
  listePubsOuvertsJours: listePubsOuvertsJours
}
