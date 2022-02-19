import styled from 'styled-components';

export const Wrapper = styled.div`
  justify-content: baseline;
  width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 420px) {
    width: 300px;
  }
`;

export const StyledP = styled.p`
  font-size: 1rem;
`;
