import React from 'react';
import numeral from 'numeral';

import './ResultChart.css';

export default ({ center, color, left, right }) => {
  let leftRatio, rightRatio;
  if (!center) {
    leftRatio = left * 100 / (left + right);
    rightRatio = 100 - leftRatio;
    if (leftRatio < 22) {
      leftRatio = 22;
      rightRatio = 78;
    }
    if (rightRatio < 22) {
      leftRatio = 78;
      rightRatio = 22;
    }
  }

  return (
    <div className={`ResultChart ${color}`}>
      {(center !== false) ?
        <span className="center">
          {numeral(center).format('€0a')}€
        </span>
      :
        <div>
          <span
            className="left"
            style={{width: `${leftRatio}%`}}
          >
            {numeral(left).format('€0a')}€
          </span>
          <span
            className="right"
            style={{width: `${rightRatio}%`}}
          >
            {numeral(right).format('€0a')}€
          </span>
        </div>
      }
    </div>
  );
};
