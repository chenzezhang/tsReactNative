import * as React from 'react';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Header from './Header';

import { Todo } from './../actions/actionType';


import SplashScreen from 'react-native-splash-screen'
// import { netWrok } from './../utils/request';

export default class Hello extends React.Component {

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
    SplashScreen.hide();
}

  render() {
    return (
      <TouchableOpacity
                style={styles.container}
            >
                <View >
                    <Text style={styles.item}>
                        SplashScreen 启动屏
                    </Text>
                    <Text style={styles.item}>
                        @：http://www.devio.org/
                    </Text>
                    <Text style={styles.item}>
                        GitHub:https://github.com/crazycodeboy
                    </Text>
                    <Text style={styles.item}>
                        Email:crazycodeboy@gmail.com
                    </Text>
                </View>
            </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f3f2f2',
      marginTop: 30
  },
  item: {
      fontSize: 20,
  },
  line: {
      flex: 1,
      height: 0.3,
      backgroundColor: 'darkgray',
  },
})