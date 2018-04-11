import * as React from 'react';

import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import ListViewContent from './../utils/ListView';

import { Todo } from './../actions/actionType';
import SplashScreen from 'react-native-splash-screen'
import { navigation } from './../utils/result';
import TitleBackground from './../components/header/titleBackground';
import SlideBanner from './../components/index/SlideBanner';
import List from './../components/index/list';

interface IContainerProps {
  navigation: any
}

const dimensions = require("Dimensions");

const { width, height } = dimensions.get("window");

const ListViewHeight = height - 52;

export default class Index extends React.Component<IContainerProps> {

  componentWillMount() {

  }

  componentDidMount() {
    //启动图修改
    SplashScreen.hide();
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(height,'++++++')
    const views = (
      <View >
        <View style={style.view}>
          <View style={style.showMess}>
            <Image style={style.image} source={require('./../static/index/noLogin.png')} />
          </View>
        </View>
        <SlideBanner />
        <View style={{backgroundColor: '#f0f0f0', height: 10}} />
        <List />
      </View>
    )

    return (
      <View>
        <TitleBackground background={require('./../static/index/dropdown.png')} />
        <ListViewContent style={{top: -54, height: ListViewHeight}} children={ views } /> 
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
    overflow: 'hidden',
    flex: 1,
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
