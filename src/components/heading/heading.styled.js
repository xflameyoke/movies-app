import styled from 'styled-components';

export default styled.h1`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 5rem;
  text-shadow: 4px 4px 6px ${({ theme }) => theme.colors.black};

  @media (max-width: 414px) {
    text-align: center;
    font-size: 3rem;
  }
`;
