import React from 'react';
import styled from 'styled-components';
import { ProductConclusion } from '@blockfint/website/components/productConclusion';
import { ProductDetail } from '@blockfint/website/components/productDetail';
import Image from 'next/image';
import { IconWithInfoList } from './components/IconWithInfoList';
import { ContactBanner } from '@blockfint/website/components/ContactBanner';
const Wrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: flex;
`;
export const ProductNeoBank: React.FC = () => {
  return (
    <>
      <ProductDetail
        {...{
          name: 'Neo bank',
          title: 'White label digital banking solutions',
          description:
            "Our solutions allow businesses to provide banking functionalities in a short time frame. With us, you can create an endless opportunity for the new era of banking services. Forget every banking concept you've known earlier as Neo bank - Neo loan you the unique banking system where everything is possible. From a pure mobile banking where the physical branch is no longer relevant to an effective microfinancing service and various sets of special functions.",

          secondaryTitle: 'The representation of how Neo bank works.',
          // youtube: '0JO1ovT4Nvo'
        }}
      >
        <IconWithInfoList />
        {/* <Wrapper>
          <Image src="/images/products/diagram-neobank.svg" width={937.5} height={625} />
        </Wrapper> */}
      </ProductDetail>
      <ProductConclusion
        problem="Current banking software is not designed for digital bank, using very old technology, low performance and expensive."
        solution="Our software is designed for pure digital banks from the ground up; ready for mobile payment lifestyle; use the latest technology stack; high performance."
      />
      <ContactBanner />
    </>
  );
};
