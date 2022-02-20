import styled from 'styled-components';

export default styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 0;
  width: 250px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  li {
    margin: -8px;
  }
`;
