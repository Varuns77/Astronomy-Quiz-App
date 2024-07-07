import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: grey[900],
    },
    common: {
      main: grey[600],
    }
  },
  typography: {
    button: {
      fontSize: '17px',
      fontFamily: "'Bungee', cursive, sans-serif"
    },
    body1: {
        fontSize: '20px',
        fontFamily: "'Bungee', cursive, sans-serif",
        
    },
    h6: {
        fontSize: '22px',
        fontFamily: "'Bungee', cursive, sans-serif",
    },
    h1:{
        fontFamily: "'Bungee', cursive, sans-serif",
    },

    table: {
        fontFamily: "'Bungee', cursive, sans-serif",
    },

    h5:{
      fontSize: '26px',
      fontFamily: "'Bungee', cursive, sans-serif",
  },
  },

  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "'Bungee', cursive, sans-serif",
          fontSize: "16px",
        },
      },
    },
  },
});

export default theme;
