import { ContactBanner } from '@blockfint/website/components/ContactBanner';
import { Slider } from '@blockfint/website/components/Slider';
import React from 'react';
import styled from 'styled-components';
import { InfoGraphic } from './components/InfoGraphic';
import { StoryAbout } from './components/StoryAbout';
import { TopPage } from './components/TopPage';
import Image from 'next/image';
const Footer = styled.div`
  overflow: hidden;
`;
export const About = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <TopPage />

      <Image
        src="/images/blockfint-company.jpg"
        layout="responsive"
        width={4320}
        height={1020}
      />

      <InfoGraphic />
      <StoryAbout />
      <Footer>
        <Slider
          sectionName="Achievement"
          images={images}
          description={description}
        />
      </Footer>
      <ContactBanner />
    </div>
  );
};
const images = ['/images/ndid.jpg', '/images/toyota.jpg', '/images/kbtg.jpg'];
const description = [
  'Main contributor for NDID',
  'Thailand First Blockchain Bond',
  'Supply technology for KTB',
];
