import React from 'react';
import numeral from 'numeral';

import './ResultChart.css';

export default ({ color, left, right }) => {
  let leftRatio = left * 100 / (left + right);
  let rightRatio = 100 - leftRatio;
  if (leftRatio < 25) {
    leftRatio = 25;
    rightRatio = 75;

    left = numeral(left).format('€0a');
  }
  if (rightRatio < 25) {
    leftRatio = 75;
    rightRatio = 25;

    right = numeral(right).format('€0a');
  }
  if (left > 99999) {
    left = numeral(left).format('€0.0a');
  }
  if (right > 99999) {
    right = numeral(right).format('€0a');
  }

  return (
    <div className={`ResultChart ${color}`}>
      <span className="left" style={{width: `${leftRatio}%` }}>{left}€</span>
      <span className="right" style={{width: `${rightRatio}%` }}>{right}€</span>
    </div>
  );
};
