import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  color: #F1F1F1;
  width: 100%;
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FooterNavItem = styled.div`
  margin: 30px 30px 0px 0px;
  font-size: 1em;
`;
const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <FooterNav>
          <FooterNavItem>Terms and Conditions</FooterNavItem>
          <FooterNavItem>Privacy notice</FooterNavItem>
        </FooterNav>
      </Container>
    </>
  );
}

export default Footer;