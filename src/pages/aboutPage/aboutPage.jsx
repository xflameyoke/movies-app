import React from 'react';
import StyledMain from './aboutPage.styled';
import Header from './components/header/header';
import { ImageGallery } from 'react-image-gallery';

const images = [{ original: 'https://picsum.photos/id/1018/1000/600/' }];

const AboutPage = () => (
  <StyledMain>
    <Header />
    <ImageGallery items={images} />;
  </StyledMain>
);

export default AboutPage;
