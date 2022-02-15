import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 2px;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
`;

export const StyledLogo = styled.h1`
  font-size: 1.5rem;
  margin-left: 2rem;

  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;

export const StyledNavigation = styled.nav`
  ul {
    list-style-type: none;
    align-items: baseline;
    display: flex;
    margin-right: 2rem;
    font-size: 1.2rem;

    @media (max-width: 420px) {
      font-size: 1rem;
    }
  }

  li {
    margin: 10px;
    min-width: 50px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
