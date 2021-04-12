import React from 'react';
import styled from 'styled-components';
import { ProductConclusion } from '@blockfint/website/components/productConclusion';
import { ProductDetail } from '@blockfint/website/components/productDetail';
import Image from 'next/image';
import { ContactBanner } from '@blockfint/website/components/ContactBanner';
const Wrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: flex;
`;
export const ProductGideon: React.FC = () => {
  return (
    <>
      <ProductDetail
        {...{
          name: 'Gideon',
          title: 'Energy Trading Without Barriers',
          description:
            'Imagine a world where producers and buyers trade smartly with ease in a trusted secure environment. With the advent of blockchain technology, we realized such an environment could be built, a digital marketplace where people are empowered to transact without barriers. ',
          linkHref: 'https://gideon.energy',
          secondaryTitle:
            'The multi-dimensional energy trading platform where everyone can easily buy and sell electrical energy.',
          youtube: '0JO1ovT4Nvo',
        }}
      >
        <Wrapper>
          <Image
            src="/images/products/diagram-gideon.svg"
            width={937.5}
            height={625}
          />
        </Wrapper>
      </ProductDetail>

      <ProductConclusion
        problem="With the lack of systematic energy transaction platform, the excess of electrical energy that already had produced will be wasted."
        solution="Gideon is the platform where everyone can utilize excess solar energy and be a part of green society with the systematic transaction implementation."
      />
      <ContactBanner />
    </>
  );
};
