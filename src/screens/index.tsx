import * as React from 'react';

import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import { Todo } from './../actions/actionType';

import SplashScreen from 'react-native-splash-screen'
import { navigation } from './../utils/result';
import TitleBackground from './../components/header/titleBackground';
import SlideBanner from './../components/index/SlideBanner';
import List from './../components/index/list';

interface IContainerProps extends React.Props<Todo> {
  navigation: any
}

export default class Index extends React.Component<IContainerProps> {

  componentWillMount() {

  }

  componentDidMount() {
    //启动图修改
    SplashScreen.hide();
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, '+++++++')
    return (

      // <TouchableOpacity onPressIn={() => navigate('Header', {test:111,aaa:33333}, {})}>
      //     <Text>test onpressin ++++++</Text>
      //   </TouchableOpacity>
      <View style={{ top: -54 }}>
        <View style={style.view}>
          <TitleBackground background={require('./../static/index/dropdown.png')} />
          <View style={style.showMess}>
            <Image style={style.image} source={require('./../static/index/noLogin.png')} />
          </View>
        </View>
        <SlideBanner />
        <List />
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
