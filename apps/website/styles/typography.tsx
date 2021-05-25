import { css } from 'styled-components'
import { BREAKPOINT } from './globalStyle'

export const typography = css`
  font-size: 12px;
  line-height: 22px;
  h1 {
    font-weight: 600;
    font-size: 38px;
    line-height: 56px;
  }
  h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 46px;
  }
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 42px;
  }
  h4 {
    font-weight: 600;
    font-size: 22px;
    line-height: 38px;
  }
  h5 {
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
  }
  h6 {
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
  }
  @media ${BREAKPOINT.tablet} {
    h1 {
      font-weight: 500;
      font-size: 54px;
      line-height: 78px;
    }
    h2 {
      font-size: 34px;
      line-height: 56px;
    }
    h3 {
      font-size: 26px;
      line-height: 46px;
    }
    h4 {
      font-size: 24px;
      line-height: 44px;
    }
    h5 {
      font-size: 20px;
      line-height: 38px;
    }
  }
  @media ${BREAKPOINT.desktop} {
    h2 {
      font-size: 38px;
    }
    h3 {
      font-size: 32px;
    }
    h4 {
      font-size: 28px;
      line-height: 42px;
    }
    h5 {
      font-size: 24px;
      line-height: 38px;
    }
  }
`
