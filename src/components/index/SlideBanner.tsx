import * as React from 'react';
import { View, Text, Image, ImageURISource } from 'react-native';
import style from './SlideBannerCss';
import Swiper from 'react-native-swiper';
import { navigation } from './../../utils/result';

/**
 * @param {slideImg}
 *  滑动banner
 */
interface props  {
    slideImg?: ImageURISource;
}
interface IState {
    indexBannerList: string[];
}
export default class SlideBanner extends React.Component<props, IState> {

    state = {
        indexBannerList: []
    }

    componentWillMount() { 
        navigation().then(res => {
            this.setState({ indexBannerList: res.indexBannerList.map((item: any) => item.imageUrl) });
        })
    }

    render() {

        const { slideImg } = this.props;
        const { indexBannerList } = this.state;
    
    return (
        <View style={style.container}>
            <Swiper key={indexBannerList.length}
                dot={<View style={style.dot} />}
                activeDot={<View style={style.activeDot} />}
                paginationStyle={{
            bottom: 5
                }}>
                {indexBannerList.map((item, i) => 
                    <View key={item} >
                        <Image style={{height: 89, width: 346}} source={{ uri: item }}/>
                    </View>
                )}      
            </Swiper>
        </View>
    );
  }
}