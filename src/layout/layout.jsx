import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const Main = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
