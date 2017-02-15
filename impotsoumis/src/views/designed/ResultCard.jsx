import React from 'react';
import numeral from 'numeral';

import AnimatedNumber from './AnimatedNumber.jsx';
import Chart from './ResultChart.jsx';
import "./ResultCard.css";


export default ({ center, color, left, right, title }) => {
  const total = (center) ? center.value * 12 : (left.value + right.value) * 12;

  return (
    <div className={`ResultCard ${color}`}>
      <h3>{title}</h3>
      <div className="amount">
        <AnimatedNumber
          format={(val) => numeral(val).format('€0,0')}
          value={total}
        />
        €
      </div>
      <Chart
        color={color}
        center={(center) ? center.value * 12 : false}
        left={(left) ? left.value * 12 : false}
        right={(right) ? right.value * 12 : false}
      />
      {(center) ?
        <div className="legend">
          <span className="center">
            <span className="absolute">
              <AnimatedNumber
                format={(val) => numeral(val).format('€0,0')}
                value={center.value * 12}
              />€
            </span>
            {center.legend}
          </span>
        </div>
      :
        <div className="legend">
          <span className="left">
            <span className="absolute">
              <AnimatedNumber
                format={(val) => numeral(val).format('€0,0')}
                value={left.value * 12}
              />€
            </span>
            {left.legend}
          </span>
          <span className="right">
            <span className="absolute">
              <AnimatedNumber
                format={(val) => numeral(val).format('€0,0')}
                value={right.value * 12}
              />€
            </span>
            {right.legend}
          </span>
        </div>
      }

    </div>
  );
};
