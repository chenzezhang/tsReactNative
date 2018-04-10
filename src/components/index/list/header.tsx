import * as React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import style from './headerCss';
import { HeaderRight } from '../../header';

/**
 * @param {}
 *  标的 header
 */

interface props  {
    tip: string;
    title: string;
}

interface IState {
    title: string;
}
export default class Header extends React.Component<props, IState> {

    state = {
        tip: '',
        title: ''
    }

    render() {
        const { tip, title } = this.props;

        return (
            <View style={style.container}>
                <ImageBackground source={require('././../../../static/index/tipBac.png')} style={style.headerLeft}>
                    <Text style={style.headerLeftText}> { tip } </Text>
                </ImageBackground>
                <Text style={style.headerRight}> { title } </Text>
            </View>
        );
  }
}