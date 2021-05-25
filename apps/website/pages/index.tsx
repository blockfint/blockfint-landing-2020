import { Layout } from '@blockfint/website/components/layouts';
import { Home } from '@blockfint/website/containers/Home';
import { NextPage } from 'next';
import React from 'react';

const Homepage: NextPage = () => {
  return (
    <Layout transparent>
      <Home />
    </Layout>
  );
};

export default Homepage;
