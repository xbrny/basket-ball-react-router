import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTER from './constant';

const NavbarWrapper = styled.nav`
  margin-left: -1rem;
  margin-right: -1rem;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  line-height: 4rem;
  margin-bottom: 2.5rem;
`;

const NavbarMenu = styled.div``;

const NavbarItem = styled(Link)`
  padding: 0 1rem;
  color: blue;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9rem;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarMenu>
        <NavbarItem className='navbar__item' to={ROUTER.HOME}>
          Home
        </NavbarItem>
      </NavbarMenu>
      <NavbarMenu>
        <NavbarItem className='navbar__item' to={ROUTER.PLAYERS}>
          Players
        </NavbarItem>
        <NavbarItem className='navbar__item' to={ROUTER.TEAMS}>
          Teams
        </NavbarItem>
      </NavbarMenu>
    </NavbarWrapper>
  );
};

export default Navbar;
