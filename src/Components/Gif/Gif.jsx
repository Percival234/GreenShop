import React, { useState } from 'react';

import GifPot from '../../Assets/gifs/icons8-potted-plant.gif';

export default function Gif() {
  const [animation, setAnimation] = useState(true);

  function stop() {
    setAnimation(false);
    console.log('first');
  }

  return <img onAnimationEnd={stop} src={GifPot} alt="dfd" className={'pause'} />;
}
