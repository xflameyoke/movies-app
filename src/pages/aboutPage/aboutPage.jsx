import React from 'react';
import Heading from '../../components/heading/heading';
import Description from '../../components/description/description';
import Gallery from '../../components/gallery/gallery';
import Container from './aboutPage.styled';
import Movies from '../../components/movies/movies';

const AboutPage = () => (
  <Container>
    <Heading />
    <Description />
    <Gallery />
    <Movies />
  </Container>
);

export default AboutPage;
