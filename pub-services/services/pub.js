const moment = require('moment');
const Owner = require('./Owner.js');
const Beer = require('./Beer.js');

class Pub{
  constructor({name,owner,openDays,openHours,beers}){
    this.name=name;
    this.owner=new Owner(owner);
    this.openDays=openDays;
    this.openHours=openHours;
    this.beers=beers.map(beer=> new Beer(beer));

  }
  isOpen(day = moment().format('dddd')){
    return this.openDays.includes(day);
  }
}

module.exports = Pub;
