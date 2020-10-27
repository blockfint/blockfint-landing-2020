import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { BREAKPOINT } from 'assets/globalStyle'
import Link from 'next/link'
const Background = styled.div`
  min-height: 42rem;
  overflow: hidden;
  @media ${BREAKPOINT.tablet} {
    min-height: 62rem;
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
  padding: 8.25rem 0;
  a {
    text-decoration: none;
    color: black;
  }
  img {
    display: block;
    object-fit: contain;
    width: 15.25rem;
  }
  .PictureOverlay {
    position: relative;
    margin: 2.5rem auto 0;
    width: 15.25rem;
    /* width: 100%; */
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 15.25rem;
    opacity: 0;
    transition: 0.5s ease;
    background-color: black;
  }

  .PictureOverlay:hover .overlay {
    opacity: 0.75;
  }
  .text {
    color: white;
    font-size: 20px;
    text-align: center;
  }

  .TeamLeadPic {
    h5 {
      padding-top: 0.5rem;
    }
    .Position {
      color: #00b8de;
      padding-bottom: 40px;
    }
  }
  @media ${BREAKPOINT.tablet} {
    /* padding: 12rem 0; */
    img {
      width: 100%;
    }
    .PictureOverlay {
      width: 10.25rem;
    }
    .overlay {
      width: 10.25rem;
    }
    .TeamLeadPic {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 4.1rem;
      h5 {
        font-size: 1rem;
      }
      .Position {
        color: #00b8de;
        padding-bottom: 40px;

        font-size: 1rem;
      }
    }
  }
  @media ${BREAKPOINT.desktop} {
    min-height: 100vh;
    img {
      width: 100%;
    }
    .PictureOverlay {
      width: 16.25rem;
    }
    .overlay {
      width: 16.25rem;
    }
    .TeamLeadPic {
      padding-top: 6.25rem;
      h5 {
        font-size: 1.25rem;
      }
      .Position {
        font-size: 1.25rem;
      }
    }
  }
  text-align: center;
`
const Title = styled.h1`
  line-height: 1.15;
  color: var(--primary);

  @media ${BREAKPOINT.desktop} {
    min-width: 49.75rem;
    &&& {
      font-size: 54px;
    }
  }
`

const Name_Positions = [
  { name: 'Suttipong Kanakakorn', position: 'CEO', picture: 'num2X.jpg', key: 1 },
  { name: 'Shimmy Thomas', position: 'Business Development', picture: 'mock.png', key: 2 },
  { name: 'Wichai Patipaporn', position: 'Architecture', picture: 'mock.png', key: 3 },
  { name: 'Ponlawat Tantivongampa', position: 'Project Management Director', picture: 'oak2X.png', key: 4 },
  { name: 'Suwanna Nimitsurachart', position: 'Business Development', picture: 'suwan2X.png', key: 5 },
  { name: 'Rattanapong Chairukwattana', position: 'CTO', picture: 'pae.png', key: 6 }
]

const ImageOverlays: React.FC<{ picture: string }> = ({ picture }) => {
  return (
    <div className="PictureOverlay">
      <img src={`/images/${picture}`} alt="Avatar" />
      <div className="overlay">
        <div className="text">Hello World</div>
      </div>
    </div>
  )
}
export const TeamLead: React.FC = () => {
  const FullDetail = Name_Positions.map((FullDetailItems) => {
    return (
      <div>
        <Link passHref href="/teamDetail">
          <a>
            <ImageOverlays picture={FullDetailItems.picture} />
            <h5>{FullDetailItems.name}</h5>
            <h5 className="Position">{FullDetailItems.position}</h5>
          </a>
        </Link>
      </div>
    )
  })
  return (
    <Background>
      <Container maxWidth="lg">
        <Content>
          <div>
            <Title>Strong Team and </Title>
            <Title style={{ color: '#19213c' }}>Unique Working Environment</Title>
          </div>
          <div className="TeamLeadPic">{FullDetail}</div>
        </Content>
      </Container>
    </Background>
  )
}
