import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        button: {
          fontFamily: "'Rubik', sans-serif",
          fontWeight: 400,
          textTransform: 'capitalize',
        },
      },
    palette: {
      primary: {
        main: '#121212',
      },
      secondary: {
        main: '#088a5f',
      },
    },
});

export default theme