import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Vector from 'assets/icons/atoms-icon-link.svg'
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
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .PictureOverlay {
    position: relative;
    margin: 2.5rem auto 0;
    width: 15.25rem;
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
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 25%;
    text-align: center;
  }
  .Vector {
    width: 2rem;
    padding-left: 0.5rem;
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
    .PictureOverlay {
      width: 10.25rem;
      height: 13.6875rem;
    }
    .overlay {
      width: 10.25rem;
    }
    .text {
      font-size: 15px;
    }
    .Vector {
      width: 2rem;
      padding-left: 0.5rem;
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

    .PictureOverlay {
      width: 16.25rem;
      height: 22.5rem;
    }
    .overlay {
      width: 16.25rem;
    }
    .text {
      font-size: 20px;
    }
    .Vector {
      width: 2rem;
      padding-left: 0.5rem;
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
  { name: 'Suttipong Kanakakorn', path: 'suttipong', position: 'CEO', picture: 'num2X.jpg', key: 1 },
  { name: 'Shimmy Thomas', path: 'thomas', position: 'Business Development', picture: 'Thomas.png', key: 2 },
  { name: 'Wichai Patipaporn', path: 'wichai', position: 'Architecture', picture: 'wichai2X.png', key: 3 },
  {
    name: 'Ponlawat Tantivongampa',
    path: 'ponlawat',
    position: 'Project Management Director',
    picture: 'oak2X.png',
    key: 4
  },
  { name: 'Suwanna Nimitsurachart', path: 'suwanna', position: 'Business Development', picture: 'suwan2X.png', key: 5 },
  { name: 'Rattanapong Chairukwattana', path: 'rattanapong', position: 'CTO', picture: 'pae3X.png', key: 6 }
]

const ImageOverlays: React.FC<{ picture: string }> = ({ picture }) => {
  return (
    <div className="PictureOverlay">
      <img src={`/images/${picture}`} alt="Avatar" />
      <div className="overlay">
        <div className="text">
          Read Bio <img src={Vector} className="Vector" />
        </div>
      </div>
    </div>
  )
}
export const TeamLead: React.FC = () => {
  const FullDetail = Name_Positions.map((FullDetailItems) => {
    return (
      <div key={FullDetailItems.path}>
        <Link passHref href={`/team/${FullDetailItems.path}`}>
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
