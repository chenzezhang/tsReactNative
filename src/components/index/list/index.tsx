import * as React from 'react';
import { View, Text, Image, ImageURISource, ImageBackground } from 'react-native';
import style from './indexCss';
import Header from './header';
import LinearGradient from 'react-native-linear-gradient';
import ListItem from './ListItem';
import Spacing from './../Spacing';
import SlideBanner from './../SlideBanner';

import { listInvest, listIndexApplication } from './../../../utils/result';

/**
 * @param {}
 *  标的
 */

interface props {

}

interface IState {
    indexNewPeople: object;
}
export default class List extends React.Component<props, IState> {

    state = {
        indexNewPeople: {
            title: '',
            wordSize: '16',
            color: '#6C6C4B',
            iconUrl: '',
            rightLinkName: '',
            everyDayProfit: {
                yearlyroe: 0,
            },
            list: [{
                aliasName: '',
                loanName: '',
                rate: 0,
                plusRate: 0,
                days: 0
            }]
        },
    }

    componentWillMount() {
        listIndexApplication().then(res => {
            this.setState({ indexNewPeople: res.indexNewPeople });
        })
    }

    render() {

        const { indexNewPeople } = this.state;

        const { title, wordSize, color, rightLinkName, list, iconUrl, everyDayProfit } = indexNewPeople;

        const { yearlyroe } = everyDayProfit;

        return (
            <View style={style.container}>
                <SlideBanner />
                <Spacing />
                <View style={style.listCentent}>
                    <View style={style.header}>
                        <View style={style.headerLeft}>
                            <Image style={style.headerLeftImage} source={iconUrl ? { uri: iconUrl } : require('./../../../static/index/newUser.png')} />
                            <Text style={[style.headerLeftText, {
                                fontSize: parseInt(wordSize),
                                color: color
                            }]}>{title}</Text>
                        </View>
                        <ImageBackground style={style.headerRight} source={require('./../../../static/index/button1.png')} >
                            <Text style={style.headerRightText}>{rightLinkName}</Text>
                        </ImageBackground>
                    </View>
                    {/* 遍历开始 */}
                    {list.map((item, i) =>
                        <View style={style.listCententItem} key={i}>
                            <Header tip={item.aliasName} title={item.loanName} />
                            <View style={style.listCententItemCentent}>
                                <View style={style.pubView}>
                                    <View style={style.left}>
                                        <View style={style.pubView}>
                                            <Text style={style.leftText1}>{(item.rate - item.plusRate) / 100}</Text>
                                            <Text style={style.leftText2}>%{item.plusRate > 0 ? <Text> + {item.plusRate / 100}%</Text> : null}</Text>
                                        </View>
                                        <Text style={style.leftText3}>预期年化</Text>
                                    </View>
                                    <View style={style.right}>
                                        <View style={style.pubView}>
                                            <Text style={style.rightText1}>{item.days}</Text>
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
                        </View>)}
                    {/* 遍历结束 */}
                </View>

                <ListItem refresh={yearlyroe.toFixed(2)} sourceImag={require('./../../../static/index/button.png')} tip={'热卖理财'} title={'美宝保1号8376103829'} />
                <ListItem refresh={'19'} sourceImag={require('./../../../static/index/button.png')} tip={'活期理财'} title={'每天盈'} />

                <Spacing />

                <View style={style.header}>
                    <View style={style.headerLeft}>
                        <Image style={style.headerLeftImage} source={require('./../../../static/index/gomehao.png')} />
                        <Text style={style.headerLeftText}>Gome号</Text>
                    </View>
                    <View style={style.headerRight}>
                        <Text style={style.headerRightText}>
                            更多 >
                                </Text>
                    </View>
                </View>
                <View>
                    <ImageBackground style={style.gomeBac} source={require('./../../../static/index/gomoBac.png')}>
                        <Text style={style.gomeBacText}>
                            距离双十一****活动还有6天
                        </Text>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}