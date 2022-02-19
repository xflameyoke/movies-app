import React from 'react';
import Heading from '../../components/heading/heading';
import Description from '../../components/description/description';
import Gallery from '../../components/gallery/gallery';
import Wrapper from './aboutPage.styled';
import Movies from '../../components/movies/movies/movies';

const AboutPage = () => (
    <Wrapper>
      <Heading />
      <Description />
      <Gallery />
      <Movies />
    </Wrapper>
);

export default AboutPage;
