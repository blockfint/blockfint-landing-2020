import { Layout } from '@blockfint/website/components/layouts';
import { ProductNeoBank } from '@blockfint/website/containers/ProductNeoBank';
import { NextPage } from 'next';
import React from 'react';

const GideonPage: NextPage = () => {
  return (
    <Layout>
      <ProductNeoBank />
    </Layout>
  );
};

export default GideonPage;
