import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
`;
