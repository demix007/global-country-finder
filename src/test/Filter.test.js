import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Filter from '../components/Filter/Filter';

describe('Filter', () => {
  it('Filter component is rendered correctly', () => {
    const filter = render(
      <Provider store={store}>
        <Filter />
      </Provider>,
    );
    expect(filter).toMatchSnapshot();
  });
});
