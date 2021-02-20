import styled from 'styled-components';

const nav = styled.nav`
  background-color: #000;
  margin: 0;
  overflow: hidden;
  color: #fff;
`;

const navList = styled.ul`
  margin: 0;
  padding: 0;
`;

const navItem = styled.li`
  display: inline-block;
  list-style-type: none;
`;

const clickableNavItem = styled(navItem)`
  &:hover {
    background-color: green;
  }
`;

const navLink = styled.a`
  color: #fff;
  display: block;
  line-height: 2em;
  padding: 0.5em 0.5em;
  text-decoration: none;
`;

const searchBox = styled.input.attrs({
  type: 'text',
  placeholder: 'Search...',
})`
  color: black;
`;

export default {
  nav,
  navList,
  navItem,
  clickableNavItem,
  navLink,
  searchBox,
};
