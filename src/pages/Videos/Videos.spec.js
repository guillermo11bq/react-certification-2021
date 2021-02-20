import React from 'react';
import ReactDOM from 'react-dom';
import VideoPage from './Videos.page';

let videoPageContainer;

beforeAll(() => {
  videoPageContainer = document.createElement('div');
  ReactDOM.render(<VideoPage />, videoPageContainer);
});

it('contains the title of the last video', () => {
  expect(videoPageContainer).toHaveTextContent('Why Wizeline?');
});

it('contains the description of the first video', () => {
  expect(videoPageContainer).toHaveTextContent(
    "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ..."
  );
});

it('renders the 25 videos', () => {
  expect(videoPageContainer.querySelectorAll('div > img')).toHaveLength(25);
});
