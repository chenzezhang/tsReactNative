import * as React from 'react';

import { View } from 'react-native';

import Header from './Header';

import { Todo } from './../actions/actionType';

import { netWrok } from './../utils/request';

export default class Hello extends React.Component {

  componentWillMount() {
    console.log('++++++++++++++++++++ts')
    new netWrok('api/v5/index/newsFlash', 'get', {}).request().then((data: any) => {
      console.log(data)
    })
    // new netWrok('plugin/api/setBasic', 'post', {}).request().then((data: object) => {
    //   console.log(data)
    // })
  }

  render() {
    return (
      <View>
        <Header /> 
      </View>
    );
  }
}