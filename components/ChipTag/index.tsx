import React from 'react'
import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'
const StyledChip = styled(Chip)<{ colour: string }>`
  .MuiChip-label {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
  }
  &&& {
    background-color: ${({ colour }) => colour};
  }
`
interface Props {
  label: 'Traceability' | 'National Platform' | 'Agriculture' | 'Financial' | 'Digital Bond' | 'Energy Trading'
}
export const ChipTag: React.FC<Props> = ({ label }) => {
  const colorDict = {
    Traceability: '#f4d482',
    'National Platform': '#8dd3dd',
    Agriculture: '#87b8b6',
    Financial: '#a5b3ff',
    'Digital Bond': '#f6b9b8',
    'Energy Trading': '#ffb17d'
  }
  return (
    <div>
      <StyledChip label={label} colour={colorDict[label]} />
    </div>
  )
}
