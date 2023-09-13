import { 
    Box,
    Card,
    CardMedia,
    Typography
} from '@mui/material';
import profilePic from '../assets/profile_pic.jpg'

export default function AboutMe() {
    return (
            <Box sx={{ 
                display: { xs: 'block', sm: 'flex' }, 
                alignItems: 'center', 
                justifyContent: 'space-around', 
                backgroundColor: '#151515',
                py: 10
            }}>
                <Box sx={{ ml: 13, my: 3 }}> 
                    <Card sx={{ width: 250 }}>
                        <CardMedia
                            sx={{ height: 250, width: 250 }}
                            component="img"
                            src={profilePic}
                            alt="profile picture"
                        />
                    </Card>
                </Box>
                <Box sx={{ mx: 20, pl: 5 }}>
                    <Box>
                        <Typography>
                            SOBRE MIM
                        </Typography>
                        <Typography>SUBTITLE</Typography>
                        <Typography>
                            Lorem ipsum risus eleifend phasellus ultricies nibh inceptos imperdiet, 
                            semper blandit aenean aliquam lectus bibendum molestie massa, rutrum porttitor 
                            ullamcorper vitae ultrices eleifend nibh. nunc semper inceptos duis per suspendisse 
                            taciti consequat rutrum curabitur platea ligula, ultricies sagittis mollis phasellus 
                            adipiscing etiam ullamcorper commodo at interdum, posuere mauris duis congue egestas 
                            dui sodales etiam malesuada habitant. 
                            auctor feugiat aliquam pulvinar consequat himenaeos velit quisque taciti tincidunt, 
                            cursus iaculis ligula cubilia eros gravida ornare pretium.  
                        </Typography>
                    </Box>  
                    <Box>
                        BUTTON
                    </Box>
                </Box>
            </Box>
    )
}