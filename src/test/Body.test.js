import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Body from '../components/Body/Body';

describe('Body', () => {
  it('Body component is rendered correctly', () => {
    const body = render(
      <Provider store={store}>
        <Body />
      </Provider>,
    );
    expect(body).toMatchSnapshot();
  });
});
