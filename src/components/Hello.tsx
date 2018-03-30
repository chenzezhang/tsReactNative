import * as React from 'react';

import { View } from 'react-native';

import Header from './Header';

import { Todo } from './../actions/actionType';

export default class Hello extends React.Component {
  render() {
    return (
      <View>
        <Header /> 
      </View>
    );
  }
}