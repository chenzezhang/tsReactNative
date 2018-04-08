import * as React from 'react';

import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import { Todo } from './../actions/actionType';

import SplashScreen from 'react-native-splash-screen'
import { navigation } from './../utils/result';
import TitleBackground from './../components/header/titleBackground';

const data = navigation().then((data: any) => {
  console.log(data)
});
console.log(data,'+++++++++')

interface IContainerProps extends React.Props<Todo> {
  navigation: any
}

export default class Index extends React.Component<IContainerProps> {

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
    const { navigate } = this.props.navigation;
    console.log(this.props,'+++++++')
    return (
       
      // <TouchableOpacity onPressIn={() => navigate('Header', {test:111,aaa:33333}, {})}>
      //     <Text>test onpressin ++++++</Text>
      //   </TouchableOpacity>
      <View style={style.view}>
        <TitleBackground background={require('./../static/index/dropdown.png')} />
      </View>
    );
  }
}


const style = StyleSheet.create({
  view: {
    position: 'absolute', top: -68, left: 0
  },
});
  