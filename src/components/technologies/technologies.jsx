import React from 'react';
import Container from '../common/container';
import {
  Css3,
  Github,
  Html5,
  Javascript,
  ReactLogo,
} from '@styled-icons/boxicons-logos/';
import { Eslint, Styledcomponents } from '@styled-icons/simple-icons/';
import { IconStyleWrapper, StyledTitle } from './technologies.styled';

const Technologies = () => (
  <section>
    <Container>
      <StyledTitle>Technologies that i&apos;m similliar with:</StyledTitle>
      <IconStyleWrapper>
        <Html5 size="32" title="html" />
        <Css3 size="32" title="css" />
        <ReactLogo size="32" title="react" />
        <Javascript size="32" title="javascript" />
        <Eslint size="32" title="eslint" />
        <Styledcomponents size="32" title="styledcomponents" />
        <Github size="32" title="github" />
      </IconStyleWrapper>
    </Container>
  </section>
);

export default Technologies;
