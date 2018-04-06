/**
 * @param 处理请求返回
 */

import netWrok from './request';
import { tabNavtion } from './api';


// 底部导航栏
const navigation = () => {
    return new netWrok(tabNavtion, 'get', {}).request().then(async response => console.log(response.json));
}

export {
    navigation
};