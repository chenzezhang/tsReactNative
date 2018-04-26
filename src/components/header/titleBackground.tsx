import * as React from 'react';
import { View, Image, ImageURISource, StyleSheet, StatusBar } from 'react-native';

import { navigation } from './../../utils/result';

/**
 * @param {background} 背景图片地址
 * 获取屏幕的高度和宽度 对背景图进行
 */

const dimensions = require("Dimensions");

const { width, height } = dimensions.get("window");

interface props  {
    background: ImageURISource
}

interface state {
    url: string;
}

export default class TitleBackground extends React.Component<props, state> {
    
    state = {
        url: '',
    }

    componentWillMount() {
        
        navigation().then(res => {
            this.setState({ url: res.indexBackground.url});
            console.log(this.state)
        })

    }
    
    render() {

        const { background } = this.props;

        const { url } = this.state;

    return (
        <View style={style.views}>
            <Image style={style.image} source={url ? { uri: url } : background} />
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
    