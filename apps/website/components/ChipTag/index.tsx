import React from 'react'
import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'
import { useTranslation } from 'react-i18next'
const StyledChip = styled(Chip)<{ colour: string }>`
  .MuiChip-label {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.88;
  }
  &&& {
    height: 1.75rem;
    border-radius: 1.125rem;
    background-color: ${({ colour }) => colour};
  }
`
interface Props {
  label: 'traceability' | 'national-platform' | 'agriculture' | 'financial' | 'digital-bond' | 'energy-trading'
  style?: React.CSSProperties
}
export const ChipTag: React.FC<Props> = ({ label, style }) => {
  const { t } = useTranslation()
  const colorDict = {
    traceability: '#f4d482',
    'national-platform': '#8dd3dd',
    agriculture: '#87b8b6',
    financial: '#a5b3ff',
    'digital-bond': '#f6b9b8',
    'energy-trading': '#ffb17d'
  }
  return <StyledChip label={t(`project:${label}`)} colour={colorDict[label]} style={style} />
}
