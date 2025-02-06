'use client';
import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import Test from './test/Test';
import Theme from './test/Theme';
const Page = () => {
  return (
    <Provider store={store}>
      <Test />
      <Theme />
    </Provider>
  );
};

export default Page;
