#!/usr/bin/env node
const program = require('commander');
program
.version('1.0.0')
.option('-l, --list', 'Get the pubs list')
.option('-o,--open', 'Get the oppened pubs list')
.parse(process.argv);

if (program.list) {
  const liste = require('../src/main').getListPub();
  console.log(liste.map(pub=>pub.name));
}
if(program.open){
  const listOuverts = require('../src/main').getPubsOuverts();
  //console.log(listOuverts.map(pub=>pub.name));
  console.log(listOuverts);
}
