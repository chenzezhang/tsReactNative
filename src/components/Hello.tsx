import * as React from 'react';

import PropTypes, { func } from 'prop-types'

import { Button, StyleSheet, Text, View } from 'react-native';

import { model } from '../reducer';

import { Header } from './Header';

import { Todo } from './../actions/actionType'

const initialState: Todo = 
  {
    text: 'Use Redux with tetestsett',
    completed: false,
    id: 4
  };

export class Hello extends React.Component {
  
  static propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool
  }
  render() {
    return (
      <View>
        <Header todos = { initialState }  /> 
      </View>
    );
  }
}