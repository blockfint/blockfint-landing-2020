import React from 'react';
import clsx from 'clsx';
import { BREAKPOINT } from '@blockfint/website/assets/globalStyle';
import { Hamburger } from '@blockfint/website/components/Hamburger';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled, { css, keyframes } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { ReactComponent as BlockFintColor } from '@blockfint/website/assets/logos/Blockfint-Color.svg';
import { useContactContext } from '@blockfint/website/components/ContactDialog';

type MoveProps = {
  move: boolean;
};
type Anchor = 'top' | 'left' | 'bottom' | 'right';

const MoveDown = keyframes`
 from {
      top: 13.5px;
    }
    to {
      top: 0px;
    }
`;
const MoveUp = keyframes`
 from {
      top: 0px;
    }
    to {
      top: 13.5px;
    }
`;
const useStyles = makeStyles({
  list: {
    width: 286,
  },
  fullList: {
    width: 'auto',
  },
});

const MainNav = styled(List)`
  .MuiButtonBase-root {
    height: 4.25rem;
  }
  .MuiListItem-button {
    padding: 0;
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
`;
const DrawerPosition = styled('div')`
  /* @media ${BREAKPOINT.tablet} {
    padding-right: 1.5rem;
  } */
`;
const BottomTitle = styled.div`
  position: fixed;
  bottom: 0;
  padding-bottom: 10px;

  .title {
    span {
      margin-left: 1.75rem;
      width: 72px;
      height: 24px;

      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
    }
    .bottomIcons {
      margin-top: 0.6rem;
      margin-bottom: 2.2rem;
      img {
        margin-right: 0.6875rem;
      }
      span {
        margin-left: 2.56rem;
      }
    }
  }
`;
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
    background-color: black;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  span:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
const DrawerHamburgerButton = styled(Button)<{ move: string }>`
  /* position: absolute; */
  min-width: unset;
  padding: 0;
  z-index: 1600 !important;
  position: relative;
  animation-name: example;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  /* ${({ move }) =>
    move === 'true'
      ? css`
          animation: 0.2s ${MoveDown} forwards;
        `
      : css`
          animation: 0.2s ${MoveUp} forwards;
        `}; */
`;

const TopLogoWithHam = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;

  justify-content: space-between;
  padding-right: 1.5rem;
`;
interface PropsColor {
  status: boolean;
  id: string;
}

export const Drawer = ({ status, id = '' }: PropsColor) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [ham, setHam] = React.useState(true);
  const [animate, setAnimate] = React.useState(true);
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = React.useState(router.asPath);
  const { onOpen } = useContactContext();
  const handleOpen = () => {
    onOpen();
  };
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: any
  ) => {
    setSelectedIndex(index);
    // console.log(router.asPath)
  };

  // const { locale } = useIntl()

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    setHam(!ham);
    setAnimate(!animate);
    // console.log(state.right)
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <TopLogoWithHam>
        <div>
          <a href="/" style={{ cursor: 'pointer' }}>
            <BlockFintColor
              style={{
                marginTop: '2rem',
                marginBottom: '2rem',
                marginLeft: '2.56rem',
                height: '2rem',
                width: '9rem',
              }}
            />
          </a>
        </div>
        <div>
          <Hamburger
            status={animate}
            ColorHam={status}
            DrawerToggle={ColorToggle}
          />
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
        <Link passHref href={`/works`} as={`/works`}>
          <ListItem
            button
            selected={selectedIndex === `/works`}
            onClick={(event) => handleListItemClick(event, `/works`)}
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

        <ListItem
          button
          selected={selectedIndex === `/contact`}
          onClick={handleOpen}
        >
          <RipleMiddle primary="Contact" />
        </ListItem>
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
              <a
                href="https://www.youtube.com/channel/UCTtEVhgmbDc9oYLy5mGC33g"
                style={{ cursor: 'pointer' }}
              >
                <img src="/icons/youtube.svg" alt="youtube" width="36" />
              </a>
              {/*{' '}
              <a href="https://www.instagram.com/blockfint/" style={{ cursor: 'pointer' }}>
                <img src="/icons/twitter.svg" alt="twitter" width="36" />
              </a>{' '}
              */}
              <a
                href="https://www.instagram.com/blockfint/"
                style={{ cursor: 'pointer' }}
              >
                <img src="/icons/instagram.svg" alt="instagram" width="36" />
              </a>
              <a
                href="https://th.linkedin.com/company/blockfint"
                style={{ cursor: 'pointer' }}
              >
                <img src="/icons/linkin.svg" alt="linkin" width="36" />
              </a>
            </span>
          </div>
        </div>
      </BottomTitle>
    </div>
  );

  const ColorToggle = state.right;
  return (
    <DrawerPosition>
      {(['right'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <DrawerHamburgerButton
            move={ham.toString()}
            onClick={toggleDrawer(anchor, ham)}
            aria-label="Hamburger"
          >
            <Hamburger
              status={animate}
              ColorHam={status}
              DrawerToggle={ColorToggle}
            />
          </DrawerHamburgerButton>
          <SwipeableDrawer
            anchor={anchor}
            // open={false}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </DrawerPosition>
  );
};
