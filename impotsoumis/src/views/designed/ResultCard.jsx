import React from 'react';
import numeral from 'numeral';

import { Row, Col } from 'react-grid-system';

import AnimatedNumber from './AnimatedNumber.jsx';
import Chart from './ResultChart.jsx';
import "./ResultCard.css";

export default ({ color, top, bottom, title, total }) => {
  return (
    <div className={`ResultCard ${color}`}>
      <h3>{title}</h3>
      <Row>
        <Col>
          <ul>
            <li>{top}</li>
            <li>CSG</li>
          </ul>
        </Col>
        <Col>
        </Col>
      </Row>
      <div>
        Total
      </div>
    </div>
  );
};
