import React from 'react'
import styled from 'styled-components'
import { Button, Container, IconButton } from '@material-ui/core'
import { Drawer } from './components/Drawer'
import { BREAKPOINT } from '../../../assets/globalStyle'
import { LabTabs } from './components/LabTabs'
import { Logo } from './components/Logo'

type BoxShadow = {
  status: boolean
}
const Box = styled.div<BoxShadow>`
  height: 4.5rem;
  width: 100%;
  background-color: ${(props) => (props.status ? 'transparent' : 'white')};
  color: #2076a9;
  box-sizing: border-box;
  box-shadow: ${(props) => (props.status ? '0' : '0 2px 4px 0 rgba(0, 0, 0, 0.1)')};
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`
const MenuMainLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .Login {
    display: none;
  }
  .LangButton {
    .ThaiButton {
      color: #2076a9;
      font-family: Nunito Sans;
      font-size: 0.9rem;
      margin-right: 0.75rem;
    }
    .EngButton {
      color: white;
      font-family: Nunito Sans;
      font-size: 0.9rem;
      background-color: #2076a9;
      margin-right: 1.4rem;
    }
  }
  .Drawer {
    display: flex;
    justify-content: flex-end;
  }
  @media ${BREAKPOINT.desktop} {
    .Login {
      display: flex;
      padding-right: 2.15rem;
      .LoginAndRegis {
        color: #2076a9;
        font-family: Nunito Sans;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
    .Drawer {
      display: none;
    }
  }
`

interface PropsColor {
  status: boolean
  id?: string
}

const RightNavBar = ({ status, id }: PropsColor) => {
  return (
    <RightNav>
      {/* <div className="Login">
        <Button aria-label="Login" size="small" className="LoginAndRegis">
          Log-in/Register
        </Button>
      </div>
      <div className="LangButton">
        <IconButton aria-label="Thai" className="ThaiButton" size="small">
          TH
        </IconButton>
        <IconButton aria-label="Eng" className="EngButton" size="small">
          EN
        </IconButton>
      </div> */}
      <div style={{ paddingRight: '2.5rem' }}>
        <LabTabs status={status} id={id} />
      </div>
      <div className="Drawer">
        <Drawer status={status} id={id} />
      </div>
    </RightNav>
  )
}
// interface PropsColor {
//   status: boolean
// }

interface Props {
  transparent: boolean
  id?: string
}
export const Navbar: React.FC<Props> = ({ transparent, id }) => {
  // console.log(transparent)
  return (
    <Box status={transparent}>
      <Container maxWidth="lg">
        <MenuMainLayout>
          <div>
            <Logo status={transparent} id={id} />
          </div>
        </MenuMainLayout>
      </Container>
      <div>
        <RightNavBar status={transparent} id={id} />
      </div>
    </Box>
  )
}
export default Navbar
