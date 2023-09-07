import Box from '@mui/material/Box';
import gsLogo from '../assets/logo.svg'

export default function Logo() {
    return (
        <Box>
            <img src={gsLogo} className="logo" alt="GS Oficial logo" />
        </Box>
    )
}