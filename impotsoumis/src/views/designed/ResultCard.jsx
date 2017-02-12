import React from 'react';

import Chart from './ResultChart.jsx';
import "./ResultCard.css";


export default ({ color, data, title }) => {
  let IR = 0, CSG = 0;
  if (data) {
    IR = data[0].value;
    CSG = data[1].value;
  }

  return (
    <div className={`ResultCard ${color}`}>
      <h3>{title}</h3>
      <div className="amount">{(IR + CSG) || 0}</div>
      <Chart color={color} left={`${IR || 0}€`} right={`${CSG || 0}€`} />
      <div className="legend">
        <span className="left">
          Impôt<br /> sur le revenu<br /> (IR)
        </span>
        <span className="right">
          Contribution <br />sociale<br /> généralisée<br /> (CSG)
        </span>
      </div>
    </div>
  );
};
