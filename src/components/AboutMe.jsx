import { 
    Box,
    Typography
} from '@mui/material';

export default function AboutMe() {
    return (
            <Box sx={{ 
                display: { xs: 'block', sm: 'flex' }, 
                alignItems: 'center', 
                justifyContent: 'space-around' 
            }}>
                <Box>
                    foto
                </Box>
                <Box>
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