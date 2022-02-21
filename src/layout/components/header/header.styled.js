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
  margin-left: 5%;

  @media (max-width: 420px) {
    font-size: 1rem;
  }

  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

export const StyledNavigation = styled.nav`
  margin-right: 5%;

  ul {
    list-style-type: none;
    align-items: baseline;
    display: flex;
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
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
`;
