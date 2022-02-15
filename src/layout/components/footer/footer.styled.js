import styled from 'styled-components';

export default styled.footer`
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50px;
  border-top: 2px solid ${({ theme }) => theme.colors.blue};
`;
