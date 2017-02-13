import React from 'react';
import numeral from 'numeral';

import Chart from './ResultChart.jsx';
import "./ResultCard.css";


export default ({ color, data, title }) => {
  let IR = 0, CSG = 0;
  if (data) {
    IR = data[0].value;
    CSG = data[1].value;
  }
  let total = IR + CSG;
  if (total > 999999) {
    total = numeral(total).format('€0a');
  }

  return (
    <div className={`ResultCard ${color}`}>
      <h3>{title}</h3>
      <div className="amount">{total}€</div>
      <Chart color={color} left={IR} right={CSG} />
      <div className="legend">
        <span className="left">
          Impôt<br /> sur le revenu<br /> (IR)
        </span>
        <span className="right">
          Contribution <br />sociale généralisée<br /> (CSG)
        </span>
      </div>
    </div>
  );
};
