/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { Provider } from 'react-redux';
import { Hello } from './components/Hello';
import store from './store/creatStore'

type Props = {};
export default class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Hello />
      </Provider>
    );
  }
}

