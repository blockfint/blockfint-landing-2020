import { Layout } from '@blockfint/website/components/layouts';
import { ProductAgriTrac } from '@blockfint/website/containers/ProductAgriTrac';
import { NextPage } from 'next';
import React from 'react';

const GideonPage: NextPage = () => {
  return (
    <Layout>
      <ProductAgriTrac />
    </Layout>
  );
};

export default GideonPage;
