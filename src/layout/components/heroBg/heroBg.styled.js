import styled from 'styled-components';
import Background from '../../../assets/background.jpg';

export const ImageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: url(${Background});
  box-shadow: 0px 150px 67px 45px rgba(39, 61, 84, 1);
`;

export const OverlayStyled = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextStyled = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkgrey};
  text-shadow: 1px 1px 1px 1px black;
  letter-spacing: 1rem;

  @media (max-width: 765px) {
    font-size: 5rem;
    letter-spacing: 0.5rem;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
`;
