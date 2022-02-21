import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: -250px;

  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 150px;
  }
`;

export const Quote = styled.div`
  margin: 20px;
  color: ${({ theme }) => theme.colors.grey};
  width: 150px;
  padding: 0px 30px 10px 30px;
  background: ${({ theme }) => theme.colors.blue2};
  border-radius: 25px;

  @media (max-width: 767px) {
    width: 300px;
    margin-bottom: 10px;
    padding: 0px 30px 10px 30px;
  }

  @media (max-width: 300px) {
    width: 200px;
  }
`;
