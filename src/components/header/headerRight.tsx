import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

/**
 * @param {text}
 */

interface props  {
    text: string;
}

export default class HeaderRight extends React.Component<props> {

    render() {
        const { text } = this.props;
    return (
        <Text style={style.text}>{text}</Text>
    );
  }
}


const style = StyleSheet.create({
  text: {
      marginRight: 12,
      color: '#fff',
      fontSize: 15
  },
});
  