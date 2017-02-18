import React from 'react';

import './ResultChart.css';

export default ({ color, top, bottom }) => {
  let topRatio = top * 100 / (top + bottom);
  let bottomRatio = 100 - topRatio;

  return (
    <div className={`ResultChart ${color}`}>
      <span
        className="top"
        style={{height: `${topRatio}%`}}
      ></span>
      <span
        className="bottom"
        style={{height: `${bottomRatio}%`}}
      ></span>
    </div>
  );
};
