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
export const ProductThinkerWise: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <ProductDetail
        {...{
          name: 'Thinker Wise',
          title: t('common.thinker-wise-quote'),
          description: t('work-details.thinker-wise-desc'),

          secondaryTitle: ''
        }}
      >
        <Wrapper>
          <Image src="/images/products/diagram-thinker-wise.png" width={3708} height={1806} />
        </Wrapper>
      </ProductDetail>

      <ProductConclusion
        problem={t('work-details.thinker-wise-problem-desc')}
        solution={t('work-details.thinker-wise-solution-desc')}
      />
      <ContactBanner />
    </>
  )
}
