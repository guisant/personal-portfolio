import { 
    Box,
    Typography
} from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import ButtonsHome from './ButtonsHome';

export default function BannerHome() {
    return (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: 15 }}>
                <Box>
                    <Box>
                        <Typography variant="h6">
                            Olá, eu sou
                        </Typography>
                        <Typography variant="h3" color='secondary'>GUILHERME SANTOS</Typography>
                        <Typography variant="h6">Desenvolvedor Front-End FullStack</Typography> 
                    </Box>  
                    <Box sx={{ my: 5 }}>
                        <ButtonsHome />
                    </Box>
                </Box>
                <Box>
                    <Player 
                        src='https://lottie.host/3f211bba-d87c-459a-801d-3fa8da810f30/8H5YqbzmB8.json'
                        loop
                        autoplay
                        style={{ height: '500px', width: '500px' }}
                    />
                </Box>
            </Box>
    )
}