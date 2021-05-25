import { Layout } from '@blockfint/website/components/layouts';
import { Team } from '@blockfint/website/containers/Team';
import { NextPage } from 'next';
import React from 'react';

const TeamPage: NextPage = () => {
  return (
    <Layout>
      <Team />
    </Layout>
  );
};

export default TeamPage;
