import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')
    no-repeat;
  background-size: cover;
`;

export const LogoStyled = styled.div`
  font-size: 26px;
`;

export const ContentWrapper = styled.div`
  width: 1000px;
  display: flex;
  color: black;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  flex-grow: 1;
`;

export const SectionStyled = styled.section`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  float: left;
`;
