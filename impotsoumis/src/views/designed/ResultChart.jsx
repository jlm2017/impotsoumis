import React from 'react';
import numeral from 'numeral';

import AnimatedNumber from './AnimatedNumber.jsx';
import './ResultChart.css';

export default ({ color, left, right }) => {
  let leftRatio = left * 100 / (left + right);
  let rightRatio = 100 - leftRatio;

  if (leftRatio < 25) {
    leftRatio = 25;
    rightRatio = 75;
  }

  if (rightRatio < 25) {
    leftRatio = 75;
    rightRatio = 25;
  }

  return (
    <div className={`ResultChart ${color}`}>
      <div>
        <span
          className="left"
          style={{width: `${leftRatio}%`}}
        >
          <AnimatedNumber
            format={(val) => numeral(val).format('€0a')}
            value={left}
          />
          €
        </span>
        <span
          className="right"
          style={{width: `${rightRatio}%`}}
        >
          <AnimatedNumber
            format={(val) => numeral(val).format('€0a')}
            value={right}
          />€
        </span>
      </div>
    </div>
  );
};
