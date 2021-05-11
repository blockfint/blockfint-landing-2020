import { BREAKPOINT } from '@blockfint/website/styles/globalStyle'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const GhostContent = styled.div`
  h2 {
    //h2 of Ghost are h5 of us (mobile)
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
  }
  h3 {
    //h3 of Ghost are h6 of us (mobile)
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
  }
  figcaption {
    text-align: center;
  }
  // Image Normal
  .kg-card {
    margin-top: 2rem;
    img {
      width: 100%;
      max-width: 100vw;
      height: auto;
      object-fit: contain;
    }
  }
  h2,
  h3 {
    margin-top: 2.5rem;
  }
  p {
    /* margin-top: 1.5rem; */
    min-height: 1.5rem;
  }

  //gallery
  .kg-gallery-card {
    .kg-gallery-row {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));

      justify-content: center;
      align-items: center;
    }
  }

  // Youtube
  .kg-embed-card {
    height: 0;
    padding-top: 56.5%;
    width: 100%;
    margin: 0.75rem auto;
    position: relative;
    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
    }
  }
  //table
  table {
    width: 100%;
  }
  ul,
  ol {
    margin-left: 2ch;
  }

  //divider
  hr {
    margin: 1.5rem 0;
  }

  @media ${BREAKPOINT.tablet} {
    h2 {
      //h2 of Ghost are h5 of us
      font-size: 20px;
      line-height: 38px;
    }
    // container
    .gh-content {
      max-width: 32.5rem;
      margin: 0 auto;
    }
  }
  @media ${BREAKPOINT.desktop} {
    h2 {
      //h2 of Ghost are h5 of us
      font-size: 24px;
      line-height: 38px;
    }
    // container
    .gh-content {
      max-width: 50rem;
      margin: 0 auto;
    }

    .kg-width-wide {
      margin: 2rem -6rem;
    }
    .kg-width-full {
      width: 100vw;
      margin: 2rem calc(-1 * (50vw - 400px));
    }
  }
`

export const BlogDetail: React.FC<{ html: string }> = ({ html }) => {
  return (
    <GhostContent>
      <div dangerouslySetInnerHTML={{ __html: html }} className="gh-content gh-canvas" />
    </GhostContent>
  )
}
