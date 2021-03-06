import * as React from 'react';
import { View, Text, Image, ImageURISource, Platform } from 'react-native';
import style from './SlideBannerCss';
import Swiper from 'react-native-swiper';
import { navigation } from './../../utils/result';

/**
 * @param {slideImg}
 *  滑动banner
 */
interface props {
    slideImg?: ImageURISource;
}
interface IState {
    indexBannerList: string[];
    subjectUrl: string;
    inletCopycolor: string;
}
export default class SlideBanner extends React.Component<props, IState> {

    state = {
        subjectUrl: '',
        inletCopycolor: '',
        indexBannerList: []
    }

    componentWillMount() {
        navigation().then(res => {
            this.setState({ indexBannerList: res.indexBannerList.map((item: any) => item.imageUrl), subjectUrl: res.indexBackground.subjectUrl, inletCopycolor: res.indexBackground.inletCopycolor });
        })
    }

    render() {

        const { slideImg } = this.props;
        const { indexBannerList, subjectUrl, inletCopycolor } = this.state;

        {/*
        * 这里兼容Swiper 在安卓下不能正常显示图片的bug,不要问我为什么，因为我也不知道。
        */ }

        const androidSwiperView = (
            <Swiper style={{ flex: 1 }} width={375} height={125} key={indexBannerList.length}
                dot={<View style={style.dot} />}
                activeDot={<View style={style.activeDot} />}
                paginationStyle={{
                    bottom: 5
                }}>
                {indexBannerList.map((item, i) =>
                    <View key={item}>
                        <Image style={{ height: 89, width: 375 }} source={{ uri: item }} />
                    </View>
                )}
            </Swiper>
        )
        const iosSwiperView = (
            <Swiper key={indexBannerList.length}
                dot={<View style={style.dot} />}
                activeDot={<View style={style.activeDot} />}
                paginationStyle={{
                    bottom: 5
                }}>
                {indexBannerList.map((item, i) =>
                    <View key={item}>
                        <Image style={{ height: 89, width: 346 }} source={{ uri: item }} />
                    </View>
                )}
            </Swiper>
        )

        return (

            <View>
                {subjectUrl? <View style={{height: 154, backgroundColor: this.state.inletCopycolor}}>
                    <Image source={{ uri: subjectUrl }} style={{height: 154}} />
                </View> : null}
                <View style={style.container}>
                    {Platform.OS === 'android' ? androidSwiperView : iosSwiperView}
                </View>

            </View>
        );
    }
}