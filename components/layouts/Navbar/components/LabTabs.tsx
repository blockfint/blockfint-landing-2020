import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import styled from 'styled-components'
import { BREAKPOINT } from '../../../../assets/globalStyle'
import { OrangeButton } from 'components/Buttons'
import { ReactComponent as BlockFintColor } from '../../../../assets/logos/Blockfint-Color.svg'
import { ReactComponent as BlockFintWhite } from '../../../../assets/logos/Blockfint-White.svg'

const LeftnavTab = styled.div`
  display: flex;
  align-items: center;

  .NavTab {
    display: none;
  }
  @media ${BREAKPOINT.desktop} {
    .NavTab {
      display: grid;
      min-width: 120px;
    }
    .MuiTabs-indicator {
      background-color: transparent;
    }
  }
`
type ColorProps = {
  status: boolean
}

const AWithRipple = styled.a<ColorProps>`
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  height: 1.5rem;
  margin: auto 0;
  color: ${(props) => (props.status ? 'white' : 'var(--black)')};
  text-decoration: none;
  text-transform: none;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => (props.status ? 'white' : 'var(--black)')};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
  &.active {
    &:before {
      visibility: visible;
      transform: scaleX(1);
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${(props) => (props.status ? 'white' : 'var(--black)')};
      visibility: visible;
      transform: scaleX(1);
      visibility: visible;
      transform: scaleX(1);
    }
  }
`

const RoutesList = styled.div`
  margin-left: 2.625rem;
  display: grid;
  grid-gap: 2.625rem;
  grid-auto-flow: column;
`

interface PropsColor {
  status: boolean
  id?: string
}

export const LabTabs = ({ status, id = '' }: PropsColor) => {
  const router = useRouter()

  // const { locale } = useIntl()

  return (
    <LeftnavTab>
      <RoutesList className="NavTab">
        {routes.map(({ label, path }) => {
          const isActive = router.asPath.includes(path)

          return (
            <Link href={`${path}`} as={`${path}`} passHref key={label}>
              <AWithRipple status={status} id={id} className={isActive && 'active'}>
                {label}
              </AWithRipple>
            </Link>
          )
        })}
        <Link passHref href="/contact">
          <a>
            <OrangeButton>Contact us</OrangeButton>
          </a>
        </Link>
      </RoutesList>
    </LeftnavTab>
  )
}

const routes = [
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Works',
    path: '/works'
  },
  {
    label: 'Team',
    path: '/team'
  }
]
