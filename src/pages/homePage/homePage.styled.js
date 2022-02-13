import styled from 'styled-components';
import { url } from '../../utils/urls';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${url.background});
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  width: 1000px;
  height: 500px;
  font-weight: bold;
  font-size: 26px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoStyled = styled.p`
  position: relative;
  left: 25%;
  top: 80%;
  font-size: 56px;
  letter-spacing: 10px;

  @media (max-width: 768px) {
    font-size: 26px;
    left: 15%;
    top: 80%;
  }
`;

export const SectionStyled = styled.section`
  width: 33.33%;
  height: 65%;
  float: left;
  padding: 5px;
  background: rgba(255, 255, 255, 0, 8);

  @media (max-width: 768px) {
    clear: both;
    font-size: 16px;
    height: auto;
    margin-bottom: 10px;
  }
`;
