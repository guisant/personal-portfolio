import { Player } from '@lottiefiles/react-lottie-player';

export default function Animation() {
  return (
        <Player 
            src='https://lottie.host/3f211bba-d87c-459a-801d-3fa8da810f30/8H5YqbzmB8.json'
            loop
            autoplay
            style={{ height: '500px', width: '500px' }}
        />
  );
}
