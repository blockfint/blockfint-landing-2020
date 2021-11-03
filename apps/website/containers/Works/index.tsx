import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'
import { PostCard } from '@blockfint/website/components/PostCard'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { SuccessStory } from './components/SuccessStory'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { useTranslation } from 'react-i18next'
const TopText = styled.h2`
  text-align: center;
  font-size: 2.125rem;
  @media ${BREAKPOINT.tablet} {
    font-size: 3.375rem;
    line-height: 1.22;
  }
`
const TopPage = styled.div`
  padding: 2.5rem 0;
  @media ${BREAKPOINT.tablet} {
    padding: 3.75rem 0;
  }
  @media ${BREAKPOINT.desktop} {
    padding: 6.25rem 0;
  }
`
const CardContainer = styled.div`
  display: grid;
  grid-row-gap: 1.5rem;
  justify-items: center;
  @media ${BREAKPOINT.desktop} {
    grid-template-columns: repeat(2, max-content);
    grid-gap: 1.875rem;
  }
`
export const Works = () => {
  const { t } = useTranslation()

  const projects = useMemo(
    () => [
      {
        id: 'neo_bank',
        name: 'Thinker Bank',
        image: '/images/neobank-card.png',
        description: t('common.neobank-quote'),
        link: '/products/thinker-bank'
      },
      {
        id: 'thinker',
        name: 'Thinker LOS',
        image: '/images/thinker-los-card.png',
        description: t('common.thinker-quote'),
        link: '/products/thinker-los'
      },
      {
        id: 'thinker-wise',
        name: 'Thinker WISE',
        image: '/images/thinker-wise-card.png',
        description: t('common.thinker-wise-quote'),
        link: '/products/thinker-wise'
      },
      {
        id: 'gideon',
        name: 'Gideon',
        image: '/images/gideon-card.png',
        description: t('common.gideon-quote'),
        link: '/products/gideon'
      },
      {
        id: 'agritrac',
        name: 'Agri Trac',
        image: '/images/agritrac-card.png',
        description: t('common.agri-quote'),
        link: '/products/agri-trac'
      },
      {
        id: 'vc',
        name: 'Verified Credentials',
        image: '/images/vc-card.svg',
        description: t('common.agri-quote'),
        link: '/products/vc'
      }
    ],
    [t]
  )
  return (
    <>
      <Container>
        <TopPage>
          <TopText style={{ color: 'var(--primary)' }}>{t('works.section-1-title-1')}</TopText>
          <TopText>{t('works.section-1-title-2')}</TopText>
        </TopPage>
        <CardContainer>
          {projects?.map(({ id, name, image, description, link }) => {
            return <PostCard key={id} title={name} imgSrc={image} desc={description} link={link} />
          })}
        </CardContainer>
        <SuccessStory />
      </Container>
      <ContactBanner />
    </>
  )
}
