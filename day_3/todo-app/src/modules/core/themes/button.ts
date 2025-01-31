import { createTheme } from '@mui/material/styles';

const buttonTheme = createTheme({
    palette: {
        primary: {
            main: '#B7B7B7',
        },
    },
    typography: {
        button: {
          textTransform: "none", // Remove uppercase transformation for buttons
          fontSize: "16px", // Adjust button font size
        },
      },
});

export default buttonTheme;