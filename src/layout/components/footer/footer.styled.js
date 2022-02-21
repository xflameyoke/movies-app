import styled from 'styled-components';

export default styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  background: white;
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-top: 2px solid ${({ theme }) => theme.colors.blue};

  @media (max-width: 300px) {
    font-size: 12px;
  }
`;
