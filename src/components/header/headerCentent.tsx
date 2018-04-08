import * as React from 'react';
import { Image, ImageURISource } from 'react-native';

/**
 * @param {logoImage}
 */

interface props  {
    logoImage: ImageURISource
}

export default class HeaderCentent extends React.Component<props> {

    render() {
        const { logoImage } = this.props;
    return (
        <Image source={ logoImage }
            style={{ width: 75, height: 23 }}
        />  
    );
  }
}