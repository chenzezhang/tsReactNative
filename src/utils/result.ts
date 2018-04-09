/**
 * @param 处理请求返回
 */

import netWrok from './request';
import { indexBanner } from './api';


// 底部导航栏
const navigation = async () => {
    const { data } = await new netWrok(indexBanner, 'get', {}).request();
    return data;
}

export {
    navigation
};