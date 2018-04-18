import * as React from 'react';
import { View , Text} from 'react-native';
import { Index, Header, Financial, Consumption, Fund, Insurance } from './../screens/router';
import { TabBarBottom } from 'react-navigation';
import TabBarItem from './../components/index/TabBarItem';
import { HeaderCentent, HeaderLeft, HeaderRight } from './../components/header';

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
            ...new StackNavigationOptions(
                null,
               '首页',
                (<HeaderRight text={'登录'}/>), 
                (<HeaderLeft userInfoImage={require('./../static/index/headTip.png')} />),
                { backgroundColor: null, borderBottomWidth: null, borderBottomColor: null},
            ).resultOption({ navigation, screenProps }), ...new StrackOptions().resultOption() 
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
            ...new tabNavigationOptions('首页', true, (focused: boolean, tintColor: string): any => (
                <TabBarItem
                focused={focused}  
                normalImage={require('./../static/imgs/index.png')}  
                selectedImage={require('./../static/imgs/index_acti.png')}  />
            ), ).resultOption({ navigation, screenProps })
        }),
    },
    Fund: {     // 基金
        screen: Fund,
        navigationOptions: ({ navigation, screenProps }: any): any => ({
            ...new tabNavigationOptions('基金', true, (focused: boolean, tintColor: string) => (
            <TabBarItem
            focused={focused}  
            normalImage={require('./../static/imgs/fund.png')}  
                selectedImage={require('./../static/imgs/fund_acti.png')} />
            )).resultOption({ navigation, screenProps })
        }),
    },
    Financial: { // 理财
        screen: Financial,
        navigationOptions: ({ navigation, screenProps }: any) => ({
            ...new tabNavigationOptions('理财', true, (focused: boolean, tintColor: string): any => (
                <TabBarItem
                focused={focused}  
                normalImage={require('./../static/imgs/financial.png')}  
                selectedImage={require('./../static/imgs/financial_acti.png')}  />
            )).resultOption({ navigation, screenProps })
        }),
    },
    Insurance: {  // 保险
        screen: Insurance,
        navigationOptions: ({ navigation, screenProps }: any) => ({
            ...new tabNavigationOptions('保险', true, (focused: boolean, tintColor: string): any => (
                <TabBarItem
                focused={focused}  
                normalImage={require('./../static/imgs/insurance.png')}  
                selectedImage={require('./../static/imgs/insurance_acti.png')}  />
            )).resultOption({ navigation, screenProps })
        }),
    },
    Consumption: {  // 消费
        screen: Consumption,
        navigationOptions: ({ navigation, screenProps }: any) => ({
            ...new tabNavigationOptions('消费', true, (focused: boolean, tintColor: string): any => (
                <TabBarItem
                focused={focused}  
                normalImage={require('./../static/imgs/consumption.png')}  
                selectedImage={require('./../static/imgs/consumption_acti.png')}  />
            )).resultOption({ navigation, screenProps }) 
        }),
    },
}, tabOptions
);

type props = {
};

export default class Router extends React.Component<props> {

    render() {
      
        return (
            <View style={{flex: 1}}>
                <AppTabNavigator />
            </View>
        );
    }
}