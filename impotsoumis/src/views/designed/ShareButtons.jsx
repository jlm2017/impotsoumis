import React from 'react';

import './ShareButtons.css'

export default ({ gain }) => {
  let twitterText = `Avec la #RévolutionFiscale de Mélenchon, je gagne ${gain} €. Testez vous aussi ! #JLM2017 ${window.location.href}`;

  if (gain < 0) {
    twitterText = `Avec la #RévolutionFiscale de Mélenchon, je contribue pour ${Math.abs(gain)}€ à la solidarité nationale. Testez ! #JLM2017 ${window.location.href}`;
  }

  return (
    <div className="ShareButtons">
      <a className="facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank">Partager sur Facebook</a>
      <a className="twitter" href={`https://twitter.com/home?status=${encodeURIComponent(twitterText)}`} target="_blank">Partager sur Twitter</a>
    </div>
  );
}
