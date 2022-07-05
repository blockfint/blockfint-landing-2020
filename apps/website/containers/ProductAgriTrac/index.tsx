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
export const ProductAgriTrac = () => {
  const { t } = useTranslation()
  return (
    <>
      <ProductDetail
        {...{
          name: 'Agri Trac',
          title: t('common.agri-quote'),
          description: t('work-details.agri-trac-desc'),

          secondaryTitle: t('work-details.agri-trac-secondary-title')
        }}
      >
        <Wrapper>
          <Image src="/images/products/diagram-palm.svg" width={937.5} height={625} />
        </Wrapper>
      </ProductDetail>

      <ProductConclusion
        problem={t('work-details.agri-trac-problem-desc')}
        solution={t('work-details.agri-trac-solution-desc')}
      />
      <ContactBanner />
    </>
  )
}
