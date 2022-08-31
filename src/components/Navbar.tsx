import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo/logo.svg'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  color: #343434;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-size: 2rem;
  img{
  width:10%;
  height:auto;
  object-fit: cover;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  margin-right: 30px;
  font-size: 1.5rem;
`;

const Navbar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo>
          <img src={logo}alt="logo" />
          <a href="/#">Code.com</a>
        </Logo>
        <Menu>
          <MenuItem><a href="/#">About</a></MenuItem>
          <MenuItem><a href="/#">Contact</a></MenuItem>
        </Menu>
      </Container>
    </>
  );
}

export default Navbar;