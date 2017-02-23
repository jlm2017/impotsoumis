import React from 'react';

import './ShareButtons.css'

export default ({ gain }) => {
  let twitterText = `Avec la #RévolutionFiscale de Mélenchon, je gagnerai ${gain} €. Testez vous aussi sur :`;

  if (gain < 0) {
    twitterText = `Avec la #RévolutionFiscale de Mélenchon, je contribuerai de ${Math.abs(gain)}€ à la solidarité nationale. Testez sur :`;
  }

  return (
    <div className="ShareButtons">
      <a className="facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank">Partager sur Facebook</a>
      <a className="twitter" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(window.location.href)}`} target="_blank">Partager sur Twitter</a>
    </div>
  );
}
