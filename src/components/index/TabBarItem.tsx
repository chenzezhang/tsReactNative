import * as React from 'react';
import { Image, ImageURISource } from 'react-native';

/**
 * @param {focused,selectedImage,normalImage}
 *  底部导航栏
 */

interface props  {
    focused: any;
    selectedImage: ImageURISource;
    normalImage: ImageURISource;
}

export default class TabBarItem extends React.Component<props> {

    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
      
        const { focused, normalImage } = this.props;
        
        const obj = {...focused};

    return (
        <Image source={obj.focused ? selectedImage : normalImage}
            style={{ width: 22, height: 22 }}
        />  
    );
  }
}