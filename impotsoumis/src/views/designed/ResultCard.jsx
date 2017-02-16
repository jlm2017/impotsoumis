import React from 'react';
import numeral from 'numeral';

import AnimatedNumber from './AnimatedNumber.jsx';
import Chart from './ResultChart.jsx';
import "./ResultCard.css";

export default ({ color, left, right, title, total }) => {
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
        left={left.value}
        right={right.value}
      />

      <div className="legend">
        <span className="left">
          <span className="absolute">
            <AnimatedNumber
              format={(val) => numeral(val).format('€0,0')}
              value={left.value}
            />€
          </span>
          {left.legend}
        </span>
        <span className="right">
          <span className="absolute">
            <AnimatedNumber
              format={(val) => numeral(val).format('€0,0')}
              value={right.value}
            />€
          </span>
          {right.legend}
        </span>
      </div>

    </div>
  );
};
