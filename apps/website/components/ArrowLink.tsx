import React from 'react';
import { ReactComponent as Arrow } from '@blockfint/website/assets/icons/arrow.svg';
import styled from 'styled-components';
const A = styled.a`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: max-content max-content;
  align-items: center;
  text-decoration: none;
  color: var(--primary);
  font-weight: 600;
`;
export const ArrowLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...props }) => {
  return (
    <A {...props}>
      <span>{children}</span>
      <Arrow />
    </A>
  );
};
