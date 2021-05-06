import { createMuiTheme } from '@material-ui/core/styles';

export const colors = {
  primary: '#00b8de',
  secondary: '#f7941d', //'linear-gradient(45deg,rgb(11, 143, 246),rgb(38, 205, 221))',
  background: '#f7f7f7',
};

/* export const breakpoints = ['600px', '960px', '1280px', '1920px'] */

export default createMuiTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  overrides: {
    MuiPaper: {
      root: {
        color: '#1f263e',
      },
      rounded: {
        borderRadius: '0.5rem',
      },
    },

    MuiInput: {
      root: {
        fontWeight: 500,
      },
    },
    MuiInputLabel: {
      root: {
        fontWeight: 600,
        color: 'rgb(170, 184, 204)',
        whiteSpace: 'nowrap',
      },
    },

    MuiButton: {
      root: {
        textTransform: 'unset',
        borderRadius: '0.25rem',
      },
      contained: {
        backgroundColor: 'rgba(226, 231, 240, 0.8)',
        boxShadow: 'none',
      },
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
      dark: colors.secondary,
    },
  },
} as any);
