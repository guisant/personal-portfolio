import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ButtonsHome() {
  return (
    <Stack spacing={3} direction="row">
      <Button variant="outlined" size="large" sx={{ color: '#fff' }} color='secondary' startIcon={<LinkedInIcon />} href="#text-buttons" target="_blank">Linkedin</Button> 
      <Button variant="outlined" size="large" sx={{ ml: 5, color: '#fff' }} color='secondary' startIcon={<GitHubIcon />} href="https://github.com/guisant" target="_blank">GitHub</Button>
    </Stack>
  );
}