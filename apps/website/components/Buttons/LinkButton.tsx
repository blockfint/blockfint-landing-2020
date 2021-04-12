import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowVector } from '@blockfint/website/assets/icons/path.svg';
import { Button, ButtonProps } from '@material-ui/core';

const StyledButton = styled(Button)`
  color: var(--primary);
  &.MuiButton-root {
    text-transform: unset;
    font-weight: 800;
    padding: 0;
  }
  span {
    color: var(--primary);
    &.MuiButton-label {
      span {
        &.MuiButton-startIcon {
          padding-right: 0.5rem;
        }
      }
    }
  }
` as typeof Button;

export const LinkButton: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <StyledButton startIcon={<ArrowVector />} className={className}>
      {children}
    </StyledButton>
  );
};
