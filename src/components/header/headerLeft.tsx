import * as React from 'react';
import { View, Image, ImageURISource, StyleSheet } from 'react-native';

/**
 * @param {logoImage}
 */

interface props  {
    userInfoImage: ImageURISource
}

export default class HeaderLeft extends React.Component<props> {

    render() {
        const { userInfoImage } = this.props;
    return (
        <View style={style.view}>
            <Image source={ userInfoImage }
                style={style.imgStyle}/>  
        </View>
    );
  }
}

const style = StyleSheet.create({
    view: {
        marginLeft: 12,
    },
    imgStyle: {
        width: 30,
        height: 30,
        resizeMode:'contain'
    }
});
    