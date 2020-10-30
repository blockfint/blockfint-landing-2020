import React from 'react'
import clsx from 'clsx'
import { BREAKPOINT } from '../../../../assets/globalStyle'
import { Hamburger } from '../../../../assets/Buttons/Hamburger'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import styled, { css, keyframes } from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { ReactComponent as BlockFintColor } from '../../../../assets/logos/Blockfint-Color.svg'

type MoveProps = {
  move: boolean
}
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
  color: var(--black);

  .MuiButtonBase-root {
    height: 4.25rem;
  }
  .MuiButtonBase-root:hover {
    background-color: white;
  }
  /* .MuiList-root {
    height: 6.25rem;
    
  } */

  &&&.MuiList-padding {
    margin-left: 2.56rem;
  }
  .MuiTypography-root {
    font-size: 1.625rem;
    font-family: Montserrat;
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
const DrawerPosition = styled('div')`
  padding-right: 1rem;
  padding-bottom: 4px;
  @media ${BREAKPOINT.tablet} {
    padding-right: 1.5rem;
  }
`
const BottomTitle = styled.div`
  position: fixed;
  bottom: 0;
  padding-bottom: 10px;
  .title {
    span {
      margin-left: 1.75rem;
      width: 72px;
      height: 24px;
      font-family: Nunito Sans;
      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: var(--black);
    }
    .bottomIcons {
      margin-top: 0.6rem;
      margin-bottom: 2.2rem;
      img {
        margin-right: 0.6875rem;
      }
      span {
        color: var(--black);
        margin-left: 1rem;
        a {
          color: var(--black) f9fa3;
        }
      }
    }
  }
`
const RipleMiddle = styled(ListItemText)`
  span {
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
    background-color: blue;
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
  /* position: absolute; */
  min-width: unset;
  padding: 0;
  z-index: 1600 !important;
  position: relative;
  animation-name: example;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  ${({ move }) =>
    move === 'true'
      ? css`
          animation: 0.2s ${MoveDown} forwards;
        `
      : css`
          animation: 0.2s ${MoveUp} forwards;
        `};
`

const TopLogoWithHam = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 4.375rem;
  grid-template-columns: 1fr 1fr;
`
interface PropsColor {
  status: boolean
  id: string
}

export const Drawer = ({ status, id = '' }: PropsColor) => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false
  })
  const [ham, setHam] = React.useState(true)
  const [animate, setAnimate] = React.useState(true)
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = React.useState(router.asPath)

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: any) => {
    setSelectedIndex(index)
    // console.log(router.asPath)
  }

  // const { locale } = useIntl()

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
    // console.log(state.right)
  }

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <TopLogoWithHam>
        <div>
          <a href="/" style={{ cursor: 'pointer' }}>
            <BlockFintColor
              style={{ marginTop: '2rem', marginBottom: '2rem', marginLeft: '2.56rem', height: '2rem', width: '9rem' }}
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
            <RipleMiddle primary="About" />
          </ListItem>
        </Link>
        <Link passHref href={`/work`} as={`/work`}>
          <ListItem
            button
            selected={selectedIndex === `/work`}
            onClick={(event) => handleListItemClick(event, `/work`)}
          >
            <RipleMiddle primary="Works" />
          </ListItem>
        </Link>
        <Link passHref href={`/team`} as={`/team`}>
          <ListItem
            button
            selected={selectedIndex === `/team`}
            onClick={(event) => handleListItemClick(event, `/team`)}
          >
            <RipleMiddle primary="Team" />
          </ListItem>
        </Link>
        <Link passHref href={`/contact`} as={`/contact`}>
          <ListItem
            button
            selected={selectedIndex === `/contact`}
            onClick={(event) => handleListItemClick(event, `/contact`)}
          >
            <RipleMiddle primary="Contact" />
          </ListItem>
        </Link>
      </MainNav>

      <BottomTitle>
        <div className="title">
          <div className="bottomIcons">
            <span>
              <a
                href="https://www.facebook.com/Blockfint-498494450914265/"
                style={{ cursor: 'pointer', color: 'white' }}
              >
                <img src="/icons/facebook.svg" alt="facebook" width="36" />
              </a>
              <img src="/icons/youtube.svg" alt="youtube" width="36" />
              <img src="/icons/twitter.svg" alt="twitter" width="36" />
              <img src="/icons/instagram.svg" alt="instagram" width="36" />
              <img src="/icons/linkin.svg" alt="linkin" width="36" />{' '}
            </span>
          </div>
        </div>
      </BottomTitle>
    </div>
  )

  const ColorToggle = state.right
  return (
    <DrawerPosition>
      {(['right'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <DrawerHamburgerButton move={ham.toString()} onClick={toggleDrawer(anchor, ham)} aria-label="Hamburger">
            <Hamburger status={animate} ColorHam={status} DrawerToggle={ColorToggle} />
          </DrawerHamburgerButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </DrawerPosition>
  )
}
