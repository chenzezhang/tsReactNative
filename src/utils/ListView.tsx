// import * as React from 'react';

// import { ListView, View, Text, RefreshControl, Animated } from 'react-native';
// import { ViewHeader } from './../components/header';

// interface props {
//     children: any;
//     style?: any;
// }

// interface State {
//     children: any;
//     dataSource: any;
//     style?: any;
//     refreshing: boolean,
//     showHeight: boolean,
//     offserY: number,
//     fadeAnim: any,
//     fadeAnims: any
// }

// export default class ListViewContent extends React.Component<props, State> {

//     constructor(props: any) {
//         super(props);
//         const ds = new ListView.DataSource({
//             rowHasChanged: (oldRow, newRow) => oldRow !== newRow,
//             sectionHeaderHasChanged: (oldRow, newRow) => oldRow !== newRow
//         });
//         this.state = {
//             children: '',
//             dataSource: ds.cloneWithRows(['1']),
//             style: {},
//             refreshing: false,
//             showHeight: false,
//             offserY: 0,
//             fadeAnim: new Animated.Value(0), //设置初始值
//             fadeAnims: new Animated.Value(1)
//         };
//     }

//     _renderRow() {
//         return (
//             { ...this.props.children }
//         );
//     }

//     _onRefresh() {
//         this.setState({ refreshing: true });
//         setTimeout(() => {
//             this.setState({ refreshing: false });
//         }, 1000)
//     }

//     renderSectionHeader() {
//         return (
//             <Animated.View style={{opacity: this.state.fadeAnims}}>
//                 <View>
//                     <ViewHeader />
//                 </View>
//             </Animated.View>
//         );
//     }

//     _onTouchMove(e: any) {

//         const offserY = e.nativeEvent.contentOffset.y;
//         this.setState({ offserY: offserY })

//         if (offserY > 0) {
//             this.setState({ showHeight: true })
//         } else {
//             this.setState({ showHeight: false })
//         }

//     }

//     _onScrollAnimationEnd(e: any) {
//         this.setState({ offserY: 0 })
//     }

//     componentDidMount() {
//         Animated.sequence([
//             Animated.timing(this.state.fadeAnim, {
//                 toValue: 1,// 起始速度，必填参数。
//                 duration: 100
//             }),
//             Animated.timing(this.state.fadeAnims, {
//                 toValue: 0,// 起始速度，必填参数。
//                 duration: 100
//             }),
//         ]).start();//开始
//     }

//     render() {
//         const { children, style } = this.props;
//         const { showHeight } = this.state;
//         return (
//             <View>
//                 {!showHeight ?
//                     <Animated.View style={{opacity: this.state.fadeAnim}}>
//                         <ViewHeader />
//                     </Animated.View>
//                     : null}

//                 <View style={style}>
//                     <ListView
//                         refreshControl={
//                             <RefreshControl
//                                 refreshing={this.state.refreshing}
//                                 title={this.state.refreshing ? '拼命加载中....' : '加载完毕....'}
//                                 titleColor="#00ff00"
//                                 onRefresh={() => this._onRefresh()}
//                                 colors={['#ff0000', '#00ff00', '#0000ff']}
//                                 progressBackgroundColor="#ffffff"
//                             />
//                         }
//                         dataSource={this.state.dataSource}
//                         renderRow={() => this._renderRow()}
//                         scrollEventThrottle={1000}
//                         renderSectionHeader={showHeight ? () => this.renderSectionHeader() : undefined}
//                         onScroll={this._onTouchMove.bind(this)}
//                         onResponderGrant={this._onScrollAnimationEnd.bind(this)}
//                     />
//                 </View>
//             </View>

//         )
//     }
// }


import * as React from 'react';

import { ListView, View, Text, RefreshControl, Animated } from 'react-native';
import { ViewHeader } from './../components/header';

interface props {
    children: any;
    style?: any;
}

interface State {
    children: any;
    dataSource: any;
    style?: any;
    refreshing: boolean,
    showHeight: boolean,
    yOffset: any,
    offserY: number
}

export default class ListViewContent extends React.Component<props, State> {

    constructor(props: any) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        this.state = {
            children: '',
            dataSource: ds.cloneWithRows(['1']),
            style: {},
            refreshing: false,
            showHeight: false,
            yOffset: new Animated.Value(1.0),
            offserY: 0
        };
    }

    _renderRow() {
        return (
            { ...this.props.children }
        );
    }

    _onRefresh() {
        this.setState({ refreshing: true });
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 1000)
    }

    renderSectionHeader() {
        return (
            <Animated.View style={{opacity:this.state.yOffset.interpolate({//映射到0.0,1.0之间
                inputRange: [0, 500],
                outputRange: [1.0, 0.0]
              }),}}>
                <View>
                    <ViewHeader style={{top: this.state.offserY}} />
                </View>
            </Animated.View>
        );
    }

    _onTouchMove(e: any) {

        let offserY = e.nativeEvent.contentOffset.y;

        console.log(offserY,'==')
        if (offserY >= 0) {
            offserY = 0;
            
        }
        this.setState({offserY: offserY})
        // console.log(offserY)
        

        Animated.event(
            [{ nativeEvent: { contentOffset: { y: offserY } } }]
        )
    }

    render() {
        const { children, style } = this.props;
        const { showHeight, offserY } = this.state;
        return (
            <View>
                <View style={style}>
                    <ListView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                title={this.state.refreshing ? '拼命加载中....' : '加载完毕....'}
                                titleColor="#00ff00"
                                onRefresh={() => this._onRefresh()}
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                progressBackgroundColor="#ffffff"
                            />
                        }
                        dataSource={this.state.dataSource}
                        renderRow={() => this._renderRow()}
                        scrollEventThrottle={1000}
                        renderSectionHeader={() => this.renderSectionHeader()}
                        onScroll={this._onTouchMove.bind(this)}
                            
                    />
                </View>
            </View>

        )
    }
}
