import { Container } from '@material-ui/core'
import React from 'react'
import { PeopleInfo } from '@blockfint/website/contents/PeopleInfo'
import styled from 'styled-components'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import { ReactComponent as MailIcon } from '@blockfint/website/assets/icons/atoms-icon-mail.svg'
import { LinkButton } from '@blockfint/website/components/Buttons'
import { useRouter } from 'next/router'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { useTranslation } from 'react-i18next'

const Background = styled.div`
  min-height: 42rem;
  overflow: hidden;
  @media ${BREAKPOINT.tablet} {
    min-height: 62rem;
    background-color: white;
  }
  @media ${BREAKPOINT.desktop} {
    min-height: 100vh;
  }
  position: relative;
  :before {
    content: ' ';
    z-index: -2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fafafa;
  }
`
const Content = styled.div`
  .mailIcon {
    width: 1.5rem;
    padding-right: 4px;
  }
  p {
    color: var(--black);
    font-size: 1rem;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    white-space: pre-line;
  }
  .TeamLeadPic {
    h5 {
      text-align: left;
    }

    .Name {
      padding-top: 1.5rem;
      font-size: 1.625rem;
    }
    .Position {
      color: #00b8de;
      font-size: 1rem;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
    .Info {
      padding-bottom: 1.875rem;
      .story {
        text-align: left;
      }
    }
    .Contact {
      padding-bottom: 3.75rem;
      /* max-width: 22rem; */
    }
  }
  @media ${BREAKPOINT.tablet} {
    .TeamLeadPic {
      .Story {
        max-width: 28.25rem;
      }
      .Name {
        padding-top: 0;
        font-size: 1.625rem;
      }
      .Position {
        font-size: 1.25rem;
        padding: 0;
        padding-bottom: 1rem;
      }
    }
  }
  @media ${BREAKPOINT.desktop} {
    .TeamLeadPic {
      .Story {
        max-width: 39.25rem;
      }
      .Name {
        font-size: 2.625rem;
      }
      .Position {
        font-size: 1.625rem;
      }
    }
  }
  /* text-align: center; */
`

const Person = styled.img`
  width: 100%;
  @media ${BREAKPOINT.tablet} {
    width: 15.7rem;
  }
  @media ${BREAKPOINT.desktop} {
    width: 23.125rem;
    height: 30.8125rem;
  }
  @media ${BREAKPOINT.desktopHd} {
    width: 19.125rem;
    height: 25.8125rem;
  }
`

const Layout = styled.div`
  @media ${BREAKPOINT.tablet} {
    padding-top: 4.125rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media ${BREAKPOINT.desktop} {
    padding-top: 6.25rem;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 3.75rem;
  }
`

const ContainerPicture = styled.div`
  &&& {
    padding: 0;
  }
  @media ${BREAKPOINT.tablet} {
    &&& {
      /* padding: 2.5rem; */

      text-align: center;
      padding-top: 0;
    }
  }
  @media ${BREAKPOINT.desktop} {
    &&& {
      /* padding-left: 8.4375rem; */
    }
  }
`
const ContainerButton = styled(Container)`
  &&& {
    padding: 1rem;
  }
  @media ${BREAKPOINT.tablet} {
    &&& {
      padding: 2.5rem;
    }
  }
  @media ${BREAKPOINT.desktop} {
    &&& {
      padding: 0rem;
    }
    .Button {
      display: none;
    }
  }
`
const ContainerContents = styled.div`
  &&& {
    padding: 0;

    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media ${BREAKPOINT.tablet} {
    &&& {
      /* padding: 2.5rem; */
      /* text-align: center; */
      padding-top: 0;
    }
  }
  @media ${BREAKPOINT.desktop} {
  }
`

const ImageOverlay: React.FC<{ imgSrc: string }> = ({ imgSrc }) => {
  return <Person src={`/images/${imgSrc}`} alt="Credit by Poster" />
}
const ContactDetail: React.FC<{ contact: string }> = ({ contact }) => {
  if (contact !== 'undefined') {
    return (
      <div style={{ display: 'flex', alignItems: 'start' }}>
        <div style={{ paddingTop: '0.3rem', paddingRight: '0.5rem' }}>
          <MailIcon />
        </div>
        <p>{contact}</p>
      </div>
    )
  } else {
    return null
  }
}

export const TeamDetailpage: React.FC<PeopleInfo> = ({ name, position, desc, imgSrc, contact }) => {
  const router = useRouter()
  const { t } = useTranslation()
  return (
    <Background>
      <Container maxWidth="lg" style={{ paddingBottom: '6.25rem' }}>
        <ContainerButton>
          <div className="Button" onClick={() => router.push(`/team`, `/team`, { shallow: true })}>
            <LinkButton>Back</LinkButton>
          </div>
        </ContainerButton>
        <Layout>
          <ContainerPicture>
            <ImageOverlay imgSrc={imgSrc} />
          </ContainerPicture>

          <ContainerContents>
            <Content>
              <div className="TeamLeadPic">
                <div className="Info">
                  <h5 className="Name">{t(`team-details.${name}`)}</h5>
                  <h5 className="Position">{t(`team-details.${position}`)}</h5>
                  <p className="Story">{t(`team-details.${desc}`)}</p>
                </div>
                <div className="Contact">
                  <ContactDetail contact={t(`team-details.${contact}`)} />
                </div>
              </div>
            </Content>
          </ContainerContents>
        </Layout>
      </Container>
      <ContactBanner />
    </Background>
  )
}
