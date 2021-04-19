import { Container } from '@material-ui/core';
import { SecondaryButton } from '@blockfint/website/components/Buttons';
import React from 'react';
import styled from 'styled-components';
import MailSvg from '@blockfint/website/assets/icons/mail.svg';
import Link from 'next/link';
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle';
const Background = styled.div`
  background-color: #19213c;

  position: relative;
  height: 27.125rem;
  padding: 10rem 0 0 0;
  @media ${BREAKPOINT.tablet} {
    padding: 5rem 0;
    height: unset;
  }
`;
const Content = styled.div`
  max-width: 60.625rem;
  margin: 0 -1rem;
  background-color: #fcbc14;
  display: flex;
  height: 17.25rem;

  position: relative;
  justify-content: center;
  align-items: center;
  @media ${BREAKPOINT.tablet} {
    justify-content: flex-start;
    height: 14rem;
    margin: 0 auto;
    padding: 0 2.75rem;
    border-radius: 3.125rem;
  }
  @media ${BREAKPOINT.desktop} {
    padding: 0 6.25rem;
  }
`;
const LeftContent = styled.div`
  margin: 8rem 1.5rem 0;
  color: var(--white);
  display: grid;
  width: 100%;
  grid-gap: 1rem;
  justify-items: center;
  a {
    width: 100%;
  }
  @media ${BREAKPOINT.tablet} {
    margin: 0;
    width: 23rem;
    a {
      width: unset;
    }
  }
  @media ${BREAKPOINT.desktop} {
    width: 29.375rem;
  }
`;

const MailImage = styled.img`
  position: absolute;
  bottom: 57.5%;
  left: 50%;
  transform: translateX(-50%);
  @media ${BREAKPOINT.tablet} {
    left: unset;
    transform: unset;
    right: -1.5rem;
    bottom: 2.75rem;
  }
  @media ${BREAKPOINT.desktop} {
    right: 6.25rem;
    bottom: 3.5rem;
  }
`;
export const JoinUsBanner: React.FC = () => {
  return (
    <Background>
      <Container maxWidth="lg">
        <Content>
          <LeftContent>
            <h5>Become our team?</h5>
            <Link passHref href="/contact">
              <a>
                <SecondaryButton>Join us</SecondaryButton>
              </a>
            </Link>
          </LeftContent>
          <MailImage src={MailSvg} />
        </Content>
      </Container>
    </Background>
  );
};
