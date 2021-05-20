import { Layout } from '@blockfint/website/components/layouts';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 100vw;
  height: auto;
`;

const PolicyPage = () => {
  return (
    <Layout>
      <h1>Privacy Policy for Blockfint</h1>
      <p>
        At Blockfint, accessible from www.blockfint.com, one of our main
        priorities is the privacy of our visitors. This Privacy Policy document
        contains types of information that is collected and recorded by
        Blockfint and how we use it.
      </p>
    </Layout>
  );
};

export default PolicyPage;
