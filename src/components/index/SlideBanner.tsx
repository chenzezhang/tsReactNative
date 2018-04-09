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
            <Swiper
                dot={<View style={{backgroundColor: 'rgba(255,255,255,.7)', borderRadius: 2, width: 5, height: 5, marginRight: 6}} />}
                activeDot={<View style={{ backgroundColor: 'rgba(255,255,255,1)', width: 5, borderRadius: 2, height: 5, marginRight: 6}} />}
                paginationStyle={{
            bottom: 5
                }} >
                {indexBannerList.map(item => 
                    <View key={item} >
                        <Image style={{height: 89, width: 346}} source={{ uri: item }}/>
                    </View>
                )}      
            </Swiper>
        </View>
    );
  }
}