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
  img {
    margin-top: 40px;
    width: 15.25rem;
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
    padding: 12rem 0;
    img {
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
      width: 16.875rem;
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

const Desc = styled.p`
  line-height: 1.88;
  margin: 1.5rem auto 2.5rem;

  @media ${BREAKPOINT.tablet} {
    margin: 1.5rem auto 3.75rem;
    padding: 0 7rem;
  }
  @media ${BREAKPOINT.desktop} {
    max-width: 46rem;
  }
`

export const TeamLead: React.FC = () => {
  return (
    <Background>
      <Container maxWidth="lg">
        <Content>
          <div>
            <Title>Strong Team and </Title>
            <Title style={{ color: '#19213c' }}>Unique Working Environment</Title>
          </div>
          <div className="TeamLeadPic">
            <div>
              <img src={'/images/rectangle2x.jpg'} />
              <h5>Suttipong Kanakakorn</h5>
              <h5 className="Position">CEO</h5>
            </div>
            <div>
              <img src={'/images/mock.png'} />
              <h5>Shimmy Thomas</h5>
              <h5 className="Position">Business Development</h5>
            </div>
            <div>
              <img src={'/images/mock.png'} />
              <h5>Wichai Patipaporn</h5>
              <h5 className="Position">Architecture</h5>
            </div>
            <div>
              <img src={'/images/oak2X.png'} />
              <h5>Ponlawat Tantivongampa</h5>
              <h5 className="Position">Project Management Director</h5>
            </div>
            <div>
              <img src={'/images/suwan2X.png'} />
              <h5>Suwanna Nimitsurachart</h5>
              <h5 className="Position">Business Development</h5>
            </div>
            <div>
              <img src={'/images/pae.png'} />
              <h5>Rattanapong Chairukwattana</h5>
              <h5 className="Position">CTO</h5>
            </div>
          </div>
        </Content>
      </Container>
    </Background>
  )
}
