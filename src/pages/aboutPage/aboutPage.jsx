import React from 'react';
import { Description, Gallery, Movies, Technologies } from '../../components/';
import Heading from '../../components/heading/heading';
import Wrapper from './aboutPage.styled';

const AboutPage = () => (
  <Wrapper>
    <Heading />
    <Description />
    <Technologies />
    <Gallery />
    <Movies />
  </Wrapper>
);

export default AboutPage;
