import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #000;
  margin: 0;
  overflow: hidden;
  color: #fff;
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline-block;
  list-style-type: none;
`;

export const ClickableNavItem = styled(NavItem)`
  &:hover {
    background-color: green;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  display: block;
  line-height: 2em;
  padding: 0.5em 0.5em;
  text-decoration: none;
`;

export const SearchBox = styled.input.attrs({
  type: 'text',
  placeholder: 'Search...',
})`
  color: black;
`;
