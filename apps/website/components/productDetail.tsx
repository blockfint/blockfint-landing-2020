import { ArrowLink } from '@blockfint/website/components/ArrowLink';
import styled from 'styled-components';
import React from 'react';
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle';
import { Container } from '@material-ui/core';

const Content = styled.div`
  padding: 0 0.5rem;
  margin: 2.5rem 0;
  @media ${BREAKPOINT.tablet} {
    margin: 3.75rem 0;
  }
  @media ${BREAKPOINT.desktop} {
    margin: 6.25rem 0;
  }
`;
const BlueTitle = styled.h2`
  max-width: 60rem;
  color: var(--primary);
  margin-bottom: 1rem;

  font-size: 2.125rem;
  @media ${BREAKPOINT.tablet} {
    font-size: 3.375rem;
  }
`;
const Title = styled.h3`
  max-width: 60rem;
  margin-bottom: 1.5rem;
  @media ${BREAKPOINT.tablet} {
    font-size: 2.125rem;
  }
`;
const Desc = styled.p`
  max-width: 60rem;
  line-height: 1.88;
  margin-bottom: 1.25rem;
`;
const YoutubeWrapper = styled.div`
  max-width: 52.5rem;
  margin: 4rem auto 6rem;
`;
const SecondaryTitle = styled.h4`
  line-height: 1.46;
  @media ${BREAKPOINT.tablet} {
    font-size: 1.625rem;
    max-width: 35rem;
  }
  @media ${BREAKPOINT.desktop} {
    max-width: 61.25rem;
  }
`;
interface Props {
  name: string;
  title: string;
  description: string;

  linkHref?: string;
  youtube?: string;
  secondaryTitle?: string;
}

export const ProductDetail: React.FC<Props> = ({
  name,
  title,
  description,
  linkHref,
  secondaryTitle,
  youtube,
  children,
}) => {
  return (
    <Container maxWidth="lg">
      <Content>
        <BlueTitle>{name}</BlueTitle>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        {linkHref && (
          <ArrowLink href={linkHref} hrefLang="en">
            Go to website
          </ArrowLink>
        )}
        <YoutubeWrapper>
          {youtube && (
            <div
              className="video"
              style={{
                position: 'relative',
                paddingBottom: '56.25%' /* 16:9 */,
                paddingTop: 25,
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  width: '100%',
                  height: '100%',
                }}
                src={`https://www.youtube.com/embed/${youtube}`}
                frameBorder="0"
              />
            </div>
          )}
        </YoutubeWrapper>
        <SecondaryTitle>{secondaryTitle}</SecondaryTitle>
        {children}
      </Content>
    </Container>
  );
};
