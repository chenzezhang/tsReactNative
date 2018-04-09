import * as React from 'react';

import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import { Todo } from './../actions/actionType';

import SplashScreen from 'react-native-splash-screen'
import { navigation } from './../utils/result';
import TitleBackground from './../components/header/titleBackground';
import SlideBanner from './../components/index/SlideBanner';

// const data = navigation().then((data: any) => {
//   console.log(data)
// });
// console.log(data,'+++++++++')

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
      <View style={{top: -54}}>
        <View style={style.view}>
        <TitleBackground background={require('./../static/index/dropdown.png')} />
        <View style={style.showMess}>
          <Image style={style.image} source={require('./../static/index/noLogin.png')} />
        </View>
        </View>
      <SlideBanner />  
      </View>
    );
  }
}


const style = StyleSheet.create({
  view: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: 375,
    height: 229,
    overflow: 'hidden'
  },
  showMess: {
    width: 340,
    height: 150,
    justifyContent: 'center',
    position: 'absolute',
    flexDirection: 'row',
    top: 68
  },
  image: {
    width: 257,
    height: 137,
  }
});
  