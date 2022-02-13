import React from 'react';
import {
  Container,
  ContentWrapper,
  LogoStyled,
  SectionStyled,
} from './homePage.styled';

const HomePage = () => (
  <Container>
    <LogoStyled>Mateusz Łuczak</LogoStyled>
    <ContentWrapper>
      <SectionStyled>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes.
      </SectionStyled>
      <SectionStyled>
        Build encapsulated components that manage their own state, then compose
        them to make complex UIs.
      </SectionStyled>
      <SectionStyled>
        We don’t make assumptions about the rest of your technology stack, so
        you can develop new features in React without rewriting existing code.
      </SectionStyled>
    </ContentWrapper>
  </Container>
);

export default HomePage;
