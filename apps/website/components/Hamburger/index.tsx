import React from 'react'
import styled from 'styled-components'

type OpenProps = {
  open: boolean
  status: boolean
  toggleColor: boolean
}

const StyledBurger = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  z-index: 1600 !important;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 1.5rem;
    height: 0.25rem;
    /* background-color: ${({ status, toggleColor }) => (status && toggleColor ? 'white' : 'var(--black)')}; */
    background-color: var(--grey-1);
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }: OpenProps) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      //transform: ${({ open }: OpenProps) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }: OpenProps) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }: OpenProps) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
export const Hamburger = (props) => {
  // const [open, setOpen] = useState(props.ColorHam)
  // console.log(props)

  const Open = !props.status
  const Status = props.ColorHam
  const Toggle = props.DrawerToggle

  return (
    <div style={{ paddingBottom: '2px' }}>
      <StyledBurger open={Open} status={Status} toggleColor={!Toggle}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </div>
  )
}
