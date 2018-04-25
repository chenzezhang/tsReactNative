
import * as React from 'react';
import { View, Image, ImageURISource, StyleSheet } from 'react-native';

import HeaderCentent from './headerCentent';
import HeaderLeft from './headerLeft';
import HeaderRight from './headerRight';
import { Header } from '../../screens/Header';

interface props {
    style?: any;
    opacity?: number;
}

/**
 * @param 在这里把头部拼起来
 */

class ViewHeader extends React.Component<props> {

    render() {
        return (
            <View style={[style.ViewHeader, {...this.props.style}]}>
                <HeaderLeft userInfoImage={require('./../../static/index/headTip.png')} />
                <HeaderCentent logoImage = {require('./../../static/index/logo.png')} opacity={this.props.opacity} />
                <HeaderRight text={'登录'} />
            </View>
        )
    }
}

const style = StyleSheet.create({
    ViewHeader: {
        width: '100%',
        zIndex: 99,
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        paddingTop: 10,
        backgroundColor: 'rgba(55,55,55,0)',
        justifyContent: 'space-between',
        top: 0
    }

});

export {
    ViewHeader, HeaderCentent, HeaderLeft, HeaderRight
}








