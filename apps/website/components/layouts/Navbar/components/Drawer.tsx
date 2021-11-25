import React from 'react'
import { Hamburger } from '@blockfint/website/components/Hamburger'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { ReactComponent as BlockFintColor } from '@blockfint/website/assets/logos/Blockfint-Color.svg'
import { useContactContext } from '@blockfint/website/components/ContactDialog'
import { useTranslation } from 'react-i18next'
import { I18nSelector } from '@blockfint/website/components/I18nSelector'
import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
type Anchor = 'top' | 'left' | 'bottom' | 'right'

const MoveDown = keyframes`
 from {
      top: 13.5px;
    }
    to {
      top: 0px;
    }
`
const MoveUp = keyframes`
 from {
      top: 0px;
    }
    to {
      top: 13.5px;
    }
`
const useStyles = makeStyles({
  list: {
    width: 286
  },
  fullList: {
    width: 'auto'
  }
})

const MainNav = styled(List)`
  overflow-y: auto;
  .MuiButtonBase-root {
    padding: 0.875rem 0;
    padding-left: 2.5rem;
  }

  .MuiButtonBase-root:hover {
    background-color: white;
  }

  /* &&&.MuiList-padding {
    padding-left: 2.56rem;
  } */
  .MuiTypography-root {
    font-size: 1.625rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: -1px;
  }

  .Mui-selected {
    background-color: white;
    .MuiTypography-root:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--black);
      visibility: visible;
      transform: scaleX(1);
      visibility: visible;
      transform: scaleX(1);
    }
  }
  .Mui-selected:hover {
    background-color: white;
  }
`

const SocialGroup = styled.div`
  margin-top: auto;
  padding-bottom: 2.5rem;
  margin-left: 2.5rem;
  img {
    margin-right: 0.6875rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  @media ${BREAKPOINT.tablet} {
    padding-bottom: 3.75rem;
  }
`
const RipleMiddle = styled(ListItemText)`
  span {
    font-family: 'Montserrat', 'Prompt', sans-serif;
    position: relative;
    &.MuiTypography-displayBlock {
      width: fit-content;
    }
  }
  span:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  span:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`
const DrawerHamburgerButton = styled(Button)<{ move: string }>`
  min-width: unset;
  padding: 0;
  z-index: 1600 !important;
  position: relative;
  animation-name: example;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
`

const TopLogoWithHam = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  padding-right: 1.5rem;
`
const Divider = styled.div`
  display: grid;
  background: black;
  height: 1px;
  margin: 1.5rem 2.5rem 1.5rem 0;
  @media ${BREAKPOINT.tablet} {
    margin: 2rem 2.5rem 2rem 0;
  }
`
const DrawerContainer = styled.div`
  background: var(--primary-2);
  height: 100%;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  overflow-y: unset;
  @media ${BREAKPOINT.tablet} {
    height: 100vh;
  }
`
const Footer = styled.div`
  margin-left: 2.5rem;
`
interface PropsColor {
  status: boolean
  id: string
}

export const Drawer = ({ status, id = '' }: PropsColor) => {
  const [state, setState] = React.useState({
    right: false
  })
  const [ham, setHam] = React.useState(true)
  const [animate, setAnimate] = React.useState(true)
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = React.useState(router.asPath)
  const { onOpen } = useContactContext()
  const { t } = useTranslation()
  const handleOpen = () => {
    onOpen()
  }
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: any) => {
    setSelectedIndex(index)
  }

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
    setHam(!ham)
    setAnimate(!animate)
  }

  const anchor = 'right' as Anchor
  const ColorToggle = state.right
  return (
    <>
      <DrawerHamburgerButton move={ham.toString()} onClick={toggleDrawer(anchor, ham)} aria-label="Hamburger">
        <Hamburger status={animate} ColorHam={status} DrawerToggle={ColorToggle} />
      </DrawerHamburgerButton>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        <DrawerContainer
          // className={clsx(classes.list, {
          //   [classes.fullList]: anchor === 'top' || anchor === 'bottom'
          // })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <TopLogoWithHam>
            <div>
              <a href="/" style={{ cursor: 'pointer' }}>
                <BlockFintColor
                  style={{
                    margin: '1.5rem 0',
                    marginLeft: '2.56rem',
                    height: '2rem',
                    width: '9rem'
                  }}
                />
              </a>
            </div>
            <div>
              <Hamburger status={animate} ColorHam={status} DrawerToggle={ColorToggle} />
            </div>
          </TopLogoWithHam>
          <MainNav>
            <Link passHref href={`/about`} as={`/about`}>
              <ListItem
                button
                selected={selectedIndex === `/about`}
                onClick={(event) => handleListItemClick(event, `/about`)}
              >
                <RipleMiddle primary={t('common.about')} />
              </ListItem>
            </Link>
            <Link passHref href={`/blog`} as={`/blog`}>
              <ListItem
                button
                selected={selectedIndex === `/blog`}
                onClick={(event) => handleListItemClick(event, `/blog`)}
              >
                <RipleMiddle primary={t('common.blog')} />
              </ListItem>
            </Link>
            <Link passHref href={`/works`} as={`/works`}>
              <ListItem
                button
                selected={selectedIndex === `/works`}
                onClick={(event) => handleListItemClick(event, `/works`)}
              >
                <RipleMiddle primary={t('common.works')} />
              </ListItem>
            </Link>
            <Link passHref href={`/team`} as={`/team`}>
              <ListItem
                button
                selected={selectedIndex === `/team`}
                onClick={(event) => handleListItemClick(event, `/team`)}
              >
                <RipleMiddle primary={t('common.team')} />
              </ListItem>
            </Link>
            <ListItem button selected={selectedIndex === `/contact`} onClick={handleOpen}>
              <RipleMiddle primary={t('common.contact')} />
            </ListItem>
          </MainNav>
          <Footer>
            <Divider />
            <I18nSelector />
          </Footer>
          <SocialGroup>
            <a href="https://www.facebook.com/Blockfint-498494450914265/" style={{ cursor: 'pointer', color: 'white' }}>
              <img src="/icons/facebook.svg" alt="facebook" width="36" />
            </a>
            <a href="https://www.youtube.com/channel/UCTtEVhgmbDc9oYLy5mGC33g" style={{ cursor: 'pointer' }}>
              <img src="/icons/youtube.svg" alt="youtube" width="36" />
            </a>

            <a href="https://www.instagram.com/blockfint/" style={{ cursor: 'pointer' }}>
              <img src="/icons/instagram.svg" alt="instagram" width="36" />
            </a>
            <a href="https://th.linkedin.com/company/blockfint" style={{ cursor: 'pointer' }}>
              <img src="/icons/linkin.svg" alt="linkin" width="36" />
            </a>
          </SocialGroup>
        </DrawerContainer>
      </SwipeableDrawer>
    </>
  )
}
