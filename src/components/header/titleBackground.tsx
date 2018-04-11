import * as React from 'react';
import { View, Image, ImageURISource, StyleSheet, StatusBar } from 'react-native';

/**
 * @param {background} 背景图片地址
 * 获取屏幕的高度和宽度 对背景图进行
 */

const dimensions = require("Dimensions");

const { width, height } = dimensions.get("window");

interface props  {
    background: ImageURISource
}

export default class TitleBackground extends React.Component<props, {}> {

    render() {
        const { background } = this.props;
    return (
        <View style={style.views}>
            <Image  style={style.image} source={background} />
        </View>
    );
  }
}

const style = StyleSheet.create({
    views: {
        top: -54,
        flex: 1,
    },
    image: {
        width: width,
        height: width * height / width,
    }
});
    