import { 
    Box,
    Typography
} from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const list = [
    <Button key="one" sx={{ color: '#fff' }} variant="text">Descomplica</Button>,
    <Button key="two" variant="text">Neoris Brasil</Button>,
    <Button key="three" variant="text">IT Universe</Button>,
    <Button key="four" variant="text">MS Morais</Button>,
    <Button key="five" variant="text">InMetrics</Button>,
];

export default function Experience() {
    return (
            <Box id='experience' sx={{ 
                display: { xs: 'block', sm: 'flex' }, 
                justifyContent: 'space-between', 
                backgroundColor: '#121212',
                pt: { xs: 7, sm: 3 },
                pb: { xs: 7, sm: 10 },
            }}>
                <Box sx={{ ml: { xs: 1, sm: 17 } }}>
                    <Typography variant='h4' sx={{ pt: { sm: 8 }, pb: { xs: 2, sm: 3 } }}>
                        EXPERIÊNCIAS
                    </Typography>
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                    >
                        {list}
                    </ButtonGroup>
                    </Box>
                    <Box sx={{ backgroundColor: 'yellow' }}>
                        saassasasas
                    </Box>
            </Box>
    )
}