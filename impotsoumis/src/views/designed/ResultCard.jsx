import React from 'react';
import numeral from 'numeral';

import AnimatedNumber from './AnimatedNumber.jsx';
import Chart from './ResultChart.jsx';
import "./ResultCard.css";

export default ({ color, top, bottom, title, total }) => {
  return (
    <div className={`ResultCard ${color}`}>
      <h3>{title}</h3>
        <div className="left">
          <ul>
            <li>{top.legend}</li>
            <li>{bottom.legend}</li>
          </ul>
        </div>
        <div className="right">
          <Chart top={top.value} bottom={bottom.value} />
        </div>
      <div className="total">
        Total
      </div>
    </div>
  );
};
