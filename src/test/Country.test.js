import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Countries from '../components/Countries/Countries';

describe('Countries', () => {
  it('Countries component is rendered correctly', () => {
    const countries = render(
      <Provider store={store}>
        <Countries />
      </Provider>,
    );
    expect(countries).toMatchSnapshot();
  });
});
