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
export const ProductVC = () => {
  const { t } = useTranslation()
  return (
    <>
      <ProductDetail
        {...{
          name: 'Verified Credentials',
          title: t('common.vc-quote'),
          description: t('work-details.vc-desc'),

          secondaryTitle: t('work-details.vc-secondary-title')
        }}
      >
        <Wrapper>
          <Image
            src="/images/products/diagram-vc.jpg"
            width={2880}
            height={1280}
            placeholder="blur"
            alt={'Verified Credentials diagram'}
          />
        </Wrapper>
      </ProductDetail>

      <ProductConclusion problem={t('work-details.vc-problem-desc')} solution={t('work-details.vc-solution-desc')} />
      <ContactBanner />
    </>
  )
}
