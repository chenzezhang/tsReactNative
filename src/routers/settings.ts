import { TabBarBottom, TabNavigatorConfig } from 'react-navigation';

/**
 *  TabNavigatorConfig
    android:    
        activeTintColor：label和icon的前景色 活跃状态下（选中） 。
        inactiveTintColor：label和icon的前景色 不活跃状态下(未选中)。
        showIcon：是否显示图标，默认关闭。
        showLabel：是否显示label，默认开启。
        style：tabbar的样式。
        labelStyle：label的样式。
        upperCaseLabel：是否使标签大写，默认为true。
        pressColor：material涟漪效果的颜色（安卓版本需要大于5.0）。
        pressOpacity：按压标签的透明度变化（安卓版本需要小于5.0）。
        scrollEnabled：是否启用可滚动选项卡。
        tabStyle：tab的样式。
        indicatorStyle：标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
        iconStyle：图标的样式。
    ios:
        activeTintColor：label和icon的前景色 活跃状态下（选中）。
        activeBackgroundColor：label和icon的背景色 活跃状态下（选中） 。
        inactiveTintColor：label和icon的前景色 不活跃状态下(未选中)。
        inactiveBackgroundColor：label和icon的背景色 不活跃状态下（未选中）。
        showLabel：是否显示label，默认开启。
        style：tabbar的样式。
        labelStyle：label的样式。
 */

interface navigationOptions {
    headerTitle?: string;
    headerRight?: any;
    headerLeft?: any;
    headerStyle?: Object;
    headerTintColor?: Object;
}

interface StackOptions {
    initialRouteName?: string;
    //当转换动画即将开始时被调用的功能
    onTransitionStart?: () => any;
    // 当转换动画完成，将被调用的功能。
    onTransitionEnd?: () => any;
    initialRouteParams?: Object;
}

interface tabNavigationOptions {
    title?: string;
    tabBarVisible?: boolean;
    tabBarIcon?: (tintColor: string, focused: boolean) => any;
    tabBarLabel?: string;
    tabBarOnPress?: (obj: Object) => any;
}

interface tabOptions {
    tabBarPosition?: string;
    swipeEnabled?: boolean;
    animationEnabled?: boolean;
    tabBarComponent?: any;
    tabBarOptions?: {
        style: Object;
        activeBackgroundColor: string,
        activeTintColor: string,
        inactiveBackgroundColor: string,
        inactiveTintColor: string,
        showLabel: boolean,
        labelStyle?: Object
    };
}

class StackNavigationOptions implements navigationOptions {

    headerTitle?: string;
    headerRight?: any;
    headerLeft?: any;
    headerStyle?: Object;
    headerTintColor?: Object;
    
    constructor(
        headerTitle?: string,
        headerRight?: any,
        headerLeft?: any,
        headerStyle?: Object,
        headerTintColor?: Object)
    {
        this.headerTitle = headerTitle;
        this.headerRight = headerRight;
        this.headerLeft = headerLeft;
        this.headerStyle = headerStyle;
        this.headerTintColor = headerTintColor;
    }

    resultOption(obj?: any) {
        if (obj) {
            const { navigation, screenProps } = obj;
        }

        return {
            headerTitle: this.headerTitle,
            headerRight: this.headerRight,
            headerLeft: this.headerLeft,
            headerStyle: this.headerStyle,
            headerTintColor: this.headerTintColor,
            headerBackTitle: null,
            headerTruncatedBackTitle: null,
            headerTitleStyle: null
        }
    }

}

class StrackOptions implements StackOptions {

    initialRouteName?: string;
    initialRouteParams?: Object;
    //当转换动画即将开始时被调用的功能
    onTransitionStart?: () => any;
    // 当转换动画完成，将被调用的功能。
    onTransitionEnd?: () => any;

    constructor(initialRouteName?: string, headerMode?: string, mode?: string, initialRouteParams?: Object, onTransitionStart?: () => any, onTransitionEnd?: () => any) {
        this.initialRouteName = initialRouteName;
        this.onTransitionStart = onTransitionStart;
        this.onTransitionEnd = onTransitionEnd;
        this.initialRouteParams = initialRouteParams;
    }

    resultOption(obj?: any) {

        // const { navigation, screenProps } = obj;

        return {
            initialRouteName: this.initialRouteName,
            onTransitionStart: this.onTransitionStart,
            onTransitionEnd: this.onTransitionEnd,
            initialRouteParams: this.initialRouteParams,
            headerMode: 'screen',
            mode: 'card',
        }
    }
}

class tabNavigationOptions implements tabNavigationOptions {
    tabBarLabel?: string;
    tabBarVisible?: boolean;
    tabBarIcon?: (tintColor: string, focused: boolean) => any;
    tabBarOnPress?: (obj: Object) => any;

    constructor(tabBarLabel?: string, tabBarVisible?: boolean, tabBarIcon?: (tintColor: string, focused: boolean) => any, tabBarOnPress?: (obj: Object) => any) {
        this.tabBarLabel = tabBarLabel;
        this.tabBarVisible = tabBarVisible;
        this.tabBarIcon = tabBarIcon;
        this.tabBarOnPress = tabBarOnPress;
    }

    resultOption(obj?: any) {
        // const { navigation, screenProps } = obj;

        return {
            tabBarVisible: this.tabBarVisible,
            tabBarIcon: this.tabBarIcon,
            tabBarLabel: this.tabBarLabel,
            tabBarOnPress: this.tabBarOnPress
        }
    }

}

/**
 * @param 底部导航栏设置。 
 */

const tabOptions:TabNavigatorConfig = {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        style: {
            backgroundColor: '#ffffff',
            height: 52
        },
        activeBackgroundColor: '#ffffff',
        activeTintColor: '#C2A357',
        inactiveBackgroundColor: '#ffffff',
        inactiveTintColor: '#979FA7',
        showLabel: true,
        labelStyle: {
            fontSize: 14,
            marginBottom: 4.5,
        }
    },
    tabBarComponent: TabBarBottom,
    lazy: true
}

export {
    StackNavigationOptions,
    StrackOptions,
    tabNavigationOptions,
    tabOptions
}
