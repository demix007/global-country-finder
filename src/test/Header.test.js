import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Header from '../components/Header/Header';

it('Header component is rendered correctly', () => {
  const header = render(
    <Router>
      <Header />
    </Router>,
  );
  expect(header).toMatchSnapshot();
});
