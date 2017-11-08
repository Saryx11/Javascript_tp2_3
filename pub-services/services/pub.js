const moment = require('moment');
const today = moment().format('dddd');
class Pub{
  constructor(name,owner,openDays,openHours,beers){
    this.name=name;
    this.owner=owner;
    this.openDays=openDays;
    this.openHours=openHours;
    this.beers=beers;
  }
  isOpen(day = today){
    return this.openDays.includes(day);
  }
}
module.exports={
  Pub: Pub
}
