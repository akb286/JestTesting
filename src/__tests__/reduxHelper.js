import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

export const reduxHelper = (Component, initialState = {}) => {
  const store = mockStore(initialState);
  return {
    component:
      <Provider store={store}>
        <Component />
      </Provider>,
    store
  }
}
