import * as React from 'react';

import Index from './../screens/index'
import Header from './../screens/Header/Header'

import {
    StackNavigationOptions,
    StrackOptions,
    tabNavigationOptions,
    tabOptions
} from './settings';

import {
    TabNavigator,
    StackNavigator,
} from 'react-navigation';

const AppNavigator = StackNavigator({
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

type props = {};

export default class Router extends React.Component<props> {
    render() {
        return (
            <AppNavigator />
        );
    }
}