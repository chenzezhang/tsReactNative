import * as React from 'react';
import { View , Text} from 'react-native';
import { Index, Header, Financial, Consumption, Fund, Insurance } from './../screens/router';
import { TabBarBottom } from 'react-navigation';

/**
 * @param 实现分路由管理。 
 */    

import {
    StackNavigationOptions,
    StrackOptions,
    tabNavigationOptions,
    tabOptions
} from './settings';

import {
    TabNavigator,
    StackNavigator, TabNavigatorConfig
} from 'react-navigation';

/**
 * @param 页面跳转
 */
const IndexNavigator = StackNavigator({
    Index: {
        screen: Index,
        navigationOptions: ({ navigation, screenProps }: any) => ({
            ...new StackNavigationOptions('首页').resultOption({ navigation, screenProps }), ...new StrackOptions().resultOption() 
        }),
    },
    Header: {
        screen: Header,
        navigationOptions: ({ navigation, screenProps }: any) => ({
            ...new StackNavigationOptions('我的').resultOption({ navigation, screenProps }), ...new StrackOptions().resultOption() 
        }),
    }
});

/**
 * @param 类似底部导航栏目跳转
 */

const AppTabNavigator = TabNavigator({

    Index: {    // 首页
        screen: IndexNavigator,
        navigationOptions: ({ navigation, screenProps }: any) => ({
            ...new tabNavigationOptions('首页', true,).resultOption({ navigation, screenProps })
        }),
    },
    Fund: {     // 基金
        screen: Fund,
        navigationOptions: ({ navigation, screenProps }: any) => ({
            ...new tabNavigationOptions('基金', true,).resultOption({ navigation, screenProps })
        }),
    },
    Financial: { // 理财
        screen: Financial,
        navigationOptions: ({ navigation, screenProps }: any) => ({
            ...new tabNavigationOptions('理财', true,).resultOption({ navigation, screenProps })
        }),
    },
    Insurance: {  // 保险
        screen: Insurance,
        navigationOptions: ({ navigation, screenProps }: any) => ({
            ...new tabNavigationOptions('保险', true,).resultOption({ navigation, screenProps })
        }),
    },
    Consumption: {  // 消费
        screen: Consumption,
        navigationOptions: ({ navigation, screenProps }: any) => ({
            ...new tabNavigationOptions('消费', true,).resultOption({ navigation, screenProps }) 
        }),
    },
}, tabOptions
);

type props = {};

export default class Router extends React.Component<props> {
    render() {
        return (
            <View style={{height: '100%',width:'100%'}}>
               <AppTabNavigator />
            </View>
        );
    }
}