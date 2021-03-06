import React from 'react';
import { Nav, NavList, NavItem, ClickableNavItem, NavLink, SearchBox } from './Styled';

function Navbar() {
  return (
    <Nav>
      <NavList>
        <ClickableNavItem>
          <NavLink>Home</NavLink>
        </ClickableNavItem>
        <NavItem>
          <SearchBox />
        </NavItem>
        <NavItem>
          <input type="checkbox"></input>
          Dark Mode
        </NavItem>
        <ClickableNavItem>
          <NavLink>Iniciar sesión</NavLink>
        </ClickableNavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
