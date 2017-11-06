#!/usr/bin/env node
var program = require('commander');
program
.version('1.0.0')
.option('-l, --list', 'Get the pubs list')
.option('-o,--open', 'Get the oppened pubs list')
.parse(process.argv);

if (program.list) {
  var liste = require('../src/main').getListPub();
  console.log(liste);
}
if(program.open){
  var listOuverts = require('../src/main').getPubsOuverts();
  console.log(listOuverts);

}
