import { Layout } from '@blockfint/website/components/layouts';
import { ProductGideon } from '@blockfint/website/containers/ProductGideon';
import { NextPage } from 'next';
import React from 'react';

const GideonPage: NextPage = () => {
  return (
    <Layout>
      <ProductGideon />
    </Layout>
  );
};

export default GideonPage;
