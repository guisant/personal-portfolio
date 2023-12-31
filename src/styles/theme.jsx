import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  //font
    typography: {
      fontFamily: [
        "'Rubik', sans-serif",
      ],
      button: {
        fontWeight: 400,
        textTransform: 'capitalize',
      },
    },

  //paleta
    palette: {
      primary: {
        main: '#121212',
      },
      secondary: {
        main: '#088a5f',
      },
    },

    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'text' },
            style: {
              textTransform: 'none',
              borderLeft: `2px solid #088a5f`,
              borderRadius: 2,
              color: '#C4C4C4',
            },
          },
        ],
      },
    }
});


theme.typography.h6 = {
  fontSize: '1.1rem',
  '@media (min-width:600px)': {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
};

theme.typography.h3 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.1rem',
  },
};

theme.typography.h4 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
};

theme.typography.h5 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

export default theme