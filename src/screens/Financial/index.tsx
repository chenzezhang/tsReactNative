import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './css/index'

export class Financial extends React.Component<{}> {

  render() {
    

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                这是理财的页面，好不好看。
            </Text>
        </View> 
    );
  }
}

export default Financial;