import React from 'react'
import styled from 'styled-components'
import { ProductConclusion } from 'components/productConclusion'
import { ProductDetail } from 'components/productDetail'
import Image from 'next/image'
import { ContactBanner } from 'components/ContactBanner'
const Wrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: flex;
`
export const ProductAgriTrac: React.FC = () => {
  return (
    <>
      <ProductDetail
        {...{
          name: 'Agri Trac',
          title: 'Advance Tracablity For Agricuture',
          description:
            'World first blockchain based platform for crude palm oil traceability. This pioneering solution helps PCM manufacturers to “connect the dots” across the supply-chain and trace the raw material from farm to factory, ensuring transparency and safety.',

          secondaryTitle: 'The summary of how blockchain tracking the flow of palm oil processing'
          // youtube: '0JO1ovT4Nvo'
        }}
      >
        <Wrapper>
          <Image src="/images/products/diagram-palm.svg" width={937.5} height={625} />
        </Wrapper>
      </ProductDetail>

      <ProductConclusion
        problem="The palm oil processing can not be tracked. Therefore, illegal palm oil from abroad leak into the producing chain."
        solution="Agri Trac plays the part in tracking and controlling the whole process of palm oil from the beginning to the end users."
      />
      <ContactBanner />
    </>
  )
}
