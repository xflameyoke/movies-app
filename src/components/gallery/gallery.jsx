import React from 'react';
import Container from '../common/container';
import { StyledImg, Wrapper } from './gallery.styled';
import photo from '../../assets/mountain1.jpg';
import photo2 from '../../assets/mountain2.jpg';
import photo3 from '../../assets/mountain3.jpg';

const Gallery = () => (
  <section>
    <Container>
      <Wrapper>
        <StyledImg src={photo} alt="mountain1" />
        <StyledImg src={photo2} alt="mountain2" />
        <StyledImg src={photo3} alt="mountain3" />
      </Wrapper>
    </Container>
  </section>
);

export default Gallery;
