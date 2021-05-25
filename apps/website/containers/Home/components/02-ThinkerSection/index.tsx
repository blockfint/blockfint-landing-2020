import { PrimaryButton } from '@blockfint/website/components/Buttons';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ThinkerSmall } from '@blockfint/website/assets/logos/thinker-small.svg';
import { Container } from '@material-ui/core';
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle';
import { ThinkerImage } from './components/ThinkerImage';
import Link from 'next/link';
const Content = styled.div`
  margin: 6.25rem 0;
  @media ${BREAKPOINT.tablet} {
    margin: 10.25rem 0 8.25rem;
  }
  text-align: center;
`;
const Title = styled.h5`
  line-height: 1.46;
`;
const Desc = styled.p`
  max-width: 35rem;
  margin: 0.5rem auto 2.5rem;
  line-height: 1.88;
`;

export const ThinkerSection: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Content>
        <ThinkerImage />
        <Title style={{ color: 'var(--primary)' }}>Thinker</Title>
        <Title>Make Rapid, Optimized & Data Driven Decision </Title>
        <Desc>
          Leading change of processes with data-driven tool that will change the
          way of working forever.
        </Desc>
        <Link href={'/products/thinker'} passHref>
          <a>
            <PrimaryButton
              logo={<ThinkerSmall />}
              background={'var(--gradient-thinker)'}
            >
              Read more
            </PrimaryButton>
          </a>
        </Link>
      </Content>
    </Container>
  );
};
