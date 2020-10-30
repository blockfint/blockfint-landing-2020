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
const Footer = styled.div`
  padding-top: 3.75rem;
  overflow: hidden;
`
const Content = styled.div`
  .mailIcon {
    width: 1.5rem;
    padding-right: 4px;
  }
  h6 {
    color: var(--black);
    font-family: Montserrat;
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
    }
    .Position {
      color: #00b8de;
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
      max-width: 22rem;
    }
  }
  @media ${BREAKPOINT.tablet} {
    .TeamLeadPic {
      .Story {
        max-width: 28.25rem;
      }
      .Name {
        padding-top: 0;
      }
      .Position {
        padding: 0;
        padding-bottom: 1rem;
      }
    }
  }
  @media ${BREAKPOINT.desktopHd} {
    .TeamLeadPic {
      .Story {
        max-width: 39.25rem;
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
    width: 28.125rem;
    height: 35.8125rem;
  }
`

const Layout = styled.div`
  @media ${BREAKPOINT.tablet} {
    padding-top: 4.125rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-column-gap: 2.5rem; */
  }
  @media ${BREAKPOINT.desktop} {
    padding-top: 6.25rem;
    grid-column-gap: 4.75rem;
  }
`

const ContainerPicture = styled(Container)`
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
      padding-left: 8.4375rem;
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
      <ContainerButton>
        <div className="Button" onClick={() => router.push(`/team`, `/team`, { shallow: true })}>
          <LinkButton>Back</LinkButton>
        </div>
      </ContainerButton>
      <Layout>
        <ContainerPicture>
          <ImageOverlay imgSrc={imgSrc} />
        </ContainerPicture>

        <Container maxWidth="lg">
          <Content>
            <div className="TeamLeadPic">
              <div className="Info">
                <h5 className="Name">{name}</h5>
                <h5 className="Position">{position}</h5>
                <h6 className="Story">{desc}</h6>
              </div>
              <div className="Contact">
                <h6>
                  <ContactDetail contact={contact} />
                </h6>
              </div>
            </div>
          </Content>
        </Container>
      </Layout>
      <Footer>
        <Slider sectionName="Our Team" images={images} description={description} />
      </Footer>
      <JoinUsBanner />
    </Background>
  )
}
const images = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg']
const description = ['Enjoying free lunch', 'Enjoying free lunch', 'Enjoying free lunch']
