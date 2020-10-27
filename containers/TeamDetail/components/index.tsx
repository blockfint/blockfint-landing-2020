import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { BREAKPOINT } from 'assets/globalStyle'
import MailIcon from 'assets/icons/atoms-icon-mail.svg'
import { LinkButton } from 'components/Buttons'
import Link from 'next/link'

const Background = styled.div`
  min-height: 42rem;
  overflow: hidden;
  @media ${BREAKPOINT.tablet} {
    min-height: 62rem;
    background-color: lightgrey;
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
  .TeamLeadPic {
    h5 {
      text-align: left;
    }
    h6 {
      color: grey;
      text-align: left;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.88;
      letter-spacing: normal;
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
    }
    .Contact {
      padding-bottom: 3.75rem;
      max-width: 22rem;
    }
  }
  @media ${BREAKPOINT.tablet} {
    .TeamLeadPic {
      .Name {
        padding-top: 0;
      }
      .Position {
        padding: 0;
        padding-bottom: 1rem;
      }
    }
  }
  @media ${BREAKPOINT.desktop} {
    .TeamLeadPic {
      .Story {
        max-width: 28.25rem;
      }
    }
  }
  text-align: center;
`

const Person = styled.img`
  width: 100%;

  @media ${BREAKPOINT.tablet} {
    width: 15.7rem;
  }
  @media ${BREAKPOINT.desktop} {
    width: 23.125rem;
  }
`

const Layout = styled.div`
  @media ${BREAKPOINT.tablet} {
    padding-top: 4.125rem;
    display: grid;
    grid-template-columns: 40% 60%;
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
`
const ContainerButton = styled(Container)`
  background-color: lightgrey;
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

const ImageOverlay = () => {
  return <Person src={'/images/rectangle2x.jpg'} alt="Avatar" />
}

export const TeamDetailpage: React.FC = () => {
  return (
    <Background>
      <ContainerButton>
        <div className="Button">
          <LinkButton>Back</LinkButton>
        </div>
      </ContainerButton>
      <Layout>
        <ContainerPicture>
          <ImageOverlay />
        </ContainerPicture>

        <Container maxWidth="lg">
          <Content>
            <div className="TeamLeadPic">
              <div className="Info">
                <h5 className="Name">Suttipong Kanakakorn</h5>
                <h5 className="Position">CEO</h5>
                <h6 className="Story">
                  <div>
                    “Nick” is a technology wizard. He dreams about tech even in his sleep!. Before founding Blockfint,
                    he worked with large multinational tech companies in the US leading their product development
                    efforts for over 25years. He is a passionate fitness enthusiast competing himself and stretching his
                    physical limits.
                    <br />
                    <br />
                  </div>
                  <div>
                    His fitness passion has taken him across the world participating in Iron Man and Marathons. He is
                    humble in his conquests. He is also our resident Blockchain guru and can talk technology and
                    business with ease.
                    <br />
                    <br />
                  </div>
                  <div>
                    His brilliance and humility has made the startup strong and successful and clients love us for our
                    grit and determination and passion to deliver the best. He is also our part-time barista serving the
                    best coffee to our coffee loving Blockfinters’.
                    <br />
                  </div>
                </h6>
              </div>
              <div className="Contact">
                <h6>Reach out to him at</h6>
                <h6>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={MailIcon} className="mailIcon" />
                    Nick@blockfint.com <br />
                  </div>
                  and he will be happy to have a technology infused coffee with you anytime.
                </h6>
              </div>
            </div>
          </Content>
        </Container>
      </Layout>
    </Background>
  )
}
