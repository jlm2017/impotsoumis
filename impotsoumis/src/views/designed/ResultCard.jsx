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
      <Row>
        <Col xs={9}>
          <ul>
            <li>{top.legend}</li>
            <li>{bottom.legend}</li>
          </ul>
        </Col>
        <Col xs={2} offset={{xs: 1}}>
          <Chart color={color} top={top.value} bottom={bottom.value} />
        </Col>
      </Row>
      <div className="total">
        Total<br />
        <strong>{total} €/<sup>an</sup></strong>
      </div>
    </div>
  );
};
