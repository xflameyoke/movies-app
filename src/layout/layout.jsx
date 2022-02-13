import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 100vh;
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
