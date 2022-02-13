import React from 'react';
import StyledFooter from './footer.styled';

const Footer = () => {
  const actuallYear = new Date().getFullYear();
  return (
    <StyledFooter>
      Mateusz Łuczak {actuallYear} @ All rights reserved
    </StyledFooter>
  );
};
export default Footer;
