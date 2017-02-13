import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import SimuActions from '../../actions/SimuActions';
import './Filters.css';

const childrenOpt = [];
for (var i = 0; i < 10; i++) {
  childrenOpt.push({
    value: i,
    label: i
  });
}

export default ({ isMarried, net, numberOfChildren }) => {
  return (
    <div className="Filters">
      <div className="left">
        <div className="revenu">
          <label htmlFor="revenu">Salaire net mensuel du foyer</label>
          <br/>
          <input
            id="revenu"
            placeholder="Votre salaire en €"
            onChange={(e) => SimuActions.netChanged(e.target.value)}
            type="text"
            value={net}
          />
        </div>
        <div className="pension">
          <div className="left">
            <label htmlFor="retraite">Pensions de retraite</label>
            <br/>
            <input id="retraite" placeholder="Vos retraites en €" type="text"
            onChange={(e) => SimuActions.retraiteChanged(e.target.value)}/>
          </div>
          <div className="right">
            <label htmlFor="chomage">Allocations chômage</label>
            <br/>
            <input id="chomage" placeholder="Vos allocations en €" type="text"
            onChange={(e) => SimuActions.chomageChanged(e.target.value)}/>
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
    </div>
  );
};
