import React from 'react';
import { HeroBg } from '../../layout/components/';
import { Quotes } from '../../components/';
import Wrapper from './homePage.styled';

const HomePage = () => (
  <>
    <HeroBg />
    <Wrapper>
      <Quotes />
    </Wrapper>
  </>
);

export default HomePage;
