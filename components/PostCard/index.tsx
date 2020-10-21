import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  border-radius: 1rem;
  box-shadow: 0 8px 16px 0 #f0f3fa;
  border: solid 1px #fafafa;
  background-color: var(--blockfint-grey-white-2);
  display:grid;
  grid-template-columns:1fr 1fr;
}
`
const Image = styled.img`
  background: blue;
`
export const PostCard: React.FC = () => {
  return (
    <Card>
      <Image />
    </Card>
  )
}
