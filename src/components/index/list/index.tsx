import * as React from 'react';
import { View, Text, Image, ImageURISource, ImageBackground } from 'react-native';
import style from './indexCss';
import Header from './header';
import LinearGradient from 'react-native-linear-gradient';
import ListItem from './ListItem';

/**
 * @param {}
 *  标的
 */

interface props  {
    
}

interface IState {
    
}
export default class List extends React.Component<props, IState> {

    state = {
        
    }

    render() {

        return (
            <View style={style.container}>
                <View style={style.listCentent}>
                    <View style={style.header}>
                        <View style={style.headerLeft}>
                            <Image style={style.headerLeftImage} source={require('./../../../static/index/newUser.png')} />
                            <Text style={style.headerLeftText}>新人进阶</Text>
                        </View>
                        <ImageBackground style={style.headerRight} source={require('./../../../static/index/button1.png')} >
                            <Text style={style.headerRightText}>
                                    新手引导
                                </Text>   
                        </ImageBackground>
                    </View>
                    <View style={style.listCententItem}>
                        <Header tip={'新人专享'} title={'一个很独特的标的。'} />
                        <View style={style.listCententItemCentent}>
                            <View style={style.pubView}>
                                <View style={style.left}>
                                    <View style={style.pubView}>
                                       <Text style={style.leftText1}>7.2</Text>
                                       <Text style={style.leftText2}>%</Text>
                                    </View>
                                    <Text style={style.leftText3}>预期年化</Text>
                                </View>
                                <View style={style.right}>
                                    <View style={style.pubView}>
                                       <Text style={style.rightText1}>187</Text>
                                       <Text style={style.rightText2}>天</Text>
                                    </View>
                                    <Text style={style.leftText3}>期限</Text>
                                </View>
                            </View>
                            <View>
                                <LinearGradient style={style.buttonBack} colors={['#F0DAB9', '#C5AF7F']}>
                                    <Text style={style.buttonBackText}>立即购买</Text>
                                    </LinearGradient>
                                
                            </View>
                            <View style={style.pubView}>
                                <Text style={style.bottomTip}>预期收益不承诺等于实际收益</Text>
                            </View>
                        </View>
                    </View>
                </View>
                

                <ListItem refresh={'16.2'} date={'59'} sourceImag={require('./../../../static/index/button.png')} tip={'热卖理财'} title={'美宝保1号8376103829'} />
                <ListItem refresh={'19'} date={'187'} sourceImag={require('./../../../static/index/button.png')} tip={'活期理财'} title={'每天盈'} />


                {/* <Text>111111111</Text>;
    <Text>111111111</Text>;<Text>sdfsdfsdfsdf</Text>;<Text>111111111</Text>;
    <Text>111111111</Text>;
    <Text>111111111</Text>;
    <Text>111111111</Text>; */}
                                                    
            </View>
        );
  }
}