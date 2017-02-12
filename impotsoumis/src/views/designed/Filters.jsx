import React from 'react';

import SimuActions from '../../actions/SimuActions';

export default ({ net }) => {
  return (
    <div className="filters">
      <h3>Filtres</h3>
      <div>
        revenu
        <input
          onChange={(e) => SimuActions.netChanged(e.target.value)}
          type="text"
          value={net}
        />
      </div>
    </div>
  );
};
