import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles'
import theme from './themes'
export const SIZE = {
  tablet: '600px',
  desktop: '960px',
  desktopHd: '1280px'
}
export const BREAKPOINT = {
  tablet: `only screen and (min-width: ${SIZE.tablet})`,
  desktop: `only screen and (min-width: ${SIZE.desktop})`,
  desktopHd: `only screen and (min-width: ${SIZE.desktopHd})`
}

const GlobalStyle = createGlobalStyle`
:root{

--border-color:#fafafa;
--box-shadow-1: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
--box-shadow-2:0 8px 16px 0 #f0f3fa;

--primary:#00b8de;
--primary-2:#eff6f7;
--secondary:#f7941d;

--gradient-gideon:  radial-gradient(circle at 100% 0, #ebcc72, #fb8900 100%);
--gradient-neo-bank:  radial-gradient(circle at 100% 0, #00ace8, #2f3396);
--gradient-palm:  radial-gradient(circle at 100% 0, #38ef7d, #11998e);
--gradient-thinker:  radial-gradient(circle at 100% 0, #0ea4c8, #097f9c);

--black:#000000;
--grey-1:#333333;
--grey-2:#555555;
--grey-3:#7e7e7e;
--grey-4:#a5a5a5;
--grey-5:#DDDDDD;
--grey-6:#F2F2F2;
--white:#Ffffff;

}

*,
*::before,
*::after {
  font-family: 'Montserrat','Prompt', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {

      font-family: 'Montserrat','Prompt', sans-serif;
      margin:0;
      font-size:1rem;
      color:#333333;
      max-width:100vw;
      overflow-x:hidden;
    h1{
      font-weight:600;
      font-size: 2.625rem;
      letter-spacing:-1.2px;
      @media ${BREAKPOINT.tablet} {
        letter-spacing:-2px;
        font-size: 4.25rem;
      }

    }

    h2{
      font-weight:600;
      font-size: 1.625rem;
      letter-spacing:-0.8px;
      @media ${BREAKPOINT.tablet}{
        letter-spacing:-1.6px;
        font-size: 3.375rem;
      }
    }

    h3{
      font-weight:700;
      letter-spacing:-1px;
      font-size: 1.625rem;
      @media ${BREAKPOINT.tablet}{
        letter-spacing: -1.2px;
        font-size: 2.625rem;
      }


    }

    h4{
      font-weight:700;
      font-size: 1.25rem;
      letter-spacing: -0.4px;
      @media ${BREAKPOINT.tablet}{
        letter-spacing:-1.2px;
        font-size: 2.125rem;
      }
    }
    h5{
      font-weight:600;
      font-size:1rem;
      @media ${BREAKPOINT.tablet}{
        letter-spacing:-1px;
        font-size: 1.625rem;
      }

    }

    h6{
      font-weight:600;
      font-size:1rem;
      @media ${BREAKPOINT.tablet}{
        letter-spacing:-1px;
        font-size: 1.25rem;
      }
    }

    p{
      font-family: 'Montserrat','Sarabun', sans-serif;
      @media ${BREAKPOINT.tablet}{
        font-size: 1rem;
      }
      font-size:0.875rem;
    }

      /* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-500 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('/fonts/montserrat-v15-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v15-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-600 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: local(''),
       url('/fonts/montserrat-v15-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v15-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-700 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('/fonts/montserrat-v15-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-800 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: local(''),
       url('/fonts/montserrat-v15-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v15-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-900 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-display: swap;
  font-weight: 900;
  src: local(''),
       url('/fonts/montserrat-v15-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v15-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* prompt-regular - thai_latin */
@font-face {
  font-family: 'Prompt';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local(''),
       url('/fonts/prompt-v4-thai_latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/prompt-v4-thai_latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* prompt-500 - thai_latin */
@font-face {
  font-family: 'Prompt';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local(''),
       url('/fonts/prompt-v4-thai_latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/prompt-v4-thai_latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* prompt-600 - thai_latin */
@font-face {
  font-family: 'Prompt';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: local(''),
       url('/fonts/prompt-v4-thai_latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/prompt-v4-thai_latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* prompt-700 - thai_latin */
@font-face {
  font-family: 'Prompt';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local(''),
       url('/fonts/prompt-v4-thai_latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/prompt-v4-thai_latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* prompt-800 - thai_latin */
@font-face {
  font-family: 'Prompt';
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: local(''),
       url('/fonts/prompt-v4-thai_latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/prompt-v4-thai_latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* prompt-900 - thai_latin */
@font-face {
  font-family: 'Prompt';
  font-style: normal;
  font-display: swap;
  font-weight: 900;
  src: local(''),
       url('/fonts/prompt-v4-thai_latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/prompt-v4-thai_latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
  }

`

export const AllStyleProvider: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StylesProvider>
  </>
)
