import React from 'react'
import styled from 'styled-components'
import { ProductConclusion } from 'components/productConclusion'
import { ProductDetail } from 'components/productDetail'
import Image from 'next/image'
import { IconWithInfoList } from './components/IconWithInfoList'
const Wrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: flex;
`
export const ProductNeoBank: React.FC = () => {
  return (
    <>
      <ProductDetail
        {...{
          name: 'Neobank',
          title: 'The New Era of Banking Services',
          description:
            "An endless opportunity maker for the new era of banking services. Forget every core banking concepts you've known earlier as Neo bank - Neo loan you the unique banking system where everything is possible. From a pure mobile banking where physical branch is no longer relevant to an effective microfinancing service and various sets of special functions.",

          secondaryTitle: 'The representation of how Neo bank works.'
          // youtube: '0JO1ovT4Nvo'
        }}
      >
        <IconWithInfoList />
        {/* <Wrapper>
          <Image src="/images/products/diagram-neobank.svg" width={937.5} height={625} />
        </Wrapper> */}
      </ProductDetail>
      <ProductConclusion
        problem="Banking transaction is expected the complicated process. Customers need to open each account for each transaction."
        solution="Neo bank is turning mobile banking application to a branch of bank. Customers only need one account for every transaction."
      />
    </>
  )
}
