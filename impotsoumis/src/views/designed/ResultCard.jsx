import React from 'react';
import numeral from 'numeral';

import Chart from './ResultChart.jsx';
import "./ResultCard.css";


export default ({ center, color, left, right, title }) => {
  const total = (center) ? numeral(center.value).format('€0a') : numeral(left.value + right.value).format('€0a');

  return (
    <div className={`ResultCard ${color}`}>
      <h3>{title}</h3>
      <div className="amount">{total}€</div>
      <Chart
        color={color}
        center={(center) ? center.value : false}
        left={(left) ? left.value : false}
        right={(right) ? right.value : false}
      />
      {(center) ?
        <div className="legend">
          <span className="center">{center.legend}</span>
        </div>
      :
        <div className="legend">
          <span className="left">{left.legend}</span>
          <span className="right">{right.legend}</span>
        </div>
      }

    </div>
  );
};
