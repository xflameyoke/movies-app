import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    padding: 10px;
    color: ${({ theme }) => theme.colors.blue2};
  }

  @media (max-width: 420px) {
    display: flex;
    ${StyledIconBase} {
      padding: 0;
    }
  }

  @media (max-width: 300px) {
    display: flex;
  }
`;

export const StyledTitle = styled.h1`
  @media (max-width: 420px) {
    font-size: 18px;
  }

  @media (max-width: 300px) {
    font-size: 14px;
  }
`;
