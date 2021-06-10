import { Container } from '@material-ui/core'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Background = styled.div`
  background-color: var(--primary-2);
`
const Content = styled.div`
  padding: 3.75rem 0.5rem 0;
`

const Title = styled.h3`
  margin-bottom: 3.5rem;
`

const List = styled.div`
  display: grid;

  grid-template-columns: repeat(1, 17.5rem);
  justify-content: flex-start;
  grid-gap: 2rem 6.25rem;
  @media ${BREAKPOINT.tablet} {
    justify-content: flex-start;
    grid-template-columns: repeat(2, 18.75rem);
  }
  @media ${BREAKPOINT.desktop} {
    justify-content: flex-end;
    grid-template-columns: repeat(2, 18.75rem);
  }
`

const Item = styled.div`
  padding: 2.5rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-auto-rows: max-content;
  position: relative;
  ::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--grey-1);
  }

  p {
    line-height: 1.88;
  }
`

const SubTitle = styled.h4`
  @media ${BREAKPOINT.tablet} {
    font-size: 1.625rem;
  }
`
interface Props {
  problem: string
  solution: string
}
export const ProductConclusion: React.FC<Props> = ({ problem, solution }) => {
  const { t } = useTranslation()
  return (
    <Background>
      <Container maxWidth="lg">
        <Content>
          <Title>{t('work-details.conclusion')}</Title>
          <List>
            <Item>
              <SubTitle>{t('work-details.problem')}</SubTitle>
              <p>{problem}</p>
            </Item>
            <Item>
              <SubTitle>{t('work-details.solution')}</SubTitle>
              <p>{solution}</p>
            </Item>
          </List>
        </Content>
      </Container>
    </Background>
  )
}
