import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2021 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px o;
  position: fixed;
  buttom: 0;
  width: 100%;
`;