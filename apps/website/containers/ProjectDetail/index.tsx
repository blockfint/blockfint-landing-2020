import React from 'react'
import styled from 'styled-components'
import { ProjectInfo } from '@blockfint/website/contents/projects'
import { Container } from '@material-ui/core'
import { ArrowLink } from '@blockfint/website/components/ArrowLink'
import { Benefits } from './components/Benefits'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { useTranslation } from 'react-i18next'
const Content = styled.div`
  margin: 6rem 0;
`

const Logo = styled.img`
  height: 4.25rem;
  margin-bottom: 0.5rem;
`
const TagsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`
const Title = styled.h3`
  margin-bottom: 1rem;
  max-width: 60rem;
`

const Desc = styled.p`
  max-width: 60rem;
  margin-bottom: 1.5rem;
  line-height: 1.88;
`
export const ProjectDetail: React.FC<ProjectInfo> = ({
  logoSrc,
  title,
  description,
  imgSrc,
  linkHref,
  benefits,
  youtube
}) => {
  const { t } = useTranslation()
  return (
    <>
      <Container maxWidth="lg">
        <Content>
          <Logo src={`/images/partners/${logoSrc}`} />
          <TagsWrapper></TagsWrapper>
          <Title>{t(`project.${title}`)}</Title>
          <Desc>{t(`project.${description}`)}</Desc>
          <ArrowLink href={linkHref}>{t('project.partner-updates')}</ArrowLink>
          <Benefits benefits={benefits} />
          {imgSrc && <img src={imgSrc} alt={title} />}
          {youtube && (
            <div
              className="video"
              style={{
                position: 'relative',
                paddingBottom: '56.25%' /* 16:9 */,
                paddingTop: 25,
                height: 0
              }}
            >
              <iframe
                title={title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                src={`https://www.youtube.com/embed/${youtube}`}
                frameBorder="0"
              />
            </div>
          )}
        </Content>
      </Container>
      <ContactBanner />
    </>
  )
}
