import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CalculImpot from './data/CalculImpot'
import CalculImpot_JLM from './data/CalculImpot_JLM'

var assert = require('assert');

it('should get the correct IR', () => {

  var salaireMensuelNetDuFoyer = 15000;
  var retraiteMensuelle = 0;
  var allocationsChomageMensuelle = 0;

  var marieOuPacse = 1;
  var nombreEnfantsACharge = 2;

  var result = CalculImpot(salaireMensuelNetDuFoyer, retraiteMensuelle, allocationsChomageMensuelle, marieOuPacse, nombreEnfantsACharge);

  var result2 = CalculImpot(salaireMensuelNetDuFoyer, retraiteMensuelle, allocationsChomageMensuelle, marieOuPacse, nombreEnfantsACharge);

  assert.equal(result.IR, 3684)
  assert.equal(result.CSG, 1415)

  assert.equal(result2.IR, 3684)
  assert.equal(result2.CSG, 1415)
});


it('should get the correct IR JLM', () => {

  var salaireMensuelNetDuFoyer = 2000;
  var retraiteMensuelle = 0;
  var allocationsChomageMensuelle = 0;

  var marieOuPacse = 1;
  var nombreEnfantsACharge = 2;

	

  var result = CalculImpot_JLM(salaireMensuelNetDuFoyer, retraiteMensuelle, allocationsChomageMensuelle, marieOuPacse, nombreEnfantsACharge);

 // var result2 = CalculImpot(salaireMensuelNetDuFoyer, retraiteMensuelle, allocationsChomageMensuelle, marieOuPacse, nombreEnfantsACharge);

  assert.equal(result.IR, -141)
  assert.equal(result.CSG, -141)
/*
  assert.equal(result2.IR, 3684)
  assert.equal(result2.CSG, 1415)*/
});