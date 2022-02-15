import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  margin-top: -17rem;
  padding-bottom: 10rem;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 5rem;
  }
`;

export const Quote = styled.div`
  height: 20rem;
  width: 200px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey};
  width: 150px;
  padding: 0px 30px 0px 30px;
  background: ${({ theme }) => theme.colors.blue2};
  border-radius: 25px;

  @media (max-width: 765px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.5rem;
    margin-bottom: 10px;
    padding: 0px 30px 10px 30px;
  }
`;
