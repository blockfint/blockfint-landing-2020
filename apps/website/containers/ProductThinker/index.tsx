import React from 'react'
import styled from 'styled-components'
import { ProductConclusion } from '@blockfint/website/components/productConclusion'
import { ProductDetail } from '@blockfint/website/components/productDetail'
import Image from 'next/image'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { useTranslation } from 'next-i18next'
const Wrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: flex;
`
export const ProductThinker: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <ProductDetail
        {...{
          name: 'Thinker Wise',
          title: 'Make rapid, optimized & data driven decision',
          description: t('work-details.thinker-desc'),

          secondaryTitle: t('work-details.thinker-secondary-title')
        }}
      >
        <Wrapper>
          <Image src="/images/products/diagram-thinker.svg" width={937.5} height={625} />
        </Wrapper>
      </ProductDetail>

      <ProductConclusion
        problem={t('work-details.thinker-problem-desc')}
        solution={t('work-details.thinker-solution-desc')}
      />
      <ContactBanner />
    </>
  )
}
