import * as React from 'react';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Header from './Header';

import { Todo } from './../actions/actionType';

import SplashScreen from 'react-native-splash-screen'
// import { netWrok } from './../utils/request';

export default class Index extends React.Component {

  componentWillMount() {
    // console.log('++++++++++++++++++++ts')
    // new netWrok('api/v5/index/newsFlash', 'get', {}).request().then((data: any) => {
    //   console.log(data)
    // })
    // new netWrok('plugin/api/setBasic', 'post', {}).request().then((data: object) => {
    //   console.log(data)
    // })
  }

    componentDidMount() {
      //启动图修改
      SplashScreen.hide();
    }

  render() {
    return (
      <Header />
    );
  }
}
