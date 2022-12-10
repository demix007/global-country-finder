import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Header from '../components/Header/Header';

it('It should render the component Correctly', () => {
  const header = render(
    <Router>
      <Header />
    </Router>,
  );
  expect(header).toMatchSnapshot();
});
