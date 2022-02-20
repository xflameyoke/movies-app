import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-width: 1000px;
`;

export const StyledH1 = styled.h1`
  font-size: 56px;
  color: ${({ theme }) => theme.colors.blue3};
`;

export const StyledUL = styled.ul`
  span {
    font-weight: bold;
  }
  li {
    padding: 10px;
  }
`;
