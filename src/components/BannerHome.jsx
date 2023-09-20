import { 
    Box,
    Typography
} from '@mui/material';
import ButtonsHome from './ButtonsHome';
import Animation from './Animation';

export default function BannerHome() {
    return (
            <Box sx={{ 
                display: { xs: 'block', sm: 'block', md: 'flex' }, 
                alignItems: 'center', 
                justifyContent: 'space-around', 
                mt: 15 
            }}>
                <Box>
                    <Box sx={{ ml: { xs: 3, sm: 2 } }}>
                        <Typography variant="h6">
                            Olá, eu sou
                        </Typography>
                        <Typography variant="h3" color='secondary'>GUILHERME SANTOS</Typography>
                        <Typography variant="h6">Desenvolvedor Front-End FullStack</Typography> 
                    </Box>  
                    <Box sx={{ mt: 5, ml: { sm: 2 }, display: 'flex', justifyContent: { xs: 'center', sm: 'start' } }}>
                        <ButtonsHome />
                    </Box>
                </Box>
                <Box>
                    <Animation />    
                </Box>
            </Box>
    )
}