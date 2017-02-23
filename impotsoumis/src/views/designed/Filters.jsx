import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import SimuActions from '../../actions/SimuActions';
import HelpPopin from './HelpPopin.jsx';
import './Filters.css';

let timerGA;

export default ({ chomage, isMarried, net, numberOfChildren, retraite }) => {
  const childrenOpt = [];
  for (var i = 0; i < 10; i++) {
    childrenOpt.push({
      value: i,
      label: i
    });
  }

  const onlyNumber = (e) => {
    if (e.target.value.length > 8) {
      e.target.value = e.target.value.slice(0, 8);
    }
  };

  const timerGATracker = (data) => {
    if (timerGA) {
      clearTimeout(timerGA);
    }
    if (data.net !== '') {
      timerGA = setTimeout(() => {
        window.ga('send', {
          hitType: 'event',
          eventCategory: 'Simulateur',
          eventAction: 'Simulation',
          eventLabel: `Salaire net : ${data.net} | Situation familiale : ${(data.isMarried) ? 'Marié/Pacsé' : 'Célibataire'} | Nbr d'enfants à charge : ${data.numberOfChildren}`
        })
      }, 3000);
    }
  }

  return (
    <div className="Filters">
      <HelpPopin />

      <div className="content">
        <div className="revenu">
          <label htmlFor="revenu">Salaire net <strong>mensuel</strong> du foyer</label>
          <br/>
          <input
            className={(net === 0) ? 'empty' : ''}
            id="revenu"
            placeholder="en €/mois"
            onChange={(e => {
              SimuActions.netChanged(e.target.value);
              timerGATracker({
                net: e.target.value,
                isMarried,
                numberOfChildren
              });
            })}
            onInput={onlyNumber}
            type="number"
            value={(net === 0) ? "" : net}
          />
        </div>
        <div className="situation">
          <p>Situation familiale</p>
          <input
            checked={(isMarried === 1)}
            id="marie"
            name="situation"
            onChange={() => {
              SimuActions.maritalStatusChanged(1);
              timerGATracker({
                isMarried: 1,
                net,
                numberOfChildren
              });
            }}
            type="radio"
            value={1}
          />
          <label htmlFor="marie">Marié/Pacsé</label>
          <input
            checked={(isMarried === 0)}
            id="celibataire"
            name="situation"
            onChange={() => {
              SimuActions.maritalStatusChanged(0);
              timerGATracker({
                isMarried: 0,
                net,
                numberOfChildren
              });
            }}
            type="radio"
            value={0}
          />
          <label htmlFor="celibataire">Célibataire</label>
        </div>
        <div className="enfant">
          <p>Nombre d'enfants à charge</p>
          <Select
            clearable={false}
            onChange={(option) => {
              SimuActions.numberofChildrenChanged(option.value);
              timerGATracker({
                numberOfChildren: option.value,
                net,
                isMarried
              });
            }}
            options={childrenOpt}
            placeholder=""
            searchable={false}
            value={numberOfChildren}
          />
        </div>
      </div>

      {/*
      <div className="left">
        <div className="revenu">
          <label htmlFor="revenu">Salaire net <strong>mensuel</strong> du foyer</label>
          <br/>
          <input
            id="revenu"
            placeholder="en €/mois"
            onChange={(e) => SimuActions.netChanged(e.target.value)}
            onInput={onlyNumber}
            type="number"
            value={(net === 0) ? "" : net}
          />
        </div>
        <div className="pension">
          <div className="left">
            <label htmlFor="retraite">Pensions de retraite</label>
            <input
              id="retraite"
              placeholder="en €/mois"
              type="number"
              onChange={(e) => SimuActions.retraiteChanged(e.target.value)}
              onInput={onlyNumber}
              value={(retraite === 0) ? "" : retraite}
            />

          </div>
          <div className="right">
            <label htmlFor="chomage">Allocations chômage</label>
            <br/>
            <input
              id="chomage"
              placeholder="en €/mois"
              type="number"
              onChange={(e) => SimuActions.chomageChanged(e.target.value)}
              onInput={onlyNumber}
              value={(chomage === 0) ? "" : chomage}
            />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="situation">
          <p>Situation familiale</p>
          <input
            checked={(isMarried === 1)}
            id="marie"
            name="situation"
            onChange={() => SimuActions.maritalStatusChanged(1)}
            type="radio"
            value={1}
          />
          <label htmlFor="marie">Marié/Pacsé</label>
          <input
            checked={(isMarried === 0)}
            id="celibataire"
            name="situation"
            onChange={() => SimuActions.maritalStatusChanged(0)}
            type="radio"
            value={0}
          />
          <label htmlFor="celibataire">Célibataire</label>
        </div>
        <div className="enfant">
          <p>Nombre d'enfants à charge</p>
          <Select
            clearable={false}
            onChange={(option) => SimuActions.numberofChildrenChanged(option.value)}
            options={childrenOpt}
            placeholder=""
            searchable={false}
            value={numberOfChildren}
          />
        </div>
      </div>
      */}
    </div>
  );
};
