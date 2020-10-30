import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import styled from 'styled-components'
import { BREAKPOINT } from '../../../../assets/globalStyle'
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
// type ColorProps = {
//   status: boolean
// }
interface PropsColor {
  status: boolean
  id?: string
}

export const Logo = ({ status, id = '' }: PropsColor) => {
  const router = useRouter()

  // const { locale } = useIntl()

  return (
    <LeftnavTab>
      <Link href={`/`} as={`/`} passHref>
        {status ? (
          <a style={{ width: '7rem' }}>
            <BlockFintWhite />
          </a>
        ) : (
          <a style={{ width: '7rem' }}>
            <BlockFintColor />
          </a>
        )}
      </Link>
    </LeftnavTab>
  )
}
