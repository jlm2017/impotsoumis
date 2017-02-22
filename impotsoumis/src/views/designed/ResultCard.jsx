import React from 'react';
import{ Row, Col } from 'react-grid-system';
import numeral from 'numeral';

import AnimatedNumber from './AnimatedNumber.jsx';
import Chart from './ResultChart.jsx';
import "./ResultCard.css";

export default ({ color, top, bottom, title, total }) => {
  return (
    <div className={`ResultCard ${color}`}>
      <h3>{title}</h3>
      <div className="content">
        <div className="left">
          <ul>
            <li>{top.legend}</li>
            <li>{bottom.legend}</li>
          </ul>
        </div>
        <div className="right">
          <Chart color={color} top={top.value} bottom={bottom.value} />
        </div>
      </div>
      <div className="total">
        Total<br />
        <strong>
            <AnimatedNumber
              format={(val) => ` ${numeral(val).format('€0,0')} `}
              value={total}
            />
           €<sup>/an</sup>
        </strong>
      </div>
    </div>
  );
};
