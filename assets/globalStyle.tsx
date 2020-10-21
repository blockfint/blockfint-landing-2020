import { createGlobalStyle } from 'styled-components'

export const SIZE = {
  tablet: '600px',
  desktop: '960px'
}
export const BREAKPOINT = {
  tablet: `only screen and (min-width: ${SIZE.tablet})`,
  desktop: `only screen and (min-width: ${SIZE.desktop})`
}

export default createGlobalStyle`

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
      color:var(--dark-blue-grey);
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
