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
export const ProductThinker: React.FC = () => {
  return (
    <>
      <ProductDetail
        {...{
          name: 'Thinker',
          title: 'Make rapid, optimized & data driven decision',
          description:
            'A tool that make your personalized decision making process available in computer system. What if computer can understand your approval criterias & procedures and rapidly respond to your valuable customers? Thinker enables you to create an Origination System using the concept of decision tree. You can build, drag, and connect as many tree you need without writing a single programing code.',

          secondaryTitle: 'The system that simplify all the complicated working proces'
          // youtube: '0JO1ovT4Nvo'
        }}
      >
        <Wrapper>
          <Image src="/images/products/diagram-thinker.svg" width={937.5} height={625} />
        </Wrapper>
      </ProductDetail>

      <ProductConclusion
        problem="The processing of creating new loan products takes long time. So as the approval decisions for the customer."
        solution="Thinker can help changing the way company work with customer for the best efficiency and satisfaction"
      />
      <ContactBanner />
    </>
  )
}
