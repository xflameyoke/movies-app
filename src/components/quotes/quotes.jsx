import React from 'react';
import { Container, Quote } from './quotes.styled';

const Quotes = () => (
  <Container>
    <Quote>
      <h1>Quote 1</h1>
      React makes it painless to create interactive UIs. Design simple views for
      each state in your application, and React will efficiently update and
      render just the right components when your data changes.
    </Quote>
    <Quote>
      <h1>Quote 2</h1>
      Build encapsulated components that manage their own state, then compose
      them to make complex UIs.
    </Quote>
    <Quote>
      <h1>Quote 3</h1>
      We don’t make assumptions about the rest of your technology stack, so you
      can develop new features in React without rewriting existing code.
    </Quote>
  </Container>
);

export default Quotes;
