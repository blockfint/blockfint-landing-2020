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
--gradient-thinker-los:  radial-gradient(circle at 100% 0, #3F6CAF, #2F3D5B);
--gradient-thinker-wise:  radial-gradient(circle at 100% 0, #0ea4c8, #097f9c);

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
    background-color: #ffffff;
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
