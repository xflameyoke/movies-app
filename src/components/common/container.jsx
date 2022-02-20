import React from 'react';
import StyledContainer from './container.styled';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
