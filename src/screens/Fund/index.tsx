import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import styles from './css/index'

export class Fund extends React.Component<{}> {

  render() {
    

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                这是基金的页面，好不好看。
            </Text>
        </View> 
      
    );
  }
}

export default Fund;