import { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Animation = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div >
      {matches && (
        <Player 
            src='https://lottie.host/3f211bba-d87c-459a-801d-3fa8da810f30/8H5YqbzmB8.json'
            loop
            autoplay
            style={{ height: '500px', width: '500px' }}
        />
      )}
      {!matches && (
        <Player 
            src='https://lottie.host/3f211bba-d87c-459a-801d-3fa8da810f30/8H5YqbzmB8.json'
            loop
            autoplay
            style={{ height: '300px', width: '300px' }}
        />
      )}
    </div>
  );
}

export default Animation;