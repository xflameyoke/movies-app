import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-width: 1000px;

  @media (max-width: 300px) {
    width: 250px;
    height: 100%;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 56px;
  color: ${({ theme }) => theme.colors.blue3};

  @media (max-width: 420px) {
    font-size: 36px;
  }
`;

export const StyledUL = styled.ul`
  span {
    font-weight: bold;
  }
  li {
    padding: 10px;
  }
`;
