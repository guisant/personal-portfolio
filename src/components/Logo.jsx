import Box from '@mui/material/Box';
import gsLogo from '../assets/logo.svg'

const logoStyle = {
    width: 170,
}


export default function Logo() {
    return (
        <Box sx={{ pl: { xs: 'none', sm: 7 } }}>
            <img src={gsLogo} style={logoStyle} alt="GS Oficial logo" />
        </Box>
    )
}