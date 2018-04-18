import * as React from 'react';

import { View, TouchableOpacity, Text, StyleSheet, Image, StatusBar } from 'react-native';

import ListViewContent from './../utils/ListView';

import { Todo } from './../actions/actionType';
import SplashScreen from 'react-native-splash-screen'
import { navigation } from './../utils/result';
import TitleBackground from './../components/header/titleBackground';
import SlideBanner from './../components/index/SlideBanner';
import List from './../components/index/list';
import Spacing from './../components/index/Spacing';



interface IContainerProps {
  navigation: any
}

const dimensions = require("Dimensions");

const { width, height } = dimensions.get("window");

const ListViewHeight = height - 54;

export default class Index extends React.Component<IContainerProps> {

  componentWillMount() {

  }

  componentDidMount() {
    //启动图修改
    SplashScreen.hide();
  }

  render() {
    const { navigate } = this.props.navigation;
    // <TouchableOpacity onPressIn={() => navigate('Header', {test:111,aaa:33333}, {})}>
    //     <Text>test onpressin ++++++</Text>
    //   </TouchableOpacity>
    const views = (
      <View>
        <View style={style.view}>
          <View style={style.showMess}>
            <Image style={style.image} source={require('./../static/index/noLogin.png')} />
          </View>
        </View>
        <List />
      </View>
    )

    return (
      <View>
        <StatusBar translucent={true} barStyle={'light-content'} />
        <TitleBackground background={require('./../static/index/dropdown.png')} />
        <ListViewContent style={{ top: 0, height: ListViewHeight }} children={views} />
      </View>
    );

  }
}

const style = StyleSheet.create({
  view: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: 375,
    height: 164,
    overflow: 'hidden',
    flex: 1,
  },
  showMess: {
    width: 340,
    height: 150,
    justifyContent: 'center',
    position: 'absolute',
    flexDirection: 'row',
    top: 0
  },
  image: {
    width: 257,
    height: 137,
  }
});
