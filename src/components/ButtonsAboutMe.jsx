import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonsAboutMe() {
  return (
    <Stack spacing={3} direction="row">
      <Button variant="outlined" size="large" sx={{ color: '#fff' }} color='secondary'>Currículo</Button> 
      <Button variant="outlined" size="large" sx={{ ml: 5, color: '#fff' }} color='secondary'>Fale comigo!</Button>
    </Stack>
  );
}