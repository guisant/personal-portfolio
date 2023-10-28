import { 
    Box,
    Card,
    CardMedia,
    Typography
} from '@mui/material';
import Stack from '@mui/material/Stack';
import ButtonsAboutMe from './ButtonsAboutMe'
import profilePic from '../assets/profile_pic.jpg'
import { 
    BiLogoReact,
    BiLogoTypescript,
    BiLogoNodejs,
    BiLogoPython
} from 'react-icons/bi';
import { SiMysql } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

export default function AboutMe() {
    return (
            <Box id='aboutMe' sx={{ 
                display: { xs: 'block', sm: 'flex' }, 
                alignItems: 'center', 
                justifyContent: 'space-around', 
                backgroundColor: '#151515',
                pt: { xs: 7, sm: 3 },
                pb: { xs: 7, sm: 12 }
            }}>
                <Box sx={{ ml: 17, mt: 3, pt: 4, display: { xs: 'none', sm: 'flex' } }}> 
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
                        <Typography color={'#C4C4C4'} sx={{ pr: { sm: 7 } }}>
                            Lorem ipsum risus eleifend phasellus ultricies nibh inceptos imperdiet, 
                            semper blandit aenean aliquam lectus bibendum molestie massa, rutrum porttitor 
                            ullamcorper vitae ultrices eleifend nibh. 
                        </Typography>
                    </Box>  
                    <Box sx={{ pt: 4 }}>
                        <Stack spacing={2} direction="row">
                            <BiLogoReact size={28} color='#088a5f'/>
                            <RiJavascriptFill size={28} color='#088a5f'/>
                            <BiLogoTypescript size={28} color='#088a5f'/>
                            <BiLogoNodejs size={28} color='#088a5f'/>
                            <BiLogoPython size={28} color='#088a5f'/>
                            <SiMysql size={30} color='#088a5f'/>
                        </Stack>
                    </Box>
                    <Box sx={{ 
                        mt: 4, 
                        display: 'flex', 
                        justifyContent: { xs: 'center', sm: 'start' } 
                    }}>
                        <ButtonsAboutMe />
                    </Box>
                </Box>
            </Box>
    )
}