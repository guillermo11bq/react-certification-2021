import React from 'react';
import styled from './Styled';

function Navbar() {
  return (
    <styled.nav>
      <styled.navList>
        <styled.clickableNavItem>
          <styled.navLink>Home</styled.navLink>
        </styled.clickableNavItem>
        <styled.navItem>
          <styled.searchBox />
        </styled.navItem>
        <styled.navItem>
          <input type="checkbox"></input>
          Dark Mode
        </styled.navItem>
        <styled.clickableNavItem>
          <styled.navLink>Iniciar sesión</styled.navLink>
        </styled.clickableNavItem>
      </styled.navList>
    </styled.nav>
  );
}

export default Navbar;
