import React from 'react';
import numeral from 'numeral';

import AnimatedNumber from './AnimatedNumber.jsx';
import './ResultChart.css';

export default ({ center, color, left, right }) => {
  let leftRatio, rightRatio;
  if (!center) {
    leftRatio = left * 100 / (left + right);
    rightRatio = 100 - leftRatio;
    if (leftRatio < 25) {
      leftRatio = 25;
      rightRatio = 75;
    }
    if (rightRatio < 25) {
      leftRatio = 75;
      rightRatio = 25;
    }
  }

  return (
    <div className={`ResultChart ${color}`}>
      {(center !== false) ?
        <span className="center">
          <AnimatedNumber
            format={(val) => numeral(val).format('€0a')}
            value={center}
          />
          €
        </span>
      :
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
      }
    </div>
  );
};
