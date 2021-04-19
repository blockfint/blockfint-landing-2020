import { Container } from '@material-ui/core';
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle';
import React from 'react';
import styled from 'styled-components';
const Background = styled.div`
  text-align: center;
  padding: 5rem 1.5rem;
  @media ${BREAKPOINT.tablet} {
    padding: 6.25rem 2.5rem;
  }
`;
const StyledText = styled.h1`
  font-size: 2.125rem;
  @media ${BREAKPOINT.tablet} {
    font-size: 3.375rem;
    letter-spacing: -1.6px;
  }
`;
export const TopPage = () => {
  return (
    <Background>
      <StyledText style={{ color: 'var(--primary)' }}>
        Make Future Innovations Happen Today
      </StyledText>
      <StyledText>Through Our Products</StyledText>
    </Background>
  );
};
