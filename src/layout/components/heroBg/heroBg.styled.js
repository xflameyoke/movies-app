import styled from 'styled-components';
import Background from '../../../assets/background.jpg';

export const ImageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: url(${Background});
  box-shadow: 0px 80px 35px 45px rgba(39, 61, 84, 1);
`;

export const OverlayStyled = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextStyled = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 2px 2px 4px ${({ theme }) => theme.colors.blue2};
  letter-spacing: 1rem;

  @media (max-width: 769px) {
    font-size: 3.5rem;
    letter-spacing: 0.5rem;
  }

  @media (max-width: 420px) {
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
  }

  @media (max-width: 300px) {
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
`;
