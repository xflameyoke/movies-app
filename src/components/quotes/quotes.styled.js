import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin-top: -250px;

  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Quote = styled.div`
  flex: 1;
  font-size: 1rem;
  margin: 20px;
  color: ${({ theme }) => theme.colors.grey};
  width: 150px;
  padding: 0px 30px 10px 30px;
  background: ${({ theme }) => theme.colors.blue2};
  border-radius: 25px;

  @media (max-width: 765px) {
    font-size: 1rem;
  }

  @media (max-width: 420px) {
    width: 300px;
    font-size: 1rem;
    margin-bottom: 10px;
    padding: 0px 30px 10px 30px;
  }
`;
