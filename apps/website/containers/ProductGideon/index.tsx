import React from 'react'
import styled from 'styled-components'
import { ProductConclusion } from '@blockfint/website/components/productConclusion'
import { ProductDetail } from '@blockfint/website/components/productDetail'
import Image from 'next/image'
import { ContactBanner } from '@blockfint/website/components/ContactBanner'
import { useTranslation } from 'react-i18next'
const Wrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: flex;
`
export const ProductGideon: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <ProductDetail
        {...{
          name: 'Gideon',
          title: 'Energy Trading Without Barriers',
          description: t('work-details.gideon-desc'),
          linkHref: 'https://gideon.energy',
          secondaryTitle: t('work-details.gideon-secondary-title'),
          youtube: '4SbU9j5G8kk'
        }}
      >
        <Wrapper>
          <Image src="/images/products/diagram-gideon.svg" width={937.5} height={625} />
        </Wrapper>
      </ProductDetail>

      <ProductConclusion
        problem={t('work-details.gideon-problem-desc')}
        solution={t('work-details.gideon-solution-desc')}
      />
      <ContactBanner />
    </>
  )
}
