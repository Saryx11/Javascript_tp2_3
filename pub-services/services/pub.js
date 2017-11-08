const moment = require('moment');
class Pub{
  constructor(name,owner,openDays,openHours,beers){
    this.name=name;
    this.owner=owner;
    this.openDays=openDays;
    this.openHours=openHours;
    this.beers=beers;
  }
  isOpen(day = moment().format('dddd')){
    return this.openDays.includes(day);
  }
}

module.exports={
  Pub: Pub
}
