import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.component';

it('creates a home link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);

  expect(div).toHaveTextContent('Home');
});

it('creates a dark mode checkbox', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);

  expect(div.querySelectorAll("input[type='checkbox']")).toHaveLength(1);
});
