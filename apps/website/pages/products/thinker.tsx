import { Layout } from '@blockfint/website/components/layouts';
import { ProductThinker } from '@blockfint/website/containers/ProductThinker';
import { NextPage } from 'next';
import React from 'react';

const GideonPage: NextPage = () => {
  return (
    <Layout>
      <ProductThinker />
    </Layout>
  );
};

export default GideonPage;
