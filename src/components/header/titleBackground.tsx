import * as React from 'react';
import { View, Image, ImageURISource, StyleSheet } from 'react-native';

/**
 * @param {logoImage}
 */

interface props  {
    background: ImageURISource
}

export default class TitleBackground extends React.Component<props> {

    render() {
        const { background } = this.props;
    return (
        <Image style={style.imgStyle} source={background} />
    );
  }
}

const style = StyleSheet.create({
    imgStyle: {
        top: -54,
    }
});
    