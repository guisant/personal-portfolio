import { 
    Box,
    Card,
    CardMedia,
    Typography
} from '@mui/material';
import ButtonsAboutMe from './ButtonsAboutMe'
import profilePic from '../assets/profile_pic.jpg'

export default function AboutMe() {
    return (
            <Box sx={{ 
                display: { xs: 'block', sm: 'flex' }, 
                alignItems: 'center', 
                justifyContent: 'space-around', 
                backgroundColor: '#151515',
                pt: { xs: 7, sm: 3 },
                pb: { xs: 7, sm: 10 }
            }}>
                <Box sx={{ ml: 13, mt: 3, display: { xs: 'none', sm: 'flex' } }}> 
                    <Card sx={{ width: 250 }}>
                        <CardMedia
                            sx={{ height: 250, width: 250 }}
                            component="img"
                            src={profilePic}
                            alt="profile picture"
                        />
                    </Card>
                </Box>
                <Box sx={{ px: { xs: 4, sm: 20 } }}>
                    <Box>
                        <Typography variant='h4' sx={{ pt: { sm: 8 }, pb: { xs: 2, sm: 3 } }}>
                            SOBRE MIM
                        </Typography>
                        <Typography variant='h5' sx={{ pb: { xs: 1, sm: 2 } }}>
                            São Paulo, Brasil
                        </Typography>
                        <Typography color={'#C4C4C4'}>
                            Lorem ipsum risus eleifend phasellus ultricies nibh inceptos imperdiet, 
                            semper blandit aenean aliquam lectus bibendum molestie massa, rutrum porttitor 
                            ullamcorper vitae ultrices eleifend nibh. 
                        </Typography>
                    </Box>  
                    <Box sx={{ pt: { xs: 4, sm: 4 } }}>
                        icons skills
                    </Box>
                    <Box sx={{ 
                        pt: { xs: 4, sm: 4 }, 
                        display: 'flex', 
                        justifyContent: { xs: 'center', sm: 'start' } 
                    }}>
                        <ButtonsAboutMe />
                    </Box>
                </Box>
            </Box>
    )
}