import React from 'react';
import { StyledHeader, StyledLogo, StyledNavigation } from './header.styled';
import { Link } from 'react-router-dom';

const Header = () => (
  <StyledHeader>
    <StyledLogo>Recruitment-App</StyledLogo>
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </StyledNavigation>
  </StyledHeader>
);

export default Header;
