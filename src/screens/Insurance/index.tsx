import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import styles from './css/index'

export class Insurance extends React.Component<{}> {

  render() {
    

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                这是保险的页面，好不好看。
            </Text>
        </View> 
      
    );
  }
}

export default Insurance;