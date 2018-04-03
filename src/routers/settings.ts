import { TabBarBottom} from 'react-navigation';

/**
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
    title?: string;
    tabBarVisible?: boolean;
    tabBarIcon?: (tintColor: string, focused: boolean) => any;
    headerTitle?: string;
    headerBackTitle?: string;
    headerTruncatedBackTitle?: string;
    headerRight?: any;
    headerLeft?: any;
    headerStyle?: Object;
    headerTitleStyle?: Object;
    gestureResponseDistance?: Object;
}

interface StackOptions {
    initialRouteName?: string;
    headerMode?: string;
    mode?: string;
    
    //当转换动画即将开始时被调用的功能
    onTransitionStart?: () => any;
    // 当转换动画完成，将被调用的功能。
    onTransitionEnd?: () => any;

    initialRouteParams?: Object;
}

interface tabNavigationOptions{
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
    };
}

class StackNavigationOptions implements navigationOptions {
    
    title?: string;
    tabBarVisible?: boolean;
    tabBarIcon?: (tintColor: string, focused: boolean) => any;
    headerTitle?: string;
    headerBackTitle?: string;
    headerTruncatedBackTitle?: string;
    headerRight?: any;
    headerLeft?: any;
    headerStyle?: Object;
    headerTitleStyle?: Object;
    gestureResponseDistance?: Object;

    constructor(
        title?: string,
        tabBarVisible?: boolean,
        tabBarIcon?: (tintColor: string,
        focused?: boolean) => any,
        headerTitle?: string,
        headerBackTitle?: string,
        headerTruncatedBackTitle?: string,
        headerRight?: string,
        headerLeft?: string,
        headerStyle?: Object,
        headerTitleStyle?: Object,
        gestureResponseDistance?: Object) {
            this.title = title;
            this.tabBarVisible = tabBarVisible;
            this.tabBarIcon = tabBarIcon;
            this.headerTitle = headerTitle;
            this.headerBackTitle = undefined;
            this.headerTruncatedBackTitle = '返回';
            this.headerRight = headerRight;
            this.headerLeft = headerLeft;
            this.headerStyle = { backgroundColor:"#4ECBFC" };
            this.headerTitleStyle = {color:'white',fontWeight:'500'};
            this.gestureResponseDistance = { horizontal:300 };
    }
    
    resultOption(obj?: any) {
        if (obj) {
            const { navigation, screenProps } = obj;
        }
        // 
        // console.log(obj,'|||||||||||||||||||||||||||')

        return {
            title: this.title,
            tabBarVisible: this.tabBarVisible,
            tabBarIcon: this.tabBarIcon,
            headerTitle: this.headerTitle,
            headerTruncatedBackTitle: this.headerTruncatedBackTitle,
            headerRight: this.headerRight,
            headerLeft: this.headerLeft,
            headerStyle: this.headerStyle,
            headerTitleStyle: this.headerTitleStyle,
            gestureResponseDistance: this.gestureResponseDistance
        }
    }

}

class StrackOptions implements StackOptions {
    
    initialRouteName?: string;
    headerMode?: string;
    mode?: string;
    
    initialRouteParams?: Object;
    //当转换动画即将开始时被调用的功能
    onTransitionStart?: () => any;
    // 当转换动画完成，将被调用的功能。
    onTransitionEnd?: () => any;

    constructor(initialRouteName?: string, headerMode?: string, mode?: string, initialRouteParams?: Object, onTransitionStart?: () => any, onTransitionEnd?: () => any) {
        this.initialRouteName = initialRouteName;
        this.headerMode = 'screen';
        this.mode = 'card';
        this.onTransitionStart = onTransitionStart;
        this.onTransitionEnd = onTransitionEnd;
        this.initialRouteParams = initialRouteParams;
    }

    resultOption(obj?: any) {
        
        // const { navigation, screenProps } = obj;
        
        return {
            initialRouteName: this.initialRouteName,
            headerMode: this.headerMode,
            mode: this.mode,
            onTransitionStart: this.onTransitionStart,
            onTransitionEnd: this.onTransitionEnd,
            initialRouteParams: this.initialRouteParams,

        }
    }
}

class tabNavigationOptions implements tabNavigationOptions {
    tabBarVisible?: boolean;
    tabBarIcon?: (tintColor: string, focused: boolean) => any;
    tabBarLabel?: string;
    tabBarOnPress?: (obj: Object) => any;

    constructor(tabBarVisible?: boolean, tabBarIcon?: (tintColor: string, focused: boolean) => any, tabBarLabel?: string, tabBarOnPress?: (obj: Object) => any) {
        this.tabBarVisible = tabBarVisible;
        this.tabBarIcon = tabBarIcon;
        this.tabBarLabel = tabBarLabel;
        this.tabBarOnPress = tabBarOnPress;
    }

    resultOption(obj?: any) {
        const { navigation, screenProps } = obj;

        return {
            tabBarVisible: this.tabBarVisible,
            tabBarIcon: this.tabBarIcon,
            tabBarLabel: this.tabBarLabel,
            tabBarOnPress: this.tabBarOnPress
        }
    }
    
}

class tabOptions implements tabOptions {

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
    };

    constructor(
        tabBarPosition?: string,
        swipeEnabled?: boolean,
        animationEnabled?: boolean,
        tabBarOptions?: { style: Object;
            activeBackgroundColor: string,
            activeTintColor: string,
            inactiveBackgroundColor: string,
            inactiveTintColor: string,
            showLabel: boolean
        },
        tabBarComponent?: any,
    ) {
        this.tabBarPosition = tabBarPosition;
        this.swipeEnabled = false;
        this.animationEnabled = false;
        this.tabBarOptions = tabBarOptions;
        this.tabBarComponent = TabBarBottom;
    }

    resultOption(obj?: any) {
        // const { navigation, screenProps } = obj;
        
        return {
            tabBarPosition: this.tabBarPosition,
            swipeEnabled: this.swipeEnabled,
            animationEnabled: this.animationEnabled,
            tabBarOptions: this.tabBarOptions

        }
    }
}

export {
    StackNavigationOptions,
    StrackOptions,
    tabNavigationOptions,
    tabOptions
}

// export const AppNavigator = StackNavigator({
//     Header: { screen: Header, navigationOptions: {}},
//   });