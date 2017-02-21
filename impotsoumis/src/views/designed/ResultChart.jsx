import React from 'react';

import './ResultChart.css';

export default ({ color, top, bottom }) => {
  let topRatio = top >= 0 ? top * 100 / (top + bottom) : 0
  let bottomRatio = top >= 0 ? bottom * 100 / (top + bottom) : 100

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
