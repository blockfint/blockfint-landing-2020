import React from 'react';
import { NextPage } from 'next';
import { Works } from '@blockfint/website/containers/Works';
import { Layout } from '@blockfint/website/components/layouts';
const work: NextPage = () => {
  return (
    <Layout>
      <Works />
    </Layout>
  );
};

export default work;
