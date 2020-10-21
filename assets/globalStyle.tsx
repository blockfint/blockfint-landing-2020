import { createGlobalStyle } from 'styled-components'
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles'
import theme from './themes'
export const SIZE = {
  tablet: '600px',
  desktop: '960px'
}
export const BREAKPOINT = {
  tablet: `only screen and (min-width: ${SIZE.tablet})`,
  desktop: `only screen and (min-width: ${SIZE.desktop})`
}

const GlobalStyle = createGlobalStyle`
// Colors
:root{

--border-color:#fafafa;
--box-shadow-1: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
--box-shadow-2:0 8px 16px 0 #f0f3fa;

--primary:#00b8de;
--primary-2:#eff6f7;
--secondary:#f7941d;

--gradient-gideon:  radial-gradient(circle at 100% 0, var(--blockfint-secondary-yellow-mellow-2), #fb8900 100%);
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
      font-family: 'Montserrat', sans-serif;
      margin:0;
      font-size:1rem;
      color:#333333;
      overflow-x:hidden;
    h1{
      font-weight:600;
      font-size: 2.625rem; 
      @media ${BREAKPOINT.tablet} {
        //tablet
        font-size: 4.25rem;
      }    
    
    }

    h2{
      font-weight:800;
      @media ${BREAKPOINT.tablet}{
        //tablet
        font-size: 2.125rem;
      }

      @media ${BREAKPOINT.desktop}{
        //desktop
        font-size: 2.625rem;
      }
      
      font-size: 1.625rem; 
    }

    h3{
      font-weight:800;
      @media ${BREAKPOINT.tablet}{
        //tablet
        font-size: 1.25rem;
      }
      @media ${BREAKPOINT.desktop}{
        //desktop
        font-size: 1.5rem;
      }
      
      //mobile
      font-size: 1.125rem; 
    }

    h4{
      font-weight:800;
      @media ${BREAKPOINT.tablet}{
        //desktop
        font-size: 1.25rem;
      }
      @media ${BREAKPOINT.desktop}{
        //tablet
        font-size: 1.25rem;
      }
      font-size: 1.125rem; 
    }

    p{
      @media ${BREAKPOINT.tablet}{
        //tablet
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
