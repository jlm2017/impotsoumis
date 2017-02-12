import React from 'react';

import './ResultChart.css';

export default ({ color, left, right }) => {
  return (
    <div className={`ResultChart ${color}`}>
      <span className="left">{left}</span>
      <span className="right">{right}</span>
    </div>
  );
};
