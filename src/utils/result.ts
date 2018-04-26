/**
 * @param 处理请求返回
 */

import netWrok from './request';
import { indexBanner, configActive, indexApplication } from './api';


// 底部导航栏
const navigation = async () => {
    const { data } = await new netWrok(indexBanner, 'get', {}).request();
    return data;
}

// 首页活动标的
const listInvest = async () => {
    const { data } = await new netWrok(configActive, 'get', {}).request();
    return data;
}

// 首页新人进阶，大家都喜欢
const listIndexApplication = async () => {
    const { data } = await new netWrok(indexApplication, 'get', {}).request();
    return data;
}

export {
    navigation, listInvest, listIndexApplication
};