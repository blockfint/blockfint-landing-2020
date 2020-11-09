import { Container } from '@material-ui/core'
import React from 'react'
import { JoinUsBanner } from 'components/JoinUsBanner'
import { Slider } from 'components/Slider'
import { PeopleInfo } from 'contents/PeopleInfo'
import styled from 'styled-components'
import { BREAKPOINT } from 'assets/globalStyle'
import MailIcon from 'assets/icons/atoms-icon-mail.svg'
import { LinkButton } from 'components/Buttons'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ContactBanner } from 'components/ContactBanner'

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
  h6 {
    color: var(--black);
    font-size: 1rem;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
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
  if (contact) {
    return (
      <div style={{ display: 'flex', alignItems: 'start' }}>
        <div style={{ paddingTop: '0.3rem', paddingRight: '0.5rem' }}>
          <img src={MailIcon} className="mailIcon" />
        </div>
        {contact}
      </div>
    )
  } else {
    return null
  }
}

export const TeamDetailpage: React.FC<PeopleInfo> = ({ name, position, desc, imgSrc, contact }) => {
  const router = useRouter()

  // const handleClick = () => {
  //   router.push(`/team`, `/team`, { shallow: true })
  // }
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
                  <h5 className="Name">{name}</h5>
                  <h5 className="Position">{position}</h5>
                  {desc.split('/n').map((text) => (
                    <>
                      <h6 className="Story" style={{ textIndent: '4ch' }}>
                        {text}
                      </h6>
                      <br />
                    </>
                  ))}
                </div>
                <div className="Contact">
                  <h6>
                    <ContactDetail contact={contact} />
                  </h6>
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
