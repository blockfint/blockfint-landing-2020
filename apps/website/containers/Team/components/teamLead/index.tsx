import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Vector } from '@blockfint/website/assets/icons/atoms-icon-link.svg'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
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
  padding-top: 3.75rem;
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
    padding-top: 1.875rem;
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
  {
    name: 'suttipong-kanakakorn',
    path: 'suttipong',
    position: 'suttipong-position',
    picture: 'num2X.png',
    key: 1
  },
  {
    name: 'shimmy-thomas',
    path: 'thomas',
    position: 'shimmy-position',
    picture: 'Thomas.png',
    key: 2
  },
  {
    name: 'wichai-patipaporn',
    path: 'wichai',
    position: 'wichai-position',
    picture: 'wichai2X.png',
    key: 3
  },
  {
    name: 'phathsinee-wathanasaranphong',
    path: 'phathsinee',
    position: 'phathsinee-position',
    picture: 'Aea.jpg',
    key: 4
  },
  {
    name: 'suwanna-nimitsurachart',
    path: 'suwanna',
    position: 'suwanna-position',
    picture: 'suwan2x.png',
    key: 5
  },
  {
    name: 'nisita-siratranon',
    path: 'nisita',
    position: 'nisita-position',
    picture: 'nisita.jpg',
    key: 6
  },
  {
    name: 'ponlawat-tantivongampa',
    path: 'ponlawat',
    position: 'ponlawat-position',
    picture: 'oak2x.png',
    key: 7
  },
  {
    name: 'rattanapong-chairukwattana',
    path: 'rattanapong',
    position: 'rattanapong-position',
    picture: 'pae2X.png',
    key: 8
  },
  {
    name: 'natnicha-temsiriwat',
    path: 'natnicha',
    position: 'natnicha-position',
    picture: 'natnicha.jpg',
    key: 9
  }
]

const ImageOverlays: React.FC<{ picture: string }> = ({ picture }) => {
  const { t } = useTranslation()
  return (
    <div className="PictureOverlay">
      <img src={`/images/${picture}`} alt="Avatar" />
      <div className="overlay">
        <div className="text">
          {t('team.read-bio')} <Vector className="Vector" />
        </div>
      </div>
    </div>
  )
}
export const TeamLead: React.FC = () => {
  const { t } = useTranslation()
  const FullDetail = Name_Positions.map((FullDetailItems) => {
    return (
      <div key={FullDetailItems.path}>
        <Link passHref href={`/team/${FullDetailItems.path}`}>
          <a>
            <ImageOverlays picture={FullDetailItems.picture} />
            <h5>{t(`team.${FullDetailItems.name}`)}</h5>
            <h5 className="Position">{t(`team.${FullDetailItems.position}`)}</h5>
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
            <Title style={{ color: '#19213c' }}>{t('team.our-leaders')}</Title>
          </div>
          <div className="TeamLeadPic">{FullDetail}</div>
        </Content>
      </Container>
    </Background>
  )
}
