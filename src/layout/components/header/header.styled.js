import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 2px;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid lightblue;
`;

export const StyledLogo = styled.h1`
  font-size: 24px;
  margin-left: 50px;
`;

export const StyledNavigation = styled.nav`
  ul {
    list-style-type: none;
    align-items: baseline;
    display: flex;
    margin-right: 50px;
    font-size: 18px;
  }

  li {
    margin: 10px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
