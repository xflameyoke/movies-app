import React from 'react';
import HeroBg from '../../layout/components/heroBg/heroBg';
import Quotes from '../../components/quotes/quotes';
import Container from '../../components/common/container/container';

const HomePage = () => (
  <>
    <HeroBg />
    <Container>
      <Quotes />
    </Container>
  </>
);

export default HomePage;
